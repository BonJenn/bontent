"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";
import Header from "../components/header";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

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
    { title: "Content Creation", content: "Engage and inspire your audience with high-quality content. Our content creation services produce compelling, relevant, and shareable content that reflects your brand's voice and message, helping you connect with your audience and drive engagement across all platforms."},
    { title: "Social Media Management", content: "Boost your online presence with our comprehensive social media management services. We create and manage effective social media strategies that build your brand, engage your audience, and drive traffic to your site, ensuring your social media efforts align with your overall business goals." },
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero_1}>
          <h1>BONTENT is a global brand strategy & digital solutions agency</h1>
        </div>

        <div className={styles.hero_2}>
          <h1>Enhancing brand presence through smart tech solutions, artistic design, and expertly crafted digital products.</h1>
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
      </main>
    </>
  );
}
