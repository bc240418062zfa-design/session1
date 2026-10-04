import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check, Smartphone, Tablet, Monitor, Sparkles } from 'lucide-react';

interface CodePreset {
  id: string;
  name: string;
  html: string;
  css: string;
  description: string;
}

const PRESETS: CodePreset[] = [
  {
    id: 'profile',
    name: 'Profile Page Card',
    description: 'Clean semantic developer profile card with header, bio, skills, and links.',
    html: `<header class="profile-header">
  <div class="avatar-placeholder">MS</div>
  <h1>Muhammad Shan</h1>
  <p class="role">Full-Stack Developer · MIHORA.TECH</p>
</header>

<main>
  <section class="card">
    <h2>About Me</h2>
    <p>Junior developer building modern web applications with Next.js, TypeScript, and AI tools.</p>
  </section>

  <section class="card">
    <h2>Core Skills</h2>
    <div class="skills">
      <span class="skill-tag">HTML5</span>
      <span class="skill-tag">CSS3</span>
      <span class="skill-tag">Git</span>
      <span class="skill-tag">Next.js</span>
    </div>
  </section>
</main>

<footer>
  <p>&copy; 2026 Muhammad Shan · Foundations Week 1</p>
</footer>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #0f172a;
  color: #f8fafc;
  padding: 1.5rem;
  line-height: 1.5;
}

.profile-header {
  text-align: center;
  margin-bottom: 2rem;
}

.avatar-placeholder {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #0284c7;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.75rem auto;
  font-weight: bold;
  font-size: 1.25rem;
  border: 2px solid #38bdf8;
}

.profile-header h1 {
  font-size: 1.5rem;
  color: #38bdf8;
}

.role {
  color: #94a3b8;
  font-size: 0.875rem;
}

.card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1rem;
}

.card h2 {
  font-size: 1.1rem;
  color: #93c5fd;
  margin-bottom: 0.5rem;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #0f172a;
  border: 1px solid #0284c7;
  color: #38bdf8;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: monospace;
}

footer {
  text-align: center;
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 1.5rem;
}`,
  },
  {
    id: 'semantic',
    name: 'Semantic Landmarks',
    description: 'Demonstrating header, nav, main, section, and footer without div-soup.',
    html: `<header>
  <h1>Tech Foundations</h1>
  <nav>
    <a href="#about">About</a> · 
    <a href="#labs">Labs</a> · 
    <a href="#contact">Contact</a>
  </nav>
</header>

<main>
  <section id="about">
    <h2>Why Semantic HTML?</h2>
    <p>Semantic tags help screen readers, improve SEO ranking, and make code maintainable for teammates.</p>
  </section>

  <section id="labs">
    <h2>Week 1 Deliverable</h2>
    <p>A deployed personal profile page with two merged GitHub pull requests.</p>
  </section>
</main>

<footer>
  <p>&copy; 2026 MIHORA.TECH Education</p>
</footer>`,
    css: `body {
  font-family: sans-serif;
  background: #090d16;
  color: #e2e8f0;
  padding: 1.5rem;
}
header {
  border-bottom: 1px solid #334155;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}
header h1 { color: #38bdf8; font-size: 1.5rem; }
nav a { color: #94a3b8; text-decoration: none; font-size: 0.9rem; }
nav a:hover { color: #38bdf8; }
section {
  background: #131c2e;
  padding: 1.2rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border-left: 3px solid #38bdf8;
}
section h2 { color: #7dd3fc; font-size: 1.1rem; margin-bottom: 0.4rem; }
footer { text-align: center; color: #64748b; font-size: 0.8rem; margin-top: 2rem; }`,
  },
];

