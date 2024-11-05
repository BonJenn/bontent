'use client'

import React, { useState } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import Services from '../components/services';
import Hero1 from '../components/hero1';
import Hero2 from '../components/hero2';
import Contact from '../components/contact';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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
    <MainLayout>
      <Hero1 />
      <Hero2 />
      <Services />
      <Contact formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </MainLayout>
  );
}
