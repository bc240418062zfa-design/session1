import React, { useState } from 'react';
import { Globe, ArrowRight, ShieldCheck, Server, Laptop, Cpu, CheckCircle2, Info } from 'lucide-react';

interface FlowStep {
  id: number;
  label: string;
  category: string;
  icon: 'browser' | 'dns' | 'security' | 'server' | 'render';
  summary: string;
  technicalDetail: string;
  analogy: string;
  protocolPayload: string;
  whatHappensNext: string;
}

const FLOW_STEPS: FlowStep[] = [
  {
    id: 1,
    label: 'User Enters URL',
    category: 'Client Action',
    icon: 'browser',
    summary: 'The student inputs "https://mihora.tech" into the browser address bar and hits Enter.',
    technicalDetail:
      'The browser parses the string into protocol ("https"), hostname ("mihora.tech"), default port 443, and resource path ("/"). It validates characters and checks the browser HSTS preload list to enforce HTTPS encryption.',
    analogy: 'Deciding to call a business and looking up their company name in your notes.',
    protocolPayload: `URL: https://mihora.tech/
Scheme: https (TLS encrypted)
Host: mihora.tech
Port: 443 (default secure web port)`,
    whatHappensNext: 'The browser checks if it already knows the numerical IP address for mihora.tech in local memory cache.',
  },
  {
    id: 2,
    label: 'DNS Resolution',
    category: 'Network Translation',
    icon: 'dns',
    summary: 'The Domain Name System translates the human-friendly name "mihora.tech" into machine IP "76.76.21.21".',
    technicalDetail:
      'The client queries the OS DNS cache -> Local router -> ISP Recursive Resolver. If not cached, the resolver traverses the global DNS tree: Root Server (.) -> TLD Nameserver (.tech) -> Authoritative Nameserver (e.g. Cloudflare/AWS), returning an "A" record containing 76.76.21.21.',
    analogy: 'Using a telephone phonebook or contacts app: you search for "John", and it gives you his numerical phone number.',
    protocolPayload: `;; QUESTION SECTION:
mihora.tech.   IN   A

;; ANSWER SECTION:
mihora.tech.   300   IN   A   76.76.21.21
TTL: 300 seconds`,
    whatHappensNext: 'With the IP address identified, the browser initiates a direct TCP connection with the server.',
  },
  {
    id: 3,
    label: 'TCP & TLS Handshake',
    category: 'Connection & Security',
    icon: 'security',
    summary: 'A secure, reliable bidirectional cryptographic connection is negotiated between client and server.',
    technicalDetail:
      'First, TCP 3-way handshake establishes a reliable socket (SYN -> SYN-ACK -> ACK). Over this socket, TLS 1.3 cryptographic handshake negotiates ciphers (e.g. AES-GCM), verifies the server digital certificate, and establishes symmetric session keys.',
    analogy: 'Calling the phone number, saying "Hello?" to ensure the line is open, and then speaking in an agreed private secret code.',
    protocolPayload: `TCP: SYN -> SYN-ACK -> ACK
TLS 1.3: ClientHello -> ServerHello (KeyExchange)
Cipher Suite: TLS_AES_128_GCM_SHA256
Certificate: CN=mihora.tech (Verified by Let's Encrypt)`,
    whatHappensNext: 'The secure tunnel is active; the browser sends its first HTTP request.',
  },
  {
    id: 4,
    label: 'HTTP GET Request',
    category: 'Application Layer',
    icon: 'browser',
    summary: 'The browser requests the initial HTML document using standard HTTP protocol format.',
    technicalDetail:
      'The client writes an HTTP request stream over the TLS socket. The request includes the method (GET), target path (/), HTTP version (HTTP/1.1 or HTTP/2), host header, user-agent identifier, and acceptable compression formats.',
    analogy: 'Handing an order slip to a warehouse clerk specifying: "Please give me document #1 in English."',
    protocolPayload: `GET / HTTP/1.1
Host: mihora.tech
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X)
Accept: text/html,application/xhtml+xml
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9`,
    whatHappensNext: 'The server receives the byte stream, evaluates the requested route, and fetches the file.',
  },
  {
    id: 5,
    label: 'Server Processing & Response',
    category: 'Server Action',
    icon: 'server',
    summary: 'The web server locates the file, formats headers, and returns an HTTP 200 OK response with the HTML body.',
    technicalDetail:
      'The web server (Node.js/Next.js/Nginx) reads index.html from disk or cache. It attaches response headers indicating content type ("text/html"), character encoding ("utf-8"), content length, and cache rules, followed by the raw HTML bytes.',
    analogy: 'The warehouse clerk packages your requested folder with a delivery receipt marked "STATUS: SUCCESSFUL".',
    protocolPayload: `HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 2184
Cache-Control: public, max-age=3600
Server: Vercel / MIHORA-Edge

<!DOCTYPE html>
<html lang="en">...</html>`,
    whatHappensNext: 'The browser receives the byte stream and begins rendering the HTML in real time.',
  },
  {
    id: 6,
    label: 'Critical Rendering Path',
    category: 'Browser Engine',
    icon: 'render',
    summary: 'The browser parses HTML, constructs the DOM, fetches linked CSS/JS, and paints pixels onto the screen.',
    technicalDetail:
      '1. Tokenization & DOM Tree: HTML text is converted into DOM nodes. 2. Subresource Discovery: <link rel="stylesheet"> triggers secondary HTTP requests for CSS. 3. CSSOM Tree: CSS rules are parsed into styles. 4. Render Tree: DOM + CSSOM are combined. 5. Layout (Reflow): Exact pixel coordinates are calculated. 6. Paint: Pixels are rasterized onto the screen GPU canvas.',
    analogy: 'An architect (DOM) draws the building blueprint, the interior designer (CSSOM) styles the walls, and the construction team paints the building.',
    protocolPayload: `DOM Nodes: 18 elements
CSSOM Rules: 42 selectors parsed
Render Tree: Computed geometry
Layout Pass: 1440x900 viewport
Paint: 60 FPS compositor frame output`,
    whatHappensNext: 'The student sees the complete interactive web page! Event listeners are bound for user clicks.',
  },
];

