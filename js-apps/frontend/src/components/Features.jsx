import { HomeIcon, LibraryIcon, CubeIcon } from '@heroicons/react/solid';

export const Features = () => {
  const features = [
    {
      title: 'Зала',
      icon: <HomeIcon className="w-7 h-7 text-brown-900" />,
      children: [
        'Просторна зала',
        'Климатик',
        '55" телевизор',
        'Музикална уредба',
        'Бар',
        'Кафе машина',
        'Мивка',
        'Механа',
      ],
    },
    {
      title: 'Кухня',
      icon: <LibraryIcon className="w-7 h-7 text-brown-900" />,

      children: [
        'Мивка',
        'Хладилник',
        'Печка',
        'Аспиратор',
        'Скара',
        'Микровълнова',
        'Съдомиялна',
        'Кухненски принадлежности',
      ],
    },
    {
      title: 'Стая',
      icon: <CubeIcon className="w-7 h-7 text-brown-900" />,
      children: ['Телевизор', 'Климатик', 'Баня', 'Тоалетна', 'Обща тераса'],
    },
  ];
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            Доверете се на нашите услуги
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg">
            {/*For those who have seen the Earth from space, and for the hundreds and perhaps thousands*/}
            {/*more who will, the experience most certainly changes your perspective.*/}
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, key) => (
          <div key={key}>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              {item.icon}
            </div>
            <h6 className="mb-2 font-semibold leading-5">{item.title}</h6>
            <p className="mb-3 text-sm text-gray-900">{item.text}</p>
            <ul className="mb-4 -ml-1 space-y-2">
              {item.children.map((el, key) => (
                <li className="flex items-start" key={key}>
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-brown-900"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {el}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
