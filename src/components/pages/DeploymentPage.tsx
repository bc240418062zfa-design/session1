import React from 'react';
import {
  Globe,
  Cloud,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Shield,
  Layers,
  Copy,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';

interface DeploymentPageProps {
  onNavigate: (moduleId: string) => void;
}

export const DeploymentPage: React.FC<DeploymentPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="deployment"
        keyTakeaway="Deployment transfers your local code onto a globally distributed edge CDN with automated HTTPS. Always use relative asset paths ('style.css', not '/style.css') to prevent 404 broken stylesheets on GitHub Pages."
      />

      {/* The 2 Primary Deployment Paths for Week 01 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Path A: GitHub Pages */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-blue-400 font-bold font-mono text-xs uppercase">
            <Globe className="w-5 h-5" /> Path A: GitHub Pages (Recommended)
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Free Static Hosting Directly from Your Repo
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            GitHub Pages serves static HTML, CSS, and client-side JavaScript directly from your repository's <code className="text-blue-300">main</code> branch.
          </p>

          <div className="space-y-2 text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">Step 1: Open Repo Settings</span>
              <p className="text-slate-400">Navigate to your profile repository on github.com and click the "Settings" tab.</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">Step 2: Navigate to Pages</span>
              <p className="text-slate-400">In the left sidebar, click <strong>Pages</strong> under the "Code and automation" section.</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">Step 3: Configure Build &amp; Deployment</span>
              <p className="text-slate-400">Under "Build and deployment", set Source to <strong>Deploy from a branch</strong>. Select <strong>main</strong> branch and <strong>/ (root)</strong> folder. Click <strong>Save</strong>.</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-emerald-400 font-mono text-[11px]">Step 4: Your Live URL</span>
              <p className="text-slate-300 font-mono text-[11px]">
                https://&lt;your-username&gt;.github.io/profile-site/
              </p>
            </div>
          </div>
        </div>

        {/* Path B: Vercel */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-purple-400 font-bold font-mono text-xs uppercase">
            <Cloud className="w-5 h-5" /> Path B: Vercel Edge Network
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            High-Performance Edge CDN Deployment
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Vercel connects to your GitHub repository and automatically deploys every time you push to main or open a pull request.
          </p>

          <div className="space-y-2 text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">Step 1: Sign in with GitHub</span>
              <p className="text-slate-400">Go to vercel.com and authenticate using your GitHub account.</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">Step 2: Import Repository</span>
              <p className="text-slate-400">Click "Add New..." ➔ "Project" and select your <code className="text-white">profile-site</code> repository.</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-white font-mono text-[11px]">Step 3: Click Deploy</span>
              <p className="text-slate-400">Framework Preset will detect "Other" (static). Click <strong>Deploy</strong>.</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-purple-400 font-mono text-[11px]">Step 4: Your Live URL</span>
              <p className="text-slate-300 font-mono text-[11px]">
                https://profile-site-&lt;yourname&gt;.vercel.app
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The #1 Deployment Bug: Absolute vs Relative Paths */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
        <h3 className="font-bold text-sm text-amber-400 font-mono uppercase flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" /> The #1 Deployment Bug: Subdirectory Path Resolution
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          GitHub Pages hosts project sites under a subfolder URL: <code className="text-blue-300">username.github.io/profile-site/</code>. If you write absolute paths with a leading slash, the browser requests the file from the root domain, causing a 404 error!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-4 bg-slate-950 rounded-xl border border-rose-500/30 space-y-2">
            <span className="text-rose-400 font-bold">WRONG (Breaks on GitHub Pages):</span>
            <pre className="text-rose-300 text-xs">
              &lt;link rel="stylesheet" href="/style.css" /&gt;
            </pre>
            <p className="text-slate-400 text-[11px] font-sans">
              Browser requests: <code className="text-white">username.github.io/style.css</code> (404 Not Found!).
            </p>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-2">
            <span className="text-emerald-400 font-bold">CORRECT (Works Everywhere):</span>
            <pre className="text-emerald-300 text-xs">
              &lt;link rel="stylesheet" href="style.css" /&gt;
            </pre>
            <p className="text-slate-400 text-[11px] font-sans">
              Browser requests: <code className="text-white">username.github.io/profile-site/style.css</code> (200 OK!).
            </p>
          </div>
        </div>
      </div>

      <ModuleNavFooter currentModuleId="deployment" onNavigate={onNavigate} />
    </div>
  );
};
