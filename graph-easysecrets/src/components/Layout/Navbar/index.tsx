import React from "react";
import styles from './Navbar.module.css';
import { Link, useLocation } from "react-router-dom";

import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

import Logo from '../../../img/logo.svg';
import useTheme from "../../../hooks/useTheme";

function Navbar() {

    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={styles.navbar}>
            <img src={Logo} alt="Easysecrets" />
            <span className={styles.btnDiv}>
                {location.pathname === "/dashboard" && (
                    <Link to="/" style={{ textDecoration: 'none' }}><p className={styles.navTxt}>Home</p></Link>
                )}
                <button onClick={toggleTheme} className={styles.btnTheme} >
                    {theme === 'ligth' ? (<> <FaMoon /> DARK </>) : (<> <FaSun /> LIGTH </>)}
                </button>
            </span>
        </div>
    )
}

export default Navbar;