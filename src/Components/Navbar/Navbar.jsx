import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../../assetss/logo.png';
import avater from '../../assetss/avater.jpg';
import { useContext } from 'react';
import ContextProvider, {
  AuthContext,
} from '../../Context/AuthProvider/ContextProvider';
import { FaChevronRight } from 'react-icons/fa';
import { toast } from 'react-toastify';
import LoadingSpinner from '../Loading/Loading';

const Navbar = () => {
  const { user, signOutAuthUser } = useContext(AuthContext);
  const navigate = useNavigate(null);

  const handlesignOutAuthUser = () => {
    signOutAuthUser()
      .then(() => {
        toast.success('Logout successfully');
      })
      .catch(error => toast.error(error.message));
  };

  const links = (
    <>
      <li className="text-base font-normal text-slate-300">
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li className="text-base font-normal text-slate-300">
        <NavLink to={`/allGames`}>All games</NavLink>
      </li>
      <li className="text-base font-normal text-slate-300">
        <NavLink to={`/category`}>All Categories</NavLink>
      </li>
    </>
  );
  const links2 = (
    <>
      <li className="text-base font-normal text-slate-300">
        <NavLink to={`/login`}>Login</NavLink>
      </li>
      <li className="text-base font-normal text-slate-300">
        <NavLink to={`/registration`}>Registration</NavLink>
      </li>
    </>
  );

  return (
    <nav className="flex items-center justify-between py-5">
      <div className="flex items-center justify-center lg:block">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box mt-3 w-[150px] p-2 shadow border border-[#c313b7] bg-[#c313b73c]"
          >
            {links}
            {!user && links2}
          </ul>
        </div>
        <Link to="/" className="w-28 md:w-44 ml-0">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="menu menu-horizontal px-1 hidden lg:flex ">
          {links}
          {!user && links2}
        </ul>
        <div>
          {user && (
            <div className="flex gap-3 items-center md:ml-5">
              <div className="dropdown flex justify-center">
                {/* Profile Image (Trigger Button) */}
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar border border-[#c313b7a8] shadow-[0_0_15px_#c313b73c] hover:shadow-[0_0_20px_#c313b7]"
                >
                  <div className="w-10 rounded-full overflow-hidden">
                    <img
                      referrerPolicy="no-referrer"
                      className="object-cover"
                      src={user?.photoURL || avater}
                      alt="Profile"
                      onError={e => {
                        e.currentTarget.src = avater;
                      }}
                    />
                  </div>
                </div>

                {/* Dropdown Content */}
                <div
                  tabIndex={0}
                  className="mt-14 z-50 p-4 shadow menu menu-sm dropdown-content bg-[#111111] border border-[#c313b7a8] rounded-2xl w-64 space-y-3"
                >
                  {/* User Info */}
                  <div className="flex flex-col items-center text-center">
                    <img
                      referrerPolicy="no-referrer"
                      src={user?.photoURL || avater}
                      alt="User"
                      onError={e => {
                        e.currentTarget.src = avater; // fallback image
                      }}
                      className="w-14 h-14 rounded-full border border-[#c313b7a8] shadow-[0_0_15px_#c313b73c] object-cover"
                    />
                    <p className="text-slate-200 font-semibold mt-2">
                      {user?.displayName || 'Anonymous user'}
                    </p>
                    <p className="text-slate-400 text-sm">{user.email}</p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#c313b73c] my-2"></div>

                  {/* Action Button */}
                  <button
                    onClick={() => navigate('/profilePage')}
                    className="w-full btn border border-[#c313b7] hover:bg-[#c313b73c] text-slate-200 gap-2 items-center justify-center shadow-[0_0_20px_#c313b73c]"
                  >
                    Go to Profile
                    <div className="flex">
                      <FaChevronRight className="text-[#c313b7]" />
                      <FaChevronRight className="text-[#c313b768]" />
                    </div>
                  </button>
                </div>
              </div>

              <button
                onClick={handlesignOutAuthUser}
                className="btn px-5 rounded-full bg-[#c313b73c] shadow-[0_0_25px_#c313b73c] text-slate-300 flex justify-between gap-2 hover:text-slate-50 hover:scale-105 transition-all"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
