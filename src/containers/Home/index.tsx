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

    dispatch(resetCars());

  }, [dispatch]);

  return (
    <main>
      <Header />
      <div className='flex flex-col h-full'>
        <Slider />
        <Search />
        <Brands />
      </div>
      <Footer />
    </main>
  );
}

export default Home;

