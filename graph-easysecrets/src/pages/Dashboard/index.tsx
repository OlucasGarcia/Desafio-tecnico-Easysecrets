import React from "react";
import styles from './Dashboard.module.css';

//imports de componentes
import ChartLayout from "../../components/Layout/ChartLayout";
import Navbar from "../../components/Layout/Navbar";

function Dashboard() {
    return (
        <div className={styles.page}>
            <Navbar />
            <ChartLayout />
        </div>
    )
}

export default Dashboard;