import React from 'react';
import Hero from '../components/Hero';
import ServicesPricing from '../components/services/servicesPricing';
import ServicesTestimonials from '../components/services/servicesTestimonials';
import Header from '../components/header';
import Footer from '../components/footer';

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
    <div>
      <Header />
      <Hero
        title="Get unlimited Web development for all your creative ideas"
        subtitle="Your own team of certified Web developers without the in-house hiring. We bring your design from idea to a pixel-perfect website."
        buttonText="Get a demo"
        imageUrl="/images/3d_website_graphic.png"
      />
      <ServicesPricing />
      <ServicesTestimonials testimonials={webDevTestimonials} />
      <Footer />
    </div>
  );
}
