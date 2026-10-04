import React, { useState } from 'react';
import {
  Palette,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sliders,
  Layers,
  Code,
  Sparkles,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';

interface CssFundamentalsPageProps {
  onNavigate: (moduleId: string) => void;
}

export const CssFundamentalsPage: React.FC<CssFundamentalsPageProps> = ({ onNavigate }) => {
  const [calcIdCount, setCalcIdCount] = useState<number>(0);
  const [calcClassCount, setCalcClassCount] = useState<number>(2);
  const [calcElementCount, setCalcElementCount] = useState<number>(1);

  // Compute specificity score
  const specificityScore = calcIdCount * 100 + calcClassCount * 10 + calcElementCount * 1;

  const selectorExamples = [
    {
      name: 'Element (Type) Selector',
      syntax: 'p { color: #94a3b8; }',
      targets: 'Every single <p> element on the entire page.',
      specificity: '0, 0, 1 (Weight: 1)',
      whenToUse: 'Setting base typography and global HTML resets.',
    },
    {
      name: 'Class Selector',
      syntax: '.profile-card { border-radius: 12px; }',
      targets: 'Any element with class="profile-card". Reusable across multiple elements.',
      specificity: '0, 1, 0 (Weight: 10)',
      whenToUse: 'Primary styling mechanism in modern web development.',
    },
    {
      name: 'ID Selector',
      syntax: '#main-header { position: sticky; }',
      targets: 'The single element with id="main-header".',
      specificity: '1, 0, 0 (Weight: 100)',
      whenToUse: 'Rarely for styling due to overly high specificity weight.',
    },
    {
      name: 'Descendant Selector',
      syntax: 'nav a { text-decoration: none; }',
      targets: 'Any <a> tag located anywhere inside a <nav> landmark.',
      specificity: '0, 0, 2 (Weight: 2)',
      whenToUse: 'Targeting elements only within a specific component context.',
    },
    {
      name: 'Pseudo-Class (:hover)',
      syntax: 'button:hover { background-color: #2563eb; }',
      targets: 'An element when the user points their mouse cursor over it.',
      specificity: '0, 1, 1 (Weight: 11)',
      whenToUse: 'Interactive state feedback for clickable buttons and links.',
    },
  ];

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="css-fundamentals"
        keyTakeaway="CSS controls visual presentation by selecting DOM nodes and applying style declarations. The Cascade resolves conflicting rules based on Specificity weight math (Inline > ID > Class > Element) and source order."
      />

      {/* Anatomy of a CSS Rule */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase">
            SYNTAX ANATOMY
          </span>
          <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
            Anatomy of a CSS Rule
          </h2>
        </div>

        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm sm:text-base text-center">
          <span className="text-blue-400 font-bold">.profile-title</span>{' '}
          <span className="text-slate-400">{'{'}</span>{' '}
          <span className="text-emerald-400">color</span>
          <span className="text-slate-400">:</span>{' '}
          <span className="text-amber-300">#3b82f6</span>
          <span className="text-slate-400">;</span>{' '}
          <span className="text-emerald-400">font-size</span>
          <span className="text-slate-400">:</span>{' '}
          <span className="text-amber-300">1.5rem</span>
          <span className="text-slate-400">;</span>{' '}
          <span className="text-slate-400">{'}'}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <span className="font-bold text-blue-400 font-mono text-[11px]">Selector (.profile-title)</span>
            <p className="text-slate-400 text-[11px]">Determines which HTML elements in the DOM will be styled by this rule.</p>
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <span className="font-bold text-emerald-400 font-mono text-[11px]">Property (color)</span>
            <p className="text-slate-400 text-[11px]">The specific visual characteristic you want to modify (e.g. margin, background).</p>
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <span className="font-bold text-amber-300 font-mono text-[11px]">Value (#3b82f6)</span>
            <p className="text-slate-400 text-[11px]">The exact setting or measurement unit assigned to the property.</p>
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
            <span className="font-bold text-white font-mono text-[11px]">Declaration Semicolon (;)</span>
            <p className="text-slate-400 text-[11px]">Mandatory punctuation ending each property-value pair. Omitting it breaks parsing!</p>
          </div>
        </div>
      </div>

      {/* Selectors Taxonomy Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">
            CSS Selectors Taxonomy &amp; Specificity Weights
          </h2>
          <span className="text-xs font-mono text-slate-500">Core Selector Types</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectorExamples.map((s) => (
            <div key={s.name} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2 text-xs">
              <div className="flex items-center justify-between font-mono">
                <span className="font-bold text-white">{s.name}</span>
                <span className="text-[10px] text-emerald-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {s.specificity}
                </span>
              </div>
              <pre className="font-mono text-blue-300 text-xs py-1 px-2 bg-slate-950 rounded border border-slate-800/80">
                {s.syntax}
              </pre>
              <p className="text-slate-300 leading-relaxed font-sans">{s.targets}</p>
              <div className="text-[11px] text-slate-400 font-medium pt-1 border-t border-slate-800">
                When to use: {s.whenToUse}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive CSS Specificity Calculator */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase">
            CASCADE RESOLUTION MATHEMATICS
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Interactive Specificity Calculator
          </h3>
          <p className="text-xs text-slate-400">
            Adjust the counts of IDs, Classes, and Elements to see how the browser computes specificity weight.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <span className="text-purple-400 font-bold">IDs (#header): {calcIdCount}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setCalcIdCount(Math.max(0, calcIdCount - 1))}
                className="px-3 py-1 bg-slate-900 hover:bg-slate-800 rounded text-slate-300 border border-slate-700"
              >
                -1
              </button>
              <button
                onClick={() => setCalcIdCount(calcIdCount + 1)}
                className="px-3 py-1 bg-purple-600 hover:bg-purple-500 rounded text-white"
              >
                +1
              </button>
            </div>
            <div className="text-[10px] text-slate-500 font-sans">Weight: 100 points each</div>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <span className="text-blue-400 font-bold">Classes (.btn): {calcClassCount}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setCalcClassCount(Math.max(0, calcClassCount - 1))}
                className="px-3 py-1 bg-slate-900 hover:bg-slate-800 rounded text-slate-300 border border-slate-700"
              >
                -1
              </button>
              <button
                onClick={() => setCalcClassCount(calcClassCount + 1)}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded text-white"
              >
                +1
              </button>
            </div>
            <div className="text-[10px] text-slate-500 font-sans">Weight: 10 points each</div>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <span className="text-emerald-400 font-bold">Elements (&lt;p&gt;): {calcElementCount}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setCalcElementCount(Math.max(0, calcElementCount - 1))}
                className="px-3 py-1 bg-slate-900 hover:bg-slate-800 rounded text-slate-300 border border-slate-700"
              >
                -1
              </button>
              <button
                onClick={() => setCalcElementCount(calcElementCount + 1)}
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 rounded text-white"
              >
                +1
              </button>
            </div>
            <div className="text-[10px] text-slate-500 font-sans">Weight: 1 point each</div>
          </div>
        </div>

        <div className="p-4 bg-slate-950 rounded-xl border border-purple-500/40 flex flex-wrap items-center justify-between gap-4 font-mono">
          <div className="space-y-1">
            <span className="text-xs text-slate-400">Total Computed Specificity Tuple:</span>
            <div className="text-xl font-bold text-white">
              ({calcIdCount}, {calcClassCount}, {calcElementCount}) = Score: {specificityScore}
            </div>
          </div>
          <div className="text-xs text-slate-400 font-sans max-w-sm">
            The rule with the highest specificity score always wins, regardless of which line of CSS was written last.
          </div>
        </div>
      </div>

      <ModuleNavFooter currentModuleId="css-fundamentals" onNavigate={onNavigate} />
    </div>
  );
};
