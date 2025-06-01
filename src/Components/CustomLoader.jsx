// CustomLoader.jsx
import React from 'react';
import favicon from '../../public/favicon.ico';

const CustomLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white">
      <div className="relative w-24 h-24">
        {/* Rotating Circle */}
        <div className="absolute inset-0 border-4 border-t-transparent border-black rounded-full animate-spin"></div>

        {/* Favicon */}
        <img
          src={favicon}
          alt="Loading..."
          className="absolute inset-0 m-auto w-10 h-10 object-contain"
        />
      </div>
    </div>
  );
};

export default CustomLoader;
