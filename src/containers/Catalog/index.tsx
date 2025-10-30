import Cars from "../../components/Cars";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { carrosMock } from "../../mocks/cars-mock";

export default function Catalog() {

  return (
    <main>
      <div className="flex flex-col items-center">
        <Header />
        <Cars cars={carrosMock} />
        <Footer />
      </div>
    </main>
  );
}