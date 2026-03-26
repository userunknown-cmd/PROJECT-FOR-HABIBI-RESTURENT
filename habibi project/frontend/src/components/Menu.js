import React, { useState } from "react";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("bbq");

  const menuItems = {
    bbq: [
      { name: "Full BBQ Platter", price: "Rs 1,500", popular: true },
      { name: "Half BBQ Platter", price: "Rs 900" },
      { name: "BBQ Wings (500g)", price: "Rs 700" },
      { name: "Seekh Kebab (6 pcs)", price: "Rs 600" },
    ],
    arabic: [
      { name: "Shawrma Chicken", price: "Rs 400", popular: true },
      { name: "Shawrma Beef", price: "Rs 500" },
      { name: "Falafel Wrap", price: "Rs 300" },
      { name: "Hummus Dip", price: "Rs 150" },
    ],
    salads: [
      { name: "Tabbouleh", price: "Rs 350" },
      { name: "Fattoush Salad", price: "Rs 400", popular: true },
      { name: "Caesar Salad", price: "Rs 380" },
      { name: "Green Salad", price: "Rs 250" },
    ],
    platters: [
      { name: "Royal Arabic Platter", price: "Rs 2,000", popular: true },
      { name: "BBQ Feast (2-3 Persons)", price: "Rs 1,800" },
      { name: "Family Combo", price: "Rs 3,500" },
      { name: "Trial Platter", price: "Rs 1,200" },
    ],
  };

  const tabs = [
    { id: "bbq", label: "🔥 BBQ" },
    { id: "arabic", label: "🌍 Arabic Dishes" },
    { id: "salads", label: "🥗 Salads" },
    { id: "platters", label: "🍽️ Platters" },
  ];

  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-dark">
          Our Menu
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === tab.id
                  ? "bg-gradient-luxury text-white shadow-lg"
                  : "bg-secondary-beige text-primary-dark hover:bg-opacity-80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="bg-secondary-beige rounded-lg p-6 hover-lift group relative"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-primary-dark group-hover:text-secondary-gold transition">
                  {item.name}
                </h3>
                {item.popular && (
                  <span className="bg-secondary-gold text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-secondary-gold text-lg font-semibold">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ready to order?</p>
          <a
            href="https://foodpanda.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Order Complete Menu Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
