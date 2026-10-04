import {
  TimelineSegment,
  CheckpointItem,
  CompressionReportItem,
  LabStep,
  DownloadableResource,
  ChecklistItem,
  ExtraNoteItem,
} from '../types';

export const COURSE_INFO = {
  organization: 'MIHORA.TECH',
  program: 'Full-Stack Web Development with AI',
  programSubtitle: 'A 14-week program: from first commit to a deployed, AI-enabled product, built entirely in Next.js',
  phase: 'Phase 1: Foundations (Week 1)',
  weekNumber: 1,
  sessionTitle: 'How the Web Works, Development Environment and Git',
  sessionSubhead: 'Authoritative Digital Learning Environment & Interactive Lab',
  schedule: 'Regular Class Schedule: Saturday & Sunday at 9:30 PM PKT',
  timezone: 'Asia/Karachi (UTC+5)',
  subdomain: 'session1.mihora.tech',
  instructors: [
    {
      name: 'Muhammad Matti Ul Hasnain',
      role: 'Lead Mentor & Technical Lead',
      org: 'MIHORA.TECH',
    },
    {
      name: 'Muhammad Shan',
      role: 'Full-Stack Developer & Backend Lead',
      org: 'MIHORA.TECH',
    },
  ],
  goal: 'Understand what happens when a page loads, set up a professional workspace and build your first page.',
  lab: 'Build a personal profile page in plain HTML and CSS, put it in a new GitHub repository and deploy it with a preview link.',
  homework: 'Add two more sections to the page and open a pull request for each change.',
  deliverables: 'Repository link, deployed page, and a short note explaining the request/response cycle in your own words.',
  checkpointSummary: 'Explain what happens between typing a URL and seeing a page. Show: a branch, a commit, and a merged pull request.',
  mentorNote: 'Spend real time on Git now — every later week depends on clean history.',
  classNotesPromise: 'Comprehensive lecture notes, cheat-sheets, and starter repositories are provided after every class.',
};

export const TIME_MODEL = {
  totalMeetingMinutes: 60,
  orientationMinutes: 5,
  coreMinutes: 50,
  closingMinutes: 5,
  coreStartTime: '09:35 PM',
  coreEndTime: '10:25 PM',
  fullStartTime: '09:30 PM',
  fullEndTime: '10:30 PM',
};

// EXACT 50-MINUTE INSTRUCTIONAL CORE
export const TIMELINE_SEGMENTS: TimelineSegment[] = [
  {
    id: 'seg-1-web-basics',
    order: 1,
    title: 'How the Web Works: The Request/Response Lifecycle',
    shortTitle: 'Web Architecture',
    startTime: '09:35 PM',
    endTime: '09:43 PM',
    durationMinutes: 8,
    cumulativeMinutes: 8,
    phase: 'Instructional Core',
    teachingState: 'CORE',
    learningObjective:
      'Trace the complete journey from URL entry to pixels on screen: DNS resolution, IP addressing, HTTP request/response headers, and browser rendering.',
    instructorAction:
      'Walk through the interactive Web Flow diagram. Emphasize that the browser is an HTTP client requesting resources from an HTTP server at an IP address resolved by DNS.',
    studentAction:
      'Click each stage on the visual web pipeline, inspect simulated HTTP headers and status codes, and test the URL breakdown component.',
    demonstration:
      'Demonstrate a simulated GET /index.html request showing status 200 OK vs 404 Not Found, and explain how a single HTML file triggers subsequent requests for CSS and JS.',
    interactiveCheckpoint:
      'Checkpoint 1 & 2: Differentiating Domain vs IP, and identifying what translates the domain.',
    optionalMaterial:
      'DNS root servers, Anycast routing, and HTTP/2 multiplexing (deferred to Extra Notes 01).',
    transitionToNext:
      'Now that we understand how browsers fetch files over HTTP, let us configure the local tools where those files are created and executed.',
    ifBehindCues:
      'Skip low-level TLS handshake details; focus strictly on URL -> DNS (IP) -> HTTP GET -> Server 200 OK -> Render.',
    ifAheadCues:
      'Open Browser DevTools Network tab live to show real Request/Response headers on a live site.',
    commonMisconceptions: [
      'Thinking "the Internet" and "the Web" are identical terms.',
      'Assuming the browser downloads the entire website at once instead of individual file streams.',
      'Confusing domain names (human readable) with IP addresses (machine routing).',
    ],
    keyQuestions: [
      'What physical machine answers when you type mihora.tech in your browser?',
      'Why does the browser need an IP address before it can send an HTTP request?',
    ],
  },
  {
    id: 'seg-2-env-setup',
    order: 2,
    title: 'Development Environment & Terminal Essentials',
    shortTitle: 'Dev Environment',
    startTime: '09:43 PM',
    endTime: '09:50 PM',
    durationMinutes: 7,
    cumulativeMinutes: 15,
    phase: 'Instructional Core',
    teachingState: 'LIVE DEMO',
    learningObjective:
      'Understand how VS Code, Node.js LTS, and the terminal integrate to form a professional developer workspace across macOS, Linux, and Windows.',
    instructorAction:
      'Open VS Code via terminal using "code .". Run essential cross-platform shell commands (pwd, cd, mkdir, ls/dir). Highlight Windows vs POSIX nuances.',
    studentAction:
      'Practice navigating folders in the interactive terminal simulator. Verify node -v and git --version locally.',
    demonstration:
      'Create a folder "profile-site" from the terminal, enter it, and open it directly in VS Code using "code .".',
    interactiveCheckpoint:
      'Terminal Simulator: Execute directory navigation and verify version flags.',
    optionalMaterial:
      'Advanced VS Code settings.json customization and custom terminal themes (in Reference Material).',
    transitionToNext:
      'With our workspace established, we must manage our project history with Git so we never lose code or break working features.',
    ifBehindCues:
      'Do not debug individual student installation issues live; point them to the pre-flight checklist and post-session setup guide.',
    ifAheadCues:
      'Demonstrate VS Code split-terminal features and integrated Git status indicators.',
    commonMisconceptions: [
      'Believing Node.js is only for servers (it also runs our build tooling and package managers).',
      'Thinking you must memorize hundreds of CLI commands (5-6 core navigation commands do 90% of daily work).',
    ],
    keyQuestions: [
      'What is the difference between your operating system terminal and the VS Code integrated terminal?',
      'Why do professional developers launch editors from the terminal using "code ."?',
    ],
  },
  {
    id: 'seg-3-git-fundamentals',
    order: 3,
    title: 'Git Fundamentals: The Three Trees, Branching & GitHub PRs',
    shortTitle: 'Git & GitHub Deep Dive',
    startTime: '09:50 PM',
    endTime: '10:07 PM',
    durationMinutes: 17,
    cumulativeMinutes: 32,
    phase: 'Instructional Core',
    teachingState: 'CORE',
    learningObjective:
      'Master the Git conceptual model: Working Directory, Staging Area, Local Repository, Feature Branches, Remote GitHub, and Pull Request reviews.',
    instructorAction:
      'Spend substantial, deliberate time here as mandated by the course rubric. Walk step-by-step through git init -> git add -> git commit -> git branch -> git push -> GitHub PR. Show WHY staging exists.',
    studentAction:
      'Interact with the visual Git stage manager. Trigger "What happens if..." scenarios (modifying a file, staging, branching, PR merge).',
    demonstration:
      'Live execution: initialize a git repo, inspect status before and after staging, make a conventional commit, switch to a feature branch, and explain PR merging.',
    interactiveCheckpoint:
      'Checkpoint 3 & 4: Staging area mechanics and branch isolation concepts.',
    optionalMaterial:
      'Git rebase, cherry-pick, and detached HEAD recovery (in Extra Notes 02).',
    transitionToNext:
      'Now that our version control workflow is understood, let us write the semantic HTML and CSS that will live inside our repository.',
    ifBehindCues:
      'Focus strictly on the main branch commit -> feature branch -> push -> PR flow. Defer git stash and amend to post-session reading.',
    ifAheadCues:
      'Show git log --oneline --graph to visually prove how Git stores commit nodes as a directed acyclic graph.',
    commonMisconceptions: [
      'Thinking Git and GitHub are the same thing (Git is the local tool; GitHub is the cloud collaboration host).',
      'Thinking git add saves the code permanently (it only stages files for the next commit snapshot).',
      'Committing directly to main in team workflows instead of opening pull requests.',
    ],
    keyQuestions: [
      'Why does Git have a staging area instead of committing working directory files immediately?',
      'What actually happens to your project when you switch branches?',
    ],
  },
  {
    id: 'seg-4-html-css',
    order: 4,
    title: 'HTML Semantic Architecture & The CSS Box Model',
    shortTitle: 'HTML5 & CSS Box Model',
    startTime: '10:07 PM',
    endTime: '10:17 PM',
    durationMinutes: 10,
    cumulativeMinutes: 42,
    phase: 'Instructional Core',
    teachingState: 'LIVE DEMO',
    learningObjective:
      'Structure clean, accessible pages using semantic HTML5 elements (<header>, <main>, <section>, <footer>) and calculate exact element dimensions with the CSS Box Model.',
    instructorAction:
      'Contrast semantic HTML with "div soup". Open the live Box Model inspector to demonstrate margin vs border vs padding vs content, and show box-sizing: border-box.',
    studentAction:
      'Adjust box model sliders (padding, margin, border) in the interactive widget and observe the computed box dimensions in real-time.',
    demonstration:
      'Live code a minimal profile card: semantic tags for avatar, name, bio, and social links; style with CSS variables, clean typography, and proper box model spacing.',
    interactiveCheckpoint:
      'Checkpoint 5 & 6: Semantic HTML value and Box Model total width calculation.',
    optionalMaterial:
      'CSS Flexbox and CSS Grid layout algorithms (deferred to Week 2: Modern CSS & JavaScript).',
    transitionToNext:
      'We are ready to tie everything together in our hands-on lab: building our personal profile page, committing it with Git, and deploying it live.',
    ifBehindCues:
      'Focus on the 4 core semantic tags (<header>, <main>, <section>, <footer>) and the box model padding/margin distinction.',
    ifAheadCues:
      'Demonstrate browser DevTools Inspect Element to show how the browser computes the box model in live websites.',
    commonMisconceptions: [
      'Using <div> for everything instead of semantic tags (hurts SEO, screen readers, and code maintainability).',
      'Assuming margin is inside the element boundary (margin creates space outside; padding creates space inside).',
    ],
    keyQuestions: [
      'Why do screen readers and search engines care about semantic HTML tags?',
      'If an element has width: 200px and padding: 20px with standard content-box, what is its total rendered width?',
    ],
  },
  {
    id: 'seg-5-lab-walkthrough',
    order: 5,
    title: 'Guided Lab Walkthrough & AI Engineering Workflow',
    shortTitle: 'Lab & AI Pair Programming',
    startTime: '10:17 PM',
    endTime: '10:25 PM',
    durationMinutes: 8,
    cumulativeMinutes: 50,
    phase: 'Instructional Core',
    teachingState: 'INTERACTIVE',
    learningObjective:
      'Walk through the 10-step profile page build, configure preview deployment, adopt the AI prompt-verify discipline, and understand homework criteria.',
    instructorAction:
      'Walk through the 10 lab milestones from scaffold to live preview. Explicitly teach the AI Engineering rule: "The AI can type, but you are accountable. Explain every line."',
    studentAction:
      'Review the lab checklist, test the live in-browser code playground, copy the starter template, and review the homework requirements.',
    demonstration:
      'Show how to prompt an AI assistant for a clean profile layout snippet, review its generated code line-by-line, fix an error, and commit cleanly.',
    interactiveCheckpoint:
      'Deliverables checklist review: verify understanding of the 3 submission components.',
    optionalMaterial:
      'Automated GitHub Actions CI deployment workflows (in Reference Material).',
    transitionToNext:
      'Transition to the final 5 minutes of class for open student questions, reflection, and homework clarification.',
    ifBehindCues:
      'Highlight Steps 1–4 (HTML/CSS) and Steps 6–8 (Git/GitHub). Emphasize that full step-by-step guidance is available in the student portal.',
    ifAheadCues:
      'Demonstrate a live deployment on Vercel / GitHub Pages in under 60 seconds.',
    commonMisconceptions: [
      'Blindly copying AI generated code without understanding how each CSS selector and HTML tag functions.',
      'Waiting until Sunday midnight to start the lab instead of building right after today’s lecture.',
    ],
    keyQuestions: [
      'What are the three required items in your deliverable on Friday?',
      'Why must every homework change be submitted as an individual pull request?',
    ],
  },
];

