import React from 'react';
import NewsLatter from '../NewsLatter/NewsLatter';
import logo from '../../assetss/logo.png';
import { Link } from 'react-router';

const HomeFooter = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white pt-10 pb-5 font-poppins rounded-xl">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔔 Subscribe Section */}
        <NewsLatter></NewsLatter>

        {/* 🔗 Footer Links */}
        <div className="flex flex-wrap justify-between gap-8 text-left">
          {/* Brand */}
          <div className="flex-1 min-w-[200px]">
            <img className="w-32" src={logo} alt="" />
            <p className="text-gray-400 mt-2">
              Enter the arena. Compete. Connect. Conquer.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#">
                <img
                  src="https://img.icons8.com/color/480/facebook-new.png"
                  alt="facebook"
                  className="w-8"
                />
              </a>
              <a href="#">
                <img
                  src="https://img.icons8.com/color/480/google-logo.png"
                  alt="twitter"
                  className="w-8"
                />
              </a>
              <a href="#">
                <img
                  src="https://img.icons8.com/color/480/google-play.png"
                  alt="youtube"
                  className="w-8"
                />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#">Games</a>
              </li>
              <li>
                <a href="#">Tournaments</a>
              </li>
              <li>
                <a href="#">Merch</a>
              </li>
              <li>
                <a href="#">Leaderboard</a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-3">Community</h4>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#">Forums</a>
              </li>
              <li>
                <a href="#">Discord</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-gray-400 mb-3">Need help or partnership?</p>
            <button className="bg-[#c313b7] text-white px-4 py-2 rounded-md font-semibold transition">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 text-center mt-10 pt-5 text-gray-500 text-sm">
          © 2025 EndGame. All Rights Reserved. | Developed by{' '}
          <Link
            to="https://github.com/mahadi609im"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Maha
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
