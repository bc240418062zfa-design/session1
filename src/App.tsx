import React, { useState } from 'react';
import { Navbar, ThemeMode } from './components/Navbar';
import { OverviewPage } from './components/pages/OverviewPage';
import { Module1Page } from './components/pages/Module1Page';
import { Module2Page } from './components/pages/Module2Page';
import { Module3Page } from './components/pages/Module3Page';
import { Module4Page } from './components/pages/Module4Page';
import { Module5Page } from './components/pages/Module5Page';
import { HowTheWebWorksPage } from './components/pages/HowTheWebWorksPage';
import { HttpDnsPage } from './components/pages/HttpDnsPage';
import { RequestResponseExperimentPage } from './components/pages/RequestResponseExperimentPage';
import { DevEnvironmentPage } from './components/pages/DevEnvironmentPage';
import { VsCodePage } from './components/pages/VsCodePage';
import { NodeTerminalPage } from './components/pages/NodeTerminalPage';
import { GitFundamentalsPage } from './components/pages/GitFundamentalsPage';
import { GitVisualizerPage } from './components/pages/GitVisualizerPage';
import { GithubWorkflowPage } from './components/pages/GithubWorkflowPage';
import { HtmlStructurePage } from './components/pages/HtmlStructurePage';
import { SemanticHtmlPage } from './components/pages/SemanticHtmlPage';
import { CssFundamentalsPage } from './components/pages/CssFundamentalsPage';
import { CssBoxModelPage } from './components/pages/CssBoxModelPage';
import { CssTypographyColorPage } from './components/pages/CssTypographyColorPage';
import { ExperimentLabPage } from './components/pages/ExperimentLabPage';
import { ProfileLabPage } from './components/pages/ProfileLabPage';
import { DeploymentPage } from './components/pages/DeploymentPage';
import { HomeworkPage } from './components/pages/HomeworkPage';
import { DeliverablePage } from './components/pages/DeliverablePage';
import { CheckpointPage } from './components/pages/CheckpointPage';
import { CheatSheetsPage } from './components/pages/CheatSheetsPage';
import { ExtraNotesPage } from './components/pages/ExtraNotesPage';
import { SessionFlowPage } from './components/pages/SessionFlowPage';
import { CompletionPage } from './components/pages/CompletionPage';
import { TopicNavBar } from './components/TopicNavBar';
import { DeepReferenceGuides } from './components/DeepReferenceGuides';
import { MaterialsSection } from './components/MaterialsSection';
import { ExtraNotesSection } from './components/ExtraNotesSection';
import { PresentationMode } from './components/PresentationMode';
import { Footer } from './components/Footer';

