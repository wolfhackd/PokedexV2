import React from "react";

// incluir key pelo props e depois arrumar para casar com o fetch
const PokeCard = ({ limit = 20, pages = null }) => {
  return (
    <div className=" bg-gradient-to-r from-white to-yellow-200 rounded-md md:w-60 h-44 flex dark:from-[#BFDFFF] dark:to-[#001224]">
      <div className="bg-white w-full flex justify-between p-3 rounded-md self-end">
        <p>#001</p>
        <p>Bulbasaur</p>
      </div>
    </div>
  );
};

export default PokeCard;
