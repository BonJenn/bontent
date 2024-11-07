import React from 'react';
import styles from '../styles/hero1.module.css';

export default function Hero1() {
  return (
    <div className={styles.hero_1}>
      <div className={`${styles.videoContainer} ${styles.overlayContainer}`}>
        <video 
          className={styles.video} 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          poster="/images/video-poster.jpg"
        >
          <source src="/images/bontent_animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}></div>
      </div>
      <h3 className={styles.heroText}>
        Building digital solutions that drive business growth.<br />
        Your success is our code.
      </h3>
    </div>
  );
}
