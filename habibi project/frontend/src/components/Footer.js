import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-secondary-gold mb-2">Habibi</h3>
            <p className="text-gray-400 text-sm">
              Premium Arabic & BBQ Restaurant in Peshawar
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-secondary-gold transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-secondary-gold transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary-gold transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 +92 300 1234567</li>
              <li>📍 Peshawar, KP</li>
              <li>⏰ 12 PM - 12 AM</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-secondary-gold hover:text-white transition text-lg">
                f
              </a>
              <a href="#" className="text-secondary-gold hover:text-white transition text-lg">
                📷
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="text-secondary-gold hover:text-white transition text-lg">
                💬
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Habibi Restaurant Peshawar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
