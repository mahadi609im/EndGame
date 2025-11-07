import React from 'react';

const NewsLatter = () => {
  return (
    <div className="bg-[#1a1a1a] text-center rounded-xl py-10 px-6 mb-16">
      <h2 className="text-xl md:text-3xl font-bold text-[#c313b7] ">
        Join the Battle for Daily Gaming Updates
      </h2>
      <p className="text-gray-400 mt-2">
        Get the latest news, tournaments & exclusive drops straight to your
        inbox.
      </p>

      <div className="mt-6 flex justify-center w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-2 md:px-4 py-2 md:py-3 md:w-80 rounded-l-md focus:outline-none text-gray-500 bg-slate-100 w-full"
        />
        <button className="bg-[#c313b7]  text-white px-3 md:px-5 py-2 md:py-3 rounded-r-md transition-all duration-200 text-sm md:text-base font-medium">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLatter;
