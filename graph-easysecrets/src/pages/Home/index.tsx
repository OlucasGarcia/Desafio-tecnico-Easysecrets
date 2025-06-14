import React from "react";
import styles from './Home.module.css';
import { useNavigate } from "react-router-dom";

import Logo from '../../img/logo.svg'
import Button from "../../components/Button";
import Navbar from "../../components/Layout/Navbar";
import BackgroundChart from "../../components/Layout/BackgroundChart";

import { motion } from "framer-motion";

function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/dashboard")
    }

    return (
        <div className={styles.home}>
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}
            >
                <div className={styles.logo}>
                    <img src={Logo} alt="Easysecrets" />
                    <p>raph <span>Easy</span>secrets</p>
                </div>
                <p className={styles.slogan}>"Transforme dados em insights"</p>
                <Button label="Visualizar gráficos" onClick={handleClick} />
            </motion.div>
            <BackgroundChart />
        </div>
    )
}

export default Home;