
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">RP</span>
              </div>
              <span className="text-2xl font-bold text-white">Royal Pets</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner in pet care. Providing premium services and products 
              for over a decade, because your pets deserve royal treatment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-rose-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-rose-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-rose-400 transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-rose-400 transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-rose-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>123 Pet Paradise Lane</p>
              <p>Loveland, CO 80537</p>
              <p>(555) 123-PETS</p>
              <p>hello@royalpets.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Royal Pets. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">
            Made with ❤️ by Code Nexus Creations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
