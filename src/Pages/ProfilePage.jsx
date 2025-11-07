import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { useState } from 'react';
import UpdateProfile from '../Components/Profile/UpdateProfile';
import Profile from '../Components/Profile/Profile';
import ScrollLinked from '../Components/MotionCounter';

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="flex flex-col bg-[#0c062e]">
      <title>Profile page</title>
      <ScrollLinked></ScrollLinked>
      <div className="container mx-auto px-[3%] md:px-0 flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>

        <main className="flex-1 my-24 px-4 flex flex-col gap-6 justify-center items-center w-full">
          {!editMode && (
            <div>
              <h2 className="text-3xl text-slate-100 titleFont font-semibold">
                <span className="text-[#e529d8]">My</span> Profile
              </h2>
              <div className="flex gap-1">
                <div className="border border-[#c313b7] w-5"></div>
                <div className="border border-[#c313b7] w-1"></div>
                <div className="border border-[#c313b7] w-1"></div>
                <div className="border border-[#c313b7] w-1.5"></div>
              </div>
            </div>
          )}
          <div className="max-w-lg w-full mx-auto border border-[#c313b7] bg-[#c313b723] rounded-2xl shadow-[0_0_35px_#c313b73c] p-8 backdrop-blur ">
            {!editMode ? (
              <Profile setEditMode={setEditMode}></Profile>
            ) : (
              <UpdateProfile setEditMode={setEditMode}></UpdateProfile>
            )}
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProfilePage;
