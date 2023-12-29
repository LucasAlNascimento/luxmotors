import { useNavigate } from 'react-router-dom';
import { Car } from '../../redux/cars/sliceCars';

interface CarCardProps {
    cars: Car;
}

function CarCard({ cars }: CarCardProps){

    const navigate = useNavigate();

    const handleCarClick = () => {
        navigate(`/catalog/${cars.id}`);
    };

    return (
        <div className="w-[90%] h-80 font-fabrikatMedium px-14 py-5 mt-40 mb-5 bg-gray-200 rounded-3xl" onClick={handleCarClick}>
            <div className="w-full h-full rounded-full hover:scale-105 hover:opacity-60 duration-700">
                <img
                    className="w-full h-full rounded-3xl object-cover"
                    src={cars.imagem}
                    alt={`${cars.marca} ${cars.modelo}`}
                />
            </div>
            <div className="flex flex-col justify-center items-center w-full p-4 mt-5 text-xl text-gray-200 bg-gray-900 rounded-b-xl">
                <h2>{cars.marca} {cars.modelo}</h2>
                <p>Ano: {cars.ano}</p>
            </div>
        </div>
    );
}

export default CarCard;
