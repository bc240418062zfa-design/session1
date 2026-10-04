import React from 'react';
import { Layers, ArrowRight, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPRESSION_REPORT, TIME_MODEL } from '../data/curriculumData';

export const CompressionReport: React.FC = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
            <span>PEDAGOGICAL RECONCILIATION</span>
            <span>·</span>
            <span>CURRICULUM AUDIT</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            60-Min Original vs. 50-Min Instructional Core Compression Report
          </h3>
          <p className="text-xs text-slate-400">
            Hard constraint validation: Exactly 50 instructional minutes reconciled with source material.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400">
            Original: 60 min (Syllabus)
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
          <span className="px-2.5 py-1 rounded bg-blue-600/20 border border-blue-500/40 text-blue-300 font-bold">
            Live Core: 50.0 min
          </span>
        </div>
      </div>

      {/* Reconciliation Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
              <th className="py-2.5 px-3">Original Topic</th>
              <th className="py-2.5 px-3">Original Agenda</th>
              <th className="py-2.5 px-3">New Live Core</th>
              <th className="py-2.5 px-3">Status</th>
              <th className="py-2.5 px-3">Pedagogical Rationale</th>
              <th className="py-2.5 px-3">Displaced Depth Location</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-sans">
            {COMPRESSION_REPORT.map((item) => (
              <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3 px-3 font-semibold text-slate-200 min-w-[180px]">
                  {item.originalTopic}
                </td>
                <td className="py-3 px-3 font-mono text-slate-400 whitespace-nowrap">
                  {item.originalMinutes > 0 ? `${item.originalMinutes} min` : 'Unscheduled'}
                  <div className="text-[10px] text-slate-500">{item.originalTimeRange}</div>
                </td>
                <td className="py-3 px-3 font-mono text-blue-400 font-bold whitespace-nowrap">
                  {item.newMinutes > 0 ? `${item.newMinutes} min` : 'Deferred'}
                  {item.newTimeRange && (
                    <div className="text-[10px] text-slate-500 font-normal">{item.newTimeRange}</div>
                  )}
                </td>
                <td className="py-3 px-3 whitespace-nowrap font-mono text-[11px]">
                  <span
                    className={`px-2 py-0.5 rounded font-semibold ${
                      item.status === 'CORE LIVE'
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : item.status === 'LIVE DEMO'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : item.status === 'GUIDED PRACTICE'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-3 text-slate-300 min-w-[240px] leading-relaxed">
                  {item.rationale}
                </td>
                <td className="py-3 px-3 text-slate-400 font-mono text-[11px] min-w-[180px]">
                  {item.movedTo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Audit Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
        <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-slate-200">5-50-5 Strict Rhythm</div>
            <p className="text-slate-400 text-[11px] leading-relaxed mt-0.5">
              5m orientation (09:30-09:35) + 50m core teaching (09:35-10:25) + 5m wrap-up (10:25-10:30).
            </p>
          </div>
        </div>

        <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-slate-200">Git Weight Preserved</div>
            <p className="text-slate-400 text-[11px] leading-relaxed mt-0.5">
              Git allocated 17 min (34% of instructional core) per mentor note ("Spend real time on Git now").
            </p>
          </div>
        </div>

        <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-slate-200">Zero Topic Loss</div>
            <p className="text-slate-400 text-[11px] leading-relaxed mt-0.5">
              Advanced protocol details and Flexbox/Grid cleanly partitioned into Extra Notes and Week 2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
