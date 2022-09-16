import { ClockIcon } from '@heroicons/react/solid';

const STATUSES = {
  pending: {
    color: 'bg-gray-500',
    string: 'В процес',
  },
  confirmed: {
    color: 'bg-green-500',
    string: 'Удобрена',
  },
  canceled: {
    color: 'bg-red-500',
    string: 'Отаказана',
  },
};

export default function ({ reservations }) {
  const getStatusColor = (status) => STATUSES[status].color;
  const getStatusString = (status) => STATUSES[status].string;

  return (
    <div className="mt-16">
      <h1 className="px-6 lg:px-10 text-2xl font-bold">Резервации</h1>
      {reservations.map((reservation, key) => {
        return (
          <div className="border-b" key={key}>
            <div className="container grid grid-cols-12 mx-auto">
              <div
                className="bg-no-repeat bg-cover dark:bg-gray-500 col-span-full lg:col-span-4"
                style={{
                  backgroundImage: `url('${reservation.room.image}')`,
                  backgroundPosition: 'center center',
                  backgroundBlendMode: 'multiply',
                  backgroundSize: 'cover',
                }}
              />
              <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                {reservation.status && (
                  <div className="flex justify-start">
                    <span
                      className={`px-2 py-1 text-xs rounded-full text-white ${getStatusColor(
                        reservation.status,
                      )} `}
                    >
                      {getStatusString(reservation.status)}
                    </span>
                  </div>
                )}
                <h1 className="text-3xl font-semibold">{reservation.room.name}</h1>
                <p className="flex-1 pt-2">{reservation.room.description}</p>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex space-x-2">
                    <ClockIcon className="w-5 h-5" />
                    <span className="self-center text-sm font-bold">
                      От {reservation.from} До {reservation.to}
                    </span>
                  </div>
                  <span className="text-sm font-bold">Общо {reservation.total.toFixed(2)}лв.</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
