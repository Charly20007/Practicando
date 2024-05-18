import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);

  let hasPrev = index > 0;  // false
  let hasNext = index < 15; // true

  const nextClick = () => {
    setIndex(index + 1);
  };

  const previousClick = () => {
    setIndex(index - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <div className="flex gap-3 mb-4">
          <button 
            className={`px-4 py-2 rounded font-bold ${hasPrev ? 'bg-red-500 hover:bg-red-700 text-white' : 'bg-red-200 text-gray-400 cursor-not-allowed'}`}
            disabled={!hasPrev} 
            onClick={previousClick}>
            Anterior
          </button>
          <button 
            className={`px-4 py-2 rounded font-bold ${hasNext ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-blue-200 text-gray-400 cursor-not-allowed'}`}
            disabled={!hasNext} 
            onClick={nextClick}>
            Siguiente
          </button>
        </div>
        <h1 className="text-center text-2xl font-bold">
          {index}
        </h1>
      </div>
    </div>
  );
}

export default App;
