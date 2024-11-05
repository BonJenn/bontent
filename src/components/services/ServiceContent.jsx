import React from 'react';
import ServicesHero from './servicesHero';
import ServicesPricing from './servicesPricing';
import ServicesTestimonials from './servicesTestimonials';

export default function ServiceContent({ testimonials, service }) {
  const getTitle = () => {
    switch(service) {
      case 'web-development':
        return 'Web Development Services';
      case 'web-design':
        return 'Web Design Services';
      case 'design-development':
        return 'Design & Development Services';
      default:
        return 'Our Services';
    }
  };

  return (
    <>
      <ServicesHero title={getTitle()} />
      <ServicesPricing />
      <ServicesTestimonials testimonials={testimonials} />
    </>
  );
}
