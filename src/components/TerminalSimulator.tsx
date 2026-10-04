import React, { useState } from 'react';
import { Terminal as TerminalIcon, Laptop, CornerDownLeft, RotateCcw, HelpCircle } from 'lucide-react';

interface CommandOutput {
  command: string;
  output: string;
  platformNote?: string;
}

export const TerminalSimulator: React.FC = () => {
  const [platform, setPlatform] = useState<'posix' | 'windows'>('posix');
  const [currentDir, setCurrentDir] = useState<string>('~/projects');
  const [commandHistory, setCommandHistory] = useState<CommandOutput[]>([
    {
      command: 'node --version',
      output: 'v22.14.0 (LTS Iron)',
      platformNote: 'Verifies the Node.js runtime is installed and accessible in your system PATH.',
    },
    {
      command: 'git --version',
      output: 'git version 2.45.2',
      platformNote: 'Verifies the Git version control CLI is ready for use.',
    },
  ]);
  const [inputVal, setInputVal] = useState<string>('');

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    let output = '';
    let note = '';
    const lower = trimmed.toLowerCase();

    if (lower === 'clear' || lower === 'cls') {
      setCommandHistory([]);
      setInputVal('');
      return;
    } else if (lower === 'pwd' || lower === 'get-location') {
      output = platform === 'posix' ? currentDir : `C:\\Users\\Student\\projects`;
      note = 'Prints the absolute path of your current working directory.';
    } else if (lower === 'ls' || lower === 'dir' || lower.startsWith('ls ') || lower.startsWith('dir')) {
      if (currentDir.includes('profile-site')) {
        output = platform === 'posix'
          ? `total 24\n-rw-r--r--  1 student staff  1820 Oct 04 21:30 index.html\n-rw-r--r--  1 student staff  1450 Oct 04 21:32 style.css\n-rw-r--r--  1 student staff   450 Oct 04 21:30 README.md\n-rw-r--r--  1 student staff    80 Oct 04 21:30 .gitignore`
          : `Mode                Length Name\n----                ------ ----\n-a---          10/04/2026   1820 index.html\n-a---          10/04/2026   1450 style.css\n-a---          10/04/2026    450 README.md\n-a---          10/04/2026     80 .gitignore`;
      } else {
        output = platform === 'posix'
          ? `profile-site  portfolio  exercises`
          : `d-----   10/04/2026  profile-site\nd-----   10/04/2026  portfolio\nd-----   10/04/2026  exercises`;
      }
      note = platform === 'posix' ? 'Lists files in the current folder (ls).' : 'Lists files in the current directory (dir or ls in PowerShell).';
    } else if (lower.startsWith('mkdir ')) {
      const folder = trimmed.slice(6).trim();
      output = `Directory '${folder}' created.`;
      note = 'Creates a new empty folder on your hard drive.';
    } else if (lower === 'cd profile-site') {
      setCurrentDir(platform === 'posix' ? '~/projects/profile-site' : 'C:\\Users\\Student\\projects\\profile-site');
      output = '';
      note = 'Navigates inside the profile-site directory.';
    } else if (lower === 'cd ..') {
      setCurrentDir(platform === 'posix' ? '~/projects' : 'C:\\Users\\Student\\projects');
      output = '';
      note = 'Moves one directory level upwards into parent directory.';
    } else if (lower === 'code .') {
      output = `[VS Code] Opening workspace '${currentDir}' in Visual Studio Code...`;
      note = '"code ." opens the current folder directly in VS Code from your shell.';
    } else if (lower === 'node -v' || lower === 'node --version') {
      output = 'v22.14.0 (LTS Iron)';
      note = 'Displays current installed Node.js Long Term Support version.';
    } else if (lower === 'git --version' || lower === 'git -v') {
      output = 'git version 2.45.2';
      note = 'Displays current installed Git engine version.';
    } else if (lower === 'git status') {
      output = currentDir.includes('profile-site')
        ? `On branch main\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n\tmodified:   index.html\n\tmodified:   style.css\n\nno changes added to commit (use "git add")`
        : `fatal: not a git repository (or any of the parent directories): .git`;
      note = 'Checks the exact state of your working directory and staging area.';
    } else {
      output = `zsh: command not found: ${trimmed}. Try: pwd, ls, mkdir profile-site, cd profile-site, code ., node -v, git status`;
    }

    setCommandHistory((prev) => [
      ...prev,
      {
        command: trimmed,
        output,
        platformNote: note,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const resetTerminal = () => {
    setCommandHistory([
      {
        command: 'node --version',
        output: 'v22.14.0 (LTS Iron)',
        platformNote: 'Verifies the Node.js runtime is installed.',
      },
      {
        command: 'git --version',
        output: 'git version 2.45.2',
        platformNote: 'Verifies the Git version control CLI.',
      },
    ]);
    setCurrentDir(platform === 'posix' ? '~/projects' : 'C:\\Users\\Student\\projects');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-xl space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
            <span>TERMINAL ENVIRONMENT SANDBOX</span>
            <span>·</span>
            <span>CROSS-PLATFORM SAFE</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Command Line Essentials for Developers
          </h3>
          <p className="text-xs text-slate-400">
            Practice essential navigation and tool checks without fear of breaking anything.
          </p>
        </div>

        {/* OS Platform Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Platform:</span>
          <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
            <button
              onClick={() => {
                setPlatform('posix');
                setCurrentDir('~/projects');
              }}
              className={`px-3 py-1 rounded transition-colors ${
                platform === 'posix'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              macOS / Linux (bash/zsh)
            </button>
            <button
              onClick={() => {
                setPlatform('windows');
                setCurrentDir('C:\\Users\\Student\\projects');
              }}
              className={`px-3 py-1 rounded transition-colors ${
                platform === 'windows'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Windows (PowerShell)
            </button>
          </div>
        </div>
      </div>

      {/* Quick Command Action Chips */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        <span className="text-xs text-slate-400 font-medium mr-1">Quick Run:</span>
        {[
          { label: 'pwd', cmd: 'pwd', desc: 'Print working directory' },
          { label: platform === 'posix' ? 'ls -la' : 'dir', cmd: platform === 'posix' ? 'ls -la' : 'dir', desc: 'List files' },
          { label: 'mkdir profile-site', cmd: 'mkdir profile-site', desc: 'Create folder' },
          { label: 'cd profile-site', cmd: 'cd profile-site', desc: 'Enter directory' },
          { label: 'code .', cmd: 'code .', desc: 'Open in VS Code' },
          { label: 'git status', cmd: 'git status', desc: 'Inspect Git state' },
          { label: 'node --version', cmd: 'node --version', desc: 'Check Node' },
        ].map((chip) => (
          <button
            key={chip.label}
            onClick={() => executeCommand(chip.cmd)}
            className="px-2.5 py-1 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-blue-300 rounded font-mono text-xs transition-colors"
            title={chip.desc}
          >
            {chip.label}
          </button>
        ))}
        <button
          onClick={resetTerminal}
          className="ml-auto text-xs text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-slate-800 flex items-center gap-1"
          title="Reset Terminal"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* Mock Terminal Window */}
      <div className="terminal-shell bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono text-xs">
        {/* Window Chrome Titlebar */}
        <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-slate-400 text-[11px] ml-2 font-medium">
              {platform === 'posix' ? 'student@macbook: ~' : 'PS C:\\Users\\Student>'}
            </span>
          </div>
          <span className="text-[11px] text-slate-500">
            {platform === 'posix' ? 'zsh' : 'PowerShell 7'}
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 space-y-3 min-h-[220px] max-h-[340px] overflow-y-auto">
          {commandHistory.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">
                  {platform === 'posix' ? '$' : 'PS>'}
                </span>
                <span className="text-slate-100 font-semibold">{item.command}</span>
              </div>
              {item.output && (
                <pre className="text-slate-300 pl-4 whitespace-pre-wrap leading-relaxed border-l border-slate-800">
                  {item.output}
                </pre>
              )}
              {item.platformNote && (
                <div className="text-[11px] text-blue-400/90 pl-4 italic">
                  ℹ {item.platformNote}
                </div>
              )}
            </div>
          ))}

          {/* Active input row */}
          <div className="flex items-center gap-2 pt-1 text-slate-200">
            <span className="text-emerald-400 font-bold shrink-0">
              {platform === 'posix' ? '$' : 'PS>'}
            </span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type command (e.g. ls, pwd, mkdir profile-site, code .)"
              className="w-full bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none font-mono text-xs"
              autoFocus={false}
            />
            <button
              onClick={() => executeCommand(inputVal)}
              className="px-2 py-0.5 bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white rounded text-[11px] shrink-0 transition-colors"
            >
              Run
            </button>
          </div>
        </div>
      </div>

      {/* Platform Nuances Explanatory Card */}
      <div className="bg-slate-950 border border-slate-800/80 rounded-lg p-3 text-xs text-slate-400 flex items-start gap-2.5">
        <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-slate-200 font-semibold">Cross-Platform Rule for Beginners:</span>
          {platform === 'posix' ? (
            <p>
              macOS and Linux use POSIX standards: file paths use forward slashes (<code className="text-blue-300">~/projects/profile-site</code>), filenames are case-sensitive, and flags usually take single dashes (<code className="text-blue-300">-la</code>).
            </p>
          ) : (
            <p>
              Windows uses backslashes (<code className="text-blue-300">C:\Users\Student</code>) in file paths, but modern PowerShell happily accepts forward slashes (<code className="text-blue-300">cd ./profile-site</code>) and aliases <code className="text-blue-300">ls</code> to <code className="text-blue-300">Get-ChildItem</code>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
