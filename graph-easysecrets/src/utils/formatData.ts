//Função responsável por formatar os dados do arquivos vendas.json para consumo em formato compatível com a biblioteca Recharts

import vendas from "../data/vendas.json";

export interface VendaMes {
    mes: string;
    [produto: string]: string | number;
}

export function formatarDados(): VendaMes[] {
    const meses = vendas[0].vendas.map((v) => v.mes);

    return meses.map((mes, index) => {
        const entrada: VendaMes = { mes };
        vendas.forEach((produto) => {
            entrada[produto.produto] = produto.vendas[index].quantidade;
        });
        return entrada;
    });
}