import React from 'react';
import LetestCollection from '../LetestCollection/LetestCollection';
import PopularGame from '../PopularGame/PopularGame';
import LatestNews from '../LatestNews/LatestNews';
import NewsLatter from '../NewsLatter/NewsLatter';
import Footer from '../Footer/HomeFooter';
import HomeFooter from '../Footer/HomeFooter';

const HomeSections = () => {
  return (
    <div className="space-y-12 md:space-y-14 lg:space-y-20">
      <section>
        <LatestNews></LatestNews>
      </section>
      <section>
        <LetestCollection></LetestCollection>
      </section>
      <section>
        <PopularGame></PopularGame>
      </section>
      <footer>
        <HomeFooter></HomeFooter>
      </footer>
    </div>
  );
};

export default HomeSections;
