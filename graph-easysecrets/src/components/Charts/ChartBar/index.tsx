import React from "react";
import styles from '../ChartsComponents.module.css';

import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

import vendas from '../../../data/vendas.json';
import { formatarDados, VendaMes } from "../../../utils/formatData";

const dados: VendaMes[] = formatarDados();

const cores = ["#ba0606", "#5702b1", "#0bb102"];

function ChartBarComponent() {

    const produtos = Object.keys(dados[0]).filter((key) => key !== "mes");

    return (
        <div className={styles.chart}>
            <ResponsiveContainer >
                <BarChart data={dados} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {produtos.map((produto, i) => (
                        <Bar
                            key={produto}
                            dataKey={produto}
                            fill={cores[i % cores.length]}
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>

            <div className={styles.miniChart}>
                    {vendas.map((produto, i) => (
                    <div key={produto.produto}>
                        <h4>{produto.produto}</h4>
                        <ResponsiveContainer width="100%" height={70}>
                            <BarChart data={produto.vendas} >
                                <XAxis dataKey="mes" hide/>
                                <YAxis hide />
                                <Bar
                                    dataKey="quantidade"
                                    fill={cores[i % cores.length]}
                                    strokeWidth={2}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChartBarComponent;