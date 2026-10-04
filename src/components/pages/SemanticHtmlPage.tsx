import React from 'react';
import {
  FileCode,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Accessibility,
} from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';

interface SemanticHtmlPageProps {
  onNavigate: (moduleId: string) => void;
}

export const SemanticHtmlPage: React.FC<SemanticHtmlPageProps> = ({ onNavigate }) => {
  const semanticElements = [
    {
      tag: '<header>',
      role: 'Introductory container for the page or section. Typically contains site logo, heading title, or author metadata.',
      bestPractice: 'Can be used for the entire page top bar, as well as inside individual <article> components.',
    },
    {
      tag: '<nav>',
      role: 'Major navigational landmark. Wraps hyperlinks intended for site navigation.',
      bestPractice: 'Do not wrap every single link in <nav>; reserve it for main navigation menus.',
    },
    {
      tag: '<main>',
      role: 'Represents the dominant, unique content of the <body>. There should only be ONE visible <main> per document.',
      bestPractice: 'Never place <main> inside an <article>, <aside>, <header>, or <footer>.',
    },
    {
      tag: '<section>',
      role: 'A standalone thematic grouping of content, typically with its own distinct heading (<h2> or <h3>).',
      bestPractice: 'Use when content represents a distinct thematic section like "About", "Skills", or "Projects".',
    },
    {
      tag: '<article>',
      role: 'Self-contained, independently redistributable composition (e.g. a blog post, product card, or news story).',
      bestPractice: 'Should make complete sense even if syndicated outside the context of the website.',
    },
    {
      tag: '<footer>',
      role: 'Closing landmark containing author credits, copyright, contact links, and back-to-top controls.',
      bestPractice: 'Can be used at the page bottom, or at the bottom of an individual <article> or <section>.',
    },
  ];

  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="semantic-html"
        keyTakeaway="Semantic HTML assigns architectural meaning to elements. Using <header>, <nav>, <main>, <section>, and <footer> creates screen-reader accessibility landmarks, boosts SEO, and permanently eliminates 'div soup'."
      />

      {/* Before vs After: Div Soup vs Semantic Markup */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase">
            ARCHITECTURAL COMPARISON
          </span>
          <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
            Non-Semantic "Div Soup" vs. Clean Semantic Structure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* Bad Practice */}
          <div className="bg-slate-950 p-5 rounded-xl border border-rose-500/30 space-y-3">
            <div className="flex items-center justify-between text-rose-400 font-mono font-bold text-sm">
              <span className="flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> Non-Semantic ("Div Soup")
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">
                BAD PRACTICE
              </span>
            </div>
            <pre className="font-mono text-[11px] text-rose-300 leading-relaxed overflow-x-auto">
{`<!-- Zero architectural meaning to browser/a11y -->
<div class="header">
  <div class="logo">My Profile</div>
  <div class="menu">
    <a href="#about">About</a>
  </div>
</div>
<div class="main-content">
  <div class="about-box">
    <div class="title">About Me</div>
    <div class="desc">Junior Developer</div>
  </div>
</div>
<div class="bottom-bar">
  <div class="copy">© 2026</div>
</div>`}
            </pre>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Screen readers cannot identify where the navigation or main content begins. Browsers treat everything as generic transparent blocks.
            </p>
          </div>

          {/* Good Practice */}
          <div className="bg-slate-950 p-5 rounded-xl border border-emerald-500/30 space-y-3">
            <div className="flex items-center justify-between text-emerald-400 font-mono font-bold text-sm">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Clean Semantic HTML5
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                RECOMMENDED
              </span>
            </div>
            <pre className="font-mono text-[11px] text-emerald-300 leading-relaxed overflow-x-auto">
{`<!-- Explicit landmark roles built-in -->
<header>
  <h1>My Profile</h1>
  <nav>
    <a href="#about">About</a>
  </nav>
</header>
<main>
  <section id="about">
    <h2>About Me</h2>
    <p>Junior Developer</p>
  </section>
</main>
<footer>
  <p>© 2026</p>
</footer>`}
            </pre>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Accessibility software instantly navigates landmarks. Search engines understand hierarchy. Zero extraneous CSS class bloat.
            </p>
          </div>
        </div>
      </div>

      {/* The 6 Semantic Landmark Elements Dictionary */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">
            The 6 Core Semantic Landmarks for Week 01
          </h2>
          <span className="text-xs font-mono text-slate-500">Semantic Dictionary</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {semanticElements.map((el) => (
            <div key={el.tag} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2 text-xs">
              <span className="font-mono font-bold text-blue-400 text-sm">{el.tag}</span>
              <p className="text-slate-300 leading-relaxed font-sans">{el.role}</p>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-emerald-400 font-medium font-sans">
                Best Practice: {el.bestPractice}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModuleNavFooter currentModuleId="semantic-html" onNavigate={onNavigate} />
    </div>
  );
};
