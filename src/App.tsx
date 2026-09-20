/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DoctorProfile } from './components/DoctorProfile';
import { ServicesSection } from './components/ServicesSection';
import { BookingSection } from './components/BookingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string>(
    'Root Canal Treatment (RCT)'
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookService = (serviceName: string) => {
    setSelectedTreatmentForBooking(serviceName);
    scrollToSection('appointment');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
      {/* Main Sticky Header */}
      <Navbar
        onBookClick={() => scrollToSection('appointment')}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={() => scrollToSection('appointment')}
          onExploreServices={() => scrollToSection('services')}
        />

        {/* Lead Doctor Profile */}
        <DoctorProfile onBookWithDoctor={() => scrollToSection('appointment')} />

        {/* Specialized Treatments Grid */}
        <ServicesSection onSelectServiceForBooking={handleBookService} />

        {/* Interactive Priority Booking Form */}
        <BookingSection initialTreatment={selectedTreatmentForBooking} />

        {/* Verified Patient Reviews */}
        <TestimonialsSection />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* Location, Google Map & Timings */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Bars (Desktop WhatsApp + Mobile Dual Buttons) */}
      <FloatingActions onBookClick={() => scrollToSection('appointment')} />
    </div>
  );
}
