import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const {currentUser} = useSelector((state) => state.user);

  // console.log('Current User:', currentUser);

  return currentUser===null ? <Navigate to="/sign-in" />:<Outlet />;
}
