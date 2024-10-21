import React from 'react';
import styles from './Hero.module.css';

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
        <img src={imageUrl} alt="Hero" />
      </div>
    </div>
  );
}

