import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDF = async () => {
  const flyerElement = document.getElementById('flyer-content');
  
  if (!flyerElement) {
    console.error('Flyer element not found');
    return;
  }

  try {
    // Create canvas from HTML
    const canvas = await html2canvas(flyerElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    // Calculate dimensions for A4
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    const pdf = new jsPDF({
      orientation: imgHeight > imgWidth ? 'portrait' : 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    
    // Save the PDF
    pdf.save('Kineziologie-OneBrain-Letak.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};
