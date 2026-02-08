import Cars from "../../components/Cars";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Catalog() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <Header />
        <Cars />
        <Footer />
      </div>
    </main>
  );
}
