import styles from "../styles/services.module.css";
import Image from 'next/image';

export default function Services() {
    return (
        <div className={styles.servicesContainer}>
            <h2>Our Services</h2>
    
            <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Branding</h3>
                <div className={styles.serviceContent}>
                    <div className={styles.textContent}>
                        <p>Our approach centers on the belief that brand and user experience (UX) are fundamentally interconnected. We specialize in developing and presenting cohesive digital brand identities across multiple channels. Our team provides strategic support and detailed guidelines to maintain brand uniformity.</p>
                        <ul>
                            <li>Comprehensive Brand Planning</li>
                            <li>Structural Brand Design</li>
                            <li>Crafting Brand Voice</li>
                            <li>Visual Branding Elements</li>
                            <li>Consistency Guidelines</li>
                            <li>Immersive Brand Interactions</li>
                        </ul>
                    </div>
                    <Image src="/images/bite_nites.png" alt="Bite Nites" width={400} height={400} className={styles.imageRight} />
                </div>  
            </div>
    
            <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Web Development</h3>
                <p className={styles.serviceContent}>Your online presence is your digital handshake. Make it a strong and memorable one with our top-notch web development services. We don&apos;t just build websites; we create digital experiences. Our team of expert developers and designers work collaboratively to produce responsive, visually appealing, and user-friendly websites that captivate visitors and convert them into loyal customers. We focus on performance and usability, ensuring your site loads quickly and navigates smoothly. With an emphasis on SEO and mobile optimization, we make sure your site is easily discoverable and accessible. Let&apos;s build a site that&apos;s as dynamic and engaging as your business, and watch as it enhances your digital footprint.</p>
            </div>
    
            <div className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>Software Development</h3>
                <p className={styles.serviceContent}>Got a groundbreaking idea? Let&apos;s make it happen. Our custom software development services take your concepts from imagination to reality with precision and expertise. We specialize in developing powerful, scalable solutions tailored to your unique business needs. Our process begins with understanding your vision and requirements. From there, we leverage cutting-edge technology and industry best practices to design, develop, and deploy software that delivers exceptional performance. Whether it&apos;s a mobile app, a complex enterprise solution, or anything in between, we ensure that the final product is robust, secure, and user-friendly. Together, we&apos;ll turn your vision into a digital masterpiece that drives innovation and growth.</p>
            </div>
        </div>
    );
}