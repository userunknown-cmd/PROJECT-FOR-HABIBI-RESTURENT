import React from "react";

const SignatureDishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Habibi BBQ Platter",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
      icon: "🔥",
    },
    {
      id: 2,
      name: "Chicken Wings",
      image: "https://images.unsplash.com/photo-1608039891527-778106d7d12f?w=500&h=500&fit=crop",
      icon: "🍗",
    },
    {
      id: 3,
      name: "Karahi",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cda ec4?w=500&h=500&fit=crop",
      icon: "🲘",
    },
  ];

  return (
    <section id="dishes" className="py-16 md:py-24 bg-secondary-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary-dark">
          Signature Dishes
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Our most beloved creations
        </p>

        {/* Dish Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift transition group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-5xl mb-3">{dish.icon}</div>
                <h3 className="text-2xl font-bold text-primary-dark mb-3">
                  {dish.name}
                </h3>
                <button className="w-full bg-secondary-gold hover:bg-opacity-90 text-primary-dark py-2 rounded-lg font-semibold transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trending Badge */}
        <div className="mt-12 text-center">
          <span className="inline-block bg-primary-dark text-secondary-gold px-6 py-3 rounded-full text-sm font-semibold animate-glow">
            ⭐ Most Ordered Today
          </span>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
