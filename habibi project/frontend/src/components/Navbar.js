import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-primary-dark bg-opacity-95 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-secondary-gold">Habibi</h1>
            <p className="text-xs text-gray-300 ml-2">Peshawar</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-secondary-gold transition">
              Home
            </a>
            <a href="#dishes" className="hover:text-secondary-gold transition">
              Dishes
            </a>
            <a href="#experience" className="hover:text-secondary-gold transition">
              Experience
            </a>
            <a href="#menu" className="hover:text-secondary-gold transition">
              Menu
            </a>
            <a href="#contact" className="hover:text-secondary-gold transition">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://foodpanda.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition"
            >
              Order Now
            </a>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-secondary-gold text-secondary-gold hover:bg-secondary-gold hover:text-primary-dark px-4 py-2 rounded transition"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-gold focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="#home"
              className="block hover:text-secondary-gold transition"
            >
              Home
            </a>
            <a
              href="#dishes"
              className="block hover:text-secondary-gold transition"
            >
              Dishes
            </a>
            <a
              href="#experience"
              className="block hover:text-secondary-gold transition"
            >
              Experience
            </a>
            <a
              href="#menu"
              className="block hover:text-secondary-gold transition"
            >
              Menu
            </a>
            <a
              href="#contact"
              className="block hover:text-secondary-gold transition"
            >
              Contact
            </a>
            <a
              href="https://foodpanda.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition text-center"
            >
              Order Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
