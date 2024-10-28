import React from 'react';
import styles from '../../styles/services/servicesTestimonials.module.css';
// ServicesTestimonials Component
function ServicesTestimonials({ testimonials }) {
    return (
        <div className={styles.servicesTestimonials}>
            {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialContainer}>
                    <div className={styles.testimonial}>
                        <p><strong>Name:</strong> {testimonial.name}</p>
                        <p><strong>Company:</strong> {testimonial.company}</p>
                        <p><strong>Testimonial:</strong> {testimonial.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServicesTestimonials;
