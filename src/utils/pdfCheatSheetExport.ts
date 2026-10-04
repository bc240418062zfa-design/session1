import { jsPDF } from 'jspdf';
import { COURSE_INFO } from '../data/curriculumData';

export interface CheatSheetItem {
  key: string;
  detail: string;
  badge?: string;
  example?: string;
  caution?: string;
}

export interface CheatSheetSection {
  title: string;
  description?: string;
  items?: CheatSheetItem[];
  codeBlock?: string;
  proTip?: string;
  warning?: string;
}

export interface CheatSheetConfig {
  id: string;
  title: string;
  subtitle: string;
  category: 'Git & GitHub' | 'Terminal' | 'HTML5 & Semantics' | 'CSS & Cascade' | 'HTTP & Architecture' | 'VS Code';
  accentColor: [number, number, number]; // RGB
  badgeText: string;
  summary: string;
  sections: CheatSheetSection[];
}

export function generateCheatSheetPDF(config: CheatSheetConfig): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let cursorY = margin;

  const [accentR, accentG, accentB] = config.accentColor;

  // Helper: check page break
  const ensureSpace = (neededHeight: number) => {
    if (cursorY + neededHeight > pageHeight - 16) {
      doc.addPage();
      drawPageHeader(false);
      cursorY = 22;
    }
  };

  // Helper: draw page header
  const drawPageHeader = (isCover: boolean) => {
    if (isCover) {
      // Top Navy Header Bar
      doc.setFillColor(15, 23, 42); // slate-900
      doc.rect(0, 0, pageWidth, 28, 'F');

      // Accent color stripe on top
      doc.setFillColor(accentR, accentG, accentB);
      doc.rect(0, 0, pageWidth, 2.5, 'F');

      // Left Logo & Brand
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.text('MIHORA.TECH', margin, 11);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(148, 163, 184); // slate-400
      doc.text('Full-Stack Web Development with AI • Week 01 Foundations', margin, 17);
      doc.text(
        `Lead Mentors: ${COURSE_INFO.instructors.map((i) => i.name).join(' & ')}`,
        margin,
        22
      );

      // Right Category Pill
      const badgeW = 48;
      const badgeH = 7;
      const badgeX = pageWidth - margin - badgeW;
      const badgeY = 9;

      doc.setFillColor(accentR, accentG, accentB);
      doc.roundedRect(badgeX, badgeY, badgeW, badgeH, 1.5, 1.5, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.text(config.badgeText.toUpperCase(), badgeX + badgeW / 2, badgeY + 4.8, {
        align: 'center',
      });

      // Right Domain label
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(203, 213, 225);
      doc.text('sessions.study.mihora.tech', pageWidth - margin, 22, { align: 'right' });

      cursorY = 34;

      // Title & Summary Block
      doc.setTextColor(15, 23, 42);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      const titleLines = doc.splitTextToSize(config.title, contentWidth);
      doc.text(titleLines, margin, cursorY);
      cursorY += titleLines.length * 6.5;

      doc.setFont('helvetica', 'italic');
      doc.setFontSize(9.5);
      doc.setTextColor(71, 85, 105);
      doc.text(config.subtitle, margin, cursorY);
      cursorY += 5;

      // Summary Card
      doc.setFillColor(248, 250, 252); // slate-50
      doc.setDrawColor(226, 232, 240); // slate-200
      const summaryLines = doc.splitTextToSize(config.summary, contentWidth - 10);
      const summaryH = summaryLines.length * 4.2 + 6;
      doc.roundedRect(margin, cursorY, contentWidth, summaryH, 2, 2, 'FD');

      // Accent vertical left pill
      doc.setFillColor(accentR, accentG, accentB);
      doc.rect(margin, cursorY, 2, summaryH, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(51, 65, 85);
      doc.text(summaryLines, margin + 5, cursorY + 4.5);
      cursorY += summaryH + 6;
    } else {
      // Secondary header on continuation pages
      doc.setFillColor(15, 23, 42);
      doc.rect(0, 0, pageWidth, 14, 'F');

      doc.setFillColor(accentR, accentG, accentB);
      doc.rect(0, 0, pageWidth, 1.5, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.text(`MIHORA.TECH — ${config.title}`, margin, 9);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(148, 163, 184);
      doc.text('sessions.study.mihora.tech', pageWidth - margin, 9, { align: 'right' });
    }
  };

  // Draw first page header
  drawPageHeader(true);

  // Render each section
  for (const section of config.sections) {
    ensureSpace(24);

    // Section Header with Accent Bar
    doc.setFillColor(accentR, accentG, accentB);
    doc.rect(margin, cursorY, 3, 5, 'F');

    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(section.title.toUpperCase(), margin + 5, cursorY + 4);
    cursorY += 7;

    if (section.description) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      const descLines = doc.splitTextToSize(section.description, contentWidth);
      doc.text(descLines, margin, cursorY);
      cursorY += descLines.length * 4 + 2;
    }

    // Section Table of Items
    if (section.items && section.items.length > 0) {
      const col1W = 54;
      const col2W = contentWidth - col1W;

      // Table Header Row
      ensureSpace(12);
      doc.setFillColor(241, 245, 249);
      doc.rect(margin, cursorY, contentWidth, 6, 'F');

      doc.setTextColor(71, 85, 105);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.text('COMMAND / KEY / SELECTOR', margin + 3, cursorY + 4.2);
      doc.text('ACTION / DESCRIPTION / SPECIFICATION', margin + col1W + 3, cursorY + 4.2);
      cursorY += 6.5;

      let rowIndex = 0;
      for (const item of section.items) {
        const keyLines = doc.splitTextToSize(item.key, col1W - 6);
        const detailLines = doc.splitTextToSize(item.detail, col2W - 8);
        const textLinesCount = Math.max(keyLines.length, detailLines.length);
        const rowHeight = textLinesCount * 4 + 4;

        ensureSpace(rowHeight + 2);

        // Alternating row background
        if (rowIndex % 2 === 0) {
          doc.setFillColor(255, 255, 255);
        } else {
          doc.setFillColor(248, 250, 252);
        }
        doc.rect(margin, cursorY, contentWidth, rowHeight, 'F');

        // Draw light bottom divider
        doc.setDrawColor(241, 245, 249);
        doc.line(margin, cursorY + rowHeight, margin + contentWidth, cursorY + rowHeight);

        // Render Key in Courier Monospace
        doc.setFont('courier', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(15, 23, 42);
        doc.text(keyLines, margin + 3, cursorY + 3.8);

        // Render Detail in Helvetica Normal
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(51, 65, 85);
        doc.text(detailLines, margin + col1W + 3, cursorY + 3.8);

        // Badge if available
        if (item.badge) {
          const bW = doc.getTextWidth(item.badge) + 3;
          doc.setFillColor(accentR, accentG, accentB);
          doc.roundedRect(margin + contentWidth - bW - 2, cursorY + 1.5, bW, 4, 1, 1, 'F');
          doc.setTextColor(255, 255, 255);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(6);
          doc.text(item.badge, margin + contentWidth - bW / 2 - 2, cursorY + 4.2, {
            align: 'center',
          });
        }

        cursorY += rowHeight;
        rowIndex++;
      }
      cursorY += 4;
    }

    // Code block if provided
    if (section.codeBlock) {
      const codeLines = doc.splitTextToSize(section.codeBlock, contentWidth - 8);
      const codeBoxH = codeLines.length * 3.8 + 6;

      ensureSpace(codeBoxH + 4);

      // Dark Terminal Box
      doc.setFillColor(15, 23, 42); // slate-900
      doc.roundedRect(margin, cursorY, contentWidth, codeBoxH, 1.5, 1.5, 'F');

      // Top subtle terminal header dots
      doc.setFillColor(239, 68, 68); // red
      doc.circle(margin + 4, cursorY + 3, 1, 'F');
      doc.setFillColor(234, 179, 8); // yellow
      doc.circle(margin + 7.5, cursorY + 3, 1, 'F');
      doc.setFillColor(34, 197, 94); // green
      doc.circle(margin + 11, cursorY + 3, 1, 'F');

      doc.setFont('courier', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(226, 232, 240); // slate-200

      let lineY = cursorY + 6.5;
      for (const cLine of codeLines) {
        doc.text(cLine, margin + 4, lineY);
        lineY += 3.8;
      }

      cursorY += codeBoxH + 4;
    }

    // Pro Tip Callout Box
    if (section.proTip) {
      const tipLines = doc.splitTextToSize(`PRO TIP: ${section.proTip}`, contentWidth - 8);
      const tipH = tipLines.length * 3.8 + 5;

      ensureSpace(tipH + 4);

      doc.setFillColor(239, 246, 255); // blue-50
      doc.setDrawColor(191, 219, 254); // blue-200
      doc.roundedRect(margin, cursorY, contentWidth, tipH, 1.5, 1.5, 'FD');

      // Left blue accent bar
      doc.setFillColor(37, 99, 235);
      doc.rect(margin, cursorY, 2.5, tipH, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.8);
      doc.setTextColor(30, 64, 175); // blue-800
      doc.text(tipLines, margin + 5, cursorY + 3.8);

      cursorY += tipH + 4;
    }

    // Warning Callout Box
    if (section.warning) {
      const warnLines = doc.splitTextToSize(`WARNING: ${section.warning}`, contentWidth - 8);
      const warnH = warnLines.length * 3.8 + 5;

      ensureSpace(warnH + 4);

      doc.setFillColor(254, 242, 242); // red-50
      doc.setDrawColor(254, 202, 202); // red-200
      doc.roundedRect(margin, cursorY, contentWidth, warnH, 1.5, 1.5, 'FD');

      // Left red accent bar
      doc.setFillColor(220, 38, 38);
      doc.rect(margin, cursorY, 2.5, warnH, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.8);
      doc.setTextColor(153, 27, 27); // red-800
      doc.text(warnLines, margin + 5, cursorY + 3.8);

      cursorY += warnH + 4;
    }

    cursorY += 3;
  }

  // Two-pass footer: Page X of Y on all pages
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);

    // Subtle line above footer
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, pageHeight - 11, pageWidth - margin, pageHeight - 11);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `MIHORA.TECH — Week 01 Foundations • ${config.title}`,
      margin,
      pageHeight - 6.5
    );

    doc.text(
      `Page ${p} of ${totalPages}`,
      pageWidth - margin,
      pageHeight - 6.5,
      { align: 'right' }
    );
  }

  // Trigger download
  const safeFilename = `MIHORA_${config.id}_cheatsheet.pdf`;
  doc.save(safeFilename);
}
