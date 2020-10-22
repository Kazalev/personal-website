import React from "react";
import style from "./index.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const About = () => {
    return (
        <section className={style.about} id="about">
            <h1>Kristian <span className={style.text}>Kazalev</span></h1>
            <div className={style.subheading}>Sofia, Bulgaria · <a href="mailto:kristian.kazalev@gmail.com">kristian.kazalev@gmail.com</a>
            </div>
            <div className={style.info}>
                <p>I'm young passionate web developer with bachelor's degree in computer systems and technologies and diploma from Software University for being a JavaScript Web Developer.</p>
                <p>Currently I'm in process of relocation from Varna to Sofia and I'm looking for my first front-end position in the world of programming.</p>
                <p>My working experience so far is year and four months in a perspective and friendly company called Flat Rock Technology. There I had a great time and I’ve learnt a lot of interesting and useful stuff but now it's time for me to move forward and chase my real passion which is web development.</p>
                <p>So if you are looking for serious and responsible junior front-end web developer I will be more than happy to contact me in any form and discuss our future collaboration.</p>
            </div>
            <ul className={style.socialIcons}>
                <li>
                    <a href="https://www.facebook.com/kristian.kazalev" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/kristian.kazalev" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kristian-kazalev-456548182" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Kazalev" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default About;
