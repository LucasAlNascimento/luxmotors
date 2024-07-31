import Cars from "../../components/Cars";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Catalog() {

  return (
    <main>
      <div className="flex flex-col h-[91vh]">
        <Header />
        <Cars />
      </div>
      <Footer />
    </main>
  );
}

export default Catalog;