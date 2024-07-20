import { useState, useEffect } from "react";
import styles from "../styles/header.module.css";

export default function Header({ onServicesClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>BONTENT</h1>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`${styles.nav_list} ${menuOpen ? styles.open : ""}`}>
        <li>Work</li>
        <li>Clients</li>
        <li onClick={onServicesClick}>Services</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}