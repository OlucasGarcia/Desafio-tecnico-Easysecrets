import React from "react";
import styles from './Button.module.css'

interface ButtonProps {
    label: string;
    onClick: () => void;
}

function Button({ label, onClick }: ButtonProps) {
    return (
        <button className={styles.btn} onClick={onClick}>
            <p>
                {label}
            </p>
        </button>
    )
}

export default Button;