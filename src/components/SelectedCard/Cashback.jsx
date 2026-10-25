import React from "react";
import CardInfo from "../CardInfo";

const Cashback = ({ cardName }) => {
  const selectedCard = CardInfo.find(
    (card) => card.name === cardName
  );

  const descriptions = selectedCard?.desc2 ?? [];

  if (descriptions.length === 0) {
    return null;
  }

  return (
    <section className="flex min-h-screen w-full flex-col justify-center px-6 py-16 text-white md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-12 text-4xl font-semibold tracking-tight md:mb-16 md:text-5xl lg:text-6xl">
          Beyond the Basics
        </h2>

        <ul className="space-y-8 md:space-y-10">
          {descriptions.map((description, index) => (
            <li
              key={`${cardName}-${index}`}
              className="flex items-start gap-5 text-xl leading-relaxed text-white/80 md:gap-7 md:text-2xl lg:text-3xl"
            >
              <span className="mt-3 h-3 w-3 shrink-0 rounded-full bg-white/80 md:mt-4 md:h-4 md:w-4" />
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cashback;