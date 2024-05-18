import { useEffect, useState } from "react";

const Perros = () => {
    const [dog, setDog] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch("https://dog.ceo/api/breed/hound/images")
            .then((res) => res.json())
            .then((data) => {
                setDog(data.message);
                setCargando(false);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div className="p-4">
            <p className="text-2xl text-center font-bold mb-4">Imagenes de Perros</p>
            {cargando ? (
                <p className="text-xl">Cargando...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {dog.map((perro, index) => (
                        <div key={index} className="w-full h-48 overflow-hidden rounded shadow-lg">
                            <img
                                src={perro}
                                alt={`dog-${index}`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Perros;

