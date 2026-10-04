import { CheatSheetConfig } from '../utils/pdfCheatSheetExport';

export const OFFICIAL_CHEAT_SHEETS: CheatSheetConfig[] = [
  {
    id: 'git-pro',
    title: 'Git & GitHub Pro Workflow Cheat-Sheet',
    subtitle: 'Authoritative command guide for branches, commits, staging, emergency fixes, and merge conflicts',
    category: 'Git & GitHub',
    accentColor: [37, 99, 235], // #2563eb
    badgeText: 'Git Master v2.4',
    summary:
      'The definitive developer workflow guide for Week 01. Covers machine configuration, atomic commits, isolated feature branches, daily sync procedures, and safe rollback strategies without losing work.',
    sections: [
      {
        title: '1. Machine First-Time Setup & Configuration',
        description: 'Run once when configuring Git on a new laptop or workstation.',
        items: [
          {
            key: 'git config --global user.name "Name"',
            detail: 'Sets author name recorded on every Git commit snapshot.',
            badge: 'Required',
          },
          {
            key: 'git config --global user.email "email"',
            detail: 'Sets email tied to your GitHub account for verified commit badges.',
            badge: 'Required',
          },
          {
            key: 'git config --global init.defaultBranch main',
            detail: 'Configures default branch name for all new repositories to "main".',
            badge: 'Standard',
          },
          {
            key: 'git config --global core.autocrlf input',
            detail: 'Normalizes line endings (LF on macOS/Linux, Windows use "true").',
            badge: 'Config',
          },
          {
            key: 'git config --list --show-origin',
            detail: 'Inspects all active configuration keys and their source config files.',
            badge: 'Debug',
          },
        ],
        proTip: 'Always verify with "git config user.name" and "git config user.email" before making your first project commit.',
      },
      {
        title: '2. Daily Feature Branch Workflow (The Golden Path)',
        description: 'Execute these 5 steps for every single task, feature, or lab assignment.',
        codeBlock: `# 1. Pull latest verified changes on main
git switch main
git pull origin main

# 2. Branch out with a descriptive feature name
git switch -c feature/add-profile-skills

# 3. Code, inspect status, and inspect diff
git status
git diff

# 4. Stage and commit atomically with conventional message
git add index.html style.css
git commit -m "feat(profile): implement responsive skills badge grid"

# 5. Push to GitHub and set upstream tracking
git push -u origin feature/add-profile-skills`,
        items: [
          {
            key: 'git status',
            detail: 'Displays working tree status, staged files, unstaged changes, and untracked files.',
            badge: 'Daily',
          },
          {
            key: 'git diff',
            detail: 'Shows line-by-line differences between working directory and the staging area.',
            badge: 'Daily',
          },
          {
            key: 'git log --oneline --graph -n 8',
            detail: 'Renders a visual compact ASCII graph of recent commits and branch pointers.',
            badge: 'Review',
          },
        ],
        proTip: 'Keep commits small and focused on one conceptual change. Never dump an entire week of work into a single "updated code" commit.',
      },
      {
        title: '3. Git Emergency Fixes & Safe Undos',
        description: 'Tested recovery commands for common developer panic situations.',
        items: [
          {
            key: 'git restore <file>',
            detail: 'Discards uncommitted working edits and restores file to HEAD state.',
            badge: 'Restore',
            caution: 'Unsaved edits are permanently lost.',
          },
          {
            key: 'git restore --staged <file>',
            detail: 'Unstages a file (reverts "git add") while keeping all file edits intact on disk.',
            badge: 'Safe',
          },
          {
            key: 'git commit --amend -m "new msg"',
            detail: 'Fixes the message or stages extra files into the most recent commit (before push).',
            badge: 'Safe',
          },
          {
            key: 'git stash',
            detail: 'Temporarily stashes dirty uncommitted working changes into a local shelf.',
            badge: 'Workflow',
          },
          {
            key: 'git stash pop',
            detail: 'Re-applies the most recently stashed changes back onto current branch.',
            badge: 'Workflow',
          },
        ],
        warning: 'Never run "git reset --hard" on shared or pushed branches. Prefer "git revert" for public commits.',
      },
      {
        title: '4. Resolving Merge Conflicts in 4 Steps',
        description: 'What to do when Git halts merge with "CONFLICT (content): Automatic merge failed".',
        codeBlock: `1. Open conflicted file in VS Code (look for <<<<<<< HEAD markers).
2. Choose "Accept Current Change", "Accept Incoming Change", or edit manually.
3. Remove all conflict markers (<<<<<<<, =======, >>>>>>>).
4. Stage resolved file: git add index.html
5. Finalize commit: git commit -m "chore: resolve merge conflict in hero section"`,
      },
    ],
  },
  {
    id: 'vscode-shortcuts',
    title: 'VS Code Dual-Platform Power Shortcuts',
    subtitle: 'High-speed keyboard navigation and editing workflows for macOS and Windows/Linux',
    category: 'VS Code',
    accentColor: [14, 165, 233], // #0ea5e9
    badgeText: 'Productivity v1.8',
    summary:
      'Keyboard-first efficiency manual for developers. Eliminates slow trackpad/mouse navigation and accelerates file discovery, multi-cursor editing, tag manipulation, and integrated terminal usage.',
    sections: [
      {
        title: '1. Navigation & Workspace Controls',
        description: 'Move through projects without opening the file tree with a mouse.',
        items: [
          {
            key: 'Cmd + P  |  Ctrl + P',
            detail: 'Quick Open: Jump directly to any file by typing partial name (e.g. "idx" -> index.html).',
            badge: 'Essential',
          },
          {
            key: 'Cmd + Shift + P  |  Ctrl + Shift + P',
            detail: 'Command Palette: Access all VS Code commands, settings, and extension actions.',
            badge: 'Essential',
          },
          {
            key: 'Cmd + B  |  Ctrl + B',
            detail: 'Toggle Primary Sidebar: Expand editor workspace by hiding file tree explorer.',
            badge: 'Layout',
          },
          {
            key: 'Cmd + \\  |  Ctrl + \\',
            detail: 'Split Editor: Open two files side-by-side (e.g., HTML on left, CSS on right).',
            badge: 'Layout',
          },
          {
            key: 'Cmd + 1 / 2  |  Ctrl + 1 / 2',
            detail: 'Focus Group: Switch focus between left and right editor split columns.',
            badge: 'Layout',
          },
        ],
      },
      {
        title: '2. Multi-Cursor & Lightning Fast Editing',
        description: 'Edit multiple matching classes, tags, and variables in lock-step.',
        items: [
          {
            key: 'Cmd + D  |  Ctrl + D',
            detail: 'Select Next Occurrence: Highlights next matching word and creates synchronized cursor.',
            badge: 'Multi-Cursor',
          },
          {
            key: 'Option + Click  |  Alt + Click',
            detail: 'Insert Arbitrary Cursor: Click anywhere to add an additional cursor.',
            badge: 'Multi-Cursor',
          },
          {
            key: 'Option + Up/Down  |  Alt + Up/Down',
            detail: 'Move Line: Shifts current line or selection up or down without cut/paste.',
            badge: 'Editing',
          },
          {
            key: 'Shift + Option + Down  |  Shift + Alt + Down',
            detail: 'Duplicate Line: Copies line downwards instantly (great for HTML lists & cards).',
            badge: 'Editing',
          },
          {
            key: 'Cmd + /  |  Ctrl + /',
            detail: 'Toggle Line Comment: Wraps selection in <!-- comment --> or /* comment */.',
            badge: 'Editing',
          },
          {
            key: 'Shift + Option + F  |  Shift + Alt + F',
            detail: 'Format Document: Auto-formats indentation and syntax via Prettier.',
            badge: 'Format',
          },
        ],
        proTip: 'Use "Cmd/Ctrl + D" multiple times to rename a CSS class name across your entire HTML file simultaneously.',
      },
      {
        title: '3. Integrated Terminal Control',
        description: 'Never leave VS Code to run Git commands or dev servers.',
        items: [
          {
            key: 'Ctrl + ` (backtick)',
            detail: 'Toggle Integrated Terminal: Show/hide bash or powershell terminal pane.',
            badge: 'Terminal',
          },
          {
            key: 'Ctrl + Shift + `',
            detail: 'Create New Terminal: Spawns a secondary terminal session in background.',
            badge: 'Terminal',
          },
        ],
      },
    ],
  },
  {
    id: 'http-web',
    title: 'HTTP Status Codes & Web Architecture Cheat-Sheet',
    subtitle: 'The full HTTP lifecycle, request/response anatomy, and complete status code dictionary',
    category: 'HTTP & Architecture',
    accentColor: [6, 182, 212], // #06b6d4
    badgeText: 'RFC 9110 Spec',
    summary:
      'Complete reference for the client-server request/response cycle. Explains status code families (2xx, 3xx, 4xx, 5xx), critical HTTP headers, DNS lookups, TCP handshakes, and DevTools debugging.',
    sections: [
      {
        title: '1. The 5 Status Code Families',
        description: 'Standard HTTP response classes defined by IETF RFC specifications.',
        items: [
          {
            key: '1xx Informational',
            detail: 'Request received, protocol continuing (101 Switching Protocols).',
            badge: '100-199',
          },
          {
            key: '2xx Success',
            detail: 'Action successfully received, understood, and accepted by server.',
            badge: '200-299',
          },
          {
            key: '3xx Redirection',
            detail: 'Further action must be taken to complete request (URL moved, cached).',
            badge: '300-399',
          },
          {
            key: '4xx Client Error',
            detail: 'Request contains bad syntax, missing authentication, or non-existent resource.',
            badge: '400-499',
          },
          {
            key: '5xx Server Error',
            detail: 'Server failed to fulfill an apparently valid request due to internal error.',
            badge: '500-599',
          },
        ],
      },
      {
        title: '2. Critical Status Codes Every Developer Must Know',
        description: 'Exact meaning, cause, and debugging guidance for daily web development.',
        items: [
          {
            key: '200 OK',
            detail: 'Standard successful HTTP response for GET, POST, or PUT requests.',
            badge: 'Success',
          },
          {
            key: '201 Created',
            detail: 'Request succeeded and a new resource was created on server (POST).',
            badge: 'Success',
          },
          {
            key: '301 Moved Permanently',
            detail: 'Target resource assigned a new permanent URI. Browsers auto-redirect and update bookmarks.',
            badge: 'Redirect',
          },
          {
            key: '304 Not Modified',
            detail: 'Conditional GET: Client cached copy is valid (ETag matches). Saves bandwidth.',
            badge: 'Cache',
          },
          {
            key: '400 Bad Request',
            detail: 'Malformed syntax, invalid JSON body, or missing required URL query parameter.',
            badge: 'Client',
          },
          {
            key: '401 Unauthorized',
            detail: 'Authentication required. Missing, invalid, or expired Bearer token.',
            badge: 'Client',
          },
          {
            key: '403 Forbidden',
            detail: 'Server understands client identity but refuses permission (Access Denied).',
            badge: 'Client',
          },
          {
            key: '404 Not Found',
            detail: 'Server cannot find matching route or file (e.g. wrong image path or file extension).',
            badge: 'Client',
          },
          {
            key: '500 Internal Server Error',
            detail: 'Unhandled exception or crash in backend server code (check server logs).',
            badge: 'Server',
          },
          {
            key: '502 Bad Gateway',
            detail: 'Proxy/reverse proxy (Nginx/Cloudflare) received invalid response from upstream app.',
            badge: 'Server',
          },
          {
            key: '504 Gateway Timeout',
            detail: 'Upstream server took too long to respond before proxy server gave up.',
            badge: 'Server',
          },
        ],
        proTip: 'In Chrome/Firefox DevTools Network tab, click any red row to inspect the Response Preview and exact status code.',
      },
    ],
  },
  {
    id: 'html5-semantics',
    title: 'HTML5 Semantic Blueprint & Accessibility Matrix',
    subtitle: 'Structured layout elements, accessibility (a11y) landmarks, and search engine optimization',
    category: 'HTML5 & Semantics',
    accentColor: [245, 158, 11], // #f59e0b
    badgeText: 'W3C HTML5.3',
    summary:
      'The authoritative reference for writing clean, meaningful markup. Replaces "div soup" with accessible landmarks that screen readers, accessibility tools, and search engine crawlers understand.',
    sections: [
      {
        title: '1. Semantic Landmark Elements',
        description: 'Structural tags that establish document hierarchy and screen-reader landmark zones.',
        items: [
          {
            key: '<header>',
            detail: 'Introductory content or navigation container for a page or standalone section.',
            badge: 'Landmark',
          },
          {
            key: '<nav>',
            detail: 'Designated section of major navigational links (menus, breadcrumbs, pagers).',
            badge: 'Landmark',
          },
          {
            key: '<main>',
            detail: 'Central, unique content of the document. Only ONE visible <main> per document.',
            badge: 'Landmark',
          },
          {
            key: '<article>',
            detail: 'Self-contained, independently distributable composition (blog post, card, review).',
            badge: 'Content',
          },
          {
            key: '<section>',
            detail: 'Generic standalone thematic grouping of content, typically with a heading (h2-h6).',
            badge: 'Content',
          },
          {
            key: '<aside>',
            detail: 'Content tangentially related to main content (sidebars, callouts, author bios).',
            badge: 'Landmark',
          },
          {
            key: '<footer>',
            detail: 'Footer for nearest section or page containing copyright, author, and links.',
            badge: 'Landmark',
          },
        ],
        proTip: 'Never put navigation links in a generic <div> without a <nav> wrapper. Assistive tech relies on <nav> to allow users to skip to main content.',
      },
      {
        title: '2. Document Head Essential Scaffold',
        description: 'Standard meta tags required for responsive rendering and character encoding.',
        codeBlock: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MIHORA.TECH | Full-Stack AI Engineering</title>
  <meta name="description" content="Production-ready profile and web foundations.">
  <link rel="stylesheet" href="style.css">
</head>`,
        items: [
          {
            key: '<meta charset="UTF-8">',
            detail: 'Declares Unicode encoding to prevent broken special characters (emojis, accents).',
            badge: 'Required',
          },
          {
            key: '<meta name="viewport" content="...">',
            detail: 'Enables mobile responsive scaling at 1:1 scale without artificial mobile zooming.',
            badge: 'Required',
          },
        ],
      },
    ],
  },
  {
    id: 'css-cascade-boxmodel',
    title: 'CSS Box Model, Specificity Math & Flexbox Guide',
    subtitle: 'Cascade algorithm, specificity weight calculation, box-sizing mathematics, and flex layouts',
    category: 'CSS & Cascade',
    accentColor: [139, 92, 246], // #8b5cf6
    badgeText: 'CSS3 Standard',
    summary:
      'Master the layout engine of modern browsers. Contains the exact box-sizing equation, specificity triad calculation formula, margin collapse rules, and flexbox alignment patterns.',
    sections: [
      {
        title: '1. The CSS Box Model Equation',
        description: 'How browsers compute total rendered element dimensions.',
        codeBlock: `/* The Industry Standard Universal Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* TOTAL WIDTH with border-box:
   Total Width = declared width
   (Padding and Border fit inside the declared width)

/* TOTAL WIDTH without border-box (content-box):
   Total Width = width + padding-left + padding-right + border-left + border-right`,
        items: [
          {
            key: 'Content Box',
            detail: 'The area where text and images reside. Set by width / height properties.',
            badge: 'Box',
          },
          {
            key: 'Padding',
            detail: 'Clear space inside border around content. Takes element background color.',
            badge: 'Box',
          },
          {
            key: 'Border',
            detail: 'Line rendered around padding and content. Has style, color, and width.',
            badge: 'Box',
          },
          {
            key: 'Margin',
            detail: 'Transparent buffer area outside border separating element from neighbors.',
            badge: 'Box',
          },
        ],
      },
      {
        title: '2. Specificity Calculation Triad (A, B, C)',
        description: 'How the browser resolves conflicting style rules on the same element.',
        items: [
          {
            key: 'Inline Style: style="..."',
            detail: 'Weight: (1, 0, 0, 0) — Highest specificity. Overrides external stylesheets.',
            badge: '1000 pts',
          },
          {
            key: 'ID Selector: #header',
            detail: 'Weight: (0, 1, 0, 0) — A single ID selector overrides 100 stacked classes.',
            badge: '100 pts',
          },
          {
            key: 'Class / Attribute: .btn, [type]',
            detail: 'Weight: (0, 0, 1, 0) — Includes classes, attributes, and pseudo-classes (:hover).',
            badge: '10 pts',
          },
          {
            key: 'Element / Pseudo-element: p, div, ::before',
            detail: 'Weight: (0, 0, 0, 1) — Lowest weight. Targets basic HTML tag names.',
            badge: '1 pt',
          },
        ],
        warning: 'Avoid using !important to fix specificity bugs. Refactor selector specificity or structure instead.',
      },
    ],
  },
  {
    id: 'terminal-crossplatform',
    title: 'POSIX Terminal & PowerShell Cross-Platform Matrix',
    subtitle: 'Side-by-side terminal commands for macOS, Linux, and Windows PowerShell/Command Prompt',
    category: 'Terminal',
    accentColor: [16, 185, 129], // #10b981
    badgeText: 'CLI Core v1.4',
    summary:
      'The essential terminal navigation matrix for developers on macOS, Linux, and Windows. Run commands with confidence, manipulate directory trees, inspect files, and execute scripts.',
    sections: [
      {
        title: '1. Directory Navigation & Path Management',
        description: 'Moving around the filesystem smoothly from your command prompt.',
        items: [
          {
            key: 'pwd',
            detail: 'Print Working Directory: Outputs absolute path of current folder (Windows PowerShell also supports pwd).',
            badge: 'Nav',
          },
          {
            key: 'ls  |  ls -la  |  dir',
            detail: 'List Directory: -la flag shows hidden files (.git, .env) and permissions in detail.',
            badge: 'Nav',
          },
          {
            key: 'cd <folder>',
            detail: 'Change Directory: Enter specified subfolder.',
            badge: 'Nav',
          },
          {
            key: 'cd ..',
            detail: 'Move Up: Ascend exactly one folder level higher in directory hierarchy.',
            badge: 'Nav',
          },
          {
            key: 'cd ~',
            detail: 'Home Directory: Jump directly to user root home folder.',
            badge: 'Nav',
          },
        ],
      },
      {
        title: '2. File & Folder Operations',
        description: 'Creating, inspecting, and deleting project assets.',
        items: [
          {
            key: 'mkdir <folder-name>',
            detail: 'Make Directory: Creates new folder in current working directory.',
            badge: 'Files',
          },
          {
            key: 'touch <file.ext>  |  New-Item <file>',
            detail: 'Touch: Creates empty file or updates timestamp if already exists.',
            badge: 'Files',
          },
          {
            key: 'code .',
            detail: 'Launch VS Code: Opens the current directory inside a new VS Code window.',
            badge: 'Editor',
          },
          {
            key: 'cat <file>  |  Get-Content <file>',
            detail: 'Concatenate: Prints entire content of file directly into terminal buffer.',
            badge: 'Files',
          },
          {
            key: 'clear  |  cls',
            detail: 'Clear Terminal: Wipes terminal scrollback (also Ctrl + L).',
            badge: 'Utility',
          },
        ],
        proTip: 'Always use Tab for autocomplete when typing file or directory names to avoid typos.',
      },
    ],
  },
];
