import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import { PokemonType, Generation } from "../types/types";

const Menu = () => {
  const pokemonTypes: PokemonType[] = [
    { name: "Normal", color: "#A8A878" },
    { name: "Fire", color: "#F08030" },
    { name: "Water", color: "#6890F0" },
    { name: "Electric", color: "#F8D030" },
    { name: "Grass", color: "#78C850" },
    { name: "Ice", color: "#98D8D8" },
    { name: "Fighting", color: "#C03028" },
    { name: "Poison", color: "#A040A0" },
    { name: "Ground", color: "#E0C068" },
    { name: "Flying", color: "#A890F0" },
    { name: "Psychic", color: "#F85888" },
    { name: "Bug", color: "#A8B820" },
    { name: "Rock", color: "#B8A038" },
    { name: "Ghost", color: "#705898" },
    { name: "Dragon", color: "#7038F8" },
    { name: "Dark", color: "#705848" },
    { name: "Steel", color: "#B8B8D0" },
    { name: "Fairy", color: "#EE99AC" },
    { name: "Stellar", color: "#6C4AB6" },
  ];

  const Generations: Generation[] = [
    { name: "Kanto", color: "#78C850" },
    { name: "JOHTO", color: "#F8D030" },
    { name: "HOEnn", color: "#6890F0" },
    { name: "Sinnoh", color: "#A040A0" },
    { name: "teselia", color: "#7038F8" },
    { name: "kalos", color: "#F85888" },
    { name: "alola", color: "#F08030" },
    { name: "galar", color: "#8b54ff" },
  ];

  return (
    <div className="h-screen w-screen bg-red-700 pt-5 flex flex-col items-center">
      <div className="w-full flex justify-around items-center">
        <img src="/logo_pokemon.png" alt="Pokemon" />
        <Link to={"/"}>
          <FontAwesomeIcon icon={faX} className="text-white text-2xl" />
        </Link>
      </div>
      <h2 className="texto-pokemon text-3xl font-extrabold">Types</h2>

      <div className="grid grid-cols-6 gap-5 mt-5 uppercase">
        {pokemonTypes.map((item) => (
          <Cards key={item.name} text={item.name} bg={item.color} />
        ))}
      </div>
      <h2 className="texto-pokemon text-3xl font-extrabold">Generation</h2>

      <div className="grid grid-cols-6 gap-5 mt-5 uppercase">
        {Generations.map((item) => (
          <Cards key={item.name} text={item.name} bg={item.color} />
        ))}
      </div>
      <Link to={""}>
        <h2 className="uppercase bg-yellow-400 texto-pokemon txt-2xl border-2 border-blue-700 rounded-md p-6 cursor-pointer hover:scale-110">
          Search
        </h2>
      </Link>
    </div>
  );
};

export default Menu;
