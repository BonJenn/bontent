import React from 'react';
import styles from "../styles/header.module.css";

export default function Header({ onPricingClick, onLogoClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={onLogoClick}>
        <h1>bontent</h1>
      </div>

      <div className={styles.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li><button onClick={onPricingClick}>Pricing</button></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* Add other navigation items here */}
        </ul>
      </nav>
    </header>
  );
}
