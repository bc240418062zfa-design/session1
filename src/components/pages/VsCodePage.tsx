import React, { useState } from 'react';
import {
  Code,
  FolderOpen,
  Keyboard,
  Settings,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  Sparkles,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { VSCODE_SHORTCUTS } from '../../data/curriculumData';

interface VsCodePageProps {
  onNavigate: (moduleId: string) => void;
}

export const VsCodePage: React.FC<VsCodePageProps> = ({ onNavigate }) => {
  const [copiedSettings, setCopiedSettings] = useState<boolean>(false);

  const settingsSnippet = `{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "files.autoSave": "onFocusChange"
}`;

  const handleCopySettings = () => {
    navigator.clipboard.writeText(settingsSnippet);
    setCopiedSettings(true);
    setTimeout(() => setCopiedSettings(false), 2000);
  };

  const extensions = [
    {
      name: 'Prettier - Code Formatter',
      author: 'Prettier',
      id: 'esbenp.prettier-vscode',
      purpose: 'Enforces clean, deterministic indentation and whitespace on every file save.',
      whyNeeded: 'Prevents embarrassing formatting bugs and makes HTML tag nesting instantly readable.',
    },
    {
      name: 'Live Server',
      author: 'Ritwick Dey',
      id: 'ritwickdey.liveserver',
      purpose: 'Launches a local development HTTP server on port 5500 with automatic browser live reload.',
      whyNeeded: 'Eliminates manually pressing Refresh in your browser after every HTML or CSS edit.',
    },
    {
      name: 'Auto Rename Tag',
      author: 'Jun Han',
      id: 'formulahendry.auto-rename-tag',
      purpose: 'Automatically renames the paired closing HTML tag when you edit the opening tag.',
      whyNeeded: 'Prevents unclosed tag syntax errors when refactoring <div> to <section> or <h2> to <h3>.',
    },
  ];

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="vscode"
        keyTakeaway="Always open the root PROJECT FOLDER in VS Code (using 'code .'), never loose individual files. Configure format-on-save and use the integrated terminal (Ctrl + `) for a seamless workflow."
      />

      {/* Anatomy of the VS Code Workspace */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase">
            WORKSPACE GEOGRAPHY
          </span>
          <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
            The 5 Zones of the Visual Studio Code Workspace
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-blue-400 font-mono text-[11px] block">1. Activity Bar (Far Left)</span>
            <p className="text-slate-300 leading-relaxed">
              Switches between primary sidebars: Explorer (files), Source Control (Git), Extensions, and Search.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-emerald-400 font-mono text-[11px] block">2. Explorer Sidebar</span>
            <p className="text-slate-300 leading-relaxed">
              Displays the folder hierarchy of your active project workspace. Shows dirty unsaved files with dots and Git modifications with color indicators.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-purple-400 font-mono text-[11px] block">3. Editor Canvas</span>
            <p className="text-slate-300 leading-relaxed">
              The main syntax-highlighted code editing view with line numbers, code folding, and autocomplete hints.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-amber-400 font-mono text-[11px] block">4. Integrated Terminal</span>
            <p className="text-slate-300 leading-relaxed">
              Toggled via <kbd className="text-white bg-slate-900 px-1 rounded border border-slate-700">Ctrl + `</kbd>. Automatically starts inside your active project root folder!
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-rose-400 font-mono text-[11px] block">5. Status Bar (Bottom)</span>
            <p className="text-slate-300 leading-relaxed">
              Shows current Git branch (<code className="text-white">main</code>), UTF-8 encoding, line/column coordinates, and Live Server port.
            </p>
          </div>
        </div>
      </div>

      {/* Week 01 Curated Extensions */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
              EXTENSION CURATION (MAXIMUM VELOCITY, ZERO BLOAT)
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
              The Only 3 Extensions You Need for Week 01
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500">Do not install dozens of plugins</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {extensions.map((ext) => (
            <div key={ext.name} className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="font-bold text-white text-sm">{ext.name}</div>
              <div className="text-[10px] font-mono text-blue-400">{ext.id}</div>
              <p className="text-slate-300 leading-relaxed font-sans">{ext.purpose}</p>
              <div className="p-2.5 bg-slate-900/80 rounded-lg text-emerald-300 text-[11px] font-medium border border-slate-800">
                Why needed: {ext.whyNeeded}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended settings.json Configuration */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono font-bold text-purple-400 uppercase">
              RECOMMENDED SETTINGS CONFIGURATION
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
              Automate Format on Save
            </h3>
          </div>
          <button
            onClick={handleCopySettings}
            className="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5"
          >
            {copiedSettings ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSettings ? 'Copied to Clipboard!' : 'Copy settings.json'}</span>
          </button>
        </div>

        <pre className="bg-slate-950 p-4 rounded-xl font-mono text-xs text-blue-300 border border-slate-800 overflow-x-auto">
          {settingsSnippet}
        </pre>
        <p className="text-xs text-slate-400">
          Paste this into your VS Code User Settings (<kbd className="text-white bg-slate-950 px-1 rounded border border-slate-800">Cmd+,</kbd> or <kbd className="text-white bg-slate-950 px-1 rounded border border-slate-800">Ctrl+,</kbd> ➔ click Open Settings JSON icon in top-right).
        </p>
      </div>

      {/* Essential VS Code Keyboard Shortcuts */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase">
            KEYBOARD MASTERY
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Essential VS Code Shortcuts for Week 01
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] bg-slate-950">
                <th className="py-2.5 px-3">Action</th>
                <th className="py-2.5 px-3">macOS Shortcut</th>
                <th className="py-2.5 px-3">Windows / Linux Shortcut</th>
                <th className="py-2.5 px-3">Engineering Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-mono">
              {VSCODE_SHORTCUTS.slice(0, 7).map((s) => (
                <tr key={s.action} className="hover:bg-slate-950/40">
                  <td className="py-2.5 px-3 font-bold text-white font-sans">{s.action}</td>
                  <td className="py-2.5 px-3 text-blue-400 font-semibold">{s.mac}</td>
                  <td className="py-2.5 px-3 text-emerald-400 font-semibold">{s.win}</td>
                  <td className="py-2.5 px-3 text-slate-300 font-sans">{s.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ModuleNavFooter currentModuleId="vscode" onNavigate={onNavigate} />
    </div>
  );
};
