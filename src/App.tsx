import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PricingPlans from './components/PricingPlans';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <PricingPlans />
        <Portfolio />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
