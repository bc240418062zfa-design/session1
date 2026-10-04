export interface ModuleRoute {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category:
    | 'Orientation'
    | 'Web Architecture'
    | 'Developer Tools'
    | 'Version Control'
    | 'Frontend Foundations'
    | 'Hands-on Lab'
    | 'Assignments & Checkpoint'
    | 'Reference & Notes';
  categoryOrder: number;
  description: string;
  estimatedMinutes: number;
  isInteractive: boolean;
}

export const MODULE_ROUTES: ModuleRoute[] = [
  // 1. Orientation
  {
    id: 'overview',
    number: '01',
    title: 'Week 01 Comprehensive Overview',
    shortTitle: 'Week Overview',
    category: 'Orientation',
    categoryOrder: 1,
    description: 'Complete architectural map, week goals, syllabus, timeline preview, and learning path.',
    estimatedMinutes: 5,
    isInteractive: false,
  },
  {
    id: 'agenda',
    number: '02',
    title: 'Session Flow & 50-Min Instructional Core',
    shortTitle: 'Session Agenda',
    category: 'Orientation',
    categoryOrder: 1,
    description: 'The 60-min source agenda, 50-min live teaching flow, time allocation, and compression report.',
    estimatedMinutes: 8,
    isInteractive: true,
  },

  // 2. Web Architecture
  {
    id: 'how-the-web-works',
    number: '03',
    title: 'How the Web Works: The Request/Response Lifecycle',
    shortTitle: 'How Web Works',
    category: 'Web Architecture',
    categoryOrder: 2,
    description: 'The complete journey from URL typing to pixels on screen: DNS, TCP, HTTP, and browser rendering.',
    estimatedMinutes: 14,
    isInteractive: true,
  },
  {
    id: 'http-dns',
    number: '04',
    title: 'Browsers, Servers, HTTP Protocol & DNS Resolution',
    shortTitle: 'HTTP & DNS',
    category: 'Web Architecture',
    categoryOrder: 2,
    description: 'Client-server architecture, DNS resolution tree, IP routing, HTTP methods, headers, and status codes.',
    estimatedMinutes: 15,
    isInteractive: true,
  },
  {
    id: 'http-experiment',
    number: '05',
    title: 'HTTP Request/Response Experiment Simulation',
    shortTitle: 'HTTP Simulator',
    category: 'Web Architecture',
    categoryOrder: 2,
    description: 'Interactive educational sandbox to test HTTP methods, header payloads, and response status codes.',
    estimatedMinutes: 10,
    isInteractive: true,
  },

  // 3. Developer Tools
  {
    id: 'dev-environment',
    number: '06',
    title: 'Professional Development Environment & Tooling Architecture',
    shortTitle: 'Dev Environment',
    category: 'Developer Tools',
    categoryOrder: 3,
    description: 'Why developers configure specialized workspaces, toolchain anatomy, setup checklist, and verification.',
    estimatedMinutes: 12,
    isInteractive: false,
  },
  {
    id: 'vscode',
    number: '07',
    title: 'Visual Studio Code: Professional Editor Configuration',
    shortTitle: 'VS Code Setup',
    category: 'Developer Tools',
    categoryOrder: 3,
    description: 'Monaco engine, workspace folder structure, essential extensions, keybindings, and integrated terminal.',
    estimatedMinutes: 12,
    isInteractive: false,
  },
  {
    id: 'terminal-node',
    number: '08',
    title: 'Node.js Runtime & Developer Terminal Workflow',
    shortTitle: 'Node & Terminal',
    category: 'Developer Tools',
    categoryOrder: 3,
    description: 'V8 runtime, npm ecosystem, cross-platform POSIX vs Windows commands, and interactive shell simulator.',
    estimatedMinutes: 15,
    isInteractive: true,
  },

  // 4. Version Control
  {
    id: 'git-fundamentals',
    number: '09',
    title: 'Git Fundamentals: The Three Trees & Immutable Snapshots',
    shortTitle: 'Git Fundamentals',
    category: 'Version Control',
    categoryOrder: 4,
    description: 'Working directory, staging index, commit DAG nodes, branch pointers, and clean commit discipline.',
    estimatedMinutes: 18,
    isInteractive: false,
  },
  {
    id: 'git-visualizer',
    number: '10',
    title: 'Interactive Git Mental Model & Lifecycle Visualizer',
    shortTitle: 'Git Visualizer',
    category: 'Version Control',
    categoryOrder: 4,
    description: 'Interactive 7-stage state machine: Working Tree -> Staging -> Commit -> Branch -> Remote -> PR -> Merge.',
    estimatedMinutes: 12,
    isInteractive: true,
  },
  {
    id: 'github-workflow',
    number: '11',
    title: 'GitHub Collaboration, Remote Repos & Pull Request Flow',
    shortTitle: 'GitHub & PRs',
    category: 'Version Control',
    categoryOrder: 4,
    description: 'Remotes (origin), git push, upstream syncing, pull request code reviews, and clean merge strategies.',
    estimatedMinutes: 14,
    isInteractive: false,
  },

  // 5. Frontend Foundations
  {
    id: 'html-structure',
    number: '12',
    title: 'HTML Structure: Documents, Elements, Tags & Attributes',
    shortTitle: 'HTML Structure',
    category: 'Frontend Foundations',
    categoryOrder: 5,
    description: 'The DOM skeletal layer: Doctype, head metadata, body landmarks, nesting hierarchy, and attributes.',
    estimatedMinutes: 15,
    isInteractive: true,
  },
  {
    id: 'semantic-html',
    number: '13',
    title: 'Semantic HTML: Accessible Structure vs Generic Containers',
    shortTitle: 'Semantic HTML',
    category: 'Frontend Foundations',
    categoryOrder: 5,
    description: 'Landmark elements (header, nav, main, section, article, footer), accessibility a11y, and eliminating div soup.',
    estimatedMinutes: 14,
    isInteractive: false,
  },
  {
    id: 'css-fundamentals',
    number: '14',
    title: 'CSS Fundamentals: Selectors, Specificity & The Cascade',
    shortTitle: 'CSS Fundamentals',
    category: 'Frontend Foundations',
    categoryOrder: 5,
    description: 'Rule anatomy, element/class/id selectors, cascade inheritance, and specificity weight calculation math.',
    estimatedMinutes: 16,
    isInteractive: true,
  },
  {
    id: 'css-box-model',
    number: '15',
    title: 'The CSS Box Model: Dimension Math & Spacing Mechanics',
    shortTitle: 'CSS Box Model',
    category: 'Frontend Foundations',
    categoryOrder: 5,
    description: 'Content, padding, border, margin, margin collapse, and box-sizing: border-box interactive calculator.',
    estimatedMinutes: 14,
    isInteractive: true,
  },
  {
    id: 'css-typography-color',
    number: '16',
    title: 'CSS Colour Systems & Typographic Hierarchy',
    shortTitle: 'Color & Typography',
    category: 'Frontend Foundations',
    categoryOrder: 5,
    description: 'HEX, RGB, HSL, WCAG contrast compliance, font families, font-weight, line-height, and typographic scales.',
    estimatedMinutes: 14,
    isInteractive: true,
  },
  {
    id: 'experiment-lab',
    number: '17',
    title: 'Interactive HTML & CSS Experimentation Sandbox',
    shortTitle: 'Code Sandbox',
    category: 'Frontend Foundations',
    categoryOrder: 5,
    description: 'Live client-side code editor with instant iframe preview, multi-device viewports, and starter templates.',
    estimatedMinutes: 20,
    isInteractive: true,
  },

  // 6. Hands-on Lab
  {
    id: 'profile-lab',
    number: '18',
    title: 'Guided Project Lab: Personal Profile Page Walkthrough',
    shortTitle: 'Profile Page Lab',
    category: 'Hands-on Lab',
    categoryOrder: 6,
    description: 'Complete 13-step progressive build: Scaffolding, semantic markup, custom CSS, Git init, commit, and remote push.',
    estimatedMinutes: 25,
    isInteractive: true,
  },
  {
    id: 'deployment',
    number: '19',
    title: 'Deployment & Live Preview Workflow: GitHub Pages & Vercel',
    shortTitle: 'Deployment Guide',
    category: 'Hands-on Lab',
    categoryOrder: 6,
    description: 'Publishing static web assets to global CDNs, branch-based deployments, HTTPS SSL, and generating preview links.',
    estimatedMinutes: 12,
    isInteractive: false,
  },

  // 7. Assignments & Checkpoint
  {
    id: 'homework',
    number: '20',
    title: 'Week 01 Homework: Dual-Section Expansion & Separate PRs',
    shortTitle: 'Homework Guide',
    category: 'Assignments & Checkpoint',
    categoryOrder: 7,
    description: 'Adding 2 new sections, branching, atomic commits, opening 2 separate GitHub pull requests, and self-reviewing diffs.',
    estimatedMinutes: 15,
    isInteractive: true,
  },
  {
    id: 'checkpoint',
    number: '21',
    title: 'Official Week 01 Checkpoint: URL-to-Page & Git Proof',
    shortTitle: 'Checkpoint Exam',
    category: 'Assignments & Checkpoint',
    categoryOrder: 7,
    description: 'Explain what happens between typing a URL and seeing a page. Demonstrate a branch, a commit, and a merged PR.',
    estimatedMinutes: 15,
    isInteractive: true,
  },
  {
    id: 'deliverable',
    number: '22',
    title: 'Official Deliverable Specification & Submission Checklist',
    shortTitle: 'Deliverable Specs',
    category: 'Assignments & Checkpoint',
    categoryOrder: 7,
    description: 'Repo link, deployed preview link, written request/response explanation, and 12-item persistent verification checklist.',
    estimatedMinutes: 10,
    isInteractive: true,
  },

  // 8. Reference & Notes
  {
    id: 'cheat-sheets',
    number: '23',
    title: 'Comprehensive Cheat Sheets & Quick Reference Compendium',
    shortTitle: 'Cheat Sheets & PDFs',
    category: 'Reference & Notes',
    categoryOrder: 8,
    description: 'High-density quick references for Git, Terminal, HTML, Semantics, CSS math, and HTTP status codes with downloads.',
    estimatedMinutes: 15,
    isInteractive: true,
  },
  {
    id: 'extra-notes',
    number: '24',
    title: 'Extra Technical Notes & Architecture Deep Dives',
    shortTitle: 'Extra Notes',
    category: 'Reference & Notes',
    categoryOrder: 8,
    description: 'Deep dive essays on the Critical Rendering Path, DNS Caching layers, Git DAG commit graphs, and troubleshooting.',
    estimatedMinutes: 20,
    isInteractive: false,
  },
];
