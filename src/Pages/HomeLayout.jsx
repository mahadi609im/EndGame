import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import { Outlet } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/ContextProvider';
import LoadingSpinner from '../Components/Loading/Loading';
import Footer from '../Components/Footer/Footer';
import ScrollLinked from '../Components/MotionCounter';

const HomeLayout = () => {
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
    <div className="flex flex-col bg-[#0c062e]">
      <title>Home page</title>
      <ScrollLinked></ScrollLinked>
      <header className="container mx-auto px-[3%] md:px-0">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="flex-1">
        <section className="">
          <Outlet></Outlet>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
