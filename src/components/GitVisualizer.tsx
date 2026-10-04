import React, { useState } from 'react';
import { GitBranch, GitCommit, GitPullRequest, ArrowRight, CheckCircle2, RotateCcw, HelpCircle, HardDrive, Layers, Database, Cloud } from 'lucide-react';

interface GitState {
  workingDirectory: { name: string; status: 'unmodified' | 'modified' | 'untracked' }[];
  stagingArea: { name: string; status: 'staged' }[];
  localCommits: { id: string; message: string; branch: string; parent?: string }[];
  activeBranch: string;
  remotePushed: boolean;
  prMerged: boolean;
}

const INITIAL_GIT_STATE: GitState = {
  workingDirectory: [
    { name: 'index.html', status: 'unmodified' },
    { name: 'style.css', status: 'unmodified' },
    { name: 'README.md', status: 'unmodified' },
  ],
  stagingArea: [],
  localCommits: [
    { id: 'c1a8f90', message: 'feat: initial profile page scaffolding', branch: 'main' },
  ],
  activeBranch: 'main',
  remotePushed: false,
  prMerged: false,
};

export const GitVisualizer: React.FC = () => {
  const [gitState, setGitState] = useState<GitState>(INITIAL_GIT_STATE);
  const [activeStepTab, setActiveStepTab] = useState<'working' | 'staging' | 'repo' | 'branch' | 'remote' | 'pr'>('working');
  const [scenarioAnswer, setScenarioAnswer] = useState<string | null>(null);

  // Simulation Actions
  const handleModifyFile = () => {
    setGitState((prev) => ({
      ...prev,
      workingDirectory: prev.workingDirectory.map((f) =>
        f.name === 'index.html' ? { ...f, status: 'modified' } : f
      ),
    }));
    setActiveStepTab('working');
  };

  const handleStageFile = () => {
    setGitState((prev) => {
      const modifiedFiles = prev.workingDirectory.filter((f) => f.status === 'modified');
      if (modifiedFiles.length === 0) return prev;
      return {
        ...prev,
        workingDirectory: prev.workingDirectory.map((f) =>
          f.name === 'index.html' ? { ...f, status: 'unmodified' } : f
        ),
        stagingArea: [{ name: 'index.html', status: 'staged' }],
      };
    });
    setActiveStepTab('staging');
  };

  const handleCommit = () => {
    setGitState((prev) => {
      if (prev.stagingArea.length === 0) return prev;
      const newCommit = {
        id: Math.random().toString(16).substring(2, 9),
        message: prev.activeBranch === 'main'
          ? 'feat: update bio and header styling'
          : 'feat(skills): add technical skills matrix section',
        branch: prev.activeBranch,
        parent: prev.localCommits[prev.localCommits.length - 1]?.id,
      };
      return {
        ...prev,
        stagingArea: [],
        localCommits: [...prev.localCommits, newCommit],
      };
    });
    setActiveStepTab('repo');
  };

  const handleCreateBranch = () => {
    setGitState((prev) => ({
      ...prev,
      activeBranch: 'feature/skills-section',
      workingDirectory: prev.workingDirectory.map((f) =>
        f.name === 'index.html' ? { ...f, status: 'modified' } : f
      ),
    }));
    setActiveStepTab('branch');
  };

  const handlePush = () => {
    setGitState((prev) => ({
      ...prev,
      remotePushed: true,
    }));
    setActiveStepTab('remote');
  };

  const handleMergePR = () => {
    setGitState((prev) => {
      const lastCommit = prev.localCommits[prev.localCommits.length - 1];
      const mergeCommit = {
        id: Math.random().toString(16).substring(2, 9),
        message: `Merge pull request #1 from feature/skills-section into main`,
        branch: 'main',
        parent: lastCommit?.id,
      };
      return {
        ...prev,
        activeBranch: 'main',
        prMerged: true,
        localCommits: [...prev.localCommits, mergeCommit],
      };
    });
    setActiveStepTab('pr');
  };

  const resetGit = () => {
    setGitState(INITIAL_GIT_STATE);
    setActiveStepTab('working');
    setScenarioAnswer(null);
  };

  const hasModifiedFiles = gitState.workingDirectory.some((f) => f.status === 'modified');
  const hasStagedFiles = gitState.stagingArea.length > 0;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
            <span>GIT MENTAL MODEL & PIPELINE SIMULATOR</span>
            <span>·</span>
            <span>CRITICAL FOUNDATION</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            The Three Trees, Branches & GitHub Pull Requests
          </h3>
          <p className="text-xs text-slate-400">
            Understand WHERE your code lives at every point in the lifecycle. Click interactive actions to observe state transitions.
          </p>
        </div>

        <button
          onClick={resetGit}
          className="text-xs text-slate-400 hover:text-slate-200 px-2.5 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset State
        </button>
      </div>

      {/* Action Trigger Toolbar */}
      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-300">Live Git Action Controls:</span>
          <span className="font-mono text-slate-500 text-[11px]">
            HEAD: <strong className="text-blue-400">{gitState.activeBranch}</strong>
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleModifyFile}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              hasModifiedFiles
                ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
            disabled={hasModifiedFiles}
          >
            1. Edit index.html (Workspace)
          </button>
          <button
            onClick={handleStageFile}
            disabled={!hasModifiedFiles}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              hasModifiedFiles
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            2. git add index.html (Stage)
          </button>
          <button
            onClick={handleCommit}
            disabled={!hasStagedFiles}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              hasStagedFiles
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            3. git commit -m "..." (Commit)
          </button>
          <button
            onClick={handleCreateBranch}
            disabled={gitState.activeBranch !== 'main'}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              gitState.activeBranch === 'main'
                ? 'bg-purple-600/30 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/40'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            4. git switch -c feature/skills
          </button>
          <button
            onClick={handlePush}
            disabled={gitState.remotePushed}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              !gitState.remotePushed
                ? 'bg-cyan-600/30 hover:bg-cyan-600 text-cyan-300 hover:text-white border border-cyan-500/40'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            5. git push origin branch
          </button>
          <button
            onClick={handleMergePR}
            disabled={!gitState.remotePushed || gitState.prMerged}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              gitState.remotePushed && !gitState.prMerged
                ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-sm'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            6. Open & Merge GitHub PR
          </button>
        </div>
      </div>

      {/* Visual Stage Architecture (The 4 Stages) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 font-mono text-xs">
        {/* Stage 1: Working Directory */}
        <div
          onClick={() => setActiveStepTab('working')}
          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
            activeStepTab === 'working'
              ? 'bg-blue-950/40 border-blue-500 shadow-md ring-1 ring-blue-500/40'
              : 'bg-slate-950 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-sans">
            <span className="font-bold text-slate-300 flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-blue-400" />
              1. Working Tree
            </span>
            <span className="text-slate-500">Local Disk</span>
          </div>
          <div className="mt-2 space-y-1.5">
            {gitState.workingDirectory.map((file) => (
              <div
                key={file.name}
                className="flex items-center justify-between p-1.5 bg-slate-900 rounded border border-slate-800/80"
              >
                <span className="text-slate-200">{file.name}</span>
                <span
                  className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                    file.status === 'modified'
                      ? 'bg-amber-500/20 text-amber-300'
                      : 'text-slate-500'
                  }`}
                >
                  {file.status}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[11px] font-sans text-slate-400">
            Your live workspace files. Changes here are NOT protected by Git yet.
          </p>
        </div>

        {/* Stage 2: Staging Area */}
        <div
          onClick={() => setActiveStepTab('staging')}
          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
            activeStepTab === 'staging'
              ? 'bg-blue-950/40 border-blue-500 shadow-md ring-1 ring-blue-500/40'
              : 'bg-slate-950 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-sans">
            <span className="font-bold text-slate-300 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              2. Staging Area
            </span>
            <span className="text-slate-500">The Index</span>
          </div>
          <div className="mt-2 space-y-1.5 min-h-[70px]">
            {gitState.stagingArea.length === 0 ? (
              <div className="text-[11px] text-slate-600 italic py-4 text-center">
                (empty - run git add)
              </div>
            ) : (
              gitState.stagingArea.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center justify-between p-1.5 bg-emerald-950/30 border border-emerald-500/40 rounded"
                >
                  <span className="text-emerald-300">{file.name}</span>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase">
                    staged
                  </span>
                </div>
              ))
            )}
          </div>
          <p className="mt-2 text-[11px] font-sans text-slate-400">
            The draft snapshot. Selectively curate which files join the next commit.
          </p>
        </div>

        {/* Stage 3: Local Commit History */}
        <div
          onClick={() => setActiveStepTab('repo')}
          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
            activeStepTab === 'repo'
              ? 'bg-blue-950/40 border-blue-500 shadow-md ring-1 ring-blue-500/40'
              : 'bg-slate-950 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-sans">
            <span className="font-bold text-slate-300 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-purple-400" />
              3. Local Repo
            </span>
            <span className="text-slate-500">.git DAG</span>
          </div>
          <div className="mt-2 space-y-1.5 max-h-[140px] overflow-y-auto">
            {gitState.localCommits.map((c) => (
              <div
                key={c.id}
                className="p-1.5 bg-slate-900 border border-slate-800 rounded text-[11px] space-y-0.5"
              >
                <div className="flex items-center justify-between text-purple-300 font-bold">
                  <span>commit {c.id}</span>
                  <span className="text-[10px] text-slate-500">{c.branch}</span>
                </div>
                <div className="text-slate-300 truncate font-sans text-[11px]">
                  {c.message}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[11px] font-sans text-slate-400">
            Immutable snapshots safely recorded in the local .git directory.
          </p>
        </div>

        {/* Stage 4: Remote GitHub & PRs */}
        <div
          onClick={() => setActiveStepTab('remote')}
          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
            activeStepTab === 'remote'
              ? 'bg-blue-950/40 border-blue-500 shadow-md ring-1 ring-blue-500/40'
              : 'bg-slate-950 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-sans">
            <span className="font-bold text-slate-300 flex items-center gap-1.5">
              <Cloud className="w-3.5 h-3.5 text-cyan-400" />
              4. GitHub Remote
            </span>
            <span className="text-slate-500">Cloud Host</span>
          </div>
          <div className="mt-2 space-y-2">
            <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[11px] font-sans">
              <div className="text-slate-400">Remote: <span className="text-slate-200 font-mono">origin</span></div>
              <div className="text-slate-400">Sync Status:{' '}
                <span className={gitState.remotePushed ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                  {gitState.remotePushed ? 'Pushed to GitHub' : 'Local only'}
                </span>
              </div>
            </div>
            {gitState.prMerged && (
              <div className="p-1.5 bg-amber-500/10 border border-amber-500/30 rounded text-[11px] text-amber-300 font-sans flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>PR #1 Merged into main!</span>
              </div>
            )}
          </div>
          <p className="mt-2 text-[11px] font-sans text-slate-400">
            Collaborative team hub where code review (PRs) and deployments occur.
          </p>
        </div>
      </div>

      {/* Explanatory Deep-Dive Box based on Active Tab */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 md:p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
          <GitBranch className="w-4 h-4" />
          <span>Stage Deep Dive & Command Syntax</span>
        </div>
        {activeStepTab === 'working' && (
          <div className="space-y-2 text-xs text-slate-300">
            <p>
              <strong>The Working Directory:</strong> This is simply your filesystem directory containing the files you edit in VS Code. Files start here as <em>Untracked</em> or <em>Modified</em>.
            </p>
            <p className="text-slate-400">
              Command to inspect: <code className="text-blue-300 font-mono">git status</code>
            </p>
          </div>
        )}
        {activeStepTab === 'staging' && (
          <div className="space-y-2 text-xs text-slate-300">
            <p>
              <strong>The Staging Area (Index):</strong> An intermediate scratchpad. It allows you to select only the changes you want in your next logical commit. If you edited 4 files, but only 2 belong to a bug fix, you stage only those 2 files!
            </p>
            <p className="text-slate-400">
              Command to stage: <code className="text-emerald-300 font-mono">git add index.html</code> (or <code className="text-emerald-300 font-mono">git add .</code>)
            </p>
          </div>
        )}
        {activeStepTab === 'repo' && (
          <div className="space-y-2 text-xs text-slate-300">
            <p>
              <strong>The Commit Snapshot:</strong> A permanent, cryptographic snapshot of your project state at a specific point in time. Each commit has a SHA hash, author metadata, timestamp, and message.
            </p>
            <p className="text-slate-400">
              Command to commit: <code className="text-purple-300 font-mono">git commit -m "feat: add personal bio section"</code>
            </p>
          </div>
        )}
        {activeStepTab === 'branch' && (
          <div className="space-y-2 text-xs text-slate-300">
            <p>
              <strong>Feature Branching:</strong> A branch is a lightweight pointer (just a 41-byte text file!) that allows you to build new features in complete isolation from the production <code className="text-blue-300">main</code> branch.
            </p>
            <p className="text-slate-400">
              Command to create & switch: <code className="text-cyan-300 font-mono">git switch -c feature/skills-section</code>
            </p>
          </div>
        )}
        {activeStepTab === 'remote' && (
          <div className="space-y-2 text-xs text-slate-300">
            <p>
              <strong>Remote Repository (GitHub):</strong> A central server holding a copy of your Git commit DAG. Allows team collaboration, backup, issue tracking, and automated CI/CD builds.
            </p>
            <p className="text-slate-400">
              Command to push: <code className="text-amber-300 font-mono">git push -u origin feature/skills-section</code>
            </p>
          </div>
        )}
        {activeStepTab === 'pr' && (
          <div className="space-y-2 text-xs text-slate-300">
            <p>
              <strong>Pull Requests (PR) & Merging:</strong> A formal mechanism on GitHub to notify teammates that your feature is ready for code review. Team members inspect line-by-line diffs, automated tests run, and upon approval, the commits merge cleanly into main.
            </p>
            <p className="text-slate-400">
              Post-merge sync locally: <code className="text-emerald-300 font-mono">git switch main && git pull origin main</code>
            </p>
          </div>
        )}
      </div>

      {/* "What Happens If..." Scenarios (Part 16) */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
          <HelpCircle className="w-4 h-4" />
          <span>"What Happens If..." Interactive Engineering Scenarios</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            onClick={() =>
              setScenarioAnswer(
                'If you edit index.html after committing, Git marks the file as "Modified" in your Working Directory. Your prior commit remains completely safe and unchanged in the local repository! To save the new edit, you must git add and git commit again.'
              )
            }
            className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left text-xs text-slate-300 transition-colors"
          >
            What happens if you edit a file after committing?
          </button>
          <button
            onClick={() =>
              setScenarioAnswer(
                'Creating a branch (git branch feature-name) simply creates a new named pointer to the exact same commit node your current branch was on. No files are copied or duplicated on disk! It takes less than 1 millisecond.'
              )
            }
            className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left text-xs text-slate-300 transition-colors"
          >
            What happens when you create a new branch?
          </button>
          <button
            onClick={() =>
              setScenarioAnswer(
                'When you push (git push origin main), Git uploads only the new commit objects and updates the remote tracking branch on GitHub. Anyone who runs "git pull" on that repository will receive your commits.'
              )
            }
            className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left text-xs text-slate-300 transition-colors"
          >
            What actually happens when you push to GitHub?
          </button>
        </div>

        {scenarioAnswer && (
          <div className="p-3 bg-amber-500/10 border border-amber-500/25 rounded-lg text-xs text-slate-200 leading-relaxed">
            <span className="text-amber-400 font-semibold block mb-0.5">Explanation:</span>
            {scenarioAnswer}
          </div>
        )}
      </div>
    </div>
  );
};
