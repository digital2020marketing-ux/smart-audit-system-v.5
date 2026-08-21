import React, { useState } from 'react';
import { OFFLINE_COPY_LINKS } from '../data/aiToolsData';
import { 
  Copy, 
  Check, 
  X, 
  DownloadCloud, 
  ShieldCheck, 
  Smartphone, 
  Laptop, 
  ExternalLink, 
  Share2,
  FileDown
} from 'lucide-react';
import { copyToClipboard } from '../utils/clipboardHelper';

interface OfflineBackupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfflineBackupModal: React.FC<OfflineBackupModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = async (url: string, id: string) => {
    const success = await copyToClipboard(url);
    if (success) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleCopyAll = async () => {
    const formatted = `# ARSIP LINK AKSES PORTAL SMART AUDIT SYSTEM
Platform Pembelajaran Audit Mutu Internal ISO 9001:2015
Dikembangkan oleh: Dede Hery Suryana, AT

1. AI Asisten AMI-GPT (24/7):
https://chatgpt.com/g/g-6955fcd4ee0481918fbcce983e93f41c-ai-asisten-ami

2. GPT Ceklist & Simulasi Audit:
https://chatgpt.com/g/g-69e7746d65a881919c84f57152956d22-daftar-periksa-dan-simulasi-audit

3. Menulis Temuan Audit - Metoda PLOR:
https://aistudio.google.com/apps/8176939f-fb28-49da-a6e0-5d2fb150e45f?fullscreenApplet=true&showAssistant=true&showPreview=true
(Catatan: Disarankan via Laptop/PC)

4. Menulis Tindakan Perbaikan - CAPA:
https://aistudio.google.com/apps/ab6c7ca2-9bf9-439b-995a-36057740cb2c?showAssistant=true&showPreview=true&fullscreenApplet=true
(Catatan: Disarankan via Laptop/PC)

5. Pre-test Pengetahuan AMI (Evaluasi Awal):
https://smartbook.id/pre-test_pengetahuan_AMI/

6. Post-test Pengetahuan AMI (Sertifikasi Mandiri):
https://smartbook.id/post-test_pengetahuan_AMI/
`;
    const success = await copyToClipboard(formatted);
    if (success) {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in duration-150">
        
        {/* Header - High Density */}
        <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <DownloadCloud className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                Simpan Konten Offline
              </span>
              <h3 className="text-sm font-bold text-white leading-tight">
                6 Link Penting SMART AUDIT SYSTEM
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 space-y-3.5 overflow-y-auto">
          
          {/* Advice Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-950 space-y-1.5">
            <div className="font-bold flex items-center space-x-1.5 text-amber-900 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Tips Simpan Konten untuk Akses Offline:</span>
            </div>
            <p className="leading-snug text-amber-800 text-[11px]">
              Untuk mengurangi risiko kehilangan akses apabila tautan mengalami masalah sewaktu-waktu:
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 pl-4 list-disc text-[10px] text-amber-900 font-medium">
              <li>Unduh seluruh 9 Ebook PDF</li>
              <li>Unduh seluruh 9 Audio MP3</li>
              <li>Simpan link AI Asisten AMI</li>
              <li>Simpan link AI PLOR &amp; CAPA</li>
              <li>Simpan link Pre-test</li>
              <li>Simpan link Post-test</li>
            </ul>
          </div>

          {/* 6 Quick Copy Buttons List */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Daftar 6 Link Akses Cepat:
              </h4>
              <button
                onClick={handleCopyAll}
                className="text-[11px] font-bold text-amber-800 hover:text-amber-950 bg-amber-50 hover:bg-amber-100 px-2 py-0.5 rounded-md transition flex items-center space-x-1 border border-amber-200"
              >
                {copiedAll ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedAll ? 'Semua Disalin!' : 'Salin Semua Sekaligus'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {OFFLINE_COPY_LINKS.map((item, idx) => {
                const isCopied = copiedId === item.id;
                return (
                  <div
                    key={item.id}
                    className="p-2.5 rounded-xl bg-stone-50 border border-slate-200 hover:border-amber-400 transition space-y-1.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold text-amber-800 bg-amber-100/80 px-1.5 py-0.2 rounded">
                          {idx + 1}. {item.category}
                        </span>
                      </div>
                      <h5 className="text-xs font-bold text-slate-900 mt-0.5 leading-snug">
                        {item.name}
                      </h5>
                      <p className="text-[10px] text-slate-500 line-clamp-1">
                        {item.note}
                      </p>
                    </div>

                    <div className="pt-1.5 border-t border-slate-200/60 flex items-center justify-between gap-1.5">
                      <button
                        onClick={() => handleCopyLink(item.url, item.id)}
                        className="flex-1 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold py-1 px-2 rounded-lg transition flex items-center justify-center space-x-1 border border-slate-200"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700 text-[10px]">Disalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span className="text-[10px]">Salin Link</span>
                          </>
                        )}
                      </button>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition shrink-0"
                        title="Buka Tautan"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PWA & System info */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-0.5">
            <div className="font-bold text-slate-800 flex items-center space-x-1 text-[11px]">
              <Laptop className="w-3.5 h-3.5 text-slate-700" />
              <span>Dukungan PWA &amp; Responsivitas:</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-snug">
              Theme Color: <strong className="font-mono text-amber-700">#C77D2A</strong> &bull; Standalone Mode &bull; Single Page Application (SPA).
            </p>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-2.5 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition"
          >
            Tutup Jendela
          </button>
        </div>

      </div>
    </div>
  );
};
