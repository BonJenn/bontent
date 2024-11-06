import React, { useState } from 'react';
import styles from "../styles/header.module.css";
import DropdownMenu from './DropdownMenu';
import SlidingMenu from './SlidingMenu';
import Link from 'next/link';

export default function Header({ onPricingClick, onLogoClick, onServiceSelect }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        <button onClick={toggleMenu} className={styles.hamburgerButton}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link href="#services">Services</Link>
            {showDropdown && <DropdownMenu onServiceSelect={onServiceSelect} />}
          </li>
          <li><Link href="#about">About</Link></li>
          <li><button onClick={onPricingClick}>Pricing</button></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      <SlidingMenu isOpen={menuOpen} onClose={toggleMenu} onServiceSelect={onServiceSelect} />
    </header>
  );
}
