import React, { useState } from 'react';
import {
  FileCode,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Code,
  Layers,
  Copy,
  Check,
  Eye,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';

interface HtmlStructurePageProps {
  onNavigate: (moduleId: string) => void;
}

export const HtmlStructurePage: React.FC<HtmlStructurePageProps> = ({ onNavigate }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const boilerplateCode = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Muhammad Shan — Web Developer</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>Muhammad Shan</h1>
      <p>Full-Stack Web Developer &amp; Mentor at MIHORA.TECH</p>
    </header>
  </body>
</html>`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="html-structure"
        keyTakeaway="HTML provides the structural skeleton of the webpage. Elements wrap content with opening and closing tags, attributes provide metadata, and valid nesting builds the browser's Document Object Model (DOM)."
      />

      {/* Dissected HTML5 Boilerplate */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono font-bold text-blue-400 uppercase">
              DOCUMENT ARCHITECTURE
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
              The Essential HTML5 Boilerplate
            </h2>
          </div>
          <button
            onClick={() => handleCopy(boilerplateCode)}
            className="px-3.5 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5"
          >
            {copiedCode === boilerplateCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedCode === boilerplateCode ? 'Copied Boilerplate!' : 'Copy Starter HTML'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-blue-300 overflow-x-auto text-[11px] leading-relaxed">
            <pre>{boilerplateCode}</pre>
          </div>

          <div className="space-y-2 text-slate-300">
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">&lt;!DOCTYPE html&gt;</span>
              <p className="text-[11px] text-slate-400">
                Tells the browser to render using modern HTML5 standard mode rather than legacy Quirks Mode.
              </p>
            </div>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">&lt;head&gt; vs &lt;body&gt;</span>
              <p className="text-[11px] text-slate-400">
                <strong>&lt;head&gt;</strong> holds invisible machine metadata (charset, viewport, title, linked CSS). <strong>&lt;body&gt;</strong> contains everything visible to the user.
              </p>
            </div>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">viewport meta tag</span>
              <p className="text-[11px] text-slate-400">
                <code className="text-emerald-400">width=device-width, initial-scale=1.0</code> prevents mobile browsers from zooming out to desktop proportions; essential for responsive design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Anatomy of an HTML Element */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
            ELEMENT ANATOMY
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Tags, Attributes, Content, and Nesting
          </h3>
        </div>

        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center font-mono text-sm sm:text-base">
          <span className="text-blue-400">&lt;a</span>{' '}
          <span className="text-purple-400">href</span>=<span className="text-amber-300">"https://mihora.tech"</span>{' '}
          <span className="text-purple-400">target</span>=<span className="text-amber-300">"_blank"</span>
          <span className="text-blue-400">&gt;</span>
          <span className="text-white font-bold px-2">Visit MIHORA.TECH</span>
          <span className="text-blue-400">&lt;/a&gt;</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <span className="font-bold text-blue-400 font-mono text-[11px]">Opening Tag &lt;a&gt;</span>
            <p className="text-slate-400 text-[11px]">Signals to the browser where the anchor link element begins.</p>
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <span className="font-bold text-purple-400 font-mono text-[11px]">Attributes (href, target)</span>
            <p className="text-slate-400 text-[11px]">Key-value configuration properties providing destination and target behavior.</p>
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <span className="font-bold text-white font-mono text-[11px]">Content</span>
            <p className="text-slate-400 text-[11px]">The text or child nodes wrapped inside that the user actually sees and clicks.</p>
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <span className="font-bold text-blue-400 font-mono text-[11px]">Closing Tag &lt;/a&gt;</span>
            <p className="text-slate-400 text-[11px]">Signals where the element ends. Void elements like &lt;img&gt; have no closing tag.</p>
          </div>
        </div>
      </div>

      {/* Code and Live Result Side-by-Side Examples */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-400" />
            <span>Code vs. Rendered Result Side-by-Side</span>
          </h3>
          <span className="text-xs font-mono text-slate-500">Core Content Elements</span>
        </div>

        <div className="space-y-4">
          {/* Example 1: Headings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
            <div className="space-y-1 font-mono text-blue-300">
              <span className="text-[10px] text-slate-500 uppercase font-sans">Code Snippet</span>
              <pre className="text-[11px]">
{`<h1>Primary Page Title</h1>
<h2>Section Subheading</h2>
<h3>Subsection Title</h3>`}
              </pre>
            </div>
            <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-4">
              <span className="text-[10px] text-slate-500 uppercase font-sans">Browser Visual Render</span>
              <div className="space-y-1 text-slate-200">
                <div className="text-xl font-bold text-white">Primary Page Title</div>
                <div className="text-base font-semibold text-slate-300">Section Subheading</div>
                <div className="text-sm font-medium text-slate-400">Subsection Title</div>
              </div>
            </div>
          </div>

          {/* Example 2: Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
            <div className="space-y-1 font-mono text-blue-300">
              <span className="text-[10px] text-slate-500 uppercase font-sans">Code Snippet</span>
              <pre className="text-[11px]">
{`<ul>
  <li>HTML5 Semantic Markup</li>
  <li>CSS Box Model</li>
  <li>Git Version Control</li>
</ul>`}
              </pre>
            </div>
            <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-4">
              <span className="text-[10px] text-slate-500 uppercase font-sans">Browser Visual Render</span>
              <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs">
                <li>HTML5 Semantic Markup</li>
                <li>CSS Box Model</li>
                <li>Git Version Control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ModuleNavFooter currentModuleId="html-structure" onNavigate={onNavigate} />
    </div>
  );
};
