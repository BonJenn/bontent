import React from 'react';
import Link from 'next/link';
import styles from "../styles/dropdownMenu.module.css";

export default function DropdownMenu() {
  return (
    <div className={styles.dropdown}>
      <ul>
        <li>
          <Link href="/web-development">Webflow Development</Link>
          <span className={styles.price}>From $4900/month</span>
        </li>
        <li>
          <a href="#design">Design & Development</a>
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
