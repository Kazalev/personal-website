import React, { Component } from "react";
import styles from "./index.module.css";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";


class Sidenav extends Component {
    // state = { isBarsSwitchOn: false }
    // toggleMenu = () => {
    //     this.setState({
    //         isBarsSwitchOn: !this.state.isBarsSwitchOn
    //     })
    // }

    render() {
        return (
            <div className={styles.sidenav} id="sidenav">
                <a className={styles.a}>
                    <Image src="../../me.jpg" height="200" width="170" roundedCircle className={styles.image} />
                </a>
                <ul className={styles.navList}>
                    {/* style={this.state.isBarsSwitchOn ? { display: "inline" } : { display: "none" }} */}
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
                        <a href="#projects">Projects</a>
                    </li>
                    {/* <button className={styles.btnBars} onClick={this.toggleMenu}>
                        <span>
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                    </button> */}
                </ul>
            </div>
        );
    }
};

export default Sidenav;
