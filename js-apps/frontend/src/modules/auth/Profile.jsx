import ProfileIndex from './components/ProfileIndex';
import ProfileReservations from './components/ProfileReservations';
import useUser from '../../hooks/useUser';
import Page from '../../components/layout/Page';

function Content() {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ProfileIndex user={user} />
      {user.reservations.length > 0 ? (
        <ProfileReservations reservations={user.reservations} />
      ) : (
        <div className="mt-16">
          <h2 className="px-6 lg:px-10 text-2xl font-bold">Нямате направени резервации</h2>
        </div>
      )}
    </div>
  );
}

export default function () {
  return <Page title="Потребителски профил" content={<Content />} showTitle={false} />;
}
