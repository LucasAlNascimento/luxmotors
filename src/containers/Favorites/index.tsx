import BackButton from "../../components/BackButton";
import Favorites from "../../components/Favorites";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function FavoritesContainer() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <Header />
				<BackButton />
        <Favorites />
        <Footer />
      </div>
    </main>
  );
}
