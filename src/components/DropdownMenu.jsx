import React from 'react';
import styles from "../styles/dropdownMenu.module.css";

export default function DropdownMenu({ onServiceSelect }) {
  return (
    <div className={styles.dropdown} data-dropdown>
      <ul>
        <li onClick={() => onServiceSelect('web-development')}>
          <span>Web Development</span>
        </li>
        <li onClick={() => onServiceSelect('design-development')}>
          <span>Design & Development</span>
        </li>
        <li>
          <a href="#hourly">Hourly Packages</a>
        </li>
      </ul>
    </div>
  );
}
