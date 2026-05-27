import React from 'react';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import Stats from '../components/Stats';
import NewsPreview from '../components/NewsPreview';
import ContactPreview from '../components/ContactPreview';
import team from "../assets/team.jpeg";
import match from "../assets/match.jpeg";
import stadium from "../assets/stadium.webp";

const Home = () => {
  const heroData = {
    images: [
       stadium,
       team,
      match
    ],
    title: 'Welcome to Dragons Football Club',
    subtitle: 'Dragon  FC is the future, le Continent'
  };

  const statsData = [
    { number: '10+', label: 'Games won' },
    { number: '10M+', label: 'Monthly Fans' },
    { number: '50+', label: 'Expert Analysts' },
    { number: '24/7', label: 'Live Updates' }
  ];

  return (
    <div>
      <Hero {...heroData} />
      <AboutPreview />
      <Stats stats={statsData} />
      <NewsPreview />
      <ContactPreview />
    </div>
  );
};

export default Home;