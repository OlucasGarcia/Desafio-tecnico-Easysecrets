import React from "react";
import styles from '../ChartsComponents.module.css';

import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area } from "recharts";

import vendas from '../../../data/vendas.json';
import { formatarDados, VendaMes } from "../../../utils/formatData";

const dados: VendaMes[] = formatarDados();

const cores = ["#ba0606", "#5702b1", "#0bb102"];

function ChartAreaComponent() {

    const produtos = Object.keys(dados[0]).filter((key) => key !== "mes");

    console.log(produtos)

    return (
        <div className={styles.chart}>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={dados} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {produtos.map((produto, i) => (
                        <Area
                            key={produto}
                            dataKey={produto}
                            stroke={cores[i % cores.length]}
                            fill={cores[i % cores.length]}
                        />
                    ))}
                </AreaChart>
            </ResponsiveContainer>

            <div className={styles.miniChart}>
                {vendas.map((produto, i) => (
                    <div key={produto.produto}>
                        <h4>{produto.produto}</h4>
                        <ResponsiveContainer width="100%" height={70}>
                            <AreaChart data={produto.vendas} >
                                <XAxis dataKey="mes" hide />
                                <YAxis hide />
                                <Area
                                    dataKey="quantidade"
                                    fill={cores[i % cores.length]}
                                    stroke={cores[i % cores.length]}
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChartAreaComponent;