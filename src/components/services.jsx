import styles from "../styles/services.module.css";
import Lottie from "lottie-react";
import designAnimation from '../../public/animations/design_animation.json'
import webDesignAnimation from '../../public/animations/webdesign_animation.json';
import softwareDevelopmentAnimation from '../../public/animations/software_development_animation.json'

export default function Services() {
    return (
        <div className={styles.servicesContainer}>
            <h2>Our Services</h2>
    
            <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Design</h3>
                <div className={styles.serviceContent}>
                    <div className={styles.textContent}>
                        <p>Our design philosophy is rooted in creativity and functionality. We craft visually stunning and user-centric designs that elevate your brand and engage your audience. Our services include:</p>
                        <ul>
                            <li>UI/UX Design</li>
                            <li>Graphic Design</li>
                            <li>Interactive Prototyping</li>
                            <li>Visual Identity Systems</li>
                            <li>Design Systems and Guidelines</li>
                            <li>Creative Direction</li>
                        </ul>
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
                <h3 className={styles.serviceTitle}>Web Development</h3>
                <div className={styles.serviceContent}>
                    <div className={styles.textContent}>
                        <p>Transform your online presence with our expert web development services. We build responsive, user-friendly websites that not only look great but also provide a seamless experience for your visitors, enhancing engagement and driving conversions.</p>
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
                <h3 className={styles.serviceTitle}>Software Development</h3>
                <div className={styles.serviceContent}>
                    <div className={styles.textContent}>
                        <p>Got a groundbreaking idea? Let&apos;s make it happen. Our custom software development services take your concepts from imagination to reality with precision and expertise. We specialize in developing powerful, scalable solutions tailored to your unique business needs. Our process begins with understanding your vision and requirements. From there, we leverage cutting-edge technology and industry best practices to design, develop, and deploy software that delivers exceptional performance. Whether it&apos;s a mobile app, a complex enterprise solution, or anything in between, we ensure that the final product is robust, secure, and user-friendly. Together, we&apos;ll turn your vision into a digital masterpiece that drives innovation and growth.</p>
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