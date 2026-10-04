import React, { useState } from 'react';
import {
  X,
  Download,
  Printer,
  Copy,
  Check,
  Search,
  Sparkles,
  BookOpen,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import { CheatSheetConfig, generateCheatSheetPDF } from '../utils/pdfCheatSheetExport';

interface CheatSheetPreviewModalProps {
  cheatSheet: CheatSheetConfig | null;
  onClose: () => void;
}

export const CheatSheetPreviewModal: React.FC<CheatSheetPreviewModalProps> = ({
  cheatSheet,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  if (!cheatSheet) return null;

  const [r, g, b] = cheatSheet.accentColor;
  const accentHex = `rgb(${r}, ${g}, ${b})`;

  const handleDownloadPDF = () => {
    setIsExporting(true);
    try {
      generateCheatSheetPDF(cheatSheet);
    } catch (err) {
      console.error('Failed to export PDF:', err);
    } finally {
      setTimeout(() => setIsExporting(false), 800);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    let md = `# ${cheatSheet.title}\n\n> ${cheatSheet.subtitle}\n\n${cheatSheet.summary}\n\n`;

    cheatSheet.sections.forEach((sec) => {
      md += `## ${sec.title}\n`;
      if (sec.description) md += `${sec.description}\n\n`;
      if (sec.codeBlock) md += `\`\`\`bash\n${sec.codeBlock}\n\`\`\`\n\n`;
      if (sec.items && sec.items.length > 0) {
        md += `| Key / Command | Action / Detail | Badge |\n|---|---|---|\n`;
        sec.items.forEach((item) => {
          md += `| \`${item.key}\` | ${item.detail} | ${item.badge || '-'} |\n`;
        });
        md += `\n`;
      }
      if (sec.proTip) md += `**PRO TIP:** ${sec.proTip}\n\n`;
      if (sec.warning) md += `**WARNING:** ${sec.warning}\n\n`;
    });

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Filter sections by search query
  const filteredSections = cheatSheet.sections.map((sec) => {
    if (!searchQuery.trim()) return sec;
    const q = searchQuery.toLowerCase();
    const matchesTitle = sec.title.toLowerCase().includes(q);
    const filteredItems = sec.items?.filter(
      (item) =>
        item.key.toLowerCase().includes(q) ||
        item.detail.toLowerCase().includes(q) ||
        item.badge?.toLowerCase().includes(q)
    );
    const matchesCode = sec.codeBlock?.toLowerCase().includes(q);

    if (matchesTitle || matchesCode || (filteredItems && filteredItems.length > 0)) {
      return {
        ...sec,
        items: matchesTitle ? sec.items : filteredItems,
      };
    }
    return null;
  }).filter(Boolean) as typeof cheatSheet.sections;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-slate-950 px-5 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md"
              style={{ backgroundColor: accentHex }}
            >
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-blue-400">
                  {cheatSheet.category}
                </span>
                <span className="text-slate-600">·</span>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded text-white"
                  style={{ backgroundColor: accentHex }}
                >
                  {cheatSheet.badgeText}
                </span>
              </div>
              <h2 className="text-base md:text-lg font-bold text-white tracking-tight">
                {cheatSheet.title}
              </h2>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPDF}
              disabled={isExporting}
              className="px-3.5 py-1.5 rounded-lg text-white font-semibold text-xs flex items-center gap-1.5 shadow-md transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: accentHex }}
              title="Download beautiful high-resolution PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isExporting ? 'Generating PDF...' : 'Download PDF'}</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
              title="Copy markdown content for notes"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy MD</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs transition-colors hidden sm:flex items-center gap-1"
              title="Print cheat sheet"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search and Filter Ribbon */}
        <div className="bg-slate-900/60 px-5 py-2.5 border-b border-slate-800/80 flex items-center justify-between gap-3 shrink-0">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search commands, keys, or concepts in sheet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="text-[11px] text-slate-400 hidden sm:block">
            Print-ready A4 layout · 100% verified syntax
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 md:p-6 overflow-y-auto space-y-6 flex-1 text-slate-200 text-sm">
          {/* Summary Banner */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
            <div
              className="w-1.5 h-full self-stretch rounded-full shrink-0"
              style={{ backgroundColor: accentHex }}
            />
            <div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {cheatSheet.summary}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Official MIHORA.TECH Lecture Compendium · Sessions Study Portal
              </p>
            </div>
          </div>

          {/* Sections List */}
          {filteredSections.map((sec, sIdx) => (
            <div
              key={sIdx}
              className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 md:p-5 space-y-3"
            >
              {/* Section Header */}
              <div className="flex items-center gap-2 border-b border-slate-800/70 pb-2">
                <div
                  className="w-2 h-4 rounded-sm"
                  style={{ backgroundColor: accentHex }}
                />
                <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                  {sec.title}
                </h3>
              </div>

              {sec.description && (
                <p className="text-xs text-slate-400">{sec.description}</p>
              )}

              {/* Code Block */}
              {sec.codeBlock && (
                <div className="bg-slate-950 rounded-lg border border-slate-800 overflow-hidden text-xs font-mono">
                  <div className="px-3 py-1.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] text-slate-500">Terminal Workflow</span>
                  </div>
                  <pre className="p-3 text-emerald-400 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {sec.codeBlock}
                  </pre>
                </div>
              )}

              {/* Items Grid */}
              {sec.items && sec.items.length > 0 && (
                <div className="border border-slate-800 rounded-lg overflow-hidden divide-y divide-slate-800/70">
                  {sec.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-3 bg-slate-900/40 hover:bg-slate-900/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <code
                          className="px-2 py-1 rounded bg-slate-950 border border-slate-800 font-mono text-xs font-bold text-white shrink-0"
                          style={{ borderColor: `${accentHex}40` }}
                        >
                          {item.key}
                        </code>
                        <span className="text-xs text-slate-300 font-sans">
                          {item.detail}
                        </span>
                      </div>
                      {item.badge && (
                        <span className="self-start sm:self-auto text-[10px] px-2 py-0.5 rounded font-medium bg-slate-800 text-slate-400 border border-slate-700/60 shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Pro Tip */}
              {sec.proTip && (
                <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-800/50 flex items-start gap-2.5 text-xs text-blue-200">
                  <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-blue-300 uppercase tracking-wider text-[10px] block">
                      Pro Tip
                    </strong>
                    {sec.proTip}
                  </div>
                </div>
              )}

              {/* Warning */}
              {sec.warning && (
                <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/50 flex items-start gap-2.5 text-xs text-rose-200">
                  <div className="w-1.5 h-full self-stretch rounded-full bg-rose-500 shrink-0" />
                  <div>
                    <strong className="text-rose-300 uppercase tracking-wider text-[10px] block">
                      Warning
                    </strong>
                    {sec.warning}
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredSections.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-xs">
              No matching commands or concepts found for "{searchQuery}".
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-5 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <div>
            Format: <span className="text-slate-200 font-medium">A4 PDF & Markdown</span> · MIHORA.TECH Official
          </div>
          <button
            onClick={handleDownloadPDF}
            className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Generate &amp; Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
