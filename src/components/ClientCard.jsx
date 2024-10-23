import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/ClientCard.module.css';
import animationStyles from '../styles/animations.module.css'; // Import the animation styles

export default function ClientCard({ logo, name, description, width, height, backgroundImage }) {
	const cardRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove(animationStyles.hidden);
					entry.target.classList.add(animationStyles.fadeInUp);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.1 }
		);

		const currentRef = cardRef.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	return (
		<div className={`${styles.clientCard} ${animationStyles.hidden}`} ref={cardRef}>
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
