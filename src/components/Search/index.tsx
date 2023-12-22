import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search() {
//top-[420px] left-[12%]  md:left-1/4
  return (
    <div className="relative z-10 mx-auto my-auto -translate-y-11 w-96 h-24 bg-gray-200 rounded-full shadow-xl md:w-1/2">
      <div className="flex flex-col items-center justify-center mx-16 translate-y-2 gap-6 lg:flex-row lg:justify-between lg:mx-3">
        <input 
          className="w-full h-20 px-6 outline-none rounded-full bg-transparent text-xl"
          type="text"
          placeholder="Digite a marca ou modelo do carro">
        </input>
        <button className="flex items-center justify-center gap-4 w-20 h-20 bg-black rounded-full text-gray-200 text-lg md:text-xl md:w-56 hover:bg-gray-200 hover:text-black duration-700 hover:scale-105">
          <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
          <p className="hidden font-fabrikatBold md:flex">Pesquisar</p>
        </button>
      </div>
    </div>
  );
}

export default Search;