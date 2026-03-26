import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignatureDishes from "./components/SignatureDishes";
import Experience from "./components/Experience";
import Reviews from "./components/Reviews";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SignatureDishes />
      <Experience />
      <Reviews />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
