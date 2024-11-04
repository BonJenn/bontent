import React, { useEffect, useRef } from 'react';
import styles from '../styles/slidingMenu.module.css';

export default function SlidingMenu({ isOpen, onClose }) {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleClickInside = (event) => {
      if (menuRef.current && menuRef.current.contains(event.target) && event.target.tagName !== 'A') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleClickInside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleClickInside);
    };
  }, [onClose]);

  return (
    <div ref={menuRef} className={`${styles.slidingMenu} ${isOpen ? styles.open : ''}`}>
      <ul>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}