// CURRICULUM COMPRESSION REPORT (Part 36)
export const COMPRESSION_REPORT: CompressionReportItem[] = [
  {
    id: 'comp-1',
    originalTopic: 'How browsers, servers, HTTP and DNS work together',
    originalTimeRange: '09:30 PM – 09:43 PM',
    originalMinutes: 13,
    newTimeRange: '09:35 PM – 09:43 PM',
    newMinutes: 8,
    status: 'CORE LIVE',
    rationale:
      'Intelligently compressed by using an interactive visual web-flow pipeline and simulated HTTP request inspector rather than lengthy slide narrations. Deep RFC protocol details moved to Extra Notes 01.',
    movedTo: 'Instructional Core (Segment 1) + Extra Notes 01 (Deep Dive)',
  },
  {
    id: 'comp-2',
    originalTopic: 'Setting up VS Code, Node.js and the terminal',
    originalTimeRange: '09:43 PM – 09:56 PM',
    originalMinutes: 13,
    newTimeRange: '09:43 PM – 09:50 PM',
    newMinutes: 7,
    status: 'GUIDED PRACTICE',
    rationale:
      'Avoided turning live class into an installation troubleshooting stall. Pre-flight checklist handled basic installs; live time focuses on terminal navigation essentials (pwd, cd, mkdir, ls) and code . workflow.',
    movedTo: 'Instructional Core (Segment 2) + Tools Setup Checklist in Portal',
  },
  {
    id: 'comp-3',
    originalTopic: 'Git fundamentals: commit, branch, push, pull request on GitHub',
    originalTimeRange: '09:56 PM – 10:09 PM',
    originalMinutes: 13,
    newTimeRange: '09:50 PM – 10:07 PM',
    newMinutes: 17,
    status: 'CORE LIVE',
    rationale:
      'EXPANDED by +4 minutes (+31% relative increase)! Mentor note emphasized: "Spend real time on Git now. Every later week depends on clean history." Given 34% of instructional core.',
    movedTo: 'Instructional Core (Segment 3) with full interactive stage visualizer',
  },
  {
    id: 'comp-4',
    originalTopic: 'HTML structure, semantic elements & CSS box model, colour and type',
    originalTimeRange: '10:09 PM – 10:21 PM',
    originalMinutes: 12,
    newTimeRange: '10:07 PM – 10:17 PM',
    newMinutes: 10,
    status: 'LIVE DEMO',
    rationale:
      'Streamlined to focus tightly on essential semantic tags (<header>, <main>, <section>, <footer>) and live interactive Box Model calculation. Flexbox and Grid layout algorithms deferred to Week 2.',
    movedTo: 'Instructional Core (Segment 4) + Interactive Code Playground',
  },
  {
    id: 'comp-5',
    originalTopic: 'Hands-on Lab Walkthrough & Homework Briefing',
    originalTimeRange: '10:21 PM – 10:30 PM',
    originalMinutes: 9,
    newTimeRange: '10:17 PM – 10:25 PM',
    newMinutes: 8,
    status: 'LIVE DEMO',
    rationale:
      'Re-architected into 10 concise sequential milestones, integrated with AI-assisted prompt verification standards. Leaves 5 minutes at the end for Q&A and wrap-up.',
    movedTo: 'Instructional Core (Segment 5) + Lab Walkthrough & Checklist',
  },
  {
    id: 'comp-6',
    originalTopic: 'Advanced CSS Selectors & Layout Engines (Flexbox/Grid)',
    originalTimeRange: 'Mentioned in broad curriculum',
    originalMinutes: 0,
    newTimeRange: 'Week 2 Syllabus',
    newMinutes: 0,
    status: 'DEFERRED',
    rationale:
      'Deferred to Week 2 ("Modern CSS and JavaScript fundamentals") to prevent cognitive overload during Week 1 foundational day.',
    movedTo: 'Week 2 Syllabus (Flexbox, Grid, Responsive Media Queries)',
  },
];

