import { useSelector } from "react-redux";
import { useCars } from "../../redux/cars/sliceCars";

import CarCard from "../CarCard";

function Cars() {
  const cars = useSelector(useCars);

  return (
    <div className="relative grid grid-cols-1 w-auto h-auto place-items-center -mt-36 pb-32 lg:grid-cols-2 lg:-mt-32 ">
      {!cars ? (
        <p>Carregando carros...</p>
      ) : cars.length === 0 ? (
        <p>Nenhum carro disponível.</p>
      ) : (
        cars.map((carro) => <CarCard key={carro.id} carro={carro} />)
      )}
    </div>
  );
}

export default Cars;
