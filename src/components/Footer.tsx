import React from 'react';
import { ExternalLink, Mail, Printer, ShieldCheck } from 'lucide-react';
import { COURSE_INFO } from '../data/curriculumData';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-slate-950 py-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-bold text-white font-mono">
              MIHORA<span className="text-blue-500">.TECH</span>
            </div>
            <p className="text-slate-400">
              {COURSE_INFO.program} · {COURSE_INFO.phase}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href="mailto:hr@mihora.tech"
              className="text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>hr@mihora.tech</span>
            </a>
            <a
              href="mailto:m.mattiulhasnain@gmail.com"
              className="text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
            >
              <span>Lead Mentor: m.mattiulhasnain@gmail.com</span>
            </a>
            <button
              onClick={() => window.print()}
              className="text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Notes</span>
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-900 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 font-mono">
          <div>
            &copy; 2026 MIHORA.TECH. Full-Stack Web Development with AI ({COURSE_INFO.schedule}).
          </div>
          <div className="flex items-center gap-2">
            <span>Subdomain: sessions.study.mihora.tech</span>
            <span>·</span>
            <span>All materials verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
