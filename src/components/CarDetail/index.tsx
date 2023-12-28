
interface Carro {
    id: number;
    marca: string;
    modelo: string;
    ano: number;
    imagem: string;
  }
  
  interface CarroProps {
    carro: Carro;
  }

function CarDetail({carro}:CarroProps) {

    return (

      <div className="w-full h-full p-4 mt-20">
        <div className="w-full h-96 rounded-3xl">
          <img
            className="w-full h-full rounded-3xl object-cover"
            src={carro.imagem}
            alt={`${carro.marca} ${carro.modelo}`}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full p-4 mt-5 text-xl text-gray-900 bg-gray-200 rounded-b-xl">
          <h2>{carro.marca} {carro.modelo}</h2>
          <p>Ano: {carro.ano}</p>
        </div>
      </div>
    );
  }
  
  
export default CarDetail;