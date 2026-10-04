import React from 'react';
import {
  BookOpen,
  Code,
  GitBranch,
  FileCode,
  CheckCircle2,
  AlertTriangle,
  Play,
  ArrowRight,
  Clock,
  Layers,
  Terminal,
  Globe,
  Sliders,
  Sparkles,
  Download,
  ShieldCheck,
  Calendar,
  Monitor,
} from 'lucide-react';
import { COURSE_INFO, TIME_MODEL } from '../../data/curriculumData';
import { MODULE_ROUTES, ModuleRoute } from '../../data/navigationData';
import { LivePktClock } from '../LivePktClock';

interface OverviewPageProps {
  onNavigate: (moduleId: string) => void;
  isInstructorMode: boolean;
  onOpenPresentationMode?: () => void;
}

export const OverviewPage: React.FC<OverviewPageProps> = ({
  onNavigate,
  isInstructorMode,
  onOpenPresentationMode,
}) => {
  // Group routes by category
  const categories: Array<{
    name: string;
    order: number;
    description: string;
    modules: ModuleRoute[];
  }> = [
    {
      name: 'Orientation & Session Schedule',
      order: 1,
      description: 'Course orientation, timeline constraints, and 50-minute teaching core.',
      modules: MODULE_ROUTES.filter((m) => m.category === 'Orientation'),
    },
    {
      name: 'Web Architecture & Networking',
      order: 2,
      description: 'Understanding the client-server lifecycle from URL input to rendered DOM.',
      modules: MODULE_ROUTES.filter((m) => m.category === 'Web Architecture'),
    },
    {
      name: 'Developer Tooling & Environment',
      order: 3,
      description: 'Configuring VS Code, terminal workflow, and Node.js LTS development runtime.',
      modules: MODULE_ROUTES.filter((m) => m.category === 'Developer Tools'),
    },
    {
      name: 'Version Control with Git & GitHub',
      order: 4,
      description: 'The three trees, atomic commits, branches, GitHub remotes, and pull requests.',
      modules: MODULE_ROUTES.filter((m) => m.category === 'Version Control'),
    },
    {
      name: 'Frontend Foundations: HTML & CSS',
      order: 5,
      description: 'Semantic markup, accessibility landmarks, the CSS Box Model, and typography.',
      modules: MODULE_ROUTES.filter((m) => m.category === 'Frontend Foundations'),
    },
    {
      name: 'Hands-on Project Lab & Deployment',
      order: 6,
      description: '13-step guided personal profile page build, GitHub Pages, and live preview links.',
      modules: MODULE_ROUTES.filter((m) => m.category === 'Hands-on Lab'),
    },
    {
      name: 'Weekly Assignments, Deliverable & Checkpoint',
      order: 7,
      description: 'Homework pull request workflow, required deliverables, and oral checkpoint proof.',
      modules: MODULE_ROUTES.filter((m) => m.category === 'Assignments & Checkpoint'),
    },
    {
      name: 'Reference Handbooks & Extra Notes',
      order: 8,
      description: 'Dense cheat sheets, browser downloads, CRP deep dives, and troubleshooting.',
      modules: MODULE_ROUTES.filter((m) => m.category === 'Reference & Notes'),
    },
  ];

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      {/* Session Hero Banner */}
      <div className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl space-y-5 sm:space-y-6">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-5 sm:space-y-6">
          {/* Meta badges row */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-mono text-slate-400">
              <span className="font-bold text-white tracking-wider font-mono">
                {COURSE_INFO.organization}
              </span>
              <span className="text-slate-600">·</span>
              <span>{COURSE_INFO.program}</span>
              <span className="text-slate-600">·</span>
              <span className="text-blue-400 font-semibold">{COURSE_INFO.phase}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              WEEK 01 • FOUNDATIONS ONLY
            </div>
          </div>

          {/* Title & Headline */}
          <div className="space-y-2 sm:space-y-3 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {COURSE_INFO.sessionTitle}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-sans max-w-3xl">
              {COURSE_INFO.goal}
            </p>
          </div>

          {/* Live Pakistan Clock & Session Tracker */}
          <LivePktClock />

          {/* Schedule & Routine Grid (Zero Google Meet invitation UI) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 text-xs">
            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>Routine Schedule</span>
              </div>
              <div className="font-semibold text-slate-200">
                Sat &amp; Sun · 9:30 PM PKT
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                Asia/Karachi (UTC+5)
              </div>
            </div>

            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instructional Core</span>
              </div>
              <div className="font-semibold text-emerald-300 font-mono">
                50 Min Hard Constraint
              </div>
              <div className="text-[11px] text-slate-500">
                5m prep · 50m core · 5m Q&amp;A
              </div>
            </div>

            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <Code className="w-3.5 h-3.5 text-rose-400" />
                <span>Week 1 Project Lab</span>
              </div>
              <div className="font-semibold text-slate-200">
                Personal Profile Page
              </div>
              <div className="text-[11px] text-slate-400 font-mono truncate">
                Plain HTML + CSS + Git
              </div>
            </div>

            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                <span>Lecture Notes Guarantee</span>
              </div>
              <div className="font-semibold text-purple-300">
                Offline Notes &amp; Repos
              </div>
              <div className="text-[11px] text-slate-500 truncate">
                Provided After Every Class
              </div>
            </div>
          </div>

          {/* Core Authoritative Mandates: Mentor Note & Class Notes Promise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1">
            <div className="p-3.5 sm:p-4 bg-amber-500/10 rounded-2xl border border-amber-500/30 flex items-start gap-3 sm:gap-3.5 text-xs text-amber-200">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="font-mono uppercase text-amber-300 text-[11px] block">
                  Authoritative Mentor Note:
                </strong>
                <p className="italic font-medium leading-relaxed">
                  "{COURSE_INFO.mentorNote}"
                </p>
                <p className="text-[11px] text-slate-300 font-sans">
                  All 14 weeks of this program evaluate student progress through Git commits and pull requests.
                  Work that cannot be verified in the Git history cannot be credited.
                </p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 bg-blue-950/40 rounded-2xl border border-blue-500/30 flex items-start gap-3 sm:gap-3.5 text-xs text-blue-200">
              <BookOpen className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="font-mono uppercase text-blue-300 text-[11px] block">
                  Comprehensive Student Materials:
                </strong>
                <p className="leading-relaxed text-slate-200">
                  {COURSE_INFO.classNotesPromise}
                </p>
                <p className="text-[11px] text-slate-400">
                  Every concept is accompanied by runnable starter code, terminal walk-throughs, and downloadable offline cheat-sheets.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Primary Actions */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
            {onOpenPresentationMode && (
              <button
                onClick={onOpenPresentationMode}
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02]"
                title="Launch Classroom Presentation Mode for live teaching"
              >
                <Monitor className="w-4 h-4" />
                <span>Launch Classroom Presentation</span>
              </button>
            )}

            <button
              onClick={() => onNavigate('how-the-web-works')}
              className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Begin Lesson: How the Web Works (Topic 03)</span>
            </button>

            <button
              onClick={() => onNavigate('profile-lab')}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Code className="w-4 h-4 text-emerald-400" />
              <span>Jump to Profile Page Lab (Topic 18)</span>
            </button>

            <button
              onClick={() => onNavigate('cheat-sheets')}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download PDF Cheat Sheets (Topic 23)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Week 1 Pillar Summaries (Lab, Homework, Deliverable, Checkpoint) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div
          onClick={() => onNavigate('profile-lab')}
          className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 p-5 rounded-2xl space-y-2 cursor-pointer transition-all hover:bg-slate-900/80 group"
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-blue-400 font-bold font-mono uppercase text-[11px]">
              <Code className="w-4 h-4" /> Lab Project
            </span>
            <span className="text-[10px] text-slate-500 font-mono group-hover:text-blue-400">Topic 18 →</span>
          </div>
          <p className="text-slate-300 leading-relaxed font-sans">
            {COURSE_INFO.lab}
          </p>
        </div>

        <div
          onClick={() => onNavigate('homework')}
          className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 p-5 rounded-2xl space-y-2 cursor-pointer transition-all hover:bg-slate-900/80 group"
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-emerald-400 font-bold font-mono uppercase text-[11px]">
              <GitBranch className="w-4 h-4" /> Homework
            </span>
            <span className="text-[10px] text-slate-500 font-mono group-hover:text-emerald-400">Topic 20 →</span>
          </div>
          <p className="text-slate-300 leading-relaxed font-sans">
            {COURSE_INFO.homework}
          </p>
        </div>

        <div
          onClick={() => onNavigate('deliverable')}
          className="bg-slate-900 border border-slate-800 hover:border-purple-500/50 p-5 rounded-2xl space-y-2 cursor-pointer transition-all hover:bg-slate-900/80 group"
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-purple-400 font-bold font-mono uppercase text-[11px]">
              <FileCode className="w-4 h-4" /> Deliverable
            </span>
            <span className="text-[10px] text-slate-500 font-mono group-hover:text-purple-400">Topic 22 →</span>
          </div>
          <p className="text-slate-300 leading-relaxed font-sans">
            {COURSE_INFO.deliverables}
          </p>
        </div>

        <div
          onClick={() => onNavigate('checkpoint')}
          className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-5 rounded-2xl space-y-2 cursor-pointer transition-all hover:bg-slate-900/80 group"
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-amber-400 font-bold font-mono uppercase text-[11px]">
              <CheckCircle2 className="w-4 h-4" /> Checkpoint
            </span>
            <span className="text-[10px] text-slate-500 font-mono group-hover:text-amber-400">Topic 21 →</span>
          </div>
          <p className="text-slate-300 leading-relaxed font-sans">
            {COURSE_INFO.checkpointSummary}
          </p>
        </div>
      </div>

      {/* Complete Interactive Curriculum Map (All 24 Modules in Order) */}
      <div className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold">
              <span>WEEK 01 CURRICULUM ARCHITECTURE</span>
              <span>·</span>
              <span>24 DEDICATED FULL-PAGE MODULES</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight mt-1">
              Comprehensive Learning Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Every major module below is a full-fledged educational environment with technical explanations, code examples, interactive diagrams, and mistake prevention.
            </p>
          </div>

          <div className="text-right text-xs font-mono text-slate-500">
            <span>Progress: 100% Authored Content</span>
            <div className="text-[11px] text-emerald-400 font-semibold">Zero Placeholders</div>
          </div>
        </div>

        {/* Categories & Module Cards */}
        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-3">
              <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
                <span className="font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  {cat.name}
                </span>
                <span className="text-slate-500 font-sans hidden sm:inline">{cat.description}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.modules.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => onNavigate(m.id)}
                    className="bg-slate-900 border border-slate-800 hover:border-blue-500/60 p-4 rounded-xl flex flex-col justify-between gap-3 cursor-pointer transition-all hover:bg-slate-900/80 group shadow-md"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono font-bold text-[11px] border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          MOD {m.number}
                        </span>
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                          <Clock className="w-3 h-3 text-emerald-400" />
                          <span>~{m.estimatedMinutes}m</span>
                        </div>
                      </div>

                      <h3 className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors line-clamp-1">
                        {m.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-2">
                        {m.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs font-medium">
                      {m.isInteractive ? (
                        <span className="text-[10px] font-mono text-purple-400 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Interactive
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-slate-500">In-Depth Guide</span>
                      )}

                      <span className="text-blue-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-semibold text-[11px]">
                        Open Module <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
