import React from "react";
import styles from "./index.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";


const Sidenav = () => {
    return (
        <div className={styles.sidenav} id="sidenav">
            <a className={styles.a}>
                <Image src="../../me.jpg" height="170" width="165" roundedCircle className={styles.border} />
            </a>
        </div>
    );
};

export default Sidenav;
