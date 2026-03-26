import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-secondary-gold">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">📍 Location</h3>
              <p className="text-gray-300">
                Habibi Restaurant, Peshawar
                <br />
                Khyber Pakhtunkhwa, Pakistan
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">📞 Phone</h3>
              <a href="tel:+923001234567" className="text-secondary-gold hover:underline text-lg">
                +92 300 1234567
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">⏰ Hours</h3>
              <p className="text-gray-300">
                Monday - Sunday
                <br />
                12:00 PM - 12:00 AM
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">💬 Quick Links</h3>
              <div className="space-y-2">
                <a
                  href="https://foodpanda.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-secondary-gold hover:underline"
                >
                  🟢 Order on Foodpanda
                </a>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-secondary-gold hover:underline"
                >
                  💬 Message on WhatsApp
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-secondary-gold hover:underline"
                >
                  📍 View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white bg-opacity-10 border border-secondary-gold rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary-gold"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white bg-opacity-10 border border-secondary-gold rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary-gold"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white bg-opacity-10 border border-secondary-gold rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary-gold"
                placeholder="Your phone"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-white bg-opacity-10 border border-secondary-gold rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary-gold"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary-gold hover:bg-opacity-90 text-primary-dark py-3 rounded-lg font-bold transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map Embed */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-xl h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.0897850886706!2d71.57849341541324!3d34.00087506544559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917bc2ef5611f%3A0x1234567890!2sPeshawar!5e0!3m2!1sen!2spk!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Habibi Restaurant Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
