import React from 'react';
import { Link } from 'react-router-dom';
import jersey from "../assets/jersey.jpeg";
import manager from "../assets/manager.jpeg";
import game from "../assets/game.jpeg";

const NewsPreview = () => {
  const previewNews = [
    {
     image: jersey,
      title: 'Dragon New Jersey Lunch',
      description: 'Lunching of Dragon new jersey on 20th of May 2026.'
    },
    {
      image: manager,
      title: 'Signing of New Coach',
      description: 'Manager AziBen of Dragon FC, just sign Coach Karamoko Sanogo into Dragon FC as the new coach.'
    },
    {
      image: game,
      title: 'Dragon Mini tournament',
      description: 'Dragon FC is organizing a mini tournament of 3 teams including lion Fc'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Latest News</h2>
          <p className="text-slate-600 text-lg">Stay updated with the latest from the football world</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewNews.map((item, idx) => (
            <div key={idx} className="bg-whit rounded-2xl overflow-hidden shadow-lg hover:shadow-xl  transition">
              <img src={item.image} alt={item.title} className="w-full h-80 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/news" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full transition">
            View All News →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;