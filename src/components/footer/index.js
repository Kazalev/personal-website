import React from "react";
import styles from "./index.module.css";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <p className={styles.p}>Footer &copy; <span id="year">{new Date().getFullYear()}</span> by Kristian Kazalev for ReactJS Course</p>
        </div>
    );
};

export default Footer;