export const WebFlowDiagram: React.FC = () => {
  const [selectedStepId, setSelectedStepId] = useState<number>(1);
  const [activeConceptTab, setActiveConceptTab] = useState<'url' | 'compare'>('url');

  const selectedStep = FLOW_STEPS.find((s) => s.id === selectedStepId) || FLOW_STEPS[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
            <span>INTERACTIVE ARCHITECTURE VISUALIZER</span>
            <span>·</span>
            <span>CORE LIVE CONCEPT</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            The Complete Request / Response Journey
          </h3>
          <p className="text-xs text-slate-400">
            From entering a URL to rendering pixels on screen. Click any step to inspect the technical reality.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveConceptTab('url')}
            className={`px-3 py-1 text-xs rounded transition-colors ${
              activeConceptTab === 'url'
                ? 'bg-blue-600 text-white font-medium shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            URL Anatomy
          </button>
          <button
            onClick={() => setActiveConceptTab('compare')}
            className={`px-3 py-1 text-xs rounded transition-colors ${
              activeConceptTab === 'compare'
                ? 'bg-blue-600 text-white font-medium shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Key Definitions
          </button>
        </div>
      </div>

      {/* URL Anatomy Banner if toggled */}
      {activeConceptTab === 'url' ? (
        <div className="bg-slate-950 border border-slate-800/80 rounded-lg p-3.5 space-y-2">
          <div className="text-xs font-semibold text-slate-300 flex items-center justify-between">
            <span>Interactive URL Decomposition</span>
            <span className="text-[11px] font-mono text-slate-500">RFC 3986 Standard</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 font-mono text-xs overflow-x-auto py-1">
            <span className="px-2 py-1 bg-amber-500/15 text-amber-300 border border-amber-500/30 rounded" title="Protocol / Scheme">
              https://
            </span>
            <span className="px-2 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 rounded" title="Subdomain">
              session1.
            </span>
            <span className="px-2 py-1 bg-blue-500/15 text-blue-300 border border-blue-500/30 rounded" title="Second-Level Domain">
              mihora
            </span>
            <span className="px-2 py-1 bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 rounded" title="Top-Level Domain (TLD)">
              .tech
            </span>
            <span className="px-2 py-1 bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 rounded" title="Port (implicit 443 for HTTPS)">
              :443
            </span>
            <span className="px-2 py-1 bg-slate-800 text-slate-200 border border-slate-700 rounded" title="Path / Resource">
              /foundations
            </span>
            <span className="px-2 py-1 bg-rose-500/15 text-rose-300 border border-rose-500/30 rounded" title="Query String Parameter">
              ?week=1
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-400 pt-1">
            <div><span className="text-amber-400 font-mono">https://</span> = Scheme (Encrypted)</div>
            <div><span className="text-purple-400 font-mono">session1.</span> = Subdomain pointer</div>
            <div><span className="text-blue-400 font-mono">mihora.tech</span> = Registered Domain</div>
            <div><span className="text-slate-300 font-mono">/foundations</span> = Resource Path</div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <div className="text-xs font-semibold text-blue-400 mb-1">Domain vs IP Address</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Domain</strong> (<code className="text-blue-300">mihora.tech</code>) is a human-memorable label. <strong>IP Address</strong> (<code className="text-emerald-300">76.76.21.21</code>) is the exact numerical network address where the computer is routed on the global web.
            </p>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <div className="text-xs font-semibold text-emerald-400 mb-1">HTTP vs HTTPS</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>HTTP</strong> sends text in plaintext. <strong>HTTPS</strong> wraps HTTP inside TLS encryption, protecting passwords, session cookies, and student data from interception.
            </p>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <div className="text-xs font-semibold text-purple-400 mb-1">Browser vs Web Server</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              The <strong>Browser</strong> is the client initiating requests and rendering HTML/CSS. The <strong>Server</strong> is a computer listening on a network port, serving files and running backend logic.
            </p>
          </div>
        </div>
      )}

      {/* Visual Pipeline Bar */}
      <div className="space-y-2">
        <div className="text-xs text-slate-400 font-medium flex items-center justify-between">
          <span>Click a stage to inspect details:</span>
          <span className="text-blue-400 text-[11px]">Step {selectedStep.id} of {FLOW_STEPS.length} selected</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {FLOW_STEPS.map((step) => {
            const isSelected = step.id === selectedStepId;
            return (
              <button
                key={step.id}
                onClick={() => setSelectedStepId(step.id)}
                className={`p-3 rounded-xl border text-left transition-all relative ${
                  isSelected
                    ? 'bg-blue-600/15 border-blue-500 shadow-md ring-1 ring-blue-500/50'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-5 h-5 rounded-full text-[10px] font-mono font-bold flex items-center justify-center ${
                      isSelected ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {step.id}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono uppercase truncate max-w-[80px]">
                    {step.category}
                  </span>
                </div>
                <div
                  className={`text-xs font-semibold line-clamp-2 ${
                    isSelected ? 'text-blue-200' : 'text-slate-300'
                  }`}
                >
                  {step.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stage Detail Inspector Card */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 md:p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold font-mono">
              {selectedStep.id}
            </div>
            <div>
              <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                {selectedStep.category}
              </div>
              <h4 className="text-base font-bold text-white">
                {selectedStep.label}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedStepId((prev) => Math.max(1, prev - 1))}
              disabled={selectedStepId === 1}
              className="px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 transition-colors"
            >
              Previous Step
            </button>
            <button
              onClick={() => setSelectedStepId((prev) => Math.min(FLOW_STEPS.length, prev + 1))}
              disabled={selectedStepId === FLOW_STEPS.length}
              className="px-2.5 py-1 text-xs rounded bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 transition-colors flex items-center gap-1"
            >
              Next Step <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-7 space-y-3.5">
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Summary
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                {selectedStep.summary}
              </p>
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Technical Mechanism
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedStep.technicalDetail}
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800/80 rounded-lg p-3">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-1">
                <Info className="w-3.5 h-3.5" />
                <span>Real-World Analogy for Beginners</span>
              </div>
              <p className="text-xs text-slate-300 italic">
                "{selectedStep.analogy}"
              </p>
            </div>

            <div className="flex items-start gap-2 text-xs text-slate-400 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Next Phase:</strong> {selectedStep.whatHappensNext}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>PROTOCOL / DATA PAYLOAD</span>
              <span>INSPECTION</span>
            </div>
            <pre className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto whitespace-pre leading-relaxed max-h-[220px]">
              {selectedStep.protocolPayload}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
