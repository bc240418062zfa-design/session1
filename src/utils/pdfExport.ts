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
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let cursorY = margin;

  // Header Banner
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, pageWidth, 28, 'F');

  // Title in header
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('MIHORA.TECH — Week 01: Foundations', margin, 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(148, 163, 184); // slate-400
  doc.text(
    `Full-Stack Web Development with AI • ${COURSE_INFO.instructors.map((i) => i.name).join(', ')}`,
    margin,
    18
  );
  doc.text(`Official Student Material • ${new Date().toLocaleDateString()}`, margin, 23);

  cursorY = 36;

  // Document Title
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  const splitTitle = doc.splitTextToSize(title, contentWidth);
  doc.text(splitTitle, margin, cursorY);
  cursorY += splitTitle.length * 7;

  // Category & Subtitle
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.text(`Category: ${category} | ${subtitle}`, margin, cursorY);
  cursorY += 8;

  // Divider
  doc.setDrawColor(203, 213, 225);
  doc.line(margin, cursorY, pageWidth - margin, cursorY);
  cursorY += 8;

  // Render Sections
  for (const sec of sections) {
    // Check page break for section heading
    if (cursorY > pageHeight - 35) {
      doc.addPage();
      cursorY = margin + 5;
    }

    // Section Heading
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(30, 41, 59); // slate-800
    doc.text(sec.heading, margin, cursorY);
    cursorY += 6;

    // Section Content
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(51, 65, 85); // slate-700
    const lines = doc.splitTextToSize(sec.content, contentWidth);

    for (const line of lines) {
      if (cursorY > pageHeight - 20) {
        doc.addPage();
        cursorY = margin + 5;
      }
      doc.text(line, margin, cursorY);
      cursorY += 5;
    }
    cursorY += 2;

    // Optional Code Snippet
    if (sec.codeSnippet) {
      const codeLines = doc.splitTextToSize(sec.codeSnippet, contentWidth - 8);
      const codeBoxHeight = codeLines.length * 4.5 + 6;

      if (cursorY + codeBoxHeight > pageHeight - 20) {
        doc.addPage();
        cursorY = margin + 5;
      }

      // Code background box
      doc.setFillColor(241, 245, 249); // slate-100
      doc.setDrawColor(203, 213, 225);
      doc.roundedRect(margin, cursorY, contentWidth, codeBoxHeight, 2, 2, 'FD');

      doc.setFont('courier', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);

      let codeY = cursorY + 5;
      for (const cLine of codeLines) {
        doc.text(cLine, margin + 4, codeY);
        codeY += 4.5;
      }

      cursorY += codeBoxHeight + 6;
      doc.setFont('helvetica', 'normal');
    }

    cursorY += 4;
  }

  // Footer on each page
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `MIHORA.TECH — Week 01 Foundations • Page ${p} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 8,
      { align: 'center' }
    );
  }

  const safeFilename = title.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
  doc.save(`Week01_MIHORA_${safeFilename}.pdf`);
}
