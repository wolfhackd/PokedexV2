import React, { useEffect, useState } from "react";
import { pokemonsCount } from "../api/pokeapi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PagesNumber = ({ itemsForPages = 20 }) => {
  const [Numpages, setNumPages] = useState(0);
  const [CurrentPage, setCurrentPage] = useState(1);
  const numberOfPages = async () => {
    const count = await pokemonsCount();
    let pages = 0;
    if (count) {
      pages = Math.floor(count / itemsForPages);
      if (count % itemsForPages !== 0) {
        setNumPages(pages + 1);
      } else {
        setNumPages(pages);
      }
    }
  };
  useEffect(() => {
    numberOfPages();
  }, [itemsForPages]);

  // const pageNumbers = [...Array(Numpages).keys()].map((i) => i + 1);

  /* Falta resolver o problema onde o usuário coloca o número e o valor muda e a pagina tambem */
  return (
    <div className="flex gap-2 items-center select-none text-white font-semibold">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="cursor-pointer"
        onClick={() => setCurrentPage(CurrentPage - 1)}
      />

      <span>
        Página
        <input
          type="number"
          value={CurrentPage}
          className="bg-transparent border-none no-spinner text-center w-4 focus:outline-none focus:bg-blue-500"
        />
        {` de ${Numpages}`}
      </span>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="cursor-pointer"
        onClick={() => setCurrentPage(CurrentPage + 1)}
      />
    </div>
  );
};

export default PagesNumber;
