'use client'

import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Services from '../components/services';
import Pricing from '../components/pricing';
import Hero1 from '../components/hero1';
import Hero2 from '../components/hero2';
import Contact from '../components/contact';

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('services');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handlePricingClick = () => {
    setActiveComponent('pricing');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleLogoClick = () => {
    setActiveComponent('services');
  };

  return (
    <>
      <Header onPricingClick={handlePricingClick} onLogoClick={handleLogoClick} />
      <main>
        {activeComponent === 'services' && (
          <>
            <Hero1 />
            <Hero2 />
            <Services />
            <Contact formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
          </>
        )}
        {activeComponent === 'pricing' && <Pricing />}
      </main>
      <Footer />
    </>
  );
}
