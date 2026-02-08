import { useNavigate } from "react-router-dom";
import { Car } from "../../interfaces/car";

export default function CarCard({ carro }: { carro: Car }) {
  const navigate = useNavigate();

  const handleCarClick = () => {
    navigate(`/catalog/${carro.id}`, { state: { carro } });
  };

  return (
    <div className="w-[90%] font-fabrikatMedium p-2 bg-gray-200 rounded-3xl">
      <div
        title="Selecionar carro"
        className="w-full h-80 rounded-t-xl overflow-hidden hover:opacity-60 duration-700"
        onClick={handleCarClick}
      >
        <img
          className="w-full h-full object-cover cursor-pointer"
          src={carro.imgUrl}
          alt={`${carro.marca} ${carro.modelo}`}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full p-4 text-xl text-gray-200 bg-gray-900 rounded-b-xl">
        <h2>
          {carro.marca} {carro.modelo}
        </h2>
        <p>Ano: {carro.ano}</p>
      </div>
    </div>
  );
}
