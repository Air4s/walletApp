import React from 'react';
import { RouteObject } from 'react-router-dom';
import MainLayout from '../../layout';
import Dashboard from '../../contents/dashboard';
import GuideForChecking from '../../contents/guide';


export const PrivateRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/guides',
      element: <GuideForChecking />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      index: true,
    },
  ]
};

export default PrivateRoutes;
