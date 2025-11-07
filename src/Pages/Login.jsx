import { FaChevronRight, FaEye } from 'react-icons/fa';
import login2 from '../assets/login2.jpeg';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/ContextProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import ScrollLinked from '../Components/MotionCounter';
import LoadingSpinner from '../Components/Loading/Loading';

const Login = () => {
  const { signInAuthUser, isLoading, setUser, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate(null);
  const location = useLocation(null);
  const emailRef = useRef(null);

  const [showPass, setShowPass] = useState(false);

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

  const handleClickShow = () => {
    setShowPass(!showPass);
  };

  const handleSignInAuthUser = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInAuthUser(email, password)
      .then(result => {
        e.target.reset();
        setUser(result.user);
        toast.success('Login successfully');
        navigate(location.state ? location.state : '/');
      })
      .catch(err => {
        let message = '';

        if (err.code === 'auth/user-disabled') {
          message = 'Account disabled.';
        } else if (err.code === 'auth/user-not-found') {
          message = 'No account found. Please register your account.';
        } else if (err.code === 'auth/wrong-password') {
          message = 'Incorrect password.';
        } else if (err.code === 'auth/invalid-credential') {
          message = 'No account found. Please register account.';
        } else if (err.code === 'auth/network-request-failed') {
          message = 'Network error. Check your internet connection.';
        } else if (err.code === 'auth/internal-error') {
          message = 'Server error. Please try again.';
        } else {
          message = 'Something went wrong. Please try again.';
        }
        toast.error(message);
      });
  };

  const handleReset = () => {
    const email = emailRef.current.value;
    navigate('/forgetPage', { state: { email } });
  };

  const handleGoogleAuthUser = () => {
    googleLogin()
      .then(result => {
        setUser(result.user);
        toast.success('SignIn Successfully');
        navigate('/');
      })
      .catch(error => toast.error(error.message));
  };

  return (
    <div className="bg-[#0c062e] h-full">
      <title>Login page</title>
      <ScrollLinked></ScrollLinked>
      <div className="container mx-auto px-[3%] md:px-0">
        <header>
          <Navbar></Navbar>
        </header>
        <div className="mx-auto min-h-[80vh] w-full flex justify-center items-center mt-10 md:mt-20">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="md:max-w-[40%] w-full h-auto">
              <img className="w-full" src={login2} alt="" />
            </div>
            <div className="md:w-1/2 w-full">
              <div className="mb-6">
                <h2 className="text-3xl text-slate-100  font-semibold titleFont">
                  <span className="text-[#e529d8]">Login</span> Here
                </h2>
                <div className="flex gap-1">
                  <div className="border border-[#c313b7] w-12"></div>
                  <div className="border border-[#c313b7] w-1.5"></div>
                  <div className="border border-[#c313b7] w-1.5"></div>
                  <div className="border border-[#c313b7] w-2.5"></div>
                </div>
              </div>
              <form onSubmit={handleSignInAuthUser}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    required
                    className="input text-slate-400 border-[#c313b7e3] focus:outline-none focus:ring-1 focus:ring-[#c313b7] shadow-[0_0_25px_#c313b73c] lg:max-w-2/3 w-full"
                    name="email"
                    ref={emailRef}
                    placeholder="Email"
                  />
                  <label className="label flex gap-3 link-hover cursor-pointer w-fit">
                    Password
                    {showPass ? (
                      <BsEyeSlashFill
                        onClick={handleClickShow}
                        size={14}
                        className="text-slate-500  hover:text-slate-200 transition-all"
                      ></BsEyeSlashFill>
                    ) : (
                      <BsEyeFill
                        onClick={handleClickShow}
                        size={14}
                        className="text-slate-500  hover:text-slate-200 transition-all"
                      ></BsEyeFill>
                    )}
                  </label>
                  <input
                    type={`${showPass ? 'text' : 'password'}`}
                    className="pass input text-slate-400 border-[#c313b7e3] focus:outline-none focus:ring-1 focus:ring-[#c313b7] shadow-[0_0_25px_#c313b73c] lg:max-w-2/3 w-full relative"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-fit link-hover"
                  >
                    Forgot password?
                  </button>
                  <button className="btn border border-[#c313b7]  lg:max-w-2/3 w-full mt-4 rounded-lg bg-[#c313b7] hover:bg-[#a31296] shadow-[0_0_25px_#c313b73c] text-white font-medium tracking-wide transition duration-300">
                    Login
                  </button>
                </fieldset>
              </form>
              <div className="divider lg:max-w-2/3 w-full">OR</div>
              {/* Google */}
              <button
                onClick={handleGoogleAuthUser}
                className="btn lg:max-w-2/3 w-full mt-4 rounded-lg border border-[#c313b7a8] shadow-[0_0_15px_#c313b73c] hover:shadow-[0_0_20px_#c313b7] bg-[#c313b72d] text-white font-medium tracking-wide transition duration-300"
              >
                <img
                  src="https://img.icons8.com/color/480/google-logo.png"
                  alt="twitter"
                  className="w-6"
                />
                Login with Google
              </button>
              <div className="pt-6 text-center lg:max-w-2/3 w-full flex gap-2 justify-center">
                Don't have an account ?{' '}
                <Link
                  to="/registration"
                  className="text-[#e529d8] flex items-center gap-1 linkClick"
                >
                  Registration
                  <div className="flex arrow">
                    <FaChevronRight className="text-[#c313b7]" />
                    <FaChevronRight className="text-[#c313b768]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Login;
