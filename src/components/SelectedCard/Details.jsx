import React from "react";
import CardInfo from "../CardInfo";

const Details = ({ cardName }) => {
  const selectedCard = CardInfo.find(
    (card) => card.name === cardName
  );

  const descriptions = selectedCard?.desc1 ?? [];

  return (
    <div className="min-h-screen h-screen flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-6xl text-center text-white">
        {descriptions.map((desc, index) => (
          <p
            key={index}
            className={`text-lg md:text-2xl lg:text-3xl leading-relaxed ${
              index !== descriptions.length - 1 ? "mb-6 md:mb-8" : ""
            }`}
          >
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Details;