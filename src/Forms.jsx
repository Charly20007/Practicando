import { useState } from "react";

const Forms = () => {
    const [first, setFirst] = useState("");
    const [lastname, setLastname] = useState("");

    const handleFirstNameChange = (e) => {
        setFirst(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastname(e.target.value);
    };

    const handleReset = () => {
        setFirst("");
        setLastname("");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={(e) => e.preventDefault()} className="p-8 bg-white shadow-md rounded-lg">
                <div className="mb-4">
                    <input
                        className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        placeholder="Nombre"
                        value={first}
                        onChange={handleFirstNameChange}
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        placeholder="Apellido"
                        value={lastname}
                        onChange={handleLastNameChange}
                    />
                </div>
                <h1 className="mb-4 text-xl text-gray-800">Hola, {first} {lastname}</h1>
                <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-colors"
                >
                    Reiniciar
                </button>
            </form>
        </div>
    );
};

export default Forms;
