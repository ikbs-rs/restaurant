import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header'; // Ako želite Header na svakoj stranici, uključite ga van Routes
import Footer from './Footer';
import RoomCard from './RoomCard';
import ReservationForm from './ReservationForm';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const IndexRouter = () => {
  return (
    <div>
      <Navbar />
      <Header /> {/* Ovo će učiniti da Header bude vidljiv na svim stranicama */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/rooms" element={<RoomCard />} />
        <Route path="/reservation" element={<ReservationForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default IndexRouter;
