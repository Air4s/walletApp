import React from 'react';
import { RouteObject } from 'react-router-dom';
import MainLayout from '../../layout';
import Dashboard from '../../contents/dashboard';


export const PrivateRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/dashboard',
      element: <Dashboard />,
      index: true,
    },
    // {
    //   path: '/accounts',
    //   element: <Account />
    // },
  ]
};

export default PrivateRoutes;
