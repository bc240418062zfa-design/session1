import React from 'react';
import {
  Laptop,
  Terminal as TerminalIcon,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Code,
  Layers,
  Settings,
  Shield,
  FileCode,
  Download,
  Copy,
  Check,
} from 'lucide-react';
import { TerminalSimulator } from '../TerminalSimulator';
import { VSCODE_SHORTCUTS } from '../../data/curriculumData';

interface Module2PageProps {
  onNextModule: () => void;
  onPrevModule: () => void;
  onNavigateHome: () => void;
}

export const Module2Page: React.FC<Module2PageProps> = ({
  onNextModule,
  onPrevModule,
  onNavigateHome,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-7xl mx-auto pb-12">
      {/* Module Title Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
              MODULE 02 OF 05
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>09:43 PM – 09:56 PM PKT</span>
              <span className="hidden sm:inline">(13 Min Agenda / 7 Min Live Core)</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
            <User className="w-3.5 h-3.5 text-blue-400" />
            <span>Speaker: <strong>Muhammad Shan</strong></span>
          </div>
        </div>

        <div className="space-y-2 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Setting Up VS Code, Node.js and the Terminal
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Professional workspace setup, essential extensions, linters and terminal workflow across macOS, Linux, and Windows.
          </p>
        </div>

        {/* Goal Banner */}
        <div className="p-3.5 sm:p-4 bg-slate-950/80 rounded-xl border border-slate-800 flex items-start gap-2.5 sm:gap-3 text-xs text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-mono uppercase">Core Learning Goal:</strong>{' '}
            Master launching your workspace from the terminal (<code className="text-blue-300">code .</code>), navigate folders safely with shell commands (<code className="text-emerald-300">pwd, cd, mkdir, ls</code>), verify Node.js LTS, and configure a minimal, high-velocity VS Code setup without bloated plugins.
          </div>
        </div>
      </div>

      {/* The 3 Core Tools in Harmony */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase font-mono">
            <Code className="w-4 h-4" /> 1. Visual Studio Code
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            The industry-standard source code editor. Built on Electron with Monaco engine. Features language servers, intelligent autocompletion, integrated debugger, and Git source control integration.
          </p>
          <div className="text-[11px] font-mono text-slate-500 bg-slate-950 p-2 rounded">
            Launch from shell: <code className="text-blue-300">code &lt;folder-name&gt;</code>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
            <Laptop className="w-4 h-4" /> 2. Node.js LTS (Long Term Support)
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            The V8 JavaScript runtime outside the browser. Crucial for running development servers (Vite, Next.js), installing package dependencies via npm/pnpm, and executing build tools.
          </p>
          <div className="text-[11px] font-mono text-slate-500 bg-slate-950 p-2 rounded">
            Version check: <code className="text-emerald-300">node -v &amp;&amp; npm -v</code>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase font-mono">
            <TerminalIcon className="w-4 h-4" /> 3. The Developer Terminal
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Direct interface to your operating system kernel. Allows deterministic filesystem navigation, rapid file scaffolding, package installation, and execution of Git version control commands.
          </p>
          <div className="text-[11px] font-mono text-slate-500 bg-slate-950 p-2 rounded">
            Shortcut to toggle in VS Code: <code className="text-purple-300">Ctrl + `</code>
          </div>
        </div>
      </div>

      {/* Interactive Terminal Sandbox Widget */}
      <TerminalSimulator />

      {/* Cross-Platform Terminal Navigation Reference Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            Cross-Platform Shell Command Matrix
          </h2>
          <span className="text-xs font-mono text-slate-500">macOS / Linux vs. Windows</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                <th className="py-2.5 px-3">Developer Intent</th>
                <th className="py-2.5 px-3">macOS / Linux (bash/zsh)</th>
                <th className="py-2.5 px-3">Windows (PowerShell)</th>
                <th className="py-2.5 px-3">Windows (Legacy cmd)</th>
                <th className="py-2.5 px-3">What It Actually Does</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-3 font-semibold text-slate-200">Where am I?</td>
                <td className="py-3 px-3 font-mono text-blue-300"><code className="bg-slate-950 px-1.5 py-0.5 rounded">pwd</code></td>
                <td className="py-3 px-3 font-mono text-emerald-300"><code className="bg-slate-950 px-1.5 py-0.5 rounded">pwd</code> / <code className="bg-slate-950 px-1.5 py-0.5 rounded">Get-Location</code></td>
                <td className="py-3 px-3 font-mono text-slate-400"><code className="bg-slate-950 px-1.5 py-0.5 rounded">cd</code></td>
                <td className="py-3 px-3 text-slate-300">Prints current working directory absolute path.</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-3 font-semibold text-slate-200">List all files</td>
                <td className="py-3 px-3 font-mono text-blue-300"><code className="bg-slate-950 px-1.5 py-0.5 rounded">ls -la</code></td>
                <td className="py-3 px-3 font-mono text-emerald-300"><code className="bg-slate-950 px-1.5 py-0.5 rounded">ls</code> / <code className="bg-slate-950 px-1.5 py-0.5 rounded">dir</code></td>
                <td className="py-3 px-3 font-mono text-slate-400"><code className="bg-slate-950 px-1.5 py-0.5 rounded">dir</code></td>
                <td className="py-3 px-3 text-slate-300">Displays files including hidden dotfiles like <code className="text-slate-400 font-mono">.git</code> and <code className="text-slate-400 font-mono">.gitignore</code>.</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-3 font-semibold text-slate-200">Create folder</td>
                <td className="py-3 px-3 font-mono text-blue-300"><code className="bg-slate-950 px-1.5 py-0.5 rounded">mkdir profile-site</code></td>
                <td className="py-3 px-3 font-mono text-emerald-300"><code className="bg-slate-950 px-1.5 py-0.5 rounded">mkdir profile-site</code></td>
                <td className="py-3 px-3 font-mono text-slate-400"><code className="bg-slate-950 px-1.5 py-0.5 rounded">mkdir profile-site</code></td>
                <td className="py-3 px-3 text-slate-300">Makes a new folder in current directory.</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-3 font-semibold text-slate-200">Change into folder</td>
                <td className="py-3 px-3 font-mono text-blue-300"><code className="bg-slate-950 px-1.5 py-0.5 rounded">cd profile-site</code></td>
                <td className="py-3 px-3 font-mono text-emerald-300"><code className="bg-slate-950 px-1.5 py-0.5 rounded">cd profile-site</code></td>
                <td className="py-3 px-3 font-mono text-slate-400"><code className="bg-slate-950 px-1.5 py-0.5 rounded">cd profile-site</code></td>
                <td className="py-3 px-3 text-slate-300">Moves shell active context inside target folder.</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-3 font-semibold text-slate-200">Go up one folder</td>
                <td className="py-3 px-3 font-mono text-blue-300"><code className="bg-slate-950 px-1.5 py-0.5 rounded">cd ..</code></td>
                <td className="py-3 px-3 font-mono text-emerald-300"><code className="bg-slate-950 px-1.5 py-0.5 rounded">cd ..</code></td>
                <td className="py-3 px-3 font-mono text-slate-400"><code className="bg-slate-950 px-1.5 py-0.5 rounded">cd ..</code></td>
                <td className="py-3 px-3 text-slate-300">Parent directory navigation.</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-3 font-semibold text-slate-200">Open in VS Code</td>
                <td className="py-3 px-3 font-mono text-blue-300"><code className="bg-slate-950 px-1.5 py-0.5 rounded">code .</code></td>
                <td className="py-3 px-3 font-mono text-emerald-300"><code className="bg-slate-950 px-1.5 py-0.5 rounded">code .</code></td>
                <td className="py-3 px-3 font-mono text-slate-400"><code className="bg-slate-950 px-1.5 py-0.5 rounded">code .</code></td>
                <td className="py-3 px-3 text-slate-300">Opens the dot (current folder) as a root VS Code workspace.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Minimal Professional VS Code Setup: Curated Extensions Only */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <Settings className="w-4 h-4 text-purple-400" />
            Curated Professional Extensions (Avoid Extension Bloat!)
          </h2>
          <span className="text-xs font-mono text-slate-500">Only 4 Essential Extensions</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <div className="font-bold text-blue-400 font-mono">1. Prettier - Code Formatter</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Enforces clean indentation, spacing, and quotes on every file save. Eliminates messy formatting debates.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <div className="font-bold text-emerald-400 font-mono">2. Live Server (Ritwick Dey)</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Spins up a lightweight local development server with auto-reload whenever you edit HTML or CSS.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <div className="font-bold text-purple-400 font-mono">3. GitLens — Git supercharged</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Visualizes git authorship inline, highlights uncommitted changes, and provides rich commit history navigation.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <div className="font-bold text-amber-400 font-mono">4. Path Intellisense</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Autocompletes relative file paths when linking <code className="text-slate-200">style.css</code> or <code className="text-slate-200">&lt;img src="..."&gt;</code>.
            </p>
          </div>
        </div>

        {/* Recommended settings.json */}
        <div className="space-y-2 pt-2">
          <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
            <span>Recommended VS Code settings.json:</span>
            <span className="text-[11px] text-slate-500">Cmd+Shift+P &gt; Open User Settings (JSON)</span>
          </div>
          <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "files.autoSave": "onFocusChange",
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.fontSize": 13
}`}
          </pre>
        </div>
      </div>

      {/* Page Footer Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
        <button
          onClick={onPrevModule}
          className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Module 01: Web Architecture</span>
        </button>

        <button
          onClick={onNextModule}
          className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02]"
        >
          <span>Proceed to Module 03: Git Fundamentals</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
