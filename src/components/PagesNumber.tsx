import React, { useEffect, useState } from "react";
import { pokemonsCount } from "../api/pokeapi";

const PagesNumber = ({ itemsForPages = 20 }) => {
  const [Numpages, setNumPages] = useState(0);
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

  const pageNumbers = [...Array(Numpages).keys()].map((i) => i + 1);
  return (
    <div className="flex flex-wrap gap-2">
      {pageNumbers.map((page, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white font-semibold rounded-lg"
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default PagesNumber;
