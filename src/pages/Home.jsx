import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
// import BrandMarquee from '../components/BrandMarquee';
import Services from '../sections/Services';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
        <BackToTop />

    </div>
  );
}

