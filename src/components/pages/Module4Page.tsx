import React from 'react';
import {
  FileCode,
  Sliders,
  Palette,
  Type,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Layers,
  Code,
  Check,
} from 'lucide-react';
import { BoxModelPlayground } from '../BoxModelPlayground';
import { CodePlayground } from '../CodePlayground';
import { HTML_SEMANTIC_MATRIX, CSS_SPECIFICITY_GUIDE } from '../../data/curriculumData';

interface Module4PageProps {
  onNextModule: () => void;
  onPrevModule: () => void;
  onNavigateHome: () => void;
}

export const Module4Page: React.FC<Module4PageProps> = ({
  onNextModule,
  onPrevModule,
  onNavigateHome,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-7xl mx-auto pb-12">
      {/* Module Title Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
              MODULE 04 OF 05
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 10:09 PM – 10:21 PM PKT (12 Min Agenda / 10 Min Live Core)
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
            <User className="w-3.5 h-3.5 text-blue-400" />
            <span>Speaker: <strong>Muhammad Shan</strong></span>
          </div>
        </div>

        <div className="space-y-2 max-w-4xl">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            HTML Structure, Semantic Elements & CSS Box Model
          </h1>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            Semantic markup, styling fundamentals, CSS box model dimension math, color systems, and typographic hierarchy.
          </p>
        </div>

        {/* Goal Banner */}
        <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-mono uppercase">Core Learning Goal:</strong>{' '}
            Construct clean, accessible page layouts using semantic HTML5 landmark tags (<code className="text-blue-300">&lt;header&gt;, &lt;main&gt;, &lt;section&gt;, &lt;footer&gt;</code>) instead of div soup, calculate exact element dimensions with the CSS Box Model, and configure <code className="text-emerald-300 font-mono">box-sizing: border-box</code>.
          </div>
        </div>
      </div>

      {/* The 4 Architectural Pillars of Frontend Foundations */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase font-mono">
            <FileCode className="w-4 h-4" /> 1. Semantic Markup
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Provides architectural meaning to browsers, search engines (SEO), and screen readers for accessibility (a11y).
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
            <Sliders className="w-4 h-4" /> 2. CSS Box Model
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Every element is a physical rectangular box: Content + Padding (inside) + Border + Margin (outside spacing).
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase font-mono">
            <Palette className="w-4 h-4" /> 3. Color & Contrast
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            HEX, RGB, HSL with WCAG AA compliance (minimum 4.5:1 text contrast). Never convey critical state by color alone.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase font-mono">
            <Type className="w-4 h-4" /> 4. Typographic Discipline
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Font-family stacks, font-size scale, comfortable line-height (1.5–1.7), and text-wrap: balance for headlines.
          </p>
        </div>
      </div>

      {/* Interactive Box Model Simulator */}
      <BoxModelPlayground />

      {/* Interactive In-Browser Code Sandbox */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span className="text-blue-400 font-bold">CLIENT-SIDE SANDBOXED CODE PLAYGROUND</span>
          <span>Edit HTML &amp; CSS live with zero network latency</span>
        </div>
        <CodePlayground />
      </div>

      {/* HTML5 Semantic Landmarks Matrix */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <FileCode className="w-4 h-4 text-emerald-400" />
            HTML5 Landmark Elements vs. Generic "Div Soup"
          </h2>
          <span className="text-xs font-mono text-slate-500">W3C &amp; ARIA Mapping</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {HTML_SEMANTIC_MATRIX.map((elem, idx) => (
            <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono mb-1">
                  <span className="text-amber-300 font-bold text-sm">{elem.tag}</span>
                  <span className="text-[10px] text-slate-500">role: {elem.role}</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-emerald-400">When to use:</strong> {elem.whenToUse}
                </div>
                <div className="text-[11px] text-slate-400 leading-relaxed pt-1">
                  <strong className="text-rose-400">Avoid:</strong> {elem.whenNotToUse}
                </div>
              </div>
              <pre className="bg-slate-900 p-2 rounded text-[11px] font-mono text-blue-300 overflow-x-auto mt-2">
                {elem.codeSnippet}
              </pre>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Specificity & Cascade Rules */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <Sliders className="w-4 h-4 text-purple-400" />
            CSS Specificity Calculation &amp; Cascade Weight
          </h2>
          <span className="text-xs font-mono text-slate-500">Tuple Score (A, B, C, D)</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                <th className="py-2 px-3">Selector Category</th>
                <th className="py-2 px-3">Score Tuple</th>
                <th className="py-2 px-3">Weight</th>
                <th className="py-2 px-3">Code Example</th>
                <th className="py-2 px-3">Explanation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {CSS_SPECIFICITY_GUIDE.map((rule, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30">
                  <td className="py-2.5 px-3 font-semibold text-slate-200">{rule.selectorType}</td>
                  <td className="py-2.5 px-3 font-mono text-purple-300 font-bold">{rule.weightTuple}</td>
                  <td className="py-2.5 px-3 font-mono text-slate-400">{rule.numericWeight}</td>
                  <td className="py-2.5 px-3 font-mono text-blue-300">{rule.example}</td>
                  <td className="py-2.5 px-3 text-slate-300">{rule.explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Page Footer Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
        <button
          onClick={onPrevModule}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Module 03: Git Fundamentals</span>
        </button>

        <button
          onClick={onNextModule}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-md transition-all hover:scale-[1.02]"
        >
          <span>Proceed to Module 05: Lab & Homework</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
