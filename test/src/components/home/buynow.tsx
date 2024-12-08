import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-[40%] md:w-[50%]">
          <img
            src="/woman-man.png"
            alt="Couple in red plaid blanket"
            className="w-full h-auto shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-6 ml-10">
          <div className="text-gray-500 uppercase tracking-wide text-sm font-bold">
            SUMMER 2020
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Part of the Neural Universe
          </h1>

          <p className="text-gray-600 text-lg">
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition-colors">
              BUY NOW
            </button>
            <button className="border border-green-500 text-green-500 hover:bg-green-50 px-6 py-3 rounded-md transition-colors">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
