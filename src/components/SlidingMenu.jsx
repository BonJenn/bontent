import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/slidingMenu.module.css';

export default function SlidingMenu({ isOpen, onClose, onServiceSelect, onPricingClick, onAboutClick }) {
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

  const handleServiceClick = (service, e) => {
    e.preventDefault();
    onClose();
    if (onServiceSelect) {
      onServiceSelect(service);
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
                <a href="#" onClick={(e) => handleServiceClick('web-development', e)}>
                  Web Development
                  <span className={styles.price}>From $4900/month</span>
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleServiceClick('design-development', e)}>
                  Design & Development
                  <span className={styles.price}>From $5900/month</span>
                </a>
              </li>
              <li>
                <Link href="#hourly">Hourly Packages</Link>
                <span className={styles.price}>From $850</span>
              </li>
            </ul>
          )}
        </li>
        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          onClose();
          if (onAboutClick) onAboutClick();
        }}>About</a></li>
        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          console.log('SlidingMenu: Pricing clicked');
          onClose();
          console.log('onPricingClick exists:', !!onPricingClick);
          if (onPricingClick) onPricingClick();
        }}>Pricing</a></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </div>
  );
}