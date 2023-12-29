import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { resetCars, useCars } from "../../redux/cars/sliceCars";

import CarCard from "../CarCard";
import { useNavigate } from "react-router-dom";

function Cars() {

    const cars = useSelector(useCars);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    if (!cars) {
        return <p>Carregando carros...</p>;
    }

    if (cars.length === 0) {
        return <p>Nenhum carro disponível.</p>;
    }

    console.log("Número de carros:", cars.length);

    return (
        <div className="relative grid grid-cols-1 w-auto h-auto place-items-center -mt-36 pb-32 lg:grid-cols-2 lg:-mt-32 ">
            {cars.map((carro) => (
                <CarCard key={carro.id} cars={carro} />
            ))}
        </div>
    );
};


export default Cars;