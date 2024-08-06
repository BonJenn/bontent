import styles from "../styles/footer.module.css";
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h4>BONTENT LLC.</h4>
                    <p>Los Angeles, CA</p>
                    <p>contact@bontent.co</p>
                </div>
                <div className={styles.footerSection}>
                    <h4>Company</h4>
                    <ul>
                        <li>Work</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h4>Engagement Models</h4>
                    <ul>
                        <li>Dedicated Development Squad</li>
                        <li>Product Strategy and Design</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h4>Services</h4>
                    <ul>
                        <li>SaaS App Development</li>
                        <li>Mobile App Development</li>
                        <li>Web App Development</li>
                        <li>Custom Software</li>
                        <li>MVP Development</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h4>Technologies</h4>
                    <ul>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© 2024 Bontent. All rights reserved.</p>
            </div>
        </footer>
    );
}
