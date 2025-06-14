import React, { useState } from "react";
import styles from './ChartLayout.module.css';

import { FaChartLine } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";

import ChartLineComponent from "../../Charts/ChartLine";
import ChartBarComponent from "../../Charts/ChartBar";
import ChartAreaComponent from "../../Charts/ChartArea";
import Button from "../../Button";

import exportarPDF from "../../../utils/exportPDF";

import { motion } from "framer-motion";

function ChartLayout() {

    const [tipo, setTipo] = useState<"linha" | "barra" | "area">("linha");

    return (
        <div className={styles.layout}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}
            >
                <p>
                    Escolha o tipo de gráfico:
                </p>
                <div className={styles.btn}>
                    <button
                        onClick={() => setTipo("linha")}
                        className={`${tipo === "linha" ? styles.active : styles.desactive}`} >
                        <FaChartLine size={34} />
                    </button>
                    <button
                        onClick={() => setTipo("barra")}
                        className={`${tipo === "barra" ? styles.active : styles.desactive}`} >
                        <FaChartBar size={34} />
                    </button>
                    <button
                        onClick={() => setTipo("area")}
                        className={`${tipo === "area" ? styles.active : styles.desactive}`} >
                        <FaChartArea size={34} />
                    </button>
                </div>

                <div className={styles.chartsDiv} id="grafico">
                    {tipo === "linha" && <><p>GRÁFICO DE LINHAS</p><ChartLineComponent /></>}
                    {tipo === "barra" && <><p>GRÁFICO DE BARRAS</p><ChartBarComponent /></>}
                    {tipo === "area" && <><p>GRÁFICO DE ÁREAS</p><ChartAreaComponent /></>}
                </div>
                <Button label="Exportar como PDF" onClick={() => exportarPDF('grafico')} />
            </motion.div>
        </div>
    )
}

export default ChartLayout;