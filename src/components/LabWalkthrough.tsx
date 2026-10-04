import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Copy, Check, Terminal, Sparkles, AlertCircle, FileCode, Shield } from 'lucide-react';
import { LAB_STEPS } from '../data/curriculumData';

export const LabWalkthrough: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const activeStep = LAB_STEPS[activeStepIndex] || LAB_STEPS[0];

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
            <span>HANDS-ON LAB WALKTHROUGH</span>
            <span>·</span>
            <span>10 SEQUENTIAL MILESTONES</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Build, Commit & Deploy Your Personal Profile Page
          </h3>
          <p className="text-xs text-slate-400">
            From local directory creation to GitHub repository and live preview deployment.
          </p>
        </div>

        <div className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
          Step <strong className="text-blue-400">{activeStep.stepNumber}</strong> of {LAB_STEPS.length}
        </div>
      </div>

      {/* Step Navigator Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-1.5">
        {LAB_STEPS.map((step, idx) => {
          const isActive = idx === activeStepIndex;
          return (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-2 rounded-lg border text-center transition-all ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-500 font-bold shadow-md'
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="text-[10px] font-mono opacity-80 uppercase">Step</div>
              <div className="text-sm font-mono font-bold">{step.stepNumber}</div>
            </button>
          );
        })}
      </div>

      {/* Active Step Card */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 font-mono font-bold flex items-center justify-center text-xs">
              0{activeStep.stepNumber}
            </span>
            <div>
              <h4 className="text-base font-bold text-white">
                {activeStep.title}
              </h4>
              {activeStep.commandOrFile && (
                <div className="text-xs font-mono text-emerald-400">
                  Target: {activeStep.commandOrFile}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeStepIndex === 0}
              className="px-3 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => setActiveStepIndex((prev) => Math.min(LAB_STEPS.length - 1, prev + 1))}
              disabled={activeStepIndex === LAB_STEPS.length - 1}
              className="px-3 py-1 text-xs rounded bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 transition-colors flex items-center gap-1"
            >
              Next Milestone <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Objective & Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {activeStep.objective && (
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
              <span className="font-bold text-blue-400 font-mono text-[10px] uppercase block">
                STEP OBJECTIVE
              </span>
              <p className="text-slate-200 leading-relaxed font-sans">{activeStep.objective}</p>
            </div>
          )}
          {activeStep.explanation && (
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
              <span className="font-bold text-emerald-400 font-mono text-[10px] uppercase block">
                WHY THIS MATTERS
              </span>
              <p className="text-slate-300 leading-relaxed font-sans">{activeStep.explanation}</p>
            </div>
          )}
        </div>

        {/* Code / Command Block */}
        {activeStep.codeSnippet && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5 text-blue-400" />
                Executable Code / Terminal Command
              </span>
              <button
                onClick={() => handleCopyCode(activeStep.codeSnippet!, activeStepIndex)}
                className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 transition-colors"
              >
                {copiedIndex === activeStepIndex ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy Snippet
                  </>
                )}
              </button>
            </div>
            <pre className="bg-slate-900 p-3.5 rounded-lg border border-slate-800 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[220px]">
              {activeStep.codeSnippet}
            </pre>
          </div>
        )}

        {/* Expected Result & Common Mistake Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {activeStep.expectedResult && (
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
              <span className="font-bold text-emerald-400 font-mono text-[10px] uppercase flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> EXPECTED RESULT
              </span>
              <p className="text-slate-300 leading-relaxed font-sans">{activeStep.expectedResult}</p>
            </div>
          )}
          {activeStep.commonMistake && (
            <div className="p-3 bg-slate-900 rounded-lg border border-amber-500/30 space-y-1">
              <span className="font-bold text-amber-400 font-mono text-[10px] uppercase flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> COMMON MISTAKE
              </span>
              <p className="text-amber-200 leading-relaxed font-sans">{activeStep.commonMistake}</p>
            </div>
          )}
        </div>

        {/* Completion Check Tip */}
        <div className="flex items-start gap-2 bg-emerald-950/20 border border-emerald-500/30 p-3 rounded-lg text-xs text-emerald-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-emerald-400">Completion Check:</strong> {activeStep.completionCheck || activeStep.verificationTip}
          </div>
        </div>

        {/* AI Assisted Engineering Prompt (Part 51) */}
        {activeStep.aiAssistPrompt && (
          <div className="flex items-start gap-2 bg-purple-950/20 border border-purple-500/30 p-3 rounded-lg text-xs text-purple-200">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-semibold text-purple-300">Responsible AI Pair-Programming Prompt:</span>
              <p className="italic text-slate-300 font-mono text-[11px]">
                {activeStep.aiAssistPrompt}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* AI-Assisted Engineering Discipline Card (Part 51) */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
          <Shield className="w-4 h-4" />
          <span>The MIHORA.TECH AI Engineering Protocol (Human Accountability)</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          AI coding assistants are part of modern software engineering teams. From Week 1, the rule is strict: <strong>The AI tool can type, but YOU are accountable.</strong> You must be able to explain every single line you commit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
            <div className="font-semibold text-slate-200 mb-1">1. Precise Intent</div>
            <p className="text-slate-400">
              State constraints before prompting. Vague prompts create plausible but subtly broken code.
            </p>
          </div>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
            <div className="font-semibold text-slate-200 mb-1">2. Line-by-Line Review</div>
            <p className="text-slate-400">
              Read every suggestion before accepting it. You cannot defend what you haven’t read in code reviews.
            </p>
          </div>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
            <div className="font-semibold text-slate-200 mb-1">3. Hand-Crafted First Version</div>
            <p className="text-slate-400">
              In Weeks 1–3, write your initial HTML & Git commands by hand to establish solid muscular memory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
