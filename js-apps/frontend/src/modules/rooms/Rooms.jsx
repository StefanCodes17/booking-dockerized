import React, { useState } from 'react';
import Page from '../../components/layout/Page';
import api from '../../services/api';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

function Content() {
  const [rooms, setRooms] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useQuery(`/api/rooms`, () => api.get(`/rooms`), {
    onSuccess: async (response) => {
      const rooms = await response.data.data;
      setRooms(rooms);
      setIsLoading(false);
      return true;
    },
  });

  if (isLoading) {
    return [...Array(3)].map((i) => (
      <div className="flex my-10 rounded shadow-md animate-pulse h-96">
        <div className="w-1/2 px-4 flex flex-col items-center justify-center py-8 space-y-4 sm:p-8 ">
          <div className="w-1/2 h-10 rounded dark:bg-gray-700" />
          <div className="w-1/2 h-3 rounded dark:bg-gray-700" />
          <div className="w-1/2 h-3 rounded dark:bg-gray-700" />
          <div className="w-1/3 h-6 rounded dark:bg-gray-700" />
          <div className="w-1/3 h-10 rounded dark:bg-gray-700" />
        </div>
        <div className="w-1/2 h-full rounded-t dark:bg-gray-100" />
      </div>
    ));
  }

  return (
    rooms &&
    rooms.map((item) => (
      <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col my-10">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
          <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
              {item.name}
              <br className="hidden md:block" />
              {item.number}
            </h2>
            <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
              {item.description}
            </p>
            <h4 className="mb-5 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none md:text-center">
              Цена
              <br className="hidden md:block" />
              {item.price} лв.
            </h4>
            <div className="mb-10 text-center md:mb-16 lg:mb-20">
              <Link
                to={`/reservation/${item.id}`}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-brown-900 hover:bg-brown-500  focus:outline-none"
              >
                Резервирай
              </Link>
            </div>
          </div>
        </div>
        <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={item.image}
            alt=""
          />
        </div>
      </div>
    ))
  );
}

export default function () {
  return <Page title="Стаи" content={<Content />} />;
}
