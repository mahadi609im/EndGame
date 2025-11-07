import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/ContextProvider';
import { toast } from 'react-toastify';

const UpdateProfile = ({ setEditMode }) => {
  const { user, setUser, updateUserProfile, setIsLoading } =
    useContext(AuthContext);

  const handleUpdateUserProfile = e => {
    e.preventDefault();
    setIsLoading(true); // ফর্ম সাবমিট শুরু হলে loading true

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const updateInfo = {
      displayName: name,
      photoURL: photo,
    };

    updateUserProfile(updateInfo)
      .then(() => {
        setUser({ ...user, ...updateInfo });
        toast.success('Update Successfully');
        setEditMode(false);
      })
      .catch(error => {
        toast.error(error.message || error);
      })
      .finally(() => setIsLoading(false)); // শেষে loading false
  };

  return (
    <div>
      {/* Update Form */}
      <div className="flex justify-center mb-5">
        <div>
          <h2 className="text-3xl text-slate-100 font-semibold titleFont">
            <span className="text-[#e529d8]">Update</span> Profile
          </h2>
          <div className="flex gap-1">
            <div className="border border-[#c313b7] w-5"></div>
            <div className="border border-[#c313b7] w-1"></div>
            <div className="border border-[#c313b7] w-1"></div>
            <div className="border border-[#c313b7] w-1.5"></div>
          </div>
        </div>
      </div>

      <form onSubmit={handleUpdateUserProfile} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName || ''}
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#c313b7a8] text-slate-300 focus:outline-none focus:ring-1 focus:ring-[#c313b7] shadow-[0_0_25px_#c313b73c]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            defaultValue={user?.photoURL || ''}
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#c313b7a8] text-slate-300 focus:outline-none focus:ring-1 focus:ring-[#c313b7] shadow-[0_0_25px_#c313b73c]"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 py-3 rounded-lg bg-[#c313b7] hover:bg-[#a31296] text-white font-semibold transition text-sm md:text-base"
          >
            Update
          </button>
          <button
            onClick={() => setEditMode(false)}
            type="button"
            className="flex-1 py-3 rounded-lg border border-[#c313b7] text-[#c313b7] hover:bg-[#c313b73c] transition font-semibold text-sm md:text-base"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
