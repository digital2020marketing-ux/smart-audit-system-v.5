import React, { useState, useEffect } from 'react';
import { ViewMode, AuditModule } from './types';
import { MODULES_DATA } from './data/modulesData';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { ModulesView } from './components/ModulesView';
import { WorksheetsView } from './components/WorksheetsView';
import { AIToolsView } from './components/AIToolsView';
import { EvaluationView } from './components/EvaluationView';
import { GuidesView } from './components/GuidesView';
import { OfflineBackupModal } from './components/OfflineBackupModal';
import { AudioPlayerBar } from './components/AudioPlayerBar';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('landing');
  const [selectedModule, setSelectedModule] = useState<AuditModule>(MODULES_DATA[0]);
  const [audioModule, setAudioModule] = useState<AuditModule | null>(null);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState(false);

  // Hash Router sync with sandbox protection
  useEffect(() => {
    const handleHashChange = () => {
      try {
        const hash = window.location.hash ? window.location.hash.replace('#', '') : '';
        const validViews: ViewMode[] = ['landing', 'dashboard', 'modules', 'worksheets', 'ai-tools', 'evaluation', 'guides'];
        if (validViews.includes(hash as ViewMode)) {
          setCurrentView(hash as ViewMode);
        }
      } catch {
        // Ignore hash change errors in sandboxed iframes
      }
    };

    try {
      if (window.location.hash) {
        handleHashChange();
      }
    } catch {
      // Ignore initial hash read errors
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: ViewMode) => {
    setCurrentView(view);
    try {
      if (window.location.hash !== `#${view}`) {
        window.location.hash = view;
      }
    } catch {
      // Ignore hash write errors in restricted iframe
    }
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // Ignore scroll errors
    }
  };

  const handleSelectModule = (module: AuditModule, autoPlayAudio = false) => {
    setSelectedModule(module);
    if (autoPlayAudio) {
      setAudioModule(module);
      setShowAudioPlayer(true);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Top Sticky Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenOfflineModal={() => setIsOfflineModalOpen(true)}
        isPlayingAudio={showAudioPlayer && !!audioModule}
        activeModuleName={audioModule?.title}
        onOpenAudioPlayer={() => setShowAudioPlayer(true)}
      />

      {/* Main Container Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-6">
        {currentView === 'landing' && (
          <LandingPage
            onNavigate={navigateTo}
            onOpenOfflineModal={() => setIsOfflineModalOpen(true)}
          />
        )}

        {currentView === 'dashboard' && (
          <Dashboard
            onNavigate={navigateTo}
            onSelectModule={(mod, autoPlay) => {
              handleSelectModule(mod, autoPlay);
              if (!autoPlay) navigateTo('modules');
            }}
            onOpenOfflineModal={() => setIsOfflineModalOpen(true)}
          />
        )}

        {currentView === 'modules' && (
          <ModulesView
            selectedModule={selectedModule}
            onSelectModule={handleSelectModule}
          />
        )}

        {currentView === 'worksheets' && (
          <WorksheetsView />
        )}

        {currentView === 'ai-tools' && (
          <AIToolsView />
        )}

        {currentView === 'evaluation' && (
          <EvaluationView />
        )}

        {currentView === 'guides' && (
          <GuidesView />
        )}
      </main>

      {/* Sticky Bottom Audio Player Bar */}
      {showAudioPlayer && audioModule && (
        <AudioPlayerBar
          currentModule={audioModule}
          allModules={MODULES_DATA}
          onSelectModule={(mod) => setAudioModule(mod)}
          onClose={() => setShowAudioPlayer(false)}
        />
      )}

      {/* Offline Backup Links Modal */}
      <OfflineBackupModal
        isOpen={isOfflineModalOpen}
        onClose={() => setIsOfflineModalOpen(false)}
      />
    </div>
  );
}
