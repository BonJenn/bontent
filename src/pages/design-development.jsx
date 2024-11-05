import React from 'react';
import { useRouter } from 'next/router';
import ServicesPricing from '../components/services/servicesPricing';
import ServicesHero from '../components/services/servicesHero';
import ServicesTestimonials from '../components/services/servicesTestimonials';
import Header from '../components/header';
import Footer from '../components/footer';

export default function DesignDevelopmentPage() {
  const router = useRouter();
  const handleLogoClick = () => router.push('/');

  const designTestimonials = [
    {
      name: "Alex Johnson",
      company: "Creative Solutions Inc.",
      text: "The design team at Flowout transformed our brand's online presence. Their creativity and attention to detail are unmatched, delivering a visually stunning and user-friendly website."
    },
    {
      name: "Sarah Lee",
      company: "Innovatech",
      text: "Working with Flowout's design team was a game-changer. They understood our vision and brought it to life with exceptional design skills, enhancing our brand's appeal."
    },
    {
      name: "Michael Brown",
      company: "Visionary Ventures",
      text: "Flowout's design expertise helped us stand out in a crowded market. Their innovative approach and dedication to quality resulted in a website that truly represents our brand."
    }
  ];

  return (
    <div>
      <Header onLogoClick={handleLogoClick} />
      <ServicesHero />
      <ServicesPricing />
      <ServicesTestimonials testimonials={designTestimonials} />
      <Footer />
    </div>
  );
}