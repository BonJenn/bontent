"use client";

import { useState, useRef, useEffect } from "react";
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
    { title: "Branding", content: "Your brand is your story, and we help you tell it compellingly. Our branding services craft a unique identity for your business, blending strategic insights with creative design to build a brand that resonates with your audience and stands out in the market." },
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
              <h1> <span style={{ color: 'gray' }}>BONTENT</span> is a brand strategy <span style={{ color: 'gray' }}>&</span> digital solutions agency.</h1>
            </div>

            <div className={styles.hero_2}>
              <h1>
                <span style={{ fontWeight: '100' }}>Enhancing</span>
                <span style={{ fontWeight: 'bold' }}> brand presence</span>
                <span style={{ fontWeight: '100' }}> through</span>
                <span style={{ fontStyle: 'italic' }}>artistic design</span>
                <span style={{ fontWeight: '100' }}> and</span>
                <span style={{ fontWeight: 'bold' }}> digital products</span>.
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
                  <img className={styles.client_RAP} src="/images/RAP_logo.png" alt="RAP" />
                  <img className={styles.vistaview} src="/images/vistaview_logo.png" alt="Vistaview" />
                  <img className={styles.bitcoin_brainiac} src="/images/bitcoin_brainiac_logo.png" alt="Bitcoin Brainiac" />
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
