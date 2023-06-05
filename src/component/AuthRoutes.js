import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router';

const AuthRoutes = () => {
  const { user } = useSelector((store) => store.allCart);

  const location = useLocation();
  return user === null ? <Navigate to='/login' state={{ form: location }} replace /> : <Outlet />
}

export default AuthRoutes