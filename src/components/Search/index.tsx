import { FormEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { filterCars } from '../../redux/cars/sliceCars';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search() {

  const [searchCar, setSearchCar] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(filterCars({ marca: searchCar, modelo: searchCar }));
    navigate('/catalog');
  };

  return (
    <div className="relative z-10 mx-auto my-auto -translate-y-11 w-96 h-24 bg-gray-200 rounded-full shadow-xl md:w-1/2">
      <form
        className="flex flex-col items-center justify-center mx-16 translate-y-2 gap-6 lg:flex-row lg:justify-between lg:mx-3"
        onSubmit={handleSearch}
      >
        <input
          className="w-full h-20 px-6 outline-none rounded-full bg-transparent text-xl"
          type="text"
          value={searchCar}
          placeholder="Digite a marca ou modelo do carro"
          onChange={(event) => setSearchCar(event.target.value)}
          required
        />
        <button
          className="flex items-center justify-center gap-4 w-20 h-20 bg-black rounded-full text-gray-200 text-lg md:text-xl md:w-56 hover:bg-gray-200 hover:text-black duration-700 hover:scale-105"
          type="submit"
        >
          <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
          <p className="hidden font-fabrikatBold md:flex">Pesquisar</p>
        </button>
      </form>
    </div>
  );
}


export default Search;