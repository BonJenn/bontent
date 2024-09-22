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
        <h1>BONTENT</h1>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>
  
      <ul className={`${styles.nav_list} ${menuOpen ? styles.open : ""}`}>
        <li onClick={onWorkClick}>Work</li>
        <li onClick={onServicesClick}>Services</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}