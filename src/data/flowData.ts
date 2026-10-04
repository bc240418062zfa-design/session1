export interface FlowStep {
  id: string;
  stepNumber: number;
  title: string;
  shortTitle: string;
  category: string;
  speakerOrType: string;
  timeRange?: string;
  badge: string;
  description?: string;
  aliases?: string[];
}

export const MASTER_FLOW_STEPS: FlowStep[] = [
  // 1. Orientation
  {
    id: 'overview',
    stepNumber: 1,
    title: 'Week 01 Comprehensive Overview & Course Map',
    shortTitle: 'Course Overview',
    category: 'Orientation',
    speakerOrType: 'M. Matti Ul Hasnain',
    timeRange: '09:30 PM – 09:35 PM',
    badge: 'Step 01',
    description: 'Complete architectural map, week goals, syllabus, timeline preview, and learning path.',
  },
  {
    id: 'agenda',
    stepNumber: 2,
    title: 'Session Flow & 50-Min Instructional Core Timeline',
    shortTitle: 'Session Agenda',
    category: 'Orientation',
    speakerOrType: 'Muhammad Shan',
    timeRange: '09:35 PM – 09:40 PM',
    badge: 'Step 02',
    description: 'The 60-min source agenda, 50-min live teaching flow, time allocation, and compression report.',
  },

  // 2. Web Architecture
  {
    id: 'how-the-web-works',
    stepNumber: 3,
    title: 'How the Web Works: The Request/Response Lifecycle',
    shortTitle: 'Web & Request Cycle',
    category: 'Web Architecture',
    speakerOrType: 'Muhammad Shan',
    timeRange: '09:40 PM – 09:48 PM',
    badge: 'Step 03',
    description: 'The complete journey from URL typing to pixels on screen: DNS, TCP, HTTP, and browser rendering.',
    aliases: ['mod1'],
  },
  {
    id: 'http-dns',
    stepNumber: 4,
    title: 'Browsers, Servers, HTTP Protocol & DNS Resolution Tree',
    shortTitle: 'HTTP & DNS Deep-Dive',
    category: 'Web Architecture',
    speakerOrType: 'Muhammad Shan',
    timeRange: '09:48 PM – 09:55 PM',
    badge: 'Step 04',
    description: 'Client-server architecture, DNS resolution tree, IP routing, HTTP methods, headers, and status codes.',
  },
  {
    id: 'http-experiment',
    stepNumber: 5,
    title: 'HTTP Request/Response Experiment Sandbox',
    shortTitle: 'HTTP Sandbox',
    category: 'Web Architecture',
    speakerOrType: 'Interactive Demo',
    timeRange: '09:55 PM – 10:00 PM',
    badge: 'Step 05',
    description: 'Interactive educational sandbox to test HTTP methods, header payloads, and response status codes.',
  },

  // 3. Developer Tools
  {
    id: 'dev-environment',
    stepNumber: 6,
    title: 'Professional Development Environment & Tooling Architecture',
    shortTitle: 'Dev Toolchain',
    category: 'Developer Tools',
    speakerOrType: 'Muhammad Shan',
    timeRange: '10:00 PM – 10:06 PM',
    badge: 'Step 06',
    description: 'Why developers configure specialized workspaces, toolchain anatomy, setup checklist, and verification.',
    aliases: ['mod2'],
  },
  {
    id: 'vscode',
    stepNumber: 7,
    title: 'Visual Studio Code: Professional Editor Configuration',
    shortTitle: 'VS Code Setup',
    category: 'Developer Tools',
    speakerOrType: 'Muhammad Shan',
    timeRange: '10:06 PM – 10:12 PM',
    badge: 'Step 07',
    description: 'Monaco engine, workspace folder structure, essential extensions, keybindings, and integrated terminal.',
  },
  {
    id: 'terminal-node',
    stepNumber: 8,
    title: 'Node.js Runtime & Developer Terminal Navigation',
    shortTitle: 'Node & Terminal',
    category: 'Developer Tools',
    speakerOrType: 'Muhammad Shan',
    timeRange: '10:12 PM – 10:18 PM',
    badge: 'Step 08',
    description: 'V8 runtime, npm ecosystem, cross-platform POSIX vs Windows commands, and interactive shell simulator.',
  },

  // 4. Version Control
  {
    id: 'git-fundamentals',
    stepNumber: 9,
    title: 'Git Fundamentals: The Three Trees & Immutable Snapshots',
    shortTitle: 'Git 3-Tree Core',
    category: 'Version Control',
    speakerOrType: 'Muhammad Shan',
    timeRange: '10:18 PM – 10:25 PM',
    badge: 'Step 09',
    description: 'Working directory, staging index, commit DAG nodes, branch pointers, and clean commit discipline.',
    aliases: ['mod3'],
  },
  {
    id: 'git-visualizer',
    stepNumber: 10,
    title: 'Interactive Git Mental Model & Lifecycle Visualizer',
    shortTitle: 'Git Visualizer',
    category: 'Version Control',
    speakerOrType: 'Interactive Demo',
    timeRange: '10:25 PM – 10:30 PM',
    badge: 'Step 10',
    description: 'Interactive 7-stage state machine: Working Tree -> Staging -> Commit -> Branch -> Remote -> PR -> Merge.',
  },
  {
    id: 'github-workflow',
    stepNumber: 11,
    title: 'GitHub Collaboration, Remote Repos & Pull Request Flow',
    shortTitle: 'GitHub & PRs',
    category: 'Version Control',
    speakerOrType: 'Muhammad Shan',
    timeRange: '10:30 PM – 10:35 PM',
    badge: 'Step 11',
    description: 'Remotes (origin), git push, upstream syncing, pull request code reviews, and clean merge strategies.',
  },

  // 5. Frontend Foundations
  {
    id: 'html-structure',
    stepNumber: 12,
    title: 'HTML Structure: Documents, Elements, Tags & Attributes',
    shortTitle: 'HTML Structure',
    category: 'Frontend Foundations',
    speakerOrType: 'Muhammad Shan',
    timeRange: '10:35 PM – 10:41 PM',
    badge: 'Step 12',
    description: 'The DOM skeletal layer: Doctype, head metadata, body landmarks, nesting hierarchy, and attributes.',
    aliases: ['mod4'],
  },
  {
    id: 'semantic-html',
    stepNumber: 13,
    title: 'Semantic HTML: Accessible Structure vs Generic Containers',
    shortTitle: 'Semantic Landmarks',
    category: 'Frontend Foundations',
    speakerOrType: 'Muhammad Shan',
    timeRange: '10:41 PM – 10:47 PM',
    badge: 'Step 13',
    description: 'Landmark elements (header, nav, main, section, article, footer), accessibility a11y, and eliminating div soup.',
  },
  {
    id: 'css-fundamentals',
    stepNumber: 14,
    title: 'CSS Fundamentals: Selectors, Specificity & The Cascade',
    shortTitle: 'CSS & Specificity',
    category: 'Frontend Foundations',
    speakerOrType: 'Muhammad Shan',
    timeRange: '10:47 PM – 10:53 PM',
    badge: 'Step 14',
    description: 'Rule anatomy, element/class/id selectors, cascade inheritance, and specificity weight calculation math.',
  },
  {
    id: 'css-box-model',
    stepNumber: 15,
    title: 'The CSS Box Model: Dimension Math & Spacing Mechanics',
    shortTitle: 'CSS Box Model',
    category: 'Frontend Foundations',
    speakerOrType: 'Muhammad Shan',
    timeRange: '10:53 PM – 10:58 PM',
    badge: 'Step 15',
    description: 'Content, padding, border, margin, margin collapse, and box-sizing: border-box interactive calculator.',
  },
  {
    id: 'css-typography-color',
    stepNumber: 16,
    title: 'CSS Colour Systems & Typographic Hierarchy',
    shortTitle: 'Typography & Color',
    category: 'Frontend Foundations',
    speakerOrType: 'Muhammad Shan',
    timeRange: '10:58 PM – 11:04 PM',
    badge: 'Step 16',
    description: 'HEX, RGB, HSL, WCAG contrast compliance, font families, font-weight, line-height, and typographic scales.',
  },

  // 6. Hands-on Lab & Capstone
  {
    id: 'mod5',
    stepNumber: 17,
    title: 'Hands-on Lab Overview & Mentor Homework Briefing',
    shortTitle: 'Lab Overview',
    category: 'Hands-on Lab',
    speakerOrType: 'M. Matti Ul Hasnain & M. Shan',
    timeRange: '11:04 PM – 11:10 PM',
    badge: 'Step 17',
    description: 'Capstone introduction, development workflow rules, mentor expectations, and submission criteria.',
  },
  {
    id: 'profile-lab',
    stepNumber: 18,
    title: 'Guided Project: Personal Profile Page Build (13 Milestones)',
    shortTitle: 'Profile Page Lab',
    category: 'Hands-on Lab',
    speakerOrType: 'Hands-on Coding',
    timeRange: 'Interactive Build',
    badge: 'Step 18',
    description: 'Complete 13-step progressive build: Scaffolding, semantic markup, custom CSS, Git init, commit, and remote push.',
  },
  {
    id: 'experiment-lab',
    stepNumber: 19,
    title: 'Live HTML & CSS Code Playground Sandbox',
    shortTitle: 'Code Sandbox',
    category: 'Hands-on Lab',
    speakerOrType: 'Live Editor',
    timeRange: 'Interactive Sandbox',
    badge: 'Step 19',
    description: 'Live client-side code editor with instant iframe preview, multi-device viewports, and starter templates.',
  },
  {
    id: 'deployment',
    stepNumber: 20,
    title: 'Deployment & Live Preview Workflow: GitHub Pages & Vercel',
    shortTitle: 'Deployment Guide',
    category: 'Hands-on Lab',
    speakerOrType: 'DevOps & Hosting',
    timeRange: 'Deployment',
    badge: 'Step 20',
    description: 'Publishing static web assets to global CDNs, branch-based deployments, HTTPS SSL, and generating preview links.',
  },

  // 7. Assignments & Verification
  {
    id: 'homework',
    stepNumber: 21,
    title: 'Week 01 Homework: Dual-Section Expansion & Separate PRs',
    shortTitle: 'Homework PRs',
    category: 'Assignments & Checkpoint',
    speakerOrType: 'GitHub Workflow',
    timeRange: 'Self-Paced Assignment',
    badge: 'Step 21',
    description: 'Adding 2 new sections, branching, atomic commits, opening 2 separate GitHub pull requests, and self-reviewing diffs.',
  },
  {
    id: 'checkpoint',
    stepNumber: 22,
    title: 'Official Week 01 Checkpoint: URL-to-Page & Git Proof',
    shortTitle: 'Checkpoint Exam',
    category: 'Assignments & Checkpoint',
    speakerOrType: 'Proof of Mastery',
    timeRange: 'Assessment Quiz',
    badge: 'Step 22',
    description: 'Explain what happens between typing a URL and seeing a page. Demonstrate a branch, a commit, and a merged PR.',
  },
  {
    id: 'deliverable',
    stepNumber: 23,
    title: 'Official Deliverables Specification & 12-Item Checklist',
    shortTitle: 'Deliverables Hub',
    category: 'Assignments & Checkpoint',
    speakerOrType: 'Submission Hub',
    timeRange: 'Final Submission',
    badge: 'Step 23',
    description: 'Repo link, deployed preview link, written request/response explanation, and 12-item persistent verification checklist.',
  },

  // 8. Cheat-Sheets & Completion
  {
    id: 'cheat-sheets',
    stepNumber: 24,
    title: 'Executive Cheat-Sheets & Quick Reference Compendium',
    shortTitle: 'PDF Cheat-Sheets',
    category: 'Reference & Notes',
    speakerOrType: 'Download Center',
    timeRange: 'Reference & Print',
    badge: 'Step 24',
    description: 'High-density quick references for Git, Terminal, HTML, Semantics, CSS math, and HTTP status codes with downloads.',
  },
  {
    id: 'completion',
    stepNumber: 25,
    title: 'Week 01 Foundations Completed: Mastery Verified!',
    shortTitle: 'Course Completion',
    category: 'Reference & Notes',
    speakerOrType: 'MIHORA.TECH',
    timeRange: 'Mastery Certified',
    badge: 'Step 25',
    description: 'Summary of all achievements, skills acquired, certificate verification, and next steps for Week 02.',
  },
];

