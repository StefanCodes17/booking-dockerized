import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './modules/home/Home';
import About from './modules/about/About';
import Gallery from './modules/gallery/Gallery';
import Contacts from './modules/contacts/Contacts';
import Rooms from './modules/rooms/Rooms';
import Reservation from './modules/reservation/Reservation';
import Login from './modules/auth/Login';
import ThankYou from './components/layout/ThankYou';
import Profile from './modules/auth/Profile';
import Register from './modules/auth/Register';

import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <HashRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/reservation/:id"
                element={
                  <ProtectedRoute isForLoggedUser={true}>
                    <Reservation />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/reservation/finish"
                element={
                  <ProtectedRoute isForLoggedUser={true}>
                    <ThankYou />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <ProtectedRoute isForLoggedUser={false}>
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <ProtectedRoute isForLoggedUser={false}>
                    <Register />>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Layout>
        </HashRouter>
      </UserProvider>
    </QueryClientProvider>
  );
}
