interface Carro {
    id: number;
    marca: string;
    modelo: string;
    ano: number;
    imagem: string;
}

interface CarCardProps {
    dados: Carro;
}


function CarCard(props: CarCardProps) {

    const { dados } = props;

    return (
        <div className="w-[90%] h-80 font-fabrikatMedium px-14 py-5 mt-40 mb-5 bg-gray-200 rounded-3xl">
            <div className="w-full h-full rounded-full hover:scale-105 hover:opacity-60 duration-700">
                <img
                    className="w-full h-full rounded-3xl object-cover"
                    src={dados.imagem}
                    alt={`${dados.marca} ${dados.modelo}`}
                />
            </div>
            <div className="flex flex-col justify-center items-center w-full p-4 mt-5 text-xl text-gray-200 bg-gray-900 rounded-b-xl">
                <h2>{dados.marca} {dados.modelo}</h2>
                <p>Ano: {dados.ano}</p>
            </div>
        </div>
    )
}

export default CarCard;