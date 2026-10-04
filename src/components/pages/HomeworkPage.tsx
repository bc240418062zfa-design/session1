import React from 'react';
import { GitPullRequest, GitBranch, CheckCircle2, AlertTriangle, ArrowRight, Layers, FileCode } from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { HomeworkSection } from '../HomeworkSection';

interface HomeworkPageProps {
  onNavigate: (moduleId: string) => void;
}

export const HomeworkPage: React.FC<HomeworkPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="homework"
        keyTakeaway="The homework requires adding two additional sections to your profile page and opening an individual pull request for each change. This exercises branching, atomic commits, diff inspection, and clean merges."
      />

      {/* The 2-Branch Production Workflow Walkthrough */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
            HOMEWORK EXECUTION BLUEPRINT
          </span>
          <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
            Step-by-Step Dual Pull Request Workflow
          </h2>
          <p className="text-xs text-slate-400">
            Do NOT build both sections on the main branch! Follow this exact standard team engineering sequence:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* Phase A: Pull Request 1 */}
          <div className="bg-slate-950 p-5 rounded-xl border border-blue-500/30 space-y-3">
            <div className="flex items-center justify-between text-blue-400 font-mono font-bold text-sm">
              <span className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" /> Part 1: First Extension PR
              </span>
              <span className="text-[10px] bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                PR #1
              </span>
            </div>

            <ol className="list-decimal pl-5 space-y-2 text-slate-300 font-sans">
              <li>
                Ensure you are on main and up to date:
                <pre className="font-mono text-emerald-400 text-[11px] p-2 bg-slate-900 rounded mt-1">
                  git checkout main && git pull origin main
                </pre>
              </li>
              <li>
                Create your first feature branch:
                <pre className="font-mono text-emerald-400 text-[11px] p-2 bg-slate-900 rounded mt-1">
                  git checkout -b feature/skills-section
                </pre>
              </li>
              <li>Add your new &lt;section id="skills"&gt; in index.html and style in style.css.</li>
              <li>
                Stage, commit, and push:
                <pre className="font-mono text-emerald-400 text-[11px] p-2 bg-slate-900 rounded mt-1">
{`git add .
git commit -m "feat: add technical skills section"
git push -u origin feature/skills-section`}
                </pre>
              </li>
              <li>Go to GitHub, open Pull Request #1, review line diffs, and merge into main!</li>
            </ol>
          </div>

          {/* Phase B: Pull Request 2 */}
          <div className="bg-slate-950 p-5 rounded-xl border border-emerald-500/30 space-y-3">
            <div className="flex items-center justify-between text-emerald-400 font-mono font-bold text-sm">
              <span className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" /> Part 2: Second Extension PR
              </span>
              <span className="text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                PR #2
              </span>
            </div>

            <ol className="list-decimal pl-5 space-y-2 text-slate-300 font-sans">
              <li>
                <strong>CRITICAL STEP:</strong> Switch back to main and pull the merged PR #1:
                <pre className="font-mono text-emerald-400 text-[11px] p-2 bg-slate-900 rounded mt-1">
                  git checkout main && git pull origin main
                </pre>
              </li>
              <li>
                Create your second feature branch:
                <pre className="font-mono text-emerald-400 text-[11px] p-2 bg-slate-900 rounded mt-1">
                  git checkout -b feature/projects-section
                </pre>
              </li>
              <li>Add your new &lt;section id="projects"&gt; in index.html and style in style.css.</li>
              <li>
                Stage, commit, and push:
                <pre className="font-mono text-emerald-400 text-[11px] p-2 bg-slate-900 rounded mt-1">
{`git add .
git commit -m "feat: add featured projects section"
git push -u origin feature/projects-section`}
                </pre>
              </li>
              <li>Open Pull Request #2 on GitHub, review your clean diff, and merge!</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Interactive Deliverable Verification Component */}
      <HomeworkSection />

      <ModuleNavFooter currentModuleId="homework" onNavigate={onNavigate} />
    </div>
  );
};
