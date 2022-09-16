import React from 'react';
import Page from './Page';
import { CheckIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <Page
      title={
        <div className="flex flex-col items-center">
          <CheckIcon className="text-green-700 text-center w-16 h-16" />
          Благодарим Ви за резервацията в
        </div>
      }
      text="Вашата резервация се обработва от наш служител и ще бъде прегледана в най-скоро време. Благодарим Ви за търпението!"
      content={
        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brown-900 hover:bg-brown-500  focus:outline-none"
          >
            Начало
          </Link>
          <Link
            to="/about"
            aria-label=""
            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-brown-accent-700"
          >
            Научи повече
          </Link>
        </div>
      }
    />
  );
}
