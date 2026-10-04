import React from 'react';
import { Code, CheckCircle2, AlertTriangle, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { LabWalkthrough } from '../LabWalkthrough';

interface ProfileLabPageProps {
  onNavigate: (moduleId: string) => void;
}

export const ProfileLabPage: React.FC<ProfileLabPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="profile-lab"
        keyTakeaway="Follow these 13 progressive milestones to build, style, commit, and deploy your personal profile page. Do not skip Git initialization or commit discipline — this project forms the basis of your homework and deliverable."
      />

      {/* 13-Milestone Guided Lab Walkthrough */}
      <LabWalkthrough />

      <ModuleNavFooter currentModuleId="profile-lab" onNavigate={onNavigate} />
    </div>
  );
};
