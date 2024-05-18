import { useState } from "react";

const Mensaje = () => {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  const writeMessage = (e) => {
    setMessage(e.target.value);
  }

  if (isSent) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-semibold text-green-600">¡Gracias!</h1>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={e => {
          e.preventDefault();
          alert(`Enviando: "${message}"`);
          setIsSent(true);
        }} className="w-full max-w-lg p-8 space-y-4 bg-white shadow-lg rounded-lg">
          <textarea
            className="form-textarea w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Escribe tu mensaje aquí..."
            value={message}
            onChange={writeMessage}
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default Mensaje;
