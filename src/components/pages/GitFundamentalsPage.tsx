import React from 'react';
import {
  GitBranch,
  GitCommit,
  GitPullRequest,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Layers,
  Database,
  Shield,
  HelpCircle,
  FileCode,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { COURSE_INFO } from '../../data/curriculumData';

interface GitFundamentalsPageProps {
  onNavigate: (moduleId: string) => void;
}

export const GitFundamentalsPage: React.FC<GitFundamentalsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="git-fundamentals"
        keyTakeaway="Git is a distributed version control system that records changes as an immutable graph of snapshots (commits). Commits are atomic records of work, branches are movable pointers, and the staging area lets you curate commits precisely."
      />

      {/* Authoritative Mentor Note Callout */}
      <div className="p-5 bg-amber-500/10 rounded-2xl border border-amber-500/30 flex items-start gap-4 text-xs text-amber-200 shadow-md">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1.5">
          <strong className="font-mono uppercase text-amber-300 text-[11px] block">
            AUTHORITATIVE MENTOR MANDATE (14-WEEK DEPENDENCY)
          </strong>
          <p className="text-sm italic font-medium text-white leading-relaxed">
            "{COURSE_INFO.mentorNote}"
          </p>
          <p className="text-slate-300 font-sans leading-relaxed text-xs">
            In software engineering, code that is not committed to version control does not exist. Later weeks of this program cover team collaboration, Next.js pull requests, automated CI/CD deployments, and code reviews. You cannot proceed without mastering Git fundamentals now.
          </p>
        </div>
      </div>

      {/* What Problem Does Git Solve? */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-400" />
          <span>What Problem Does Git Solve?</span>
        </h2>
        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          Before version control, people shared folders labeled <code className="text-rose-300">project_final_v2_final_FINAL_FOR_REAL.zip</code>. If two people edited the same file, changes were overwritten and permanently destroyed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-white font-mono text-[11px] block">1. Time Machine (History)</span>
            <p className="text-slate-300 leading-relaxed">
              Every commit is a permanent snapshot. You can inspect your project exactly as it was 3 hours, 3 months, or 3 years ago without maintaining multiple duplicate folders.
            </p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-white font-mono text-[11px] block">2. Safe Parallel Work (Branches)</span>
            <p className="text-slate-300 leading-relaxed">
              Branches allow you to build an experimental feature or refactor CSS on an isolated branch while keeping your production <code className="text-blue-300">main</code> branch 100% stable.
            </p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-white font-mono text-[11px] block">3. Auditable Accountability</span>
            <p className="text-slate-300 leading-relaxed">
              Every commit cryptographically records who authored it, when it was made, which lines were changed, and a human message explaining the engineering rationale.
            </p>
          </div>
        </div>
      </div>

      {/* The 3 Local Trees of Git Architecture */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
              ARCHITECTURAL FOUNDATION
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
              The Three Local Trees: Working Dir ➔ Staging Area ➔ Commit DAG
            </h3>
          </div>
          <button
            onClick={() => onNavigate('git-visualizer')}
            className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <span>Open Interactive Visualizer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-blue-400">1. Working Directory</span>
              <span className="text-[10px] text-slate-500">Untracked / Modified</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              The physical files sitting in your folder right now. When you type in VS Code and save, you are editing the working directory. Git observes these differences but has not saved them.
            </p>
            <div className="p-2.5 bg-slate-900 rounded-lg text-slate-400 font-mono text-[11px]">
              Inspect via: <code className="text-blue-300">git status</code>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-emerald-400">2. The Staging Area (Index)</span>
              <span className="text-[10px] text-slate-500">Staged for Commit</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              The intermediate loading dock. Populated via <code className="text-emerald-300">git add</code>. Allows creating atomic commits: you can stage only the files related to one specific task.
            </p>
            <div className="p-2.5 bg-slate-900 rounded-lg text-slate-400 font-mono text-[11px]">
              Stage via: <code className="text-emerald-300">git add &lt;file&gt;</code>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-purple-400">3. Git Directory (History DAG)</span>
              <span className="text-[10px] text-slate-500">Committed Snapshots</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              The permanent immutable database stored in hidden <code className="text-purple-300">.git/</code>. Created via <code className="text-purple-300">git commit</code>. Each commit has a 40-character SHA hash.
            </p>
            <div className="p-2.5 bg-slate-900 rounded-lg text-slate-400 font-mono text-[11px]">
              Commit via: <code className="text-purple-300">git commit -m "msg"</code>
            </div>
          </div>
        </div>
      </div>

      {/* Anatomy of a Commit Object */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
        <h3 className="font-bold text-sm text-white font-mono uppercase tracking-wider flex items-center gap-2">
          <GitCommit className="w-4 h-4 text-purple-400" />
          What Actually Lives Inside a Git Commit Object?
        </h3>
        <p className="text-xs text-slate-300 font-sans leading-relaxed">
          Beginners often think Git stores "diffs" or line deltas. In reality, Git stores a complete <strong>snapshot tree</strong> of all files, plus metadata:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="text-purple-400 font-bold">1. SHA-1 Hash</span>
            <p className="text-[11px] text-slate-400 font-sans">Cryptographic identifier (e.g. <code className="text-white">a3f91b2...</code>) computed from contents.</p>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="text-blue-400 font-bold">2. Author &amp; Timestamp</span>
            <p className="text-[11px] text-slate-400 font-sans">Exact name, verified email, and unix timestamp of who committed.</p>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-bold">3. Parent Pointer</span>
            <p className="text-[11px] text-slate-400 font-sans">Points to previous commit hash, forming an immutable directed chain.</p>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="text-amber-400 font-bold">4. Root Tree Snapshot</span>
            <p className="text-[11px] text-slate-400 font-sans">Pointers to blob hashes of all files in the project at that exact second.</p>
          </div>
        </div>
      </div>

      {/* The 9 Authoritative Pedagogical Questions (Section 31 Compliance) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase">
            PEDAGOGICAL RIGOR
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            The 9 Foundational Questions of Version Control
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-blue-400 text-[11px] uppercase block">1. WHAT IS IT?</span>
            <p className="text-slate-300 leading-relaxed">
              Git is a distributed version control engine created in 2005 by Linus Torvalds to track changes in computer files without a central server requirement.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-blue-400 text-[11px] uppercase block">2. WHY DOES IT EXIST?</span>
            <p className="text-slate-300 leading-relaxed">
              To provide cryptographic integrity, fast local branch merging, and eliminate the danger of file loss or overwriting in software development.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-blue-400 text-[11px] uppercase block">3. HOW DOES IT WORK?</span>
            <p className="text-slate-300 leading-relaxed">
              Files are hashed into blobs; directories are hashed into trees; commits point to trees and parents. Everything is an immutable Content Addressable Object.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-emerald-400 text-[11px] uppercase block">4. WHERE DOES IT FIT?</span>
            <p className="text-slate-300 leading-relaxed">
              It sits between your local disk and remote platforms like GitHub. It runs entirely inside your project folder's hidden <code className="text-white">.git</code> directory.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-emerald-400 text-[11px] uppercase block">5. WHAT DOES IT CONNECT TO?</span>
            <p className="text-slate-300 leading-relaxed">
              It connects your local command line to remote GitHub repositories (<code className="text-emerald-300">origin</code>) via secure SSH or HTTPS tokens.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-emerald-400 text-[11px] uppercase block">6. IN PRACTICE</span>
            <p className="text-slate-300 leading-relaxed">
              Workflow: Edit code ➔ <code className="text-white">git status</code> ➔ <code className="text-white">git add index.html</code> ➔ <code className="text-white">git commit -m "feat: add bio section"</code>.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-amber-400 text-[11px] uppercase block">7. COMMON MISTAKE</span>
            <p className="text-slate-300 leading-relaxed">
              Running <code className="text-rose-300">git add .</code> blindly without checking <code className="text-white">git status</code>, accidentally committing secrets, temp files, or 50MB node_modules folders.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-amber-400 text-[11px] uppercase block">8. WHAT TO REMEMBER</span>
            <p className="text-slate-300 leading-relaxed">
              Commits should be atomic: one logical feature per commit. Write messages in the imperative mood ("Add profile picture", not "added pic").
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-purple-400 text-[11px] uppercase block">9. WHAT TO TRY</span>
            <p className="text-slate-300 leading-relaxed">
              Proceed to Module 07b (Interactive Git Visualizer) to click through each stage of the Git pipeline and observe how files move through the staging area.
            </p>
          </div>
        </div>
      </div>

      <ModuleNavFooter currentModuleId="git-fundamentals" onNavigate={onNavigate} />
    </div>
  );
};
