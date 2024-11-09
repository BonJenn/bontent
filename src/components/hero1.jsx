import React, { useEffect, useState } from 'react';
import styles from '../styles/hero1.module.css';

export default function Hero1() {
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    // Show first line after component mounts
    setTimeout(() => setShowFirstLine(true), 500);
    // Show second line 1 second after first line
    setTimeout(() => setShowSecondLine(true), 1500);
  }, []);

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
        <span className={`${styles.textLine} ${showFirstLine ? styles.visible : ''}`}>
          Building digital solutions that drive business growth.
        </span>
        <br /><br />
        <span className={`${styles.textLine} ${showSecondLine ? styles.visible : ''}`}>
          Your <span className={styles.highlightWord}>success</span> is our <span className={styles.highlightWord}>code</span>.
        </span>
      </h3>
    </div>
  );
}
