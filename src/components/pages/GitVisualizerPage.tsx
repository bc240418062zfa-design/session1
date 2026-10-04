import React from 'react';
import { GitBranch, GitCommit, GitPullRequest, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { GitVisualizer } from '../GitVisualizer';

interface GitVisualizerPageProps {
  onNavigate: (moduleId: string) => void;
}

export const GitVisualizerPage: React.FC<GitVisualizerPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="git-visualizer"
        keyTakeaway="Use this visual state machine to internalize how file edits move from the Working Tree into the Staging Index via 'git add', become immutable Commit nodes via 'git commit', and sync to GitHub via 'git push'."
      />

      {/* Interactive Git State Machine Visualizer */}
      <GitVisualizer />

      <ModuleNavFooter currentModuleId="git-visualizer" onNavigate={onNavigate} />
    </div>
  );
};
