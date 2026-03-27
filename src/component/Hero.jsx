import React from "react";
import BannerImg from "../assets/banner-main.png"

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-2 container mx-auto">
      
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden relative">
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-black to-pink-300 opacity-90"></div>

        {/* Content */}
        <div className="relative z-10 text-center py-20 px-6 text-white">
          
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div>
              <img src={BannerImg} alt="" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 mb-8">
            Beyond Boundaries Beyond Limits
          </p>

          {/* Button */}
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 hover:scale-105 transition duration-300">
            Claim Free Credit
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;