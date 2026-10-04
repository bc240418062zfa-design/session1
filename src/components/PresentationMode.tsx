import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  X,
  Clock,
  Play,
  Pause,
  Sun,
  Moon,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  GitBranch,
  FileCode,
  Layers,
  Terminal as TerminalIcon,
  Monitor,
} from 'lucide-react';
import { TIMELINE_SEGMENTS, TIME_MODEL, CHECKPOINTS } from '../data/curriculumData';
import { WebFlowDiagram } from './WebFlowDiagram';
import { GitVisualizer } from './GitVisualizer';
import { BoxModelPlayground } from './BoxModelPlayground';
import { TerminalSimulator } from './TerminalSimulator';
import { LivePktClock } from './LivePktClock';

// 7 Comprehensive Classroom Slide Segments
export interface SlideSegment {
  id: string;
  order: number;
  title: string;
  shortTitle: string;
  startTime: string;
  endTime: string;
  durationMinutes: number;
  teachingState: string;
  learningObjective: string;
  instructorAction: string;
  studentAction: string;
  transitionToNext: string;
  ifBehindCues: string;
  ifAheadCues: string;
  keyQuestions: string[];
  checkpointQuestion?: string;
  checkpointOptions?: Array<{
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }>;
}

const ALL_SLIDES: SlideSegment[] = [
  {
    ...TIMELINE_SEGMENTS[0],
    order: 1,
    checkpointQuestion: 'What translates the human-readable domain name (sessions.study.mihora.tech) into a routable machine IP address?',
    checkpointOptions: [
      { id: 'a', text: 'HTML Parser', isCorrect: false, explanation: 'The HTML parser constructs DOM nodes in the browser.' },
      { id: 'b', text: 'DNS (Domain Name System)', isCorrect: true, explanation: 'DNS translates domain names into numerical IP addresses.' },
      { id: 'c', text: 'Git Commit Engine', isCorrect: false, explanation: 'Git tracks source code version history locally.' },
    ],
  },
  {
    ...TIMELINE_SEGMENTS[1],
    order: 2,
    checkpointQuestion: 'Which cross-platform command prints the absolute path of your current working directory?',
    checkpointOptions: [
      { id: 'a', text: 'pwd (Print Working Directory)', isCorrect: true, explanation: 'pwd outputs the exact folder path on macOS, Linux, and modern PowerShell.' },
      { id: 'b', text: 'git init', isCorrect: false, explanation: 'git init creates a new empty Git repository.' },
      { id: 'c', text: 'mkdir', isCorrect: false, explanation: 'mkdir creates a new folder.' },
    ],
  },
  {
    ...TIMELINE_SEGMENTS[2],
    order: 3,
    checkpointQuestion: 'Why does Git have a Staging Area (Index) between the working tree and commit history?',
    checkpointOptions: [
      { id: 'a', text: 'To encrypt code with SSH keys', isCorrect: false, explanation: 'SSH handles remote authentication, not staging.' },
      { id: 'b', text: 'To selectively assemble atomic commit snapshots', isCorrect: true, explanation: 'Staging lets you choose exact files and lines for focused, verifiable commit nodes.' },
      { id: 'c', text: 'To compile TypeScript to JavaScript', isCorrect: false, explanation: 'Compilers like Vite or tsc build code, not Git.' },
    ],
  },
  {
    ...TIMELINE_SEGMENTS[3],
    order: 4,
    checkpointQuestion: 'With box-sizing: border-box, what is the total rendered width if width: 300px and padding: 20px?',
    checkpointOptions: [
      { id: 'a', text: '340px', isCorrect: false, explanation: '340px would be the total width only with standard content-box.' },
      { id: 'b', text: '300px', isCorrect: true, explanation: 'With border-box, padding and border fit inside the declared 300px width.' },
      { id: 'c', text: '260px', isCorrect: false, explanation: 'Width does not shrink below the declared dimension.' },
    ],
  },
  {
    ...TIMELINE_SEGMENTS[4],
    order: 5,
    shortTitle: 'Profile Lab Build',
    checkpointQuestion: 'What are the 3 mandatory components required in Friday’s Lab Deliverable?',
    checkpointOptions: [
      { id: 'a', text: 'Figma mockups, credit card, and test logs', isCorrect: false, explanation: 'No paid services or mockups are required.' },
      { id: 'b', text: 'GitHub repository link, deployed preview URL, and request/response lifecycle explanation', isCorrect: true, explanation: 'These 3 verify version control, public hosting, and theoretical understanding.' },
      { id: 'c', text: 'Only a zip file sent via email', isCorrect: false, explanation: 'Deliverables must be public git repositories with preview links.' },
    ],
  },
  {
    id: 'seg-6-homework',
    order: 6,
    title: 'Homework: Dual-Section Expansion & Separate PRs',
    shortTitle: 'Homework PRs',
    startTime: '10:25 PM',
    endTime: '10:28 PM',
    durationMinutes: 3,
    teachingState: 'ASSIGNMENT',
    learningObjective: 'Master Git feature branching by expanding the profile page with 2 new sections submitted via separate Pull Requests.',
    instructorAction: 'Demonstrate creating a new branch, making focused commits, pushing to origin, opening a PR, and reviewing the diff before merging.',
    studentAction: 'Open 2 separate GitHub PRs against main for two independent profile sections, verifying no branch collision.',
    transitionToNext: 'Now let us verify our understanding with the official Checkpoint Exam.',
    ifBehindCues: 'Emphasize: One branch per section, one PR per branch, never commit everything straight to main.',
    ifAheadCues: 'Show how to review your own PR diff tab on GitHub before requesting mentor review.',
    keyQuestions: ['Why is opening 2 separate PRs better than one giant pull request?'],
    checkpointQuestion: 'When should a feature branch be merged into main?',
    checkpointOptions: [
      { id: 'a', text: 'Immediately before testing', isCorrect: false, explanation: 'Unverified code should never enter main.' },
      { id: 'b', text: 'After code is tested, diff reviewed, and verified clean', isCorrect: true, explanation: 'Feature branches protect main until changes are validated.' },
    ],
  },
  {
    id: 'seg-7-checkpoint',
    order: 7,
    title: 'Checkpoint Proof of Mastery & Deliverables Hub',
    shortTitle: 'Checkpoint & Specs',
    startTime: '10:28 PM',
    endTime: '10:30 PM',
    durationMinutes: 2,
    teachingState: 'VERIFICATION',
    learningObjective: 'Demonstrate retention of web architecture, workspace configuration, Git history, and semantic HTML.',
    instructorAction: 'Summarize week 1 learning milestones and remind students of deadline and submission link.',
    studentAction: 'Complete the persistent 12-item checklist and submit repository & preview URLs.',
    transitionToNext: 'Class concluded. Review cheat-sheets and lecture notes in the portal.',
    ifBehindCues: 'Review the 12-item checklist in the Deliverables tab.',
    ifAheadCues: 'Encourage exploring the Executive Cheat-Sheets and downloading the offline PDF book.',
    keyQuestions: ['Can you explain the request/response cycle in your own words right now?'],
  },
];

