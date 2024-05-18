import { useState } from 'react';

const Coins = () => {
  const [euro, setEuros] = useState("");
  const [validation, setValidation] = useState(false);
  const [error, setError] = useState("");

  const fixEuro = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setEuros(value);
      setError("");
    } else {
      setError("Por favor, introduce un número válido.");
    }
  };

  const validacion = () => {
    if (euro === "" || parseFloat(euro) < 0) {
      setValidation(false);
      setError("Por favor, introduce un valor positivo.");
    } else {
      setValidation(true);
      setError("");
    }
  };

  const limpiar = () => {
    setValidation(false);
    setEuros("");
    setError("");
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 mb-10 p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <label htmlFor="euro-input" className="sr-only">Introduce euros</label>
      <input 
        id="euro-input"
        type="text" 
        value={euro}
        onChange={fixEuro}
        placeholder="Introduce euros"
        className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-invalid={!!error}
        aria-describedby="error-message"
      />
      {error && <p id="error-message" className="text-red-500 text-sm mb-2">{error}</p>}
      <div className="flex gap-4 mb-4">
        <button 
          onClick={validacion} 
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Convertir
        </button>
        <button 
          onClick={limpiar} 
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Limpiar
        </button>
      </div>
      {validation && <p className="text-lg text-gray-700">Equivale a ${parseFloat(euro) * 2} dólares</p>} 
    </div>
  );
}

export default Coins;
