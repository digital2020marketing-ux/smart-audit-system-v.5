import React from 'react';
import { ViewMode } from '../types';
import { 
  ShieldCheck, 
  BookOpen, 
  Headphones, 
  FileSpreadsheet, 
  Bot, 
  Award, 
  Heart,
  ChevronRight,
  Layers,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewMode) => void;
  onOpenOfflineModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenOfflineModal
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Brand & Developer Info */}
          <div className="space-y-2.5 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-amber-500 flex items-center justify-center text-slate-950 font-black text-xs">
                SB
              </div>
              <span className="font-extrabold text-sm text-white tracking-tight">
                SmartBook<span className="text-amber-500">.Id</span>
              </span>
            </div>
            <p className="text-slate-400 leading-snug text-[11px]">
              Platform pembelajaran interaktif terintegrasi untuk menguasai <strong>Audit Mutu Internal ISO 9001:2015</strong> secara profesional.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px]">
              <span className="text-slate-500 block text-[10px]">Pengembang Sistem:</span>
              <strong className="text-amber-400 font-bold block text-xs mt-0.5">
                Dede Hery Suryana, AT
              </strong>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Menu Utama Portal
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <button onClick={() => onNavigate('landing')} className="hover:text-amber-400 transition">
                  Panduan Penggunaan Awal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dashboard')} className="hover:text-amber-400 transition">
                  Akses Produk (Dashboard)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('modules')} className="hover:text-amber-400 transition">
                  9 Modul Ebook &amp; Audiobook
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('worksheets')} className="hover:text-amber-400 transition">
                  7 Worksheet &amp; Formulir AMI
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-tools')} className="hover:text-amber-400 transition">
                  AI Generate &amp; Asisten AMI-GPT
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('evaluation')} className="hover:text-amber-400 transition">
                  Pre-Test &amp; Post-Test Sertifikasi
                </button>
              </li>
            </ul>
          </div>

          {/* Ringkasan Konten Asset */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Total Konten Terintegrasi
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-[11px]">
              <div className="bg-slate-900/80 p-1.5 rounded-lg border border-slate-800/80">
                <span className="text-amber-400 font-bold block text-xs">9 Modul</span>
                <span className="text-slate-400 text-[10px]">Ebook PDF</span>
              </div>
              <div className="bg-slate-900/80 p-1.5 rounded-lg border border-slate-800/80">
                <span className="text-emerald-400 font-bold block text-xs">9 Podcast</span>
                <span className="text-slate-400 text-[10px]">Audio MP3</span>
              </div>
              <div className="bg-slate-900/80 p-1.5 rounded-lg border border-slate-800/80">
                <span className="text-cyan-400 font-bold block text-xs">7 Dokumen</span>
                <span className="text-slate-400 text-[10px]">Worksheet AMI</span>
              </div>
              <div className="bg-slate-900/80 p-1.5 rounded-lg border border-slate-800/80">
                <span className="text-purple-400 font-bold block text-xs">3 AI + 1 GPT</span>
                <span className="text-slate-400 text-[10px]">Tools Cerdas</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-500">
              Total &plusmn;73 file asset (Slide, Mindmap, Infografis, Template, Quiz).
            </p>
          </div>

          {/* Offline Access & Support */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Akses Cepat &amp; Offline
            </h4>
            <p className="text-[11px] text-slate-400 leading-snug">
              Simpan link eksternal untuk berjaga-jaga apabila jaringan internet sedang terbatas.
            </p>
            <button
              onClick={onOpenOfflineModal}
              className="w-full bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold px-3 py-1.5 rounded-lg border border-amber-500/30 transition text-center block text-xs"
            >
              Buka 6 Link Akses Offline
            </button>
            <div className="text-[10px] text-slate-500 pt-0.5">
              Key CAPA: <strong className="text-blue-400 font-mono">inayah</strong>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong>SmartBook.Id – SMART AUDIT SYSTEM</strong>. Hak Cipta Dilindungi.
          </div>
          <div className="text-slate-400 font-medium">
            Developed By <strong className="text-slate-200">Dede Hery Suryana, AT</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
