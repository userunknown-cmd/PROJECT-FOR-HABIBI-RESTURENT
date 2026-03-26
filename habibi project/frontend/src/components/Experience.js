import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image - Left */}
          <div className="order-2 md:order-1 animate-slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1504674900569-878101050aa6?w=600&h=600&fit=crop"
              alt="Family Dining"
              className="rounded-xl shadow-xl w-full h-96 object-cover"
            />
          </div>

          {/* Content - Right */}
          <div className="order-1 md:order-2 animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-dark">
              Experience the <span className="text-secondary-gold">Habibi</span> Difference
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏠</div>
                <div>
                  <h3 className="text-xl font-bold text-primary-dark">Cozy Ambiance</h3>
                  <p className="text-gray-600">
                    Warm, welcoming atmosphere perfect for all occasions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">👨‍👩‍👧‍👦</div>
                <div>
                  <h3 className="text-xl font-bold text-primary-dark">Perfect for Families & Gatherings</h3>
                  <p className="text-gray-600">
                    Spacious seating for group dining and celebrations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">🌍</div>
                <div>
                  <h3 className="text-xl font-bold text-primary-dark">Authentic Arabic Taste</h3>
                  <p className="text-gray-600">
                    Traditional recipes with premium ingredients
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">⭐</div>
                <div>
                  <h3 className="text-xl font-bold text-primary-dark">Premium Service</h3>
                  <p className="text-gray-600">
                    Dedicated staff ensuring best dining experience
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-gradient-luxury text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition">
              Reserve Your Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
