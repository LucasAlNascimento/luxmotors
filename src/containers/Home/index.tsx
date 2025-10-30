import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Search from '../../components/Search';
import Brands from '../../components/Brands';
import Footer from '../../components/Footer';

export default function Home() {

	return (
		<main className="w-full h-screen">
			<Header />
			<Slider />
			<Search />
			<Brands />
			<Footer />
		</main>
	);
}

