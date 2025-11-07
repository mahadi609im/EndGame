import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Pages/HomeLayout';
import HomeSections from '../Components/HomeSections/HomeSections';
import AllGames from '../Pages/AllGames';
import GameDetails from '../Components/GameDetails/GameDetails';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';
import ForgetPage from '../Pages/ForgetPage';
import ProfilePage from '../Pages/ProfilePage';
import PrivateRoutes from '../Components/Private/PrivateRoutes';
import AllCategories from '../Components/AllCategories/AllCategories';
import ErrorPage from '../Components/Error/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <HomeSections></HomeSections>,
      },
    ],
  },
  {
    path: '/allGames',
    Component: AllGames,
  },
  {
    path: '/category',
    Component: AllCategories,
  },
  {
    path: '/gameDetails/:detailsId',
    element: (
      <PrivateRoutes>
        <GameDetails></GameDetails>
      </PrivateRoutes>
    ),
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/forgetPage',
    Component: ForgetPage,
  },
  {
    path: '/registration',
    Component: Registration,
  },
  {
    path: '/profilePage',
    element: (
      <PrivateRoutes>
        <ProfilePage></ProfilePage>
      </PrivateRoutes>
    ),
  },
  {
    path: '/*',
    Component: ErrorPage,
  },
  {
    path: '/errorPage',
    Component: ErrorPage,
  },
]);

export default router;
