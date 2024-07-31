import Footer from '../Footer';
import Header from '../Header';

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

function CarDetail({ carro }: CarroProps) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col flex-grow justify-center items-center p-4 mx-auto">
        <div className="w-full h-96 rounded-3xl">
          <img
            className="w-full h-full rounded-t-3xl object-cover"
            src={`../../${carro.imagem}`}
            alt={`${carro.marca} ${carro.modelo}`}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full p-4 text-2xl font-fabrikatMedium text-gray-900 bg-gray-200 rounded-b-3xl">
          <h2>{carro.marca} {carro.modelo}</h2>
          <p>Ano: {carro.ano}</p>
          <button
            className="flex items-center justify-center gap-4 w-32 h-12 mt-4 bg-black rounded-xl text-gray-200 text-lg transition ease-in-out duration-700 hover:bg-yellow-400 hover:scale-105 hover:text-black"
            type="submit"
          >
            <p className="font-fabrikatBold">Reservar</p>
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default CarDetail;
