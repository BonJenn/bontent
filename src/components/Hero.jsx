import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero({ title, subtitle, buttonText, imageUrl }) {
  return (
    <div className={styles.hero}>
      <div className={styles.textContainer}>
        <span className={styles.tagline}>WEB DEVELOPMENT</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className={styles.button}>{buttonText}</button>
      </div>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt="Hero" width={500} height={300} />
      </div>
    </div>
  );
}
