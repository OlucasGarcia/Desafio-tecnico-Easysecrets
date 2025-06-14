//Função responsável por exportar gráficos em formato svg

const exportarPDF = (elementId: string, nomeArquivo: string = `grafico${Math.floor(Math.random() * 1000)}`) => {
    const svgElement = document.getElementById(elementId);

    if (!svgElement) {
        console.error(`Elemento com id '${elementId}' não encontrado.`);
        return;
    }

    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgElement);

    const svgBlob = new Blob(
        [`<?xml version="1.0" standalone="no"?>\n${source}`],
        { type: "image/svg+xml;charset=utf-8" }
    );

    const url = URL.createObjectURL(svgBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${nomeArquivo}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

export default exportarPDF;