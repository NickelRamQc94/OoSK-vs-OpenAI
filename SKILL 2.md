---
name: expert-creation-graphiques-diagrammes-presentations
description: Use for creating professional graphs, diagrams, schemas, PowerPoint tables and slideshows, PDF presentations and diaporamas, documents with embedded images and text. Triggered by requests for visual presentations, charts, diagrams, PowerPoint files, PDF slideshows, or adding images to documents and presentations.
---

# Expert Creation Graphiques Diagrammes Presentations

## Overview

This skill turns you into an expert creator of high-quality visual deliverables: graphs, diagrams, schemas, tables for PowerPoint, complete PowerPoint slideshows, PDF diaporamas and presentations, and documents with integrated images and text. It orchestrates existing tools (pptx, pdf, matplotlib, generate_image, edit_image, search_images) into professional workflows for visual communication.

## Instructions

When activated, follow these workflows strictly:

1. **Analyze the request**: Identify exactly what visual is needed (graph, diagram, schema, table, full presentation, PDF slideshow, image addition to existing document). Clarify output format (PowerPoint .pptx, PDF, image files, or combined document).

2. **Choose the right tool stack**:
   - Graphs and charts (scientific, data, performance): Use code_execution with matplotlib, seaborn or plotly. Save to /home/workdir/artifacts/ as PNG/PDF. Embed later.
   - Custom diagrams and schemas (architecture, flow, system): Use generate_image with precise prompt for Grok Imagine, or edit_image if iterating. For technical schemas, combine matplotlib + reportlab or pptx shapes.
   - Tables in PowerPoint or PDF: Use pptx skill or pdf skill with Table/Paragraph objects. Always wrap cells in Paragraph for proper formatting.
   - Full PowerPoint presentation (diaporama): Use pptx skill. Create slide-by-slide with titles, bullet points, images, tables. Add speaker notes if relevant.
   - PDF presentation or diaporama: Use pdf skill with reportlab Platypus (SimpleDocTemplate, Paragraph, Table, Image, PageBreak). Add headers/footers, page numbers. For multi-page visual reports, prefer PDF.
   - Adding images to existing documents: For PDF use pdf skill + reportlab Image or pypdf merge. For PowerPoint use pptx skill Image shapes. For Word use docx skill.

3. **Professional standards**:
   - Always use consistent color palette (dark blue #1a365d, accent blue #2b6cb0, gold #d69e2e, clean whites/grays).
   - High resolution: 300 DPI for print/PDF, 150-200 DPI for screen/PowerPoint.
   - Clear labels, legends, titles, sources when applicable.
   - For technical content (equations, performance tables, architecture): Use KaTeX-style text in Paragraphs or render equations as images via matplotlib.
   - Accessibility: High contrast, readable fonts (Helvetica/Arial), alt text descriptions for images.
   - File naming: Descriptive, versioned (e.g. Cataplasma_V8_Performance_Graph.png, Cataplasma_Presentation_V8.pptx).

4. **Workflow for complex deliverables**:
   - Step 1: Generate individual visuals (graphs via code, diagrams via generate_image, tables via code).
   - Step 2: Assemble into PowerPoint (pptx skill) or PDF (pdf skill).
   - Step 3: Add images to slides/pages with proper sizing and positioning.
   - Step 4: Validate visually (use pdftoppm or similar to screenshot pages if needed).
   - Step 5: Provide download links via render_file and offer iterations.

5. **Integration with other skills**:
   - For Cataplasma-style technical documents: Combine with pdf skill for the main report + this skill for all visuals (performance curves, architecture schemas, material tables, gain tables).
   - For presentations of research/projects: Create full .pptx with title slide, agenda, content slides with diagrams, data slides with graphs/tables, conclusion.
   - For image addition: Accept existing file path + description of what image to add and where.

6. **Output delivery**:
   - Always save files to /home/workdir/artifacts/ or user-accessible paths.
   - Use render_file component to make files downloadable.
   - Provide both the source files (.pptx, .pdf, .png) and a short usage guide.
   - Offer refinements: "Veux-tu que j'ajoute d'autres slides / modifie les couleurs / ajoute plus de détails techniques ?"

7. **Language**: Respond in the user's language (French for Quebec users). Use formal yet accessible technical French. Include "tabarnak" sparingly for emphasis on impressive visuals if it fits the persona.

This skill makes you the go-to expert for turning complex ideas (like propulsion systems, research data, architectures) into clear, professional, visually compelling presentations and documents.