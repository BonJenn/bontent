import styles from "../styles/services.module.css";
import Lottie from "lottie-react";
import designAnimation from '../../public/animations/design_animation.json'
import webDesignAnimation from '../../public/animations/webdesign_animation.json';
import softwareDevelopmentAnimation from '../../public/animations/software_development_animation.json'

export default function Services() {
    return (
        <div className={styles.servicesContainer}>
      
    
            <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Design</h3>
                <div className={styles.serviceContent}>
                    <div className={styles.textContent}>
                        <p>We craft visually stunning and user-centric designs that elevate your brand and engage your audience. Our design services include UI/UX design, graphic design, interactive prototyping, visual identity systems, and creative direction.<br>
                        </br>
                        <br></br> 
                        We blend creativity with functionality to deliver impactful design solutions tailored to your needs.</p>
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
                        <p>Transform your online presence with our expert web development services. We build responsive, user-friendly websites that not only look great but also provide a seamless experience for your visitors. <br>
                        </br>
                        <br></br> 
                        Our focus on performance, accessibility, and modern technologies ensures your site stands out, enhances engagement, and drives conversions.</p>
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
                        <p>Turn your ideas into reality with our custom software development services. We specialize in creating powerful, scalable solutions tailored to your unique business needs.<br>
                        </br>
                        <br></br>
                         From mobile apps to complex enterprise systems, we leverage cutting-edge technology and best practices to deliver robust, secure, and user-friendly software that drives innovation and growth for your business.</p>
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