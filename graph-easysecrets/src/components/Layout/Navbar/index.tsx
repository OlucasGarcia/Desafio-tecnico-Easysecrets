import React from "react";
import styles from './Navbar.module.css';

import Logo from '../../../img/logo.svg';
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className={styles.navbar}>
            <img src={Logo} alt="Easysecrets" />
            <Link to="/" style={{textDecoration: 'none'}}><p className={styles.navTxt}>Home</p></Link>
        </div>
    )
}

export default Navbar;