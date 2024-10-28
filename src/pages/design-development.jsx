import React from 'react';
import Hero from '../components/Hero';
import ServicesPricing from '../components/services/servicesPricing';
import ServicesTestimonials from '../components/services/servicesTestimonials';
import Header from '../components/header';
import Footer from '../components/footer';

export default function DesignDevelopmentPage() {
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
      <Header />
      <Hero
        title="Get unlimited Webflow development & design tailored to your needs"
        subtitle="Your own team of skilled Webflow developers and designers on demand. We turn your idea into a world-class website."
        buttonText="Get a demo"
        imageUrl="/path/to/your/image.png"
      />
      <ServicesPricing />
      <ServicesTestimonials testimonials={designTestimonials} />
      <Footer />
    </div>
  );
}