import React, { useState } from 'react';
import {
  Palette,
  Type,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sliders,
  Sparkles,
  Eye,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';

interface CssTypographyColorPageProps {
  onNavigate: (moduleId: string) => void;
}

export const CssTypographyColorPage: React.FC<CssTypographyColorPageProps> = ({
  onNavigate,
}) => {
  const [activeColorMode, setActiveColorMode] = useState<'hex' | 'rgb' | 'hsl'>('hex');

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="css-typography-color"
        keyTakeaway="Good web typography establishes a clear hierarchy using font-size, font-weight, and line-height. Use relative 'rem' units for accessibility, maintain 1.5+ line-height for body reading, and ensure high contrast (4.5:1) between text and background."
      />

      {/* Color Representations in CSS */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-bold text-blue-400 uppercase">
              COLOR SYSTEMS
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
              The 3 Ways to Declare Color in Modern CSS
            </h2>
          </div>
          <div className="flex gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
            {(['hex', 'rgb', 'hsl'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setActiveColorMode(m)}
                className={`px-3 py-1 rounded transition-colors uppercase font-bold ${
                  activeColorMode === m ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-blue-400 font-mono text-sm block">1. HEX Notation</span>
            <pre className="p-2 bg-slate-900 rounded font-mono text-xs text-blue-300">
              color: #3b82f6;
            </pre>
            <p className="text-slate-300 leading-relaxed font-sans">
              Hexadecimal numbers representing Red (3b), Green (82), Blue (f6) channels from 00 to ff (0 to 255 in decimal).
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-emerald-400 font-mono text-sm block">2. RGB / RGBA</span>
            <pre className="p-2 bg-slate-900 rounded font-mono text-xs text-emerald-300">
              color: rgb(59, 130, 246);
            </pre>
            <p className="text-slate-300 leading-relaxed font-sans">
              Decimal red, green, blue values from 0 to 255. Add an alpha channel (<code className="text-white">rgba(59, 130, 246, 0.5)</code>) for opacity transparency.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-purple-400 font-mono text-sm block">3. HSL (Hue, Saturation, Light)</span>
            <pre className="p-2 bg-slate-900 rounded font-mono text-xs text-purple-300">
              color: hsl(217, 91%, 60%);
            </pre>
            <p className="text-slate-300 leading-relaxed font-sans">
              Human-intuitive: Hue (0-360 degrees on color wheel), Saturation (0-100%), Lightness (0-100%).
            </p>
          </div>
        </div>

        {/* Contrast Accessibility Note */}
        <div className="p-4 bg-emerald-950/30 rounded-xl border border-emerald-500/30 flex items-start gap-3 text-xs text-emerald-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <strong className="text-white font-mono uppercase text-[11px] block">
              WCAG AA Contrast Requirement:
            </strong>
            <p className="leading-relaxed text-slate-300">
              Normal body text must have a minimum contrast ratio of <strong>4.5:1</strong> against its background. Never put dark gray text on a black background, or light yellow text on a white background.
            </p>
          </div>
        </div>
      </div>

      {/* Typography Hierarchy for the Profile Project */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
            TYPOGRAPHIC HIERARCHY
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Typographic Scale for Your Personal Profile Page
          </h3>
          <p className="text-xs text-slate-400">
            A cohesive typographic hierarchy uses consistent sizing, weight, and line-height across headings and body text.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-blue-400 uppercase">Page Title (&lt;h1&gt;)</span>
              <div className="text-3xl font-extrabold text-white tracking-tight">
                Muhammad Shan — Full-Stack Developer
              </div>
            </div>
            <pre className="font-mono text-xs text-slate-400 bg-slate-900 p-2.5 rounded border border-slate-800">
{`font-size: 2.25rem; /* 36px */
font-weight: 800;
line-height: 1.2;`}
            </pre>
          </div>

          <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 uppercase">Section Heading (&lt;h2&gt;)</span>
              <div className="text-xl font-bold text-slate-100">
                Core Technical Competencies
              </div>
            </div>
            <pre className="font-mono text-xs text-slate-400 bg-slate-900 p-2.5 rounded border border-slate-800">
{`font-size: 1.5rem; /* 24px */
font-weight: 700;
line-height: 1.3;`}
            </pre>
          </div>

          <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-lg">
              <span className="text-[10px] font-mono text-purple-400 uppercase">Body Paragraph (&lt;p&gt;)</span>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Passionate software engineer studying Week 1 Foundations at MIHORA.TECH. Building full-stack web applications with modern HTML, CSS, Next.js, and version control.
              </p>
            </div>
            <pre className="font-mono text-xs text-slate-400 bg-slate-900 p-2.5 rounded border border-slate-800">
{`font-size: 1rem; /* 16px */
font-weight: 400;
line-height: 1.6; /* Comfortable reading */`}
            </pre>
          </div>
        </div>
      </div>

      <ModuleNavFooter currentModuleId="css-typography-color" onNavigate={onNavigate} />
    </div>
  );
};
