import { useEffect, useState } from "react";

export const Timer = ({ id, initialMinutes, initialSeconds, onDelete }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        setSeconds((prevSeconds) => {
          if (prevSeconds == 0) {
            setMinutes((prevMinutes) =>
              prevMinutes > 0 ? prevMinutes - 1 : 59
            );
            return 59;
          }
          return prevSeconds - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [pause]);

  const handlePause = () => setPause(true);
  const handleContinue = () => setPause(false);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-400 border border-gray-500 rounded-lg shadow-md m-4">
      <h2 className="text-2xl font-bold">
        {(minutes < 10 ? "0" : "") + minutes}:
        {(seconds < 10 ? "0" : "") + seconds}
      </h2>
      <div className="flex gap-2 mt-4">
        <button
          onClick={handlePause}
          disabled={pause}
          className={`px-4 py-2 text-white font-semibold rounded ${
            pause ? "bg-gray-400 cursor-not-allowed" : "bg-blue-700"
          }`}
        >
          Pause
        </button>
        <button
          onClick={handleContinue}
          disabled={!pause}
          className={`px-4 py-2 text-white font-semibold rounded ${
            !pause ? "bg-gray-400 cursor-not-allowed" : "bg-green-700"
          }`}
        >
          Continue
        </button>
        <button
          onClick={() => onDelete(id)}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
