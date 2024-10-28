import React from 'react';
import styles from '../../styles/services/servicesTestimonials.module.css';
// ServicesTestimonials Component
function ServicesTestimonials() {
    return (
        <div className={styles.servicesTestimonials}>
            {/* Testimonial 1 */}
            <div className={styles.testimonialContainer}>
                <div className={styles.testimonial}>
                    <p><strong>Name:</strong> Todd Matthews</p>
                    <p><strong>Company:</strong> BitcoinBrainiac.org</p>
                    <p><strong>Testimonial:</strong> Bontent&apos;s web development services have been a game-changer for us. Their team delivered a sleek, user-friendly website that has significantly improved our user engagement. Their attention to detail and commitment to excellence is unmatched.</p>
                </div>
            </div>

            {/* Testimonial 2 */}
            <div className={styles.testimonialContainer}>
                <div className={styles.testimonial}>
                    <p><strong>Name:</strong> John Benn</p>
                    <p><strong>Company:</strong> Public Assemblage Group</p>
                    <p><strong>Testimonial:</strong> Working with Bontent was a seamless experience. They understood our needs perfectly and delivered a website that exceeded our expectations. Their professionalism and expertise are truly commendable.</p>
                </div>
            </div>

            {/* Testimonial 3 */}
            <div className={styles.testimonialContainer}>
                <div className={styles.testimonial}>
                    <p><strong>Name:</strong> Erica Slater</p>
                    <p><strong>Company:</strong> Vistaview Technical Solutions</p>
                    <p><strong>Testimonial:</strong> Bontent transformed our online presence with their exceptional web development services. The new site is not only visually appealing but also highly functional. We couldn&apos;t be happier with the results.</p>
                </div>
            </div>

            {/* Add more content or components here */}
        </div>
    );
}

export default ServicesTestimonials;
