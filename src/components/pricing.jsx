import React, { useState } from 'react';
import styles from "../styles/pricing.module.css";  // Adjust path if needed
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const handleCheckout = async (plan, billingInterval) => {
  try {
    const stripe = await stripePromise;
    
    // Track the checkout initiation
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'begin_checkout', {
        currency: 'USD',
        value: parseFloat(plan.price.replace(/[^0-9.]/g, '')),
        items: [{
          name: plan.title,
          price: parseFloat(plan.price.replace(/[^0-9.]/g, '')),
          quantity: 1
        }]
      });
    }

    // Skip checkout for "Let's chat" plans
    if (plan.price === "Let's chat") {
      console.log('Custom plan selected');
      return;
    }

    console.log('Plan:', plan); // Debug log
    console.log('Billing Interval:', billingInterval); // Debug log

    // Safely extract the monthly price
    let monthlyPrice;
    if (typeof plan.price === 'string') {
      monthlyPrice = parseFloat(plan.price.replace(/[^0-9.]/g, ''));
    } else {
      console.error('Unexpected price format:', plan.price);
      throw new Error('Invalid price format');
    }

    console.log('Monthly Price:', monthlyPrice); // Debug log

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan: {
          title: plan.title,
          monthlyPrice: monthlyPrice
        },
        billingInterval
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create checkout session');
    }

    const { sessionId } = await response.json();

    if (!sessionId) {
      throw new Error('No session ID returned from the server');
    }

    const result = await stripe.redirectToCheckout({
      sessionId: sessionId
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('monthly');
  const [activeHourlyTab, setActiveHourlyTab] = useState('10h');
  const [includePrioritySupport, setIncludePrioritySupport] = useState(false);

  const pricingData = {
    monthly: [
      {
        title: "Website Development",
        price: "$9,800/month",
        billed: "$117,600 Billed yearly",
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
        price: "$11,800/month",
        billed: "$141,600 Billed yearly",
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
        price: "$8,800/month",
        billed: "$26,400 Billed Quarterly",
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
        price: "$10,800/month",
        billed: "$31,800 Billed Quarterly",
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
        price: "$7,800/month",
        billed: "$93,600 Billed yearly",
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
        price: "$9,400/month",
        billed: "$112,800 Billed yearly",
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
    '10h': { price: '$1,700/10h' },
    '25h': { price: '$4,000/25h' },
    '50h': { price: '$7,500/50h' }
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
                {plan.title !== "Website Development" && (
                  <li>
                    <span className={styles.circle}></span>
                    <div>
                      UI/UX designer
                      <span>Works in Figma</span>
                    </div>
                  </li>
                )}
                {plan.title === "Fullstack SaaS Development" && (
                  <li>
                    <span className={styles.circle}></span>
                    <div>
                      Add more
                      <span>Additional team members</span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <button onClick={() => handleCheckout(plan, activeTab)}>
              Select
            </button>
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
