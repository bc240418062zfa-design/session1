import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, SkipForward, Clock, AlertCircle, Radio } from 'lucide-react';
import { TIMELINE_SEGMENTS, TIME_MODEL } from '../data/curriculumData';
import { LivePktClock } from './LivePktClock';

interface LiveTimerProps {
  currentSegmentIndex: number;
  onSegmentChange: (index: number) => void;
  isCompact?: boolean;
}

export const LiveTimer: React.FC<LiveTimerProps> = ({
  currentSegmentIndex,
  onSegmentChange,
  isCompact = false,
}) => {
  const totalCoreSeconds = TIME_MODEL.coreMinutes * 60; // 50 min = 3000 seconds
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && elapsedSeconds < totalCoreSeconds) {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => {
          if (prev + 1 >= totalCoreSeconds) {
            setIsRunning(false);
            return totalCoreSeconds;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, elapsedSeconds, totalCoreSeconds]);

  // Determine current active segment based on elapsed time if running
  useEffect(() => {
    const elapsedMinutes = elapsedSeconds / 60;
    let accumulated = 0;
    for (let i = 0; i < TIMELINE_SEGMENTS.length; i++) {
      accumulated += TIMELINE_SEGMENTS[i].durationMinutes;
      if (elapsedMinutes < accumulated) {
        if (currentSegmentIndex !== i) {
          onSegmentChange(i);
        }
        break;
      }
    }
  }, [elapsedSeconds, currentSegmentIndex, onSegmentChange]);

  const toggleTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setElapsedSeconds(0);
    onSegmentChange(0);
  };

  const skipToNextSegment = () => {
    if (currentSegmentIndex < TIMELINE_SEGMENTS.length - 1) {
      const nextIndex = currentSegmentIndex + 1;
      let targetSec = 0;
      for (let i = 0; i < nextIndex; i++) {
        targetSec += TIMELINE_SEGMENTS[i].durationMinutes * 60;
      }
      setElapsedSeconds(targetSec);
      onSegmentChange(nextIndex);
    }
  };

  const currentSegment = TIMELINE_SEGMENTS[currentSegmentIndex] || TIMELINE_SEGMENTS[0];

  // Calculate segment remaining
  let segmentStartSec = 0;
  for (let i = 0; i < currentSegmentIndex; i++) {
    segmentStartSec += TIMELINE_SEGMENTS[i].durationMinutes * 60;
  }
  const segmentDurationSec = currentSegment.durationMinutes * 60;
  const segmentElapsedSec = Math.max(0, elapsedSeconds - segmentStartSec);
  const segmentRemainingSec = Math.max(0, segmentDurationSec - segmentElapsedSec);

  const totalRemainingSec = Math.max(0, totalCoreSeconds - elapsedSeconds);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (isCompact) {
    return (
      <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs">
        <LivePktClock isCompact={true} />
        <span className="text-slate-600">|</span>
        <div className="flex items-center gap-1.5 text-slate-400">
          <Clock className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-mono font-medium text-slate-200">
            {formatTime(totalRemainingSec)} core left
          </span>
        </div>
        <button
          onClick={toggleTimer}
          className="p-1 hover:bg-slate-800 rounded text-slate-300 hover:text-white transition-colors"
          title={isRunning ? 'Pause Timer' : 'Start Timer'}
          aria-label={isRunning ? 'Pause Timer' : 'Start Timer'}
        >
          {isRunning ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/95 border border-slate-800 rounded-xl p-4 shadow-xl backdrop-blur-md space-y-3">
      {/* Live PKT Time Bar */}
      <LivePktClock />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="font-mono">50-MIN HARD-CONSTRAINT CORE</span>
              <span>·</span>
              <span className={isRunning ? 'text-emerald-400 font-bold font-mono' : 'text-slate-400 font-mono'}>
                {isRunning ? '● RUNNING' : '○ PAUSED'}
              </span>
            </div>
            <div className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <span>Segment {currentSegment.order}: {currentSegment.title}</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTimer}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              isRunning
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25'
                : 'bg-blue-600 text-white hover:bg-blue-500'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-3.5 h-3.5" /> Pause
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" /> {elapsedSeconds === 0 ? 'Start 50m Clock' : 'Resume'}
              </>
            )}
          </button>
          <button
            onClick={skipToNextSegment}
            disabled={currentSegmentIndex >= TIMELINE_SEGMENTS.length - 1}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800 disabled:opacity-40 transition-colors"
            title="Next Segment"
            aria-label="Next Segment"
          >
            <SkipForward className="w-4 h-4" />
          </button>
          <button
            onClick={resetTimer}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800 transition-colors"
            title="Reset Timer"
            aria-label="Reset Timer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bars & Segment Breakdown */}
      <div className="space-y-2 pt-1 border-t border-slate-800/80">
        <div className="flex items-center justify-between text-xs">
          <div className="text-slate-400">
            Segment Remaining:{' '}
            <span className="font-mono text-slate-200 font-semibold">
              {formatTime(segmentRemainingSec)}
            </span>{' '}
            / {currentSegment.durationMinutes}:00 min
          </div>
          <div className="text-slate-400">
            Total Core Remaining:{' '}
            <span className="font-mono text-blue-400 font-semibold">
              {formatTime(totalRemainingSec)}
            </span>{' '}
            / 50:00 min
          </div>
        </div>

        {/* Overall progress bar */}
        <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden flex border border-slate-800/80">
          {TIMELINE_SEGMENTS.map((seg, idx) => {
            const widthPct = (seg.durationMinutes / TIME_MODEL.coreMinutes) * 100;
            const isCompleted = idx < currentSegmentIndex;
            const isCurrent = idx === currentSegmentIndex;
            return (
              <div
                key={seg.id}
                style={{ width: `${widthPct}%` }}
                className={`h-full border-r border-slate-900 transition-all ${
                  isCompleted
                    ? 'bg-blue-500'
                    : isCurrent
                    ? 'bg-blue-400 animate-pulse'
                    : 'bg-slate-800'
                }`}
                title={`${seg.shortTitle} (${seg.durationMinutes}m)`}
              />
            );
          })}
        </div>

        {/* Quick jump tabs */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {TIMELINE_SEGMENTS.map((seg, idx) => {
            const isActive = idx === currentSegmentIndex;
            return (
              <button
                key={seg.id}
                onClick={() => onSegmentChange(idx)}
                className={`text-xs px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 font-medium'
                    : 'bg-slate-950 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span className="font-mono text-[11px] text-slate-500">{seg.order}.</span>
                <span>{seg.shortTitle}</span>
                <span className="text-[11px] text-slate-500 font-mono">({seg.durationMinutes}m)</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Instructor Timing Safeguard */}
      {currentSegment.ifBehindCues && (
        <div className="pt-2.5 border-t border-slate-800/60 flex items-start gap-2 text-xs text-slate-400">
          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <span className="text-amber-400 font-medium">Pacing recovery cue:</span>{' '}
            {currentSegment.ifBehindCues}
          </p>
        </div>
      )}
    </div>
  );
};

