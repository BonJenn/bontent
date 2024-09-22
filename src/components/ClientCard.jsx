import Image from 'next/image';
import styles from '../styles/ClientCard.module.css'; // Assuming you have some CSS module

export default function ClientCard({ logo, name, description, width, height, backgroundImage }) {
    return (
      <div className={styles.clientCard}>
        <Image 
          src={backgroundImage} 
          alt={`${name} background`} 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center center"
          className={styles.backgroundImage}
        />
        <div className={styles.cardContent}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt={name} width={width} height={height} />
          </div>
          <div className={styles.textContent}>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
}