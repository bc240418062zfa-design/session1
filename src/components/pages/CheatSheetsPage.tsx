import React from 'react';
import { Download, FileText, Printer, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { DeepReferenceGuides } from '../DeepReferenceGuides';
import { MaterialsSection } from '../MaterialsSection';

interface CheatSheetsPageProps {
  onNavigate: (moduleId: string) => void;
}

export const CheatSheetsPage: React.FC<CheatSheetsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 animate-fadeIn max-w-7xl mx-auto pb-16">
      <ModuleHeader
        moduleId="cheat-sheets"
        keyTakeaway="High-density, concise quick references for Git commands, Terminal navigation, HTML5 semantics, CSS Box Model math, and HTTP status codes. Downloadable as offline text files directly in your browser."
      />

      {/* Interactive Reference Handbooks */}
      <DeepReferenceGuides />

      {/* Downloadable Official Lecture Materials & Starter Repositories */}
      <MaterialsSection />

      <ModuleNavFooter currentModuleId="cheat-sheets" onNavigate={onNavigate} />
    </div>
  );
};
