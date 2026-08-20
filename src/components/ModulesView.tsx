import React, { useState } from 'react';
import { AuditModule } from '../types';
import { MODULES_DATA } from '../data/modulesData';
import { 
  BookOpen, 
  Headphones, 
  Presentation, 
  Network, 
  Image as ImageIcon, 
  Download, 
  ExternalLink, 
  Maximize2, 
  Minimize2, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Layers,
  Sparkles,
  Info,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { 
  getDrivePreviewUrl, 
  getDriveDownloadUrl, 
  getDriveDirectViewUrl, 
  getDriveThumbnailUrl 
} from '../utils/driveHelper';

interface ModulesViewProps {
  selectedModule: AuditModule;
  onSelectModule: (module: AuditModule, autoPlayAudio?: boolean) => void;
}

type TabType = 'ebook' | 'slide' | 'mindmap' | 'infografis' | 'audio';

export const ModulesView: React.FC<ModulesViewProps> = ({
  selectedModule,
  onSelectModule
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('ebook');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const currentIndex = MODULES_DATA.findIndex(m => m.id === selectedModule.id);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectModule(MODULES_DATA[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < MODULES_DATA.length - 1) {
      onSelectModule(MODULES_DATA[currentIndex + 1]);
    }
  };

  const tabs: { id: TabType; label: string; icon: React.ReactNode; badge: string }[] = [
    { id: 'ebook', label: 'Ebook PDF', icon: <BookOpen className="w-4 h-4" />, badge: 'PDF' },
    { id: 'slide', label: 'Slide Presentasi', icon: <Presentation className="w-4 h-4" />, badge: 'Slide' },
    { id: 'mindmap', label: 'Mindmap', icon: <Network className="w-4 h-4" />, badge: 'PNG' },
    { id: 'infografis', label: 'Infografis', icon: <ImageIcon className="w-4 h-4" />, badge: 'PNG' },
    { id: 'audio', label: 'Podcast Audio', icon: <Headphones className="w-4 h-4" />, badge: 'MP3' },
  ];

  return (
    <div className="space-y-4 pb-20">
      {/* Top Header & Module Carousel selector - High Density */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                {selectedModule.chapter}
              </span>
              {selectedModule.isoClause && (
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 text-amber-600" />
                  <span>{selectedModule.isoClause}</span>
                </span>
              )}
            </div>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              {selectedModule.title}
            </h1>
            <p className="text-xs text-slate-600 mt-0.5">
              {selectedModule.subtitle}
            </p>
          </div>

          {/* Module Prev/Next Buttons */}
          <div className="flex items-center space-x-1.5 shrink-0">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-1.5 px-2.5 rounded-lg border flex items-center space-x-1 text-xs font-bold transition ${
                currentIndex === 0
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-amber-400'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            <span className="text-xs font-mono font-bold text-slate-600 px-1.5">
              {selectedModule.id} / {MODULES_DATA.length}
            </span>

            <button
              onClick={handleNext}
              disabled={currentIndex === MODULES_DATA.length - 1}
              className={`p-1.5 px-2.5 rounded-lg border flex items-center space-x-1 text-xs font-bold transition ${
                currentIndex === MODULES_DATA.length - 1
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-amber-400'
              }`}
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 9 Modules Horizontal Pill Picker */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar border-t border-slate-100">
          {MODULES_DATA.map((m) => {
            const isCurrent = m.id === selectedModule.id;
            return (
              <button
                key={m.id}
                onClick={() => onSelectModule(m)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition flex items-center space-x-1 shrink-0 ${
                  isCurrent
                    ? 'bg-amber-500 text-slate-950 shadow-2xs font-extrabold'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{m.id}. {m.chapter}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Learning Content Area with Tabs - High Density */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden flex flex-col">
        
        {/* Navigation Tabs Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-3 sm:px-4 pt-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-t-lg text-xs font-bold transition border-b-2 ${
                    isActive
                      ? 'bg-white text-amber-800 border-amber-500 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 border-transparent hover:bg-slate-100/70'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span className={`text-[9px] font-mono px-1 py-0.2 rounded font-bold ${
                    isActive ? 'bg-amber-100 text-amber-900' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Action Buttons for currently active tab */}
          <div className="flex items-center space-x-1.5 pb-1 sm:pb-0">
            {/* Fullscreen Button for Visual Content */}
            {(activeTab === 'ebook' || activeTab === 'slide' || activeTab === 'mindmap' || activeTab === 'infografis') && (
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="flex items-center space-x-1 bg-slate-200 hover:bg-slate-300 text-slate-800 px-2.5 py-1 rounded-md text-xs font-semibold transition"
                title="Layar Penuh / Fullscreen"
              >
                {isFullscreen ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
                <span className="hidden sm:inline">{isFullscreen ? 'Kecilkan' : 'Layar Penuh'}</span>
              </button>
            )}

            {/* Direct Open in Drive */}
            <a
              href={getDriveDirectViewUrl(
                activeTab === 'ebook' ? selectedModule.driveUrls.ebook :
                activeTab === 'slide' ? selectedModule.driveUrls.slide :
                activeTab === 'mindmap' ? selectedModule.driveUrls.mindmap :
                activeTab === 'infografis' ? selectedModule.driveUrls.infografis :
                selectedModule.driveUrls.audio
              )}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1 bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-md text-xs font-semibold transition border border-slate-300"
            >
              <ExternalLink className="w-3 h-3" />
              <span className="hidden sm:inline">Buka Drive</span>
            </a>

            {/* Direct Download Button */}
            <a
              href={getDriveDownloadUrl(
                activeTab === 'ebook' ? selectedModule.driveUrls.ebook :
                activeTab === 'slide' ? selectedModule.driveUrls.slide :
                activeTab === 'mindmap' ? selectedModule.driveUrls.mindmap :
                activeTab === 'infografis' ? selectedModule.driveUrls.infografis :
                selectedModule.driveUrls.audio
              )}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1 bg-amber-500 hover:bg-amber-400 text-slate-950 px-2.5 py-1 rounded-md text-xs font-bold transition"
            >
              <Download className="w-3 h-3" />
              <span>Unduh File</span>
            </a>
          </div>
        </div>

        {/* Tab Content Display Area */}
        <div className={`p-3 sm:p-4 transition-all pb-24 ${isFullscreen ? 'fixed inset-0 z-50 bg-white p-4 overflow-auto' : ''}`}>
          
          {isFullscreen && (
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">{selectedModule.chapter}</span>
                <h3 className="text-base font-bold text-slate-900">{selectedModule.title}</h3>
                <span className="text-xs text-slate-500 uppercase font-mono">({activeTab})</span>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1 transition"
              >
                <Minimize2 className="w-3.5 h-3.5" />
                <span>Tutup Layar Penuh</span>
              </button>
            </div>
          )}

          {/* 1. EBOOK VIEW */}
          {activeTab === 'ebook' && (
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-900">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>
                    <strong>Tips Membaca:</strong> Anda dapat membaca Ebook interaktif di bawah ini sembari mendengarkan Podcast Audio.
                  </span>
                </div>
                <button
                  onClick={() => onSelectModule(selectedModule, true)}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2.5 py-1 rounded-md text-xs flex items-center justify-center space-x-1 transition shrink-0 shadow-xs"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Putar Podcast {selectedModule.chapter}</span>
                </button>
              </div>

              {/* Iframe Ebook Renderer */}
              <div className={`w-full ${isFullscreen ? 'h-[calc(100vh-120px)]' : 'h-[620px]'} rounded-xl border border-slate-200 overflow-hidden bg-slate-100 shadow-inner relative`}>
                <iframe
                  src={getDrivePreviewUrl(selectedModule.driveUrls.ebook, 'ebook')}
                  title={`Ebook ${selectedModule.title}`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allow="autoplay"
                />
              </div>
            </div>
          )}

          {/* 2. SLIDE PRESENTASI VIEW */}
          {activeTab === 'slide' && (
            <div className="space-y-3">
              <div className="p-2.5 bg-sky-50 rounded-xl border border-sky-200/80 text-xs text-sky-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <Presentation className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                  <span>
                    Slide Presentasi resmi untuk ulasan materi visual ringkas.
                  </span>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => onSelectModule(selectedModule, true)}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2.5 py-1 rounded-md text-xs flex items-center space-x-1 transition shadow-xs"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Dengar Podcast</span>
                  </button>
                  <a
                    href={getDriveDownloadUrl(selectedModule.driveUrls.slide)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-800 font-bold hover:underline text-xs"
                  >
                    Unduh PDF
                  </a>
                </div>
              </div>

              {/* Iframe Slide Renderer */}
              <div className={`w-full ${isFullscreen ? 'h-[calc(100vh-120px)]' : 'h-[580px]'} rounded-xl border border-slate-200 overflow-hidden bg-slate-100 shadow-inner`}>
                <iframe
                  src={getDrivePreviewUrl(selectedModule.driveUrls.slide, 'slide')}
                  title={`Slide ${selectedModule.title}`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* 3. MINDMAP VIEW */}
          {activeTab === 'mindmap' && (
            <div className="space-y-3">
              <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200/80 text-xs text-emerald-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <Network className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>
                    Peta konsep (Mindmap) menyeluruh yang merangkum struktur berpikir dan alur klausul pada bab ini.
                  </span>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => onSelectModule(selectedModule, true)}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2.5 py-1 rounded-md text-xs flex items-center space-x-1 transition shadow-xs"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Dengar Podcast</span>
                  </button>
                  <a
                    href={getDriveDownloadUrl(selectedModule.driveUrls.mindmap)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-800 font-bold hover:underline text-xs"
                  >
                    Unduh PNG
                  </a>
                </div>
              </div>

              <div className={`w-full ${isFullscreen ? 'h-[calc(100vh-120px)]' : 'h-[540px]'} rounded-xl border border-slate-200 overflow-hidden bg-slate-900 flex items-center justify-center p-2 relative group`}>
                <iframe
                  src={getDrivePreviewUrl(selectedModule.driveUrls.mindmap)}
                  title={`Mindmap ${selectedModule.title}`}
                  className="w-full h-full border-0 rounded-lg bg-white"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* 4. INFOGRAFIS VIEW */}
          {activeTab === 'infografis' && (
            <div className="space-y-3">
              <div className="p-2.5 bg-purple-50 rounded-xl border border-purple-200/80 text-xs text-purple-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <ImageIcon className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                  <span>
                    Infografis visual terstruktur untuk memudahkan pemahaman prinsip audit dan implementasi nyata.
                  </span>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => onSelectModule(selectedModule, true)}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2.5 py-1 rounded-md text-xs flex items-center space-x-1 transition shadow-xs"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Dengar Podcast</span>
                  </button>
                  <a
                    href={getDriveDownloadUrl(selectedModule.driveUrls.infografis)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-800 font-bold hover:underline text-xs"
                  >
                    Unduh PNG
                  </a>
                </div>
              </div>

              <div className={`w-full ${isFullscreen ? 'h-[calc(100vh-120px)]' : 'h-[540px]'} rounded-xl border border-slate-200 overflow-hidden bg-slate-900 flex items-center justify-center p-2`}>
                <iframe
                  src={getDrivePreviewUrl(selectedModule.driveUrls.infografis)}
                  title={`Infografis ${selectedModule.title}`}
                  className="w-full h-full border-0 rounded-lg bg-white"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* 5. AUDIO PODCAST TAB */}
          {activeTab === 'audio' && (
            <div className="space-y-4 py-2">
              <div className="max-w-xl mx-auto bg-slate-900 rounded-2xl p-5 text-white shadow-md text-center space-y-3.5 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center">
                  <Headphones className="w-6 h-6 animate-pulse" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700 font-mono">
                    Podcast Ulasan &bull; {selectedModule.chapter}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    {selectedModule.title}
                  </h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    {selectedModule.subtitle} &bull; Estimasi: <strong className="text-amber-400">{selectedModule.durationEstimate}</strong>
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                  <button
                    onClick={() => onSelectModule(selectedModule, true)}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-3.5 py-1.5 rounded-lg text-xs shadow-xs flex items-center space-x-1.5 transition"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Aktifkan Audio Bar Melayang</span>
                  </button>

                  <a
                    href={getDriveDownloadUrl(selectedModule.driveUrls.audio)}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-3.5 py-1.5 rounded-lg text-xs border border-slate-700 flex items-center space-x-1.5 transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh MP3</span>
                  </a>

                  <a
                    href={getDriveDirectViewUrl(selectedModule.driveUrls.audio)}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold px-3 py-1.5 rounded-lg text-xs border border-slate-700 flex items-center space-x-1 transition"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Buka di Drive</span>
                  </a>
                </div>
              </div>

              {/* Official Google Drive Audio Player Iframe */}
              <div className="w-full max-w-2xl mx-auto rounded-xl border border-slate-200 overflow-hidden bg-slate-900 shadow-inner">
                <div className="bg-slate-800 px-3 py-1.5 text-[11px] text-slate-300 flex items-center justify-between border-b border-slate-700">
                  <span className="font-semibold flex items-center space-x-1">
                    <Headphones className="w-3.5 h-3.5 text-amber-400" />
                    <span>Pemutar Podcast Google Drive Resmi</span>
                  </span>
                  <span className="text-[10px] text-amber-400 font-mono">Format: MP3 High Quality</span>
                </div>
                <div className="w-full h-44 sm:h-52 bg-slate-950">
                  <iframe
                    key={`module-audio-${selectedModule.id}`}
                    src={getDrivePreviewUrl(selectedModule.driveUrls.audio)}
                    title={`Audio Player ${selectedModule.title}`}
                    className="w-full h-full border-0"
                    allow="autoplay; encrypted-media; fullscreen"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Module Summary & Key Takeaways Card - High Density */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center space-x-2.5 border-b border-slate-100 pb-3">
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Rangkuman &amp; Poin Kunci {selectedModule.chapter}
            </h3>
            <p className="text-[11px] text-slate-500">
              Perspektif ISO 9001:2015 &amp; ISO 19011:2018
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-700 leading-relaxed">
          {selectedModule.description}
        </p>

        <div className="space-y-2">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Target Capaian Pembelajaran:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {selectedModule.keyTakeaways.map((point, idx) => (
              <div 
                key={idx}
                className="p-2.5 rounded-xl bg-stone-50 border border-slate-200/80 flex items-start space-x-2 text-xs text-slate-700"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span className="leading-snug text-[11px]">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Download Assets Quick Grid - High Density */}
        <div className="pt-3 border-t border-slate-100">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            Arsip File Lengkap {selectedModule.chapter} (Unduh Langsung):
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            <a
              href={getDriveDownloadUrl(selectedModule.driveUrls.ebook)}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-400 transition text-center text-xs font-bold text-slate-700 hover:text-amber-800 flex flex-col items-center justify-center space-y-1"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-[11px]">Ebook PDF</span>
            </a>

            <a
              href={getDriveDownloadUrl(selectedModule.driveUrls.audio)}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-400 transition text-center text-xs font-bold text-slate-700 hover:text-emerald-800 flex flex-col items-center justify-center space-y-1"
            >
              <Headphones className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[11px]">Audio MP3</span>
            </a>

            <a
              href={getDriveDownloadUrl(selectedModule.driveUrls.slide)}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-400 transition text-center text-xs font-bold text-slate-700 hover:text-sky-800 flex flex-col items-center justify-center space-y-1"
            >
              <Presentation className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-[11px]">Slide PDF</span>
            </a>

            <a
              href={getDriveDownloadUrl(selectedModule.driveUrls.mindmap)}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-400 transition text-center text-xs font-bold text-slate-700 hover:text-purple-800 flex flex-col items-center justify-center space-y-1"
            >
              <Network className="w-3.5 h-3.5 text-purple-600" />
              <span className="text-[11px]">Mindmap PNG</span>
            </a>

            <a
              href={getDriveDownloadUrl(selectedModule.driveUrls.infografis)}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-400 transition text-center text-xs font-bold text-slate-700 hover:text-rose-800 flex flex-col items-center justify-center space-y-1"
            >
              <ImageIcon className="w-3.5 h-3.5 text-rose-600" />
              <span className="text-[11px]">Infografis PNG</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
