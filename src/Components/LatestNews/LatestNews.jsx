import React from 'react';
import news1 from '../../assets/news1.jpg';
import news2 from '../../assets/news2.jpg';

import { FaChevronRight } from 'react-icons/fa';
const LatestNews = () => {
  return (
    <div className="py-10 px-2 md:px-12 lg:px-16 mt-12 md:mty-[56px] lg:mt-20 containerCls">
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-50 italic mb-6 titleFont">
          Latest News
        </h2>
      </div>
      <div className=" flex flex-col md:flex-row justify-between items-center gap-6 mt-16">
        <div className="w-full md:w-1/2 h-auto">
          <img className="w-full h-full object-cover" src={news1} alt="" />
        </div>
        <div className="md:max-w-1/2 w-full">
          <h4 className="text-xl font-medium text-slate-100 mb-4">
            11.11.18 / in <span className="text-[#c313b7]">Games</span>
          </h4>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-50">
            The best online game is out now!
          </h3>
          <p className="text-slate-500 py-10">
            Step into the battlefield of excitement where every second counts.
            Experience stunning graphics, realistic gameplay, and intense
            multiplayer action that will keep you on the edge of your seat. Join
            millions of players worldwide and prove your skills in the ultimate
            online gaming adventure!.....
          </p>
          <button className="flex gap-2 items-center">
            Read More{' '}
            <div className="flex">
              <FaChevronRight className="text-[#c313b7]" />
              <FaChevronRight className="text-[#c313b768]" />
            </div>
          </button>
        </div>
      </div>
      <div className=" flex flex-col-reverse md:flex-row justify-between items-center gap-6 mt-16">
        <div className="md:max-w-1/2 w-full">
          <h4 className="text-xl font-medium text-slate-100 mb-4">
            11.11.18 / in <span className="text-[#c313b7]">Games</span>
          </h4>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-50">
            Rise of Champions: The Battle Begins!
          </h3>
          <p className="text-slate-500 py-10">
            Enter a new era of gaming where strategy meets adrenaline. Build
            your squad, master your weapons, and dive into action-packed battles
            that test your reflexes and teamwork. Every victory earns you glory
            — every defeat makes you stronger. Are you ready to dominate the
            leaderboard?.....
          </p>
          <button className="flex gap-2 items-center">
            Read More{' '}
            <div className="flex">
              <FaChevronRight className="text-[#c313b7]" />
              <FaChevronRight className="text-[#c313b768]" />
            </div>
          </button>
        </div>
        <div className="w-full md:w-1/2 h-auto">
          <img className="w-full h-full object-cover" src={news2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
