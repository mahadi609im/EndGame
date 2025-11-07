import { FaChevronRight } from 'react-icons/fa';
import registration from '../assets/reg.jpeg';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/ContextProvider';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import ScrollLinked from '../Components/MotionCounter';
import LoadingSpinner from '../Components/Loading/Loading';

const Registration = () => {
  const { registerAuthCreate } = useContext(AuthContext);
  const { setUser, updateUserProfile, googleLogin, isLoading } =
    useContext(AuthContext);
  const [error, setError] = useState(null);

  const navigate = useNavigate(null);

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

  const handleRegisterAuthCreate = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checkBox = e.target.checkBox.checked;

    const regexUpper = /^(?=.*[A-Z]).+$/;
    const regexLower = /^(?=.*[a-z]).+$/;

    if (password.length < 6) {
      toast.error('Password must-be 6 character or longer');
      return;
    }

    if (!regexUpper.test(password)) {
      toast.error('Use at least one upperCase letter');
      return;
    }

    if (!regexLower.test(password)) {
      toast.error('Use at least one lowerCase letter');
      return;
    }

    if (!checkBox) {
      toast.error('Please Accept our Terms & conditions');
      return;
    }

    registerAuthCreate(email, password)
      .then(result => {
        e.target.reset();
        const updateInfo = {
          displayName: name,
          photoURL: photo,
        };
        updateUserProfile(updateInfo)
          .then(() => {
            setUser({ ...result.user, ...updateInfo });
          })
          .catch(error => {
            setError(error.message);
            toast.error(error.message);
          });
        toast.success('Registration successfully');
        navigate('/');
      })
      .catch(err => {
        let message = '';

        if (err.code === 'auth/email-already-in-use') {
          message = 'Email already in use.';
        } else if (err.code === 'auth/invalid-email') {
          message = 'Invalid email address.';
        } else if (err.code === 'auth/operation-not-allowed') {
          message = 'Account type not allowed.';
        } else if (err.code === 'auth/weak-password') {
          message = 'Weak password. Min 6 chars.';
        } else if (err.code === 'auth/missing-password') {
          message = 'Enter your password.';
        } else if (err.code === 'auth/missing-email') {
          message = 'Enter your email.';
        } else if (err.code === 'auth/internal-error') {
          message = 'Server error. Try again.';
        } else if (err.code === 'auth/network-request-failed') {
          message = 'Network error. Check connection.';
        } else if (err.code === 'auth/too-many-requests') {
          message = 'Too many tries. Wait a bit.';
        } else {
          message = 'Something went wrong.';
        }

        setError(message);
        toast.error(error);
      });
  };

  const handleGoogleAuthUser = () => {
    googleLogin()
      .then(result => {
        setUser(result.user);
        navigate('/');
      })
      .catch(error => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  const handleClickShow = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="bg-[#0c062e] h-full">
      <title>Registration page</title>
      <ScrollLinked></ScrollLinked>
      <div className="container mx-auto px-[3%] md:px-0">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="mx-auto min-h-screen h-full w-full flex justify-center items-center mt-10 md:mt-20">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="md:max-w-[50%] w-full h-auto rounded-md">
              <img className="w-full" src={registration} alt="" />
            </div>
            <div className="md:w-1/2 w-11/12">
              <div className="mb-6">
                <h2 className="text-3xl text-slate-100  font-semibold titleFont">
                  <span className="text-[#e529d8]">Registration</span> Here
                </h2>
                <div className="flex gap-1">
                  <div className="border border-[#c313b7] w-[150px]"></div>
                  <div className="border border-[#c313b7] w-1.5"></div>
                  <div className="border border-[#c313b7] w-1.5"></div>
                  <div className="border border-[#c313b7] w-2.5"></div>
                </div>
              </div>
              <form onSubmit={handleRegisterAuthCreate}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="h-12 lg:max-w-4/5 w-full px-4 py-3 rounded-lg border border-[#c313b7e3] text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#c313b7] shadow-[0_0_25px_#c313b73c] box-border font-sans"
                    placeholder="Enter your name"
                    name="name"
                  />
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    className="h-12 lg:max-w-4/5 w-full px-4 py-3 rounded-lg border border-[#c313b7e3] text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#c313b7] shadow-[0_0_25px_#c313b73c] box-border font-sans"
                    placeholder="Enter your photo url"
                    name="photo"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="h-12 lg:max-w-4/5 w-full px-4 py-3 rounded-lg border border-[#c313b7e3] text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#c313b7] shadow-[0_0_25px_#c313b73c] box-border font-sans"
                    name="email"
                    required
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
                    className="h-12 lg:max-w-4/5 w-full px-4 py-3 rounded-lg border border-[#c313b7e3] text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#c313b7] shadow-[0_0_25px_#c313b73c] box-border font-sans"
                    name="password"
                    required
                    placeholder="Password"
                  />
                  <div className="mt-2">
                    <label className="label">
                      <input
                        type="checkbox"
                        name="checkBox"
                        className="checkbox"
                      />
                      Accept our Terms and Condition
                    </label>
                  </div>
                  <button className="btn border border-[#c313b7]  lg:max-w-4/5 w-full mt-4 rounded-lg bg-[#c313b7] hover:bg-[#a31296] shadow-[0_0_25px_#c313b73c] text-white font-medium tracking-wide transition duration-300">
                    Registration
                  </button>
                </fieldset>
              </form>
              <div className="divider lg:max-w-4/5 w-full">OR</div>
              {/* Google */}
              <button
                onClick={handleGoogleAuthUser}
                className="btn lg:max-w-4/5 w-full mt-4 rounded-lg border border-[#c313b7a8] shadow-[0_0_15px_#c313b73c] hover:shadow-[0_0_20px_#c313b7] bg-[#c313b72d] text-white font-medium tracking-wide transition duration-300"
              >
                <img
                  src="https://img.icons8.com/color/480/google-logo.png"
                  alt="twitter"
                  className="w-6"
                />
                Login with Google
              </button>
              <div className="pt-6 text-center lg:max-w-4/5 w-full flex justify-center gap-2">
                Already have an account ?{' '}
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
          </div>
        </main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Registration;
