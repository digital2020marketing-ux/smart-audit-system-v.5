import React from 'react';
import { ViewMode, AuditModule } from '../types';
import { MODULES_DATA } from '../data/modulesData';
import { WORKSHEETS_DATA } from '../data/worksheetsData';
import { AI_TOOLS_DATA } from '../data/aiToolsData';
import { AUDIT_PILLARS } from '../data/guidesData';
import { 
  BookOpen, 
  Headphones, 
  FileSpreadsheet, 
  Bot, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Download, 
  Play, 
  Copy, 
  Laptop, 
  ShieldCheck, 
  Layers,
  ChevronRight,
  Clock,
  KeyRound,
  FileCheck2,
  FileText
} from 'lucide-react';
import { getDriveDirectViewUrl, getDriveDownloadUrl } from '../utils/driveHelper';
import { copyToClipboard } from '../utils/clipboardHelper';

interface DashboardProps {
  onNavigate: (view: ViewMode) => void;
  onSelectModule: (module: AuditModule, autoPlay?: boolean) => void;
  onOpenOfflineModal: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onNavigate,
  onSelectModule,
  onOpenOfflineModal
}) => {
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const handleCopy = async (text: string, label: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setToastMessage(`Tautan ${label} berhasil disalin!`);
    } else {
      setToastMessage(`Gagal menyalin ${label}. Silakan salin manual.`);
    }
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="space-y-6 pb-16 relative">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-16 right-4 z-50 bg-slate-900 text-amber-300 border border-amber-500/40 shadow-xl px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
      {/* Top Banner / Header - High Density Slate Card */}
      <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 text-white border border-slate-800 shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 bg-amber-500/15 text-amber-300 px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-amber-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Akses Produk – SMART AUDIT SYSTEM</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Premium Dashboard Pembelajaran AMI
            </h1>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Selamat datang di portal terpadu Audit Mutu Internal ISO 9001:2015. Akses seluruh modul teori, ulasan podcast, worksheet operasional, dan AI tools di bawah ini.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              onClick={onOpenOfflineModal}
              className="bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-xs transition flex items-center space-x-1.5 border border-amber-400/30"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Salin 6 Link Penting</span>
            </button>
            <button
              onClick={() => onNavigate('evaluation')}
              className="bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold px-3.5 py-2 rounded-lg border border-slate-700 transition flex items-center space-x-1.5"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Sertifikasi Mandiri</span>
            </button>
          </div>
        </div>

        {/* Ringkasan Konten Stats Bar - High Density Matrix */}
        <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-center">
          <div 
            onClick={() => onNavigate('modules')} 
            className="bg-slate-800/80 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-700/80 cursor-pointer transition"
          >
            <div className="text-lg font-black text-amber-400 font-mono">9</div>
            <div className="text-[10px] text-slate-300 font-medium">Modul Ebook</div>
          </div>

          <div 
            onClick={() => onNavigate('modules')} 
            className="bg-slate-800/80 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-700/80 cursor-pointer transition"
          >
            <div className="text-lg font-black text-emerald-400 font-mono">9</div>
            <div className="text-[10px] text-slate-300 font-medium">Podcast Audio</div>
          </div>

          <div 
            onClick={() => onNavigate('modules')} 
            className="bg-slate-800/80 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-700/80 cursor-pointer transition"
          >
            <div className="text-lg font-black text-sky-400 font-mono">9</div>
            <div className="text-[10px] text-slate-300 font-medium">Slide Presentasi</div>
          </div>

          <div 
            onClick={() => onNavigate('worksheets')} 
            className="bg-slate-800/80 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-700/80 cursor-pointer transition"
          >
            <div className="text-lg font-black text-cyan-400 font-mono">7</div>
            <div className="text-[10px] text-slate-300 font-medium">Worksheet AMI</div>
          </div>

          <div 
            onClick={() => onNavigate('ai-tools')} 
            className="bg-slate-800/80 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-700/80 cursor-pointer transition col-span-2 sm:col-span-1 lg:col-span-1"
          >
            <div className="text-lg font-black text-purple-400 font-mono">4</div>
            <div className="text-[10px] text-slate-300 font-medium">4 AI Tools &amp; Asisten</div>
          </div>
        </div>
      </div>

      {/* 6 Alur Utama Audit Mutu Internal - High Density */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center space-x-2">
              <span>Alur Pembelajaran 6 Tahap</span>
              <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                Siklus Berkelanjutan
              </span>
            </h2>
            <p className="text-[11px] text-slate-500 mt-0.5">
              BELAJAR → LATIHAN → PRAKTIK → AI TOOLS → WORKSHEET → EVALUASI
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {AUDIT_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.name}
              onClick={() => onNavigate(pillar.tab as ViewMode)}
              className="bg-white rounded-xl p-3.5 border border-slate-200 hover:border-amber-400 shadow-2xs hover:shadow-xs transition cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-black text-slate-400">0{idx + 1}</span>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pillar.color}`} />
                </div>
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition">
                  {pillar.name}
                </h3>
                <p className="text-[10px] font-bold text-amber-700 mt-0.5">{pillar.subtitle}</p>
                <p className="text-[10px] text-slate-500 mt-1 leading-snug line-clamp-2">{pillar.description}</p>
              </div>
              <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-end text-[10px] font-bold text-amber-600 group-hover:translate-x-0.5 transition">
                <span>Buka</span>
                <ChevronRight className="w-3 h-3 ml-0.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid: 9 Modul Showcase & AI Tools Launcher */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: 9 Modul Pembelajaran List */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <h2 className="text-base font-extrabold text-slate-900">
                9 Modul Ebook &amp; Audiobook
              </h2>
            </div>
            <button
              onClick={() => onNavigate('modules')}
              className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center space-x-1"
            >
              <span>Lihat Detail Modul</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {MODULES_DATA.map((mod) => (
              <div
                key={mod.id}
                className="bg-white rounded-xl p-3.5 border border-slate-200 hover:border-amber-400 shadow-2xs hover:shadow-xs transition flex flex-col justify-between group space-y-2.5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60">
                      {mod.chapter}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {mod.durationEstimate}
                    </span>
                  </div>
                  <h3 
                    onClick={() => {
                      onSelectModule(mod, false);
                      onNavigate('modules');
                    }}
                    className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition mt-1 cursor-pointer line-clamp-1"
                  >
                    {mod.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                    {mod.subtitle}
                  </p>
                </div>

                {/* Bottom Quick Controls */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectModule(mod, true)}
                    className="flex-1 bg-amber-50 hover:bg-amber-100 text-amber-900 text-[11px] font-bold py-1 px-2 rounded-md flex items-center justify-center space-x-1 transition border border-amber-200/60"
                  >
                    <Play className="w-2.5 h-2.5 fill-current text-amber-600" />
                    <span>Putar Audio</span>
                  </button>

                  <button
                    onClick={() => {
                      onSelectModule(mod, false);
                      onNavigate('modules');
                    }}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold py-1 px-2.5 rounded-md flex items-center space-x-1 transition"
                  >
                    <BookOpen className="w-2.5 h-2.5" />
                    <span>Baca</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: AI Power Hub & Worksheet Quick Access */}
        <div className="space-y-4">
          
          {/* AI Tools Power Hub Card */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-indigo-600" />
                <h3 className="text-xs font-bold text-slate-900">
                  AI Power Hub
                </h3>
              </div>
              <span className="text-[9px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                3 AI + 1 GPT
              </span>
            </div>

            {/* Warning Note */}
            <div className="bg-amber-50 border border-amber-200/80 rounded-lg p-2.5 text-[10px] text-amber-900 flex items-start space-x-1.5">
              <Laptop className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              <span>PLOR &amp; CAPA disarankan via <strong>Laptop / PC</strong> untuk pengisian form maksimal.</span>
            </div>

            <div className="space-y-2">
              {AI_TOOLS_DATA.map((tool) => (
                <div 
                  key={tool.id}
                  className="p-2.5 rounded-lg border border-slate-100 hover:border-slate-300 bg-stone-50/60 hover:bg-stone-50 transition space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[11px] font-bold text-slate-900 truncate pr-2">
                      {tool.name}
                    </h4>
                    {tool.accessKey && (
                      <span className="text-[9px] font-mono bg-blue-100 text-blue-800 px-1 py-0.2 rounded font-bold">
                        Key: {tool.accessKey}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-500 line-clamp-1">
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-between pt-0.5">
                    <button
                      onClick={() => handleCopy(tool.url, tool.name)}
                      className="text-[10px] text-slate-500 hover:text-slate-800 font-medium flex items-center space-x-1"
                    >
                      <Copy className="w-2.5 h-2.5" />
                      <span>Salin Link</span>
                    </button>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] font-bold text-amber-600 hover:text-amber-700 flex items-center space-x-1"
                    >
                      <span>Buka Alat</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('ai-tools')}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2 rounded-lg transition flex items-center justify-center space-x-1"
            >
              <span>Menu Lengkap AI Tools</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Worksheets Checklist Card */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center space-x-2">
                <FileSpreadsheet className="w-4 h-4 text-cyan-600" />
                <h3 className="text-xs font-bold text-slate-900">
                  7 Formulir Operasional AMI
                </h3>
              </div>
              <button
                onClick={() => onNavigate('worksheets')}
                className="text-[11px] font-bold text-cyan-700 hover:text-cyan-800"
              >
                Semua
              </button>
            </div>

            <div className="space-y-1.5">
              {WORKSHEETS_DATA.slice(0, 4).map((ws) => (
                <div 
                  key={ws.code}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-cyan-50/50 border border-slate-200/60 transition text-xs"
                >
                  <div className="truncate pr-2">
                    <span className="font-mono font-bold text-cyan-800 block text-[9px]">
                      {ws.code}
                    </span>
                    <span className="font-semibold text-slate-800 truncate block text-[11px]">
                      {ws.title}
                    </span>
                  </div>
                  <a
                    href={ws.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded-md bg-white border border-slate-200 hover:border-cyan-400 text-slate-600 hover:text-cyan-700 transition"
                    title="Buka Dokumen Template"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('worksheets')}
              className="w-full bg-cyan-50 hover:bg-cyan-100 text-cyan-900 text-xs font-bold py-1.5 rounded-lg transition border border-cyan-200/80 text-center block"
            >
              Lihat 7 Formulir Lengkap
            </button>
          </div>

        </div>

      </div>

      {/* Bottom Evaluation Banner - High Density */}
      <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 text-white shadow-sm border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">
              Uji Kompetensi: Pre-Test &amp; Post-Test Sertifikasi
            </h3>
            <p className="text-[11px] text-slate-300 mt-0.5 max-w-xl">
              Ukur pemahaman awal sebelum memulai dan ikuti Post-test untuk evaluasi akhir serta sertifikasi mandiri.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => onNavigate('evaluation')}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-4 py-2 rounded-lg text-xs shadow-xs transition flex items-center space-x-1"
          >
            <span>Buka Halaman Ujian</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
