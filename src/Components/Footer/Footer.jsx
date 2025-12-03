import React, { useContext } from 'react';
import NewsLatter from '../NewsLatter/NewsLatter';
import logo from '../../assetss/logo.png';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider/ContextProvider';

const Footer = () => {
  const { user } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/allGames`}>All games</NavLink>
      </li>
      <li>
        <NavLink to={`/category`}>All Categories</NavLink>
      </li>
    </>
  );
  const links2 = (
    <>
      <li>
        <NavLink to={`/login`}>Login</NavLink>
      </li>
      <li>
        <NavLink to={`/registration`}>Registration</NavLink>
      </li>
    </>
  );

  return (
    <footer className="bg-[#0d0d0d] text-white mt-20 pt-10 pb-5 font-poppins">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔗 Footer Links */}
        <div className="flex flex-wrap justify-between gap-8 text-left">
          {/* Brand */}
          <div className="flex-1 min-w-[200px]">
            <img className="w-32" src={logo} alt="" />
            <p className="text-gray-400 mt-2">
              Enter the arena. Compete. Connect. Conquer.
            </p>
            <div className="flex gap-3 mt-4">
              <Link to="https://www.facebook.com/mahadi609im">
                <img
                  src="https://img.icons8.com/color/480/facebook-new.png"
                  alt="facebook"
                  className="w-8"
                />
              </Link>
              <Link to="https://github.com/mahadi609im">
                <img
                  src="https://img.icons8.com/fluency/96/github.png"
                  alt="github"
                  className="w-8"
                />
              </Link>
              <Link to="https://www.linkedin.com/in/mahadi609im/">
                <img
                  src="https://img.icons8.com/color/144/linkedin.png"
                  alt="linkedIn"
                  className="w-8"
                />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-3">NavLinks</h4>
            <ul className="space-y-1 text-gray-400">
              {links}
              {!user && links2}
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
            <Link
              to="https://www.linkedin.com/in/mahadi609im/"
              className="bg-[#c313b7] text-white px-4 py-2 rounded-md font-semibold transition cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 text-center mt-10 pt-5 text-gray-500 text-sm">
          © 2025 EndGame. All Rights Reserved. | Developed by{' '}
          <a
            href="https://github.com/mahadi609im"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Mahadi H. Milon
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
