import React from 'react';
import useClothesData from '../../hooks/useClothesData';
import ClothesCard from '../LetestCollection/ClothesCard';
import LoadingSpinner from '../Loading/Loading';
import { FaChevronRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';

const PopularGame = () => {
  const { clothesData, loading } = useClothesData();
  const navigate = useNavigate(null);

  const popularGamesSort = clothesData.sort(
    (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)
  );

  const PopularGames = popularGamesSort.slice(0, 8);

  return (
    <div className="container mx-auto px-[3%] md:px-0">
      {/* Title */}

      <div className="flex justify-center flex-col items-center gap-3">
        <div className="flex justify-center items-center">
          <div>
            <h2 className="text-2xl md:text-3xl text-slate-100 font-semibold titleFont">
              <span className="text-[#e529d8]">POPULAR </span> GAMES
            </h2>
            <div className="flex gap-1">
              <div className="border border-[#c313b7] w-[100px]"></div>
              <div className="border border-[#c313b7] w-[6px]"></div>
              <div className="border border-[#c313b7] w-[6px]"></div>
              <div className="border border-[#c313b7] w-[10px]"></div>
            </div>
          </div>
        </div>
        <p className="text-center text-slate-300">
          Dive into the most-played games this season and discover why players
          around the world just can’t get enough of these thrilling experiences.
        </p>
      </div>

      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {PopularGames.map((cloth, idx) => (
            <ClothesCard cloth={cloth} key={idx}></ClothesCard>
          ))}
        </div>
      )}

      <button
        onClick={() => navigate('/allGames')}
        className="flex btn border border-[#c313b7] bg-[#c313b73c] shadow-[0_0_25px_#c313b73c] gap-2 items-center mx-auto mt-10"
      >
        Browse Games
        <div className="flex">
          <FaChevronRight className="text-[#c313b7]" />
          <FaChevronRight className="text-[#c313b768]" />
        </div>
      </button>
    </div>
  );
};

export default PopularGame;
