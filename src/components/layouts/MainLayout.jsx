'use client'

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Header from '../header';
import Footer from '../footer';
import Pricing from '../pricing';
import ServiceContent from '../services/ServiceContent';
import ServicesHero from '../services/servicesHero';
import ServicesPricing from '../services/servicesPricing';
import ServicesTestimonials from '../services/servicesTestimonials';
import About from '../about';

export default function MainLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeComponent, setActiveComponent] = useState('services');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoClick = () => {
    router.push('/');
    setActiveComponent('services');
  };

  const handlePricingClick = () => {
    console.log('MainLayout: handlePricingClick called');
    setActiveComponent('pricing');
    if (pathname !== '/') {
      router.push('/');
    }
  };

  const handleServiceSelect = (service) => {
    setActiveComponent(service);
    setMenuOpen(false); // Close menu after selection
    if (pathname !== '/') {
      router.push('/');
    }
  };

  const handleAboutClick = () => {
    setActiveComponent('about');
    if (pathname !== '/') {
      router.push('/');
    }
  };

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

  const content = pathname === '/' ? (
    activeComponent === 'services' ? children :
    activeComponent === 'pricing' ? <Pricing /> :
    activeComponent === 'about' ? <About /> :
    activeComponent === 'web-development' ? (
      <>
        <ServicesHero service="web-development" />
        <ServicesPricing service="web-development" />
        <ServicesTestimonials testimonials={webDevTestimonials} />
      </>
    ) :
    activeComponent === 'design-development' ? (
      <>
        <ServicesHero service="design-development" />
        <ServicesPricing service="design-development" />
        <ServicesTestimonials testimonials={designTestimonials} />
      </>
    ) :
    children
  ) : (
    children
  );

  return (
    <>
      <Header 
        onLogoClick={handleLogoClick} 
        onPricingClick={handlePricingClick}
        onServiceSelect={handleServiceSelect}
        onAboutClick={handleAboutClick}
        menuOpen={menuOpen}
        onMenuToggle={handleMenuToggle}
      />
      <main>{content}</main>
      <Footer />
    </>
  );
}
