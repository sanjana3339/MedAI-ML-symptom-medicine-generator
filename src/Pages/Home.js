import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import BookAppointment from "../Components/BookAppointment";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <BookAppointment />
      <Footer />
    </div>
  );
}

export default Home;
