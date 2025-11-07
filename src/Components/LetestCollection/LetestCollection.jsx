import { FaChevronRight } from 'react-icons/fa';
import useClothesData from '../../hooks/useClothesData';
import LoadingSpinner from '../Loading/Loading';
import { useNavigate } from 'react-router';

const LetestCollection = () => {
  const { clothesData, loading } = useClothesData();
  const navigate = useNavigate('');
  return (
    <div className="container mx-auto px-[3%] md:px-0">
      {/* Title */}
      <div className="flex justify-center flex-col items-center gap-3">
        <div className="flex justify-center items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-100 titleFont">
              <span className="text-[#e529d8]">Browse</span> Categories
            </h2>
            <div className="flex gap-1">
              <div className="border border-[#c313b7] w-[72px]"></div>
              <div className="border border-[#c313b7] w-1.5"></div>
              <div className="border border-[#c313b7] w-1.5"></div>
              <div className="border border-[#c313b7] w-2.5"></div>
            </div>
          </div>
        </div>
        <p className="text-center text-slate-300">
          Step Into the Future of Gaming into the world of End Game — play,
          compete, and prove your legend.
        </p>
      </div>

      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="flex flex-col justify-between items-center mb-8 gap-4 mt-12">
          <div className=" md:max-w-3/4 w-full flex flex-wrap justify-center items-center gap-6">
            {[...new Set(clothesData.map(el => el.category))].map(category => (
              <div
                key={category}
                className="flex gap-4 items-center justify-center border-2 border-[#c313b76f] bg-slate-900 py-2 md:py-3 px-5 md:px-6 shadow-2xl rounded-lg hover:scale-105 transition-all"
              >
                <img
                  className="w-6 md:w-8"
                  src={`https://img.icons8.com/?size=100&id=7317&format=png&color=c313b7`}
                  alt=""
                />
                <h3 className="text-lg md:text-xl font-bold text-slate-500">
                  {category}
                </h3>
              </div>
            ))}
          </div>
          <div
            onClick={() => navigate('/category')}
            className="max-w-1/5 w-full mt-5"
          >
            <div className="text-white p-6 rounded-md w-full mb-6 border border-[#c313b7] bg-[#c313b73c] shadow-[0_0_25px_#c313b73c] cursor-pointer hover:scale-105 transition-all">
              <div className="flex flex-col space-y-6"></div>
              <div className="flex justify-center items-center">
                <FaChevronRight className="text-[#c313b7]" />
                <FaChevronRight className="text-[#c313b7c2]" />
                <FaChevronRight className="text-[#c313b768]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LetestCollection;
