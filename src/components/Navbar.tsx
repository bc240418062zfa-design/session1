import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Zap,
  Moon,
  Monitor,
  Sun,
  Menu,
  X,
  BookOpen,
  ChevronDown,
  Layers,
  FileText,
} from 'lucide-react';
import { LivePktClock } from './LivePktClock';
import { MODULE_ROUTES } from '../data/navigationData';

export type ThemeMode = 'light' | 'classroom' | 'dark';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isInstructorMode: boolean;
  onToggleInstructorMode: () => void;
  isLowPerfMode: boolean;
  onToggleLowPerfMode: () => void;
  themeMode: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onOpenPresentationMode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  isInstructorMode,
  onToggleInstructorMode,
  isLowPerfMode,
  onToggleLowPerfMode,
  themeMode,
  onThemeChange,
  onOpenPresentationMode,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const primaryNavLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'agenda', label: 'Agenda & 50m' },
    { id: 'how-the-web-works', label: 'Web & DNS' },
    { id: 'dev-environment', label: 'Dev Env' },
    { id: 'git-fundamentals', label: 'Git Core' },
    { id: 'html-structure', label: 'HTML & CSS' },
    { id: 'profile-lab', label: 'Profile Lab' },
    { id: 'homework', label: 'Homework PRs' },
    { id: 'checkpoint', label: 'Checkpoint' },
    { id: 'cheat-sheets', label: 'PDF Notes' },
  ];

  const handleSelectModule = (id: string) => {
    onNavigate(id);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-md">
      <div className="max-w-[1440px] w-full mx-auto px-3 sm:px-4 lg:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 xl:gap-3">
        {/* Zone 1: Brand Wordmark & Live Pakistan Clock */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            onClick={() => handleSelectModule('overview')}
            className="text-left font-mono group shrink-0"
          >
            <div className="text-base sm:text-lg font-black tracking-tight text-white whitespace-nowrap">
              MIHORA<span className="text-blue-500">.TECH</span>
            </div>
            <div className="text-[10px] text-blue-400 font-semibold tracking-wider -mt-1 whitespace-nowrap">
              WEEK 01 • FOUNDATIONS
            </div>
          </button>

          {/* Real-time Pakistan Standard Time (PKT) badge */}
          <div className="hidden sm:block shrink-0">
            <LivePktClock isCompact={true} />
          </div>
        </div>

        {/* Zone 2: Navigation Links & Module Index Switcher */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-medium text-slate-400">
          {primaryNavLinks.slice(0, 7).map((link, idx) => (
            <button
              key={link.id}
              onClick={() => handleSelectModule(link.id)}
              className={`hover:text-slate-100 transition-colors whitespace-nowrap py-1 px-1.5 xl:px-2 rounded-lg ${
                idx >= 4 ? 'hidden xl:inline-block' : ''
              } ${
                activeSection === link.id
                  ? 'text-blue-400 font-bold bg-blue-500/10 border border-blue-500/30'
                  : 'hover:bg-slate-900'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* All 24 Modules Dropdown Menu */}
          <div className="relative shrink-0">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-mono text-[11px] transition-colors whitespace-nowrap"
            >
              <span>All 24 Topics</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 max-h-[460px] overflow-y-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 divide-y divide-slate-800/80">
                <div className="p-2 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Select Any Week 01 Learning Module:
                </div>
                <div className="py-1">
                  {MODULE_ROUTES.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => handleSelectModule(m.id)}
                      className={`w-full text-left p-2 rounded-lg text-xs flex items-center justify-between gap-2 transition-colors ${
                        activeSection === m.id
                          ? 'bg-blue-600 text-white font-bold'
                          : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                      }`}
                    >
                      <span className="truncate">
                        <span className="font-mono opacity-70 mr-1.5">
                          {m.number}.
                        </span>
                        {m.title}
                      </span>
                      <span className="text-[10px] font-mono opacity-60 shrink-0">
                        ~{m.estimatedMinutes}m
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Actions & Utility Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Prominent Classroom Presentation Mode Button */}
          {onOpenPresentationMode && (
            <button
              onClick={onOpenPresentationMode}
              className="flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-all whitespace-nowrap shrink-0"
              title="Launch Fullscreen Classroom Presentation (Google Meet Screen Share)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Classroom Mode</span>
            </button>
          )}

          {/* Prominent Student vs Teacher Mode Switcher */}
          <button
            onClick={onToggleInstructorMode}
            className={`flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg text-xs font-bold border transition-all shadow-sm whitespace-nowrap shrink-0 ${
              isInstructorMode
                ? 'bg-purple-600 hover:bg-purple-500 text-white border-purple-400'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800 hover:border-slate-700'
            }`}
            title={
              isInstructorMode
                ? 'Currently in Teacher Mode: Click to switch to Student Mode'
                : 'Currently in Student Mode: Click to switch to Teacher Mode'
            }
          >
            {isInstructorMode ? (
              <>
                <Briefcase className="w-3.5 h-3.5 text-purple-200" />
                <span className="font-semibold hidden sm:inline">Teacher Mode</span>
                <span className="font-semibold sm:hidden">Teacher</span>
              </>
            ) : (
              <>
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-semibold hidden sm:inline">Student Mode</span>
                <span className="font-semibold sm:hidden">Student</span>
              </>
            )}
          </button>

          {/* Theme Switcher: Light (Default) / Classroom / Dark */}
          <div className="hidden md:flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs shrink-0">
            <button
              onClick={() => onThemeChange('light')}
              className={`p-1.5 rounded transition-colors ${
                themeMode === 'light'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="White Light Theme (Google Meet Screen Share - Recommended)"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onThemeChange('classroom')}
              className={`p-1.5 rounded transition-colors ${
                themeMode === 'classroom'
                  ? 'bg-indigo-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Classroom High-Contrast Dark Theme"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onThemeChange('dark')}
              className={`p-1.5 rounded transition-colors ${
                themeMode === 'dark'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Studio Dark Theme"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Low Perf Mode Toggle */}
          <button
            onClick={onToggleLowPerfMode}
            className={`p-1.5 rounded-lg border text-xs transition-colors hidden sm:block ${
              isLowPerfMode
                ? 'bg-amber-950/40 border-amber-500/50 text-amber-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title={
              isLowPerfMode
                ? 'Low Performance Mode Active (CPU Saver)'
                : 'Switch to Low-Perf Mode (Saves CPU/Battery)'
            }
          >
            <Zap
              className={`w-3.5 h-3.5 ${
                isLowPerfMode ? 'text-amber-400 fill-amber-400' : ''
              }`}
            />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Mobile PKT Clock */}
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
            <LivePktClock />
          </div>

          {/* Mobile Classroom Presentation CTA */}
          {onOpenPresentationMode && (
            <button
              onClick={() => {
                onOpenPresentationMode();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all"
            >
              <Monitor className="w-4 h-4" />
              <span>Launch Classroom Presentation</span>
            </button>
          )}

          {/* Mobile Mode Switcher */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-300 font-medium">Viewing Mode:</span>
            <button
              onClick={() => {
                onToggleInstructorMode();
                setIsMobileMenuOpen(false);
              }}
              className={`px-3 py-1 rounded text-xs font-bold ${
                isInstructorMode
                  ? 'bg-purple-600 text-white'
                  : 'bg-blue-600 text-white'
              }`}
            >
              {isInstructorMode ? '👨‍🏫 Teacher Mode' : '👨‍🎓 Student Mode'}
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase text-slate-500 font-bold px-2">
              Curriculum Sections:
            </div>
            {MODULE_ROUTES.map((m) => (
              <button
                key={m.id}
                onClick={() => handleSelectModule(m.id)}
                className={`w-full text-left p-2.5 rounded-lg text-xs flex items-center justify-between ${
                  activeSection === m.id
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span>
                  <span className="font-mono opacity-70 mr-2">{m.number}.</span>
                  {m.title}
                </span>
                <span className="text-[10px] font-mono opacity-60">
                  ~{m.estimatedMinutes}m
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
