import React from 'react';
import ClientCard from './ClientCard';
import styles from '../styles/work.module.css';

export default function Work() {
  return (
    <div className={styles.workContainer}>
      <h2>Our Work</h2>
      <div className={styles.clientsList}>
        <ClientCard 
          logo="/images/RAP_logo.png"
          name="Los Angeles Recreation and Parks"
          description="Pershing Square is Los Angeles Recreation and Parks' premiere event center in the heart of downtown Los Angeles. <br /> <br /> Bontent developed the event venue's web presence and brand identity."
          width={150}
          height={150}
          backgroundImage="/images/client_images/rec_and_parks.jpg"
          objectPosition="center 75%"
        />
        <ClientCard 
          logo="/images/baja_shrimp_logo.png"
          name="The Baja Shrimp"
          description="The Baja Shrimp is a Southern California-based baja-style cuisine catering company.<br /> <br /> Bontent developed the company's web presence and internal lead generation system."
          width={300}
          height={150}
          backgroundImage="/images/client_images/rec_and_parks.jpg"
          objectPosition="center 75%"
        />
        <ClientCard 
          logo="/images/vistaview_logo.png"
          name="Vistaview Technical Solutions"
          description="Vistaview is a video engineering services company specializing in special event filming and broadcasting.<br /> <br /> Bontent developed the company's web presence in addition to a custom internal software solution."
          width={300}
          height={150}
          backgroundImage="/images/client_images/vistaview_background.jpg"
          objectPosition="center 25%"
        />
        <ClientCard 
          logo="/images/bitcoin_brainiac_logo.png"
          name="Bitcoin Brainiac"
          description="Bitcoin Brainiac is an online education platform for free Bitcoin education. <br /> <br /> Bontent developed the company's brand strategy, and built out their dynamic web education app which includes a video player, comments, quizzes, and more."
          width={300}
          height={150}
          backgroundImage="/images/client_images/bitcoin_brainiac_background.jpg"
          objectPosition="center 10%"
        />
      </div>
    </div>
  );
}
