import React from 'react';
import ServicesHero from './servicesHero';
import ServicesPricing from './servicesPricing';
import ServicesTestimonials from './servicesTestimonials';

export default function WebDevelopment() {
  const webDevTestimonials = [
    {
      name: "Todd Matthews",
      company: "BitcoinBrainiac.org",
      text: "Bontent's web development services have been a game-changer for us..."
    },
    // ... rest of the testimonials
  ];

  return (
    <>
      <ServicesHero />
      <ServicesPricing service="web-development" />
      <ServicesTestimonials testimonials={webDevTestimonials} />
    </>
  );
}
