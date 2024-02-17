// src/components/Header.js
import React, { useState, useEffect } from 'react';
import './Index.css';

const Header = ({ scrollToSection, heroSectionRef, aboutRef, menuRef, orderedRef }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Postavite prag skrolovanja, npr. 100px
      const threshold = 100;
      const scrolled = window.scrollY > threshold;

      setIsScrolled(scrolled);
    };

    // Dodajte event listener za skrolovanje
    window.addEventListener('scroll', handleScroll);

    // Očistite event listener kada komponenta više nije montirana
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header id="header" className={`fixed-top d-flex align-items-center ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0"><a href="/" onClick={(e) => { e.preventDefault(); scrollToSection(heroSectionRef); }}>Restaurantly</a></h1>
        <nav id="navbar" className={`navbar order-last order-lg-0 ${mobileMenuOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            <li><a href="/hero" onClick={(e) => {
              e.preventDefault();
              scrollToSection(heroSectionRef);
              if (mobileMenuOpen) {
                toggleMobileMenu();
              }
            }}>Home</a></li>
            <li><a href="/about" onClick={(e) => {
              e.preventDefault();
              scrollToSection(aboutRef);
              if (mobileMenuOpen) {
                toggleMobileMenu();
              }
            }}>About</a></li>
            <li><a href="/menu" onClick={(e) => {
              e.preventDefault();
              scrollToSection(menuRef);
              if (mobileMenuOpen) {
                toggleMobileMenu();
              }
            }}>Menu</a></li>
            <li><a href="/ordered" onClick={(e) => {
              e.preventDefault();
              scrollToSection(orderedRef);
              if (mobileMenuOpen) {
                toggleMobileMenu();
              }
            }}>Ordered</a></li>            
          </ul>
          <i className={`bi mobile-nav-toggle ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMobileMenu}></i>
        </nav>
        <a href="/book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>
      </div>
    </header>
  );
};

export default Header;

