import React, { useState } from "react";
import styles from './ChartLayout.module.css';

//react icons imports
import { FaChartLine } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";

//chart components imports
import ChartLineComponent from "../../Charts/ChartLine";
import ChartBarComponent from "../../Charts/ChartBar";
import ChartAreaComponent from "../../Charts/ChartArea";

function ChartLayout() {

    const [tipo, setTipo] = useState<"linha" | "barra" | "area">("linha");

    return (
        <div className={styles.layout}>
            <p>
                Escolha o tipo de gráfico:
            </p>
            <div className={styles.btn}>
                <button onClick={() => setTipo("linha")}>
                    <FaChartLine
                        size={34}
                    />
                </button>
                <button onClick={() => setTipo("barra")}>
                    <FaChartBar
                        size={34}
                    />
                </button>
                <button onClick={() => setTipo("area")}>
                    <FaChartArea
                        size={34}
                    />
                </button>
            </div>

            <div className={styles.chartsDiv}>
                {tipo === "linha" && <ChartLineComponent />}
                {tipo === "barra" && <ChartBarComponent />}
                {tipo === "area" && <ChartAreaComponent />}
            </div>
        </div>
    )
}

export default ChartLayout;