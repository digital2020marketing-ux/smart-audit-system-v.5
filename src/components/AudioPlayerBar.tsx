import React, { useState } from 'react';
import { AuditModule } from '../types';
import { 
  X, 
  SkipBack, 
  SkipForward, 
  Headphones,
  Maximize2,
  Minimize2,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Volume2
} from 'lucide-react';
import { extractDriveFileId, getDrivePreviewUrl, getDriveDownloadUrl, getDriveDirectViewUrl } from '../utils/driveHelper';

interface AudioPlayerBarProps {
  currentModule: AuditModule | null;
  allModules: AuditModule[];
  onSelectModule: (module: AuditModule) => void;
  onClose: () => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  currentModule,
  allModules,
  onSelectModule,
  onClose
}) => {
  // Mode: 'compact' (floating small corner box with drive player) or 'minimized' (tiny badge) or 'bar' (bottom bar)
  const [mode, setMode] = useState<'compact' | 'minimized' | 'bar'>('compact');

  if (!currentModule) return null;

  const currentIndex = allModules.findIndex(m => m.id === currentModule.id);
  const audioPreviewUrl = getDrivePreviewUrl(currentModule.driveUrls.audio);
  const audioDownloadUrl = getDriveDownloadUrl(currentModule.driveUrls.audio);
  const audioDriveUrl = getDriveDirectViewUrl(currentModule.driveUrls.audio);

  const handlePrevModule = () => {
    if (currentIndex > 0) {
      onSelectModule(allModules[currentIndex - 1]);
    }
  };

  const handleNextModule = () => {
    if (currentIndex < allModules.length - 1) {
      onSelectModule(allModules[currentIndex + 1]);
    }
  };

  // 1. MINIMIZED FLOATING BADGE (Extreme minimal, zero obstruction)
  if (mode === 'minimized') {
    return (
      <aside 
        aria-label="Podcast Audio Sedang Berjalan"
        className="fixed bottom-4 right-4 z-40 bg-slate-950/95 backdrop-blur-md text-white border-2 border-amber-500 shadow-2xl rounded-full px-3.5 py-2 flex items-center space-x-2.5 animate-in slide-in-from-bottom-2 duration-150"
      >
        <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
          <Headphones className="w-3.5 h-3.5 animate-pulse" />
        </div>
        <div className="truncate max-w-[140px] sm:max-w-[180px]">
          <span className="text-[9px] text-amber-400 font-mono block font-bold">{currentModule.chapter}</span>
          <span className="text-xs font-bold text-white truncate block">{currentModule.title}</span>
        </div>
        <button
          onClick={() => setMode('compact')}
          className="bg-slate-800 hover:bg-slate-700 text-amber-400 p-1.5 rounded-full transition text-xs font-bold flex items-center space-x-1"
          title="Buka Pemutar Audio"
        >
          <ChevronUp className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-rose-400 p-1 transition"
          title="Tutup Audio"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </aside>
    );
  }

  // 2. COMPACT FLOATING CORNER WIDGET (Recommended: Sits in corner, embeds real Google Drive player so audio plays 100% reliably)
  if (mode === 'compact') {
    return (
      <aside 
        aria-label="Pemutar Audio Google Drive Melayang"
        className="fixed bottom-4 right-4 z-40 bg-slate-950 text-white border-2 border-amber-500 shadow-2xl rounded-2xl overflow-hidden w-[310px] sm:w-[350px] animate-in slide-in-from-bottom-3 duration-200"
      >
        {/* Header bar with controls and module navigation */}
        <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2 min-w-0 pr-1">
            <div className="w-6 h-6 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
              <Headphones className="w-3.5 h-3.5 animate-pulse" />
            </div>
            <div className="truncate">
              <span className="text-[9px] font-bold text-amber-400 font-mono uppercase tracking-wider block">
                {currentModule.chapter} &bull; {currentModule.durationEstimate}
              </span>
              <h4 className="text-xs font-bold text-white truncate" title={currentModule.title}>
                {currentModule.title}
              </h4>
            </div>
          </div>

          {/* Controls: Prev/Next, Minimize, Close */}
          <div className="flex items-center space-x-1 shrink-0">
            <button
              onClick={handlePrevModule}
              disabled={currentIndex === 0}
              className={`p-1 rounded transition ${currentIndex === 0 ? 'text-slate-600' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}
              title="Modul Sebelumnya"
            >
              <SkipBack className="w-3.5 h-3.5" />
            </button>

            <span className="text-[10px] font-mono font-bold text-amber-400/90 px-0.5">
              {currentModule.id}/9
            </span>

            <button
              onClick={handleNextModule}
              disabled={currentIndex === allModules.length - 1}
              className={`p-1 rounded transition ${currentIndex === allModules.length - 1 ? 'text-slate-600' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}
              title="Modul Selanjutnya"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMode('minimized')}
              className="p-1 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded transition ml-1"
              title="Minimalkan agar tidak menghalangi"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded transition"
              title="Tutup Pemutar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Embedded Official Google Drive Audio Player */}
        {/* Sized perfectly (130px) so Google's play button & audio waveform are directly clickable */}
        <div className="w-full h-32 bg-slate-950 relative">
          <iframe
            key={`drive-audio-embed-${currentModule.id}`}
            src={audioPreviewUrl}
            title={`Pemutar Google Drive ${currentModule.title}`}
            className="w-full h-full border-0"
            allow="autoplay; encrypted-media; fullscreen"
            loading="eager"
          />
        </div>

        {/* Footer info & helper links */}
        <div className="bg-slate-900/90 px-2.5 py-1 text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800">
          <span className="text-amber-400/90 font-medium">
            💡 Tekan tombol Play di atas
          </span>
          <div className="flex items-center space-x-2">
            <a
              href={audioDownloadUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-amber-400 flex items-center space-x-0.5 hover:underline"
              title="Unduh file MP3"
            >
              <Download className="w-2.5 h-2.5" />
              <span>Unduh MP3</span>
            </a>
            <a
              href={audioDriveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-amber-400 flex items-center space-x-0.5 hover:underline"
              title="Buka di tab baru Google Drive"
            >
              <ExternalLink className="w-2.5 h-2.5" />
              <span>Drive</span>
            </a>
          </div>
        </div>
      </aside>
    );
  }

  // 3. BOTTOM BAR DOCKED MODE
  return (
    <aside 
      aria-label="Bilah Pemutar Audio"
      className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950 text-white border-t-2 border-amber-500 shadow-2xl p-2"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center space-x-2 w-full md:w-4/12 justify-between md:justify-start">
          <div className="w-7 h-7 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <Headphones className="w-4 h-4 animate-pulse" />
          </div>
          <div className="truncate flex-1 min-w-0 pr-2">
            <span className="text-[9px] font-bold text-amber-400 uppercase font-mono">{currentModule.chapter}</span>
            <h4 className="text-xs font-bold text-white truncate">{currentModule.title}</h4>
          </div>
        </div>

        <div className="w-full md:w-5/12 h-28 bg-slate-900 rounded-lg overflow-hidden border border-slate-800">
          <iframe
            key={`drive-audio-bar-${currentModule.id}`}
            src={audioPreviewUrl}
            title={`Pemutar Audio ${currentModule.title}`}
            className="w-full h-full border-0"
            allow="autoplay; encrypted-media; fullscreen"
          />
        </div>

        <div className="flex items-center justify-end space-x-2 w-full md:w-3/12">
          <button
            onClick={() => setMode('compact')}
            className="bg-slate-800 hover:bg-slate-700 text-amber-400 px-2.5 py-1 rounded text-xs font-bold flex items-center space-x-1"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Mode Melayang Pojok</span>
          </button>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
