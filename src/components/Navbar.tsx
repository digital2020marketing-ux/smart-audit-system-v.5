import React, { useState } from 'react';
import { ViewMode } from '../types';
import { 
  BookOpen, 
  LayoutDashboard, 
  Layers, 
  FileSpreadsheet, 
  Bot, 
  Award, 
  Home, 
  Copy, 
  Menu, 
  X, 
  Volume2, 
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Compass
} from 'lucide-react';

interface NavbarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  onOpenOfflineModal: () => void;
  isPlayingAudio: boolean;
  activeModuleName?: string;
  onOpenAudioPlayer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenOfflineModal,
  isPlayingAudio,
  activeModuleName,
  onOpenAudioPlayer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ViewMode; label: string; icon: React.ReactNode; badge?: string; desc: string }[] = [
    { id: 'landing', label: 'Beranda', icon: <Home className="w-3.5 h-3.5" />, desc: 'Panduan Awal' },
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-3.5 h-3.5" />, desc: 'Pusat Produk' },
    { id: 'modules', label: '9 Modul & Audio', icon: <BookOpen className="w-3.5 h-3.5" />, badge: '9', desc: 'Ebook & Podcast' },
    { id: 'worksheets', label: '7 Worksheet', icon: <FileSpreadsheet className="w-3.5 h-3.5" />, badge: '7', desc: 'Formulir FR.AMI' },
    { id: 'ai-tools', label: 'AI Tools & Simulasi', icon: <Bot className="w-3.5 h-3.5" />, badge: '4 AI', desc: 'GPT & Roleplay' },
    { id: 'evaluation', label: 'Evaluasi & Ujian', icon: <Award className="w-3.5 h-3.5" />, desc: 'Pre & Post-Test' },
    { id: 'guides', label: 'Metodologi SOP', icon: <Compass className="w-3.5 h-3.5" />, desc: 'Panduan Detail' },
  ];

  const handleNavClick = (view: ViewMode) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white shadow-md">
        {/* Top High Density Notice Strip */}
        <div className="bg-slate-950 border-b border-slate-800/80 text-slate-300 text-[11px] px-3 sm:px-6 py-1 font-medium flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate">
            <span className="inline-flex items-center gap-1 text-amber-400 font-semibold shrink-0">
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              <span>ISO 9001:2015</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-300 font-medium truncate hidden md:inline">Platform Terpadu Audit Mutu Internal</span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-amber-300/90 font-medium truncate">Dede Hery Suryana, AT</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenOfflineModal}
              className="flex items-center space-x-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px] font-bold transition border border-amber-500/30 shrink-0"
              title="Salin 6 tautan Google Drive dan GPT untuk akses langsung"
            >
              <Copy className="w-2.5 h-2.5" />
              <span>Salin 6 Link Akses</span>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-13 sm:h-14">
            {/* Brand Logo - Compact High Density */}
            <div 
              onClick={() => handleNavClick('landing')}
              className="flex items-center space-x-2.5 cursor-pointer group select-none shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-sm group-hover:scale-105 transition">
                <span className="text-sm tracking-tight font-extrabold">SB</span>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-extrabold text-sm tracking-tight text-white group-hover:text-amber-400 transition">
                    SmartBook<span className="text-amber-500">.Id</span>
                  </span>
                  <span className="bg-amber-500/15 text-amber-400 text-[9px] font-mono font-bold px-1.5 py-0.2 rounded border border-amber-500/30 uppercase">
                    Smart Audit
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-sm font-extrabold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800 border border-transparent'
                    }`}
                    title={item.desc}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`text-[9px] px-1 py-0.2 rounded font-mono font-bold ${
                        isActive ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-amber-400 border border-slate-700'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Audio Indicator */}
              {isPlayingAudio && (
                <button
                  onClick={onOpenAudioPlayer}
                  className="flex items-center space-x-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-bold border border-amber-500/40 animate-pulse"
                  title={`Sedang memutar: ${activeModuleName || 'Podcast Modul'}`}
                >
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline text-[11px]">Audio Berputar</span>
                </button>
              )}

              {/* Access Dashboard CTA on landing */}
              {currentView === 'landing' && (
                <button
                  onClick={() => handleNavClick('dashboard')}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-3 py-1.5 rounded-lg text-xs shadow-sm transition flex items-center space-x-1"
                >
                  <span>Mulai Akses</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-slate-400 hover:text-white p-1.5 rounded-md hover:bg-slate-800 transition"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-3 pt-2 pb-5 space-y-1 shadow-2xl">
            <div className="p-2 mb-2 bg-slate-800/80 rounded-md text-xs text-slate-300 border border-slate-700 flex justify-between items-center">
              <span>Sistem Audit Mutu ISO 9001</span>
              <span className="text-amber-400 font-semibold font-mono text-[11px]">Dede Hery S, AT</span>
            </div>
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold transition ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                      isActive ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-amber-400 border border-slate-700'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-2.5 mt-2 border-t border-slate-800 flex flex-col gap-1.5">
              <button
                onClick={() => {
                  onOpenOfflineModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 py-2 rounded-lg text-xs font-bold border border-slate-700"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Salin 6 Link Akses Offline</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Fixed Bottom Navigation Bar - Super Convenient Thumb Access */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 text-white px-2 py-1.5 flex items-center justify-around shadow-2xl">
        <button
          onClick={() => handleNavClick('landing')}
          className={`flex flex-col items-center py-1 px-2 rounded-md text-[10px] font-bold transition ${
            currentView === 'landing' ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span>Beranda</span>
        </button>

        <button
          onClick={() => handleNavClick('dashboard')}
          className={`flex flex-col items-center py-1 px-2 rounded-md text-[10px] font-bold transition ${
            currentView === 'dashboard' ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <LayoutDashboard className="w-4 h-4 mb-0.5" />
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => handleNavClick('modules')}
          className={`flex flex-col items-center py-1 px-2 rounded-md text-[10px] font-bold transition ${
            currentView === 'modules' ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4 mb-0.5" />
          <span>Modul (9)</span>
        </button>

        <button
          onClick={() => handleNavClick('worksheets')}
          className={`flex flex-col items-center py-1 px-2 rounded-md text-[10px] font-bold transition ${
            currentView === 'worksheets' ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileSpreadsheet className="w-4 h-4 mb-0.5" />
          <span>Form (7)</span>
        </button>

        <button
          onClick={() => handleNavClick('ai-tools')}
          className={`flex flex-col items-center py-1 px-2 rounded-md text-[10px] font-bold transition ${
            currentView === 'ai-tools' ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Bot className="w-4 h-4 mb-0.5" />
          <span>AI Tools</span>
        </button>

        <button
          onClick={() => handleNavClick('evaluation')}
          className={`flex flex-col items-center py-1 px-2 rounded-md text-[10px] font-bold transition ${
            currentView === 'evaluation' ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Award className="w-4 h-4 mb-0.5" />
          <span>Ujian</span>
        </button>
      </div>
    </>
  );
};


