import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-brown-800">
            Нашите цени
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)" width="52" height="24" />
            </svg>
            <span className="relative">Уникални</span>
          </span>{' '}
          и достъпни цени
        </h2>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
          <div className="text-center">
            <div className="text-lg font-semibold">Стая</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">50лв.</div>
              <div className="text-gray-700">/ нощувка</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">Телевизор</div>
              <div className="text-gray-700">Климатик</div>
              <div className="text-gray-700">Баня</div>
              <div className="text-gray-700">Тоалетна</div>
              <div className="text-gray-700">Обща тераса</div>
            </div>
          </div>
          <div>
            <Link
              to="/rooms"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900  focus:outline-none"
            >
              Резервирай сега
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-brown-800">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-brown-800">
              Най-популярно
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">Къща - 2-3 нощувки</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">300лв.</div>
              <div className="text-gray-700">/ вечер</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">Просторна зала с телевизор</div>
              <div className="text-gray-700">Музикална уредба</div>
              <div className="text-gray-700">Напълно оборудвана кухня</div>
              <div className="text-gray-700">Телевизор</div>
              <div className="text-gray-700">Климатик</div>
              <div className="text-gray-700">Баня</div>
              <div className="text-gray-700">Тоалетна</div>
              <div className="text-gray-700">Обща тераса</div>
            </div>
          </div>
          <div>
            <Link
              to="/rooms"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brown-900 hover:bg-brown-500  focus:outline-none"
            >
              Резервирай сега
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
          <div className="text-center">
            <div className="text-lg font-semibold">Къща - над 3 нощувки</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">250лв.</div>
              <div className="text-gray-700">/ вечер</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">Просторна зала с телевизор</div>
              <div className="text-gray-700">Музикална уредба</div>
              <div className="text-gray-700">Напълно оборудвана кухня</div>
              <div className="text-gray-700">Телевизор</div>
              <div className="text-gray-700">Климатик</div>
              <div className="text-gray-700">Баня</div>
              <div className="text-gray-700">Тоалетна</div>
              <div className="text-gray-700">Обща тераса</div>
            </div>
          </div>
          <div>
            <Link
              to="/rooms"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900  focus:outline-none"
            >
              Резервирай сега
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
