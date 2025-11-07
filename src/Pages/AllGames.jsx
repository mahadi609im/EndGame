import React, { useContext } from 'react';
import useClothesData from '../hooks/useClothesData';
import ClothesCard from '../Components/LetestCollection/ClothesCard';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import LoadingSpinner from '../Components/Loading/Loading';
import ScrollLinked from '../Components/MotionCounter';
import { AuthContext } from '../Context/AuthProvider/ContextProvider';

const AllGames = () => {
  const { clothesData, loading } = useClothesData();
  const { isLoading } = useContext(AuthContext);

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

  return (
    <div className="bg-[#0c062e]">
      <title>All game</title>
      <ScrollLinked></ScrollLinked>
      <div className="flex flex-col min-h-screen h-full">
        <header className="container mx-auto px-[3%] md:px-0">
          <Navbar></Navbar>
        </header>

        <div className="flex-1 container mx-auto px-[3%] md:px-0  mt-20">
          <div className="flex justify-center items-center">
            <div>
              <h2 className="text-3xl text-slate-100 titleFont font-semibold">
                <span className="text-[#e529d8]">All Apps </span> Here
              </h2>
              <div className="flex gap-1">
                <div className="border border-[#c313b7] w-[90px]"></div>
                <div className="border border-[#c313b7] w-[6px]"></div>
                <div className="border border-[#c313b7] w-[6px]"></div>
                <div className="border border-[#c313b7] w-[10px]"></div>
              </div>
            </div>
          </div>
          {loading ? (
            <LoadingSpinner></LoadingSpinner>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {clothesData.map((cloth, idx) => (
                <ClothesCard key={idx} cloth={cloth}></ClothesCard>
              ))}
            </div>
          )}
        </div>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default AllGames;
