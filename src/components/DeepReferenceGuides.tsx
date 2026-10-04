import React, { useState } from 'react';
import {
  Keyboard,
  GitPullRequest,
  FileCode,
  Sliders,
  HelpCircle,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Layers,
  BookOpen,
} from 'lucide-react';
import {
  VSCODE_SHORTCUTS,
  GIT_EMERGENCY_GUIDE,
  HTML_SEMANTIC_MATRIX,
  CSS_SPECIFICITY_GUIDE,
  HTTP_STATUS_DICTIONARY,
  INTERVIEW_QUESTIONS,
} from '../data/curriculumData';

export const DeepReferenceGuides: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'shortcuts' | 'gitFixes' | 'semantics' | 'specificity' | 'httpCodes' | 'interviews'
  >('shortcuts');
  const [expandedInterviewIdx, setExpandedInterviewIdx] = useState<number | null>(0);
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(text);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
            <span>EXPANDED TECHNICAL COMPENDIUM</span>
            <span>·</span>
            <span>AUTHORITATIVE FOUNDATIONS REFERENCE</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Deep Technical Guides & Reference Handbooks
          </h3>
          <p className="text-xs text-slate-400">
            Expanded reference data on VS Code, Git emergency fixes, HTML5 semantics, CSS cascade math, and interview questions.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('shortcuts')}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'shortcuts'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Keyboard className="w-3.5 h-3.5" /> VS Code Shortcuts
          </button>
          <button
            onClick={() => setActiveTab('gitFixes')}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'gitFixes'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <GitPullRequest className="w-3.5 h-3.5 text-emerald-400" /> Git Emergency Fixes
          </button>
          <button
            onClick={() => setActiveTab('semantics')}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'semantics'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-amber-400" /> HTML5 Semantics
          </button>
          <button
            onClick={() => setActiveTab('specificity')}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'specificity'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 text-purple-400" /> CSS Specificity
          </button>
          <button
            onClick={() => setActiveTab('httpCodes')}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'httpCodes'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" /> HTTP Status Codes
          </button>
          <button
            onClick={() => setActiveTab('interviews')}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'interviews'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-rose-400" /> Interview QA
          </button>
        </div>
      </div>

      {/* TAB 1: VS CODE SHORTCUTS */}
      {activeTab === 'shortcuts' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Essential Keyboard Shortcuts for High-Velocity Development</span>
            <span className="font-mono text-[11px] text-blue-400">macOS & Windows</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse font-sans">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-2.5 px-3">Action</th>
                  <th className="py-2.5 px-3">macOS Hotkey</th>
                  <th className="py-2.5 px-3">Windows / Linux Hotkey</th>
                  <th className="py-2.5 px-3">Purpose & Time-Saving Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {VSCODE_SHORTCUTS.map((sc, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 px-3 font-semibold text-slate-200 whitespace-nowrap">
                      {sc.action}
                    </td>
                    <td className="py-3 px-3 font-mono text-blue-300 font-semibold whitespace-nowrap">
                      <kbd className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs shadow-sm">
                        {sc.mac}
                      </kbd>
                    </td>
                    <td className="py-3 px-3 font-mono text-emerald-300 font-semibold whitespace-nowrap">
                      <kbd className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs shadow-sm">
                        {sc.win}
                      </kbd>
                    </td>
                    <td className="py-3 px-3 text-slate-300 leading-relaxed text-xs">
                      {sc.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400 flex items-start gap-2">
            <span className="text-amber-400 font-bold shrink-0 font-mono">PRO TIP:</span>
            <span>
              Always configure <code className="text-blue-300 font-mono">"editor.formatOnSave": true</code> in your VS Code <code className="text-blue-300 font-mono">settings.json</code> so your code formats cleanly on every save automatically.
            </span>
          </div>
        </div>
      )}

      {/* TAB 2: GIT EMERGENCY FIXES */}
      {activeTab === 'gitFixes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Real-World Emergency Solutions for Common Git Missteps</span>
            <span className="text-[11px] font-mono text-emerald-400">Battle-Tested Commands</span>
          </div>

          <div className="space-y-3">
            {GIT_EMERGENCY_GUIDE.map((fix, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2.5 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {fix.problem}
                    </h4>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                      fix.safetyLevel === 'Safe'
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                        : fix.safetyLevel === 'Moderate'
                        ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    Safety: {fix.safetyLevel}
                  </span>
                </div>

                <div className="text-xs text-slate-400">
                  <strong>Symptom:</strong> {fix.symptom}
                </div>

                <div className="relative">
                  <pre className="bg-slate-900 p-3 rounded-lg border border-slate-800/80 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                    {fix.solutionCommand}
                  </pre>
                  <button
                    onClick={() => handleCopy(fix.solutionCommand)}
                    className="absolute top-2 right-2 p-1 text-slate-400 hover:text-white bg-slate-800 rounded transition-colors text-[10px] flex items-center gap-1"
                  >
                    {copiedSnippet === fix.solutionCommand ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                    <span>Copy</span>
                  </button>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {fix.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: HTML5 SEMANTICS MATRIX */}
      {activeTab === 'semantics' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>HTML5 Landmark Elements, Accessibility Roles & Boundaries</span>
            <span className="text-[11px] font-mono text-amber-400">W3C Specification</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {HTML_SEMANTIC_MATRIX.map((elem, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-amber-300">
                      {elem.tag}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500">
                      role: {elem.role}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300">
                    <strong className="text-emerald-400">When to use:</strong> {elem.whenToUse}
                  </div>
                  <div className="text-xs text-slate-400">
                    <strong className="text-rose-400">When NOT to use:</strong> {elem.whenNotToUse}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-900 mt-2">
                  <pre className="bg-slate-900 p-2.5 rounded border border-slate-800 text-[11px] font-mono text-blue-300 overflow-x-auto leading-relaxed">
                    {elem.codeSnippet}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: CSS SPECIFICITY & CASCADE RULES */}
      {activeTab === 'specificity' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Specificity Calculation Tuple & Vertical Margin Collapsing</span>
            <span className="text-[11px] font-mono text-purple-400">CSS Cascade 4</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-2.5 px-3">Selector Category</th>
                  <th className="py-2.5 px-3">Specificity Tuple</th>
                  <th className="py-2.5 px-3">Weight</th>
                  <th className="py-2.5 px-3">Concrete Example</th>
                  <th className="py-2.5 px-3">Cascade Explanation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {CSS_SPECIFICITY_GUIDE.map((rule, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 px-3 font-semibold text-slate-200">
                      {rule.selectorType}
                    </td>
                    <td className="py-3 px-3 font-mono text-purple-300 font-bold">
                      {rule.weightTuple}
                    </td>
                    <td className="py-3 px-3 font-mono text-slate-400">
                      {rule.numericWeight}
                    </td>
                    <td className="py-3 px-3 font-mono text-blue-300">
                      {rule.example}
                    </td>
                    <td className="py-3 px-3 text-slate-300 leading-relaxed text-xs">
                      {rule.explanation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Margin Collapsing Special Guide */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
            <h4 className="font-bold text-slate-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              The Law of Vertical Margin Collapsing in CSS:
            </h4>
            <p className="text-slate-300 leading-relaxed">
              When two vertical margins (top and bottom) touch between adjacent block elements, they do <strong>NOT</strong> add up together! Instead, they collapse into the <strong>single largest margin</strong>.
            </p>
            <div className="p-3 bg-slate-900 rounded font-mono text-[11px] text-purple-200">
              Element A (margin-bottom: 30px) + Element B (margin-top: 20px) = <strong>Rendered Gap is 30px</strong> (not 50px!). Horizontal margins NEVER collapse.
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: HTTP STATUS CODES DICTIONARY */}
      {activeTab === 'httpCodes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Essential HTTP Response Codes Every Full-Stack Engineer Must Know</span>
            <span className="text-[11px] font-mono text-cyan-400">RFC 9110 HTTP Semantics</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {HTTP_STATUS_DICTIONARY.map((st) => (
              <div
                key={st.code}
                className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 space-y-2 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-base font-extrabold ${
                      st.code < 300
                        ? 'text-emerald-400'
                        : st.code < 400
                        ? 'text-purple-400'
                        : st.code < 500
                        ? 'text-amber-400'
                        : 'text-rose-400'
                    }`}
                  >
                    {st.code} {st.phrase}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    {st.series}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {st.meaning}
                </p>
                <div className="pt-2 border-t border-slate-900 text-[11px] text-slate-400 italic">
                  <strong>Example:</strong> {st.practicalExample}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: JUNIOR INTERVIEW QA */}
      {activeTab === 'interviews' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Technical Interview Questions Asked at Top Software Companies</span>
            <span className="text-[11px] font-mono text-rose-400">FAANG & Startup Rubric</span>
          </div>

          <div className="space-y-3">
            {INTERVIEW_QUESTIONS.map((q, idx) => {
              const isExpanded = expandedInterviewIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all ${
                    isExpanded ? 'bg-slate-950 border-rose-500/40 shadow-lg' : 'bg-slate-950 border-slate-800'
                  }`}
                >
                  <button
                    onClick={() => setExpandedInterviewIdx(isExpanded ? null : idx)}
                    className="w-full p-4 text-left flex items-start justify-between gap-3 select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                        <span className="text-rose-400 font-bold">Q0{idx + 1}</span>
                        <span>·</span>
                        <span className="uppercase">{q.category}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white leading-snug">
                        {q.question}
                      </h4>
                    </div>
                    <div className="text-slate-400 shrink-0 mt-1">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-900 space-y-3 text-xs">
                      <div className="p-2.5 bg-slate-900/60 rounded-lg text-slate-400 italic font-mono text-[11px]">
                        <strong>Interviewer Intent:</strong> {q.interviewerIntent}
                      </div>

                      <div className="space-y-1">
                        <span className="font-semibold text-emerald-400 uppercase tracking-wider font-mono text-[11px] block">
                          Model Candidate Answer:
                        </span>
                        <p className="text-slate-200 leading-relaxed font-sans text-xs">
                          {q.juniorAnswer}
                        </p>
                      </div>

                      <div className="p-3 bg-rose-950/20 border border-rose-500/30 rounded-lg space-y-1">
                        <span className="font-semibold text-rose-300 font-mono text-[11px] block">
                          What Separates Junior from Mid/Senior:
                        </span>
                        <p className="text-slate-300 leading-relaxed">
                          {q.seniorDistinction}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
