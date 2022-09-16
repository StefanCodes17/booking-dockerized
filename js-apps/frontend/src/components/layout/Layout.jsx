import React, { useLayoutEffect } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';

export default function ({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
