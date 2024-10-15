import React from 'react';
import styles from '../styles/hero2.module.css';

export default function Hero2() {
  return (
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
  );
}