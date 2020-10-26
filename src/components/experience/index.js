import React from "react";
import styles from "./index.module.css";

const Experience = () => {
    return (
        <section className={styles.experience} id="experience">
            <h2>Experience</h2>
            {/* Flat Rock Technology*/}
            <div className="resume-item">
                <h3>Web and Data Administrator</h3>
                <div className="subheading"><b>Flat Rock Technology</b></div>
                <div className={styles.years}>2019 - 2020</div>
                <ul>
                    <li>
                        Provides a 'Buy Now' service to major brands
                    </li>
                    <li>
                        Ensure connection between brand products and their retailers - mapping
                    </li>
                    <li>
                        Stipulate Data Audit for the quality of the mapping process
                    </li>
                </ul>
            </div>

            {/* 411 Marketing */}
            <div className="resume-item">
                <h3>Data Entry Specialist Internship</h3>
                <div className="subheading"><b>411 Marketing</b></div>
                <div className={styles.years}>2018 - 2018</div>
                <ul>
                    <li>
                        Search Engine Optimization: On Page, Off Page
                    </li>
                    <li>
                        Creating sites with HTML and CSS
                    </li>
                    <li>
                        Use of Wordpress
                    </li>
                    <li>
                        Creation and optimization of Google business listings
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
