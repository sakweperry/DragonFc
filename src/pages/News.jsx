import React, { useState } from 'react';

const News = () => {
  const [filter, setFilter] = useState('all');

  const allNews = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'Champions League Final Set for Wembley',
      description: 'Epic clash between defending champions and rising stars promises fireworks. The match will be played on June 1st at the iconic Wembley Stadium.',
      date: '2 hours ago',
      category: 'match',
      author: 'James Wilson'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1560087637-6c563e6f3d6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'Summer Transfer Window: Top 5 Deals',
      description: 'Big moves already shaking up the power balance across Europe. Mbappe, Salah, and others could be on the move this summer.',
      date: '5 hours ago',
      category: 'transfer',
      author: 'Maria Garcia'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'Youngster of the Year Nominees Revealed',
      description: 'Who will take home the golden boy award? Five exceptional talents have been shortlisted for this year\'s prestigious award.',
      date: 'Yesterday',
      category: 'awards',
      author: 'Thomas Brown'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'Premier League Title Race Heats Up',
      description: 'With only 5 games remaining, three teams are still in contention for the Premier League trophy.',
      date: '2 days ago',
      category: 'match',
      author: 'Sarah Johnson'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'Injury Crisis Hits Top Club',
      description: 'Three key players ruled out for the remainder of the season in a major blow to their title hopes.',
      date: '3 days ago',
      category: 'injury',
      author: 'David Miller'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'World Cup 2026 Qualifiers Draw',
      description: 'Exciting matchups revealed as nations begin their journey to the biggest tournament in football.',
      date: '4 days ago',
      category: 'international',
      author: 'Lisa Anderson'
    }
  ];

  const categories = [
    { value: 'all', label: 'All News' },
    { value: 'match', label: 'Matches' },
    { value: 'transfer', label: 'Transfers' },
    { value: 'awards', label: 'Awards' },
    { value: 'injury', label: 'Injuries' },
    { value: 'international', label: 'International' }
  ];

  const filteredNews = filter === 'all' ? allNews : allNews.filter(news => news.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-emerald-900 to-slate-900 flex items-center justify-center text-white">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Football News</h1>
          <p className="text-xl max-w-2xl mx-auto">Stay updated with the latest stories</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-5 py-2 rounded-full font-semibold transition ${
                  filter === cat.value
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-600 text-sm font-semibold uppercase">{item.category}</span>
                    <span className="text-slate-400 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">By {item.author}</span>
                    <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition">Read More →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No news found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
