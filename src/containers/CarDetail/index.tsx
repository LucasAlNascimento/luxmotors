import BackButton from "../../components/BackButton";
import CarDetail from "../../components/CarDetail";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function CarDetailContainer() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <Header />
				<BackButton />
        <CarDetail />
        <Footer />
      </div>
    </main>
  );
}
