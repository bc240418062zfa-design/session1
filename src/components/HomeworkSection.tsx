import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, GitPullRequest, Globe, FileText, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { DELIVERABLE_CHECKLIST, COURSE_INFO } from '../data/curriculumData';

export const HomeworkSection: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('mihora_week1_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mihora_week1_checklist', JSON.stringify(checkedItems));
    } catch (e) {
      console.error(e);
    }
  }, [checkedItems]);

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPct = Math.round((completedCount / DELIVERABLE_CHECKLIST.length) * 100);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
            <span>WEEK 1 HOMEWORK & DELIVERABLES</span>
            <span>·</span>
            <span>DUE BEFORE FRIDAY REVIEW</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Personal Profile Page Extensions & Dual Pull Requests
          </h3>
          <p className="text-xs text-slate-400">
            Apply the git feature-branch workflow to build two new sections with independent pull requests.
          </p>
        </div>

        <div className="text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
          Checklist Progress:{' '}
          <strong className="text-emerald-400 font-bold">{progressPct}%</strong> ({completedCount}/{DELIVERABLE_CHECKLIST.length})
        </div>
      </div>

      {/* Primary Homework Briefing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase tracking-wider">
            <GitPullRequest className="w-4 h-4" />
            <span>Core Assignment</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Add <strong>two additional semantic sections</strong> to your profile page (e.g. Skills, Education, Projects, or Contact form mockup).
          </p>
          <div className="text-[11px] text-amber-300/90 bg-amber-500/10 p-2 rounded border border-amber-500/20 font-mono">
            Rule: Create a separate feature branch and open an individual Pull Request for EACH change.
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
            <Globe className="w-4 h-4" />
            <span>Live Deployment</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Deploy your repository to <strong>GitHub Pages</strong> or <strong>Vercel</strong> so that your page has an active, publicly testable HTTPS preview URL.
          </p>
          <div className="text-[11px] text-slate-400 font-mono">
            Verify layout on mobile phones and desktop displays without layout breaking.
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Written Reflection</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            In your project's <code className="text-purple-300">README.md</code>, write a short explanation in your own words tracing what happens when a user enters a URL.
          </p>
          <div className="text-[11px] text-slate-400 font-mono">
            Must cover DNS lookup, IP addressing, HTTP request, server 200 OK, and DOM rendering.
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs text-slate-400 font-mono">
          <span>Self-Verification Progress</span>
          <span>{completedCount} of {DELIVERABLE_CHECKLIST.length} completed</span>
        </div>
        <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
          <div
            style={{ width: `${progressPct}%` }}
            className="h-full bg-emerald-500 transition-all duration-300"
          />
        </div>
      </div>

      {/* Interactive 12-Item Deliverable Checklist */}
      <div className="space-y-2.5">
        <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
          Student Deliverable Checklist (Interactive & Saved)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {DELIVERABLE_CHECKLIST.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <button
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-3 rounded-lg border text-left transition-all flex items-start gap-2.5 ${
                  isChecked
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-200'
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="mt-0.5 shrink-0 text-emerald-400">
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-600" />
                  )}
                </div>
                <div className="space-y-0.5">
                  <div
                    className={`text-xs font-medium leading-snug ${
                      isChecked ? 'line-through text-slate-400' : 'text-slate-100'
                    }`}
                  >
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-sans">
                    {item.detail}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Common Pitfalls / Mistakes to Avoid */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
          <AlertTriangle className="w-4 h-4" />
          <span>Top 3 Common Pitfalls to Avoid in Week 1</span>
        </div>
        <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-5 leading-relaxed font-sans">
          <li>
            <strong>Committing directly to main:</strong> Remember to branch first with <code className="text-blue-300 font-mono">git switch -c feature/your-feature</code>.
          </li>
          <li>
            <strong>Giant commits with vague messages:</strong> Never write "updates" or "fix". Write descriptive messages like <code className="text-emerald-300 font-mono">feat(skills): add technical skills card with semantic markup</code>.
          </li>
          <li>
            <strong>Broken relative paths:</strong> Ensure your stylesheet link uses <code className="text-blue-300 font-mono">&lt;link rel="stylesheet" href="style.css"&gt;</code> without leading absolute slashes (<code className="text-rose-400 font-mono">/style.css</code>) which break in subfolder hosting like GitHub Pages.
          </li>
        </ul>
      </div>
    </div>
  );
};
