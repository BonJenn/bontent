'use client'

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';
import contact from '../components/contact';
import Contact from '../components/contact'; // Add this line

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

  return (
    <>
      <Header onPricingClick={handlePricingClick} />
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
