import React from "react";
import styles from "./index.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer} id="footer">
            <p className={styles.p}>Footer &copy; <span id="year">{new Date().getFullYear()}</span> by Kristian Kazalev for ReactJS Course</p>
        </footer>
    );
};

export default Footer;
