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
import exportarPDF from "../../../utils/exportPDF";
import Button from "../../Button";

function ChartLayout() {

    const [tipo, setTipo] = useState<"linha" | "barra" | "area">("linha");

    return (
        <div className={styles.layout}>
            <p>
                Escolha o tipo de gráfico:
            </p>
            <div className={styles.btn}>
                <button 
                onClick={() => setTipo("linha")}
                className={`${tipo === "linha" ? styles.active : ''}`}
                >
                    <FaChartLine
                        size={34}
                    />
                </button>
                <button 
                onClick={() => setTipo("barra")}
                className={`${tipo === "barra" ? styles.active : ''}`}
                
                >
                    <FaChartBar
                        size={34}
                    />
                </button>
                <button 
                onClick={() => setTipo("area")}
                className={`${tipo === "area" ? styles.active : ''}`}
                
                >
                    <FaChartArea
                        size={34}
                    />
                </button>
            </div>
            <div className={styles.chartsDiv} id="grafico">
                {tipo === "linha" && <><p>GRÁFICO DE LINHAS</p><ChartLineComponent /></>}
                {tipo === "barra" && <><p>GRÁFICO DE BARRAS</p><ChartBarComponent /></>}
                {tipo === "area" && <><p>GRÁFICO DE ÁREAS</p><ChartAreaComponent /></>}
            </div>
            <Button label="Exportar como PDF" onClick={() => exportarPDF('grafico')}/>
        </div>
    )
}

export default ChartLayout;