import React from 'react';
import styles from "../styles/dropdownMenu.module.css";

export default function DropdownMenu({ onServiceSelect }) {
  return (
    <div className={styles.dropdown} data-dropdown>
      <ul>
        <li onClick={() => onServiceSelect('web-development')}>
          <span>Web Development</span>
          <span className={styles.price}>From $9,800/month</span>
        </li>
        <li onClick={() => onServiceSelect('design-development')}>
          <span>Design & Development</span>
          <span className={styles.price}>From $11,800/month</span>
        </li>
        <li>
          <a href="#hourly">Hourly Packages</a>
          <span className={styles.price}>From $1,700</span>
        </li>
      </ul>
    </div>
  );
}
