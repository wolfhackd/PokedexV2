import React from "react";

const Cards = ({ text, bg }: { text: string; bg: string }) => {
  return (
    <div
      className="w-32 text-center text-white font-bold rounded-md p-4 cursor-pointer hover:scale-110 "
      style={{ backgroundColor: bg || undefined }}
    >
      <span>{text}</span>
    </div>
  );
};

export default Cards;
