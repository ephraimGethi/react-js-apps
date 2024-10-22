import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';

const PrivateRoute = ({ isAuthenticated }) => {
    let {user} = useContext(AuthContext)
    console.log('private route works')
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;