import { useState } from "react";
import styles from "../styles/header.module.css";

export default function Header({ onHomeClick, onServicesClick, onWorkClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={onHomeClick}>
        <h1>bontent</h1>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${styles.navigation} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li onClick={() => { onHomeClick(); toggleMenu(); }}>About</li>
          <li onClick={() => { onWorkClick(); toggleMenu(); }}>Work</li>
          <li onClick={() => { onServicesClick(); toggleMenu(); }}>Services</li>
        </ul>
      </nav>
    </header>
  );
}