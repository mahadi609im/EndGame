import React, { useContext } from 'react';
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
        <NavLink to={`/allGames`}>All Games</NavLink>
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
    <footer className="bg-[#0d0d0d] text-white mt-20 pt-12 pb-8 font-poppins">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-10 text-left">
          {/* Brand */}
          <div className="flex-1 min-w-[220px]">
            <img className="w-36 mb-3" src={logo} alt="EndGame Logo" />
            <p className="text-gray-400 mb-4">
              Enter the arena. Compete. Connect. Conquer. Challenge your
              friends. Master your skills. Dominate the game.
            </p>
            <div className="flex gap-4 mt-2">
              <Link
                to="https://www.facebook.com/mahadi609im"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/48/facebook-new.png"
                  alt="facebook"
                  className="w-7 h-7 hover:scale-110 transition"
                />
              </Link>
              <Link
                to="https://github.com/mahadi609im"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluency/48/github.png"
                  alt="github"
                  className="w-7 h-7 hover:scale-110 transition"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/mahadi609im/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                  className="w-7 h-7 hover:scale-110 transition"
                />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div className="flex-1 min-w-[160px]">
            <h4 className="font-semibold mb-4 text-lg">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              {links}
              {!user && links2}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1 min-w-[160px]">
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <p className="text-gray-400 mb-3">
              Need help or partnership? Let’s connect!
            </p>
            <Link
              to="https://www.linkedin.com/in/mahadi609im/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c313b7] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#d133d9] transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-5 text-center text-gray-500 text-sm">
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
