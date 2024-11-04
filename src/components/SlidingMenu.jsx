import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/slidingMenu.module.css';

export default function SlidingMenu({ isOpen, onClose }) {
  const menuRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleServicesClick = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const handlePricingClick = (e) => {
    e.preventDefault();
    onClose();
    if (window.handlePricingClick) {
      window.handlePricingClick();
    }
  };

  return (
    <div ref={menuRef} className={`${styles.slidingMenu} ${isOpen ? styles.open : ''}`}>
      <ul>
        <li>
          <a href="#" onClick={handleServicesClick}>Services</a>
          {dropdownOpen && (
            <ul className={styles.dropdown}>
              <li>
                <Link href="/web-development">Web Development</Link>
                <span className={styles.price}>From $4900/month</span>
              </li>
              <li>
                <Link href="/design-development">Design & Development</Link>
                <span className={styles.price}>From $5900/month</span>
              </li>
              <li>
                <a href="#hourly">Hourly Packages</a>
                <span className={styles.price}>From $850</span>
              </li>
            </ul>
          )}
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#" onClick={handlePricingClick}>Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}