/**
 * Finds a flow step by ID or alias (e.g. 'mod1' maps to 'how-the-web-works')
 */
export function findFlowStep(stepId: string): { step: FlowStep; index: number } | null {
  const directIdx = MASTER_FLOW_STEPS.findIndex((s) => s.id === stepId);
  if (directIdx !== -1) {
    return { step: MASTER_FLOW_STEPS[directIdx], index: directIdx };
  }

  // Check aliases
  const aliasIdx = MASTER_FLOW_STEPS.findIndex((s) => s.aliases?.includes(stepId));
  if (aliasIdx !== -1) {
    return { step: MASTER_FLOW_STEPS[aliasIdx], index: aliasIdx };
  }

  return null;
}

/**
 * Returns previous step, next step, and metadata for any view ID in the app
 */
export function getNavigationContext(currentId: string) {
  const match = findFlowStep(currentId);
  const total = MASTER_FLOW_STEPS.length;

  if (!match) {
    return {
      currentStep: MASTER_FLOW_STEPS[0],
      currentStepNumber: 1,
      totalSteps: total,
      prevStep: null,
      nextStep: MASTER_FLOW_STEPS[1],
      progressPercent: Math.round((1 / total) * 100),
    };
  }

  const { step, index } = match;
  const prevStep = index > 0 ? MASTER_FLOW_STEPS[index - 1] : null;
  const nextStep = index < total - 1 ? MASTER_FLOW_STEPS[index + 1] : null;

  return {
    currentStep: step,
    currentStepNumber: index + 1,
    totalSteps: total,
    prevStep,
    nextStep,
    progressPercent: Math.round(((index + 1) / total) * 100),
  };
}
