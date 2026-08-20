import React, { useState } from 'react';
import { WorksheetItem } from '../types';
import { WORKSHEETS_DATA } from '../data/worksheetsData';
import { 
  FileSpreadsheet, 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Filter, 
  Layers, 
  Eye, 
  Search, 
  ShieldCheck
} from 'lucide-react';
import { getDrivePreviewUrl, getDriveDownloadUrl, getDriveDirectViewUrl } from '../utils/driveHelper';

export const WorksheetsView: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewWorksheet, setPreviewWorksheet] = useState<WorksheetItem | null>(null);

  const stages = ['Semua', 'Persiapan', 'Pelaksanaan', 'Pelaporan', 'Tindak Lanjut'];

  const filteredWorksheets = WORKSHEETS_DATA.filter(ws => {
    const matchesStage = selectedStage === 'Semua' || ws.stage === selectedStage;
    const matchesSearch = ws.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ws.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ws.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStage && matchesSearch;
  });

  return (
    <div className="space-y-4 pb-20">
      {/* Header - High Density */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100 px-2 py-0.5 rounded">
                7 Dokumen Operasional
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                Format Google Docs &amp; Sheets
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              Worksheet &amp; Formulir Audit Mutu Internal
            </h1>
            <p className="text-xs text-slate-600 mt-0.5 max-w-2xl">
              Template formulir standar dengan kode referensi <strong>FR.AMI.02.XX</strong> yang siap diunduh dan digunakan untuk pelaksanaan audit organisasi Anda.
            </p>
          </div>

          <div className="flex items-center space-x-1.5 shrink-0">
            <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
              Total 7 Dokumen
            </span>
          </div>
        </div>

        {/* Filter & Search Controls */}
        <div className="pt-2.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center space-x-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <Filter className="w-3.5 h-3.5 text-slate-400 hidden sm:block mr-1" />
            {stages.map((stage) => (
              <button
                key={stage}
                onClick={() => setSelectedStage(stage)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                  selectedStage === stage
                    ? 'bg-cyan-700 text-white shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {stage}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-60">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
            <input
              type="text"
              placeholder="Cari formulir / kode..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-2.5 py-1 rounded-lg border border-slate-200 bg-stone-50 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>
        </div>
      </div>

      {/* 7 Worksheets Cards Grid - High Density */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredWorksheets.map((ws) => {
          const isSpreadsheet = ws.type === 'Spreadsheet';
          return (
            <div
              key={ws.code}
              className="bg-white rounded-xl p-3.5 border border-slate-200 hover:border-cyan-400 shadow-2xs hover:shadow-xs transition flex flex-col justify-between group space-y-2.5"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-black px-2 py-0.5 rounded bg-slate-900 text-cyan-300">
                    {ws.code}
                  </span>
                  <span className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded ${
                    isSpreadsheet 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    {ws.type}
                  </span>
                </div>

                <div className="flex items-center space-x-1 text-[10px] font-semibold text-slate-500">
                  <Layers className="w-3 h-3 text-cyan-600" />
                  <span>Tahap: {ws.stage}</span>
                </div>

                <h3 className="text-xs font-bold text-slate-900 group-hover:text-cyan-800 transition">
                  {ws.title}
                </h3>

                <p className="text-[11px] text-slate-600 line-clamp-3 leading-snug">
                  {ws.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-1.5">
                <button
                  onClick={() => setPreviewWorksheet(ws)}
                  className="flex-1 bg-stone-100 hover:bg-cyan-50 text-slate-700 hover:text-cyan-800 text-[11px] font-bold py-1.5 px-2 rounded-lg transition flex items-center justify-center space-x-1 border border-slate-200"
                >
                  <Eye className="w-3 h-3 text-cyan-600" />
                  <span>Pratinjau</span>
                </button>

                <a
                  href={ws.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-cyan-700 hover:bg-cyan-800 text-white text-[11px] font-bold py-1.5 px-2 rounded-lg transition flex items-center justify-center space-x-1 shadow-2xs"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Buka Template</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Preview Modal for Worksheet - High Density */}
      {previewWorksheet && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3">
          <div className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-slate-700">
            <div className="p-3 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold text-cyan-400">{previewWorksheet.code}</span>
                <h3 className="text-sm font-bold text-white">{previewWorksheet.title}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href={previewWorksheet.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold px-2.5 py-1 rounded-md flex items-center space-x-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Buka di Google {previewWorksheet.type}</span>
                </a>
                <button
                  onClick={() => setPreviewWorksheet(null)}
                  className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 text-sm font-bold"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="flex-1 bg-slate-100 p-1.5 overflow-hidden">
              <iframe
                src={getDrivePreviewUrl(previewWorksheet.url)}
                title={previewWorksheet.title}
                className="w-full h-full border-0 rounded-xl bg-white shadow-inner"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
