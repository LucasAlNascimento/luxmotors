import { Car } from "../../interfaces/car.interface";
import CarCard from "../CarCard";

export default function Cars({ cars }: { cars: Car[] }) {
  return (
    <div className="grid grid-cols-1 gap-y-16 w-full max-w-screen-2xl place-items-center py-36 lg:grid-cols-2">
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
