import React from "react";
import styles from './BackgroundChart.module.css';

import { ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
    { value: 20 },
    { value: 60 },
    { value: 30 },
    { value: 70 },
    { value: 30 },
    { value: 40 },
    { value: 30 },
    { value: 80 },
    { value: 40 },
    { value: 70 },
];

function BackgroundChart() {
    return (
        <div className={styles.backChart}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{left: 0, bottom: 5 }}>
                    <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#FE8A03"
                        strokeWidth={2} 
                        dot={false} 
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BackgroundChart;