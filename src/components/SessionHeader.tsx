import React from 'react';
import { Calendar, Clock, ArrowRight, Play, CheckCircle2, UserCheck, Code, BookOpen } from 'lucide-react';
import { COURSE_INFO, TIME_MODEL } from '../data/curriculumData';
import { LivePktClock } from './LivePktClock';

interface SessionHeaderProps {
  onStartSession: () => void;
  onExploreMaterials: () => void;
}

export const SessionHeader: React.FC<SessionHeaderProps> = ({
  onStartSession,
  onExploreMaterials,
}) => {
  return (
    <div className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
      {/* Background architectural grid highlight (pure CSS, low cost) */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Meta badges row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="font-mono font-semibold text-blue-400 tracking-wider">
              {COURSE_INFO.organization}
            </span>
            <span className="text-slate-600">·</span>
            <span>{COURSE_INFO.program}</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300 font-medium">{COURSE_INFO.phase}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-mono font-semibold">
            WEEK 01 · PHASE 1 FOUNDATIONS
          </div>
        </div>

        {/* Title & Headline */}
        <div className="space-y-2 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {COURSE_INFO.sessionTitle}
          </h1>
          <p className="text-base text-slate-300 leading-relaxed font-sans max-w-3xl">
            {COURSE_INFO.goal}
          </p>
        </div>

        {/* Live Pakistan Clock & Elapsed Session Tracker */}
        <LivePktClock />

        {/* Real Live Session Schedule & Google Meet Logistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Routine Schedule</span>
            </div>
            <div className="text-xs font-semibold text-slate-200">
              Sat & Sun · 9:30 PM PKT
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              Asia/Karachi (UTC+5)
            </div>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Instructional Core</span>
            </div>
            <div className="text-xs font-semibold text-emerald-300 font-mono">
              50 Min Hard Constraint
            </div>
            <div className="text-[11px] text-slate-500">
              5m prep · 50m core · 5m Q&A
            </div>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Code className="w-3.5 h-3.5 text-rose-400" />
              <span>Week 1 Project</span>
            </div>
            <div className="text-xs font-semibold text-slate-200">
              Personal Profile Page
            </div>
            <div className="text-[11px] text-slate-400 font-mono truncate">
              Plain HTML + CSS + Git
            </div>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <UserCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>Admission Status</span>
            </div>
            <div className="text-xs font-semibold text-purple-300">
              Pre-Authorized Attendee
            </div>
            <div className="text-[11px] text-slate-500 truncate">
              Zero Lobby Delay
            </div>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={onStartSession}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Start 50-Min Teaching Flow</span>
          </button>

          <button
            onClick={onExploreMaterials}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm flex items-center gap-2 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Class Notes &amp; Starter Downloads</span>
          </button>
        </div>
      </div>
    </div>
  );
};
