'use client'

import { useState, useRef } from "react";
import styles from "./page.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Services from "../components/services";
import ClientCard from '../components/ClientCard';

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

  const handleHomeClick = () => {
    setShowServices(false);
  };

  const handleServicesClick = () => {
    setShowServices(true);
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

  // Define the items array
  const items = [
    {
      title: "Brand Strategy",
      content: "We develop comprehensive brand strategies that align with your business goals and resonate with your target audience."
    },
    {
      title: "Digital Solutions",
      content: "Our digital solutions encompass web development, mobile apps, and custom software to meet your specific needs."
    },
    {
      title: "Creative Design",
      content: "From logo design to full brand identity systems, we create visually stunning and cohesive designs."
    }
    // Add more items as needed
  ];

  return (
    <>
      <Header onHomeClick={handleHomeClick} onServicesClick={handleServicesClick} />
      <main className={styles.main}>
        {!showServices && (
          <>
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
              <h1 className={styles.heroText}>
                <span style={{ color: 'white' }}>BONTENT</span> is a brand strategy <span style={{ color: 'white' }}>&amp;</span> digital solutions agency.
              </h1>
            </div>

            <div className={styles.hero_2}>
              <h1 className={styles.enhancedText}>
                <span style={{ fontWeight: '100' }}>Enhancing&nbsp;</span>
                <span className={styles.highlight}> brand presence </span>&nbsp;
                <span style={{ fontWeight: '100' }}> through&nbsp;</span>
                <span className={styles.highlight}> artistic design&nbsp;</span>
                <span style={{ fontWeight: '100' }}> and </span>&nbsp;
                <span className={styles.highlight}> digital products</span>.
              </h1>
            </div>

            <div className={styles.hero_3}>
              <div className={styles.list_container}>
                <ul className={styles.list}>
                  {items.map((item, index) => (
                    <li 
                      key={index} 
                      className={`${styles.listItem} ${openIndex === index ? styles.open : ''}`} 
                      onClick={() => handleClick(index)}
                    >
                      <div className={styles.title}>
                        {item.title}
                        <span className={`${styles.arrow} ${openIndex === index ? styles.open : ''}`}>{'˅'}</span>
                      </div>
                      <div 
                        className={styles.content} 
                        ref={el => contentRefs.current[index] = el}
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      >
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
                
            {/* Clients */}

            <div className={styles.hero_4}>
              <div className={styles.clients}>
                <h2>Clients</h2>
                <div className={styles.clients_list}>
                  <ClientCard 
                    logo="/images/RAP_logo.png"
                    name="Los Angeles Recreation and Parks"
                    description="Pershing Square is Los Angeles Recreation and Parks' premiere event center in the heart of downtown Los Angeles. <br /> <br /> Bontent developed the event venue's web presence and brand identity."
                    width={150}
                    height={150}
                    backgroundImage="/images/client_images/rec_and_parks.jpg"
                    objectPosition="center 75%"
                  />
                <ClientCard 
                      logo="/images/vistaview_logo.png"
                      name="Vistaview Technical Solutions"
                      description="Vistaview is a video engineering services company specializing in special event filming and broadcasting.<br /> <br /> Bontent developed the company's web presence in addition to a custom internal software solution."
                      width={300}
                      height={150}
                      backgroundImage="/images/client_images/vistaview_background.jpg"
                      objectPosition="center 25%"
                    />

                  <ClientCard 
                    logo="/images/bitcoin_brainiac_logo.png"
                    name="Bitcoin Brainiac"
                    description="Bitcoin Brainiac is an online education platform for free Bitcoin education. <br /> <br /> Bontent developed the company's brand strategy, and built out their dynamic web education app which includes a video player, comments, quizzes, and more."
                    width={300}
                    height={150}
                    backgroundImage="/images/client_images/bitcoin_brainiac_background.jpg"
                    objectPosition="center 10%"
                  />

               
                </div>
                  <h3>View All</h3>
              </div>
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
          </>
        )}

        {showServices && <Services />}

        <Footer />
      </main>
    </>
  );
}