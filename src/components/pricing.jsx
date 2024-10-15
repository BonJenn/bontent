import React, { useState } from 'react';
import styles from "../styles/pricing.module.css";  // Adjust path if needed

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('monthly');
  const [activeHourlyTab, setActiveHourlyTab] = useState('10h');

  const pricingData = {
    monthly: [
      {
        title: "Website Development",
        price: "$4900/month",
        billed: "$58,800 Billed yearly",
        features: [
          "Unlimited requests",
          "Unlimited revisions",
          "Unlimited projects",
          "Fast turnaround",
          "Updates via our dashboard, Slack or Email",
          "Dedicated client manager",
          "Cancel anytime"
        ]
      },
      {
        title: "Website Design & Development",
        price: "$5900/month",
        billed: "$70,800 Billed yearly",
        features: [
          "Unlimited requests",
          "Unlimited revisions",
          "Unlimited projects",
          "Fast turnaround",
          "Updates via our dashboard, Slack or Email",
          "Dedicated client manager",
          "Cancel anytime"
        ]
      },
      {
        title: "Fullstack SaaS Development",
        price: "Let's chat",
        billed: "Custom plan",
        features: [
          "Everything in design & development plan plus",
          "White glove onboarding",
          "Priority support",
          "Multiple requests at a time",
          "All addons included"
        ]
      }
    ],
    quarterly: [
      {
        title: "Website Development",
        price: "$4400/month",
        billed: "$52,800 Billed yearly",
        features: [
          "Unlimited requests",
          "Unlimited revisions",
          "Unlimited projects",
          "Fast turnaround",
          "Updates via our dashboard, Slack or Email",
          "Dedicated client manager",
          "Cancel anytime"
        ]
      },
      {
        title: "Website Design & Development",
        price: "$5400/month",
        billed: "$64,800 Billed yearly",
        features: [
          "Unlimited requests",
          "Unlimited revisions",
          "Unlimited projects",
          "Fast turnaround",
          "Updates via our dashboard, Slack or Email",
          "Dedicated client manager",
          "Cancel anytime"
        ]
      },
      {
        title: "Fullstack SaaS Development",
        price: "Let's chat",
        billed: "Custom plan",
        features: [
          "Everything in design & development plan plus",
          "White glove onboarding",
          "Priority support",
          "Multiple requests at a time",
          "All addons included"
        ]
      }
    ],
    yearly: [
      {
        title: "Website Development",
        price: "$3900/month",
        billed: "$46,800 Billed yearly",
        features: [
          "Unlimited requests",
          "Unlimited revisions",
          "Unlimited projects",
          "Fast turnaround",
          "Updates via our dashboard, Slack or Email",
          "Dedicated client manager",
          "Cancel anytime"
        ]
      },
      {
        title: "Website Design & Development",
        price: "$4700/month",
        billed: "$56,400 Billed yearly",
        features: [
          "Unlimited requests",
          "Unlimited revisions",
          "Unlimited projects",
          "Fast turnaround",
          "Updates via our dashboard, Slack or Email",
          "Dedicated client manager",
          "Cancel anytime"
        ]
      },
      {
        title: "Fullstack SaaS Development",
        price: "Let's chat",
        billed: "Custom plan",
        features: [
          "Everything in design & development plan plus",
          "White glove onboarding",
          "Priority support",
          "Multiple requests at a time",
          "All addons included"
        ]
      }
    ]
  };

  const hourlyData = {
    '10h': { price: '$850/10h' },
    '25h': { price: '$2000/25h' },
    '50h': { price: '$3750/50h' }
  };

  return (
    <div className={styles.pricingContainer}>
      <div className={styles.pricingToggle}>
        <button onClick={() => setActiveTab('monthly')} id="monthly-btn">Monthly</button>
        <button onClick={() => setActiveTab('quarterly')} id="quarterly-btn">Quarterly <span>10% OFF</span></button>
        <button onClick={() => setActiveTab('yearly')} id="yearly-btn">Yearly <span>20% OFF</span></button>
      </div>
      
      <div className={styles.pricingCards}>
        {pricingData[activeTab].map((plan, index) => (
          <div key={index} className={styles.pricingCard}>
            <h3>{plan.title}</h3>
            <p>{plan.price}</p>
            {activeTab !== 'monthly' && (
              <p className={styles.billed}>{plan.billed}</p>  // Applied CSS module class here
            )}
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button>Select</button>
          </div>
        ))}
      </div>

      <div className={styles.hourlyContainer}>
        <div className={styles.hourlyDetails}>
          <div className={styles.hourlyIntro}>
            <h3>Hourly packages</h3>
            <p>Best if you need occasional tweaks, changes or new features in your Webflow project.</p>
            <a href="#">Learn more</a>
          </div>
          <div className={styles.hourlyFeatures}>
            <ul>
              <li>Competitive pricing</li>
              <li>More hours = lower price</li>
              <li>Design and development</li>
              <li>Updates via our dashboard</li>
            </ul>
          </div>
          <div className={styles.hourlyPrice}>
            <div className={styles.hourlyToggle}>
              <button onClick={() => setActiveHourlyTab('10h')}>10h</button>
              <button onClick={() => setActiveHourlyTab('25h')}>25h</button>
              <button onClick={() => setActiveHourlyTab('50h')}>50h</button>
            </div>
            <h2>{hourlyData[activeHourlyTab].price}</h2>
            <button>Select a package</button>
          </div>
        </div>
      </div>
    </div>
  );
}