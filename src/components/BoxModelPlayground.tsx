import React, { useState } from 'react';
import { Sliders, CheckCircle2, Info } from 'lucide-react';

export const BoxModelPlayground: React.FC = () => {
  const [contentWidth, setContentWidth] = useState<number>(240);
  const [contentHeight, setContentHeight] = useState<number>(100);
  const [padding, setPadding] = useState<number>(20);
  const [border, setBorder] = useState<number>(4);
  const [margin, setMargin] = useState<number>(16);
  const [boxSizing, setBoxSizing] = useState<'content-box' | 'border-box'>('border-box');

  // Calculations
  const renderedWidth =
    boxSizing === 'content-box'
      ? contentWidth + padding * 2 + border * 2
      : contentWidth;

  const actualContentWidth =
    boxSizing === 'border-box'
      ? Math.max(20, contentWidth - padding * 2 - border * 2)
      : contentWidth;

  const outerFootprintWidth = renderedWidth + margin * 2;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
            <span>CSS BOX MODEL VISUALIZER</span>
            <span>·</span>
            <span>CORE LIVE INTERACTION</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Content, Padding, Border & Margin Math
          </h3>
          <p className="text-xs text-slate-400">
            Adjust the sliders to see how each layer affects the physical rendered dimensions of an element.
          </p>
        </div>

        {/* Box Sizing Toggle */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setBoxSizing('border-box')}
            className={`px-3 py-1 rounded transition-colors ${
              boxSizing === 'border-box'
                ? 'bg-blue-600 text-white font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            box-sizing: border-box (Modern Standard)
          </button>
          <button
            onClick={() => setBoxSizing('content-box')}
            className={`px-3 py-1 rounded transition-colors ${
              boxSizing === 'content-box'
                ? 'bg-blue-600 text-white font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            box-sizing: content-box (Default CSS)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Sliders Control Deck */}
        <div className="lg:col-span-5 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-blue-400" />
              Dimension Parameters
            </span>
            <span className="text-[11px] font-mono text-slate-500">Live Pixel Sliders</span>
          </div>

          {/* Width */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-blue-300 font-medium">Specified Width (width)</span>
              <span className="font-mono text-slate-200">{contentWidth}px</span>
            </div>
            <input
              type="range"
              min="160"
              max="320"
              step="4"
              value={contentWidth}
              onChange={(e) => setContentWidth(Number(e.target.value))}
              className="w-full accent-blue-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Padding */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-emerald-300 font-medium">Padding (inside spacing)</span>
              <span className="font-mono text-slate-200">{padding}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              step="2"
              value={padding}
              onChange={(e) => setPadding(Number(e.target.value))}
              className="w-full accent-emerald-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Border */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-amber-300 font-medium">Border (outline width)</span>
              <span className="font-mono text-slate-200">{border}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="16"
              step="1"
              value={border}
              onChange={(e) => setBorder(Number(e.target.value))}
              className="w-full accent-amber-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Margin */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-rose-300 font-medium">Margin (outside footprint)</span>
              <span className="font-mono text-slate-200">{margin}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="32"
              step="2"
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full accent-rose-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Live Dimension Calculations Breakdown */}
          <div className="pt-3 border-t border-slate-800/80 space-y-1.5 font-mono text-xs">
            <div className="text-[11px] text-slate-400 font-sans font-semibold">
              Computed Dimensions:
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Rendered Element Width:</span>
              <span className="text-blue-400 font-bold">{renderedWidth}px</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>Actual Inner Content Area:</span>
              <span className="text-slate-200">{actualContentWidth}px</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>Total Screen Footprint (+margins):</span>
              <span className="text-rose-400 font-bold">{outerFootprintWidth}px</span>
            </div>
          </div>
        </div>

        {/* Visual Concentric Box Diagram */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 bg-slate-950 rounded-xl border border-slate-800 min-h-[340px]">
          {/* Margin Box */}
          <div
            style={{
              padding: `${margin}px`,
            }}
            className="bg-rose-500/10 border-2 border-dashed border-rose-500/40 rounded-xl transition-all relative flex flex-col items-center justify-center"
          >
            <div className="absolute top-1 left-2 text-[10px] font-mono text-rose-400 font-semibold uppercase tracking-wider">
              margin: {margin}px
            </div>

            {/* Border Box */}
            <div
              style={{
                borderWidth: `${border}px`,
              }}
              className="border-amber-400/80 bg-amber-500/10 rounded-lg transition-all relative flex flex-col items-center justify-center"
            >
              {border > 0 && (
                <div className="absolute top-1 left-2 text-[10px] font-mono text-amber-300 font-semibold uppercase tracking-wider">
                  border: {border}px
                </div>
              )}

              {/* Padding Box */}
              <div
                style={{
                  padding: `${padding}px`,
                }}
                className="bg-emerald-500/15 rounded transition-all relative flex flex-col items-center justify-center"
              >
                {padding > 4 && (
                  <div className="absolute top-1 left-2 text-[10px] font-mono text-emerald-300 font-semibold uppercase tracking-wider">
                    padding: {padding}px
                  </div>
                )}

                {/* Content Box */}
                <div
                  style={{
                    width: `${Math.min(280, actualContentWidth)}px`,
                    height: `${contentHeight}px`,
                  }}
                  className="bg-blue-600/40 border border-blue-400/50 rounded flex flex-col items-center justify-center text-center p-2 text-slate-100 shadow-inner select-none"
                >
                  <div className="text-xs font-mono font-bold text-blue-200">
                    Content Box
                  </div>
                  <div className="text-[11px] font-mono text-slate-300">
                    {actualContentWidth}px × {contentHeight}px
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explanation Callout */}
          <div className="mt-4 max-w-md text-center text-xs text-slate-400">
            {boxSizing === 'border-box' ? (
              <span className="text-emerald-400 font-medium">
                ✓ With <code>box-sizing: border-box</code>, your element remains exactly {contentWidth}px wide. Padding and border eat inward!
              </span>
            ) : (
              <span className="text-amber-400 font-medium">
                ⚠ With <code>box-sizing: content-box</code>, adding {padding}px padding and {border}px border inflated the element to {renderedWidth}px!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
