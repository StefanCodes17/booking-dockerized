import { Link } from 'react-router-dom';
import React from 'react';

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <Link to="/" aria-label="Go home" title="Company" className="inline-flex items-center">
            <img src="/images/logo.svg" alt="Koleff House" className="w-14" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              <span className="text-brown-900">Koleff</span>{' '}
              <span className="text-brown-800">House</span>
            </span>
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">Най-доброто място за отдих.</p>
            <p className="mt-4 text-sm text-gray-800">
              Заповядайте и се насладете на навероятна почивка!
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">Контакти</p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Телефон:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-brown-900 hover:text-brown-500"
            >
              +359 878 61 04 12
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Имейл:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-brown-900 hover:text-brown-500"
            >
              koleff97@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Адрес:</p>
            <a
              href="https://goo.gl/maps/52fG6d1gfyWKzUaS9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-brown-900 hover:text-brown-500"
            >
              гр. Твърдица, ул. Княз Борис I, №47
            </a>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold tracking-wide text-gray-800">Страници</p>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                to="/about"
                className="text-gray-600 transition-colors duration-300 hover:text-brown-900"
              >
                За нас
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-gray-600 transition-colors duration-300 hover:text-brown-900"
              >
                Галерия
              </Link>
            </li>
            <li>
              <Link
                to="/rooms"
                className="text-gray-600 transition-colors duration-300 hover:text-brown-900"
              >
                Стаи
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="text-gray-600 transition-colors duration-300 hover:text-brown-900"
              >
                Контакти
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">© Всички права запазени 2022 Koleff House</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-brown-900"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-brown-900"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-brown-900"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
