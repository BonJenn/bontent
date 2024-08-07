'use client'

import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from "./page.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Services from "../components/services";
import ClientCard from '../components/ClientCard';

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const [showServices, setShowServices] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        if (openIndex === index) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = 0;
        }
      }
    });
  }, [openIndex]);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBookAppointment = () => {
    setAppointments([...appointments, selectedDate]);
    alert(`Appointment booked for ${selectedDate.toDateString()}`);
  };

  const items = [
    { title: "Branding", content: "Our approach centers on the belief that brand and user experience (UX) are fundamentally interconnected. We specialize in developing and presenting cohesive digital brand identities across multiple channels. Our team provides strategic support and detailed guidelines to maintain brand uniformity." },
    { title: "Web Development", content: "Transform your online presence with our expert web development services. We build responsive, user-friendly websites that not only look great but also provide a seamless experience for your visitors, enhancing engagement and driving conversions." },
    { title: "Software Development", content: "Turn your ideas into reality with our custom software development services. From concept to deployment, we create powerful, scalable software solutions tailored to meet your specific business needs, leveraging the latest technologies to deliver exceptional performance." },
  ];

  return (
    <>
      <Header onServicesClick={() => setShowServices(true)} />
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
                <span className={styles.highlight}> brand presence </span>
                <span style={{ fontWeight: '100' }}> through&nbsp;</span>
                <span className={styles.highlight}> artistic design&nbsp;</span>
                <span style={{ fontWeight: '100' }}> and </span>
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
                      >
                        {item.content}
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
                    name="RAP"
                    description="RAP is a leading company in... (add more details here)"
                    backgroundImage="/images/client_images/rec_and_parks.jpg"
                    width={150}
                    height={150}
                  />
                  <ClientCard 
                    logo="/images/vistaview_logo.png"
                    name="Vistaview"
                    description="Vistaview specializes in... (add more details here)"
                    width={300}
                    height={150}
                    backgroundImage="/images/client_images/vistaview_background.jpg"
                  />
                  <ClientCard 
                    logo="/images/bitcoin_brainiac_logo.png"
                    name="Bitcoin Brainiac"
                    description="Bitcoin Brainiac is an innovative... (add more details here)"
                    width={300}
                    height={150}
                    backgroundImage="/images/client_images/bitcoin_brainiac_background.jpg"
                  />
                </div>
              </div>
            </div>     

            <div className={styles.hero_5}>
              <p>Products go Here</p>
            </div>

          
        
          </>
        )}

        {showServices && <Services />}

        <Footer />
      </main>
    </>
  );
}