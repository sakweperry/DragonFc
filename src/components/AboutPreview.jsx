import React from 'react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Football stadium"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">About Dragon Football Club</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Dragon Football Club began in 2024 as a simple WhatsApp 
              group where friends came together to have fun and build 
              connections. What started as casual conversations and 
              enjoyable moments soon grew into something greater.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
             As our bond became stronger, we began organizing morning football 
             matches, which we called temu games. These games gave us the 
             opportunity to develop our skills, teamwork, and passion for football.
            </p>
            <Link 
              to="/about" 
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