// INTERACTIVE CHECKPOINTS (Part 33)
export const CHECKPOINTS: CheckpointItem[] = [
  {
    id: 'chk-1',
    segmentId: 'seg-1-web-basics',
    topic: 'How the Web Works',
    question: 'When you type https://mihora.tech into your browser and press Enter, what is the very first external network lookup your browser initiates?',
    conceptualContext:
      'Before any HTTP connection can be established, the client computer must know the physical IP address of the destination server.',
    options: [
      {
        id: 'a',
        text: 'An HTTP GET request to download index.html directly from the domain name.',
        isCorrect: false,
        explanation: 'Incorrect. HTTP runs over TCP/IP; without an IP address, the browser cannot open a network socket.',
      },
      {
        id: 'b',
        text: 'A DNS query to resolve the domain name into an IP address.',
        isCorrect: true,
        explanation: 'Correct! The Domain Name System (DNS) acts like the internet address book, mapping human-friendly names (mihora.tech) to machine routable IP addresses (e.g. 76.76.21.21).',
      },
      {
        id: 'c',
        text: 'A TLS handshake to negotiate cryptographic ciphers with GitHub.',
        isCorrect: false,
        explanation: 'Incorrect. The TLS handshake occurs only after the IP address is known and a TCP connection is opened.',
      },
      {
        id: 'd',
        text: 'A CSS stylesheet parsing pass in the browser rendering engine.',
        isCorrect: false,
        explanation: 'Incorrect. Parsing only happens after HTML and linked assets have been fetched over the network.',
      },
    ],
  },
  {
    id: 'chk-2',
    segmentId: 'seg-1-web-basics',
    topic: 'Client-Server HTTP',
    question: 'Which HTTP response status code communicates that the requested web page was successfully found and returned by the server?',
    conceptualContext:
      'HTTP status codes are standardized 3-digit numbers categorizing response outcomes.',
    options: [
      {
        id: 'a',
        text: '200 OK',
        isCorrect: true,
        explanation: 'Correct! 200 OK signals that the HTTP request succeeded and the response body contains the requested resource.',
      },
      {
        id: 'b',
        text: '301 Moved Permanently',
        isCorrect: false,
        explanation: 'Incorrect. 301 is a redirection code indicating the resource has moved to a new URL.',
      },
      {
        id: 'c',
        text: '404 Not Found',
        isCorrect: false,
        explanation: 'Incorrect. 404 indicates the server cannot find the requested URL.',
      },
      {
        id: 'd',
        text: '500 Internal Server Error',
        isCorrect: false,
        explanation: 'Incorrect. 500 indicates an unexpected server-side software failure.',
      },
    ],
  },
  {
    id: 'chk-3',
    segmentId: 'seg-3-git-fundamentals',
    topic: 'Git Staging Mechanics',
    question: 'Why does Git require you to run "git add" to stage files before running "git commit", instead of committing all changes automatically?',
    conceptualContext:
      'Git is intentionally structured around three distinct trees: Working Directory, Staging Area (Index), and Commit History (Repository).',
    options: [
      {
        id: 'a',
        text: 'It is a legacy limitation that has no modern engineering purpose.',
        isCorrect: false,
        explanation: 'Incorrect. Staging is a foundational feature of professional Git workflows.',
      },
      {
        id: 'b',
        text: 'It allows you to craft precise, atomic commits by selecting only relevant changes to bundle together.',
        isCorrect: true,
        explanation: 'Correct! The staging area (Index) lets you curate changes into clean, focused commits. You can edit 5 files but commit only the 2 files related to a specific bug fix.',
      },
      {
        id: 'c',
        text: 'It automatically uploads the modified code to your GitHub remote repository.',
        isCorrect: false,
        explanation: 'Incorrect. Uploading to GitHub is done exclusively by "git push". Staging is 100% local.',
      },
      {
        id: 'd',
        text: 'It compiles TypeScript files into browser-executable JavaScript.',
        isCorrect: false,
        explanation: 'Incorrect. Git does not compile code; compilers (like tsc or esbuild) do that.',
      },
    ],
  },
  {
    id: 'chk-4',
    segmentId: 'seg-3-git-fundamentals',
    topic: 'Branching & Collaboration',
    question: 'What does a Pull Request (PR) represent in modern software engineering teams?',
    conceptualContext:
      'Pull requests are the central collaboration and quality control mechanism on GitHub.',
    options: [
      {
        id: 'a',
        text: 'A formal request to review and merge changes from a feature branch into the target branch (such as main).',
        isCorrect: true,
        explanation: 'Correct! A pull request allows teammates to review your diff, discuss architectural decisions, run automated tests (CI), and approve changes before merging.',
      },
      {
        id: 'b',
        text: 'A terminal command that downloads files from the server to your laptop.',
        isCorrect: false,
        explanation: 'Incorrect. That is "git pull" or "git fetch", not a GitHub Pull Request.',
      },
      {
        id: 'c',
        text: 'A command that deletes a repository permanently from GitHub.',
        isCorrect: false,
        explanation: 'Incorrect. Repositories can only be deleted via GitHub repository administrative settings.',
      },
      {
        id: 'd',
        text: 'An emergency rollback of the last 10 commits.',
        isCorrect: false,
        explanation: 'Incorrect. Rollbacks are managed via git revert or git reset.',
      },
    ],
  },
  {
    id: 'chk-5',
    segmentId: 'seg-4-html-css',
    topic: 'Semantic HTML',
    question: 'Why should you use semantic tags like <header>, <main>, and <article> instead of generic <div> tags everywhere?',
    conceptualContext:
      'HTML is not just visual; it provides structural meaning to assistive tech, search engines, and browsers.',
    options: [
      {
        id: 'a',
        text: 'Browsers refuse to render web pages that contain more than 10 <div> elements.',
        isCorrect: false,
        explanation: 'Incorrect. Browsers will render "div soup", but the accessibility and structure will be severely compromised.',
      },
      {
        id: 'b',
        text: 'Semantic tags convey explicit architectural meaning to screen readers, SEO crawlers, and future developers.',
        isCorrect: true,
        explanation: 'Correct! Semantic tags define landmarks that assistive technologies use for navigation, search engines use for indexing, and developers use to maintain clean code.',
      },
      {
        id: 'c',
        text: 'Semantic tags automatically apply CSS styling without writing any CSS code.',
        isCorrect: false,
        explanation: 'Incorrect. While browsers have default user-agent styles, semantic tags exist for meaning, not visual design.',
      },
      {
        id: 'd',
        text: 'Semantic tags run faster because they bypass the browser DOM tree.',
        isCorrect: false,
        explanation: 'Incorrect. All HTML elements become DOM nodes.',
      },
    ],
  },
  {
    id: 'chk-6',
    segmentId: 'seg-4-html-css',
    topic: 'CSS Box Model',
    question: 'Under standard CSS (box-sizing: content-box), if an element has width: 300px, padding: 20px on all sides, and border: 5px on all sides, what is its total rendered width?',
    conceptualContext:
      'Total Width = Content Width + Left/Right Padding + Left/Right Border (+ Margin for outer footprint).',
    options: [
      {
        id: 'a',
        text: '300px',
        isCorrect: false,
        explanation: 'Incorrect. In content-box, padding and border are added ON TOP of the specified width.',
      },
      {
        id: 'b',
        text: '325px',
        isCorrect: false,
        explanation: 'Incorrect. Remember padding and borders exist on BOTH left and right sides!',
      },
      {
        id: 'c',
        text: '350px',
        isCorrect: true,
        explanation: 'Correct! Total Width = 300px (content) + 20px (left padding) + 20px (right padding) + 5px (left border) + 5px (right border) = 350px. That is why modern code sets box-sizing: border-box!',
      },
      {
        id: 'd',
        text: '340px',
        isCorrect: false,
        explanation: 'Incorrect. You forgot the 5px border on both sides (10px total).',
      },
    ],
  },
];

