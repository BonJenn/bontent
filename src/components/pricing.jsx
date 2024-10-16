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
        billed: "$13,200 Billed Quarterly",
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
        billed: "$15,900 Billed Quarterly",
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
        <button
          onClick={() => setActiveTab('monthly')}
          className={activeTab === 'monthly' ? styles.activeTab : ''}
        >
          Monthly
        </button>
        <button
          onClick={() => setActiveTab('quarterly')}
          className={activeTab === 'quarterly' ? styles.activeTab : ''}
        >
          Quarterly <span>10% OFF</span>
        </button>
        <button
          onClick={() => setActiveTab('yearly')}
          className={activeTab === 'yearly' ? styles.activeTab : ''}
        >
          Yearly <span>20% OFF</span>
        </button>
      </div>
      
      <div className={styles.pricingCards}>
        {pricingData[activeTab].map((plan, index) => (
          <div key={index} className={styles.pricingCard}>
            <h3>{plan.title}</h3>
            <p>{plan.price}</p>
            {activeTab !== 'monthly' && (
              <p className={styles.billed}>{plan.billed}</p>
            )}
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className={styles.dedicatedTeam}>
              <h4>Your Dedicated Team</h4>
              <ul>
                <li>
                  <span className={styles.circle}></span>
                  <div>
                    Web developer
                    <span>Works in React.js</span>
                  </div>
                </li>
                <li>
                  <span className={styles.circle}></span>
                  <div>
                    Project manager
                    <span>Helps managing your project</span>
                  </div>
                </li>
                <li>
                  <span className={plan.title === "Website Development" ? styles.crossCircle : styles.circle}></span>
                  <div>
                    UI/UX designer
                    <span>Works in Figma</span>
                  </div>
                </li>
                <li>
                  <span className={plan.title === "Website Development" || plan.title === "Website Design & Development" ? styles.crossCircle : styles.circle}></span>
                  <div>
                    Add more
                    <span>Additional team members</span>
                  </div>
                </li>
              </ul>
            </div>
            <button>Select</button>
          </div>
        ))}
      </div>

      <div className={styles.hourlyContainer}>
        <div className={styles.hourlyDetails}>
          <div className={styles.hourlyIntro}>
            <h3>Hourly packages</h3>
            <p>Best if you need occasional tweaks, changes or new features in your web project.</p>
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
