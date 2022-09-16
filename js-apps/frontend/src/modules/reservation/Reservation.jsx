import React, { useEffect, useState } from 'react';
import Page from '../../components/layout/Page';
import api from '../../services/api';
import { useQuery, useQueryClient } from 'react-query';
import DatePicker from 'react-datepicker';
import { addDays, addSeconds, differenceInDays } from 'date-fns';
import bg from 'date-fns/locale/bg';
import moment from 'moment';
import { RefreshIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

import { registerLocale } from 'react-datepicker';
registerLocale('bg', bg);

import { useParams } from 'react-router-dom';
import useUser from '../../hooks/useUser';

function Content() {
  const { user } = useUser();
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [room, setRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [startDate, setStartDate] = useState(addSeconds(new Date(), 1));
  const [endDate, setEndDate] = useState(addDays(new Date(), 1));
  const [minEndDate, setMinEndDate] = useState(addDays(new Date(), 1));
  const [dif, setDif] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    if (!isLoading) {
      setDif(differenceInDays(endDate, startDate) + 1);
      setTotal(dif * room.price);
    }
  }, [startDate, endDate, isLoading, dif]);

  useQuery(`/api/rooms/${id}`, () => api.get(`/rooms/${id}`), {
    onSuccess: async (response) => {
      const room = await response.data.data;
      setRoom(room);
      setIsLoading(false);
      return true;
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  const reserve = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      room_id: room.id,
      user_id: user.id,
      from: moment(startDate).format('y-MM-DD'),
      to: moment(endDate).format('y-MM-DD'),
      total,
      status: 'pending',
    };
    api.post('/reservation', data).then(async () => {
      await queryClient.prefetchQuery('user');
      setIsLoading(false);
      navigate('/reservation/finish');
    });
  };

  if (isLoading && !room) {
    return (
      <div className="py-4 rounded shadow-md animate-pulse bg-gray-200">
        <div className="flex items-center p-4 space-x-4 sm:px-8 h-96">
          <div className="flex-shrink-0 w-56 h-16 bg-gray-700" />
          <div className="flex-1 w-20 py-2 space-y-4">
            <div className="w-96 ml-auto h-3 rounded bg-gray-700" />
            <div className="w-96 ml-auto h-3 rounded bg-gray-700" />
            <div className="w-96  ml-auto h-4 rounded bg-gray-700" />
            <div className="w-96 ml-auto h-4 rounded bg-gray-700" />
            <div className="w-96 ml-auto h-4 rounded bg-gray-700" />
          </div>
        </div>
      </div>
    );
  }

  const handeFromChange = (date) => {
    setStartDate(addSeconds(date, 1));
    setEndDate(addDays(date, 1));
    setMinEndDate(addDays(date, 1));
  };

  const handeToChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="relative">
      <img src={room.image} className="absolute inset-0 object-cover w-full h-full" alt="" />
      <div className="relative bg-opacity-75 bg-brown-500">
        <svg className="absolute inset-x-0 bottom-0 text-white" viewBox="0 0 1160 163">
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Резервирай! <br className="hidden md:block" />
                Тип резервация: {room.name}
              </h2>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Резервация
                </h3>
                <form onSubmit={reserve}>
                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="firstName" className="inline-block mb-1 font-medium">
                      Име
                    </label>
                    <input
                      placeholder="Име"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-brown-400 focus:outline-none "
                      value={user.name}
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="email" className="inline-block mb-1 font-medium">
                      Имейл
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-brown-400 focus:outline-none "
                      id="email"
                      name="email"
                      value={user.email}
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="email" className="inline-block mb-1 font-medium">
                      От
                    </label>
                    <DatePicker
                      locale="bg"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-brown-400 focus:outline-none "
                      selected={startDate}
                      minDate={new Date()}
                      onChange={handeFromChange}
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="email" className="inline-block mb-1 font-medium">
                      До
                    </label>
                    <DatePicker
                      locale="bg"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-brown-400 focus:outline-none "
                      selected={endDate}
                      minDate={minEndDate}
                      onChange={handeToChange}
                    />
                  </div>
                  <div className="flex">
                    <div className="mb-1 mr-2 sm:mb-2">
                      <label htmlFor="lastName" className="inline-block mb-1 font-medium">
                        Места
                      </label>
                      <input
                        placeholder="Doe"
                        readOnly
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-brown-400 focus:outline-none "
                        value={room.people}
                      />
                    </div>

                    <div className="mb-1 sm:mb-2">
                      <label htmlFor="lastName" className="inline-block mb-1 font-medium">
                        Номер
                      </label>
                      <input
                        placeholder="Doe"
                        readOnly
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-brown-400 focus:outline-none "
                        value={room.number}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <b>Общо: {total}лв.</b>
                  </div>

                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brown-900 hover:bg-brown-500  focus:outline-none"
                    >
                      Резервирай
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default function () {
  return <Page title="Резервация" content={<Content />} />;
}
