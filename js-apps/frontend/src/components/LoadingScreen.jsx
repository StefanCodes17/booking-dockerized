export default function () {
  return (
    <div
      className="absolute w-full h-full flex items-center justify-center bg-white z-50"
      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <div className="spinner-grow inline-block flex items-center justify-center w-24 h-24 bg-current rounded-full opacity-0 text-gray-300">
        <img src="/images/logo.svg" alt="Koleff House" className="w-1/2" />
      </div>
    </div>
  );
}
