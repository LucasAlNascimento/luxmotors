import CarCard from "../CarCard";
import carros from "../../data/cars";

function Cars() {
    return (
        <div className="relative grid grid-cols-1 w-auto h-auto place-items-center -mt-36 pb-32 lg:grid-cols-2 lg:-mt-32 ">
            {carros.map((carro) => (
                <CarCard key={carro.id} carro={carro} />
            ))}
        </div>
    );
};

export default Cars;