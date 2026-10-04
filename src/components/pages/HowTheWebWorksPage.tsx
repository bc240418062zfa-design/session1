import React, { useState } from 'react';
import {
  Globe,
  ArrowRight,
  Server,
  Network,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  FileCode,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { WebFlowDiagram } from '../WebFlowDiagram';

interface HowTheWebWorksPageProps {
  onNavigate: (moduleId: string) => void;
}

export const HowTheWebWorksPage: React.FC<HowTheWebWorksPageProps> = ({ onNavigate }) => {
  const [selectedUrlPart, setSelectedUrlPart] = useState<'scheme' | 'host' | 'port' | 'path'>('host');

  const urlBreakdown = {
    scheme: {
      label: 'Protocol / Scheme',
      example: 'https://',
      purpose: 'Specifies the communication rule set and security layer (HyperText Transfer Protocol Secure over TLS).',
      mistake: 'Assuming https is a file format; it is a transport protocol enforcing cryptographic encryption.',
    },
    host: {
      label: 'Domain / Hostname',
      example: 'mihora.tech',
      purpose: 'The human-readable alias representing the target machine. Translated by DNS into an IP address.',
      mistake: 'Confusing the domain name with the web server software or database.',
    },
    port: {
      label: 'Network Port',
      example: ':443',
      purpose: 'The virtual doorway on the host operating system. Port 443 is default for HTTPS; Port 80 is for HTTP.',
      mistake: 'Omitting the port is common because browsers automatically inject 443 for HTTPS and 80 for HTTP.',
    },
    path: {
      label: 'Resource Path',
      example: '/foundations',
      purpose: 'The specific document or route endpoint requested from the web server filesystem or application router.',
      mistake: 'Thinking the path is always a physical folder on disk; modern servers route paths dynamically in code.',
    },
  };

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="how-the-web-works"
        keyTakeaway="The web is a distributed client-server architecture where your browser is an HTTP client requesting byte streams from an HTTP server at an IP address resolved by DNS. Rendering those bytes into pixels is the Critical Rendering Path."
      />

      {/* Interactive Visualizer: Complete Web Flow Pipeline */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-400" />
            <span>Interactive Lifecycle: From Keystroke to Rendered Pixels</span>
          </h2>
          <span className="text-xs font-mono text-slate-500">Click any step to inspect technical payload</span>
        </div>
        <WebFlowDiagram />
      </div>

      {/* URL Anatomy Interactive Dissector */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase">
            COMPONENT BREAKDOWN
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Anatomy of a Modern Web URL
          </h3>
          <p className="text-xs text-slate-400">
            Click each colored segment of the URL below to understand its role in network resolution.
          </p>
        </div>

        {/* Clickable URL pill bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm sm:text-base">
          <button
            onClick={() => setSelectedUrlPart('scheme')}
            className={`px-3 py-1.5 rounded-lg transition-all font-bold ${
              selectedUrlPart === 'scheme'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-purple-950/40 text-purple-300 hover:bg-purple-900/60'
            }`}
          >
            https://
          </button>
          <button
            onClick={() => setSelectedUrlPart('host')}
            className={`px-3 py-1.5 rounded-lg transition-all font-bold ${
              selectedUrlPart === 'host'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-blue-950/40 text-blue-300 hover:bg-blue-900/60'
            }`}
          >
            mihora.tech
          </button>
          <button
            onClick={() => setSelectedUrlPart('port')}
            className={`px-3 py-1.5 rounded-lg transition-all font-bold ${
              selectedUrlPart === 'port'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/60'
            }`}
          >
            :443
          </button>
          <button
            onClick={() => setSelectedUrlPart('path')}
            className={`px-3 py-1.5 rounded-lg transition-all font-bold ${
              selectedUrlPart === 'path'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-amber-950/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            /foundations
          </button>
        </div>

        {/* Selected Part Explanation Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-slate-500 uppercase">Selected Component</span>
            <div className="font-bold text-white text-sm font-mono">{urlBreakdown[selectedUrlPart].label}</div>
            <div className="text-blue-400 font-mono text-xs">{urlBreakdown[selectedUrlPart].example}</div>
          </div>
          <div className="space-y-1 md:col-span-2">
            <span className="text-[11px] font-mono text-slate-500 uppercase">Architectural Purpose</span>
            <p className="text-slate-300 leading-relaxed font-sans">{urlBreakdown[selectedUrlPart].purpose}</p>
            <div className="pt-1 flex items-start gap-1.5 text-amber-300 text-[11px]">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>Common Misunderstanding: {urlBreakdown[selectedUrlPart].mistake}</span>
            </div>
          </div>
        </div>
      </div>

      {/* The 9 Authoritative Questions Matrix (Section 31 Compliance) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
            COMPREHENSIVE PEDAGOGICAL DEEP DIVE
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            The 9 Foundational Questions of Web Architecture
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-blue-400 text-[11px] uppercase block">1. WHAT IS IT?</span>
            <p className="text-slate-300 leading-relaxed">
              The World Wide Web is an application-layer information network running atop the global Internet, where web browsers fetch hypermedia documents and assets using the HTTP protocol.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-blue-400 text-[11px] uppercase block">2. WHY DOES IT EXIST?</span>
            <p className="text-slate-300 leading-relaxed">
              To allow decentralized computers worldwide to publish, discover, and cross-reference documents through universal addressing (URLs) without requiring proprietary client software.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-blue-400 text-[11px] uppercase block">3. HOW DOES IT WORK?</span>
            <p className="text-slate-300 leading-relaxed">
              The client translates a domain name into an IP via DNS, opens an encrypted TCP/TLS socket, issues an HTTP GET request, receives byte streams from the server, and parses them into a visible DOM.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-emerald-400 text-[11px] uppercase block">4. WHERE DOES IT FIT?</span>
            <p className="text-slate-300 leading-relaxed">
              It sits at the top of the OSI / TCP-IP stack (Layer 7: Application Layer), utilizing Layer 4 (TCP) for reliable packet sequencing and Layer 3 (IP) for numerical routing across hardware switches.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-emerald-400 text-[11px] uppercase block">5. WHAT DOES IT CONNECT TO?</span>
            <p className="text-slate-300 leading-relaxed">
              It connects client user interfaces (React, Next.js, HTML/CSS) directly to backend server processes, edge CDNs, caching proxies, and relational or document databases.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-emerald-400 text-[11px] uppercase block">6. IN PRACTICE</span>
            <p className="text-slate-300 leading-relaxed">
              Typing <code className="text-white">mihora.tech</code> triggers an HTTP GET yielding an HTML file; that HTML contains <code className="text-blue-300">&lt;link&gt;</code> and <code className="text-blue-300">&lt;script&gt;</code> tags that immediately trigger parallel secondary requests.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-amber-400 text-[11px] uppercase block">7. COMMON MISTAKE</span>
            <p className="text-slate-300 leading-relaxed">
              Believing a web page is downloaded as a single bundled zip file. A page is actually a waterfall sequence of dozens of independent HTTP requests for HTML, CSS, images, and fonts.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-amber-400 text-[11px] uppercase block">8. WHAT TO REMEMBER</span>
            <p className="text-slate-300 leading-relaxed">
              Computers do not communicate via domain names; they communicate via numerical IP addresses. DNS is the phonebook; HTTP is the language; the Browser is the stage.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="font-mono font-bold text-purple-400 text-[11px] uppercase block">9. WHAT TO TRY</span>
            <p className="text-slate-300 leading-relaxed">
              Open your browser's DevTools (<kbd className="bg-slate-900 px-1 py-0.5 rounded border border-slate-700">F12</kbd>), click the <strong>Network</strong> tab, reload any webpage, and watch the waterfall of individual HTTP requests execute live.
            </p>
          </div>
        </div>
      </div>

      <ModuleNavFooter currentModuleId="how-the-web-works" onNavigate={onNavigate} />
    </div>
  );
};
