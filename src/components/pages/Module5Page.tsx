import React from 'react';
import {
  Code,
  GitPullRequest,
  Globe,
  FileText,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  UserCheck,
  Video,
  Download,
  ExternalLink,
} from 'lucide-react';
import { LabWalkthrough } from '../LabWalkthrough';
import { HomeworkSection } from '../HomeworkSection';
import { CheckpointsSection } from '../CheckpointsSection';
import { COURSE_INFO } from '../../data/curriculumData';

interface Module5PageProps {
  onNextModule: () => void;
  onPrevModule: () => void;
  onNavigateHome: () => void;
  onExploreMaterials: () => void;
}

export const Module5Page: React.FC<Module5PageProps> = ({
  onNextModule,
  onPrevModule,
  onNavigateHome,
  onExploreMaterials,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-7xl mx-auto pb-12">
      {/* Module Title Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
              MODULE 05 OF 05
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 10:21 PM – 10:30 PM PKT (9 Min Agenda / 8 Min Live Core)
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
            <User className="w-3.5 h-3.5 text-blue-400" />
            <span>Speakers: <strong>Muhammad Matti Ul Hasnain &amp; Muhammad Shan</strong></span>
          </div>
        </div>

        <div className="space-y-2 max-w-4xl">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Hands-on Lab Walkthrough &amp; Homework Briefing
          </h1>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            Building and deploying your personal profile page in plain HTML/CSS with preview link, GitHub version control, dual pull requests, and deliverable submission.
          </p>
        </div>

        {/* Official Week 1 Class Notes & Homework Briefing Notice */}
        <div className="p-4 bg-blue-950/40 rounded-xl border border-blue-500/40 flex items-start gap-3 text-xs text-blue-200">
          <UserCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <strong className="font-mono uppercase text-blue-300">Official Class Notes &amp; Starter Repositories:</strong>
            <p className="leading-relaxed">
              Comprehensive lecture notes, cheat-sheets, and starter repositories are provided for every lab step. Follow clean Git hygiene, push to your GitHub repository, and prepare your deployed preview URL for submission.
            </p>
          </div>
        </div>
      </div>

      {/* The 4 Deliverables Pillars (from Source Material) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase font-mono">
            <Code className="w-4 h-4" /> Lab Output
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Build personal profile page in plain HTML and CSS, put it in a new GitHub repository, and deploy it with an active preview link.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
            <GitPullRequest className="w-4 h-4" /> Homework
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Add two more sections to the page (e.g. Skills / Projects) and open an individual pull request for each change.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase font-mono">
            <FileText className="w-4 h-4" /> Deliverable
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            GitHub repository link + deployed preview link + short note in README explaining request/response cycle in your own words.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase font-mono">
            <CheckCircle2 className="w-4 h-4" /> Checkpoint
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Explain what happens between typing a URL and seeing a page. Show a branch, a commit, and a merged pull request.
          </p>
        </div>
      </div>

      {/* Guided 10-Step Lab Walkthrough */}
      <LabWalkthrough />

      {/* Homework Briefing & Interactive 12-Item Checklist */}
      <HomeworkSection />

      {/* Checkpoints Assessment */}
      <CheckpointsSection />

      {/* Page Footer Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
        <button
          onClick={onPrevModule}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Module 04: HTML & CSS</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onExploreMaterials}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors border border-slate-700"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span>Download Class Notes &amp; Starter Repo</span>
          </button>

          <button
            onClick={onNextModule}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
          >
            <span>Next: Personal Profile Page Lab (13 Steps)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
