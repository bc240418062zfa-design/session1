import React from 'react';
import { ModuleHeader } from '../ModuleHeader';
import { ModuleNavFooter } from '../ModuleNavFooter';
import { CheatSheetDownloadHub } from '../CheatSheetDownloadHub';
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
        keyTakeaway="High-density, publication-grade cheat-sheets and quick references for Git, VS Code, Terminal, HTTP status codes, HTML5 semantics, and CSS cascade math. Downloadable as beautifully formatted A4 PDFs or copyable markdown."
      />

      {/* Official Executive Cheat-Sheet Download Hub */}
      <CheatSheetDownloadHub />

      {/* Interactive Reference Handbooks */}
      <DeepReferenceGuides />

      {/* Downloadable Official Lecture Materials & Starter Repositories */}
      <MaterialsSection />

      <ModuleNavFooter currentModuleId="cheat-sheets" onNavigate={onNavigate} />
    </div>
  );
};
