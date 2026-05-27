import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">⚽ DRAGON FC</h3>
            <p className="text-slate-400">Where the world celebrates football.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-emerald-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition">About</Link></li>
              <li><Link to="/news" className="hover:text-emerald-400 transition">News</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition">Twitter</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Instagram</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Facebook</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">YouTube</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Subscribe</h4>
            <p className="text-slate-400 text-sm mb-3">Get the latest football updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-4 rounded-r-lg transition-colors text-white font-semibold">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          <p>&copy; 2025 FootballHub. All rights reserved. Built with passion for the beautiful game.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;