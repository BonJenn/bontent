import React from 'react';
import styles from '../styles/slidingMenu.module.css';

export default function SlidingMenu({ isOpen, onClose }) {
  return (
    <div className={`${styles.slidingMenu} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeButton} onClick={onClose}>Close</button>
      <ul>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}
