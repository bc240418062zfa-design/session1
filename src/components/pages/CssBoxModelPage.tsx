import React from 'react';
import { Sliders, CheckCircle2, AlertTriangle, ArrowRight, Layers, HelpCircle } from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { BoxModelPlayground } from '../BoxModelPlayground';

interface CssBoxModelPageProps {
  onNavigate: (moduleId: string) => void;
}

export const CssBoxModelPage: React.FC<CssBoxModelPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="css-box-model"
        keyTakeaway="Every visible element is a physical rectangle composed of Content, Padding, Border, and Margin. Always set 'box-sizing: border-box' so that padding and borders do not expand the element's specified width."
      />

      {/* Interactive Box Model Simulator */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sliders className="w-5 h-5 text-blue-400" />
            <span>Interactive Box Model Dimension Calculator</span>
          </h2>
          <span className="text-xs font-mono text-slate-500">Live dimension formula inspector</span>
        </div>
        <BoxModelPlayground />
      </div>

      {/* The 4 Concentric Layers Explained */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
            GEOMETRIC ANATOMY
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            The 4 Concentric Rectangles of Every HTML Element
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-slate-950 p-4 rounded-xl border border-blue-500/30 space-y-2">
            <span className="font-bold text-blue-400 font-mono text-sm block">1. Content Box</span>
            <p className="text-slate-300 leading-relaxed font-sans">
              The core area where text, images, or child elements reside. Its dimensions are defined by <code className="text-white">width</code> and <code className="text-white">height</code>.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 space-y-2">
            <span className="font-bold text-emerald-400 font-mono text-sm block">2. Padding (Inside)</span>
            <p className="text-slate-300 leading-relaxed font-sans">
              Clearance space inside the element between the content and the border. Takes on the background color of the element.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/30 space-y-2">
            <span className="font-bold text-amber-400 font-mono text-sm block">3. Border (Edge)</span>
            <p className="text-slate-300 leading-relaxed font-sans">
              A visible stroke line wrapping around the padding and content. Has properties for style (solid/dashed), width, and color.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-rose-500/30 space-y-2">
            <span className="font-bold text-rose-400 font-mono text-sm block">4. Margin (Outside)</span>
            <p className="text-slate-300 leading-relaxed font-sans">
              Transparent clearance space outside the border separating this element from its neighbors. Vertical margins collapse!
            </p>
          </div>
        </div>
      </div>

      {/* Critical Questions: What Happens If? */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase">
            LAYOUT MECHANICS
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Critical Layout Questions: What Happens When You Change Spacing?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-slate-300">
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-white font-mono text-xs flex items-center gap-1.5 text-blue-400">
              <HelpCircle className="w-4 h-4" /> What happens if padding increases?
            </h4>
            <p className="leading-relaxed">
              In legacy <code className="text-white">content-box</code>, increasing padding causes the element to grow physically larger on screen, often pushing adjacent elements onto a new line and breaking multi-column grids.
            </p>
            <div className="text-[11px] text-emerald-400 font-mono pt-1">
              In <code className="text-white">border-box</code>, the element stays the exact same width; the content simply gets compressed inside.
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-white font-mono text-xs flex items-center gap-1.5 text-amber-400">
              <HelpCircle className="w-4 h-4" /> What happens if margin increases?
            </h4>
            <p className="leading-relaxed">
              Margin pushes neighboring elements further away. Margin never changes the physical size of the element itself, but increases the element's total layout footprint in the document flow.
            </p>
            <div className="text-[11px] text-slate-400 font-mono pt-1">
              Note: Vertical margins between adjacent sibling blocks collapse into the single largest margin!
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-white font-mono text-xs flex items-center gap-1.5 text-emerald-400">
              <HelpCircle className="w-4 h-4" /> The Universal CSS Reset
            </h4>
            <p className="leading-relaxed">
              Always place this reset snippet at the very top of your <code className="text-white">style.css</code> file:
            </p>
            <pre className="p-2.5 bg-slate-900 rounded font-mono text-[11px] text-emerald-300">
{`*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`}
            </pre>
          </div>
        </div>
      </div>

      <ModuleNavFooter currentModuleId="css-box-model" onNavigate={onNavigate} />
    </div>
  );
};
