import React from 'react';
import styles from '../../styles/services/servicesPricing.module.css';

// Define the ServicesPricing component
const ServicesPricing = () => {
    return (
        <div className={styles['services-pricing']}>
            <div className={styles['pricing-card']}>
                <h1>Unlimited Webflow development</h1>
                <h2>$4900/month</h2>
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
                <h2>A top-performing Webflow site from your design</h2>
                <p>Flowout is a team of certified Webflow experts who work as your in-house developers. Any design you have in mind, we got all the capabilities to convert it into a high-quality Webflow project.</p>
                <p>Our team consists of skilled front-end developers assisting you with every custom request. With their advanced JavaScript knowledge, we are able to create a superior customer experience.</p>
                <p>Trusted by the world’s leading startups like Jasper, Awning, Sendlane, Kajabi, Sequoia Capital and others, we offer reliable and premium development services for each and every project.</p>
                <p>By signing up for a Webflow development retainer package, you will unlock unlimited development requests and revisions. We'll make your site an engaging experience for your customers.</p>
            </div>
        </div>
    );
};

// Export the component as default
export default ServicesPricing;
