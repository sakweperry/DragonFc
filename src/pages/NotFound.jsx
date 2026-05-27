import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="text-center px-4">
        <div className="text-8xl md:text-9xl font-bold text-emerald-600 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Page Not Found</h1>
        <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;