// LAB STEPS (13 Progressive Guided Milestones)
export const LAB_STEPS: LabStep[] = [
  {
    stepNumber: 1,
    title: 'Create Project Folder & Workspace',
    commandOrFile: 'mkdir profile-site && cd profile-site',
    objective: 'Create a dedicated, clean folder for your project on your local hard drive and navigate into it.',
    explanation: 'Keeping every web project in its own self-contained folder ensures Git repositories and configuration files do not bleed into unrelated files.',
    codeSnippet: `# Create folder and enter it
mkdir profile-site
cd profile-site

# Verify your current directory
pwd`,
    expectedResult: 'Terminal enters the newly created empty profile-site directory.',
    commonMistake: 'Creating files directly on your Desktop or home directory without a dedicated folder.',
    completionCheck: 'Running "pwd" shows path ending in "/profile-site".',
    verificationTip: 'Verify with pwd or Get-Location that you are inside profile-site.',
  },
  {
    stepNumber: 2,
    title: 'Create HTML Entry Point',
    commandOrFile: 'touch index.html',
    objective: 'Create the primary HTML document named index.html.',
    explanation: 'Web servers automatically serve index.html by default when a browser requests the root URL of a directory.',
    codeSnippet: `# Create index.html and launch in VS Code
touch index.html
code .`,
    expectedResult: 'An empty index.html file is created and VS Code opens the profile-site workspace.',
    commonMistake: 'Naming the file "homepage.html" or "profile.html". It MUST be named "index.html".',
    completionCheck: 'VS Code File Explorer shows profile-site as root with index.html inside.',
    verificationTip: 'Ensure file is named lowercase index.html.',
  },
  {
    stepNumber: 3,
    title: 'Create Semantic HTML Structure',
    commandOrFile: 'index.html',
    objective: 'Write the complete HTML5 boilerplate with landmark elements: <header>, <main>, <section>, and <footer>.',
    explanation: 'Semantic elements communicate document structure to search engines and screen readers, establishing accessible navigation landmarks.',
    codeSnippet: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Muhammad Shan | Full-Stack Developer</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="hero">
      <h1>Muhammad Shan</h1>
      <p class="role">Full-Stack Web Developer · MIHORA.TECH</p>
    </header>

    <main class="container">
      <section id="about" class="card">
        <h2>About Me</h2>
        <p>Junior full-stack engineer studying Week 1 Foundations at MIHORA.TECH. Building responsive web products.</p>
      </section>

      <section id="links" class="card">
        <h2>Connect With Me</h2>
        <ul class="links-list">
          <li><a href="https://github.com" target="_blank" rel="noopener">GitHub</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
        </ul>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 Muhammad Shan · MIHORA.TECH Foundations Week 1</p>
    </footer>
  </body>
</html>`,
    expectedResult: 'A fully validated HTML5 document with structured semantic tags and linked stylesheet.',
    commonMistake: 'Using generic <div> tags instead of <header>, <main>, <section>, and <footer>.',
    completionCheck: 'File saved in VS Code without red syntax errors.',
    verificationTip: 'Verify every section contains an h2 heading for screen readers.',
  },
  {
    stepNumber: 4,
    title: 'Create CSS Stylesheet',
    commandOrFile: 'touch style.css',
    objective: 'Create style.css and establish universal box-sizing reset and typography rules.',
    explanation: 'Setting "box-sizing: border-box" ensures padding and borders do not unexpectedly widen your layout containers.',
    codeSnippet: `/* CSS Reset & Modern Box Sizing */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #0f172a;
  color: #f8fafc;
  line-height: 1.6;
  padding: 2rem 1rem;
}`,
    expectedResult: 'style.css is created and linked inside index.html head tag.',
    commonMistake: 'Forgetting to link style.css in the HTML <head> with <link rel="stylesheet" href="style.css">.',
    completionCheck: 'Background of page turns dark slate (#0f172a) when opened in browser.',
    verificationTip: 'Check the Network tab in DevTools to confirm style.css returns 200 OK.',
  },
  {
    stepNumber: 5,
    title: 'Style Profile Layout & Components',
    commandOrFile: 'style.css',
    objective: 'Apply responsive container styling, card borders, colors, and button hover states.',
    explanation: 'Using maximum container widths with margin auto centers your content on desktop displays.',
    codeSnippet: `.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.25rem;
  color: #38bdf8;
  margin-bottom: 0.5rem;
}

.container {
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card {
  background-color: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 1.5rem;
}

.card h2 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #93c5fd;
}

