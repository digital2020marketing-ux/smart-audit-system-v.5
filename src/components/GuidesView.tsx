import React, { useState } from 'react';
import { PRODUCT_GUIDES } from '../data/guidesData';
import { 
  Layers, 
  BookOpen, 
  Bot, 
  Sparkles, 
  FileSignature, 
  FileCheck2, 
  CheckCircle2, 
  Lightbulb, 
  HelpCircle, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const GuidesView: React.FC = () => {
  const [selectedGuideId, setSelectedGuideId] = useState<string>(PRODUCT_GUIDES[0].id);

  const selectedGuide = PRODUCT_GUIDES.find(g => g.id === selectedGuideId) || PRODUCT_GUIDES[0];

  const getGuideIcon = (id: string) => {
    switch (id) {
      case 'guide-modules':
        return <BookOpen className="w-5 h-5" />;
      case 'guide-ami-gpt':
        return <Bot className="w-5 h-5" />;
      case 'guide-checklist-simulasi':
        return <Sparkles className="w-5 h-5" />;
      case 'guide-plor':
        return <FileSignature className="w-5 h-5" />;
      case 'guide-capa':
        return <FileCheck2 className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-4 pb-20">
      {/* Header - High Density */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                Dokumentasi &amp; Standardisasi
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                5 Panduan Produk &amp; Metodologi
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              Panduan Praktis Produk &amp; Metoda Audit
            </h1>
            <p className="text-xs text-slate-600 mt-0.5 max-w-2xl leading-relaxed">
              Pelajari metodologi standar operasional pengoperasian modul, asisten cerdas AI, teknik penulisan temuan PLOR, dan formulasi tindakan korektif CAPA.
            </p>
          </div>
        </div>

        {/* 5 Guide Selector Horizontal Tabs - High Density */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pt-2 border-t border-slate-100 pb-0.5">
          {PRODUCT_GUIDES.map((g) => {
            const isActive = g.id === selectedGuide.id;
            return (
              <button
                key={g.id}
                onClick={() => setSelectedGuideId(g.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 shrink-0 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-2xs font-black'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {getGuideIcon(g.id)}
                <span>{g.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Selected Guide Detail View - High Density */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Left 2 Cols: Step-by-Step Execution Guide */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-700 flex items-center justify-center font-bold">
                  {getGuideIcon(selectedGuide.id)}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200/60">
                    {selectedGuide.badge}
                  </span>
                  <h2 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                    {selectedGuide.title}
                  </h2>
                </div>
              </div>
              <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                {selectedGuide.category}
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              {selectedGuide.summary}
            </p>

            {/* Steps */}
            <div className="space-y-2.5">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Langkah-Langkah Pelaksanaan Standar:
              </h3>
              <div className="space-y-2">
                {selectedGuide.steps.map((step, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-stone-50 border border-slate-200/80 flex items-start space-x-2.5 text-xs text-slate-700"
                  >
                    <span className="w-5 h-5 rounded-md bg-amber-500 text-slate-950 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug text-[11px]">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Tips */}
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5 text-xs text-amber-950">
              <div className="font-bold flex items-center space-x-1.5 text-amber-900 text-[11px]">
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                <span>Tips Praktis &amp; Catatan Khusus:</span>
              </div>
              <ul className="space-y-1 pl-5 list-disc text-amber-800 text-[11px]">
                {selectedGuide.tips.map((tip, idx) => (
                  <li key={idx} className="leading-snug">{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Quick Reference Cards for all 5 Guides */}
        <div className="space-y-3.5">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>Daftar 5 Panduan Produk:</span>
            </h3>

            <div className="space-y-1.5">
              {PRODUCT_GUIDES.map((g) => {
                const isSelected = g.id === selectedGuide.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGuideId(g.id)}
                    className={`w-full text-left p-2.5 rounded-xl border text-xs transition flex items-center justify-between group ${
                      isSelected
                        ? 'bg-amber-50 border-amber-400 text-amber-950 font-bold shadow-2xs'
                        : 'bg-stone-50/70 hover:bg-stone-100 border-slate-200/80 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`p-1 rounded ${isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-200 text-slate-600'}`}>
                        {getGuideIcon(g.id)}
                      </div>
                      <div>
                        <div className="line-clamp-1 text-[11px] font-bold">{g.title}</div>
                        <span className="text-[9px] text-slate-400 font-normal">{g.badge}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Methodology Box */}
          <div className="bg-slate-900 rounded-2xl p-4 text-white space-y-2 border border-slate-800">
            <div className="flex items-center space-x-1.5 text-amber-400 text-[11px] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Standar ISO 9001:2015 &amp; 19011</span>
            </div>
            <h4 className="text-xs font-bold text-white">
              Prinsip Audit Berbasis Bukti (Evidence-Based)
            </h4>
            <p className="text-[11px] text-slate-300 leading-snug">
              Selalu verifikasi bukti objektif melalui pengamatan fisik, penelusuran catatan, dan wawancara triangulasi sebelum merumuskan temuan ketidaksesuaian.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
