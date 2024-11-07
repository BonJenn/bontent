import styles from "../styles/footer.module.css";
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h4>Bontent LLC.</h4>
                    <p>Made with love in Los Angeles, CA</p>
                    <p>contact@bontent.net</p>
                </div>
            </div>
      
        
        </footer>
    );
}
