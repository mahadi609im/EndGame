import React, { useContext, useRef } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { AuthContext } from '../Context/AuthProvider/ContextProvider';
import { Link, useLocation } from 'react-router';
import ScrollLinked from '../Components/MotionCounter';
import { toast } from 'react-toastify';
import LoadingSpinner from '../Components/Loading/Loading';
import { FaChevronRight } from 'react-icons/fa';

const ForgetPage = () => {
  const emailRef = useRef(null);
  const location = useLocation();

  const { resetPasswordAuthUser, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen h-full bg-[#0c062e]">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="flex-1">
          <LoadingSpinner></LoadingSpinner>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
  }

  const henleresetPasswordAuthUser = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    resetPasswordAuthUser(email)
      .then(() => {
        alert('Email Sent for reset password!');
        window.open('https://mail.google.com/mail', '_blank');
        e.target.reset();
      })
      .catch(error => toast.error(error));
  };

  return (
    <div className="flex flex-col bg-[#0c062e]">
      <title>Forget page</title>
      <ScrollLinked></ScrollLinked>
      <div className="container mx-auto px-[3%] md:px-0">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="flex-1 my-24 px-4">
          <div className="max-w-md mx-auto  border border-[#c313b7] bg-[#c313b723] rounded-2xl shadow-[0_0_25px_#c313b73c] p-8">
            {/* Title Section */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-semibold text-white mb-2 titleFont">
                <span className="text-[#c313b7]">Reset</span> Password
              </h2>
              <p className="text-slate-400 text-sm">
                Enter your registered email below to receive a reset link
              </p>
              <div className="flex justify-center gap-1 mt-3">
                <div className="w-2 h-0.5 bg-[#c313b79f]"></div>
                <div className="w-2 h-0.5 bg-[#c313b79f]"></div>
                <div className="w-2 h-0.5 bg-[#c313b79f]"></div>
                <div className="w-24 h-0.5 bg-[#c313b79f]"></div>
                <div className="w-2 h-0.5 bg-[#c313b79f]"></div>
                <div className="w-2 h-0.5 bg-[#c313b79f]"></div>
                <div className="w-2 h-0.5 bg-[#c313b79f]"></div>
              </div>
            </div>

            {/* Form Section */}
            <form onSubmit={henleresetPasswordAuthUser} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  defaultValue={location.state?.email || ''}
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#c313b7a8] text-slate-300 focus:outline-none focus:ring-1 focus:ring-[#c313b7] shadow-[0_0_25px_#c313b73c]"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#c313b7] hover:bg-[#a31296] text-white font-medium tracking-wide transition duration-300"
              >
                Send Reset Link
              </button>
            </form>

            {/* Extra Info */}
            <p className="text-center text-sm text-slate-500 mt-6">
              Didn’t receive the email? Check your spam folder or try again.
            </p>
            <div className="pt-6 text-center w-full flex gap-2 justify-center text-slate-300">
              Back to
              <Link
                to="/login"
                className="text-[#e529d8] flex items-center gap-1 linkClick"
              >
                Login
                <div className="flex arrow">
                  <FaChevronRight className="text-[#c313b7]" />
                  <FaChevronRight className="text-[#c313b768]" />
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ForgetPage;
