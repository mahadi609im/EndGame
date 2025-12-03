import React, { useContext, useState, useEffect } from 'react';
import useClothesData from '../hooks/useClothesData';
import ClothesCard from '../Components/LetestCollection/ClothesCard';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import LoadingSpinner from '../Components/Loading/Loading';
import ScrollLinked from '../Components/MotionCounter';
import { AuthContext } from '../Context/AuthProvider/ContextProvider';
import { FaChevronDown } from 'react-icons/fa';

const AllGames = () => {
  const { clothesData, loading } = useClothesData();
  const { isLoading } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  // SORTING STATE
  const [sortedData, setSortedData] = useState([]);

  // When data loads → set sortedData
  useEffect(() => {
    if (clothesData && clothesData.length > 0) {
      setSortedData(clothesData);
    }
  }, [clothesData]);

  // SORT FUNCTION
  const handleSort = type => {
    let sorted = [...sortedData];

    if (type === 'asc') {
      sorted.sort((a, b) => a.ratings - b.ratings);
    } else {
      sorted.sort((a, b) => b.ratings - a.ratings);
    }

    setSortedData(sorted);
    setOpen(false);
  };

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
        <header
          className="
            container mx-auto px-[3%] md:px-0 
            sticky top-0 left-0 z-40
            backdrop-blur-lg bg-[#0c062e36]
            shadow-sm
            transition-all duration-300"
        >
          <Navbar />
        </header>

        <div className="flex-1 container mx-auto px-[3%] md:px-0 mt-20">
          <div className="flex justify-center items-center">
            <div>
              <h2 className="text-3xl text-slate-100 titleFont font-semibold">
                <span className="text-[#e529d8]">All Apps </span> Here
              </h2>
              <div className="flex gap-1">
                <div className="border border-[#c313b7] w-[90px]"></div>
                <div className="border border-[#c313b7] w-1.5"></div>
                <div className="border border-[#c313b7] w-1.5"></div>
                <div className="border border-[#c313b7] w-2.5"></div>
              </div>
            </div>
          </div>

          {loading ? (
            <LoadingSpinner></LoadingSpinner>
          ) : (
            <div>
              {/* SORT DROPDOWN — style unchanged */}
              <div className="flex justify-end relative">
                <div className="relative">
                  <button
                    className="flex btn border border-[#c313b7] bg-[#c313b73c] shadow-[0_0_25px_#c313b73c] gap-2 items-center mt-10"
                    onClick={() => setOpen(!open)}
                  >
                    Sort by ratings
                    <FaChevronDown
                      className={`text-[#c313b7] transition-all duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {open && (
                    <div className="absolute right-0 mt-2 w-40 bg-[#c313b797] shadow-lg rounded-md z-20">
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-[#c313b73c]"
                        onClick={() => handleSort('asc')}
                      >
                        Ascending
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-[#c313b73c]"
                        onClick={() => handleSort('desc')}
                      >
                        Descending
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* GRID using sortedData */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {sortedData.map((cloth, idx) => (
                  <ClothesCard key={idx} cloth={cloth}></ClothesCard>
                ))}
              </div>
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
