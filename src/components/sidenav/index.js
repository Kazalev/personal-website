import React from "react";
import styles from "./index.module.css";
import { Image } from "react-bootstrap";


const Sidenav = () => {
    return (
        <div className={styles.sidenav} id="sidenav">
            <a className={styles.a}>
                <Image src="../../me.jpg" height="200" width="170" rounded className={styles.border} />
            </a>
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#certifications">Certifications</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidenav;