export const CodePlayground: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('profile');
  const [htmlCode, setHtmlCode] = useState<string>(PRESETS[0].html);
  const [cssCode, setCssCode] = useState<string>(PRESETS[0].css);
  const [activeEditorTab, setActiveEditorTab] = useState<'html' | 'css'>('html');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copied, setCopied] = useState<boolean>(false);

  const loadPreset = (preset: CodePreset) => {
    setSelectedPresetId(preset.id);
    setHtmlCode(preset.html);
    setCssCode(preset.css);
  };

  const handleCopy = () => {
    const fullCode = `<!-- index.html -->\n${htmlCode}\n\n/* style.css */\n${cssCode}`;
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const combinedSrcDoc = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode}
      </body>
    </html>
  `;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 sm:p-5 md:p-6 shadow-xl space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 sm:pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
            <span>CLIENT-SIDE SANDBOXED EXPERIMENT</span>
            <span>·</span>
            <span>ZERO SERVER LATENCY</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
            Interactive HTML5 &amp; CSS Playground
          </h3>
          <p className="text-xs text-slate-400">
            Edit markup and styling in the browser. See instantaneous sandboxed preview output.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs w-full sm:w-auto">
          <span className="text-slate-500 pl-1 sm:pl-2">Preset:</span>
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => loadPreset(preset)}
              className={`px-2.5 py-1 rounded transition-colors text-xs ${
                selectedPresetId === preset.id
                  ? 'bg-blue-600 text-white font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Editor & Preview Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Editor Half (Left) */}
        <div className="lg:col-span-6 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex flex-col">
          {/* Editor Tabs Toolbar */}
          <div className="bg-slate-900 border-b border-slate-800 px-3 py-2 flex items-center justify-between select-none">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveEditorTab('html')}
                className={`px-3 py-1 text-xs rounded font-mono font-medium transition-colors ${
                  activeEditorTab === 'html'
                    ? 'bg-slate-950 text-blue-300 border border-slate-800'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                index.html
              </button>
              <button
                onClick={() => setActiveEditorTab('css')}
                className={`px-3 py-1 text-xs rounded font-mono font-medium transition-colors ${
                  activeEditorTab === 'css'
                    ? 'bg-slate-950 text-purple-300 border border-slate-800'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                style.css
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 px-2 py-0.5 rounded hover:bg-slate-800 transition-colors"
                title="Copy Code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[11px]">{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                onClick={() => {
                  const currentPreset = PRESETS.find((p) => p.id === selectedPresetId) || PRESETS[0];
                  setHtmlCode(currentPreset.html);
                  setCssCode(currentPreset.css);
                }}
                className="text-xs text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-slate-800 transition-colors"
                title="Reset to Preset"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Code Textarea */}
          <div className="p-3 flex-1 flex flex-col">
            {activeEditorTab === 'html' ? (
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                spellCheck={false}
                className="w-full h-[320px] bg-transparent text-slate-100 font-mono text-xs leading-relaxed resize-none focus:outline-none"
              />
            ) : (
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                spellCheck={false}
                className="w-full h-[320px] bg-transparent text-purple-200 font-mono text-xs leading-relaxed resize-none focus:outline-none"
              />
            )}
          </div>
        </div>

        {/* Live Preview Half (Right) */}
        <div className="lg:col-span-6 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex flex-col">
          {/* Preview Toolbar */}
          <div className="bg-slate-900 border-b border-slate-800 px-3 py-2 flex items-center justify-between select-none">
            <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Sandboxed Browser Render
            </span>

            {/* Viewport Toggles */}
            <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded border border-slate-800">
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`p-1 rounded text-xs transition-colors ${
                  previewMode === 'desktop' ? 'bg-slate-800 text-blue-400' : 'text-slate-500 hover:text-slate-300'
                }`}
                title="Desktop View (100%)"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setPreviewMode('tablet')}
                className={`p-1 rounded text-xs transition-colors ${
                  previewMode === 'tablet' ? 'bg-slate-800 text-blue-400' : 'text-slate-500 hover:text-slate-300'
                }`}
                title="Tablet View (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setPreviewMode('mobile')}
                className={`p-1 rounded text-xs transition-colors ${
                  previewMode === 'mobile' ? 'bg-slate-800 text-blue-400' : 'text-slate-500 hover:text-slate-300'
                }`}
                title="Mobile View (375px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* IFrame Container with Sandbox */}
          <div className="p-3 flex-1 flex items-center justify-center bg-slate-900/40">
            <div
              style={{
                width: previewMode === 'mobile' ? '320px' : previewMode === 'tablet' ? '460px' : '100%',
                transition: 'width 0.2s ease',
              }}
              className="h-[320px] rounded-lg overflow-hidden border border-slate-800 bg-slate-950 shadow-inner"
            >
              <iframe
                title="Sandbox Preview"
                srcDoc={combinedSrcDoc}
                sandbox="allow-scripts"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
