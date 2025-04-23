import React from 'react';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Accueil from './components/sections/Accueil';
import NotreHistoire from './components/sections/NotreHistoire';
import InfosPratiques from './components/sections/InfosPratiques';
import Programme from './components/sections/Programme';
import Hebergements from './components/sections/Hebergements';
import Confirmation from './components/sections/Confirmation';
import Casting from './components/sections/Casting';
import Playlist from './components/sections/Playlist';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Remerciements from './components/sections/Remerciements';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      
      if (currentSection !== activeSection && currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-body bg-stone-50 text-sage-900">
      <Navigation 
        activeSection={activeSection}
        onNavClick={handleNavClick}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      
      <main>
        <section id="accueil"><Accueil /></section>
        <section id="notre-histoire"><NotreHistoire /></section>
        <section id="infos-pratiques"><InfosPratiques /></section>
        <section id="programme"><Programme /></section>
        <section id="hebergements"><Hebergements /></section>
        <section id="confirmation"><Confirmation /></section>
        <section id="casting"><Casting /></section>
        <section id="playlist"><Playlist /></section>
        <section id="faq"><FAQ /></section>
        <section id="contact"><Contact /></section>
        <section id="remerciements"><Remerciements /></section>
      </main>
      
      <div className="fixed bottom-4 right-4 z-50">
        <Countdown />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;