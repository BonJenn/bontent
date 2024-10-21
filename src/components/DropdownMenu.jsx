import React from 'react';
import styles from "../styles/dropdownMenu.module.css";

export default function DropdownMenu() {
  return (
    <div className={styles.dropdown}>
      <ul>
        <li>
          <a href="#webflow">Website Development</a>
          <span className={styles.price}>From $4900/month</span>
        </li>
        <li>
          <a href="#design">Web Design & Development</a>
          <span className={styles.price}>From $5900/month</span>
        </li>
        <li>
          <a href="#hourly">Hourly Packages</a>
          <span className={styles.price}>From $850</span>
        </li>
      </ul>
    </div>
  );
}
