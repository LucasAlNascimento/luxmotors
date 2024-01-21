import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCars } from '../../redux/cars/sliceCars';
import CarDetail from '../../components/CarDetail';

function CarDetailVerification() {

    const { id } = useParams();
    const cars = useSelector(useCars);

    const carro = cars.find((car) => car.id.toString() === id);

    if (!carro) {
        return <div>Carro não encontrado</div>;
    }

    return <CarDetail carro={carro} />;
}

export default CarDetailVerification;
