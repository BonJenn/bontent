import React from 'react';
import styles from '../../styles/services/servicesHero.module.css';

const ServicesHero = ({ service = 'design-development' }) => {
    const heroContent = {
        'web-development': {
            title: 'Web Development Services',
            subtitle: 'Build your dream website with our expert development team.'
        },
        'design-development': {
            title: 'Design & Development Services',
            subtitle: 'Transform your vision into reality with our full-service solutions.'
        }
    };

    const content = heroContent[service] || heroContent['design-development'];

    return (
        <div className={styles.hero}>
            <h1>{content.title}</h1>
            <p>{content.subtitle}</p>
        </div>
    );
};

export default ServicesHero;

