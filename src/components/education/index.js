import React from "react"
import style from "./index.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

const Education = () => {
    return (
        <section className={style.education} id="education">
            <h2>Education</h2>
            <div className="resume-item">
                <h3>Software University</h3>
                <div className="subheading">JavaScript Web Developer</div>
                <div className={style.years}>2018 - present</div>
                <div className={style.courses}>
                    <p>Completed courses:</p>
                    <p><a href="https://softuni.bg/certificates/details/84607/64c4ddc2" target="_blank">
                        <FontAwesomeIcon icon={faAward} className={style.icon} />&#160;
                        Diploma JavaScript Developer
                    </a></p>
                    <p><a href="https://softuni.bg/certificates/details/87297/17da9248" target="_blank">
                        <FontAwesomeIcon icon={faAward} className={style.icon} />&#160;
                        ReactJS
                    </a></p>
                    <p><a href="https://softuni.bg/certificates/details/84387/fb9feceb" target="_blank">
                        <FontAwesomeIcon icon={faAward} className={style.icon} />&#160;
                        JS Back-End
                    </a></p>
                    <p><a href="https://softuni.bg/certificates/details/80685/f5856558" target="_blank">
                        <FontAwesomeIcon icon={faAward} className={style.icon} />&#160;
                        VueJS
                    </a></p>
                    <p><a href="https://softuni.bg/certificates/details/77696/eb5883c4" target="_blank">
                        <FontAwesomeIcon icon={faAward} className={style.icon} />&#160;
                        Angular
                    </a></p>
                    <p><a href="https://softuni.bg/certificates/details/75098/295da70b" target="_blank">
                        <FontAwesomeIcon icon={faAward} className={style.icon} />&#160;
                        JavaScript Applications
                    </a></p>
                    <p><a href="https://softuni.bg/certificates/details/69073/923bc4bf" target="_blank">
                        <FontAwesomeIcon icon={faAward} className={style.icon} />&#160;
                        JavaScript Fundamentals
                    </a></p>
                    <p><a href="https://softuni.bg/certificates/details/59091/d6b2d25f" target="_blank">
                        <FontAwesomeIcon icon={faAward} className={style.icon} />&#160;
                        Programming Basics with C++
                    </a></p>
                </div>
            </div>

            <div className="resume-item">
                <h3>Technical University Varna</h3>
                <div className="subheading">Computer Systems and Technology, Bachelor's degree</div>
                <div className={style.years}>2015 - 2019</div>
                <ul>
                    <li>
                        Design and use of computer systems and networks
                    </li>
                    <li>
                        Dialog and office systems
                    </li>
                    <li>
                        System and application programming
                    </li>
                    <li>
                        Internet applications
                    </li>
                    <li>
                        Administration of local and internet networks
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Education
