import React from 'react';
import Hero from '../components/Hero';
import ServicesPricing from '../components/services/servicesPricing';
import ServicesTestimonials from '../components/services/servicesTestimonials';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WebDevelopmentPage() {
  return (
    <div>
      <Header />
      <Hero
        title="Get unlimited Web development for all your creative ideas"
        subtitle="Your own team of certified Web developers without the in-house hiring. We bring your design from idea to a pixel-perfect website."
        buttonText="Get a demo"
        imageUrl="/images/3d_website_graphic.png"
      />
      <ServicesPricing />
      <ServicesTestimonials />
      <Footer />
    </div>
  );
}
