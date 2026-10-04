import React from 'react';
import { Clock, Sparkles, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { MODULE_ROUTES } from '../data/navigationData';

interface ModuleHeaderProps {
  moduleId: string;
  badge?: string;
  keyTakeaway: string;
}

export const ModuleHeader: React.FC<ModuleHeaderProps> = ({
  moduleId,
  badge,
  keyTakeaway,
}) => {
  const route = MODULE_ROUTES.find((m) => m.id === moduleId);
  if (!route) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 shadow-xl relative overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top breadcrumb & meta row */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 relative z-10">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono">
          <span className="text-slate-400">WEEK 01 FOUNDATIONS</span>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-blue-400 font-semibold">{route.category.toUpperCase()}</span>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
            MODULE {route.number}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>~{route.estimatedMinutes} Min Study Time</span>
          </div>

          {route.isInteractive && (
            <div className="flex items-center gap-1.5 bg-purple-950/40 text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/30">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Interactive Sandbox</span>
            </div>
          )}
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-2 max-w-4xl relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {route.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          {route.description}
        </p>
      </div>

      {/* Core Learning Takeaway Banner */}
      <div className="p-3.5 sm:p-4 bg-slate-950/80 rounded-xl border border-slate-800/90 flex items-start gap-2.5 sm:gap-3 text-xs text-slate-300 relative z-10">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-white font-mono uppercase tracking-wider text-[11px] block mb-0.5">
            Core Engineering Takeaway:
          </strong>
          <span className="leading-relaxed font-sans text-slate-200">{keyTakeaway}</span>
        </div>
      </div>
    </div>
  );
};
