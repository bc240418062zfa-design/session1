import React from 'react';
import { Sparkles, Code, Play, CheckCircle2, Sliders, Layers } from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { CodePlayground } from '../CodePlayground';

interface ExperimentLabPageProps {
  onNavigate: (moduleId: string) => void;
}

export const ExperimentLabPage: React.FC<ExperimentLabPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="experiment-lab"
        keyTakeaway="Test your HTML and CSS understanding live in your browser. Edit tags, adjust colors, modify padding, add new sections, and preview your changes instantly without leaving this portal."
      />

      {/* Guided Browser Challenges Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1">
          <span className="font-mono font-bold text-blue-400 text-[11px] block">CHALLENGE 1: IDENTITY</span>
          <p className="text-slate-300 font-sans">
            Replace "Muhammad Shan" with your own name and change the &lt;p class="role"&gt; title.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1">
          <span className="font-mono font-bold text-emerald-400 text-[11px] block">CHALLENGE 2: NEW SECTION</span>
          <p className="text-slate-300 font-sans">
            Add a third &lt;section class="card"&gt; for "Projects" or "Education" (practices homework!).
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1">
          <span className="font-mono font-bold text-purple-400 text-[11px] block">CHALLENGE 3: SPACING MATH</span>
          <p className="text-slate-300 font-sans">
            Increase padding inside <code className="text-purple-300">.card</code> from 1.5rem to 2.5rem and observe border-box.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1">
          <span className="font-mono font-bold text-amber-400 text-[11px] block">CHALLENGE 4: COLOR PALETTE</span>
          <p className="text-slate-300 font-sans">
            Change the skill badge background color from <code className="text-amber-300">#2563eb</code> to your favorite HEX code.
          </p>
        </div>
      </div>

      {/* Live Client-Side Code Sandbox */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-400" />
            <span>Live Interactive Code Sandbox &amp; Device Preview</span>
          </h2>
          <span className="text-xs font-mono text-slate-500">100% Client-Side Sandboxed Iframe</span>
        </div>
        <CodePlayground />
      </div>

      <ModuleNavFooter currentModuleId="experiment-lab" onNavigate={onNavigate} />
    </div>
  );
};
