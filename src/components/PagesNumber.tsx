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
  const [InputPage, setInputPage] = useState(CurrentPage);

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

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };
  const handlePageSubmit = () => {
    const page = parseInt(InputPage, 10);
    if (!isNaN(page) && page >= 1 && page <= Numpages) {
      setCurrentPage(page);
    } else {
      setInputPage(CurrentPage);
    }
  };

  useEffect(() => {
    numberOfPages();
  }, [itemsForPages]);

  useEffect(() => {
    setInputPage(CurrentPage);
  }, [CurrentPage]);

  /* Falta resolver o problema onde o usuário coloca o número e o valor muda e a pagina tambem */
  return (
    <div className="flex gap-2 items-center select-none text-white font-semibold">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="cursor-pointer"
        onClick={() =>
          setCurrentPage(CurrentPage >= 2 ? CurrentPage - 1 : CurrentPage)
        }
      />

      <span>
        Página
        <input
          type="number"
          value={InputPage}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handlePageSubmit();
          }}
          onBlur={handlePageSubmit}
          className="bg-transparent border-none no-spinner text-center w-6 focus:outline-none focus:bg-blue-500"
        />
        {` de ${Numpages}`}
      </span>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="cursor-pointer"
        onClick={() =>
          setCurrentPage(CurrentPage < Numpages ? CurrentPage + 1 : CurrentPage)
        }
      />
    </div>
  );
};

export default PagesNumber;
