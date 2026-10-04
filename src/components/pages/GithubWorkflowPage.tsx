import React from 'react';
import {
  GitPullRequest,
  GitBranch,
  Cloud,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  Layers,
  FileCode,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';

interface GithubWorkflowPageProps {
  onNavigate: (moduleId: string) => void;
}

export const GithubWorkflowPage: React.FC<GithubWorkflowPageProps> = ({ onNavigate }) => {
  const lifecycleSteps = [
    {
      num: '01',
      title: 'Local Project Scaffolding',
      location: 'Local Hard Drive',
      command: 'mkdir profile-site && cd profile-site',
      detail: 'Create your HTML and CSS files inside your local project workspace folder.',
    },
    {
      num: '02',
      title: 'Initialize Local Git Repository',
      location: 'Local .git Directory',
      command: 'git init && git add . && git commit -m "feat: initial commit"',
      detail: 'Git tracks initial file snapshots locally in your immutable DAG history.',
    },
    {
      num: '03',
      title: 'Create Empty GitHub Repository',
      location: 'GitHub Cloud (github.com)',
      command: 'github.com ➔ New Repository ➔ "profile-site"',
      detail: 'Create an empty remote container on GitHub without initializing README/license (since you already have them locally).',
    },
    {
      num: '04',
      title: 'Connect Local to Remote',
      location: 'Local Git Config',
      command: 'git remote add origin https://github.com/<user>/profile-site.git',
      detail: 'Defines "origin" as the shorthand alias pointing to your cloud GitHub repository URL.',
    },
    {
      num: '05',
      title: 'Push Main Branch to Origin',
      location: 'Network Transfer ➔ GitHub',
      command: 'git branch -M main && git push -u origin main',
      detail: 'Uploads your local commit chain to GitHub and links your local main branch to upstream origin/main.',
    },
    {
      num: '06',
      title: 'Create Feature Branch (Homework Step)',
      location: 'Local Branch Pointer',
      command: 'git checkout -b feature/projects-section',
      detail: 'Isolates your new changes onto a dedicated branch away from main so you can test safely.',
    },
    {
      num: '07',
      title: 'Push Feature Branch to GitHub',
      location: 'Local ➔ GitHub',
      command: 'git push -u origin feature/projects-section',
      detail: 'Pushes the isolated branch up to GitHub cloud.',
    },
    {
      num: '08',
      title: 'Open Pull Request & Review Diffs',
      location: 'GitHub Web Interface',
      command: 'Compare & pull request ➔ write description ➔ review green/red diffs',
      detail: 'A Pull Request (PR) asks the team/mentor to review your line-by-line diffs before merging into main.',
    },
    {
      num: '09',
      title: 'Merge Pull Request into Main',
      location: 'GitHub Main Branch',
      command: 'Click "Merge pull request" ➔ "Confirm merge"',
      detail: 'Combines the feature commits into main and closes the pull request.',
    },
  ];

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="github-workflow"
        keyTakeaway="Git is your local engine; GitHub is the cloud platform. A Pull Request (PR) is a formal proposal to merge a feature branch into main, providing a web interface for code reviews and line-by-line diff inspections."
      />

      {/* The Local vs GitHub Architectural Boundary */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase">
            ARCHITECTURAL BOUNDARY
          </span>
          <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
            Local Machine vs. GitHub Cloud: Understanding the Separation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="bg-slate-950 p-5 rounded-xl border border-blue-500/30 space-y-3">
            <div className="flex items-center gap-2 font-mono text-blue-400 font-bold text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              Your Local Laptop (Git Engine)
            </div>
            <p className="text-slate-300 leading-relaxed font-sans">
              Everything in Git is local by default. Even without Wi-Fi, you can initialize repos, create commits, make branches, and view history.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400 font-mono text-[11px]">
              <li><strong>Working Directory:</strong> Physical HTML/CSS files on disk</li>
              <li><strong>Staging Area:</strong> File index staged via <code className="text-white">git add</code></li>
              <li><strong>Local DAG:</strong> Commits stored in local <code className="text-white">.git</code> folder</li>
              <li><strong>Local Branches:</strong> Pointers like <code className="text-white">main</code> and <code className="text-white">feature/bio</code></li>
            </ul>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-purple-500/30 space-y-3">
            <div className="flex items-center gap-2 font-mono text-purple-400 font-bold text-sm">
              <Cloud className="w-4 h-4 text-purple-400" />
              GitHub Platform (Cloud Host)
            </div>
            <p className="text-slate-300 leading-relaxed font-sans">
              GitHub is a hosted web service built on top of Git. It adds team features that do not exist in the basic Git CLI.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400 font-mono text-[11px]">
              <li><strong>Remote Repository:</strong> Off-site backup named <code className="text-white">origin</code></li>
              <li><strong>Pull Requests (PR):</strong> Web UI for reviewing code line-by-line</li>
              <li><strong>GitHub Pages:</strong> Free static web hosting from your repo</li>
              <li><strong>Issue Tracker:</strong> Task management and bug reporting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The 9-Stage Git to GitHub End-to-End Workflow */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">
            The Complete Week 01 Git ➔ GitHub Lifecycle
          </h2>
          <span className="text-xs font-mono text-slate-500">Step-by-Step Production Sequence</span>
        </div>

        <div className="space-y-3">
          {lifecycleSteps.map((s) => (
            <div
              key={s.num}
              className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex flex-wrap items-center justify-between gap-4 text-xs"
            >
              <div className="flex items-start gap-4">
                <span className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 font-mono font-bold text-sm flex items-center justify-center border border-purple-500/20 shrink-0 mt-0.5">
                  {s.num}
                </span>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-sm text-white">{s.title}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      {s.location}
                    </span>
                  </div>
                  <pre className="font-mono text-emerald-400 text-xs py-1 bg-slate-950 px-2.5 rounded border border-slate-800/80 inline-block">
                    {s.command}
                  </pre>
                  <p className="text-slate-300 font-sans leading-relaxed">{s.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What is a Pull Request (PR)? */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
        <h3 className="font-bold text-sm text-white font-mono uppercase flex items-center gap-2">
          <GitPullRequest className="w-4 h-4 text-emerald-400" />
          What is a Pull Request &amp; Why Do We Require Two in Homework?
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          A <strong>Pull Request</strong> is not a Git command; it is a GitHub collaboration workflow. When you finish work on a branch (<code className="text-emerald-300">feature/projects</code>), you open a pull request asking the repository owner to <em>pull</em> your changes into the <code className="text-blue-300">main</code> branch.
        </p>

        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2">
          <span className="font-bold text-white font-mono text-[11px] block">Why It Matters for Week 01 Deliverables:</span>
          <p className="text-slate-300">
            For homework, you are required to add 2 new sections and open a separate pull request for each. This proves you understand branch isolation, atomic commit discipline, and how to verify line diffs before merging.
          </p>
        </div>
      </div>

      <ModuleNavFooter currentModuleId="github-workflow" onNavigate={onNavigate} />
    </div>
  );
};
