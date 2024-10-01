import React from 'react';
import Image from 'next/image';
import styles from '../styles/work.module.css';

const clients = [
  { logo: "/images/RAP_logo.png", name: "Los Angeles Recreation and Parks" },
  { logo: "/images/baja_shrimp_logo.png", name: "The Baja Shrimp" },
  { logo: "/images/vistaview_logo.png", name: "Vistaview Technical Solutions" },
  { logo: "/images/bitcoin_brainiac_logo.png", name: "Bitcoin Brainiac" }
];

export default function Work() {
  return (
    <div className={styles.workContainer}>
      <h2 className={styles.ourWorkTitle}>Our Clients</h2>
      <div className={styles.logoRow}>
        {clients.map((client, index) => (
          <div key={index} className={styles.logoContainer}>
            <Image
              src={client.logo}
              alt={client.name}
              width={50}
              height={50}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
