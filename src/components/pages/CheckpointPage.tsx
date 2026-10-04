import React, { useState } from 'react';
import {
  CheckCircle2,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Globe,
  Terminal,
  HelpCircle,
  Eye,
  EyeOff,
  AlertTriangle,
  ArrowRight,
  Shield,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { CheckpointsSection } from '../CheckpointsSection';

interface CheckpointPageProps {
  onNavigate: (moduleId: string) => void;
}

export const CheckpointPage: React.FC<CheckpointPageProps> = ({ onNavigate }) => {
  const [showUrlDefense, setShowUrlDefense] = useState<boolean>(false);
  const [gitProofTab, setGitProofTab] = useState<'branch' | 'commit' | 'pr'>('branch');

  const gitProofs = {
    branch: {
      title: '1. Demonstrate a Feature Branch',
      command: 'git branch -v',
      output: `* feature/skills-section  7a1f9bc feat: add skills grid markup
  main                    c1a8f90 feat: initial profile page scaffolding`,
      explanation: 'Proves the student created an isolated branch with an active HEAD pointer (*), protecting main from unstable work.',
    },
    commit: {
      title: '2. Demonstrate an Atomic Commit',
      command: 'git log -1 --stat',
      output: `commit 7a1f9bc3847291a82f7103b4918237482910481a
Author: Muhammad Shan <shan@mihora.tech>
Date:   Sun Oct 4 21:55:12 2026 +0500

    feat: add skills grid and modern CSS card styling

 index.html | 14 ++++++++++++++
 style.css  | 22 ++++++++++++++++++++++
 2 files changed, 36 insertions(+)`,
      explanation: 'Proves the commit has an author, verified timestamp, conventional imperative message, and discrete file additions.',
    },
    pr: {
      title: '3. Demonstrate a Merged Pull Request',
      command: 'GitHub Web Interface / gh pr view 1',
      output: `Title: feat: add technical skills section (#1)
State: MERGED (merged by Muhammad Shan into main)
Branches: feature/skills-section ➔ main
Diff: +36 lines, -0 lines
Commits: 1 commit (7a1f9bc)
Reviewers: 1 approval`,
      explanation: 'Proves the student opened a pull request on GitHub, inspected line diffs, and executed a clean merge into the main branch.',
    },
  };

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="checkpoint"
        keyTakeaway="The Week 01 Checkpoint requires two core demonstrations: fluently explaining the URL-to-page rendering lifecycle in your own words, and demonstrating a branch, a commit, and a merged pull request in your GitHub repository."
      />

      {/* Part 1: URL-to-Page Oral Defense Masterclass */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono font-bold text-blue-400 uppercase">
              CHECKPOINT PART 1
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
              Explain What Happens Between Typing a URL and Seeing a Page
            </h2>
          </div>
          <button
            onClick={() => setShowUrlDefense(!showUrlDefense)}
            className="px-3.5 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5"
          >
            {showUrlDefense ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showUrlDefense ? 'Hide Model Answer' : 'Show Comprehensive Defense Answer'}</span>
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          In your technical check-in, mentors will ask: <em>"Walk me through what happens when a user types a URL and presses Enter."</em> Practice reciting this 5-point explanation aloud:
        </p>

        {showUrlDefense ? (
          <div className="space-y-4 p-5 bg-slate-950 rounded-2xl border border-blue-500/40 text-xs text-slate-300 animate-fadeIn leading-relaxed">
            <div className="space-y-1">
              <span className="font-bold text-blue-400 font-mono">1. URL Parsing &amp; DNS Resolution</span>
              <p>
                The browser splits the input URL into Scheme (HTTPS), Host (mihora.tech), and Path (/). It checks local caches (Browser ➔ OS ➔ Router). If missing, recursive DNS queries root (.) and TLD (.tech) nameservers to resolve the numerical IP address (e.g. 76.76.21.21).
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-emerald-400 font-mono">2. TCP Socket &amp; TLS 1.3 Cryptographic Handshake</span>
              <p>
                Using the IP address and port 443, the client executes a TCP 3-way handshake (SYN ➔ SYN-ACK ➔ ACK). TLS 1.3 immediately establishes symmetric encryption keys and validates the server certificate.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-purple-400 font-mono">3. HTTP GET Request &amp; Web Server Response</span>
              <p>
                The browser transmits an HTTP GET stream with Host and Accept headers. The server process (Node.js/Nginx) reads index.html from disk and streams back <code className="text-white">HTTP/1.1 200 OK</code> with <code className="text-white">Content-Type: text/html</code> and raw HTML bytes.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-amber-400 font-mono">4. DOM &amp; CSSOM Construction</span>
              <p>
                The browser tokenizes HTML bytes into DOM nodes. Encountering <code className="text-white">&lt;link rel="stylesheet"&gt;</code>, it sends a parallel subresource request for style.css, parsing CSS rules into the CSSOM tree.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-rose-400 font-mono">5. Render Tree, Layout &amp; Painting (CRP)</span>
              <p>
                DOM and CSSOM merge into the Render Tree. The browser computes physical geometry coordinates for every box (Layout/Reflow) and the GPU paints pixels onto the screen display.
              </p>
            </div>
          </div>
        ) : (
          <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-2">
            <p className="text-xs text-slate-400">
              Try to explain the 5 steps aloud to yourself first without looking.
            </p>
            <button
              onClick={() => setShowUrlDefense(true)}
              className="text-xs text-blue-400 hover:underline font-semibold"
            >
              Click here when ready to check your answer →
            </button>
          </div>
        )}
      </div>

      {/* Part 2: Interactive Git Proof Rehearsal Workbench */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
              CHECKPOINT PART 2
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
              Demonstrate: Branch, Commit, and Merged Pull Request
            </h2>
          </div>

          <div className="flex gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setGitProofTab('branch')}
              className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
                gitProofTab === 'branch' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" /> Branch Proof
            </button>
            <button
              onClick={() => setGitProofTab('commit')}
              className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
                gitProofTab === 'commit' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <GitCommit className="w-3.5 h-3.5" /> Commit Proof
            </button>
            <button
              onClick={() => setGitProofTab('pr')}
              className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
                gitProofTab === 'pr' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <GitPullRequest className="w-3.5 h-3.5" /> Merged PR Proof
            </button>
          </div>
        </div>

        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-white text-sm font-mono">{gitProofs[gitProofTab].title}</h4>
            <span className="text-[11px] font-mono text-emerald-400">Terminal / CLI Check</span>
          </div>

          <div className="space-y-1 font-mono">
            <span className="text-[10px] text-slate-500 uppercase">Command to run in terminal:</span>
            <pre className="p-2.5 bg-slate-900 rounded border border-slate-800 text-blue-300 text-xs">
              {gitProofs[gitProofTab].command}
            </pre>
          </div>

          <div className="space-y-1 font-mono">
            <span className="text-[10px] text-slate-500 uppercase">Expected output that proves mastery:</span>
            <pre className="p-3 bg-slate-900 rounded border border-slate-800 text-emerald-300 text-xs leading-relaxed overflow-x-auto whitespace-pre">
              {gitProofs[gitProofTab].output}
            </pre>
          </div>

          <p className="text-slate-300 font-sans leading-relaxed pt-1">
            <strong>Why this satisfies checkpoint:</strong> {gitProofs[gitProofTab].explanation}
          </p>
        </div>
      </div>

      {/* Part 3: Conceptual Checkpoints Self-Assessment */}
      <CheckpointsSection />

      <ModuleNavFooter currentModuleId="checkpoint" onNavigate={onNavigate} />
    </div>
  );
};
