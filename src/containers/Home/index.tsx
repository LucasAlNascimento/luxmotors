import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { resetCars } from '../../redux/cars/sliceCars';

import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Search from '../../components/Search';
import Brands from '../../components/Brands';
import Footer from '../../components/Footer';


function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    // Aqui, você pode despachar a ação para redefinir o estado quando o usuário volta para a home
    dispatch(resetCars());

    // Certifique-se de incluir 'dispatch' como uma dependência se você estiver usando eslint
  }, [dispatch]);

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

