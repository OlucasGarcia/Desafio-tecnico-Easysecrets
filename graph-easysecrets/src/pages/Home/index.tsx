import React from "react";
import styles from './Home.module.css';

import Logo from '../../img/logo.svg'
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/dashboard")
    }

    return (
        <div className={styles.home}>
            <div className={styles.logo}>
                <img src={Logo} alt="Easysecrets" />
                <p>raph <span>Easy</span>secrets</p>
            </div>
            <p className={styles.slogan}>"Transforme dados em insights"</p>
            <Button label="Visualizar gráficos" onClick={handleClick}/>
        </div>
    )
}

export default Home;