.links-list {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.links-list a {
  color: #38bdf8;
  text-decoration: none;
  font-weight: 600;
}

.links-list a:hover {
  text-decoration: underline;
}

footer {
  text-align: center;
  margin-top: 3rem;
  font-size: 0.875rem;
  color: #94a3b8;
}`,
    expectedResult: 'Clean, modern dark-mode card layout centered in the browser viewport.',
    commonMistake: 'Hardcoding widths like "width: 700px" instead of "max-width: 680px; width: 100%;".',
    completionCheck: 'Profile page looks balanced and responsive across mobile and desktop widths.',
    verificationTip: 'Resize the browser window to ensure no horizontal scrollbar appears.',
  },
  {
    stepNumber: 6,
    title: 'Preview Locally in Browser',
    commandOrFile: 'VS Code Live Server or Browser',
    objective: 'Launch your profile in your local browser and test responsiveness and styling.',
    explanation: 'Verifying locally ensures your assets, paths, and styles render accurately before putting them under version control.',
    codeSnippet: `# Option A: Using VS Code Live Server extension
Right click index.html ➔ "Open with Live Server"

# Option B: Direct terminal launch (macOS)
open index.html

# Windows PowerShell
start index.html`,
    expectedResult: 'Browser opens http://127.0.0.1:5500/index.html or local file path with styled profile.',
    commonMistake: 'Checking only on a wide desktop screen and ignoring mobile device widths.',
    completionCheck: 'DevTools Responsive Viewport mode (<kbd>Ctrl+Shift+M</kbd>) looks crisp at 375px width.',
    verificationTip: 'Open Console tab to ensure 0 404 Not Found asset errors.',
  },
  {
    stepNumber: 7,
    title: 'Initialize Local Git Repository',
    commandOrFile: 'git init',
    objective: 'Convert your project folder into a local Git repository and set the main branch.',
    explanation: 'Initializes the hidden .git directory to begin tracking file snapshots in an immutable Directed Acyclic Graph.',
    codeSnippet: `git init
git branch -M main
git status`,
    expectedResult: 'Terminal outputs "Initialized empty Git repository in .../profile-site/.git/".',
    commonMistake: 'Running "git init" in your home folder (~ or C:\\Users\\Student) instead of inside profile-site.',
    completionCheck: 'Running "git status" lists index.html and style.css in red as untracked files.',
    verificationTip: 'Ensure you are inside profile-site by checking pwd.',
  },
  {
    stepNumber: 8,
    title: 'Create Your First Commit',
    commandOrFile: 'git add . && git commit -m "..."',
    objective: 'Stage all files and record your foundational commit snapshot.',
    explanation: 'Creates the root commit node in your repository DAG with a clear, conventional commit message.',
    codeSnippet: `# Stage files to index
git add .

# Verify staged files (green)
git status

# Commit snapshot
git commit -m "feat: build personal profile page with plain html and css"

# View commit history
git log --oneline`,
    expectedResult: 'Terminal outputs "[main (root-commit) a1b2c3d] feat: build personal profile page...".',
    commonMistake: 'Writing vague commit messages like "update", "stuff", or "changes".',
    completionCheck: 'Running "git log --oneline" shows your commit with its 7-character SHA hash.',
    verificationTip: 'Run "git status" to ensure working tree is clean.',
  },
  {
    stepNumber: 9,
    title: 'Create Remote GitHub Repository',
    commandOrFile: 'github.com/new',
    objective: 'Create an empty repository on GitHub to host your cloud backup and deployments.',
    explanation: 'Provides an off-site remote host for code reviews, pull requests, and automated deployment pipelines.',
    codeSnippet: `# In your web browser:
1. Navigate to https://github.com/new
2. Repository name: profile-site
3. Visibility: Public
4. IMPORTANT: Do NOT check "Add a README", .gitignore, or license!
5. Click "Create repository"`,
    expectedResult: 'GitHub displays an empty repository page with remote HTTPS and SSH URLs.',
    commonMistake: 'Checking "Add a README file" on GitHub, causing a merge conflict with your local README.',
    completionCheck: 'You have your HTTPS URL copied (e.g. https://github.com/username/profile-site.git).',
    verificationTip: 'Ensure repository visibility is set to Public so your mentor and preview link can access it.',
  },
  {
    stepNumber: 10,
    title: 'Connect Local Repository to GitHub Remote',
    commandOrFile: 'git remote add origin https://github.com/...',
    objective: 'Link your local Git repo to the cloud GitHub repository using the alias "origin".',
    explanation: 'Tells local Git where to send (push) and fetch (pull) commits across the network.',
    codeSnippet: `# Replace USERNAME with your real GitHub handle
git remote add origin https://github.com/USERNAME/profile-site.git

# Verify remote configuration
git remote -v`,
    expectedResult: 'git remote -v outputs origin fetch and push URLs pointing to github.com.',
    commonMistake: 'Typing the remote URL with a spelling error or pasting someone else’s repository URL.',
    completionCheck: 'Terminal confirms origin points to your own profile-site repository.',
    verificationTip: 'Run "git remote -v" to verify origin is registered.',
  },
  {
    stepNumber: 11,
    title: 'Push Main Branch to GitHub',
    commandOrFile: 'git push -u origin main',
    objective: 'Upload your local commit history to GitHub and configure upstream tracking.',
    explanation: 'Transfers commit objects over HTTPS or SSH, creating the remote branch origin/main on GitHub.',
    codeSnippet: `git push -u origin main`,
    expectedResult: 'Terminal outputs "Branch main set up to track remote branch main from origin."',
    commonMistake: 'Authentication failure. Use a GitHub Personal Access Token (PAT) or GitHub CLI if prompted for password.',
    completionCheck: 'Refresh your GitHub repo URL in browser: index.html and style.css appear in the file tree!',
    verificationTip: 'Verify your commit message is visible on github.com.',
  },
  {
    stepNumber: 12,
    title: 'Deploy Live via GitHub Pages or Vercel',
    commandOrFile: 'GitHub Pages Settings or Vercel',
    objective: 'Publish your static website to a global CDN with a public preview URL.',
    explanation: 'Hosts your files on distributed edge servers with free SSL certificates so anyone can view your site.',
    codeSnippet: `# Option A: GitHub Pages
1. Go to repository Settings ➔ Pages
2. Source: "Deploy from a branch"
3. Branch: select "main" ➔ folder "/ (root)" ➔ Save
4. Wait 60 seconds for deployment URL

# Option B: Vercel Instant Deployment
1. Go to vercel.com ➔ "Add New Project"
2. Import "profile-site" ➔ Click "Deploy"`,
    expectedResult: 'A live public URL is generated (e.g. https://username.github.io/profile-site/).',
    commonMistake: 'Selecting the "/docs" folder in GitHub Pages when your index.html is located in root "/".',
    completionCheck: 'Your public URL loads the styled profile page without broken CSS.',
    verificationTip: 'Open the URL in an incognito window on your phone to verify public accessibility.',
  },
  {
    stepNumber: 13,
    title: 'Verify Live Preview Link & Assets',
    commandOrFile: 'Live Verification Protocol',
    objective: 'Audit your deployed preview link to verify responsiveness, asset loading, and HTTPS security.',
    explanation: 'Quality assurance: verify that relative paths resolve correctly on the production CDN.',
    codeSnippet: `# Checklist verification
1. Open https://USERNAME.github.io/profile-site/
2. Check padlock icon for HTTPS encryption
3. Open DevTools (F12) ➔ Console (verify 0 404 errors)
4. Test links and responsiveness on mobile`,
    expectedResult: 'Your profile page renders perfectly with zero console warnings.',
    commonMistake: 'Using absolute local paths like "href=/style.css" instead of relative "href=style.css".',
    completionCheck: 'You have your working deployed preview link ready for your official deliverable submission!',
    verificationTip: 'Send the preview link to a classmate or mentor to test independent access.',
  },
];

// HOMEWORK DELIVERABLE CHECKLIST (Part 31, 32)
export const DELIVERABLE_CHECKLIST: ChecklistItem[] = [
  {
    id: 'chk-item-1',
    label: 'VS Code, Node.js LTS, and Git verified locally',
    category: 'Environment',
    detail: 'Run node -v and git --version in terminal to verify both tools output valid version numbers.',
  },
  {
    id: 'chk-item-2',
    label: 'Project directory initialized with clean file structure',
    category: 'Environment',
    detail: 'Folder contains index.html, style.css, README.md, and .gitignore.',
  },
  {
    id: 'chk-item-3',
    label: 'Personal profile page built with valid HTML5',
    category: 'HTML/CSS',
    detail: 'Includes <!DOCTYPE html>, <head>, <title>, <meta charset="UTF-8">, and viewport tag.',
  },
  {
    id: 'chk-item-4',
    label: 'Semantic HTML elements used throughout (<header>, <main>, <section>, <footer>)',
    category: 'HTML/CSS',
    detail: 'No div soup. Headings (h1, h2) follow strict logical hierarchy.',
  },
  {
    id: 'chk-item-5',
    label: 'Plain CSS applied with box-sizing: border-box and clean typography',
    category: 'HTML/CSS',
    detail: 'Readable contrast (WCAG AA), deliberate padding, margins, and dark/neutral color palette.',
  },
  {
    id: 'chk-item-6',
    label: 'Git repository initialized locally with main branch',
    category: 'Git Workflow',
    detail: 'Executed git init and set default branch to main.',
  },
  {
    id: 'chk-item-7',
    label: 'Initial commit created with conventional message',
    category: 'Git Workflow',
    detail: 'Meaningful commit message following "feat: ..." or "chore: ...".',
  },
  {
    id: 'chk-item-8',
    label: 'Feature Branch 1 created for first homework section (e.g. feature/skills)',
    category: 'Git Workflow',
    detail: 'Created branch with git switch -c feature/skills, committed changes, and pushed to origin.',
  },
  {
    id: 'chk-item-9',
    label: 'Pull Request 1 opened on GitHub and merged cleanly into main',
    category: 'Git Workflow',
    detail: 'Opened PR on GitHub, reviewed own diff, merged via GitHub interface, and pulled locally.',
  },
  {
    id: 'chk-item-10',
    label: 'Feature Branch 2 created for second homework section (e.g. feature/projects)',
    category: 'Git Workflow',
    detail: 'Created second branch, opened Pull Request 2, and merged into main.',
  },
  {
    id: 'chk-item-11',
    label: 'Site deployed live to GitHub Pages or Vercel with active preview link',
    category: 'Deployment',
    detail: 'Site is publicly reachable via https:// link and renders properly on mobile.',
  },
  {
    id: 'chk-item-12',
    label: 'Request/response cycle short essay written in README.md in own words',
    category: 'Deliverable',
    detail: 'Explaining DNS lookup, IP resolution, HTTP GET request, server response 200 OK, and DOM rendering.',
  },
];

// DOWNLOADABLE RESOURCES (Part 28, 29)
export const DOWNLOADABLE_RESOURCES: DownloadableResource[] = [
  {
    id: 'res-notes',
    title: 'Session 1 Complete Technical Lecture Notes',
    format: 'Markdown (.md)',
    filename: 'MIHORA-Week1-Complete-Lecture-Notes.md',
    description:
      'Full verbatim study guide covering Web Architecture, Client-Server model, Terminal essentials, Git three trees, and HTML/CSS Box Model.',
    sizeLabel: '18 KB',
    content: `# MIHORA.TECH — Full-Stack Web Development with AI
## Week 1: How the Web Works, Development Environment and Git
### Authoritative Technical Lecture Notes

---
### 1. The Client-Server Architecture & Request/Response Lifecycle

The web is a distributed client-server information system operating over the TCP/IP suite.

#### When a user types a URL (e.g. https://mihora.tech):
1. **URL Parsing**: Browser parses the protocol (https), domain (mihora.tech), port (default 443), and path (/).
2. **DNS Resolution**: The browser checks its local cache -> OS cache -> router cache -> ISP Recursive Resolver -> Root -> TLD (.tech) -> Authoritative Nameserver.
3. **TCP 3-Way Handshake**: SYN -> SYN-ACK -> ACK establishes a reliable bidirectional socket.
4. **TLS 1.3 Handshake**: Key exchange, authentication, and encrypted tunnel negotiation.
5. **HTTP Request**:
   \`\`\`http
   GET / HTTP/1.1
   Host: mihora.tech
   User-Agent: Mozilla/5.0
   Accept: text/html
   \`\`\`
6. **Server Processing & HTTP Response**:
   \`\`\`http
   HTTP/1.1 200 OK
   Content-Type: text/html; charset=UTF-8
   Content-Length: 4210

   <!DOCTYPE html>...
   \`\`\`
7. **Critical Rendering Path**: HTML parsing -> DOM Tree construction -> CSSOM construction -> Render Tree -> Layout (reflow) -> Paint.

---
### 2. Git Conceptual Mental Model: The Three Trees

Git does NOT track file diffs; Git tracks **snapshots** of a directory tree over time.

- **Working Directory**: Your actual files on disk where you write code.
- **Staging Area (Index)**: The preparation area. Holds the exact snapshot planned for the next commit.
- **Commit History (.git repository)**: Immutable DAG (Directed Acyclic Graph) of commit objects identified by SHA hashes.

#### Essential Git Commands:
- \`git init\`: Initializes a repository (.git hidden folder).
- \`git status\`: Shows differences across working directory, staging, and HEAD.
- \`git add <file>\`: Moves working file changes into the staging area.
- \`git commit -m "<msg>"\`: Records a permanent snapshot from the staging area.
- \`git branch <name>\`: Creates a new pointer to the current commit.
- \`git switch <name>\`: Moves HEAD pointer to a branch.
- \`git remote add origin <url>\`: Connects local repo to GitHub.
- \`git push -u origin main\`: Pushes branch commits and links upstream tracking.

---
### 3. HTML5 Semantic Elements & CSS Box Model

Always favor semantic markup over generic containers:
- \`<header>\`: Landmark for introductory content.
- \`<nav>\`: Major navigation links.
- \`<main>\`: The primary unique content of the page (only one per document).
- \`<section>\`: Thematic grouping of content with a heading.
- \`<article>\`: Self-contained, independently distributable composition.
- \`<footer>\`: Author, copyright, or contact information.

#### CSS Box Model:
\`Total Width = Content Width + (Left+Right Padding) + (Left+Right Border) + (Left+Right Margin)\`
Always use:
\`\`\`css
*, *::before, *::after {
  box-sizing: border-box;
}
\`\`\`
This ensures width and height properties define the outer border boundary, eliminating calculation surprises.

---
© 2026 MIHORA.TECH · All rights reserved.
`,
  },
  {
    id: 'res-git-cheat',
    title: 'Git & Terminal Quick Reference Cheat-Sheet',
    format: 'Markdown (.md)',
    filename: 'MIHORA-Git-Terminal-QuickReference.md',
    description:
      'Concise command reference for POSIX & Windows terminals, Git setup, daily feature branch workflow, and merge resolution.',
    sizeLabel: '12 KB',
    content: `# MIHORA.TECH — Git & Terminal Quick Reference

## Part 1: Cross-Platform Terminal Navigation

| Action | macOS / Linux (bash/zsh) | Windows (PowerShell) | Windows (cmd) |
|---|---|---|---|
| Print working directory | \`pwd\` | \`pwd\` or \`Get-Location\` | \`cd\` |
| List files | \`ls\` (or \`ls -la\`) | \`ls\` or \`dir\` | \`dir\` |
| Change directory | \`cd folder\` | \`cd folder\` | \`cd folder\` |
| Move up one level | \`cd ..\` | \`cd ..\` | \`cd ..\` |
| Create directory | \`mkdir name\` | \`mkdir name\` | \`mkdir name\` |
| Create empty file | \`touch file.ext\` | \`New-Item file.ext\` | \`type nul > file.ext\` |
| Open in VS Code | \`code .\` | \`code .\` | \`code .\` |

---

## Part 2: Essential Git Commands

### 1. First Time Setup
\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
\`\`\`

### 2. Daily Feature Branch Workflow
\`\`\`bash
# 1. Ensure you are on latest main
git switch main
git pull origin main

# 2. Create and switch to new feature branch
git switch -c feature/add-skills-section

# 3. Work on code, verify changes
git status
git diff

# 4. Stage and commit atomically
git add index.html style.css
git commit -m "feat(profile): add technical skills card"

# 5. Push to GitHub
git push -u origin feature/add-skills-section
\`\`\`

### 3. Verification & History
\`\`\`bash
git log --oneline --graph --decorate -n 10
git status -s
\`\`\`
`,
  },
  {
    id: 'res-starter-code',
    title: 'Profile Page Complete Starter Template',
    format: 'HTML/CSS/README Bundle',
    filename: 'mihora-week1-starter-project.html',
    description:
      'Clean, pre-structured starter code with index.html, style.css, and README ready to clone and customize for the lab.',
    sizeLabel: '10 KB',
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Developer Profile | MIHORA.TECH Starter</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: #0b1120;
      color: #e2e8f0;
      line-height: 1.6;
      padding: 3rem 1.5rem;
    }
    .container { max-width: 680px; margin: 0 auto; }
    header { text-align: center; margin-bottom: 2.5rem; }
    header h1 { font-size: 2.25rem; color: #38bdf8; margin-bottom: 0.5rem; }
    header p { color: #94a3b8; font-size: 1.1rem; }
    .card {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 1.75rem;
      margin-bottom: 1.5rem;
    }
    .card h2 { font-size: 1.3rem; color: #7dd3fc; margin-bottom: 0.75rem; border-bottom: 1px solid #334155; padding-bottom: 0.5rem; }
    .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
    .tag { background: #0f172a; border: 1px solid #38bdf8; color: #38bdf8; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem; font-family: monospace; }
    footer { text-align: center; margin-top: 3rem; color: #64748b; font-size: 0.875rem; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Your Name</h1>
      <p>Junior Full-Stack Developer · MIHORA.TECH Batch 2026</p>
    </header>

    <main>
      <section class="card">
        <h2>About Me</h2>
        <p>I am learning full-stack web development with Next.js, TypeScript, and AI tools. Passionate about clean architecture, responsive design, and version control discipline.</p>
        <div class="tags">
          <span class="tag">HTML5</span>
          <span class="tag">CSS3</span>
          <span class="tag">Git</span>
          <span class="tag">Next.js</span>
        </div>
      </section>

      <section class="card">
        <h2>Weekly Learning Goal</h2>
        <p>Week 1: Master the request/response lifecycle, configure professional VS Code workspace, and maintain a pristine Git commit history.</p>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 Your Name · Built for MIHORA.TECH Full-Stack Course</p>
    </footer>
  </div>
</body>
</html>`,
  },
  {
    id: 'res-exercises',
    title: 'Session 1 Practice Exercises & Self-Test',
    format: 'Markdown (.md)',
    filename: 'MIHORA-Week1-Exercises.md',
    description:
      '5 technical exercises with solutions: calculating box models, writing semantic markup, diagnosing Git merge diffs, and tracing network waterfalls.',
    sizeLabel: '14 KB',
    content: `# MIHORA.TECH — Week 1 Practice Exercises

## Exercise 1: CSS Box Model Calculation
Given the following CSS rule:
\`\`\`css
.modal-box {
  width: 450px;
  height: 200px;
  padding: 30px;
  border: 4px solid #3b82f6;
  margin: 20px auto;
  box-sizing: content-box;
}
\`\`\`
1. Calculate the total rendered width in pixels.
2. Calculate the total outer footprint width on screen (including margin).
3. If \`box-sizing: border-box\` is added, what becomes the total rendered width?

*Solution:*
1. Total Rendered Width = 450 + (30*2) + (4*2) = 450 + 60 + 8 = **518px**.
2. Outer Footprint = 518 + (20*2) = **558px**.
3. With border-box, total rendered width is strictly **450px** (content shrinks to 450 - 68 = 382px).

---

## Exercise 2: Refactoring "Div Soup" into Semantic HTML
Convert this non-semantic markup into clean HTML5:
\`\`\`html
<!-- Before -->
<div class="top-nav">
  <div class="title">My Blog</div>
  <div class="menu">
    <a href="/home">Home</a>
  </div>
</div>
<div class="content">
  <div class="post">
    <div class="post-title">Learning Git</div>
    <div class="post-body">Git is snapshot-based...</div>
  </div>
</div>
<div class="bottom">Copyright 2026</div>
\`\`\`

*Semantic Solution:*
\`\`\`html
<header>
  <h1>My Blog</h1>
  <nav>
    <a href="/home">Home</a>
  </nav>
</header>
<main>
  <article>
    <h2>Learning Git</h2>
    <p>Git is snapshot-based...</p>
  </article>
</main>
<footer>
  <p>&copy; 2026</p>
</footer>
\`\`\`
`,
  },
];

// EXTRA NOTES (Part 30)
export const EXTRA_NOTES: ExtraNoteItem[] = [
  {
    id: 'extra-1',
    number: '01',
    title: 'How the Web Actually Works (Under the Hood)',
    subtitle: 'From Physical Fiber Optics to the Critical Rendering Path',
    summary:
      'A deep dive into DNS root servers, Anycast IP routing, TCP 3-way handshake, TLS 1.3 encrypted key exchange, and how browsers parse DOM & CSSOM.',
    sections: [
      {
        heading: 'DNS Hierarchy & Anycast Routing',
        body: 'When your recursive resolver queries a domain, it queries the 13 logical root server clusters (named A through M), operated by organizations like ICANN, NASA, and Verisign. Anycast routing directs your packet to the geographically closest physical server instance among hundreds worldwide.',
      },
      {
        heading: 'TCP 3-Way Handshake & Window Sizing',
        body: 'Before sending HTTP bytes, client and server negotiate sequence numbers using SYN -> SYN-ACK -> ACK. TCP Slow Start then begins, exponentially probing available network bandwidth to prevent network congestion.',
        codeSnippet: `Client                       Server
  | ----- SYN (seq=100) ------> |
  | <--- SYN-ACK (ack=101) ---  |
  | ----- ACK (seq=101) ------> | [Connection Established]`,
      },
      {
        heading: 'The Critical Rendering Path (CRP)',
        body: 'The browser parses HTML incrementally into the Document Object Model (DOM). When it encounters external CSS, parsing continues while CSS is fetched in parallel. The CSS Object Model (CSSOM) is constructed. DOM and CSSOM merge into the Render Tree, which calculates geometry (Layout / Reflow) and draws pixels (Paint / Composite).',
      },
    ],
  },
  {
    id: 'extra-2',
    number: '02',
    title: 'Git Internals: Blobs, Trees & The Directed Acyclic Graph',
    subtitle: 'Understanding Git as a Content-Addressable Key-Value Store',
    summary:
      'How Git stores data inside the .git folder: SHA-1/SHA-256 hashes, Blob objects (file contents), Tree objects (directories), and Commit objects.',
    sections: [
      {
        heading: 'Git Objects Inside .git/objects',
        body: 'Git has 4 fundamental object types: Blob (stores file contents, no filename or permissions), Tree (stores directory entries linking filenames to blob hashes), Commit (points to a top-level tree, parent commit hashes, author, timestamp, and message), and Tag (annotated pointers).',
        codeSnippet: `# Inspect any Git object type and contents
git cat-file -t <hash>   # prints: blob | tree | commit
git cat-file -p <hash>   # pretty-prints object content`,
      },
      {
        heading: 'Branches are Just 41-Byte Text Files',
        body: 'In Git, a branch is not a heavy copy of your codebase. It is literally a single text file inside .git/refs/heads/ containing a 40-character commit hash! Creating a branch (git branch name) takes less than 1 millisecond.',
      },
      {
        heading: 'Detached HEAD State Demystified',
        body: 'HEAD normally points to a branch reference (e.g. ref: refs/heads/main). If you checkout a specific commit hash directly (git checkout a1b2c3d), HEAD points directly to a commit rather than a branch name. Commits made here are orphaned unless you assign them to a new branch.',
      },
    ],
  },
  {
    id: 'extra-3',
    number: '03',
    title: 'HTML Semantics & Modern CSS Layout Preview',
    subtitle: 'Preparing for Week 2: Modern CSS, Flexbox & JavaScript',
    summary:
      'Accessibility tree landmarks, screen reader navigation shortcuts, and a preview of CSS Flexbox and Grid that will be mastered in Week 2.',
    sections: [
      {
        heading: 'Accessibility Landmarks & Screen Reader Hotkeys',
        body: 'Screen reader users do not read web pages top-to-bottom like prose. They use hotkeys (such as "H" for headings, "D" for landmark divisions, "T" for tables) to jump directly between sections. Semantic tags like <nav>, <main>, and <aside> map directly into accessibility landmark roles.',
      },
      {
        heading: 'Looking Ahead: Week 2 Flexbox & Grid Roadmap',
        body: 'In Week 1 we focus on the foundational Box Model (content, padding, border, margin). In Week 2, we graduate to 1-dimensional layouts with CSS Flexbox (flex-direction, justify-content, align-items) and 2-dimensional layouts with CSS Grid (grid-template-columns, gap).',
      },
    ],
  },
];

// VS CODE ESSENTIAL SHORTCUTS MATRIX
export interface VSCodeShortcut {
  action: string;
  mac: string;
  win: string;
  category: 'Navigation' | 'Editing' | 'Terminal' | 'Refactoring';
  purpose: string;
}

export const VSCODE_SHORTCUTS: VSCodeShortcut[] = [
  {
    action: 'Open Command Palette',
    mac: 'Cmd + Shift + P',
    win: 'Ctrl + Shift + P',
    category: 'Navigation',
    purpose: 'Universal search for any VS Code setting, extension command, or tool action.',
  },
  {
    action: 'Quick File Search by Name',
    mac: 'Cmd + P',
    win: 'Ctrl + P',
    category: 'Navigation',
    purpose: 'Jump directly to index.html, style.css, or any project file without touching mouse.',
  },
  {
    action: 'Toggle Integrated Terminal',
    mac: 'Ctrl + `',
    win: 'Ctrl + `',
    category: 'Terminal',
    purpose: 'Instantly toggle the built-in terminal without switching away from your editor buffer.',
  },
  {
    action: 'Multi-Cursor Select Next Occurrence',
    mac: 'Cmd + D',
    win: 'Ctrl + D',
    category: 'Editing',
    purpose: 'Rename multiple matching tags or class names simultaneously with synchronized cursors.',
  },
  {
    action: 'Format Entire Document',
    mac: 'Shift + Option + F',
    win: 'Shift + Alt + F',
    category: 'Editing',
    purpose: 'Auto-align indentation, spaces, and clean formatting via Prettier / built-in formatter.',
  },
  {
    action: 'Move Line Up or Down',
    mac: 'Option + Up / Down',
    win: 'Alt + Up / Down',
    category: 'Editing',
    purpose: 'Reorder HTML elements or CSS properties effortlessly without copy/paste.',
  },
  {
    action: 'Split Editor Window Side-by-Side',
    mac: 'Cmd + \\',
    win: 'Ctrl + \\',
    category: 'Navigation',
    purpose: 'View index.html on the left and style.css on the right simultaneously.',
  },
];

// GIT EMERGENCY & REAL-WORLD FIXES
export interface GitEmergencyFix {
  problem: string;
  symptom: string;
  solutionCommand: string;
  explanation: string;
  safetyLevel: 'Safe' | 'Moderate' | 'Destructive Caution';
}

export const GIT_EMERGENCY_GUIDE: GitEmergencyFix[] = [
  {
    problem: 'Discard Unstaged Changes in a File',
    symptom: 'You made accidental test edits to index.html and want to revert to the last commit.',
    solutionCommand: 'git restore index.html',
    explanation: 'Discards uncommitted working directory edits and restores the file from the HEAD commit snapshot.',
    safetyLevel: 'Moderate',
  },
  {
    problem: 'Unstage a File (Undo "git add")',
    symptom: 'You accidentally ran "git add .gitignore" and want to remove it from staging without losing your file.',
    solutionCommand: 'git restore --staged .gitignore',
    explanation: 'Removes the file from the Staging Area (Index) while leaving all file content completely intact on disk.',
    safetyLevel: 'Safe',
  },
  {
    problem: 'Fix / Amend Last Commit Message',
    symptom: 'You committed with a typo in your message: "feat: intial prfile" and have NOT pushed yet.',
    solutionCommand: 'git commit --amend -m "feat: initial profile page scaffolding"',
    explanation: 'Updates the metadata of the most recent commit without creating a duplicate commit node.',
    safetyLevel: 'Safe',
  },
  {
    problem: 'Temporarily Shelve Work in Progress',
    symptom: 'Your mentor asks you to pull latest changes or switch branches, but your code is half-finished.',
    solutionCommand: 'git stash\n# After switching/pulling:\ngit stash pop',
    explanation: 'Stash sweeps dirty working changes into a temporary local shelf, restoring a clean working directory.',
    safetyLevel: 'Safe',
  },
  {
    problem: 'Resolving a Merge Conflict',
    symptom: 'Git outputs "CONFLICT (content): Merge conflict in index.html. Automatic merge failed."',
    solutionCommand: `# Open index.html, find <<<<<<< HEAD markers:
<<<<<<< HEAD (your current branch code)
  <h1>Muhammad Shan - Backend Lead</h1>
=======
  <h1>Muhammad Shan - Full-Stack Engineer</h1>
>>>>>>> feature/bio (incoming branch)
# Edit to keep desired lines, remove conflict markers, then:
git add index.html
git commit -m "chore: resolve merge conflict in profile title"`,
    explanation: 'Manually reconcile differing edits on the exact same line, remove Git conflict markers, stage, and commit.',
    safetyLevel: 'Moderate',
  },
];

// HTML5 SEMANTIC ARCHITECTURE MATRIX
export interface HTMLSemanticElement {
  tag: string;
  role: string;
  whenToUse: string;
  whenNotToUse: string;
  codeSnippet: string;
}

export const HTML_SEMANTIC_MATRIX: HTMLSemanticElement[] = [
  {
    tag: '<header>',
    role: 'banner (if top-level) or section header',
    whenToUse: 'Introductory content for the entire page or a specific <article>/<section>. Usually holds title, logo, or author metadata.',
    whenNotToUse: 'Do not use for a footer or standalone navigation bar that has no introductory heading.',
    codeSnippet: '<header>\n  <h1>Developer Profile</h1>\n  <p>Phase 1 Foundations</p>\n</header>',
  },
  {
    tag: '<nav>',
    role: 'navigation',
    whenToUse: 'Major navigation blocks containing links to key pages or in-page anchor links.',
    whenNotToUse: 'Do not wrap every group of links in <nav>. Footer copyright/terms links do not require <nav>.',
    codeSnippet: '<nav aria-label="Main Navigation">\n  <a href="#about">About</a>\n  <a href="#projects">Projects</a>\n</nav>',
  },
  {
    tag: '<main>',
    role: 'main',
    whenToUse: 'The central, unique content of the document. There MUST be only ONE visible <main> element per HTML page.',
    whenNotToUse: 'Never repeat inside sidebars, headers, footers, or sub-components.',
    codeSnippet: '<main>\n  <section id="bio">...</section>\n  <section id="skills">...</section>\n</main>',
  },
  {
    tag: '<section>',
    role: 'region (when labelled)',
    whenToUse: 'Thematic grouping of content, typically beginning with a heading (<h2>–<h6>).',
    whenNotToUse: 'Do not use as a generic styling wrapper (use <div> when purpose is purely visual layout).',
    codeSnippet: '<section id="skills">\n  <h2>Technical Skills</h2>\n  <ul><li>HTML5</li></ul>\n</section>',
  },
  {
    tag: '<article>',
    role: 'article',
    whenToUse: 'A self-contained, independently distributable composition (e.g. blog post, card, forum entry, widget).',
    whenNotToUse: 'Do not use for non-independent layout wrappers.',
    codeSnippet: '<article class="project-card">\n  <h3>Portfolio Site</h3>\n  <p>Deployed with GitHub Pages</p>\n</article>',
  },
  {
    tag: '<footer>',
    role: 'contentinfo (if page-level)',
    whenToUse: 'Author attribution, copyright notices, related links, or contact details at the end of a document or article.',
    whenNotToUse: 'Do not use at the top of a page or inside headings.',
    codeSnippet: '<footer>\n  <p>&copy; 2026 MIHORA.TECH · All rights reserved</p>\n</footer>',
  },
];

// CSS SPECIFICITY & CASCADE RULES
export interface SpecificityRule {
  selectorType: string;
  weightTuple: string;
  numericWeight: number;
  example: string;
  explanation: string;
}

export const CSS_SPECIFICITY_GUIDE: SpecificityRule[] = [
  {
    selectorType: 'Universal Selector / Inherited',
    weightTuple: '(0, 0, 0, 0)',
    numericWeight: 0,
    example: '* { box-sizing: border-box; }',
    explanation: 'Matches all elements; overridden by any other selector.',
  },
  {
    selectorType: 'Element & Pseudo-element',
    weightTuple: '(0, 0, 0, 1)',
    numericWeight: 1,
    example: 'h1 { color: #38bdf8; }',
    explanation: 'Matches specific HTML tag types directly.',
  },
  {
    selectorType: 'Class, Attribute & Pseudo-class',
    weightTuple: '(0, 0, 1, 0)',
    numericWeight: 10,
    example: '.card:hover { border-color: #60a5fa; }',
    explanation: 'Standard workhorse of maintainable modular CSS architecture.',
  },
  {
    selectorType: 'ID Selector',
    weightTuple: '(0, 1, 0, 0)',
    numericWeight: 100,
    example: '#main-header { padding: 2rem; }',
    explanation: 'High specificity; avoid relying on IDs for styling to prevent override battles.',
  },
  {
    selectorType: 'Inline Style Attribute',
    weightTuple: '(1, 0, 0, 0)',
    numericWeight: 1000,
    example: '<div style="color: red;">',
    explanation: 'Applied directly in HTML; only overridden by !important in stylesheets.',
  },
];

// HTTP STATUS CODES DICTIONARY
export interface HTTPStatusCodeItem {
  code: number;
  phrase: string;
  series: '1xx' | '2xx' | '3xx' | '4xx' | '5xx';
  meaning: string;
  practicalExample: string;
}

export const HTTP_STATUS_DICTIONARY: HTTPStatusCodeItem[] = [
  {
    code: 200,
    phrase: 'OK',
    series: '2xx',
    meaning: 'Request succeeded and resource is returned in the response payload.',
    practicalExample: 'Browser loads index.html successfully.',
  },
  {
    code: 201,
    phrase: 'Created',
    series: '2xx',
    meaning: 'Request succeeded and resulted in a new resource being created on the server.',
    practicalExample: 'User submits registration form; user account record inserted.',
  },
  {
    code: 301,
    phrase: 'Moved Permanently',
    series: '3xx',
    meaning: 'Target resource has been assigned a new permanent URI in the Location header.',
    practicalExample: 'http://mihora.tech automatically redirects to https://mihora.tech.',
  },
  {
    code: 304,
    phrase: 'Not Modified',
    series: '3xx',
    meaning: 'Cached copy in the browser is still fresh; server sends zero body bytes to save bandwidth.',
    practicalExample: 'Reloading style.css when ETag matches local cache.',
  },
  {
    code: 400,
    phrase: 'Bad Request',
    series: '4xx',
    meaning: 'Server cannot process request due to client syntax error or invalid payload.',
    practicalExample: 'Form submitted missing a required field or malformed JSON.',
  },
  {
    code: 401,
    phrase: 'Unauthorized',
    series: '4xx',
    meaning: 'Client lacks valid authentication credentials for the requested target.',
    practicalExample: 'Attempting to view /dashboard without a session token or login cookie.',
  },
  {
    code: 403,
    phrase: 'Forbidden',
    series: '4xx',
    meaning: 'Server understood credentials, but refuses authorization for this user role.',
    practicalExample: 'A standard student attempting to access instructor admin endpoints.',
  },
  {
    code: 404,
    phrase: 'Not Found',
    series: '4xx',
    meaning: 'The server cannot find the requested URL route or file on disk.',
    practicalExample: 'Typing https://mihora.tech/wrong-link.html.',
  },
  {
    code: 500,
    phrase: 'Internal Server Error',
    series: '5xx',
    meaning: 'Server encountered an unexpected condition that prevented fulfilling the request.',
    practicalExample: 'Uncaught JavaScript exception in server code or crashed database connection.',
  },
  {
    code: 502,
    phrase: 'Bad Gateway',
    series: '5xx',
    meaning: 'Reverse proxy server (e.g. Nginx, Cloudflare) received an invalid response from upstream server.',
    practicalExample: 'Next.js Node.js server crashed behind reverse proxy.',
  },
];

// JUNIOR DEVELOPER TECHNICAL INTERVIEW QUESTIONS FOR WEEK 1
export interface InterviewQuestion {
  question: string;
  category: 'Networking' | 'Git' | 'CSS' | 'HTML';
  interviewerIntent: string;
  juniorAnswer: string;
  seniorDistinction: string;
}

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    question: 'What happens when you type https://mihora.tech into your browser and press Enter?',
    category: 'Networking',
    interviewerIntent: 'Assesses whether the candidate understands the full stack from client to network to server and rendering.',
    juniorAnswer:
      'The browser checks local cache and initiates a DNS lookup to translate the domain mihora.tech into an IP address. Then a TCP 3-way handshake and TLS 1.3 cryptographic negotiation establish an encrypted connection over port 443. The browser sends an HTTP GET request. The web server returns an HTTP 200 OK response with the HTML byte stream. The browser tokenizes HTML into the DOM, parses CSS into the CSSOM, constructs the Render Tree, performs layout calculations, and paints pixels to the screen.',
    seniorDistinction:
      'Senior candidates mention TCP slow start, HTTP/2 multiplexing, DNS TTL caching layers, and the Critical Rendering Path paint pipeline.',
  },
  {
    question: 'What is the fundamental difference between Git and GitHub?',
    category: 'Git',
    interviewerIntent: 'Checks if the candidate understands local version control versus cloud collaboration hosting.',
    juniorAnswer:
      'Git is an open-source, local command-line distributed version control system created by Linus Torvalds that tracks directory snapshots in a local .git database. It works 100% offline. GitHub is a cloud-based hosting service and collaboration platform built around Git that provides remote repositories, Pull Requests, code review, issue tracking, CI/CD actions, and preview deployments.',
    seniorDistinction:
      'Senior candidates clarify that Git operates on an immutable Directed Acyclic Graph (DAG) of commit hashes, while GitHub adds enterprise governance, team access control, and pull request workflows.',
  },
  {
    question: 'Why do almost all modern production stylesheets set "box-sizing: border-box"?',
    category: 'CSS',
    interviewerIntent: 'Tests understanding of the CSS Box Model and layout predictability.',
    juniorAnswer:
      'Under the default CSS standard (content-box), setting width: 300px with 20px padding and 4px border causes the actual element to blow up to 348px wide, easily breaking grid columns and responsive layouts. With box-sizing: border-box, the width and height properties define the outer border boundary, so padding and border absorb inward without inflating the element.',
    seniorDistinction:
      'Senior candidates explain that applying *, *::before, *::after { box-sizing: border-box; } establishes mathematical predictability across all layout calculations.',
  },
  {
    question: 'Why does Git have an intermediate Staging Area instead of committing working files directly?',
    category: 'Git',
    interviewerIntent: 'Assesses atomic commit discipline and software craft.',
    juniorAnswer:
      'The staging area (or Index) decouples working directory edits from commit snapshots. It allows developers to craft precise, atomic commits. If you worked for 2 hours and edited 5 files (some fixing a bug, some formatting code), staging lets you selectively bundle only the bug-fix files into one commit ("fix: resolve navbar wrap"), and the formatting files into another ("chore: format styles"). This keeps git history clean and easy to revert.',
    seniorDistinction:
      'Senior candidates reference "git add -p" (patch mode) to stage individual hunks within the same file, keeping commit histories pristine.',
  },
];

