import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
// render - utilities
// const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const PicturePage = Loadable(lazy(() => import('pages/picture-page')));
// const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const VoicePage = Loadable(lazy(() => import('pages/voice-page')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'voice-page',
      element: <VoicePage />
    },
    {
      path: 'picture-page',
      element: <PicturePage />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