export default function App() {
  // Start directly on Module 1 in Teacher/Tech Mode upon opening
  const [currentView, setCurrentView] = useState<string>('mod1');
  const [isInstructorMode, setIsInstructorMode] = useState<boolean>(true);
  const [isLowPerfMode, setIsLowPerfMode] = useState<boolean>(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);

  const handleNavigate = (viewId: string) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: isLowPerfMode ? 'auto' : 'smooth' });
  };

  return (
    <div
      className={`min-h-screen bg-white text-slate-900 flex flex-col font-sans theme-${themeMode} ${
        isLowPerfMode ? 'low-perf-mode' : ''
      }`}
    >
      {/* Top Bar adhering to Top Bar Contract */}
      <Navbar
        activeSection={currentView}
        onNavigate={handleNavigate}
        isInstructorMode={isInstructorMode}
        onToggleInstructorMode={() => setIsInstructorMode(!isInstructorMode)}
        isLowPerfMode={isLowPerfMode}
        onToggleLowPerfMode={() => setIsLowPerfMode(!isLowPerfMode)}
        themeMode={themeMode}
        onThemeChange={(m) => setThemeMode(m)}
        onOpenPresentationMode={() => setIsPresentationMode(true)}
      />

      {/* Sequential Master Flow Navigation Header Bar with Rollover, Teacher Mode & PDF Downloads */}
      <TopicNavBar
        currentModuleId={currentView}
        onNavigate={handleNavigate}
        isInstructorMode={isInstructorMode}
        onToggleInstructorMode={() => setIsInstructorMode(!isInstructorMode)}
        onOpenPresentationMode={() => setIsPresentationMode(true)}
      />

      {/* Fullscreen Classroom Presentation Mode Overlay */}
      {isPresentationMode && (
        <PresentationMode
          onExit={() => setIsPresentationMode(false)}
          isInstructorMode={isInstructorMode}
          currentModuleId={currentView}
          themeMode={themeMode}
        />
      )}

      {/* Main Container - Responsive Full Page View with Anti-Overflow */}
      <main className="flex-1 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 w-full min-w-0 overflow-x-hidden">
        {/* Step 01: Web & DNS */}
        {currentView === 'mod1' && (
          <Module1Page
            onNextModule={() => handleNavigate('mod2')}
            onNavigateHome={() => handleNavigate('overview')}
          />
        )}

        {/* Step 02: Dev Setup */}
        {currentView === 'mod2' && (
          <Module2Page
            onNextModule={() => handleNavigate('mod3')}
            onPrevModule={() => handleNavigate('mod1')}
            onNavigateHome={() => handleNavigate('overview')}
          />
        )}

        {/* Step 03: Git Core */}
        {currentView === 'mod3' && (
          <Module3Page
            onNextModule={() => handleNavigate('mod4')}
            onPrevModule={() => handleNavigate('mod2')}
            onNavigateHome={() => handleNavigate('overview')}
          />
        )}

        {/* Step 04: HTML & CSS */}
        {currentView === 'mod4' && (
          <Module4Page
            onNextModule={() => handleNavigate('mod5')}
            onPrevModule={() => handleNavigate('mod3')}
            onNavigateHome={() => handleNavigate('overview')}
          />
        )}

        {/* Step 05: Lab Walkthrough & Homework Briefing */}
        {currentView === 'mod5' && (
          <Module5Page
            onNextModule={() => handleNavigate('profile-lab')}
            onPrevModule={() => handleNavigate('mod4')}
            onNavigateHome={() => handleNavigate('overview')}
            onExploreMaterials={() => handleNavigate('cheat-sheets')}
          />
        )}

        {/* Step 06: Guided Personal Profile Page Lab (13 Milestones) */}
        {currentView === 'profile-lab' && (
          <ProfileLabPage onNavigate={handleNavigate} />
        )}

        {/* Step 07: Live Code Sandbox */}
        {currentView === 'experiment-lab' && (
          <ExperimentLabPage onNavigate={handleNavigate} />
        )}

        {/* Step 08: Homework Guide & Dual PRs */}
        {currentView === 'homework' && (
          <HomeworkPage onNavigate={handleNavigate} />
        )}

        {/* Step 09: Official Checkpoint Exam */}
        {currentView === 'checkpoint' && (
          <CheckpointPage onNavigate={handleNavigate} />
        )}

        {/* Step 10: Official Deliverables Submission & Checklist */}
        {currentView === 'deliverable' && (
          <DeliverablePage onNavigate={handleNavigate} />
        )}

        {/* Step 11: Lecture Notes, Cheat Sheets & PDF Downloads */}
        {currentView === 'cheat-sheets' && (
          <CheatSheetsPage onNavigate={handleNavigate} />
        )}

        {/* Step 12: Week 01 Completion & Verification */}
        {currentView === 'completion' && (
          <CompletionPage
            onRestart={() => handleNavigate('mod1')}
            onNavigateHome={() => handleNavigate('overview')}
            onExploreMaterials={() => handleNavigate('cheat-sheets')}
          />
        )}

        {/* Curriculum Map / Overview Dashboard (Available via Overview Tab) */}
        {currentView === 'overview' && (
          <OverviewPage
            onNavigate={handleNavigate}
            isInstructorMode={isInstructorMode}
            onOpenPresentationMode={() => setIsPresentationMode(true)}
          />
        )}

        {/* Specialized Deep Dive Pages */}
        {currentView === 'agenda' && <SessionFlowPage onNavigate={handleNavigate} />}
        {currentView === 'how-the-web-works' && <HowTheWebWorksPage onNavigate={handleNavigate} />}
        {currentView === 'http-dns' && <HttpDnsPage onNavigate={handleNavigate} />}
        {currentView === 'http-experiment' && <RequestResponseExperimentPage onNavigate={handleNavigate} />}
        {currentView === 'dev-environment' && <DevEnvironmentPage onNavigate={handleNavigate} />}
        {currentView === 'vscode' && <VsCodePage onNavigate={handleNavigate} />}
        {currentView === 'terminal-node' && <NodeTerminalPage onNavigate={handleNavigate} />}
        {currentView === 'git-fundamentals' && <GitFundamentalsPage onNavigate={handleNavigate} />}
        {currentView === 'git-visualizer' && <GitVisualizerPage onNavigate={handleNavigate} />}
        {currentView === 'github-workflow' && <GithubWorkflowPage onNavigate={handleNavigate} />}
        {currentView === 'html-structure' && <HtmlStructurePage onNavigate={handleNavigate} />}
        {currentView === 'semantic-html' && <SemanticHtmlPage onNavigate={handleNavigate} />}
        {currentView === 'css-fundamentals' && <CssFundamentalsPage onNavigate={handleNavigate} />}
        {currentView === 'css-box-model' && <CssBoxModelPage onNavigate={handleNavigate} />}
        {currentView === 'css-typography-color' && <CssTypographyColorPage onNavigate={handleNavigate} />}
        {currentView === 'deployment' && <DeploymentPage onNavigate={handleNavigate} />}
        {currentView === 'extra-notes' && <ExtraNotesPage onNavigate={handleNavigate} />}

        {/* References & Materials */}
        {currentView === 'handbook' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Comprehensive Foundations Handbook
              </h2>
              <button
                onClick={() => handleNavigate('overview')}
                className="text-xs text-blue-400 hover:underline"
              >
                ← Back to Dashboard
              </button>
            </div>
            <DeepReferenceGuides />
          </div>
        )}

        {currentView === 'materials' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Official Student Materials &amp; Lecture Downloads
              </h2>
              <button
                onClick={() => handleNavigate('overview')}
                className="text-xs text-blue-400 hover:underline"
              >
                ← Back to Dashboard
              </button>
            </div>
            <MaterialsSection />
            <ExtraNotesSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
