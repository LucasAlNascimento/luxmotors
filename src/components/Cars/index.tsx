
function Cars() {

    const carros = [
        {
            id: 1,
            marca: 'Audi',
            modelo: 'Q8 e-tron Sportback',
            ano: 2023,
            imagem: 'src/assets/cars/AudiQ8etronSportback.jpg',
        },
        {
            id: 2,
            marca: 'BMW',
            modelo: 'iX3',
            ano: 2023,
            imagem: 'src/assets/cars/BMWiX3.jpg',
        },
        {
            id: 3,
            marca: 'Jaguar',
            modelo: 'XKR Coupe X100',
            ano: 2002,
            imagem: 'src/assets/cars/JaguarXKRCoupe.jpg',
        },
        {
            id: 4,
            marca: 'Land Rover',
            modelo: 'Range Rover Sport',
            ano: 2022,
            imagem: 'src/assets/cars/RangeRoverSport.jpg',
        },
        {
            id: 5,
            marca: 'Porsche',
            modelo: 'Carrera GT',
            ano: 2005,
            imagem: 'src/assets/cars/PorscheCarreraGT.jpg',
        },
        {
            id: 6,
            marca: 'Mercedes-Benz',
            modelo: 'C 43 AMG',
            ano: 2018,
            imagem: 'src/assets/cars/MercedesBenzC43AMG.jpg',
        },

    ];

    return (
        <div className="grid grid-cols-2 w-auto h-screen mx-10 -mt-32 place-items-center">
            {carros.map(carro => (
                <div className="w-[90%] h-80 font-fabrikatMedium px-14 py-5 mt-48 bg-gray-200 rounded-3xl" key={carro.id}>
                    <div className="w-full h-full rounded-full hover:scale-105 hover:opacity-60 duration-700">
                        <img
                            className="w-full h-full rounded-3xl object-cover"
                            src={carro.imagem}
                            alt={`${carro.marca} ${carro.modelo}`}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center w-full p-4 mt-5 text-gray-200 bg-gray-900 rounded-b-xl">
                        <h2>{carro.marca} {carro.modelo}</h2>
                        <p>Ano: {carro.ano}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cars;