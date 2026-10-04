export interface FlowStep {
  id: string;
  stepNumber: number;
  title: string;
  shortTitle: string;
  speakerOrType: string;
  timeRange?: string;
  badge: string;
}

export const MASTER_FLOW_STEPS: FlowStep[] = [
  {
    id: 'mod1',
    stepNumber: 1,
    title: 'How Browsers, Servers, HTTP and DNS Work Together',
    shortTitle: '01. Web & DNS',
    speakerOrType: 'Muhammad Shan',
    timeRange: '09:30 PM – 09:43 PM',
    badge: 'Module 01',
  },
  {
    id: 'mod2',
    stepNumber: 2,
    title: 'Setting Up VS Code, Node.js and the Terminal',
    shortTitle: '02. Dev Setup',
    speakerOrType: 'Muhammad Shan',
    timeRange: '09:43 PM – 09:56 PM',
    badge: 'Module 02',
  },
  {
    id: 'mod3',
    stepNumber: 3,
    title: 'Git Fundamentals: Commit, Branch, Push & GitHub PRs',
    shortTitle: '03. Git Core',
    speakerOrType: 'Muhammad Shan',
    timeRange: '09:56 PM – 10:09 PM',
    badge: 'Module 03',
  },
  {
    id: 'mod4',
    stepNumber: 4,
    title: 'HTML Structure, Semantic Elements & CSS Box Model',
    shortTitle: '04. HTML & CSS',
    speakerOrType: 'Muhammad Shan',
    timeRange: '10:09 PM – 10:21 PM',
    badge: 'Module 04',
  },
  {
    id: 'mod5',
    stepNumber: 5,
    title: 'Hands-on Lab Walkthrough & Homework Briefing',
    shortTitle: '05. Lab Briefing',
    speakerOrType: 'M. Matti Ul Hasnain & M. Shan',
    timeRange: '10:21 PM – 10:30 PM',
    badge: 'Module 05',
  },
  {
    id: 'profile-lab',
    stepNumber: 6,
    title: 'Guided Project: Personal Profile Page Build (13 Steps)',
    shortTitle: '06. Profile Lab',
    speakerOrType: 'Hands-on Coding',
    timeRange: 'Guided Build',
    badge: 'Step 06',
  },
  {
    id: 'experiment-lab',
    stepNumber: 7,
    title: 'Live HTML & CSS Code Playground Sandbox',
    shortTitle: '07. Code Sandbox',
    speakerOrType: 'Live Editor',
    timeRange: 'Interactive',
    badge: 'Step 07',
  },
  {
    id: 'homework',
    stepNumber: 8,
    title: 'Week 01 Homework: Dual-Section Expansion & Separate PRs',
    shortTitle: '08. Homework PRs',
    speakerOrType: 'GitHub Workflow',
    timeRange: 'Assignment',
    badge: 'Step 08',
  },
  {
    id: 'checkpoint',
    stepNumber: 9,
    title: 'Official Week 01 Checkpoint: URL-to-Page & Git Proof',
    shortTitle: '09. Checkpoint',
    speakerOrType: 'Proof of Mastery',
    timeRange: 'Verification',
    badge: 'Step 09',
  },
  {
    id: 'deliverable',
    stepNumber: 10,
    title: 'Official Deliverables Specification & 12-Item Checklist',
    shortTitle: '10. Deliverables',
    speakerOrType: 'Submission Hub',
    timeRange: 'Submission',
    badge: 'Step 10',
  },
  {
    id: 'cheat-sheets',
    stepNumber: 11,
    title: 'Lecture Notes, Cheat Sheets & Instant PDF Downloads',
    shortTitle: '11. PDF Notes',
    speakerOrType: 'Download Center',
    timeRange: 'Reference',
    badge: 'Step 11',
  },
  {
    id: 'completion',
    stepNumber: 12,
    title: 'Week 01 Foundations Completed: Mastery Verified!',
    shortTitle: '12. Finished',
    speakerOrType: 'MIHORA.TECH',
    timeRange: 'Complete',
    badge: 'Completed',
  },
];
