import React from 'react';
import { Pricing } from '../../components/Pricing';
import { Features } from '../../components/Features';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="/images/DSC09898.JPG"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-brown-800">
              Нова
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Добре дошли в <br className="hidden md:block" />
              Къща за гости <br className="hidden md:block" />
              <span className="inline-block text-brown-900">Koleff</span>{' '}
              <span className="inline-block text-brown-800">House</span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Kъща за гости Koleff House, Твърдица, Сливен разполага с леглова база от 10 места.
            </p>
            <div className="flex items-center">
              <Link
                to="/rooms"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brown-900 hover:bg-brown-500  focus:outline-none"
              >
                Резервация
              </Link>
              <Link
                to="/about"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-brown-accent-700"
              >
                Научи повече
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Pricing />
      <Features />
    </>
  );
}
