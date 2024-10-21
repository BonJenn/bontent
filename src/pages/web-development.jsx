import React from 'react';
import ServicesHero from '../components/services/servicesHero';
import ServicesPricing from '../components/services/servicesPricing';
import ServicesTestimonials from '../components/services/servicesTestimonials';

export default function WebDevelopmentPage() {
  return (
    <div>
      <ServicesHero />
      <ServicesPricing />
      <ServicesTestimonials />
    </div>
  );
}
