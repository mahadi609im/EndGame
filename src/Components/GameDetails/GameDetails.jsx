import { Link, Navigate, useParams } from 'react-router';
import useClothesData from '../../hooks/useClothesData';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import downloadIcon from '../../assets/download.jpeg';
import rattingsIcon from '../../assets/rattings.jpeg';
import reviewsIcon from '../../assets/reviews.jpeg';
import LoadingSpinner from '../Loading/Loading';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ErrorPage from '../Error/ErrorPage';

const GameDetails = () => {
  const { clothesData, loading } = useClothesData();
  const { detailsId } = useParams();
  const [install, setInstall] = useState(false);

  const appsDetailsData = clothesData.find(el => el.id === detailsId);

  if (loading) {
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

  const {
    title,
    developer,
    coverPhoto,
    ratings,
    downloads,
    description,
    downloadLink,
    reviews,
    category,
  } = appsDetailsData || {};

  const handleInstall = () => {
    toast.success(`${title} Install successfully`);
    setInstall(true);
  };

  if (!appsDetailsData) {
    return <ErrorPage></ErrorPage>;
  }

  return (
    <>
      <div className="bg-[#0c062e] min-h-screen flex flex-col">
        <title>{`${title} details`}</title>
        <header className="w-full containerCls">
          <Navbar />
        </header>

        {
          <main className="grow container mx-auto px-4 sm:px-6 lg:px-10 mt-[60px] md:mt-20 lg:mt-[100px]">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center">
              {/* Left Side (Details) */}
              <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                <div>
                  <h2 className="text-slate-100 font-bold text-[32px] md:text-[32px] mb-5 leading-snug titleFont">
                    {title}{' '}
                    <span className="text-sm font-normal text-[#e529d8] block md:inline">
                      {category}
                    </span>
                    <div className="flex gap-1 justify-center lg:justify-start">
                      <div className="border mt-2 border-[#c313b7] w-[100px]"></div>
                      <div className="border mt-2 border-[#c313b7] w-1.5"></div>
                      <div className="border mt-2 border-[#c313b7] w-1.5"></div>
                      <div className="border mt-2 border-[#c313b7] w-[9px]"></div>
                    </div>
                  </h2>
                  <p className="text-[#627382] font-normal text-sm sm:text-base md:text-lg">
                    Developed by{' '}
                    <span className="font-semibold text-white">
                      {developer}
                    </span>
                  </p>
                  <Link
                    className="text-base link text-[#c313b7] underline hover:text-[#e529d8] transition"
                    to={downloadLink}
                  >
                    Go website
                  </Link>
                </div>

                <div className="w-full border-b border-[#c313b769] my-6 sm:my-8"></div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-4">
                    Description
                  </h4>
                  <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl text-[#627382] leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="w-full border-b border-[#c313b769] my-6 sm:my-8"></div>

                {/* Stats Section */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  <div className="space-y-2 w-[130px] sm:w-[150px] text-center lg:text-left">
                    <img
                      className="w-11 h-11 sm:w-11 sm:h-11 mx-auto lg:mx-0"
                      src={downloadIcon}
                      alt=""
                    />
                    <p className="font-normal text-sm sm:text-base text-slate-100">
                      Downloads
                    </p>
                    <h2 className="font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-slate-100">
                      {downloads}
                    </h2>
                  </div>

                  <div className="space-y-2 w-[130px] sm:w-[150px] text-center lg:text-left">
                    <img
                      className="w-11 h-11 sm:w-11 sm:h-11 mx-auto lg:mx-0"
                      src={rattingsIcon}
                      alt=""
                    />
                    <p className="font-normal text-sm sm:text-base text-slate-100">
                      Average Ratings
                    </p>
                    <h2 className="font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-slate-100">
                      {ratings}K
                    </h2>
                  </div>

                  <div className="space-y-2 w-[130px] sm:w-[150px] text-center lg:text-left">
                    <img
                      className="w-11 h-11 sm:w-11 sm:h-11 mx-auto lg:mx-0"
                      src={reviewsIcon}
                      alt=""
                    />
                    <p className="font-normal text-sm sm:text-base text-slate-100">
                      Total Reviews
                    </p>
                    <h2 className="font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-slate-100">
                      {reviews}
                    </h2>
                  </div>
                </div>

                <button
                  onClick={handleInstall}
                  disabled={install}
                  className={`px-6 py-3 rounded-md mt-6 text-white font-medium transition-all hover:scale-110 w-full sm:w-auto ${
                    install
                      ? 'bg-[#c313b73c] cursor-not-allowed'
                      : 'bg-[#c313b7] cursor-pointer'
                  }`}
                >
                  {install ? 'installed' : 'Install'}
                </button>
              </div>

              {/* Right Side (Image) */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[80%] xl:w-[70%] rounded-md shadow-lg object-cover"
                  src={coverPhoto}
                  alt=""
                />
              </div>
            </div>
          </main>
        }

        <footer className="mt-10">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default GameDetails;
