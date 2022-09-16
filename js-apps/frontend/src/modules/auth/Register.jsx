import React, { useState } from 'react';
import { LockClosedIcon, RefreshIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import api from '../../services/api';
import { NavLink } from 'react-router-dom';

export default function () {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [showPasswords, setShowPasswords] = useState({
    password: false,
    password_confirmation: false,
  });

  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await api.post('/register', userData);
      const token = data.access_token;
      window.localStorage.setItem('access_token', token);
      window.location.href = '/';
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Регистрация</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={login}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Потребителско име
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Потребителско име"
                />
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Имейл адрес
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Парола
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPasswords.password ? 'text' : 'password'}
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={() =>
                    setShowPasswords((prevState) => ({
                      ...showPasswords,
                      password: !prevState.password,
                    }))
                  }
                  className="z-50 absolute right-2 inset-y-0 top-1 flex items-center justify-center inline-block w-8 h-8 rounded-full  transition duration-150 ease-in-out"
                >
                  {showPasswords.password ? (
                    <EyeIcon className="h-5 w-5 text-brown-900" aria-hidden="true" />
                  ) : (
                    <EyeOffIcon className="h-5 w-5 text-brown-900" aria-hidden="true" />
                  )}
                </button>
              </div>
              <div className="relative">
                <label htmlFor="password-confirmation" className="sr-only">
                  Повтори парола
                </label>
                <input
                  id="password-confirmation"
                  name="password-confirmation"
                  type={showPasswords.password_confirmation ? 'text' : 'password'}
                  onChange={(e) =>
                    setUserData({ ...userData, password_confirmation: e.target.value })
                  }
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={() =>
                    setShowPasswords((prevState) => ({
                      ...showPasswords,
                      password_confirmation: !prevState.password_confirmation,
                    }))
                  }
                  className="z-50 absolute right-2 inset-y-0 top-1 flex items-center justify-center inline-block w-8 h-8 rounded-full  transition duration-150 ease-in-out"
                >
                  {showPasswords.password_confirmation ? (
                    <EyeIcon className="h-5 w-5 text-brown-900" aria-hidden="true" />
                  ) : (
                    <EyeOffIcon className="h-5 w-5 text-brown-900" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <NavLink to="/login" className="font-medium text-brown-900 hover:text-brown-800">
                  Вече имаш акаунт? Влез от тук!
                </NavLink>
              </div>
            </div>

            <div>
              <button
                type="submit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="group relative w-full flex justify-center ease-in-out duration-150 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brown-900 hover:bg-brown-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-800"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white " aria-hidden="true" />
                </span>
                Регистрация
                {isLoading && (
                  <span className="ml-3">
                    <RefreshIcon className="w-5 h-5 animate-spin" />
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
