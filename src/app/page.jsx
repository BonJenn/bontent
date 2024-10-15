'use client'

import { useState, useRef } from "react";
import styles from "./page.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Services from "../components/services";
import ClientCard from '../components/ClientCard';
import Work from '../components/work';
import Pricing from '../components/pricing'; // Assuming you have a Pricing component

export default function Home() {
  const [showServices, setShowServices] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleHomeClick = () => {
    setShowServices(false);
    setShowWork(false);
    setShowPricing(false);
  };

  const handleServicesClick = () => {
    setShowServices(true);
    setShowWork(false);
    setShowPricing(false);
  };

  const handleWorkClick = () => {
    setShowWork(true);
    setShowServices(false);
    setShowPricing(false);
  };

  const handlePricingClick = () => {
    setShowPricing(true);
    setShowServices(false);
    setShowWork(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header 
        onHomeClick={handleHomeClick} 
        onServicesClick={handleServicesClick}
        onWorkClick={handleWorkClick}
        onPricingClick={handlePricingClick}
      />
      <main className={styles.main}>
        <div className={styles.hero_1}>
          <div className={`${styles.videoContainer} ${styles.overlayContainer}`}>
            <video 
              className={styles.video} 
              autoPlay 
              loop 
              muted 
            >
              <source src="/images/bontent_animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}></div>
          </div>
          <h3 className={styles.heroText}>
            Building digital solutions that drive business growth. Your success is our code.
          </h3>
        </div>

        {showWork && (
          <div id="work">
            <Work />
          </div>
        )}

        {showServices && (
          <div id="services" className={styles.servicesContainer}>
            <Services />
          </div>
        )}

        {showPricing && (
          <div id="pricing" className={styles.pricingContainer}>
            <Pricing />
          </div>
        )}

        <div className={styles.hero_2}>
          <h1 className={styles.enhancedText}>
            <span style={{ fontWeight: '100' }}>Enhancing&nbsp;</span>
            <span className={styles.highlight}> brand presence </span>&nbsp;
            <span style={{ fontWeight: '100' }}> through&nbsp;</span>
            <span className={styles.highlight}> artistic design&nbsp;</span>
            <span style={{ fontWeight: '100' }}> and </span>&nbsp;
            <span className={styles.highlight}>digital products</span>.
          </h1>
        </div>


  

        <div className={styles.hero_5}>
          <div className={styles.contactSection}>
            <h2>Have a Project?</h2>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
