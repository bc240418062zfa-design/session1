import React, { useState } from 'react';
import {
  Globe,
  Server,
  Network,
  FileCode,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Database,
  Layers,
  Sparkles,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { RequestResponseInspector } from '../RequestResponseInspector';
import { HTTP_STATUS_DICTIONARY } from '../../data/curriculumData';

interface HttpDnsPageProps {
  onNavigate: (moduleId: string) => void;
}

export const HttpDnsPage: React.FC<HttpDnsPageProps> = ({ onNavigate }) => {
  const [selectedStatusSeries, setSelectedStatusSeries] = useState<'all' | '2xx' | '3xx' | '4xx' | '5xx'>('all');

  const filteredStatuses =
    selectedStatusSeries === 'all'
      ? HTTP_STATUS_DICTIONARY
      : HTTP_STATUS_DICTIONARY.filter((s) => s.series === selectedStatusSeries);

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="http-dns"
        keyTakeaway="The client-server relationship is governed by HTTP: a stateless text protocol where the browser requests a resource, DNS maps the hostname to an IP, and the server returns a status code with headers and payload bytes."
      />

      {/* The 4 Core Actors in Harmony */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase font-mono">
            <Globe className="w-4 h-4" /> 1. The Browser (Client)
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            The user agent software running on your laptop or phone. Initiates requests, manages cookies/cache, parses markup, and composites pixels.
          </p>
          <div className="text-[11px] font-mono text-slate-500 bg-slate-950 p-2 rounded-lg border border-slate-800">
            Role: Request originator &amp; rendering engine
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
            <Network className="w-4 h-4" /> 2. DNS (The Phonebook)
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Distributed database mapping human domain names (<code className="text-blue-300">mihora.tech</code>) into machine-routable IP addresses (<code className="text-emerald-300">76.76.21.21</code>).
          </p>
          <div className="text-[11px] font-mono text-slate-500 bg-slate-950 p-2 rounded-lg border border-slate-800">
            Protocol: UDP Port 53 / DoH Port 443
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase font-mono">
            <Server className="w-4 h-4" /> 3. The Web Server
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Software daemon (Node.js, Express, Nginx, Apache) listening on a network socket. Inspects incoming request headers, reads files or executes code, and writes response bytes.
          </p>
          <div className="text-[11px] font-mono text-slate-500 bg-slate-950 p-2 rounded-lg border border-slate-800">
            Role: Request processor &amp; response streamer
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase font-mono">
            <FileCode className="w-4 h-4" /> 4. HTTP / HTTPS Protocol
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            HyperText Transfer Protocol. The universal textual/binary contract governing methods (GET, POST), headers, status codes, and body serialization.
          </p>
          <div className="text-[11px] font-mono text-slate-500 bg-slate-950 p-2 rounded-lg border border-slate-800">
            Transport: TCP / TLS Cryptographic Tunnel
          </div>
        </div>
      </div>

      {/* Interactive Request/Response Inspector */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <FileCode className="w-5 h-5 text-emerald-400" />
            <span>Interactive HTTP Request/Response Inspector</span>
          </h2>
          <span className="text-xs font-mono text-slate-500">Simulate status codes &amp; payload inspection</span>
        </div>
        <RequestResponseInspector />
      </div>

      {/* DNS 4-Tier Caching Hierarchy */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase">
            DNS RESOLUTION ARCHITECTURE
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            How The Internet Resolves "mihora.tech" in 15 Milliseconds
          </h3>
          <p className="text-xs text-slate-400">
            Before querying global root servers, the lookup checks 4 cascading local caches in sequence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between font-mono">
              <span className="font-bold text-blue-400">Tier 1: Browser Cache</span>
              <span className="text-[10px] text-slate-500">~1 ms</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Chrome or Firefox stores DNS records in local process memory for recently visited sites (default TTL ~60 seconds).
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between font-mono">
              <span className="font-bold text-emerald-400">Tier 2: OS Cache</span>
              <span className="text-[10px] text-slate-500">~2 ms</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Operating system resolver (Windows <code className="text-blue-300">ipconfig /displaydns</code> or macOS <code className="text-blue-300">mDNSResponder</code>) checks system-wide hosts file and cached records.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between font-mono">
              <span className="font-bold text-purple-400">Tier 3: Router Gateway</span>
              <span className="text-[10px] text-slate-500">~5 ms</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Your home/office Wi-Fi router maintains an internal DNS proxy cache populated by queries from all local network devices.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between font-mono">
              <span className="font-bold text-amber-400">Tier 4: Recursive Resolver</span>
              <span className="text-[10px] text-slate-500">~15 ms</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              If all local caches miss, ISP or public resolvers (Cloudflare 1.1.1.1, Google 8.8.8.8) query the Root (.) ➔ TLD (.tech) ➔ Authoritative Nameserver.
            </p>
          </div>
        </div>
      </div>

      {/* HTTP Status Code Dictionary */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
              HTTP PROTOCOL SPECIFICATION
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
              HTTP Status Codes Every Web Developer Must Know
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
            {(['all', '2xx', '3xx', '4xx', '5xx'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSelectedStatusSeries(s)}
                className={`px-2.5 py-1 rounded transition-colors uppercase font-bold ${
                  selectedStatusSeries === s
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredStatuses.map((st) => (
            <div key={st.code} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between font-mono">
                <span className="font-bold text-emerald-400 text-sm">{st.code} {st.phrase}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  {st.series}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">{st.meaning}</p>
              <div className="text-[10px] text-slate-500 font-mono pt-1">
                Context: {st.practicalExample}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModuleNavFooter currentModuleId="http-dns" onNavigate={onNavigate} />
    </div>
  );
};
