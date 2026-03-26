import React from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Ahmed Khan",
      rating: 5,
      text: "Food was absolutely amazing. Best BBQ in Peshawar! The ambiance and service were exceptional.",
      avatar: "👨",
    },
    {
      id: 2,
      name: "Fatima Hassan",
      rating: 5,
      text: "Perfect place for family gatherings. The karahi was cooked to perfection. Highly recommended!",
      avatar: "👩",
    },
    {
      id: 3,
      name: "Hassan Ahmed",
      rating: 5,
      text: "Premium quality meat and authentic flavors. Worth every penny. Will definitely come again.",
      avatar: "👨",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary-beige pattern-arabic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark">
            What Our Customers Say
          </h2>
          <p className="text-gray-600">Real reviews from real customers</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up hover-lift"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-secondary-gold text-2xl animate-glow">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 italic">"{review.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-4xl">{review.avatar}</div>
                <div>
                  <h4 className="font-bold text-primary-dark">{review.name}</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
