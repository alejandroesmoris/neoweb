import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhatsAppBanner } from './components/WhatsAppBanner';
import { PortfolioGallery } from './components/PortfolioGallery';
import { BudgetCalculator } from './components/BudgetCalculator';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation Bar */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services & E-Commerce */}
        <Services />

        {/* WhatsApp High Impact Callout Banner */}
        <section className="py-8 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhatsAppBanner />
          </div>
        </section>

        {/* Interactive Portfolio Gallery */}
        <PortfolioGallery />

        {/* Interactive Budget Estimator / Calculator */}
        <BudgetCalculator />

        {/* Contact Form */}
        <ContactForm />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button (Bottom Right) with number 1176621380 */}
      <FloatingWhatsApp phoneNumber="1176621380" />
    </div>
  );
}
