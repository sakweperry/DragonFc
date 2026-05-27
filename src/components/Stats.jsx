import React from 'react';

const StatCard = ({ number, label }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
    <div className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-2">
      {number}
    </div>
    <div className="text-sm uppercase tracking-wide font-semibold">
      {label}
    </div>
  </div>
);

const Stats = ({ stats }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Drangon FC</h2>
          <p className="text-slate-300 text-lg">The impact we've made in the football community</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
