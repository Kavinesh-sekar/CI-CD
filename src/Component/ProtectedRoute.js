import React from 'react';
import { Navigate } from 'react-router-dom';
// import authService from '../services/authService';

const ProtectedRoute = ({ children }) => {

  if (localStorage.getItem('token') === null) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;