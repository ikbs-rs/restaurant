// src/components/HeroSection.js
import React from 'react';
import './Index.css'; // Pretpostavimo da imate CSS fajl za stilizovanje

const HeroSection = ({scrollToSection, menuRef}) => {
  // Funkcija za upravljanje klikom na dugme, ako je potrebno
  const handleMenuClick = () => {
    // Implementacija navigacije do sekcije menija
  };

  const handleBookTableClick = () => {
    // Implementacija navigacije do sekcije za rezervaciju
  };

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-8">
            <h1>Welcome to <span>Restaurantly</span></h1>
            <h2>Delivering great food for more than 18 years!</h2>

            <div className="btns">
              <button onClick={(e) => {e.preventDefault(); scrollToSection(menuRef);}} className="btn-menu animated fadeInUp scrollto">Our Menu</button>
              <button onClick={handleBookTableClick} className="btn-book animated fadeInUp scrollto">Book a Table</button>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
            {/* Za integraciju sa lightbox-om ili sličnim, možda će biti potrebno dodatno konfigurisanje */}
            <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" className="glightbox play-btn"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
