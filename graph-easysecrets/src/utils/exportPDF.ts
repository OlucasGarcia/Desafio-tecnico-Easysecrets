import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const exportarPDF = (elementId: string, nomeArquivo: string = `grafico${Math.floor(Math.random()*1000)}`) => {
    const input = document.getElementById(elementId) as HTMLElement;

    if (!input) {
        console.error(`Elemento com id '${elementId}' não encontrado.`);
        return;
    }

    html2canvas(input, {scale: 4}).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [canvas.width, canvas.height],
        });

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save(`${nomeArquivo}.pdf`);
    });
};

export default exportarPDF;