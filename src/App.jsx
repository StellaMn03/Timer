import { useState } from "react";
import { Timer } from "./timer";

function App() {
  const [timer, setTimer] = useState([]);

  const handleCreateTimer = () => {
    const now = new Date();
    setTimer((prevs) => [
      ...prevs,
      {
        id: Date.now(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      },
    ]);
  };

  const handleDeleteTimer = (id) => {
    setTimer((prevs) => prevs.filter((timer) => timer.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <button
        onClick={handleCreateTimer}
        className="mb-6 px-6 py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-700"
      >
        Create Timer
      </button>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {timer.map((timer) => (
          <Timer
            key={timer.id}
            id={timer.id}
            initialMinutes={timer.minutes}
            initialSeconds={timer.seconds}
            onDelete={handleDeleteTimer}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
