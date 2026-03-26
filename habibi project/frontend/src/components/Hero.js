import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden pt-16"
    >
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555939594-58d7cb561bdd?w=1600&h=900&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-secondary-gold">
          Habibi Restaurant
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light">
          Experience Authentic Arabic Flavors in the Heart of Peshawar
        </p>
        <p className="text-lg mb-12 text-gray-200">Premium BBQ • Family Dining • Arabic Cuisine</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://foodpanda.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
          >
            🟢 Order on Foodpanda
          </a>
          <a
            href="tel:+923001234567"
            className="bg-secondary-gold hover:bg-opacity-90 text-primary-dark px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
          >
            📞 Call Now
          </a>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-secondary-gold hover:bg-secondary-gold hover:text-primary-dark text-secondary-gold px-8 py-4 rounded-lg font-semibold transition"
          >
            📍 Get Directions
          </a>
        </div>

        {/* Hours */}
        <div className="mt-12 text-sm text-gray-200">
          <p>⏰ Open till 12:00 AM</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-secondary-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
