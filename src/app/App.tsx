import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutStats } from './components/AboutStats';
import { Features } from './components/Features'; 
import { Programs } from './components/Programs';
import { Testimonials } from './components/Testimonials';
import { AdmissionForm } from './components/AdmissionForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer'; // Double check if Footer is in components or app/components
import { Toaster } from './components/ui/sonner';

export default function App() {
  const scrollToAdmission = () => {
    const element = document.getElementById('admission-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header onScrollToAdmission={scrollToAdmission} />
      
      <main>
        {/* Landing Section */}
        <Hero onScrollToAdmission={scrollToAdmission} />
        
        {/* Statistics & About */}
        <AboutStats />
        <Features />      
        
        {/* Academics */}
        <Programs />
        
        {/* Social Proof */}
        <Testimonials />  
        
        {/* Interaction & Contact */}
        <AdmissionForm />
        <ContactSection /> 
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Toast notifications for forms */}
      <Toaster position="top-right" richColors />
    </div>
  );
}
