import React, { useState } from 'react';
import { Send, ArrowDown, FileCode, CheckCircle2, AlertTriangle, XCircle, Layers } from 'lucide-react';

interface ResponsePreset {
  status: number;
  statusText: string;
  contentType: string;
  body: string;
  explanation: string;
}

const PRESETS: Record<number, ResponsePreset> = {
  200: {
    status: 200,
    statusText: 'OK',
    contentType: 'text/html; charset=UTF-8',
    body: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>MIHORA.TECH Profile</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Muhammad Shan</h1>
  <p>Full-Stack Developer</p>
</body>
</html>`,
    explanation: 'The server successfully found index.html and streams the HTML bytes back to the browser.',
  },
  301: {
    status: 301,
    statusText: 'Moved Permanently',
    contentType: 'text/html',
    body: `<html>
<head><title>301 Moved Permanently</title></head>
<body>
  <p>The document has moved <a href="https://mihora.tech/foundations/">here</a>.</p>
</body>
</html>`,
    explanation: 'The server tells the browser this resource has permanently migrated to a new URL via the "Location" header.',
  },
  404: {
    status: 404,
    statusText: 'Not Found',
    contentType: 'text/html',
    body: `<html>
<head><title>404 Not Found</title></head>
<body>
  <h1>404 - Page Not Found</h1>
  <p>The requested file /missing-page.html does not exist on this server.</p>
</body>
</html>`,
    explanation: 'The server is online and responding, but the specific URL path does not map to any file or route handler.',
  },
  500: {
    status: 500,
    statusText: 'Internal Server Error',
    contentType: 'application/json',
    body: `{
  "error": "InternalServerError",
  "message": "Database connection pool exhausted",
  "timestamp": "2026-10-04T21:37:00Z"
}`,
    explanation: 'The web server encountered an unhandled exception or crash while processing the request.',
  },
};

export const RequestResponseInspector: React.FC = () => {
  const [method, setMethod] = useState<'GET' | 'POST'>('GET');
  const [path, setPath] = useState<string>('/index.html');
  const [selectedStatusCode, setSelectedStatusCode] = useState<number>(200);
  const [activeTab, setActiveTab] = useState<'split' | 'headers' | 'body'>('split');
  const [showWaterfall, setShowWaterfall] = useState<boolean>(false);

  const currentResponse = PRESETS[selectedStatusCode];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-xl space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
            <span>HTTP PROTOCOL INSPECTOR</span>
            <span>·</span>
            <span>SIMULATED INTERACTIVE DEMO</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
            Client Request & Server Response Exchange
          </h3>
          <p className="text-xs text-slate-400">
            Inspect raw HTTP headers, methods, and status codes. Toggle status codes to observe protocol behavior.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('split')}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === 'split' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('headers')}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === 'headers' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Headers Only
          </button>
          <button
            onClick={() => setActiveTab('body')}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === 'body' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Response Body
          </button>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs">
        <div className="sm:col-span-3 flex items-center gap-2">
          <span className="text-slate-400 shrink-0">Method:</span>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value as 'GET' | 'POST')}
            className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded px-2.5 py-1.5 font-mono focus:border-blue-500 focus:outline-none"
          >
            <option value="GET">GET (Fetch file)</option>
            <option value="POST">POST (Send data)</option>
          </select>
        </div>

        <div className="sm:col-span-4 flex items-center gap-2">
          <span className="text-slate-400 shrink-0">Path:</span>
          <select
            value={path}
            onChange={(e) => {
              const val = e.target.value;
              setPath(val);
              if (val === '/missing-page.html') setSelectedStatusCode(404);
              else if (val === '/api/crash') setSelectedStatusCode(500);
              else setSelectedStatusCode(200);
            }}
            className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded px-2.5 py-1.5 font-mono focus:border-blue-500 focus:outline-none"
          >
            <option value="/index.html">/index.html (Default Root)</option>
            <option value="/style.css">/style.css (Linked Asset)</option>
            <option value="/missing-page.html">/missing-page.html (Non-existent)</option>
            <option value="/api/crash">/api/crash (Faulty Server Route)</option>
          </select>
        </div>

        <div className="sm:col-span-5 flex items-center justify-between gap-2">
          <span className="text-slate-400 shrink-0">Simulate Status:</span>
          <div className="flex items-center gap-1 font-mono">
            {[200, 301, 404, 500].map((code) => {
              const isSelected = selectedStatusCode === code;
              return (
                <button
                  key={code}
                  onClick={() => setSelectedStatusCode(code)}
                  className={`px-2 py-1 rounded text-xs transition-colors ${
                    isSelected
                      ? code === 200
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 font-bold'
                        : code === 301
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 font-bold'
                        : code === 404
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 font-bold'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/50 font-bold'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {code}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Request & Response Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Request Panel */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <Send className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                1. Browser HTTP Request
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">Outbound Client Stream</span>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] font-mono text-slate-400">Request Line & Headers:</div>
            <pre className="bg-slate-900 p-3 rounded-lg border border-slate-800/80 text-xs font-mono text-blue-300 overflow-x-auto leading-relaxed">
{`${method} ${path} HTTP/1.1
Host: mihora.tech
User-Agent: Mozilla/5.0 (Macintosh; Apple Silicon)
Accept: text/html,application/xhtml+xml
Accept-Encoding: gzip, deflate, br
Connection: keep-alive`}
            </pre>
          </div>

          <div className="text-xs text-slate-400 pt-1">
            <strong>Client Intent:</strong> The browser asks the server listening at <code className="text-blue-300">mihora.tech:443</code> to return the resource located at <code className="text-blue-300">{path}</code>.
          </div>
        </div>

        {/* Response Panel */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <ArrowDown className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                2. Server HTTP Response
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <span
                className={`w-2 h-2 rounded-full ${
                  selectedStatusCode === 200
                    ? 'bg-emerald-400'
                    : selectedStatusCode === 301
                    ? 'bg-purple-400'
                    : selectedStatusCode === 404
                    ? 'bg-amber-400'
                    : 'bg-rose-400'
                }`}
              />
              <span
                className={
                  selectedStatusCode === 200
                    ? 'text-emerald-300 font-bold'
                    : selectedStatusCode === 301
                    ? 'text-purple-300 font-bold'
                    : selectedStatusCode === 404
                    ? 'text-amber-300 font-bold'
                    : 'text-rose-300 font-bold'
                }
              >
                {currentResponse.status} {currentResponse.statusText}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] font-mono text-slate-400">Response Line & Headers:</div>
            <pre className="bg-slate-900 p-3 rounded-lg border border-slate-800/80 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`HTTP/1.1 ${currentResponse.status} ${currentResponse.statusText}
Content-Type: ${currentResponse.contentType}
Content-Length: ${currentResponse.body.length}
Cache-Control: public, max-age=3600
Server: Vercel / MIHORA-Edge`}
            </pre>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] font-mono text-slate-400">Response Payload / Body:</div>
            <pre className="bg-slate-900 p-3 rounded-lg border border-slate-800/80 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[140px]">
{currentResponse.body}
            </pre>
          </div>

          <div className="text-xs text-slate-400 pt-1">
            <strong>Server Outcome:</strong> {currentResponse.explanation}
          </div>
        </div>
      </div>

      {/* Multi-Resource Waterfall Explanation (Part 12) */}
      <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Multi-Resource Cascade: How Real Web Pages Load</span>
          </div>
          <button
            onClick={() => setShowWaterfall(!showWaterfall)}
            className="text-xs px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition-colors"
          >
            {showWaterfall ? 'Hide Waterfall Trace' : 'View Network Waterfall Trace'}
          </button>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Beginners often assume typing a URL downloads everything in a single file. In reality, the browser first receives <code className="text-slate-200">index.html</code>, inspects the tags, and discovers links to stylesheets, images, and scripts, dispatching independent HTTP GET requests for each one.
        </p>

        {showWaterfall && (
          <div className="space-y-1.5 pt-2 border-t border-slate-800/80 font-mono text-xs">
            <div className="grid grid-cols-12 gap-2 text-[11px] text-slate-500 pb-1 border-b border-slate-800">
              <span className="col-span-5">Resource</span>
              <span className="col-span-2">Type</span>
              <span className="col-span-2">Status</span>
              <span className="col-span-3">Trigger</span>
            </div>
            <div className="grid grid-cols-12 gap-2 items-center text-slate-300 py-1 bg-slate-900/60 px-2 rounded">
              <span className="col-span-5 text-blue-300 truncate font-semibold">1. GET /index.html</span>
              <span className="col-span-2 text-slate-400">document</span>
              <span className="col-span-2 text-emerald-400">200 OK</span>
              <span className="col-span-3 text-slate-500">Initial URL entry</span>
            </div>
            <div className="grid grid-cols-12 gap-2 items-center text-slate-300 py-1 bg-slate-900/40 px-2 rounded">
              <span className="col-span-5 text-purple-300 truncate">2. GET /style.css</span>
              <span className="col-span-2 text-slate-400">stylesheet</span>
              <span className="col-span-2 text-emerald-400">200 OK</span>
              <span className="col-span-3 text-slate-500">&lt;link rel="stylesheet"&gt;</span>
            </div>
            <div className="grid grid-cols-12 gap-2 items-center text-slate-300 py-1 bg-slate-900/40 px-2 rounded">
              <span className="col-span-5 text-amber-300 truncate">3. GET /avatar.jpg</span>
              <span className="col-span-2 text-slate-400">image</span>
              <span className="col-span-2 text-emerald-400">200 OK</span>
              <span className="col-span-3 text-slate-500">&lt;img src="..."&gt;</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
