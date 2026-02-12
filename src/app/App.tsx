import { Navigation } from './components/navigation';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { BrandsSection } from './components/brands-section';
import { ContactSection } from './components/contact-section';
import React from 'react';

export default function App() {
  return (
    <div className="size-full bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BrandsSection />
      <ContactSection />
    </div>
  );
}
