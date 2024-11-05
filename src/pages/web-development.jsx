import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import ServicesHero from '../components/services/servicesHero';
import ServicesPricing from '../components/services/servicesPricing';
import ServicesTestimonials from '../components/services/servicesTestimonials';

export default function WebDevelopmentPage() {
  const webDevTestimonials = [
    {
      name: "Todd Matthews",
      company: "BitcoinBrainiac.org",
      text: "Bontent's web development services have been a game-changer for us. Their team delivered a sleek, user-friendly website that has significantly improved our user engagement. Their attention to detail and commitment to excellence is unmatched."
    },
    {
      name: "John Benn",
      company: "Public Assemblage Group",
      text: "Working with Bontent was a seamless experience. They understood our needs perfectly and delivered a website that exceeded our expectations. Their professionalism and expertise are truly commendable."
    },
    {
      name: "Erica Slater",
      company: "Vistaview Technical Solutions",
      text: "Bontent transformed our online presence with their exceptional web development services. The new site is not only visually appealing but also highly functional. We couldn't be happier with the results."
    }
  ];

  return (
    <MainLayout>
      <ServicesHero service="web-development" />
      <ServicesPricing service="web-development" />
      <ServicesTestimonials testimonials={webDevTestimonials} />
    </MainLayout>
  );
}
