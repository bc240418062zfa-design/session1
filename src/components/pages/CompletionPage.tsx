import React from 'react';
import {
  CheckCircle2,
  Award,
  Sparkles,
  Download,
  RotateCcw,
  GitBranch,
  Code,
  Globe,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { COURSE_INFO } from '../../data/curriculumData';
import { exportNotesToPDF } from '../../utils/pdfExport';

interface CompletionPageProps {
  onRestart: () => void;
  onNavigateHome: () => void;
  onExploreMaterials: () => void;
}

export const CompletionPage: React.FC<CompletionPageProps> = ({
  onRestart,
  onNavigateHome,
  onExploreMaterials,
}) => {
  const handleDownloadCertificateSummary = () => {
    exportNotesToPDF({
      title: 'Week 01 Foundations • Verification of Completion',
      category: 'Course Achievement Record',
      subtitle: 'MIHORA.TECH Full-Stack Web Development with AI',
      sections: [
        {
          heading: 'Week 01 Core Goal Achieved',
          content: `${COURSE_INFO.goal}\n\nCandidate has completed all 5 orientation instruction modules, the 13-step personal profile page lab, dual pull-request homework, and checkpoint verification.`,
        },
        {
          heading: 'Core Competencies Verified',
          content:
            '1. Client-Server Architecture & DNS Resolution\n2. Professional VS Code, Terminal & Node.js Toolchain\n3. Git Immutable Snapshots, DAG Commits, Branching & GitHub Pull Requests\n4. HTML5 Semantic Architecture & CSS Box Model\n5. Static Deployment with Live Preview Link',
        },
        {
          heading: 'Deliverable Verification Checklist',
          content: `${COURSE_INFO.deliverables}\n\nMentor Rule Upheld: ${COURSE_INFO.mentorNote}`,
        },
      ],
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto pb-16">
      {/* Hero Achievement Card */}
      <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-xl">
          <Award className="w-10 h-10" />
        </div>

        <div className="space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" /> All 12 Modules Completed
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Week 01 Foundations Completed!
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            You have journeyed through the complete instructional core, configured your developer workspace, built your personal profile page, and established clean Git discipline.
          </p>
        </div>

        {/* Milestone Accomplishments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left pt-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
              <Globe className="w-4 h-4" /> Web Architecture Mastered
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Understand client-server cycle, DNS lookup tree, HTTP request/response payloads, and status codes.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-xs">
              <GitBranch className="w-4 h-4" /> Clean Git History
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Git Three Trees, atomic commits, branching, pushing to remote, and merged dual pull requests on GitHub.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-xs">
              <Code className="w-4 h-4" /> Profile Page Deployed
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Plain semantic HTML &amp; custom CSS box model with active preview link ready for submission.
            </p>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={handleDownloadCertificateSummary}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02]"
          >
            <Download className="w-4 h-4" />
            <span>Download Completion Record (PDF)</span>
          </button>

          <button
            onClick={onExploreMaterials}
            className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm flex items-center gap-2 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Download All Cheat Sheets &amp; Notes</span>
          </button>

          <button
            onClick={onRestart}
            className="px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-sm flex items-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Restart from Module 01</span>
          </button>
        </div>
      </div>
    </div>
  );
};
