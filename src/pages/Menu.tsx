import { faCross } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <div>
      <div>
        <img src="/logo_pokemon.png" alt="Pokemon" />
        <FontAwesomeIcon icon={faCross} />
      </div>
    </div>
  );
};

export default Menu;
