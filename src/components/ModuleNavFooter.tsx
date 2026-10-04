import React from 'react';
import { ArrowLeft, ArrowRight, Home, CheckCircle2 } from 'lucide-react';
import { getNavigationContext } from '../data/flowData';

interface ModuleNavFooterProps {
  currentModuleId: string;
  onNavigate: (moduleId: string) => void;
}

export const ModuleNavFooter: React.FC<ModuleNavFooterProps> = ({
  currentModuleId,
  onNavigate,
}) => {
  const { currentStep, currentStepNumber, totalSteps, prevStep, nextStep } =
    getNavigationContext(currentModuleId);

  return (
    <div className="mt-12 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
      <div>
        {prevStep ? (
          <button
            onClick={() => onNavigate(prevStep.id)}
            className="group flex items-center gap-2.5 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-semibold border border-slate-800 hover:border-slate-700 transition-all text-left"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-0.5 transition-transform" />
            <div>
              <span className="text-[10px] text-slate-500 font-mono block uppercase">
                Step {prevStep.stepNumber.toString().padStart(2, '0')} · {prevStep.badge}
              </span>
              <span className="font-semibold text-slate-200 group-hover:text-blue-400">
                {prevStep.shortTitle}
              </span>
            </div>
          </button>
        ) : (
          <button
            onClick={() => onNavigate('overview')}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-slate-400 rounded-xl text-xs font-semibold border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-blue-400" />
            <span>Curriculum Overview</span>
          </button>
        )}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onNavigate('overview')}
          className="px-3.5 py-2.5 bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-slate-200 rounded-xl text-xs font-medium border border-slate-800 transition-colors flex items-center gap-1.5"
          title="View entire Week 01 Syllabus map"
        >
          <Home className="w-3.5 h-3.5 text-blue-400" />
          <span className="hidden sm:inline">Overview Map</span>
        </button>

        {nextStep ? (
          <button
            onClick={() => onNavigate(nextStep.id)}
            className="group flex items-center gap-2.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md hover:scale-[1.02] text-right"
          >
            <div>
              <span className="text-[10px] text-blue-200 font-mono block uppercase">
                Next Step {nextStep.stepNumber.toString().padStart(2, '0')} · {nextStep.badge}
              </span>
              <span className="font-semibold text-white">
                {nextStep.shortTitle}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
          </button>
        ) : (
          <button
            onClick={() => onNavigate('completion')}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Finish Week 01 Foundations</span>
          </button>
        )}
      </div>
    </div>
  );
};
