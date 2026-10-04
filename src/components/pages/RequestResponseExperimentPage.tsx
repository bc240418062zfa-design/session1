import React from 'react';
import { Send, ArrowDown, FileCode, CheckCircle2, AlertTriangle, Layers, Info } from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { RequestResponseInspector } from '../RequestResponseInspector';

interface RequestResponseExperimentPageProps {
  onNavigate: (moduleId: string) => void;
}

export const RequestResponseExperimentPage: React.FC<RequestResponseExperimentPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="http-experiment"
        keyTakeaway="HTTP is fundamentally a text-based conversational protocol: the client sends an envelope of ASCII headers specifying an action on a path, and the server returns a status code and payload bytes."
      />

      {/* Prominent Educational Notice: Simulation Context */}
      <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-start gap-3.5 text-xs text-amber-200">
        <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-mono uppercase text-amber-300 text-[11px] block">
            EDUCATIONAL SIMULATION NOTICE
          </strong>
          <p className="leading-relaxed">
            This experiment executes entirely inside your browser to simulate the exact textual protocol exchanges that occur across physical network sockets. It is designed to teach request header structures, status codes, and MIME content negotiation.
          </p>
        </div>
      </div>

      {/* Interactive Inspector Tool */}
      <RequestResponseInspector />

      {/* Deep Conceptual Summary: The 3 Parts of an HTTP Message */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h3 className="font-bold text-sm text-blue-400 font-mono uppercase flex items-center gap-2">
            <Send className="w-4 h-4" /> Anatomy of an HTTP Request
          </h3>
          <div className="space-y-3 text-slate-300">
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">1. Request Line</span>
              <p className="text-[11px] text-slate-400 font-mono">METHOD + PATH + PROTOCOL VERSION (e.g. GET /index.html HTTP/1.1)</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">2. Request Headers</span>
              <p className="text-[11px] text-slate-400 font-mono">Key-value metadata like Host, User-Agent, Accept, Accept-Encoding.</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">3. Optional Body Payload</span>
              <p className="text-[11px] text-slate-400">Empty for GET requests; contains JSON/form data for POST/PUT requests.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h3 className="font-bold text-sm text-emerald-400 font-mono uppercase flex items-center gap-2">
            <ArrowDown className="w-4 h-4" /> Anatomy of an HTTP Response
          </h3>
          <div className="space-y-3 text-slate-300">
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">1. Status Line</span>
              <p className="text-[11px] text-slate-400 font-mono">PROTOCOL VERSION + NUMERICAL STATUS + PHRASE (e.g. HTTP/1.1 200 OK)</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">2. Response Headers</span>
              <p className="text-[11px] text-slate-400 font-mono">Content-Type (text/html), Content-Length, Cache-Control, Server.</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">3. Response Body (Payload)</span>
              <p className="text-[11px] text-slate-400">The actual raw bytes of the file requested (HTML markup, CSS stylesheet, PNG image).</p>
            </div>
          </div>
        </div>
      </div>

      <ModuleNavFooter currentModuleId="http-experiment" onNavigate={onNavigate} />
    </div>
  );
};
