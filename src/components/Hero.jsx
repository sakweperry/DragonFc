import React, { useState, useEffect } from 'react';

const Hero = ({ images, title, subtitle }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="relative h-screen min-h-[550px] flex items-center justify-center text-white overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0 z-0">
        <div 
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="min-w-full h-full">
              <img 
                src={img} 
                alt={`Football hero ${idx + 1}`} 
                className="w-full h-full object-cover brightness-50" 
              />
            </div>
          ))}
        </div>
        
        {/* Carousel Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white text-3xl px-3 py-1 rounded-md transition z-10"
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white text-3xl px-3 py-1 rounded-md transition z-10"
          aria-label="Next slide"
        >
          ❯
        </button>
        
        {/* Dots/Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-emerald-500 scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Hero Text Overlay */}
      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {title}
        </h1>
        <h3 className="text-xl md:text-2xl font-medium drop-shadow-md text-emerald-100">
          {subtitle}
        </h3>
      </div>
    </section>
  );
};

export default Hero;