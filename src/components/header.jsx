import React, { useState } from 'react';
import styles from "../styles/header.module.css";
import DropdownMenu from './DropdownMenu';

export default function Header({ onPricingClick, onLogoClick }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

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
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="#services">Services</a>
            {showDropdown && <DropdownMenu />}
          </li>
          <li><a href="#about">About</a></li>
          <li><button onClick={onPricingClick}>Pricing</button></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
