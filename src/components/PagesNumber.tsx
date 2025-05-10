import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// mudei para mandar o total de itens aqui
const PagesNumber = ({ currentPage, onPageChange, numPages }) => {
  const [inputPage, setInputPage] = useState(currentPage);

  useEffect(() => {
    setInputPage(currentPage);
  }, [currentPage]);

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handlePageSubmit = () => {
    const page = parseInt(inputPage, 10);
    if (!isNaN(page) && page >= 1 && page <= numPages) {
      onPageChange(page);
    } else {
      setInputPage(currentPage); // volta ao valor correto
    }
  };

  return (
    <div className="text-white">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className=""
        disabled={currentPage <= 1}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <input
        type="number"
        value={inputPage}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handlePageSubmit()}
        onBlur={handlePageSubmit}
        className="focus:outline-none bg-transparent focus:bg-blue-300 w-6 no-spinner text-center"
      />
      <span>de {numPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className=""
        disabled={currentPage >= numPages}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default PagesNumber;
