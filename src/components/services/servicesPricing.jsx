import React from 'react';
import styles from '../../styles/services/servicesPricing.module.css';

const ServicesPricing = ({ service = 'design-development' }) => {
    console.log('Current service:', service);

    const pricingDetails = {
        'web-development': {
            title: 'Website Development',
            price: '$4900/month',
            features: [
                'Unlimited requests',
                'Unlimited revisions',
                'Unlimited projects',
                'Fast turnaround',
                'Updates via our dashboard, Slack or Email',
                'Dedicated client manager',
                'Cancel anytime'
            ]
        },
        'design-development': {
            title: 'Unlimited Web development & design',
            price: '$5900/month',
            features: [
                'Unlimited requests',
                'Unlimited revisions',
                'Unlimited projects',
                'Fast turnaround',
                'Updates via our dashboard, Slack or email',
                'Dedicated client manager',
                'Cancel anytime'
            ]
        }
    };

    const pricing = pricingDetails[service] || pricingDetails['design-development'];
    console.log('Selected pricing:', pricing);

    return (
        <div className={styles['services-pricing']}>
            <div className={styles['pricing-card']}>
                <h1>{pricing.title}</h1>
                <h2>{pricing.price}</h2>
                <ul>
                    {pricing.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <button className={styles['select-button']}>Select</button>
                <a href="#" className={styles['demo-link']}>Get a demo</a>
            </div>
            <div className={styles['description']}>
                <h2>A high-quality website for your business that stands out.</h2>
                <p>Flowout is a team of skilled Webflow developers and designers who serve as your in-house team. Instead of paying and coordinating multiple people, we have them all in one place for you.</p>
                <p>The team at your disposal consists of experienced front-end developers and web designers. With our advanced knowledge, there is no challenge in delivering any request you have.</p>
                <p>World-leading startups like Jasper, Awning, Sendlane, Kajabi, Sequoia Capital and others trust us with all things Webflow, including superior development and design services.</p>
                <p>By opting in for unlimited Webflow development and design package, you will get a web development and design subscription that&apos;s reliable and prioritizes each and every one of your needs.</p>
            </div>
        </div>
    );
};

export default ServicesPricing;