interface PresentationModeProps {
  onExit: () => void;
  isInstructorMode: boolean;
  currentModuleId?: string;
  themeMode?: string;
}

const getInitialSegmentIdx = (modId?: string): number => {
  if (!modId) return 0;
  if (['mod1', 'how-the-web-works', 'http-dns', 'http-experiment'].includes(modId)) return 0;
  if (['mod2', 'dev-environment', 'vscode', 'terminal-node'].includes(modId)) return 1;
  if (['mod3', 'git-fundamentals', 'git-visualizer', 'github-workflow'].includes(modId)) return 2;
  if (['mod4', 'html-structure', 'semantic-html', 'css-fundamentals', 'css-box-model', 'css-typography-color'].includes(modId)) return 3;
  if (['mod5', 'profile-lab'].includes(modId)) return 4;
  if (['experiment-lab', 'homework'].includes(modId)) return 5;
  if (['checkpoint', 'deliverable', 'cheat-sheets', 'completion'].includes(modId)) return 6;
  return 0;
};

export const PresentationMode: React.FC<PresentationModeProps> = ({
  onExit,
  isInstructorMode,
  currentModuleId,
}) => {
  const [currentSegmentIdx, setCurrentSegmentIdx] = useState<number>(() =>
    getInitialSegmentIdx(currentModuleId)
  );
  const [slideSubStep, setSlideSubStep] = useState<'concept' | 'demo' | 'checkpoint'>('concept');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showInstructorNotes, setShowInstructorNotes] = useState<boolean>(isInstructorMode);
  const [stageTheme, setStageTheme] = useState<'dark' | 'light'>('dark');

  // Embedded timer
  const [elapsedSec, setElapsedSec] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  const totalCoreSec = TIME_MODEL.coreMinutes * 60;
  const isDark = stageTheme === 'dark';

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && elapsedSec < totalCoreSec) {
      interval = setInterval(() => {
        setElapsedSec((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, elapsedSec, totalCoreSec]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (
        e.key === ' ' &&
        (e.target as HTMLElement).tagName !== 'INPUT' &&
        (e.target as HTMLElement).tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        setIsTimerRunning((prev) => !prev);
      } else if (e.key === 'Escape') {
        onExit();
      } else if (e.key === '1') {
        setSlideSubStep('concept');
      } else if (e.key === '2') {
        setSlideSubStep('demo');
      } else if (e.key === '3') {
        setSlideSubStep('checkpoint');
      } else if (e.key.toLowerCase() === 'n') {
        setShowInstructorNotes((prev) => !prev);
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSegmentIdx, slideSubStep]);

  const currentSegment = ALL_SLIDES[currentSegmentIdx] || ALL_SLIDES[0];

  const goToNext = () => {
    if (slideSubStep === 'concept') {
      setSlideSubStep('demo');
    } else if (slideSubStep === 'demo') {
      setSlideSubStep('checkpoint');
    } else {
      if (currentSegmentIdx < ALL_SLIDES.length - 1) {
        setCurrentSegmentIdx((prev) => prev + 1);
        setSlideSubStep('concept');
      }
    }
  };

  const goToPrev = () => {
    if (slideSubStep === 'checkpoint') {
      setSlideSubStep('demo');
    } else if (slideSubStep === 'demo') {
      setSlideSubStep('concept');
    } else {
      if (currentSegmentIdx > 0) {
        setCurrentSegmentIdx((prev) => prev - 1);
        setSlideSubStep('checkpoint');
      }
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col overflow-hidden select-none transition-colors duration-200 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
      }`}
    >
      {/* Top Presentation Bar */}
      <header
        className={`h-14 sm:h-16 px-4 sm:px-6 border-b flex items-center justify-between shrink-0 transition-colors ${
          isDark
            ? 'bg-slate-900/95 border-slate-800 text-white'
            : 'bg-white border-slate-300 text-slate-900 shadow-sm'
        }`}
      >
        {/* Left: Brand & Slide Indicator */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-bold tracking-tight font-mono ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              MIHORA<span className="text-blue-500">.TECH</span>
            </span>
            <span className={isDark ? 'text-slate-600' : 'text-slate-300'}>|</span>
            <span
              className={`text-[11px] font-mono font-semibold uppercase ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              CLASSROOM STAGE
            </span>
          </div>

          <div
            className={`hidden md:flex items-center gap-2 pl-4 border-l ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center font-bold">
              {currentSegment.order}
            </span>
            <span
              className={`text-sm font-semibold truncate ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}
            >
              {currentSegment.shortTitle}
            </span>
            <span
              className={`text-xs font-mono truncate ${
                isDark ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              ({currentSegment.startTime} – {currentSegment.endTime})
            </span>
          </div>
        </div>

        {/* Center: Slide Sub-Step Tabs (1. Concept, 2. Demo, 3. Checkpoint) */}
        <div
          className={`flex items-center gap-1 p-1 rounded-lg border text-xs font-mono ${
            isDark
              ? 'bg-slate-950 border-slate-800'
              : 'bg-slate-100 border-slate-300'
          }`}
        >
          <button
            onClick={() => setSlideSubStep('concept')}
            className={`px-2.5 sm:px-3 py-1 rounded transition-colors ${
              slideSubStep === 'concept'
                ? 'bg-blue-600 text-white font-bold shadow-sm'
                : isDark
                ? 'text-slate-400 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            1. Concept
          </button>
          <button
            onClick={() => setSlideSubStep('demo')}
            className={`px-2.5 sm:px-3 py-1 rounded transition-colors ${
              slideSubStep === 'demo'
                ? 'bg-blue-600 text-white font-bold shadow-sm'
                : isDark
                ? 'text-slate-400 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            2. Live Demo
          </button>
          <button
            onClick={() => setSlideSubStep('checkpoint')}
            className={`px-2.5 sm:px-3 py-1 rounded transition-colors ${
              slideSubStep === 'checkpoint'
                ? 'bg-blue-600 text-white font-bold shadow-sm'
                : isDark
                ? 'text-slate-400 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            3. Checkpoint
          </button>
        </div>

        {/* Right: Actions, Timer & Theme Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Live PKT Clock */}
          <div className="hidden xl:block">
            <LivePktClock isCompact={true} />
          </div>

          {/* Lightweight Timer */}
          <div
            className={`flex items-center gap-2 rounded-lg px-2.5 py-1 text-xs font-mono border ${
              isDark
                ? 'bg-slate-950 border-slate-800 text-slate-200'
                : 'bg-slate-100 border-slate-300 text-slate-800'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-blue-500" />
            <span>{formatTime(Math.max(0, totalCoreSec - elapsedSec))}</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className={isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}
              title={isTimerRunning ? 'Pause Timer (Space)' : 'Start Timer (Space)'}
            >
              {isTimerRunning ? (
                <Pause className="w-3 h-3 text-amber-500" />
              ) : (
                <Play className="w-3 h-3 text-emerald-500" />
              )}
            </button>
          </div>

          {/* Theme Switcher */}
          <button
            onClick={() => setStageTheme(isDark ? 'light' : 'dark')}
            className={`p-1.5 rounded-lg border transition-colors ${
              isDark
                ? 'bg-slate-950 border-slate-800 text-amber-400 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
            }`}
            title={isDark ? 'Switch to Light Stage' : 'Switch to Dark Classroom Stage'}
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* Instructor Notes Toggle */}
          <button
            onClick={() => setShowInstructorNotes(!showInstructorNotes)}
            className={`px-2.5 py-1 text-xs rounded border transition-colors font-mono ${
              showInstructorNotes
                ? 'bg-purple-600 text-white border-purple-400 shadow-sm font-bold'
                : isDark
                ? 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                : 'bg-slate-100 text-slate-600 border-slate-300 hover:text-slate-900'
            }`}
            title="Toggle Instructor Talking Points (Key: N)"
          >
            Notes
          </button>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className={`p-1.5 rounded transition-colors hidden sm:block ${
              isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
            title="Toggle Fullscreen (Key: F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Exit */}
          <button
            onClick={onExit}
            className={`p-1.5 rounded transition-colors ${
              isDark ? 'text-slate-400 hover:text-rose-400 hover:bg-slate-800' : 'text-slate-600 hover:text-rose-600 hover:bg-slate-200'
            }`}
            title="Exit Presentation Mode (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Slide Stage */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col justify-between max-w-7xl mx-auto w-full">
        {/* SUBSTEP 1: Concept Slide */}
        {slideSubStep === 'concept' && (
          <div className="space-y-6 my-auto animate-fadeIn">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-500 border border-blue-500/30 font-bold">
                {currentSegment.teachingState}
              </span>
              <span className={isDark ? 'text-slate-600' : 'text-slate-400'}>·</span>
              <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                Segment {currentSegment.order} of {ALL_SLIDES.length}
              </span>
              <span className={isDark ? 'text-slate-600' : 'text-slate-400'}>·</span>
              <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                {currentSegment.durationMinutes} Minutes Allotted
              </span>
            </div>

            <h1
              className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {currentSegment.title}
            </h1>

            <div
              className={`rounded-2xl p-6 md:p-8 space-y-5 shadow-xl max-w-4xl border ${
                isDark
                  ? 'bg-slate-900 border-slate-800'
                  : 'bg-white border-slate-300 text-slate-900'
              }`}
            >
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider mb-1 text-blue-500 font-bold">
                  Primary Learning Objective
                </h3>
                <p
                  className={`text-base sm:text-lg font-medium leading-relaxed ${
                    isDark ? 'text-slate-100' : 'text-slate-800'
                  }`}
                >
                  {currentSegment.learningObjective}
                </p>
              </div>

              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t text-sm ${
                  isDark ? 'border-slate-800' : 'border-slate-200'
                }`}
              >
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider mb-1 text-emerald-500 font-bold">
                    Instructor Action
                  </h4>
                  <p
                    className={`leading-relaxed text-xs ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {currentSegment.instructorAction}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider mb-1 text-blue-500 font-bold">
                    Student Action
                  </h4>
                  <p
                    className={`leading-relaxed text-xs ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {currentSegment.studentAction}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Next Cue */}
            <div className="text-xs font-mono flex items-center gap-2">
              <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                Next step:
              </span>
              <button
                onClick={() => setSlideSubStep('demo')}
                className="text-blue-500 hover:underline font-bold"
              >
                Launch Live Interactive Demonstration (Key: 2) →
              </button>
            </div>
          </div>
        )}

        {/* SUBSTEP 2: Interactive Demo Slide */}
        {slideSubStep === 'demo' && (
          <div className="space-y-4 my-auto w-full animate-fadeIn">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-500 font-bold">
                LIVE DEMO: {currentSegment.shortTitle}
              </span>
              <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                Interactive Screen Share Sandbox
              </span>
            </div>

            {/* Render appropriate interactive widget per segment */}
            <div className="w-full">
              {currentSegment.id === 'seg-1-web-basics' && <WebFlowDiagram />}
              {currentSegment.id === 'seg-2-env-setup' && <TerminalSimulator />}
              {currentSegment.id === 'seg-3-git-fundamentals' && <GitVisualizer />}
              {currentSegment.id === 'seg-4-html-css' && <BoxModelPlayground />}

              {/* Capstone Lab Preview */}
              {currentSegment.id === 'seg-5-lab-walkthrough' && (
                <div
                  className={`p-6 rounded-2xl border space-y-4 ${
                    isDark
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-lg font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Guided Project: Personal Profile Page Architecture
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-semibold">
                      13 Step Progressive Build
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div
                      className={`p-3 rounded-xl border ${
                        isDark
                          ? 'bg-slate-950 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <strong className="block text-blue-400 mb-1">
                        Phase 1: Markup (HTML5)
                      </strong>
                      Scaffold index.html with &lt;header&gt;, &lt;main&gt;, and &lt;footer&gt; landmarks. Avoid generic div soup.
                    </div>
                    <div
                      className={`p-3 rounded-xl border ${
                        isDark
                          ? 'bg-slate-950 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <strong className="block text-purple-400 mb-1">
                        Phase 2: Styling (CSS3)
                      </strong>
                      Apply universal reset (* {`{ box-sizing: border-box }`}), custom typography scales, and avatar borders.
                    </div>
                    <div
                      className={`p-3 rounded-xl border ${
                        isDark
                          ? 'bg-slate-950 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <strong className="block text-emerald-400 mb-1">
                        Phase 3: Git & Hosting
                      </strong>
                      git init, atomic commit, push to GitHub remote, and activate GitHub Pages / Vercel preview.
                    </div>
                  </div>
                </div>
              )}

              {/* Homework Workflow Preview */}
              {currentSegment.id === 'seg-6-homework' && (
                <div
                  className={`p-6 rounded-2xl border space-y-4 ${
                    isDark
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-slate-300'
                  }`}
                >
                  <h3
                    className={`text-lg font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    The Dual-Section Expansion & Separate PR Protocol
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div
                      className={`p-4 rounded-xl border space-y-2 ${
                        isDark
                          ? 'bg-slate-950 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="font-bold font-mono text-blue-400 flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>PR #1: Feature Section 1</span>
                      </div>
                      <p>
                        Create branch <code>feature/add-skills</code> from main. Commit and push. Open PR #1 on GitHub.
                      </p>
                    </div>

                    <div
                      className={`p-4 rounded-xl border space-y-2 ${
                        isDark
                          ? 'bg-slate-950 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="font-bold font-mono text-emerald-400 flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>PR #2: Feature Section 2</span>
                      </div>
                      <p>
                        Switch back to main. Create branch <code>feature/add-projects</code>. Commit and push. Open PR #2.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Final Checkpoint Verification */}
              {currentSegment.id === 'seg-7-checkpoint' && (
                <div
                  className={`p-6 rounded-2xl border text-center space-y-3 ${
                    isDark
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-slate-300'
                  }`}
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h3
                    className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Week 01 Foundations Session Concluded!
                  </h3>
                  <p
                    className={`text-xs max-w-lg mx-auto ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Review the official deliverables specification, complete the 12-item checklist, and download the print-ready cheat-sheets from the portal.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SUBSTEP 3: Checkpoint Slide */}
        {slideSubStep === 'checkpoint' && (
          <div className="space-y-6 my-auto max-w-4xl mx-auto w-full animate-fadeIn">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500">
              <HelpCircle className="w-4 h-4" />
              <span>CLASS CHECKPOINT & RETENTION CHECK</span>
            </div>

            {currentSegment.checkpointQuestion ? (
              <div
                className={`rounded-2xl p-6 md:p-8 space-y-5 shadow-2xl border ${
                  isDark
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-300 text-slate-900'
                }`}
              >
                <h2
                  className={`text-lg sm:text-2xl font-bold leading-relaxed ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {currentSegment.checkpointQuestion}
                </h2>

                <div className="space-y-2.5">
                  {currentSegment.checkpointOptions?.map((opt) => (
                    <div
                      key={opt.id}
                      className={`p-3.5 rounded-xl border text-sm flex items-start gap-3 ${
                        opt.isCorrect
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                          : isDark
                          ? 'bg-slate-950 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center font-mono font-bold text-xs shrink-0 text-slate-200">
                        {opt.id.toUpperCase()}
                      </span>
                      <div>
                        <div className="font-medium leading-snug">{opt.text}</div>
                        {opt.isCorrect && (
                          <div className="text-xs text-emerald-400 mt-1 font-mono font-semibold">
                            ✓ {opt.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className={`p-8 rounded-2xl border text-center space-y-2 ${
                  isDark
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-300'
                }`}
              >
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                <h3
                  className={`text-lg font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Segment Milestone Verified
                </h3>
                <p
                  className={`text-xs ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Ready to proceed to next instructional phase.
                </p>
              </div>
            )}

            <div
              className={`p-4 rounded-xl border text-xs flex items-start gap-2 ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                  : 'bg-slate-100 border-slate-300 text-slate-700'
              }`}
            >
              <span className="font-semibold text-blue-500 shrink-0">
                Transition to Next:
              </span>
              <span>{currentSegment.transitionToNext}</span>
            </div>
          </div>
        )}

        {/* Collapsible Instructor Talking Points Overlay */}
        {showInstructorNotes && (
          <div className="mt-4 p-4 bg-purple-950/40 border border-purple-500/40 rounded-xl text-xs space-y-2 font-mono">
            <div className="flex items-center justify-between text-purple-300 font-bold">
              <span>INSTRUCTOR TALKING POINTS & TIMING SAFELINE</span>
              <span>{currentSegment.shortTitle}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300 font-sans">
              <div>
                <strong className="text-amber-400 font-mono">IF BEHIND:</strong>{' '}
                {currentSegment.ifBehindCues}
              </div>
              <div>
                <strong className="text-emerald-400 font-mono">IF AHEAD:</strong>{' '}
                {currentSegment.ifAheadCues}
              </div>
            </div>
            {currentSegment.keyQuestions && currentSegment.keyQuestions.length > 0 && (
              <div className="pt-1 text-slate-300 font-sans">
                <strong className="text-blue-300 font-mono">
                  Questions to Ask Class:
                </strong>{' '}
                {currentSegment.keyQuestions.join(' · ')}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Presentation Footer Navigation */}
      <footer
        className={`h-14 sm:h-16 px-4 sm:px-6 border-t flex items-center justify-between shrink-0 select-none ${
          isDark
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-slate-300 text-slate-900 shadow-sm'
        }`}
      >
        {/* Left: Previous Button */}
        <button
          onClick={goToPrev}
          disabled={currentSegmentIdx === 0 && slideSubStep === 'concept'}
          className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-30 ${
            isDark
              ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
              : 'bg-slate-200 hover:bg-slate-300 text-slate-800'
          }`}
        >
          <ChevronLeft className="w-4 h-4" /> Previous (←)
        </button>

        {/* Center: Slide Jump Dots */}
        <div className="flex items-center gap-2">
          {ALL_SLIDES.map((seg, idx) => (
            <button
              key={seg.id}
              onClick={() => {
                setCurrentSegmentIdx(idx);
                setSlideSubStep('concept');
              }}
              className={`h-2 rounded-full transition-all ${
                idx === currentSegmentIdx
                  ? 'w-8 bg-blue-500'
                  : isDark
                  ? 'w-2 bg-slate-800 hover:bg-slate-700'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              title={`Slide ${idx + 1}: ${seg.shortTitle}`}
            />
          ))}
        </div>

        {/* Right: Next Button */}
        <button
          onClick={goToNext}
          className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95"
        >
          Next (→) <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
};
