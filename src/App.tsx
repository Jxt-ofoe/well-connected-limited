/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ServicesHighlights from './components/ServicesHighlights';
import ProductCatalog from './components/ProductCatalog';
import HowToBuy from './components/HowToBuy';
import AboutUs from './components/AboutUs';
import Legal from './components/Legal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.99,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.99,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Hero onExplore={() => setCurrentPage('products')} />
            <IntroSection />
            <ServicesHighlights />
          </motion.div>
        );
      case 'products':
        return (
          <motion.div
            key="products"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-20"
          >
            <ProductCatalog />
            <HowToBuy onNavigate={setCurrentPage} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-20"
          >
            <AboutUs onNavigate={setCurrentPage} />
          </motion.div>
        );
      case 'privacy':
      case 'terms':
      case 'shipping':
      case 'compliance':
        return (
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-20"
          >
            <Legal section={currentPage as any} />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-20"
          >
            <ContactSection />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-off-white selection:bg-gold selection:text-navy">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
