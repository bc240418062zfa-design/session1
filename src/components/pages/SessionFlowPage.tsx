import React, { useState } from 'react';
import {
  Clock,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Play,
  FileCode,
  Shield,
  Zap,
} from 'lucide-react';
import { TIME_MODEL, TIMELINE_SEGMENTS } from '../../data/curriculumData';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { LiveTimer } from '../LiveTimer';
import { CompressionReport } from '../CompressionReport';

interface SessionFlowPageProps {
  onNavigate: (moduleId: string) => void;
}

export const SessionFlowPage: React.FC<SessionFlowPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'source' | 'core' | 'compression'>('core');
  const [currentSegmentIdx, setCurrentSegmentIdx] = useState<number>(0);

  const sourceAgenda = [
    {
      time: '09:30 PM – 09:43 PM',
      duration: '13 min',
      title: 'How browsers, servers, HTTP and DNS work together',
      description: 'Understanding what happens when a page loads and the client-server architecture.',
      moduleId: 'how-the-web-works',
    },
    {
      time: '09:43 PM – 09:56 PM',
      duration: '13 min',
      title: 'Setting up VS Code, Node.js and the terminal',
      description: 'Professional workspace setup, essential extensions, linters and terminal workflow.',
      moduleId: 'dev-environment',
    },
    {
      time: '09:56 PM – 10:09 PM',
      duration: '13 min',
      title: 'Git fundamentals: commit, branch, push, pull request on GitHub',
      description: 'Spend real time on Git now — every later week depends on clean history.',
      moduleId: 'git-fundamentals',
    },
    {
      time: '10:09 PM – 10:21 PM',
      duration: '12 min',
      title: 'HTML structure, semantic elements & CSS box model, colour and type',
      description: 'Semantic markup, styling fundamentals, CSS box model and typography.',
      moduleId: 'html-structure',
    },
    {
      time: '10:21 PM – 10:30 PM',
      duration: '9 min',
      title: 'Hands-on Lab Walkthrough & Homework Briefing',
      description: 'Building and deploying personal profile page with preview link.',
      moduleId: 'profile-lab',
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="agenda"
        keyTakeaway="The 60-minute session window contains exactly 50 minutes of instructional core surrounded by 5 minutes of orientation and 5 minutes of Q&A. Every minute is mathematically accounted for."
      />

      {/* Mode Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
        <button
          onClick={() => setActiveTab('core')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'core'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Clock className="w-4 h-4 text-emerald-300" />
          <span>50-Minute Instructional Core Flow</span>
        </button>

        <button
          onClick={() => setActiveTab('source')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'source'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4 text-blue-300" />
          <span>Published 60-Min Source Agenda</span>
        </button>

        <button
          onClick={() => setActiveTab('compression')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'compression'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Shield className="w-4 h-4 text-purple-300" />
          <span>Curriculum Reconciliation Report</span>
        </button>
      </div>

      {/* TAB 1: 50-MINUTE TEACHING CORE */}
      {activeTab === 'core' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                  PRACTICAL TEACHING MODEL
                </span>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  The Exact 50-Minute Instructional Timeline
                </h2>
              </div>
              <div className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                09:35 PM – 10:25 PM PKT · 50 Min Core
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              To guarantee zero overtime while preserving deep technical rigor, the class reserves the first 5 minutes for settling and the final 5 minutes for Q&A. The core 50 minutes are divided into 5 focused instructional segments.
            </p>

            {/* Interactive Live Timer */}
            <LiveTimer
              currentSegmentIndex={currentSegmentIdx}
              onSegmentChange={setCurrentSegmentIdx}
            />

            {/* 5 Segments Detail Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
              {TIMELINE_SEGMENTS.map((seg, idx) => (
                <div
                  key={seg.id}
                  onClick={() => setCurrentSegmentIdx(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2 ${
                    currentSegmentIdx === idx
                      ? 'bg-blue-950/40 border-blue-500 shadow-md ring-1 ring-blue-500/50'
                      : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-bold text-blue-400">SEG 0{seg.order}</span>
                    <span className="text-emerald-400 font-semibold">{seg.durationMinutes}m</span>
                  </div>
                  <h4 className="font-bold text-xs text-white line-clamp-1">{seg.shortTitle}</h4>
                  <div className="text-[10px] text-slate-500 font-mono">
                    {seg.startTime} – {seg.endTime}
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2">{seg.learningObjective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PUBLISHED 60-MIN SOURCE AGENDA */}
      {activeTab === 'source' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                PUBLISHED CURRICULUM SPECIFICATION
              </span>
              <h2 className="text-lg font-bold text-white tracking-tight mt-0.5">
                Official Orientation Agenda (09:30 PM – 10:30 PM PKT)
              </h2>
            </div>

            <div className="space-y-3">
              {sourceAgenda.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-slate-950 border border-slate-800 hover:border-blue-500/50 p-5 rounded-xl flex flex-wrap items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 font-mono font-bold text-sm flex items-center justify-center border border-blue-500/20">
                      0{idx + 1}
                    </span>

                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                        <Clock className="w-3 h-3" />
                        <span>{item.time} ({item.duration})</span>
                      </div>
                      <p className="text-xs text-slate-400 font-sans max-w-2xl">{item.description}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate(item.moduleId)}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/30 text-xs font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>Open Module</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CURRICULUM RECONCILIATION REPORT */}
      {activeTab === 'compression' && (
        <div className="space-y-6">
          <CompressionReport />
        </div>
      )}

      <ModuleNavFooter currentModuleId="agenda" onNavigate={onNavigate} />
    </div>
  );
};
