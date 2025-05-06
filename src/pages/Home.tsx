import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSun } from "@fortawesome/free-solid-svg-icons";
import PokeCard from "../components/PokeCard";

const Home = () => {
  return (
    <div className="max-h-screen max-w-screen bg-red-700 flex flex-col items-center p-3">
      <img src="/logo_pokemon.png" alt="Logo Pokemon" className="w-1/6" />
      {/* Controles */}
      <div className="flex items-center w-2/4 p-9 gap-6">
        <FontAwesomeIcon
          icon={faList}
          className="text-xl cursor-pointer text-white"
        />
        <input
          type="text"
          placeholder="Search Pokemon"
          className="w-full p-4 rounded-2xl"
        />
        <FontAwesomeIcon
          icon={faSun}
          className="text-xl cursor-pointer text-white"
        />
      </div>
      <div className="flex-1 max-w-full max-h-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-10 gap-y-10 overflow-auto scrollbar-hide">
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </div>
    </div>
  );
};

export default Home;
