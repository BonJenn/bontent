import React from 'react';
import styles from '../styles/about.module.css';

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutHero}>
                <h1>About Bontent</h1>
                <p>Building digital excellence through innovative solutions</p>
            </div>
            
            <div className={styles.aboutContent}>
                <section className={styles.missionSection}>
                    <h2>Our Mission</h2>
                    <p>At Bontent, we're dedicated to transforming businesses through cutting-edge web and software development. Our team of experts combines creativity with technical excellence to deliver solutions that drive growth and innovation.</p>
                </section>

                <section className={styles.valuesSection}>
                    <h2>Our Values</h2>
                    <div className={styles.valueGrid}>
                        <div className={styles.valueCard}>
                            <h3>Innovation</h3>
                            <p>Pushing boundaries with creative solutions and emerging technologies</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Excellence</h3>
                            <p>Delivering exceptional quality in every project we undertake</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Collaboration</h3>
                            <p>Working closely with clients to achieve their vision</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Integrity</h3>
                            <p>Building trust through transparency and honest communication</p>
                        </div>
                    </div>
                </section>

                <section className={styles.teamSection}>
                    <h2>Our Approach</h2>
                    <p>We believe in a collaborative approach that puts our clients' needs first. By combining technical expertise with creative thinking, we deliver solutions that not only meet but exceed expectations.</p>
                </section>
            </div>
        </div>
    );
}