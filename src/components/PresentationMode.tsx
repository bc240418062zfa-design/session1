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
  RotateCcw,
  CheckCircle2,
  Layers,
  HelpCircle,
  AlertCircle,
  FileCode,
  Terminal as TerminalIcon,
  GitBranch,
} from 'lucide-react';
import { TIMELINE_SEGMENTS, TIME_MODEL, CHECKPOINTS, LAB_STEPS } from '../data/curriculumData';
import { WebFlowDiagram } from './WebFlowDiagram';
import { GitVisualizer } from './GitVisualizer';
import { BoxModelPlayground } from './BoxModelPlayground';
import { TerminalSimulator } from './TerminalSimulator';
import { CodePlayground } from './CodePlayground';

import { LivePktClock } from './LivePktClock';

interface PresentationModeProps {
  onExit: () => void;
  isInstructorMode: boolean;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({
  onExit,
  isInstructorMode,
}) => {
  const [currentSegmentIdx, setCurrentSegmentIdx] = useState<number>(0);
  const [slideSubStep, setSlideSubStep] = useState<'concept' | 'demo' | 'checkpoint'>('concept');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showInstructorNotes, setShowInstructorNotes] = useState<boolean>(isInstructorMode);

  // Embedded lightweight timer
  const [elapsedSec, setElapsedSec] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  const totalCoreSec = TIME_MODEL.coreMinutes * 60;

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
      } else if (e.key === ' ' && (e.target as HTMLElement).tagName !== 'INPUT' && (e.target as HTMLElement).tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsTimerRunning((prev) => !prev);
      } else if (e.key === 'Escape') {
        onExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSegmentIdx, slideSubStep]);

  const currentSegment = TIMELINE_SEGMENTS[currentSegmentIdx];

  const goToNext = () => {
    if (slideSubStep === 'concept') {
      setSlideSubStep('demo');
    } else if (slideSubStep === 'demo') {
      setSlideSubStep('checkpoint');
    } else {
      if (currentSegmentIdx < TIMELINE_SEGMENTS.length - 1) {
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

  // Find relevant checkpoint for this segment
  const segmentCheckpoint = CHECKPOINTS.find((c) => c.segmentId === currentSegment.id);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-slate-100 flex flex-col overflow-hidden select-none">
      {/* Top Bar for Presentation Mode */}
      <header className="h-16 px-6 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between shrink-0">
        {/* Left: Brand & Current Segment */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-tight text-white font-mono">
              MIHORA<span className="text-blue-500">.TECH</span>
            </span>
            <span className="text-xs text-slate-500">|</span>
            <span className="text-xs text-slate-400 font-mono">GOOGLE MEET PRESENTATION</span>
          </div>

          <div className="hidden md:flex items-center gap-2 pl-4 border-l border-slate-800">
            <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-400 font-mono text-xs flex items-center justify-center font-bold">
              {currentSegment.order}
            </span>
            <span className="text-sm font-semibold text-slate-200">
              {currentSegment.shortTitle}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              ({currentSegment.startTime} – {currentSegment.endTime})
            </span>
          </div>
        </div>

        {/* Center: Slide sub-step tabs */}
        <div className="hidden sm:flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setSlideSubStep('concept')}
            className={`px-3 py-1 rounded transition-colors ${
              slideSubStep === 'concept'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            1. Core Concept
          </button>
          <button
            onClick={() => setSlideSubStep('demo')}
            className={`px-3 py-1 rounded transition-colors ${
              slideSubStep === 'demo'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            2. Live Interactive Demo
          </button>
          <button
            onClick={() => setSlideSubStep('checkpoint')}
            className={`px-3 py-1 rounded transition-colors ${
              slideSubStep === 'checkpoint'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            3. Class Checkpoint
          </button>
        </div>

        {/* Right: Timer & Presentation Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LivePktClock isCompact={true} />
          </div>

          {/* Lightweight Timer */}
          <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-200">{formatTime(Math.max(0, totalCoreSec - elapsedSec))}</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="text-slate-400 hover:text-white"
              title={isTimerRunning ? 'Pause (Space)' : 'Play (Space)'}
            >
              {isTimerRunning ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
            </button>
          </div>

          <button
            onClick={() => setShowInstructorNotes(!showInstructorNotes)}
            className={`px-2.5 py-1 text-xs rounded border transition-colors ${
              showInstructorNotes
                ? 'bg-purple-600/20 text-purple-300 border-purple-500/40'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
            title="Toggle Instructor Talking Points"
          >
            Notes
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 text-slate-400 hover:text-slate-200 rounded hover:bg-slate-800 transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onExit}
            className="p-1.5 text-slate-400 hover:text-rose-400 rounded hover:bg-slate-800 transition-colors"
            title="Exit Presentation Mode (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Slide Stage (16:9 Viewport area) */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col justify-between max-w-7xl mx-auto w-full">
        {/* SUBSTEP 1: Core Concept Slide */}
        {slideSubStep === 'concept' && (
          <div className="space-y-6 animate-fadeIn my-auto">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 border border-blue-500/30">
                {currentSegment.teachingState}
              </span>
              <span>·</span>
              <span>Segment {currentSegment.order} of {TIMELINE_SEGMENTS.length}</span>
              <span>·</span>
              <span>{currentSegment.durationMinutes} Minutes Allotted</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
              {currentSegment.title}
            </h1>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-2xl max-w-4xl">
              <div>
                <h3 className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-1">
                  Primary Learning Objective
                </h3>
                <p className="text-lg md:text-xl text-slate-100 font-medium leading-relaxed">
                  {currentSegment.learningObjective}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 text-sm">
                <div>
                  <h4 className="text-xs uppercase font-mono text-emerald-400 tracking-wider mb-1">
                    Instructor Action
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-sans text-xs">
                    {currentSegment.instructorAction}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono text-blue-400 tracking-wider mb-1">
                    Student Action
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-sans text-xs">
                    {currentSegment.studentAction}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Next Cue */}
            <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
              <span>Next up:</span>
              <button
                onClick={() => setSlideSubStep('demo')}
                className="text-blue-400 hover:underline font-semibold"
              >
                Launch Live Interactive Demonstration →
              </button>
            </div>
          </div>
        )}

        {/* SUBSTEP 2: Interactive Demo Slide */}
        {slideSubStep === 'demo' && (
          <div className="space-y-4 animate-fadeIn my-auto w-full">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-bold">
                LIVE DEMO: {currentSegment.shortTitle}
              </span>
              <span>Use interactive controls on screen share</span>
            </div>

            {/* Render appropriate interactive widget per segment */}
            {currentSegment.id === 'seg-1-web-basics' && <WebFlowDiagram />}
            {currentSegment.id === 'seg-2-env-setup' && <TerminalSimulator />}
            {currentSegment.id === 'seg-3-git-fundamentals' && <GitVisualizer />}
            {currentSegment.id === 'seg-4-html-css' && <BoxModelPlayground />}
            {currentSegment.id === 'seg-5-lab-walkthrough' && <CodePlayground />}
          </div>
        )}

        {/* SUBSTEP 3: Checkpoint Slide */}
        {slideSubStep === 'checkpoint' && (
          <div className="space-y-6 animate-fadeIn my-auto max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <HelpCircle className="w-4 h-4" />
              <span>CLASS CHECKPOINT & RETENTION CHECK</span>
            </div>

            {segmentCheckpoint ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-2xl">
                <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                  {segmentCheckpoint.question}
                </h2>
                <div className="space-y-2.5">
                  {segmentCheckpoint.options.map((opt) => (
                    <div
                      key={opt.id}
                      className={`p-3.5 rounded-xl border text-sm flex items-start gap-3 ${
                        opt.isCorrect
                          ? 'bg-emerald-950/20 border-emerald-500/50 text-emerald-200'
                          : 'bg-slate-950 border-slate-800 text-slate-300'
                      }`}
                    >
                      <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center font-mono font-bold text-xs shrink-0 text-slate-300">
                        {opt.id.toUpperCase()}
                      </span>
                      <div>
                        <div className="font-medium leading-snug">{opt.text}</div>
                        {opt.isCorrect && (
                          <div className="text-xs text-emerald-400 mt-1 font-mono">
                            ✓ {opt.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Segment Milestone Verified</h3>
                <p className="text-xs text-slate-400">
                  Ready to proceed to next instructional phase.
                </p>
              </div>
            )}

            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-xs text-slate-300 flex items-start gap-2">
              <span className="font-semibold text-blue-400 shrink-0">Transition to Next:</span>
              <span>{currentSegment.transitionToNext}</span>
            </div>
          </div>
        )}

        {/* Collapsible Instructor Talking Points Overlay */}
        {showInstructorNotes && (
          <div className="mt-4 p-4 bg-purple-950/30 border border-purple-500/30 rounded-xl text-xs space-y-2 font-mono">
            <div className="flex items-center justify-between text-purple-300 font-bold">
              <span>INSTRUCTOR CUES & TIMING SAFELINE</span>
              <span>{currentSegment.shortTitle}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300 font-sans">
              <div>
                <strong className="text-amber-400 font-mono">IF BEHIND:</strong> {currentSegment.ifBehindCues}
              </div>
              <div>
                <strong className="text-emerald-400 font-mono">IF AHEAD:</strong> {currentSegment.ifAheadCues}
              </div>
            </div>
            {currentSegment.keyQuestions.length > 0 && (
              <div className="pt-1 text-slate-300 font-sans">
                <strong className="text-blue-300 font-mono">Questions to Ask Class:</strong>{' '}
                {currentSegment.keyQuestions.join(' · ')}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Presentation Footer Navigation */}
      <footer className="h-16 px-6 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 select-none">
        {/* Left: Previous Button */}
        <button
          onClick={goToPrev}
          disabled={currentSegmentIdx === 0 && slideSubStep === 'concept'}
          className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Previous (←)
        </button>

        {/* Center: Segment Jump Indicator */}
        <div className="flex items-center gap-2">
          {TIMELINE_SEGMENTS.map((seg, idx) => (
            <button
              key={seg.id}
              onClick={() => {
                setCurrentSegmentIdx(idx);
                setSlideSubStep('concept');
              }}
              className={`h-2 rounded-full transition-all ${
                idx === currentSegmentIdx
                  ? 'w-8 bg-blue-500'
                  : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
              title={`Jump to ${seg.shortTitle}`}
            />
          ))}
        </div>

        {/* Right: Next Button */}
        <button
          onClick={goToNext}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md"
        >
          Next (→) <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
};
