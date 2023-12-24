import Cars from "../../components/Cars";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Catalog() {

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Cars />
      <Footer />
    </main>
  );
}

export default Catalog;