import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import PokeCard from "../components/PokeCard";
import { Link } from "react-router-dom";
import PagesNumber from "../components/PagesNumber";
import SwitchTheme from "../components/SwitchTheme";

const Home = () => {
  const itemsForPages = 20;
  return (
    <div className="min-h-screen max-h-screen max-w-screen bg-red-700 dark:bg-black flex flex-col items-center p-3">
      <img src="/logo_pokemon.png" alt="Logo Pokemon" className="w-1/6" />
      {/* Controles */}
      <div className="flex items-center w-2/4 p-9 gap-6">
        <Link to={"/Menu"}>
          <FontAwesomeIcon
            icon={faList}
            className="text-xl cursor-pointer text-white"
          />
        </Link>
        <input
          type="text"
          placeholder="Search Pokemon"
          className="w-full p-4 rounded-2xl"
        />
        <SwitchTheme />
      </div>
      {/* Colocar uma propriedade de faça aparecer centralizado ate o numero maximo de colunas */}
      <div className="flex-1 max-w-full max-h-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-10 gap-y-10 overflow-auto scrollbar-hide">
        <PokeCard limit={itemsForPages} />
      </div>
      <PagesNumber />
    </div>
  );
};

export default Home;
