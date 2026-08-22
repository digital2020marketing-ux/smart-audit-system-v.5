import React, { useState } from 'react';
import { AI_TOOLS_DATA } from '../data/aiToolsData';
import { 
  ExternalLink, 
  Copy, 
  Check, 
  Laptop,
  Monitor
} from 'lucide-react';
import { copyToClipboard } from '../utils/clipboardHelper';

export const AIToolsView: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyUrl = async (url: string, id: string) => {
    const success = await copyToClipboard(url);
    if (success) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <div className="space-y-4 pb-20">
      {/* Header - High Density */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-2 py-0.5 rounded">
                AI Powered Audit Tools
              </span>
              <span className="text-[11px] text-slate-500 font-mono font-bold">
                5 AI Tools, Generator &amp; Panduan
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              AI Generator, Panduan &amp; Asisten Audit Mutu Internal
            </h1>
            <p className="text-xs text-slate-600 mt-0.5 max-w-2xl leading-relaxed">
              Manfaatkan teknologi kecerdasan buatan terdedikasi untuk konsultasi pedoman ISO 19011, pembuatan checklist, simulasi tanya jawab, penulisan temuan PLOR, dan formulasi tindakan perbaikan CAPA.
            </p>
          </div>
        </div>

        {/* Device Recommendation Alert Banner */}
        <div className="p-3 bg-amber-50 border border-amber-300/80 rounded-xl text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
          <div className="flex items-start space-x-2.5">
            <div className="p-1.5 bg-amber-500 text-slate-950 rounded-lg font-bold shrink-0 mt-0.5 sm:mt-0">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-amber-900">
                Pemberitahuan Khusus Perangkat (Laptop/PC Disarankan):
              </h4>
              <p className="text-[11px] text-amber-800 mt-0.5">
                <strong>CAPA Generator</strong> sebaiknya digunakan melalui <strong>laptop/PC</strong> karena layout form dan tabel analisis pada smartphone kurang maksimal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 AI Tools Cards Grid - High Density */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {AI_TOOLS_DATA.map((tool) => (
          <div
            key={tool.id}
            className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-purple-400 shadow-2xs hover:shadow-xs transition flex flex-col justify-between group space-y-3.5"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-purple-300">
                  {tool.platform}
                </span>
                <span className="text-[9px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.2 rounded border border-slate-200">
                  {tool.badge}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-purple-700 transition">
                {tool.name}
              </h3>

              <p className="text-xs text-slate-600 leading-snug">
                {tool.description}
              </p>

              {/* Function list */}
              <div className="space-y-1 pt-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Kemampuan Utama:
                </span>
                {tool.functions.map((fn, idx) => (
                  <div key={idx} className="flex items-start space-x-1.5 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                    <span className="text-[11px]">{fn}</span>
                  </div>
                ))}
              </div>

              {/* PC / Laptop Notice Box (Hanya untuk tools yang memerlukan layar lebar seperti PLOR & CAPA) */}
              {tool.requiresDesktop && (
                <div className="p-2.5 bg-blue-50/90 border border-blue-200 rounded-lg flex items-center space-x-2 text-[11px] text-blue-950 mt-2">
                  <Monitor className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>
                    <strong>Rekomendasi:</strong> Sebaiknya dibuka menggunakan <strong>PC atau Laptop</strong>.
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => copyUrl(tool.url, tool.id)}
                className="bg-stone-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 border border-slate-200"
              >
                {copiedId === tool.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Tautan Disalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Link</span>
                  </>
                )}
              </button>

              <a
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="bg-purple-700 hover:bg-purple-800 text-white font-bold px-3.5 py-1.5 rounded-lg text-xs shadow-2xs transition flex items-center space-x-1.5"
              >
                <span>Buka Alat AI</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

