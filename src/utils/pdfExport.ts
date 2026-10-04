import { jsPDF } from 'jspdf';
import { COURSE_INFO } from '../data/curriculumData';

export interface PDFExportOptions {
  title: string;
  subtitle?: string;
  category?: string;
  sections: Array<{
    heading: string;
    content: string;
    codeSnippet?: string;
  }>;
}

export function exportNotesToPDF({
  title,
  subtitle = 'MIHORA.TECH • Week 01 Phase 1 Foundations',
  category = 'Lecture Notes & Reference',
  sections,
}: PDFExportOptions) {
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

  // Header Banner
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, pageWidth, 28, 'F');

  // Blue accent stripe
  doc.setFillColor(37, 99, 235); // blue-600
  doc.rect(0, 0, pageWidth, 2.5, 'F');

  // Title in header
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('MIHORA.TECH', margin, 11);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(148, 163, 184); // slate-400
  doc.text(
    `Full-Stack Web Development with AI • ${COURSE_INFO.instructors.map((i) => i.name).join(' & ')}`,
    margin,
    17
  );
  doc.text(
    `Official Student Study Resource • ${new Date().toLocaleDateString()}`,
    margin,
    22
  );

  // Domain link on right
  doc.setFontSize(7.5);
  doc.setTextColor(203, 213, 225);
  doc.text('sessions.study.mihora.tech', pageWidth - margin, 17, { align: 'right' });

  cursorY = 35;

  // Document Title
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  const splitTitle = doc.splitTextToSize(title, contentWidth);
  doc.text(splitTitle, margin, cursorY);
  cursorY += splitTitle.length * 6.5;

  // Category & Subtitle
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`Category: ${category} | ${subtitle}`, margin, cursorY);
  cursorY += 7;

  // Divider
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, cursorY, pageWidth - margin, cursorY);
  cursorY += 8;

  // Render Sections
  for (const sec of sections) {
    // Check page break for section heading
    if (cursorY > pageHeight - 35) {
      doc.addPage();
      // Secondary header on continuation pages
      doc.setFillColor(15, 23, 42);
      doc.rect(0, 0, pageWidth, 13, 'F');
      doc.setFillColor(37, 99, 235);
      doc.rect(0, 0, pageWidth, 1.5, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.text(`MIHORA.TECH — ${title}`, margin, 8.5);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(148, 163, 184);
      doc.text('sessions.study.mihora.tech', pageWidth - margin, 8.5, { align: 'right' });
      cursorY = 20;
    }

    // Section Heading with accent indicator
    doc.setFillColor(37, 99, 235);
    doc.rect(margin, cursorY, 2.5, 4.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(sec.heading.toUpperCase(), margin + 4.5, cursorY + 3.8);
    cursorY += 7;

    // Section Content
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.8);
    doc.setTextColor(51, 65, 85); // slate-700
    const lines = doc.splitTextToSize(sec.content, contentWidth);

    for (const line of lines) {
      if (cursorY > pageHeight - 20) {
        doc.addPage();
        cursorY = 20;
      }
      doc.text(line, margin, cursorY);
      cursorY += 4.5;
    }
    cursorY += 3;

    // Optional Code Snippet
    if (sec.codeSnippet) {
      const codeLines = doc.splitTextToSize(sec.codeSnippet, contentWidth - 8);
      const codeBoxHeight = codeLines.length * 3.8 + 6;

      if (cursorY + codeBoxHeight > pageHeight - 20) {
        doc.addPage();
        cursorY = 20;
      }

      // Dark code background box
      doc.setFillColor(15, 23, 42); // slate-900
      doc.roundedRect(margin, cursorY, contentWidth, codeBoxHeight, 1.5, 1.5, 'F');

      // Terminal dots
      doc.setFillColor(239, 68, 68);
      doc.circle(margin + 4, cursorY + 3, 1, 'F');
      doc.setFillColor(234, 179, 8);
      doc.circle(margin + 7.5, cursorY + 3, 1, 'F');
      doc.setFillColor(34, 197, 94);
      doc.circle(margin + 11, cursorY + 3, 1, 'F');

      doc.setFont('courier', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(226, 232, 240); // slate-200

      let codeY = cursorY + 6.5;
      for (const cLine of codeLines) {
        doc.text(cLine, margin + 4, codeY);
        codeY += 3.8;
      }

      cursorY += codeBoxHeight + 5;
      doc.setFont('helvetica', 'normal');
    }

    cursorY += 4;
  }

  // Footer on each page
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, pageHeight - 11, pageWidth - margin, pageHeight - 11);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `MIHORA.TECH — Week 01 Foundations • ${title}`,
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

  const safeFilename = title.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
  doc.save(`Week01_MIHORA_${safeFilename}.pdf`);
}
