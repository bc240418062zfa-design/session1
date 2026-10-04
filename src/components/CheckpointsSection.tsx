import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';
import { CHECKPOINTS } from '../data/curriculumData';

export const CheckpointsSection: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  const handleSelectOption = (checkpointId: string, optionId: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [checkpointId]: optionId }));
    setShowExplanation((prev) => ({ ...prev, [checkpointId]: true }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowExplanation({});
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = CHECKPOINTS.reduce((acc, chk) => {
    const chosenOptionId = selectedAnswers[chk.id];
    const isCorrect = chk.options.find((opt) => opt.id === chosenOptionId)?.isCorrect;
    return isCorrect ? acc + 1 : acc;
  }, 0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
            <span>TECHNICAL KNOWLEDGE CHECKPOINTS</span>
            <span>·</span>
            <span>WEEK 1 ASSESSMENT CRITERIA</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Conceptual Verification & Self-Assessment
          </h3>
          <p className="text-xs text-slate-400">
            Verify your mental models. Tests actual technical understanding rather than memorization.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
            Score: <strong className="text-blue-400">{correctCount}</strong> / {CHECKPOINTS.length} Passed
          </div>
          {answeredCount > 0 && (
            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-slate-200 p-1.5 rounded hover:bg-slate-800 transition-colors"
              title="Reset All Answers"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Questions Grid */}
      <div className="space-y-4">
        {CHECKPOINTS.map((chk, index) => {
          const selectedOptionId = selectedAnswers[chk.id];
          const hasAnswered = !!selectedOptionId;
          const chosenOption = chk.options.find((o) => o.id === selectedOptionId);
          const isCorrect = chosenOption?.isCorrect;

          return (
            <div
              key={chk.id}
              className={`p-4 rounded-xl border transition-all ${
                hasAnswered
                  ? isCorrect
                    ? 'bg-emerald-950/20 border-emerald-500/40'
                    : 'bg-rose-950/20 border-rose-500/40'
                  : 'bg-slate-950 border-slate-800'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-mono font-bold text-blue-400">
                    Checkpoint 0{index + 1}
                  </span>
                  <span>·</span>
                  <span className="text-slate-500 uppercase font-mono">{chk.topic}</span>
                </div>
                {hasAnswered && (
                  <div className="flex items-center gap-1 text-xs font-semibold">
                    {isCorrect ? (
                      <span className="text-emerald-400 flex items-center gap-1 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5" /> PASSED
                      </span>
                    ) : (
                      <span className="text-rose-400 flex items-center gap-1 font-mono">
                        <XCircle className="w-3.5 h-3.5" /> REVIEW NEEDED
                      </span>
                    )}
                  </div>
                )}
              </div>

              <h4 className="text-sm font-semibold text-white mb-2 leading-relaxed">
                {chk.question}
              </h4>

              <p className="text-xs text-slate-400 mb-3 italic">
                Context: {chk.conceptualContext}
              </p>

              {/* Options */}
              <div className="space-y-2">
                {chk.options.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(chk.id, opt.id)}
                      className={`w-full text-left p-3 rounded-lg border text-xs transition-all flex items-start gap-2.5 ${
                        isSelected
                          ? opt.isCorrect
                            ? 'bg-emerald-500/15 border-emerald-500 text-emerald-200'
                            : 'bg-rose-500/15 border-rose-500 text-rose-200'
                          : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 font-bold ${
                          isSelected
                            ? opt.isCorrect
                              ? 'bg-emerald-500 text-white'
                              : 'bg-rose-500 text-white'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {opt.id.toUpperCase()}
                      </span>
                      <span className="leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Technical Feedback Box */}
              {hasAnswered && chosenOption && (
                <div
                  className={`mt-3 p-3 rounded-lg text-xs leading-relaxed ${
                    isCorrect
                      ? 'bg-emerald-900/30 border border-emerald-500/40 text-emerald-300'
                      : 'bg-rose-900/30 border border-rose-500/40 text-rose-300'
                  }`}
                >
                  <strong className="block mb-0.5 font-semibold">
                    {isCorrect ? 'Technical Explanation:' : 'Correction & Reasoning:'}
                  </strong>
                  {chosenOption.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
