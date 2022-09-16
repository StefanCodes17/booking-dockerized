import React from 'react';
import { Navigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

export default function ({ children, isForLoggedUser }) {
  const { user } = useUser();
  if (!user && isForLoggedUser) {
    return <Navigate to="/login" replace />;
  }

  if (user && !isForLoggedUser) {
    return <Navigate to="/" replace />;
  }

  return children;
}
