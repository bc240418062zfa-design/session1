import React from 'react';
import { BookOpen, HelpCircle, AlertTriangle, Layers, Shield, FileCode } from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { ExtraNotesSection } from '../ExtraNotesSection';

interface ExtraNotesPageProps {
  onNavigate: (moduleId: string) => void;
}

export const ExtraNotesPage: React.FC<ExtraNotesPageProps> = ({ onNavigate }) => {
  const troubleshootingGuides = [
    {
      problem: 'My CSS changes are not appearing in the browser after saving style.css',
      cause: 'Aggressive browser HTTP caching, incorrect relative link path, or unclosed curly brace in CSS syntax.',
      solution: 'Hard reload with cache bypass (Ctrl + Shift + R or Cmd + Shift + R). Open DevTools Network tab to confirm style.css returns 200 OK.',
    },
    {
      problem: 'Git throws "fatal: not a git repository (or any of the parent directories): .git"',
      cause: 'You ran a git command in a terminal folder that has not been initialized with "git init".',
      solution: 'Run "pwd" to check your folder location. Run "cd profile-site" to navigate inside your project before running git commands.',
    },
    {
      problem: 'My Pull Request on GitHub shows 5,000 changed files and 50 megabytes of code',
      cause: 'You ran "git add ." without creating a .gitignore file, committing build files or node_modules.',
      solution: 'Create a .gitignore file immediately containing "node_modules/" and ".DS_Store". Run "git rm -r --cached node_modules" to unstage.',
    },
    {
      problem: 'GitHub Pages shows a 404 Not Found error on my live preview URL',
      cause: 'The repository is set to private, the root folder is missing index.html, or deployment is still processing.',
      solution: 'Verify repo visibility is Public in Settings. Ensure index.html is located in the root "/" directory. Wait 60 seconds for DNS deployment.',
    },
  ];

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="extra-notes"
        keyTakeaway="These supplementary architectural deep dives expand upon the Critical Rendering Path, Git Directed Acyclic Graphs (DAG), and common junior engineer troubleshooting scenarios without distracting from the live 50-minute teaching core."
      />

      {/* Supplemental Deep Dive Notes Section */}
      <ExtraNotesSection />

      {/* Practical Junior Engineer Troubleshooting Compendium */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase">
            PRACTICAL DIAGNOSTICS
          </span>
          <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
            Junior Engineer Troubleshooting Compendium
          </h2>
          <p className="text-xs text-slate-400">
            The top 4 issues beginners encounter during Week 01 and their instant command-line fixes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {troubleshootingGuides.map((item, idx) => (
            <div key={idx} className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <span className="font-bold text-rose-400 font-mono text-[11px] block">
                ISSUE {idx + 1}: {item.problem}
              </span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                <strong>Underlying Cause:</strong> {item.cause}
              </p>
              <div className="p-2.5 bg-slate-900 rounded-lg text-emerald-300 font-mono text-[11px] border border-slate-800/80">
                Fix: {item.solution}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModuleNavFooter currentModuleId="extra-notes" onNavigate={onNavigate} />
    </div>
  );
};
