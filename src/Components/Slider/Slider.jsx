// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerImg1 from '../../assets/banner5.jpeg';
import bannerImg2 from '../../assets/banner2.webp';
import banner3 from '../../assets/banner3.jpeg';
import banner4 from '../../assets/banner4.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useRef } from 'react';

export default function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <Swiper
        style={{
          '--swiper-navigation-color': '#c313b7',
          '--swiper-pagination-color': '#c313b7',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={swiper => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-6">
              <div className="flex gap-3 items-center">
                <div className="border border-slate-600 w-[70px] h-px"></div>
                <p className="text-sm tracking-widest uppercase text-slate-400">
                  Unleash Rage
                </p>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
                Enter the Ultimate Battle Arena
              </h1>
              <div className="flex gap-3 items-center">
                <p className="text-sm md:text-lg text-slate-400">
                  Fight, Survive.
                </p>
                <div className="border border-slate-600 w-[70px] h-px"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-auto flex justify-end">
              <img
                className="w-full h-full object-cover rounded-md"
                src={bannerImg2}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-6">
              <div className="flex gap-3 items-center">
                <div className="border border-slate-600 w-[70px] h-px"></div>
                <p className="text-sm tracking-widest uppercase text-slate-400">
                  Master Move
                </p>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
                Step Into the Grand Chess Arena
              </h1>
              <div className="flex gap-3 items-center">
                <p className="text-sm md:text-lg text-slate-400">
                  Think Checkmate.
                </p>
                <div className="border border-slate-600 w-[70px] h-px"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-auto rounded-md">
              <img
                className="w-full h-full rounded-md object-cover"
                src={banner3}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-6">
              <div className="flex gap-3 items-center">
                <div className="border border-slate-600 w-[70px] h-px"></div>
                <p className="text-sm tracking-widest uppercase text-slate-400">
                  Roll Dice
                </p>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
                Join the Ultimate Ludo Battle
              </h1>
              <div className="flex gap-3 items-center">
                <p className="text-sm md:text-lg text-slate-400">Let's Play.</p>
                <div className="border border-slate-600 w-[70px] h-px"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-auto">
              <img
                className="w-full h-full object-cover rounded-md"
                src={bannerImg1}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-6">
              <div className="flex gap-3 items-center">
                <div className="border border-slate-600 w-[70px] h-px"></div>
                <p className="text-sm tracking-widest uppercase text-slate-400">
                  Shuffle & Deal
                </p>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
                Master the Art of Card Strategy
              </h1>
              <div className="flex gap-3 items-center">
                <p className="text-sm md:text-lg text-slate-400">
                  Claim Victory.
                </p>
                <div className="border border-slate-600 w-[70px] h-px"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-auto">
              <img
                className="w-full h-full object-cover rounded-md"
                src={banner4}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
