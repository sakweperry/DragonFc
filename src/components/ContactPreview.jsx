import React from 'react';
import { Link } from 'react-router-dom';

const ContactPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Connect?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Have questions, feedback, or want to collaborate? We'd love to hear from you.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-white text-emerald-700 hover:bg-slate-100 font-semibold px-8 py-3 rounded-full transition"
        >
          Get In Touch →
        </Link>
      </div>
    </section>
  );
};

export default ContactPreview;
