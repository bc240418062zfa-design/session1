import React, { useState } from 'react';
import { Clock, ArrowRight, Play, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';
import { TIMELINE_SEGMENTS, TIME_MODEL } from '../data/curriculumData';
import { TimelineSegment } from '../types';

interface TimelineSectionProps {
  currentSegmentIndex: number;
  onSelectSegment: (index: number) => void;
  isInstructorMode: boolean;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  currentSegmentIndex,
  onSelectSegment,
  isInstructorMode,
}) => {
  const [expandedSegmentId, setExpandedSegmentId] = useState<string>(TIMELINE_SEGMENTS[0].id);

  const toggleExpand = (id: string) => {
    setExpandedSegmentId((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
            <span>PEDAGOGICAL ARCHITECTURE</span>
            <span>·</span>
            <span>50-MINUTE HARD CONSTRAINT</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Synchronized Class Timeline & Teaching Sequence
          </h3>
          <p className="text-xs text-slate-400">
            Mathematically verified 50-minute core (09:35 PM – 10:25 PM PKT) framed by orientation and closing.
          </p>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400">
            Phase 1: 5m
          </span>
          <span className="px-2.5 py-1 rounded bg-blue-600/20 border border-blue-500/40 text-blue-300 font-bold">
            Phase 2: 50m Core
          </span>
          <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400">
            Phase 3: 5m
          </span>
        </div>
      </div>

      {/* The 3 Overall Class Phases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
          <div className="flex items-center justify-between font-mono">
            <span className="text-slate-400">PHASE 1: ORIENTATION</span>
            <span className="text-slate-500">09:30 – 09:35 PM</span>
          </div>
          <div className="font-semibold text-slate-200">5 Minutes Joining & Audio Check</div>
          <p className="text-slate-400 text-[11px] leading-relaxed">
            Attendance roll, audio check, setting learning expectations.
          </p>
        </div>

        <div className="bg-blue-950/20 p-3.5 rounded-xl border border-blue-500/30 space-y-1">
          <div className="flex items-center justify-between font-mono">
            <span className="text-blue-400 font-semibold">PHASE 2: INSTRUCTIONAL CORE</span>
            <span className="text-blue-300">09:35 – 10:25 PM</span>
          </div>
          <div className="font-semibold text-white">50 Minutes Technical Instruction</div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Hard constraint. 5 distinct instructional segments totaling exactly 50 minutes.
          </p>
        </div>

        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
          <div className="flex items-center justify-between font-mono">
            <span className="text-slate-400">PHASE 3: CLOSING & Q&A</span>
            <span className="text-slate-500">10:25 – 10:30 PM</span>
          </div>
          <div className="font-semibold text-slate-200">5 Minutes Questions & Homework Handover</div>
          <p className="text-slate-400 text-[11px] leading-relaxed">
            Clarifications, repository submission deadline, and Next Session briefing.
          </p>
        </div>
      </div>

      {/* The 5 Segments List */}
      <div className="space-y-3">
        {TIMELINE_SEGMENTS.map((seg, idx) => {
          const isCurrent = idx === currentSegmentIndex;
          const isExpanded = expandedSegmentId === seg.id;

          return (
            <div
              key={seg.id}
              className={`rounded-xl border transition-all ${
                isCurrent
                  ? 'bg-slate-950 border-blue-500/60 shadow-lg ring-1 ring-blue-500/30'
                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Segment Summary Bar */}
              <div
                onClick={() => toggleExpand(seg.id)}
                className="p-4 flex flex-wrap items-center justify-between gap-3 cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                      isCurrent
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    0{seg.order}
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">
                        {seg.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-800 text-blue-300">
                        {seg.teachingState}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">
                      {seg.startTime} – {seg.endTime} · <strong className="text-blue-400">{seg.durationMinutes} Minutes</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectSegment(idx);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      isCurrent
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    <Play className="w-3 h-3" />
                    <span>{isCurrent ? 'Active Segment' : 'Set as Current'}</span>
                  </button>

                  <div className="text-slate-400 p-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Expanded Segment Detail Grid */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-900 space-y-4 text-xs font-sans">
                  {/* Objective */}
                  <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-blue-400 font-bold block mb-1">
                      Learning Objective
                    </span>
                    <p className="text-slate-200 text-sm leading-relaxed">
                      {seg.learningObjective}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-bold block">
                        Instructor Action
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {seg.instructorAction}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-purple-400 font-bold block">
                        Student Action
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {seg.studentAction}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-900">
                    <div className="space-y-1">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-amber-400 font-bold block">
                        Live Demonstration
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {seg.demonstration}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 font-bold block">
                        Segment Checkpoint
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {seg.interactiveCheckpoint}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/40 rounded-lg border border-slate-800/80 text-[11px] text-slate-400 flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-200">Segment Transition:</strong> {seg.transitionToNext}
                    </span>
                  </div>

                  {/* Instructor Only Cues */}
                  {isInstructorMode && (
                    <div className="p-3 bg-purple-950/20 border border-purple-500/30 rounded-lg space-y-2">
                      <div className="font-mono text-[11px] text-purple-300 font-bold uppercase tracking-wider">
                        Instructor Secret Cues & Time Recovery Safelines
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
                        <div>
                          <strong className="text-amber-400 font-mono">IF BEHIND:</strong> {seg.ifBehindCues}
                        </div>
                        <div>
                          <strong className="text-emerald-400 font-mono">IF AHEAD:</strong> {seg.ifAheadCues}
                        </div>
                      </div>
                      {seg.commonMisconceptions.length > 0 && (
                        <div className="pt-1 text-slate-400">
                          <strong className="text-slate-300">Expected Student Confusion:</strong>{' '}
                          {seg.commonMisconceptions.join(' | ')}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
