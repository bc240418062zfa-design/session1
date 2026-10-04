import React from 'react';
import {
  Globe,
  Server,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  FileCode,
  Network,
  Clock,
  User,
  Radio,
  ExternalLink,
} from 'lucide-react';
import { WebFlowDiagram } from '../WebFlowDiagram';
import { RequestResponseInspector } from '../RequestResponseInspector';
import { HTTP_STATUS_DICTIONARY } from '../../data/curriculumData';

interface Module1PageProps {
  onNextModule: () => void;
  onNavigateHome: () => void;
}

export const Module1Page: React.FC<Module1PageProps> = ({
  onNextModule,
  onNavigateHome,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-7xl mx-auto pb-12">
      {/* Module Title Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
              MODULE 01 OF 05
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>09:30 PM – 09:43 PM PKT</span>
              <span className="hidden sm:inline">(13 Min Agenda / 8 Min Live Core)</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
            <User className="w-3.5 h-3.5 text-blue-400" />
            <span>Speaker: <strong>Muhammad Shan</strong></span>
          </div>
        </div>

        <div className="space-y-2 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            How Browsers, Servers, HTTP and DNS Work Together
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Understanding what happens under the hood when a page loads and how the distributed client-server architecture operates across global networks.
          </p>
        </div>

        {/* Goal Banner */}
        <div className="p-3.5 sm:p-4 bg-slate-950/80 rounded-xl border border-slate-800 flex items-start gap-2.5 sm:gap-3 text-xs text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-mono uppercase">Core Learning Goal:</strong>{' '}
            Explain the exact sequence of events from pressing Enter on a URL (<code className="text-blue-300">https://mihora.tech</code>) to DNS lookup, IP resolution, TCP/TLS handshake, HTTP GET request, server 200 OK response, and browser Critical Rendering Path.
          </div>
        </div>
      </div>

      {/* Deep Conceptual Architectural Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase tracking-wider font-mono">
            <Globe className="w-4 h-4" /> 1. The Browser (Client)
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            The user interface agent. Initiates network requests, parses HTML/CSS into object trees (DOM/CSSOM), and paints composite pixel frames onto hardware display screens.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider font-mono">
            <Network className="w-4 h-4" /> 2. DNS Resolution
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            The global phonebook. Translates human-memorable domain names (<code className="text-blue-300">mihora.tech</code>) into machine-routable IPv4/IPv6 addresses (<code className="text-emerald-300">76.76.21.21</code>).
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs uppercase tracking-wider font-mono">
            <Server className="w-4 h-4" /> 3. The Web Server
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            A software process (Nginx, Node.js, Next.js) listening on network ports 80/443. Evaluates incoming request paths, executes route handlers, and returns byte streams.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider font-mono">
            <FileCode className="w-4 h-4" /> 4. HTTP Protocol
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Hypertext Transfer Protocol. Standardized text/binary request-response contract governing methods (GET, POST), headers, status codes, and payload representations.
          </p>
        </div>
      </div>

      {/* Interactive Visualizer Widget 1: Web Flow Diagram */}
      <WebFlowDiagram />

      {/* Interactive Visualizer Widget 2: Request Response Inspector */}
      <RequestResponseInspector />

      {/* Exhaustive Technical Deep Dive: The 7 Stages of Page Load */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-400" />
            Exhaustive Breakdown: What Happens Between URL & Pixels
          </h2>
          <span className="text-xs font-mono text-slate-500">Step-by-Step Architecture</span>
        </div>

        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <h3 className="font-bold text-blue-300 font-mono text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">1</span>
              Step 1: URL Parsing & HSTS Check
            </h3>
            <p>
              The user enters <code className="text-white">https://mihora.tech/foundations</code> into the browser address bar. The browser splits this into:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400 font-mono text-[11px]">
              <li><strong>Protocol (Scheme):</strong> <code className="text-blue-300">https</code> (Transport Layer Security over port 443)</li>
              <li><strong>Host (Domain):</strong> <code className="text-emerald-300">mihora.tech</code></li>
              <li><strong>Path:</strong> <code className="text-amber-300">/foundations</code></li>
            </ul>
            <p>
              The browser consults its pre-loaded HSTS (HTTP Strict Transport Security) list to ensure unencrypted plain HTTP connections are never attempted.
            </p>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <h3 className="font-bold text-emerald-300 font-mono text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">2</span>
              Step 2: DNS Recursive Lookup (Domain to IP Resolution)
            </h3>
            <p>
              Computers do not route packets by domain names; they route via numerical IP addresses. The browser searches for the IP in 4 cascading caches:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-slate-400 text-xs">
              <li><strong>Browser DNS Cache:</strong> Previously visited domain records kept in Chrome/Safari memory.</li>
              <li><strong>Operating System DNS Cache:</strong> macOS/Windows local resolver cache (check via <code className="text-blue-300">ipconfig /displaydns</code>).</li>
              <li><strong>Local Gateway Router Cache:</strong> Your home WiFi router’s internal DNS cache.</li>
              <li><strong>ISP Recursive Resolver:</strong> If missing, the ISP resolver queries global DNS hierarchy: Root Servers (.) → TLD Nameservers (.tech) → Authoritative Nameservers (Cloudflare/Route53), returning an "A Record" containing <code className="text-emerald-300 font-mono">76.76.21.21</code>.</li>
            </ol>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <h3 className="font-bold text-purple-300 font-mono text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs">3</span>
              Step 3: TCP 3-Way Handshake & TLS 1.3 Cryptographic Session
            </h3>
            <p>
              With the IP address known, the browser opens a bidirectional TCP socket to <code className="text-purple-300">76.76.21.21:443</code>:
            </p>
            <div className="p-3 bg-slate-900 rounded font-mono text-[11px] text-purple-200">
              Client --[ SYN (seq=100) ]--&gt; Server<br/>
              Server --[ SYN-ACK (seq=300, ack=101) ]--&gt; Client<br/>
              Client --[ ACK (seq=101, ack=301) ]--&gt; Server (Connection Established!)
            </div>
            <p>
              Immediately over this TCP socket, TLS 1.3 performs cryptographic key exchange using ephemeral Diffie-Hellman keys, verifies server authenticity with X.509 certificates, and encrypts all further communication against eavesdropping.
            </p>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <h3 className="font-bold text-amber-300 font-mono text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">4</span>
              Step 4: HTTP Request & Web Server Response
            </h3>
            <p>
              The client sends an HTTP GET request stream:
            </p>
            <pre className="bg-slate-900 p-3 rounded font-mono text-[11px] text-blue-300">
GET /foundations HTTP/1.1
Host: mihora.tech
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X)
Accept: text/html,application/xhtml+xml
Accept-Encoding: gzip, deflate, br
            </pre>
            <p>
              The server evaluates the request, loads <code className="text-white">index.html</code>, sets headers (<code className="text-emerald-300">Content-Type: text/html; charset=UTF-8</code>), and streams back <code className="text-emerald-300">HTTP/1.1 200 OK</code> followed by HTML bytes.
            </p>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <h3 className="font-bold text-cyan-300 font-mono text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">5</span>
              Step 5: The Critical Rendering Path (CRP)
            </h3>
            <p>
              The browser engine processes the incoming bytes into pixels through 5 sequential steps:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-slate-400 text-xs">
              <li><strong>DOM Tree:</strong> HTML bytes are tokenized and parsed into parent-child Document Object Model nodes.</li>
              <li><strong>Subresource Requests:</strong> The browser encounters <code className="text-blue-300">&lt;link rel="stylesheet" href="style.css"&gt;</code> and dispatches a secondary parallel HTTP GET request.</li>
              <li><strong>CSSOM Tree:</strong> CSS rules are parsed into the CSS Object Model tree.</li>
              <li><strong>Render Tree:</strong> DOM and CSSOM merge into the Render Tree (excluding hidden elements like <code className="text-slate-500">&lt;head&gt;</code> or <code className="text-slate-500">display: none</code>).</li>
              <li><strong>Layout (Reflow) & Paint:</strong> The browser calculates exact geometry coordinates for the viewport and the GPU compositor paints pixels.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* HTTP Status Code Quick Reference */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
          <Server className="w-4 h-4 text-emerald-400" />
          HTTP Status Codes Every Junior Engineer Must Memorize
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {HTTP_STATUS_DICTIONARY.slice(0, 6).map((st) => (
            <div key={st.code} className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1">
              <div className="flex items-center justify-between font-mono">
                <span className="font-bold text-emerald-400">{st.code} {st.phrase}</span>
                <span className="text-[10px] text-slate-500">{st.series}</span>
              </div>
              <p className="text-[11px] text-slate-300">{st.meaning}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Page Footer Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
        <button
          onClick={onNavigateHome}
          className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition-colors text-center"
        >
          ← Return to Orientation Dashboard
        </button>

        <button
          onClick={onNextModule}
          className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02]"
        >
          <span>Proceed to Module 02: Dev Environment &amp; Terminal</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
