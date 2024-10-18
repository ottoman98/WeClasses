import { jsPDF } from "jspdf";
import { RefObject } from "react";

function generatePDF(contentRef: RefObject<HTMLDivElement>, title: string) {
  const doc = new jsPDF();

  if (contentRef.current) {
    doc.html(contentRef.current, {
      callback: function (doc) {
        doc.save(`${title}.pdf`);
      },
      x: 15,
      y: 15,
      width: 170, // Ancho objetivo en el documento PDF
      windowWidth: 650, // Ancho de la ventana en píxeles CSS
    });
  } else {
    console.error("contentRef.current is null");
  }
}

export default generatePDF;
