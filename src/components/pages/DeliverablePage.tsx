import React, { useState } from 'react';
import {
  FileText,
  Globe,
  GitPullRequest,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Shield,
  Layers,
  Copy,
  Check,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { DELIVERABLE_CHECKLIST } from '../../data/curriculumData';

interface DeliverablePageProps {
  onNavigate: (moduleId: string) => void;
}

export const DeliverablePage: React.FC<DeliverablePageProps> = ({ onNavigate }) => {
  const [repoUrl, setRepoUrl] = useState<string>('');
  const [deployedUrl, setDeployedUrl] = useState<string>('');
  const [explanationNote, setExplanationNote] = useState<string>('');
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('mihora_deliverable_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleCheck = (id: string) => {
    const updated = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(updated);
    try {
      localStorage.setItem('mihora_deliverable_checklist', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const isRepoValid = repoUrl.trim().startsWith('https://github.com/') && repoUrl.length > 22;
  const isDeployedValid =
    (deployedUrl.trim().startsWith('https://') || deployedUrl.trim().startsWith('http://')) &&
    deployedUrl.length > 12;
  const isExplanationValid = explanationNote.trim().split(/\s+/).filter(Boolean).length >= 25;

  const totalChecks = DELIVERABLE_CHECKLIST.length;
  const completedChecks = Object.values(checkedItems).filter(Boolean).length;
  const pct = Math.round((completedChecks / totalChecks) * 100);

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="deliverable"
        keyTakeaway="Your official Week 01 submission consists of exactly 3 deliverables: your public GitHub repository link, your deployed live preview link, and a written explanation of the request/response cycle in your own words."
      />

      {/* The 3 Required Submission Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-blue-400 font-bold font-mono text-xs uppercase">
            <GitPullRequest className="w-4 h-4" /> Item 1: Repository Link
          </div>
          <h3 className="font-bold text-white text-base">Public GitHub Repository</h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Must contain <code className="text-white">index.html</code>, <code className="text-white">style.css</code>, <code className="text-white">README.md</code>, <code className="text-white">.gitignore</code>, and verified commit history with 2 merged pull requests.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-xs uppercase">
            <Globe className="w-4 h-4" /> Item 2: Deployed Page
          </div>
          <h3 className="font-bold text-white text-base">Active Live Preview URL</h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            A publicly accessible HTTPS link hosted on GitHub Pages or Vercel that renders your styled personal profile page without 404 asset errors.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-bold font-mono text-xs uppercase">
            <FileText className="w-4 h-4" /> Item 3: Written Note
          </div>
          <h3 className="font-bold text-white text-base">Request/Response Explanation</h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            A short paragraph placed in your project's <code className="text-white">README.md</code> explaining the complete lifecycle from typing a URL to rendering pixels in your own words.
          </p>
        </div>
      </div>

      {/* Interactive Submission Validator & Draft Tool */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-bold text-blue-400 uppercase">
              STUDENT SUBMISSION WORKBENCH
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
              Draft &amp; Validate Your 3 Deliverables
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
            Validation Status:{' '}
            {isRepoValid && isDeployedValid && isExplanationValid ? (
              <span className="text-emerald-400 font-bold">ALL 3 VERIFIED READY</span>
            ) : (
              <span className="text-amber-400 font-bold">Incomplete</span>
            )}
          </div>
        </div>

        <div className="space-y-4 text-xs">
          {/* Input 1: Repo URL */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-200 font-mono flex items-center justify-between">
              <span>1. GitHub Repository URL:</span>
              {isRepoValid ? (
                <span className="text-emerald-400 text-[11px] font-sans flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Valid GitHub URL
                </span>
              ) : (
                <span className="text-slate-500 text-[11px] font-sans">Must start with https://github.com/</span>
              )}
            </label>
            <input
              type="url"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="https://github.com/your-username/profile-site"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 font-mono text-xs focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Input 2: Deployed URL */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-200 font-mono flex items-center justify-between">
              <span>2. Deployed Preview URL:</span>
              {isDeployedValid ? (
                <span className="text-emerald-400 text-[11px] font-sans flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Valid Deployed URL
                </span>
              ) : (
                <span className="text-slate-500 text-[11px] font-sans">GitHub Pages or Vercel link</span>
              )}
            </label>
            <input
              type="url"
              value={deployedUrl}
              onChange={(e) => setDeployedUrl(e.target.value)}
              placeholder="https://your-username.github.io/profile-site/"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 font-mono text-xs focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Input 3: Request/Response Note */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-200 font-mono flex items-center justify-between">
              <span>3. Request/Response Explanation Draft (for README.md):</span>
              <span className={`text-[11px] font-sans ${isExplanationValid ? 'text-emerald-400' : 'text-slate-500'}`}>
                {explanationNote.trim().split(/\s+/).filter(Boolean).length} words (min 25)
              </span>
            </label>
            <textarea
              rows={4}
              value={explanationNote}
              onChange={(e) => setExplanationNote(e.target.value)}
              placeholder="When I enter https://mihora.tech into my browser address bar, the browser first resolves the domain into an IP address using DNS caching and nameservers. Next, a TCP connection and TLS 1.3 encryption are established. The browser issues an HTTP GET request stream, and the web server returns an HTTP 200 OK response with the HTML byte stream. Finally, the browser parses the HTML into the DOM, fetches linked CSS for the CSSOM, constructs the render tree, and paints the pixels on screen..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 font-sans text-xs leading-relaxed focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* 12-Item Official Deliverable Verification Checklist */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
              PERSISTENT QUALITY ASSURANCE
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
              Official 12-Item Quality Checklist
            </h3>
          </div>
          <div className="text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
            Completion: <strong className="text-emerald-400">{pct}%</strong> ({completedChecks}/{totalChecks})
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {DELIVERABLE_CHECKLIST.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 text-xs ${
                  isChecked
                    ? 'bg-blue-950/20 border-blue-500/40 text-slate-200'
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="mt-0.5 accent-blue-500 rounded cursor-pointer"
                />
                <div className="space-y-0.5">
                  <span className={`font-bold font-mono text-[11px] block ${isChecked ? 'text-blue-300' : 'text-slate-300'}`}>
                    {item.label}
                  </span>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ModuleNavFooter currentModuleId="deliverable" onNavigate={onNavigate} />
    </div>
  );
};
