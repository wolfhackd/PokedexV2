import axios from "axios";

export const fetchPokemons = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    return response.data.count;
  } catch (err) {
    console.error(err);
  }
};
export const pokemonsCount = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    return response.data.count;
  } catch (err) {
    console.error(err);
  }
};
