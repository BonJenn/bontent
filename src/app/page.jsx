'use client'

import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import styles from "./page.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Services from "../components/services";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const [showServices, setShowServices] = useState(false);

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

  const items = [
    { title: "Design", content: "Our design philosophy is rooted in creativity and functionality. We craft visually stunning and user-centric designs that elevate your brand and engage your audience. Our services include UI/UX Design, Graphic Design, Interactive Prototyping, Visual Identity Systems, Design Systems and Guidelines, and Creative Direction." },
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
                <span style={{ color: 'white' }}></span>We are a modern software development agency.
              </h1>
            </div>

            <div className={styles.hero_2}>
              <h1 className={styles.enhancedText}>
                <span style={{ fontWeight: '100' }}>Enhancing&nbsp;</span>
                <span className={styles.highlight}> brand presence </span>
                <span style={{ fontWeight: '100' }}> through&nbsp;</span>
                <span className={styles.highlight}> advanced digital solutions.&nbsp;</span>
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

            <div className={styles.hero_4}>
              <div className={styles.clients}>
                <h2>Clients</h2>
                <div className={styles.clients_list}>
                  <Image className={styles.client_RAP} src="/images/RAP_logo.png" alt="RAP" width={150} height={150} />
                  <Image className={styles.vistaview} src="/images/vistaview_logo.png" alt="Vistaview" width={300} height={150} />
                  <Image className={styles.bitcoin_brainiac} src="/images/bitcoin_brainiac_logo.png" alt="Bitcoin Brainiac" width={300} height={150} />
                </div>
              </div>
            </div>

            <div className={styles.hero_5}>
              <h2 className={styles.clients}>Products go Here</h2>
            </div>
          </>
        )}

        {showServices && <Services />}

        <Footer />
      </main>
    </>
  );
}