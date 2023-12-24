import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Search from '../../components/Search';
import Brands from '../../components/Brands';
import Footer from '../../components/Footer';


function Home() {

  return (
    <div>
      <Header />
      <Slider />
      <Search />
      <Brands />
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}

export default Home;

