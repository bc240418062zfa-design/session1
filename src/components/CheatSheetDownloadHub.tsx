import React, { useState } from 'react';
import {
  Download,
  Eye,
  Copy,
  Check,
  Printer,
  Sparkles,
  Layers,
  Terminal,
  FileCode,
  Globe,
  Sliders,
  Keyboard,
  FileDown,
} from 'lucide-react';
import { OFFICIAL_CHEAT_SHEETS } from '../data/cheatSheetData';
import { CheatSheetConfig, generateCheatSheetPDF } from '../utils/pdfCheatSheetExport';
import { CheatSheetPreviewModal } from './CheatSheetPreviewModal';

export const CheatSheetDownloadHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [previewSheet, setPreviewSheet] = useState<CheatSheetConfig | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isDownloadingAll, setIsDownloadingAll] = useState(false);

  const categories = [
    'All',
    'Git & GitHub',
    'Terminal',
    'HTTP & Architecture',
    'HTML5 & Semantics',
    'CSS & Cascade',
    'VS Code',
  ];

  const filteredSheets =
    selectedCategory === 'All'
      ? OFFICIAL_CHEAT_SHEETS
      : OFFICIAL_CHEAT_SHEETS.filter((s) => s.category === selectedCategory);

  const handleDownload = (sheet: CheatSheetConfig) => {
    setDownloadingId(sheet.id);
    try {
      generateCheatSheetPDF(sheet);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    } finally {
      setTimeout(() => setDownloadingId(null), 1200);
    }
  };

  const handleDownloadAll = () => {
    setIsDownloadingAll(true);
    try {
      OFFICIAL_CHEAT_SHEETS.forEach((sheet, idx) => {
        setTimeout(() => {
          generateCheatSheetPDF(sheet);
          if (idx === OFFICIAL_CHEAT_SHEETS.length - 1) {
            setIsDownloadingAll(false);
          }
        }, idx * 600);
      });
    } catch (err) {
      console.error('Failed to download all sheets:', err);
      setIsDownloadingAll(false);
    }
  };

  const handleCopyMarkdown = (sheet: CheatSheetConfig) => {
    let md = `# ${sheet.title}\n\n> ${sheet.subtitle}\n\n${sheet.summary}\n\n`;

    sheet.sections.forEach((sec) => {
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
    setCopiedId(sheet.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Git & GitHub':
        return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'HTTP & Architecture':
        return <Globe className="w-4 h-4 text-cyan-400" />;
      case 'HTML5 & Semantics':
        return <FileCode className="w-4 h-4 text-amber-400" />;
      case 'CSS & Cascade':
        return <Sliders className="w-4 h-4 text-purple-400" />;
      case 'VS Code':
        return <Keyboard className="w-4 h-4 text-sky-400" />;
      default:
        return <Layers className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-blue-400">
              <span>EXECUTIVE CHEAT-SHEETS &amp; REFERENCE HUB</span>
              <span>·</span>
              <span>PRINT-READY A4 FORMAT</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Curated Developer Cheat-Sheets
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              High-density, beautifully styled quick references for Git hygiene, VS Code speed keys,
              HTTP lifecycle codes, HTML5 semantics, and CSS cascade math. Downloadable as
              publication-grade PDFs or copyable markdown.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={handleDownloadAll}
              disabled={isDownloadingAll}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-95"
              title="Download all 6 cheat sheets at once"
            >
              <FileDown className="w-4 h-4 text-white" />
              <span>
                {isDownloadingAll ? 'Downloading 6 PDFs...' : 'Download All Cheat-Sheets'}
              </span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 flex-wrap pt-6 mt-6 border-t border-slate-800/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'bg-slate-800/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSheets.map((sheet) => {
          const [r, g, b] = sheet.accentColor;
          const accentColor = `rgb(${r}, ${g}, ${b})`;
          const isDownloading = downloadingId === sheet.id;
          const isCopied = copiedId === sheet.id;

          // Preview items: first 3 items from section 1
          const previewItems = sheet.sections[0]?.items?.slice(0, 3) || [];

          return (
            <div
              key={sheet.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="space-y-4">
                {/* Card Header with Accent Bar */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-sm"
                      style={{ backgroundColor: `${accentColor}25`, color: accentColor }}
                    >
                      {getCategoryIcon(sheet.category)}
                    </div>
                    <div>
                      <div className="text-[11px] font-mono font-semibold uppercase text-slate-400 tracking-wider">
                        {sheet.category}
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {sheet.badgeText}
                      </span>
                    </div>
                  </div>

                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                    {sheet.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {sheet.subtitle}
                  </p>
                </div>

                {/* Live Micro-Preview Box */}
                <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80 space-y-1.5">
                  <div className="text-[10px] font-mono font-semibold uppercase text-slate-500 flex items-center justify-between">
                    <span>Quick Preview</span>
                    <span>{sheet.sections.length} Sections</span>
                  </div>

                  {previewItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-xs flex items-center justify-between gap-2 overflow-hidden"
                    >
                      <code className="text-[11px] font-mono text-slate-300 truncate max-w-[170px] bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                        {item.key}
                      </code>
                      <span className="text-[11px] text-slate-400 truncate text-right">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setPreviewSheet(sheet)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  title="View full cheat sheet online"
                >
                  <Eye className="w-3.5 h-3.5 text-blue-400" />
                  <span>View</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopyMarkdown(sheet)}
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition-colors"
                    title="Copy as Markdown"
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </button>

                  <button
                    onClick={() => handleDownload(sheet)}
                    disabled={isDownloading}
                    className="px-3 py-1.5 rounded-lg text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-sm hover:brightness-110 active:scale-95"
                    style={{ backgroundColor: accentColor }}
                    title="Download executive print-ready PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isDownloading ? 'Exporting...' : 'PDF'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Modal */}
      {previewSheet && (
        <CheatSheetPreviewModal
          cheatSheet={previewSheet}
          onClose={() => setPreviewSheet(null)}
        />
      )}
    </div>
  );
};
