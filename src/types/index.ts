export type TeachingState =
  | 'CORE'
  | 'DEMO'
  | 'LIVE DEMO'
  | 'INTERACTIVE'
  | 'CHECKPOINT'
  | 'OPTIONAL'
  | 'EXTRA'
  | 'INSTRUCTOR ONLY';

export type SessionPhase = 'Orientation' | 'Instructional Core' | 'Closing';

export interface TimelineSegment {
  id: string;
  order: number;
  title: string;
  shortTitle: string;
  startTime: string; // e.g. "09:35 PM"
  endTime: string;   // e.g. "09:43 PM"
  durationMinutes: number; // strictly summed to 50 for the core
  cumulativeMinutes: number;
  phase: SessionPhase;
  teachingState: TeachingState;
  learningObjective: string;
  instructorAction: string;
  studentAction: string;
  demonstration: string;
  interactiveCheckpoint: string;
  optionalMaterial: string;
  transitionToNext: string;
  ifBehindCues: string;
  ifAheadCues: string;
  commonMisconceptions: string[];
  keyQuestions: string[];
}

export interface CheckpointOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface CheckpointItem {
  id: string;
  segmentId: string;
  topic: string;
  question: string;
  options: CheckpointOption[];
  conceptualContext: string;
}

export interface CompressionReportItem {
  id: string;
  originalTopic: string;
  originalTimeRange: string;
  originalMinutes: number;
  newTimeRange: string;
  newMinutes: number;
  status: 'CORE LIVE' | 'LIVE DEMO' | 'GUIDED PRACTICE' | 'POST-SESSION' | 'DEFERRED';
  rationale: string;
  movedTo: string;
}

export interface LabStep {
  stepNumber: number;
  title: string;
  commandOrFile?: string;
  description?: string;
  objective?: string;
  explanation?: string;
  codeSnippet?: string;
  expectedResult?: string;
  commonMistake?: string;
  completionCheck?: string;
  verificationTip: string;
  aiAssistPrompt?: string;
}

export interface DownloadableResource {
  id: string;
  title: string;
  format: string;
  filename: string;
  description: string;
  sizeLabel: string;
  content: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  category: 'Environment' | 'HTML/CSS' | 'Git Workflow' | 'Deployment' | 'Deliverable';
  detail: string;
}

export interface ExtraNoteItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  sections: {
    heading: string;
    body: string;
    codeSnippet?: string;
  }[];
}
