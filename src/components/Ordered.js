import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu'; 
import Footer from './Footer';

const Ordered = () => {
  return (
    <section id="menu" className="menu section-bg ">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Ordered</h2>
          <p>Select your order</p>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-7 menu-item filter-starters">
            <Menu />
          </div>
          <div class="col-lg-5 menu-item filter-starters">
          <Footer />
          </div>          
        </div>
      </div>
    </section>
  );
};

export default Ordered;
