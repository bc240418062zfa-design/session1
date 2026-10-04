import React, { useState } from 'react';
import {
  Laptop,
  Terminal,
  Code,
  GitBranch,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Copy,
  Check,
  Shield,
  FileCheck,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';

interface DevEnvironmentPageProps {
  onNavigate: (moduleId: string) => void;
}

export const DevEnvironmentPage: React.FC<DevEnvironmentPageProps> = ({ onNavigate }) => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    vscode: true,
    node: true,
    terminal: false,
    git: false,
    github: false,
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const toggleChecklist = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const tools = [
    {
      id: 'vscode',
      name: '1. Visual Studio Code',
      category: 'Source Code Editor',
      color: 'blue',
      what: 'An extensible, lightweight source code editor built on Electron with the Monaco engine.',
      why: 'Provides syntax highlighting, linting warnings, file management, and integrated terminal.',
      where: 'Where you write, edit, format, and organize HTML and CSS project files.',
      week1Role: 'Authoring index.html and style.css, inspecting live changes, and staging commits.',
    },
    {
      id: 'node',
      name: '2. Node.js (LTS Version)',
      category: 'JavaScript Runtime',
      color: 'emerald',
      what: 'Google Chrome’s V8 JavaScript engine packaged to run standalone on your operating system.',
      why: 'Powers modern dev tooling, local static servers, package management via npm, and build workflows.',
      where: 'Runs in the background on your machine as the engine powering development servers.',
      week1Role: 'Validating version installation (node -v) and running static preview servers.',
    },
    {
      id: 'terminal',
      name: '3. The Developer Terminal',
      category: 'Command Line Shell',
      color: 'purple',
      what: 'Direct text interface to the OS kernel (macOS zsh, Linux bash, Windows PowerShell/WSL).',
      why: 'Executes filesystem manipulations and Git commands deterministically without mouse delays.',
      where: 'The control room where programs, compilers, and version control tools are executed.',
      week1Role: 'Creating project directories (mkdir), navigating (cd), and executing Git version control.',
    },
    {
      id: 'git',
      name: '4. Git Version Control',
      category: 'Local VCS Engine',
      color: 'rose',
      what: 'A distributed version control system tracking immutable file snapshots as a directed graph.',
      why: 'Protects code from accidental loss, provides history rewind, and allows fearless experimentation via branches.',
      where: 'Runs completely locally inside the hidden .git directory within your project folder.',
      week1Role: 'Tracking edits, creating atomic commits with clear messages, and branching.',
    },
    {
      id: 'github',
      name: '5. GitHub Platform',
      category: 'Remote Git Host',
      color: 'amber',
      what: 'A cloud hosting platform for Git repositories with collaborative pull requests and CI/CD pipelines.',
      why: 'Serves as the off-site backup, code review hub, portfolio showcase, and deployment trigger.',
      where: 'Cloud platform accessible via HTTPS or SSH from your local Git terminal.',
      week1Role: 'Hosting your profile project repository, opening pull requests, and triggering preview links.',
    },
  ];

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="dev-environment"
        keyTakeaway="A professional development environment is not just an editor; it is a coordinated toolchain composed of an Editor (VS Code), Runtime (Node.js), Shell (Terminal), Local VCS (Git), and Cloud Host (GitHub)."
      />

      {/* Why Developers Need a Dedicated Environment */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Laptop className="w-5 h-5 text-blue-400" />
          <span>Why Developers Need a Dedicated Local Environment</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300 pt-2">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-white font-mono uppercase text-[11px] block">1. Local Isolation &amp; Safety</span>
            <p className="leading-relaxed">
              Coding locally ensures you can break things, test experimental styling, and iterate instantly without affecting public servers or needing an internet connection.
            </p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-white font-mono uppercase text-[11px] block">2. Automated Feedback Loops</span>
            <p className="leading-relaxed">
              Editors and linters highlight syntax errors before you even save. The terminal gives instant diagnostic output when commands succeed or fail.
            </p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-white font-mono uppercase text-[11px] block">3. Professional Parity</span>
            <p className="leading-relaxed">
              Every production engineering team on earth works via local environments with Git. Mastering this setup now establishes the muscle memory for all 14 weeks.
            </p>
          </div>
        </div>
      </div>

      {/* The 5 Tools Deep Analysis Matrix */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">
            The 5 Tools: What, Why, Where &amp; Week 01 Role
          </h2>
          <span className="text-xs font-mono text-slate-500">Essential Developer Toolchain</span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {tools.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6 space-y-4 shadow-md"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-base text-white">{t.name}</h3>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                    {t.category}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="font-mono font-bold text-blue-400 text-[10px] uppercase">WHAT IT IS</span>
                  <p className="text-slate-300 leading-relaxed">{t.what}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono font-bold text-emerald-400 text-[10px] uppercase">WHY IT IS USED</span>
                  <p className="text-slate-300 leading-relaxed">{t.why}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono font-bold text-purple-400 text-[10px] uppercase">WHERE IT FITS</span>
                  <p className="text-slate-300 leading-relaxed">{t.where}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono font-bold text-amber-400 text-[10px] uppercase">WEEK 01 USE</span>
                  <p className="text-slate-300 leading-relaxed font-semibold">{t.week1Role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toolchain Verification Terminal Commands */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
            VERIFICATION PROTOCOL
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Test Your Toolchain in 30 Seconds
          </h3>
          <p className="text-xs text-slate-400">
            Run each command in your terminal. If all 4 commands output version numbers without errors, your workspace is 100% verified.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-white font-bold">1. Verify Node.js LTS</span>
              <button
                onClick={() => handleCopy('node -v')}
                className="text-[11px] text-blue-400 hover:text-white flex items-center gap-1"
              >
                {copiedCmd === 'node -v' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copy</span>
              </button>
            </div>
            <pre className="text-emerald-400 text-xs">node -v</pre>
            <div className="text-[11px] text-slate-500 font-sans">Expected output: v20.x.x or v22.x.x (Active LTS)</div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-white font-bold">2. Verify Git Version</span>
              <button
                onClick={() => handleCopy('git --version')}
                className="text-[11px] text-blue-400 hover:text-white flex items-center gap-1"
              >
                {copiedCmd === 'git --version' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copy</span>
              </button>
            </div>
            <pre className="text-emerald-400 text-xs">git --version</pre>
            <div className="text-[11px] text-slate-500 font-sans">Expected output: git version 2.4x.x or higher</div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-white font-bold">3. Verify Node Package Manager</span>
              <button
                onClick={() => handleCopy('npm -v')}
                className="text-[11px] text-blue-400 hover:text-white flex items-center gap-1"
              >
                {copiedCmd === 'npm -v' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copy</span>
              </button>
            </div>
            <pre className="text-emerald-400 text-xs">npm -v</pre>
            <div className="text-[11px] text-slate-500 font-sans">Expected output: 10.x.x or higher (Bundled with Node)</div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-white font-bold">4. Launch VS Code from Shell</span>
              <button
                onClick={() => handleCopy('code .')}
                className="text-[11px] text-blue-400 hover:text-white flex items-center gap-1"
              >
                {copiedCmd === 'code .' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copy</span>
              </button>
            </div>
            <pre className="text-emerald-400 text-xs">code .</pre>
            <div className="text-[11px] text-slate-500 font-sans">Expected: Opens current directory directly in VS Code</div>
          </div>
        </div>
      </div>

      {/* Common Setup Pitfalls */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
        <h3 className="font-bold text-sm text-amber-400 font-mono uppercase flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" /> 3 Common Setup Mistakes &amp; Instant Fixes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <span className="font-bold text-white font-mono text-[11px]">Mistake: 'code' is not recognized</span>
            <p className="text-[11px] text-slate-400">
              VS Code terminal binary is not in your OS PATH.
            </p>
            <div className="text-[11px] text-emerald-400 font-mono pt-1">
              Fix: In VS Code, press <kbd className="text-white bg-slate-900 px-1 rounded">Cmd+Shift+P</kbd> (Mac) or <kbd className="text-white bg-slate-900 px-1 rounded">Ctrl+Shift+P</kbd> (Win), type "Shell Command: Install 'code' command in PATH".
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <span className="font-bold text-white font-mono text-[11px]">Mistake: Git commit author missing</span>
            <p className="text-[11px] text-slate-400">
              Git throws "Please tell me who you are" on your first commit.
            </p>
            <div className="text-[11px] text-emerald-400 font-mono pt-1">
              Fix: Run <code className="text-white">git config --global user.name "Your Name"</code> and <code className="text-white">git config --global user.email "you@email.com"</code>.
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <span className="font-bold text-white font-mono text-[11px]">Mistake: Windows ExecutionPolicy Error</span>
            <p className="text-[11px] text-slate-400">
              PowerShell blocks scripts with a red security error.
            </p>
            <div className="text-[11px] text-emerald-400 font-mono pt-1">
              Fix: Open PowerShell as Admin and run <code className="text-white">Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</code>.
            </div>
          </div>
        </div>
      </div>

      <ModuleNavFooter currentModuleId="dev-environment" onNavigate={onNavigate} />
    </div>
  );
};
