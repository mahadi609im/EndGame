import React from 'react';
import ErrorImg from '../../assets/error404.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0c062e] text-slate-300">
      {/* Navbar */}
      <header className="containerCls">
        <Navbar />
      </header>

      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-20">
        {/* Glowing 404 Image */}
        <div className="relative">
          <img
            src={ErrorImg}
            alt="Error 404"
            className="w-[250px] md:w-[350px] drop-shadow-[0_0_30px_#c313b7]"
          />
          <div className="absolute inset-0 blur-3xl bg-[#c313b7]/20 rounded-full -z-10"></div>
        </div>

        {/* Error Text */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-6 text-[#c313b7]">
          Oops! Page Not Found
        </h1>
        <p className="mt-4 text-base text-slate-400 max-w-md">
          Looks like you’ve reached a dead zone in the game.
          <br /> Let’s get you back to the action!
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="mt-8 inline-block px-6 py-3 rounded-full bg-[#9b0f8e] hover:bg-[#c313b7] hover:shadow-[0_0_30px_#c313b7aa] transition-all duration-300 font-semibold text-slate-100 shadow-[0_0_15px_#9b0f8e80]"
        >
          Back to Home
        </Link>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ErrorPage;
