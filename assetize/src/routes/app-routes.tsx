import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/auth/Login';

export const DashboardRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: '/',
      element: <Navigate to="/dashboard" replace />,
    },
  ],
};

export const AutheticationRoutes = {
  path: '/auth',
  element: <AuthLayout />,
  children: [
    {
      path: '/auth/login',
      element: <Login />,
    },
  ],
};
