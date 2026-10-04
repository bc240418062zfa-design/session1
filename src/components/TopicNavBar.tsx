import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  GraduationCap,
  Briefcase,
  Download,
  ListFilter,
  CheckCircle2,
  Clock,
  User,
  Layers,
  Monitor,
} from 'lucide-react';
import { MASTER_FLOW_STEPS, FlowStep } from '../data/flowData';
import { MODULE_ROUTES } from '../data/navigationData';
import { exportNotesToPDF } from '../utils/pdfExport';
import { COURSE_INFO } from '../data/curriculumData';

interface TopicNavBarProps {
  currentModuleId: string;
  onNavigate: (moduleId: string) => void;
  isInstructorMode: boolean;
  onToggleInstructorMode: () => void;
  onOpenPresentationMode?: () => void;
}

export const TopicNavBar: React.FC<TopicNavBarProps> = ({
  currentModuleId,
  onNavigate,
  isInstructorMode,
  onToggleInstructorMode,
  onOpenPresentationMode,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);

  // Find step in master flow, default to step 1
  const flowIndex = MASTER_FLOW_STEPS.findIndex((s) => s.id === currentModuleId);
  const currentStep: FlowStep =
    flowIndex !== -1 ? MASTER_FLOW_STEPS[flowIndex] : MASTER_FLOW_STEPS[0];

  const prevStep = flowIndex > 0 ? MASTER_FLOW_STEPS[flowIndex - 1] : null;
  const nextStep =
    flowIndex !== -1 && flowIndex < MASTER_FLOW_STEPS.length - 1
      ? MASTER_FLOW_STEPS[flowIndex + 1]
      : null;

  const currentStepNumber = flowIndex !== -1 ? flowIndex + 1 : 1;
  const progressPercent = Math.round(
    (currentStepNumber / MASTER_FLOW_STEPS.length) * 100
  );

  const handleDownloadCurrentTopicPDF = () => {
    setIsDownloadingPdf(true);
    try {
      exportNotesToPDF({
        title: `${currentStep.badge}: ${currentStep.title}`,
        category: 'Week 01 Foundations Lecture Material',
        subtitle: `Presenter/Type: ${currentStep.speakerOrType} • ${currentStep.timeRange || ''}`,
        sections: [
          {
            heading: 'Core Objectives & Foundations Goal',
            content: `Goal for Week 01 Foundations:\n${COURSE_INFO.goal}\n\nMentor Rule:\n"${COURSE_INFO.mentorNote}"`,
          },
          {
            heading: 'Checkpoint & Hands-on Deliverable',
            content: `Checkpoint:\n${COURSE_INFO.checkpointSummary}\n\nHands-on Lab:\n${COURSE_INFO.lab}\n\nHomework:\n${COURSE_INFO.homework}\n\nDeliverable:\n${COURSE_INFO.deliverables}`,
          },
        ],
      });
    } catch (e) {
      console.error('PDF export error:', e);
    } finally {
      setTimeout(() => setIsDownloadingPdf(false), 1500);
    }
  };

  return (
    <div className="w-full bg-slate-900/95 border-b border-slate-800/80 sticky top-14 sm:top-16 z-30 backdrop-blur-md select-none transition-all">
      {/* Top Banner: Teacher Mode vs Student Mode Status */}
      <div
        className={`px-2.5 sm:px-4 lg:px-6 py-1 text-xs flex items-center justify-between gap-2 border-b transition-colors ${
          isInstructorMode
            ? 'bg-purple-950/60 border-purple-500/30 text-purple-200'
            : 'bg-blue-950/40 border-blue-500/20 text-blue-200'
        }`}
      >
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          {isInstructorMode ? (
            <Briefcase className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          ) : (
            <GraduationCap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          )}
          <span className="font-bold tracking-wide shrink-0">
            {isInstructorMode
              ? '👨‍🏫 TEACHER MODE'
              : '👨‍🎓 STUDENT MODE'}
            :
          </span>
          <span className="text-[11px] opacity-85 truncate hidden sm:inline">
            {isInstructorMode
              ? 'Showing talking points for Muhammad Shan & Muhammad Matti Ul Hasnain, live pacing timers & answer keys.'
              : 'Sequential learning path active: advance through each step.'}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleInstructorMode}
            className={`px-2 sm:px-2.5 py-0.5 rounded text-[11px] font-mono font-bold transition-all border shrink-0 ${
              isInstructorMode
                ? 'bg-purple-600 hover:bg-purple-500 text-white border-purple-400 shadow-sm'
                : 'bg-blue-600 hover:bg-blue-500 text-white border-blue-400 shadow-sm'
            }`}
          >
            <span className="hidden sm:inline">Switch to </span>{isInstructorMode ? 'Student Mode' : 'Teacher Mode'}
          </button>
        </div>
      </div>

      {/* Main Module Rollover Header Bar */}
      <div className="max-w-[1440px] w-full mx-auto px-2 sm:px-4 lg:px-6 py-1.5 sm:py-2 flex items-center justify-between gap-1.5 sm:gap-3 min-w-0">
        {/* Left: Previous Button & Current Step Breadcrumb */}
        <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
          {/* Previous Step Button */}
          <button
            onClick={() => prevStep && onNavigate(prevStep.id)}
            disabled={!prevStep}
            className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border transition-all shrink-0 flex items-center gap-1 ${
              prevStep
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 hover:border-slate-600'
                : 'bg-slate-900/50 text-slate-600 border-slate-800/40 cursor-not-allowed'
            }`}
            title={
              prevStep
                ? `Back to Step ${prevStep.stepNumber}: ${prevStep.shortTitle}`
                : 'Already at the beginning'
            }
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-xs font-semibold hidden md:inline">Prev</span>
          </button>

          {/* Current Step Selector Dropdown */}
          <div className="relative min-w-0 flex-1">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left p-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-1.5 sm:gap-2 transition-colors group min-w-0"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] font-mono text-slate-400 truncate">
                  <span className="text-blue-400 font-bold uppercase shrink-0">
                    <span className="hidden sm:inline">Step </span>{currentStepNumber}/{MASTER_FLOW_STEPS.length}
                  </span>
                  <span>·</span>
                  <span className="text-emerald-400 font-semibold truncate">
                    {currentStep.badge}
                  </span>
                  {currentStep.timeRange && (
                    <span className="hidden lg:inline text-slate-500 font-mono truncate">
                      · {currentStep.timeRange}
                    </span>
                  )}
                  {currentStep.speakerOrType && (
                    <span className="hidden xl:inline text-slate-400 font-mono truncate">
                      · {currentStep.speakerOrType}
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-blue-300 transition-colors">
                  {currentStep.title}
                </div>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 shrink-0 bg-slate-900 px-1.5 sm:px-2 py-0.5 rounded border border-slate-800 ml-1">
                <ListFilter className="w-3 h-3 text-blue-400" />
                <span className="hidden sm:inline">Steps</span>
              </div>
            </button>

            {/* Quick-Jump Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-80 sm:w-96 max-h-[460px] overflow-y-auto bg-slate-950 border border-slate-800 rounded-xl shadow-2xl p-2 z-50 divide-y divide-slate-800/70">
                <div className="p-2 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Week 01 Curriculum Steps</span>
                  <span className="text-blue-400">{progressPercent}% Done</span>
                </div>
                <div className="py-1">
                  {MASTER_FLOW_STEPS.map((s) => {
                    const isSelected = s.id === currentModuleId;
                    return (
                      <button
                        key={s.id}
                        onClick={() => {
                          onNavigate(s.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded-lg text-xs flex items-center justify-between gap-2 transition-colors ${
                          isSelected
                            ? 'bg-blue-600 text-white font-bold'
                            : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                        }`}
                      >
                        <span className="truncate">
                          <span className="font-mono opacity-70 mr-1.5">
                            {s.stepNumber.toString().padStart(2, '0')}.
                          </span>
                          {s.title}
                        </span>
                        <span className="text-[10px] font-mono opacity-60 shrink-0">
                          {s.badge}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Presentation + PDF Download + Single Big Next Action */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Launch Presentation for this topic */}
          {onOpenPresentationMode && (
            <button
              onClick={onOpenPresentationMode}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-sm shrink-0 whitespace-nowrap"
              title="Launch Fullscreen Classroom Presentation for this topic"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Present</span>
            </button>
          )}

          {/* Download Notes as PDF */}
          <button
            onClick={handleDownloadCurrentTopicPDF}
            disabled={isDownloadingPdf}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all shadow-sm shrink-0 whitespace-nowrap"
            title="Download PDF notes for this current module"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">
              {isDownloadingPdf ? 'Generating...' : 'PDF'}
            </span>
          </button>

          {/* Single, Clear Next Step CTA */}
          {nextStep ? (
            <button
              onClick={() => onNavigate(nextStep.id)}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md hover:scale-[1.02] shrink-0 whitespace-nowrap"
              title={`Advance to ${nextStep.shortTitle}`}
            >
              <span className="hidden sm:inline">Next: {nextStep.shortTitle}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => onNavigate('completion')}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shrink-0 whitespace-nowrap"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Finish</span>
            </button>
          )}
        </div>
      </div>

      {/* Horizontal Step Indicator Chips (Scrollable, Clean, Non-Overflowing) */}
      <div className="bg-slate-950/70 border-t border-slate-800/60 px-3 sm:px-4 lg:px-6 py-1.5 overflow-x-auto scrollbar-thin">
        <div className="flex items-center gap-1.5 min-w-max">
          {MASTER_FLOW_STEPS.map((s, idx) => {
            const isActive = s.id === currentModuleId;
            const isPassed = flowIndex !== -1 && idx < flowIndex;

            return (
              <button
                key={s.id}
                onClick={() => onNavigate(s.id)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold shadow-sm'
                    : isPassed
                    ? 'bg-slate-900 text-emerald-400 border border-slate-800/80 hover:border-slate-700'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/40 hover:border-slate-700'
                }`}
              >
                <span className="opacity-70">{s.stepNumber.toString().padStart(2, '0')}.</span>
                <span>{s.shortTitle}</span>
                {isPassed && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 ml-0.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subtle Progress Bar */}
      <div className="w-full bg-slate-800/40 h-0.5">
        <div
          className="bg-blue-500 h-0.5 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};
