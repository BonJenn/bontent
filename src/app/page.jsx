'use client'

import { useState, useRef } from "react";
import styles from "./page.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Services from "../components/services";
import ClientCard from '../components/ClientCard';
import Work from '../components/work';

export default function Home() {
  const [showServices, setShowServices] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showWork, setShowWork] = useState(false);

  const handleHomeClick = () => {
    setShowServices(false);
    setShowWork(false);
  };

  const handleServicesClick = () => {
    setShowServices(true);
    setShowWork(false); // Ensure work is hidden when services is shown
  };

  const handleWorkClick = () => {
    setShowWork(true);
    setShowServices(false);
  };

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };



  return (
    <>
      <Header 
        onHomeClick={handleHomeClick} 
        onServicesClick={handleServicesClick}
        onWorkClick={handleWorkClick}
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
          </div>
        
        </div>

        <div className={styles.newHero1}>
          <h3 className={styles.heroText}>
            Welcome to Bontent - your premier digital solutions partner.
            <br>
            </br> 
            <br>
            </br>
            We specialize in web design, branding, and software development for small to medium-sized businesses.
            </h3>
        </div>
     
     
        <div id="services" className={styles.servicesContainer}>
          <Services />
        </div>

        <div className={styles.hero_2}>
          <h1 className={styles.enhancedText}>
            <span style={{ fontWeight: '100' }}>Enhancing&nbsp;</span>
            <span className={styles.highlight}> brand presence </span>&nbsp;
            <span style={{ fontWeight: '100' }}>through&nbsp;</span>
            <span className={styles.highlight}> artistic design&nbsp;</span>
            <span style={{ fontWeight: '100' }}> and </span>&nbsp;
            <span className={styles.highlight}> digital products</span>.
          </h1>
        </div>



        <div id="work">
          <Work />
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