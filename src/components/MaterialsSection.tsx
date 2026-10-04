import React, { useState } from 'react';
import {
  Download,
  Printer,
  FileText,
  Check,
  Eye,
  Code,
  BookOpen,
  Sparkles,
  FileCode,
} from 'lucide-react';
import { DOWNLOADABLE_RESOURCES, COURSE_INFO } from '../data/curriculumData';
import { DownloadableResource } from '../types';
import { exportNotesToPDF } from '../utils/pdfExport';

export const MaterialsSection: React.FC = () => {
  const [downloadedId, setDownloadedId] = useState<string | null>(null);
  const [previewResource, setPreviewResource] = useState<DownloadableResource | null>(null);
  const [isExportingAllPdf, setIsExportingAllPdf] = useState<boolean>(false);

  const handleDownloadOriginal = (resource: DownloadableResource) => {
    try {
      const mimeType = resource.filename.endsWith('.html')
        ? 'text/html'
        : 'text/markdown';
      const blob = new Blob([resource.content], {
        type: `${mimeType};charset=utf-8`,
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = resource.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloadedId(resource.id);
      setTimeout(() => setDownloadedId(null), 2500);
    } catch (e) {
      console.error('Download error:', e);
    }
  };

  const handleDownloadPDF = (resource: DownloadableResource) => {
    try {
      setDownloadedId(`pdf-${resource.id}`);

      // Split content into readable sections
      const sections = [
        {
          heading: resource.title,
          content: resource.description,
        },
        {
          heading: 'Full Reference Content & Code',
          content: 'Study notes and practical implementation guidelines for Week 01 Foundations.',
          codeSnippet: resource.content,
        },
      ];

      exportNotesToPDF({
        title: resource.title,
        category: resource.format,
        subtitle: `MIHORA.TECH Official Student Resource (${resource.filename})`,
        sections,
      });

      setTimeout(() => setDownloadedId(null), 2500);
    } catch (e) {
      console.error('PDF export error:', e);
    }
  };

  const handleExportFullCompendiumPDF = () => {
    setIsExportingAllPdf(true);
    try {
      const sections: Array<{
        heading: string;
        content: string;
        codeSnippet?: string;
      }> = DOWNLOADABLE_RESOURCES.map((res) => ({
        heading: `${res.title} (${res.format})`,
        content: `${res.description}\nFile: ${res.filename}`,
        codeSnippet: res.content.slice(0, 1800), // excerpt for multi-page book
      }));

      sections.unshift({
        heading: 'Week 01 Foundations Overview & Goal',
        content: `Goal: ${COURSE_INFO.goal}\n\nMentor Rule: ${COURSE_INFO.mentorNote}\n\nDeliverable: ${COURSE_INFO.deliverables}\n\nCheckpoint: ${COURSE_INFO.checkpointSummary}`,
      });

      exportNotesToPDF({
        title: 'Week 01 Foundations: Complete Student Compendium & Cheat Sheets',
        category: 'Official Course Material',
        subtitle: 'MIHORA.TECH Full-Stack Web Development with AI',
        sections,
      });
    } catch (e) {
      console.error('Complete PDF error:', e);
    } finally {
      setTimeout(() => setIsExportingAllPdf(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold tracking-wider uppercase font-mono">
            <span>OFFICIAL STUDENT MATERIALS REPOSITORY</span>
            <span>·</span>
            <span>GUARANTEED NOTES & CODE</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
            Downloadable Lecture Notes, Code &amp; Cheat-Sheets (PDF Available)
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Every lecture note and cheat sheet is downloadable directly as a formatted PDF or original code file.
          </p>
        </div>

        {/* Action Buttons: Export All PDF + Print */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleExportFullCompendiumPDF}
            disabled={isExportingAllPdf}
            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md hover:scale-[1.02]"
            title="Generate and download all Week 01 notes and cheat sheets as a single PDF handbook"
          >
            <Download className="w-3.5 h-3.5 text-white" />
            <span>
              {isExportingAllPdf ? 'Generating PDF Book...' : 'Download Full PDF Book'}
            </span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
          >
            <Printer className="w-3.5 h-3.5 text-blue-400" />
            <span>Print View</span>
          </button>
        </div>
      </div>

      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DOWNLOADABLE_RESOURCES.map((res) => {
          const isDownloadedRaw = downloadedId === res.id;
          const isDownloadedPdf = downloadedId === `pdf-${res.id}`;

          return (
            <div
              key={res.id}
              className="bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 rounded-xl p-4 flex flex-col justify-between transition-colors shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-blue-400 font-semibold uppercase bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    {res.format}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {res.sizeLabel}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {res.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {res.description}
                </p>
                <div className="text-[10px] font-mono text-slate-400">
                  File: <span className="text-slate-300">{res.filename}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900 mt-4 space-y-2">
                {/* PDF Download Button (Primary) */}
                <button
                  onClick={() => handleDownloadPDF(res)}
                  className={`w-full py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                    isDownloadedPdf
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-[1.01]'
                  }`}
                  title="Download as formatted PDF document"
                >
                  {isDownloadedPdf ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> PDF Saved!
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 text-white" /> Download as PDF
                    </>
                  )}
                </button>

                {/* Secondary Actions: Preview & Raw File */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPreviewResource(res)}
                    className="flex-1 py-1 px-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded text-xs font-medium flex items-center justify-center gap-1 transition-colors border border-slate-800"
                  >
                    <Eye className="w-3 h-3 text-blue-400" /> Preview
                  </button>
                  <button
                    onClick={() => handleDownloadOriginal(res)}
                    className="flex-1 py-1 px-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded text-xs font-medium flex items-center justify-center gap-1 transition-colors border border-slate-800"
                    title={`Download raw ${res.filename}`}
                  >
                    <FileCode className="w-3 h-3 text-amber-400" /> Raw File
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* In-Browser Document Preview Modal */}
      {previewResource && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <FileText className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white truncate">
                    {previewResource.title}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">
                    {previewResource.filename}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleDownloadPDF(previewResource)}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> Save as PDF
                </button>
                <button
                  onClick={() => setPreviewResource(null)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="p-4 overflow-y-auto flex-1">
              <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed">
                {previewResource.content}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
