import React from "react";
import styles from '../ChartsComponents.module.css';

import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

import vendas from '../../../data/vendas.json';
import { formatarDados, VendaMes } from "../../../utils/formatData";

const dados: VendaMes[] = formatarDados();

const cores = ["#ba0606", "#5702b1", "#0bb102"];

function ChartLineComponent() {

    const produtos = Object.keys(dados[0]).filter((key) => key !== "mes");

    return (
        <div className={styles.chart}>
            <ResponsiveContainer>
                <LineChart data={dados} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {produtos.map((produto, i) => (
                        <Line
                            key={produto}
                            type="monotone"
                            dataKey={produto}
                            stroke={cores[i % cores.length]}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>

            <div className={styles.miniChart}>
                {vendas.map((produto, i) => (
                    <div key={produto.produto}>
                        <h4>{produto.produto}</h4>
                        <ResponsiveContainer width="100%" height={70}>
                            <LineChart data={produto.vendas} >
                                <XAxis dataKey="mes" hide/>
                                <YAxis hide />
                                <Line
                                    dataKey="quantidade"
                                    stroke={cores[i % cores.length]}
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChartLineComponent;