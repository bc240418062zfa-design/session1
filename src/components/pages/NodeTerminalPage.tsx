import React from 'react';
import {
  Terminal as TerminalIcon,
  Laptop,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Layers,
  Code,
  Sparkles,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { TerminalSimulator } from '../TerminalSimulator';

interface NodeTerminalPageProps {
  onNavigate: (moduleId: string) => void;
}

export const NodeTerminalPage: React.FC<NodeTerminalPageProps> = ({ onNavigate }) => {
  const commandsTable = [
    {
      action: 'Print Current Directory',
      posix: 'pwd',
      windows: 'pwd or cd (PowerShell) / cd (CMD)',
      meaning: 'Shows the absolute path where your terminal is currently sitting.',
      example: 'pwd ➔ /Users/student/projects',
    },
    {
      action: 'List Files in Directory',
      posix: 'ls or ls -la',
      windows: 'ls or dir (PowerShell) / dir (CMD)',
      meaning: 'Displays all files and subfolders. "-la" reveals hidden files like .git.',
      example: 'ls ➔ index.html  style.css  README.md',
    },
    {
      action: 'Create New Directory',
      posix: 'mkdir profile-site',
      windows: 'mkdir profile-site',
      meaning: 'Make Directory. Creates a new empty folder on disk.',
      example: 'mkdir profile-site',
    },
    {
      action: 'Change Directory (Enter)',
      posix: 'cd profile-site',
      windows: 'cd profile-site',
      meaning: 'Changes the active terminal pointer into the specified folder.',
      example: 'cd profile-site',
    },
    {
      action: 'Go Up to Parent Directory',
      posix: 'cd ..',
      windows: 'cd ..',
      meaning: 'Moves one level backwards in the folder hierarchy.',
      example: 'cd ..',
    },
    {
      action: 'Launch VS Code in Folder',
      posix: 'code .',
      windows: 'code .',
      meaning: 'Launches VS Code with the current directory (".") as the open project root.',
      example: 'code .',
    },
  ];

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="terminal-node"
        keyTakeaway="The terminal is your direct control room for navigating files and executing Git commands. Node.js provides the local runtime and package ecosystem that powers modern web development."
      />

      {/* Dual Explanations: Node.js and The Terminal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-xs uppercase">
            <Laptop className="w-5 h-5" /> What is Node.js &amp; Why Do We Need It?
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            The JavaScript Runtime Outside the Browser
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Traditionally, JavaScript could only run inside web browser tabs. In 2009, Ryan Dahl extracted Google Chrome's V8 engine and combined it with a C++ event loop (libuv), creating <strong>Node.js</strong>.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">Why It Matters in Week 01:</span>
              <p className="text-slate-400">
                Even when writing pure HTML and CSS, modern developer tools (Vite, Next.js, linters, static live preview servers) are executable Node programs installed through its package manager (npm).
              </p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">LTS (Long Term Support):</span>
              <p className="text-slate-400">
                Always install the <strong>Active LTS version</strong> (even numbers like v20 or v22). Avoid the "Current" odd-numbered bleeding-edge versions for production stability.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-purple-400 font-bold font-mono text-xs uppercase">
            <TerminalIcon className="w-5 h-5" /> What is the Terminal?
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Deterministic Text Interface to the Kernel
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            The graphical desktop interface (Finder, Windows Explorer) requires clicking, dragging, and navigating visual icons. The <strong>Terminal</strong> lets you speak directly to your operating system via deterministic text commands.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">The Prompt Anatomy:</span>
              <p className="text-slate-400 font-mono text-[11px]">
                <span className="text-emerald-400">student@laptop</span>:<span className="text-blue-400">~/projects</span>$ <span className="text-white">_</span>
              </p>
              <p className="text-slate-400 text-[11px] pt-1">
                Indicates: [User]@[Hostname]:[Current Working Directory]$ [Input Cursor].
              </p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">Cross-Platform Shells:</span>
              <p className="text-slate-400">
                macOS defaults to <strong>zsh</strong>; Linux defaults to <strong>bash</strong>; Windows modern default is <strong>PowerShell</strong> (or WSL Ubuntu).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Terminal Sandbox Simulator */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <TerminalIcon className="w-5 h-5 text-blue-400" />
            <span>Interactive Terminal Sandbox (POSIX &amp; Windows Shell)</span>
          </h2>
          <span className="text-xs font-mono text-slate-500">Try running pwd, ls, mkdir, cd, code .</span>
        </div>
        <TerminalSimulator />
      </div>

      {/* Cross-Platform Command Matrix */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase">
            CROSS-PLATFORM COMMAND MATRIX
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Essential Filesystem Commands Across Operating Systems
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] bg-slate-950">
                <th className="py-2.5 px-3">Action</th>
                <th className="py-2.5 px-3">POSIX (macOS / Linux)</th>
                <th className="py-2.5 px-3">Windows (PowerShell)</th>
                <th className="py-2.5 px-3">Description &amp; Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-mono">
              {commandsTable.map((c) => (
                <tr key={c.action} className="hover:bg-slate-950/40">
                  <td className="py-2.5 px-3 font-bold text-white font-sans">{c.action}</td>
                  <td className="py-2.5 px-3 text-blue-400 font-semibold">{c.posix}</td>
                  <td className="py-2.5 px-3 text-emerald-400 font-semibold">{c.windows}</td>
                  <td className="py-2.5 px-3 text-slate-300 font-sans">
                    <div>{c.meaning}</div>
                    <div className="text-[11px] text-slate-500 font-mono pt-0.5">{c.example}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common Terminal Errors and How to Handle Them */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
        <h3 className="font-bold text-sm text-amber-400 font-mono uppercase flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" /> 3 Common Terminal Errors Every Beginner Encounters
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <span className="font-bold text-white font-mono text-[11px]">1. "No such file or directory"</span>
            <p className="text-[11px] text-slate-400">
              You typed <code className="text-white">cd profile-site</code> while your terminal is sitting in the wrong folder.
            </p>
            <div className="text-[11px] text-emerald-400 font-mono pt-1">
              Fix: Run <code className="text-white">pwd</code> and <code className="text-white">ls</code> to check your actual current location before cd'ing.
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <span className="font-bold text-white font-mono text-[11px]">2. Stuck in a running command</span>
            <p className="text-[11px] text-slate-400">
              A command or server is running in the foreground and you don't have an input prompt.
            </p>
            <div className="text-[11px] text-emerald-400 font-mono pt-1">
              Fix: Press <kbd className="text-white bg-slate-900 px-1 rounded">Ctrl + C</kbd> to send an interrupt signal (SIGINT) to terminate the foreground process.
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <span className="font-bold text-white font-mono text-[11px]">3. "command not found"</span>
            <p className="text-[11px] text-slate-400">
              The shell cannot locate the executable in your PATH variable, or there is a typo in the command name.
            </p>
            <div className="text-[11px] text-emerald-400 font-mono pt-1">
              Fix: Verify spelling, or restart your terminal window after installing software.
            </div>
          </div>
        </div>
      </div>

      <ModuleNavFooter currentModuleId="terminal-node" onNavigate={onNavigate} />
    </div>
  );
};
