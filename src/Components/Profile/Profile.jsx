import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/ContextProvider';
import avater from '../../assetss/avater.jpg';
import LoadingSpinner from '../Loading/Loading';

const Profile = ({ setEditMode }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <>
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-8">
        <div className="relative">
          <img
            src={user?.photoURL || avater}
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-2 border-[#c313b7] shadow-[0_0_25px_#c313b7a8] object-cover"
            onError={e => {
              e.currentTarget.src = avater;
            }}
          />
        </div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold bg-linear-to-r from-[#c313b7] via-[#e529d8] to-[#ff69b4] bg-clip-text text-transparent">
          {user?.displayName || 'Anonymous user'}
        </h2>
      </div>

      {/* Divider */}
      <div className="border-t border-[#c313b73c] mb-8"></div>

      {/* Profile Info */}
      <div className="space-y-4 text-slate-300">
        <div className="flex justify-between">
          <span className="font-medium text-slate-400">Username:</span>
          <span>{user?.displayName || 'Not Set'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-slate-400">Email:</span>
          <span>{user?.email || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-slate-400">Account Status:</span>
          <span className="text-green-400">Active</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-slate-400">Last Login:</span>
          <span>October 2025</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#c313b73c] my-8"></div>

      {/* Update Button */}
      <button
        onClick={() => setEditMode(true)}
        className="w-full py-3 rounded-lg border border-[#c313b7] text-[#c313b7] hover:bg-[#c313b73c] transition font-semibold shadow-[0_0_20px_#c313b73c]"
      >
        Update Profile
      </button>
    </>
  );
};

export default Profile;
