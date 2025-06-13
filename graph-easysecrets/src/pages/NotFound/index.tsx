import React from "react";
import styles from './NotFound.module.css'

import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }

    return(
        <div className={styles.page}>
            Página não encontrada
            <Button label="Voltar" onClick={handleClick}/>
        </div>
    )
}

export default NotFound;