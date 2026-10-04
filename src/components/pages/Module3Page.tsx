import React from 'react';
import {
  GitBranch,
  GitCommit,
  GitPullRequest,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Database,
  Shield,
  HelpCircle,
} from 'lucide-react';
import { GitVisualizer } from '../GitVisualizer';
import { GIT_EMERGENCY_GUIDE } from '../../data/curriculumData';

interface Module3PageProps {
  onNextModule: () => void;
  onPrevModule: () => void;
  onNavigateHome: () => void;
}

export const Module3Page: React.FC<Module3PageProps> = ({
  onNextModule,
  onPrevModule,
  onNavigateHome,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-7xl mx-auto pb-12">
      {/* Module Title Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
              MODULE 03 OF 05
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 09:56 PM – 10:09 PM PKT (13 Min Agenda / 17 Min Live Core)
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
            <User className="w-3.5 h-3.5 text-blue-400" />
            <span>Speaker: <strong>Muhammad Shan</strong></span>
          </div>
        </div>

        <div className="space-y-2 max-w-4xl">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Git Fundamentals: Commit, Branch, Push & Pull Requests
          </h1>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            Mastering the three trees, branch pointers, remote repositories, and collaborative code reviews on GitHub.
          </p>
        </div>

        {/* Mentor Note Warning Box */}
        <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-mono uppercase text-amber-300">Authoritative Mentor Note:</strong>
            <p className="italic leading-relaxed">
              "Spend real time on Git now. Every later week depends on clean history."
            </p>
            <p className="text-[11px] text-slate-300 font-sans">
              All 14 weeks of this program evaluate student progress through Git commits and pull requests. Work that cannot be verified in the Git history cannot be credited.
            </p>
          </div>
        </div>
      </div>

      {/* The 4 Architectural Pillars of Version Control */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase font-mono">
            <Layers className="w-4 h-4" /> 1. The Staging Area
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            The intermediate staging index (<code className="text-blue-300">git add</code>). Allows creating atomic commits by selectively staging only related files rather than committing everything blindly.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
            <GitCommit className="w-4 h-4" /> 2. Commit Snapshots
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Cryptographic SHA hash nodes in an immutable Directed Acyclic Graph (DAG). Stores author, timestamp, parent pointer, and root tree snapshot.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase font-mono">
            <GitBranch className="w-4 h-4" /> 3. Branch Pointers
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            A branch is simply a 41-byte text file storing a 40-character commit hash! Enables building features in complete isolation without risk to <code className="text-purple-300">main</code>.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase font-mono">
            <GitPullRequest className="w-4 h-4" /> 4. Pull Requests
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            GitHub team review flow. Allows teammates to inspect diffs, comment on specific lines of code, run automated CI tests, and approve merges into production.
          </p>
        </div>
      </div>

      {/* Interactive Visualizer Widget */}
      <GitVisualizer />

      {/* Complete Step-by-Step Daily Engineering Git Workflow */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-blue-400" />
            Standard Production Git Feature-Branch Workflow
          </h2>
          <span className="text-xs font-mono text-slate-500">Industry Standard Practice</span>
        </div>

        <div className="space-y-4 text-xs font-mono">
          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <div className="text-slate-400 font-bold">1. Synchronize Local Main with Cloud Remote</div>
            <pre className="text-blue-300 overflow-x-auto leading-relaxed">
git switch main
git pull origin main
            </pre>
            <p className="text-slate-400 text-[11px] font-sans">
              Always branch from the latest verified commit on main to prevent merge conflicts later.
            </p>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <div className="text-slate-400 font-bold">2. Create and Switch to Feature Branch</div>
            <pre className="text-purple-300 overflow-x-auto leading-relaxed">
git switch -c feature/profile-bio
# (or older syntax: git checkout -b feature/profile-bio)
            </pre>
            <p className="text-slate-400 text-[11px] font-sans">
              HEAD now points to the new branch pointer. Your modifications won't affect main.
            </p>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <div className="text-slate-400 font-bold">3. Check Status and Inspect Diff</div>
            <pre className="text-amber-300 overflow-x-auto leading-relaxed">
git status
git diff index.html
            </pre>
            <p className="text-slate-400 text-[11px] font-sans">
              Always review line-by-line diffs before staging to catch leftover test code or typos.
            </p>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <div className="text-slate-400 font-bold">4. Stage and Commit with Conventional Message</div>
            <pre className="text-emerald-300 overflow-x-auto leading-relaxed">
git add index.html style.css
git commit -m "feat(profile): add semantic bio section and link styles"
            </pre>
            <p className="text-slate-400 text-[11px] font-sans">
              Use standard prefixes: <code className="text-emerald-400">feat:</code> (new feature), <code className="text-blue-400">fix:</code> (bug fix), <code className="text-slate-300">docs:</code> (documentation), <code className="text-amber-400">chore:</code> (build/maintenance).
            </p>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <div className="text-slate-400 font-bold">5. Push to GitHub and Open Pull Request</div>
            <pre className="text-cyan-300 overflow-x-auto leading-relaxed">
git push -u origin feature/profile-bio
            </pre>
            <p className="text-slate-400 text-[11px] font-sans">
              Open github.com &gt; Click "Compare &amp; pull request" &gt; Fill title and description &gt; Request review &gt; Merge cleanly into main after verification!
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Fixes Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-xl">
        <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          Git Emergency Toolkit: How to Fix Common Mistakes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GIT_EMERGENCY_GUIDE.slice(0, 4).map((fix, idx) => (
            <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">{fix.problem}</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  {fix.safetyLevel}
                </span>
              </div>
              <pre className="bg-slate-900 p-2.5 rounded font-mono text-[11px] text-emerald-300 overflow-x-auto">
                {fix.solutionCommand}
              </pre>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {fix.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Page Footer Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
        <button
          onClick={onPrevModule}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Module 02: Dev Environment</span>
        </button>

        <button
          onClick={onNextModule}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-md transition-all hover:scale-[1.02]"
        >
          <span>Proceed to Module 04: HTML & CSS Box Model</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
