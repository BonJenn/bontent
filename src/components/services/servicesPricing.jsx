import React from 'react';
import styles from '../../styles/services/servicesPricing.module.css';

// Define the ServicesPricing component
const ServicesPricing = () => {
    return (
        <div className={styles['services-pricing']}>
            <div className={styles['pricing-card']}>
                <h1>Unlimited Web development & design</h1>
                <h2>$5900/month</h2>
                <ul>
                    <li>Unlimited requests</li>
                    <li>Unlimited revisions</li>
                    <li>Unlimited projects</li>
                    <li>Fast turnaround</li>
                    <li>Updates via our dashboard, Slack or email</li>
                    <li>Dedicated client manager</li>
                    <li>Cancel anytime</li>
                </ul>
                <button className={styles['select-button']}>Select</button>
                <a href="#" className={styles['demo-link']}>Get a demo</a>
            </div>
            <div className={styles['description']}>
                <h2>A high-quality Webflow site that stands out</h2>
                <p>Flowout is a team of skilled Webflow developers and designers who serve as your in-house team. Instead of paying and coordinating multiple people, we have them all in one place for you.</p>
                <p>The team at your disposal consists of experienced front-end developers and web designers. With our advanced knowledge, there is no challenge in delivering any request you have.</p>
                <p>World-leading startups like Jasper, Awning, Sendlane, Kajabi, Sequoia Capital and others trust us with all things Webflow, including superior development and design services.</p>
                <p>By opting in for unlimited Webflow development and design package, you will get a web development and design subscription that&apos;s reliable and prioritizes each and every one of your needs.</p>
            </div>
        </div>
    );
};

// Export the component as default
export default ServicesPricing;
