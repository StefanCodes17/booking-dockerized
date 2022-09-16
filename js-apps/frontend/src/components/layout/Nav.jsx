import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import api from '../../services/api';
import LoadingScreen from '../LoadingScreen';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = [
    { name: 'Начало', href: '/' },
    { name: 'За нас', href: '/about' },
    { name: 'Галерия', href: '/gallery' },
    { name: 'Стаи', href: '/rooms' },
  ];
  const { user, isAdmin } = useUser();

  if (isLoading) {
    return <LoadingScreen />;
  }

  const logout = async () => {
    setIsLoading(true);
    await api.post('/logout');
    window.localStorage.removeItem('access_token');
    setIsLoading(false);
    window.location = '/';
  };

  return (
    <div className="px-4 py-5  md:px-24 lg:px-8 bg-white sticky top-0 z-50 shadow-xl">
      <div className="relative flex items-center justify-between">
        <Link to={'/'} title="Koleff house" className="inline-flex items-center">
          <img src="/images/logo.svg" className="w-14" alt="Koleff House" />
          <span className="ml-2 text-xl font-bold tracking-wide uppercase">
            <span className="text-brown-900">Koleff</span>{' '}
            <span className="text-brown-800">House</span>
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          {navigation.map((item, key) => {
            return (
              <li key={key}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-medium tracking-wide text-brown-900 transition-colors duration-200 hover:text-brown-500 border-b-2 border-brown-900'
                      : 'font-medium tracking-wide text-brown-900 transition-colors duration-200 hover:text-brown-500'
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
          {user && (
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium tracking-wide text-brown-900 transition-colors duration-200 hover:text-brown-500 border-b-2 border-brown-900'
                    : 'font-medium tracking-wide text-brown-900 transition-colors duration-200 hover:text-brown-500'
                }
              >
                Профил
              </NavLink>
            </li>
          )}
          {isAdmin && (
            <li>
              <a
                href="/admin"
                className="font-medium tracking-wide text-brown-900 transition-colors duration-200 hover:text-brown-500"
              >
                Администрация
              </a>
            </li>
          )}
          <li>
            {user ? (
              <button
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={logout}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brown-900 hover:bg-brown-500  focus:outline-none"
              >
                Изход
              </button>
            ) : (
              <Link
                to={'/login'}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brown-900 hover:bg-brown-500  focus:outline-none"
              >
                Вход
              </Link>
            )}
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none  hover:bg-deep-brown-50 focus:bg-deep-brown-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 z-10 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Koleff House"
                      title="Koleff Hpuse"
                      className="inline-flex items-center"
                    >
                      <img src="/images/logo.svg" className="w-20" alt="Koleff House" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Koleff House
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none "
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {navigation.map((item, key) => {
                      return (
                        <li>
                          <Link
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="font-medium tracking-wide text-brown-900 transition-colors duration-200 hover:text-brown-500"
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                    {user && (
                      <li>
                        <NavLink
                          to="/profile"
                          onClick={() => setIsMenuOpen(false)}
                          className={({ isActive }) =>
                            isActive
                              ? 'font-medium tracking-wide text-brown-900 transition-colors duration-200 hover:text-brown-500 border-b-2 border-brown-900'
                              : 'font-medium tracking-wide text-brown-900 transition-colors duration-200 hover:text-brown-500'
                          }
                        >
                          Профил
                        </NavLink>
                      </li>
                    )}
                    {isAdmin && (
                      <li>
                        <a
                          href="/admin"
                          className="font-medium tracking-wide text-brown-900 transition-colors duration-200 hover:text-brown-500"
                        >
                          Администрация
                        </a>
                      </li>
                    )}

                    <li>
                      {user ? (
                        <button
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          onClick={logout}
                          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brown-900 hover:bg-brown-500  focus:outline-none"
                        >
                          Изход
                        </button>
                      ) : (
                        <Link
                          to={'/login'}
                          onClick={() => setIsMenuOpen(false)}
                          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brown-900 hover:bg-brown-500  focus:outline-none"
                        >
                          Вход
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
