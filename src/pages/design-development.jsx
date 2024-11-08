import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import ServicesHero from '../components/services/servicesHero';
import ServicesPricing from '../components/services/servicesPricing';
import ServicesTestimonials from '../components/services/servicesTestimonials';

export default function DesignDevelopmentPage() {
  const designTestimonials = [
    {
      name: "Alex Johnson",
      company: "Creative Solutions Inc.",
      text: "The design team at Bontent transformed our brand's online presence. Their creativity and attention to detail are unmatched, delivering a visually stunning and user-friendly website."
    },
    {
      name: "Sarah Lee",
      company: "Innovatech",
      text: "Working with Bontent's design team was a game-changer. They understood our vision and brought it to life with exceptional design skills, enhancing our brand's appeal."
    },
    {
      name: "Michael Brown",
      company: "Visionary Ventures",
      text: "Bontent's design expertise helped us stand out in a crowded market. Their innovative approach and dedication to quality resulted in a website that truly represents our brand."
    }
  ];

  return (
    <MainLayout>
      <ServicesHero service="design-development" />
      <ServicesPricing service="design-development" />
      <ServicesTestimonials testimonials={designTestimonials} />
    </MainLayout>
  );
}