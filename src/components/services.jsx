import styles from "../styles/services.module.css";
import Lottie from "lottie-react";
import designAnimation from '../../public/animations/design_animation.json'
import webDesignAnimation from '../../public/animations/webdesign_animation.json';
import softwareDevelopmentAnimation from '../../public/animations/software_development_animation.json'

export default function Services() {
    return (
        <div className={styles.servicesContainer}>

            
            <h1 className={styles.serviceTitle}>Our Services</h1>
      
    
            <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Design</h3>
                <div className={styles.serviceContent}>
                    <div className={styles.textContent}>
                   
                       <p> We blend creativity with functionality to deliver impactful design solutions tailored to your needs. Our expert team combines innovative aesthetics with user-centric principles to create stunning, effective designs.</p>
                    </div>
                    <Lottie 
                        animationData={designAnimation} 
                        loop={true}
                        autoplay={true}
                        style={{ width: 400, height: 400 }}
                        className={styles.imageRight}
                    />
                </div>  
            </div>
    
            <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Web Development</h3>
                <div className={styles.serviceContent}>
                    <div className={styles.textContent}>
                        <p>Our focus on performance, accessibility, and modern technologies ensures your site stands out, enhances engagement, and drives conversions.</p>
                    </div>
                    <Lottie 
                        animationData={webDesignAnimation} 
                        loop={true}
                        autoplay={true}
                        style={{ width: 400, height: 400 }}
                        className={styles.imageRight}
                    />
                </div>  
            </div>
    
            <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Software Development</h3>
                <div className={styles.serviceContent}>
                    <div className={styles.textContent}>
                         From mobile apps to complex enterprise systems, we leverage new technologies like generative AI to deliver robust, secure, and user-friendly software that drives innovation and growth for your business.
                    </div>
                    <Lottie 
                        animationData={softwareDevelopmentAnimation} 
                        loop={true}
                        autoplay={true}
                        style={{ width: 400, height: 400 }}
                        className={styles.imageRight}
                    />
                </div>
            </div>
        </div>
    );
}