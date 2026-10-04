import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Code, Sparkles, Compass } from 'lucide-react';
import { EXTRA_NOTES } from '../data/curriculumData';

export const ExtraNotesSection: React.FC = () => {
  const [expandedNoteId, setExpandedNoteId] = useState<string>(EXTRA_NOTES[0].id);

  const toggleNote = (id: string) => {
    setExpandedNoteId((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-purple-400 font-medium">
            <span>POST-SESSION ASYNCHRONOUS STUDY</span>
            <span>·</span>
            <span>EXTRA TECHNICAL DEPTH</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Supplemental Extra Notes & Architectural Internals
          </h3>
          <p className="text-xs text-slate-400">
            Advanced conceptual material moved outside the 50-minute core to protect live teaching pacing.
          </p>
        </div>

        <div className="text-xs font-mono bg-purple-500/10 border border-purple-500/20 text-purple-300 px-3 py-1 rounded-lg">
          POST-SESSION EXTRA MATERIAL
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {EXTRA_NOTES.map((note) => {
          const isExpanded = expandedNoteId === note.id;
          return (
            <div
              key={note.id}
              className={`rounded-xl border transition-all ${
                isExpanded ? 'bg-slate-950 border-purple-500/40 shadow-lg' : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => toggleNote(note.id)}
                className="w-full p-4 text-left flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/15 text-purple-300 font-mono font-bold flex items-center justify-center text-xs shrink-0">
                    {note.number}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {note.title}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {note.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-slate-400 shrink-0">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-900 space-y-4">
                  <p className="text-xs text-slate-300 italic bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    {note.summary}
                  </p>

                  <div className="space-y-4">
                    {note.sections.map((sec, idx) => (
                      <div key={idx} className="space-y-2">
                        <h5 className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                          {sec.heading}
                        </h5>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          {sec.body}
                        </p>
                        {sec.codeSnippet && (
                          <pre className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                            {sec.codeSnippet}
                          </pre>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
