import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-black text-white">
      <Nav />
      <Hero />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
