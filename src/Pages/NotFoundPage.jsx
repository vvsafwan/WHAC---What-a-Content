import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-6" style={{ backgroundColor: '#00001a' }}>
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <p className="text-xl max-w-md mb-6 font-magnetik-light">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="text-[#00001a] bg-white px-20 py-2 rounded hover:bg-[#00001a] hover:text-white transition duration-300 font-medium"
      >
        Go Home
      </Link>
    </div>
  );
}
