import React from 'react';
import useClothesData from '../../hooks/useClothesData';
import Navbar from '../Navbar/Navbar';
import LoadingSpinner from '../Loading/Loading';
import Footer from '../Footer/Footer';
import Categories from './Categories';
import ScrollLinked from '../MotionCounter';

const AllCategories = () => {
  const { clothesData, loading } = useClothesData();

  // Unique categories বের করা
  const categories = clothesData
    ? [...new Set(clothesData.map(item => item.category))]
    : [];

  // Component mapping
  const categoryComponents = {
    'Battle Royale': Categories,
    Racing: Categories,
    FPS: Categories,
    Strategy: Categories,
    Multiplayer: Categories,
    RPG: Categories,
    Sandbox: Categories,
    Arcade: Categories,
  };

  return (
    <div className="bg-[#0c062e]">
      <title>Category page</title>
      <ScrollLinked></ScrollLinked>
      <div className="flex flex-col min-h-screen h-full">
        <header className="container mx-auto px-[3%] md:px-0">
          <Navbar />
        </header>

        <div className="flex-1 container mx-auto px-[3%] md:px-0 mt-20">
          <div className="flex justify-center items-center">
            <div>
              <h2 className="text-3xl text-slate-100 font-semibold titleFont">
                <span className="text-[#e529d8]">All Categories </span> Here
              </h2>
              <div className="flex gap-1">
                <div className="border border-[#c313b7] w-[180px]"></div>
                <div className="border border-[#c313b7] w-1.5"></div>
                <div className="border border-[#c313b7] w-1.5"></div>
                <div className="border border-[#c313b7] w-2.5"></div>
              </div>
            </div>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full space-y-6 mt-12">
              {categories.map(cat => {
                const Component = categoryComponents[cat] || Categories;
                const items = clothesData.filter(item => item.category === cat);
                return (
                  <div key={cat} className=" gap-6 ">
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6">
                      {cat}
                    </h3>
                    {items.map(item => (
                      <Component
                        key={item.id}
                        {...{ [cat === 'Racing' ? 'battle' : 'battle']: item }}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default AllCategories;
