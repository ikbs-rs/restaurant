import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import TopBar from './components/TopBar';

function App() {
  const heroSectionRef = useRef(null);
  const aboutRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    // Postavljanje atributa na <body> tag
    document.body.setAttribute('monica-version', '4.7.6');
    document.body.setAttribute('monica-id', 'ofpnmcalabcbjgholdjcjblkibolbppb');
    document.body.dataset.aosEasing = 'ease-in-out';
    document.body.dataset.aosDuration = '1000';
    document.body.dataset.aosDelay = '0';
  }, []);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };


  return (
    <Router>
      <div className="App">
        <TopBar />
        <Header scrollToSection={scrollToSection} heroSectionRef={heroSectionRef} aboutRef={aboutRef} menuRef={menuRef} />
        <div ref={heroSectionRef}><HeroSection scrollToSection={scrollToSection} menuRef={menuRef} /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={menuRef}><Menu /></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
