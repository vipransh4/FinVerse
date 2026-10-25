
import React, { useState, useEffect, useCallback } from "react";
import CardInfo from "../CardInfo";

const chargeDescriptions = {
  "joining fee": "A one-time fee charged when you get a new credit card.",
  "renewal fee": "The recurring fee for keeping your card active.",
  "annual fee": "The yearly fee for keeping your credit card active.",
  "forex markup":
    "The additional fee applied to eligible foreign currency transactions.",
  "fuel surcharge waiver":
    "The fuel surcharge waiver available on eligible petrol transactions.",
  "cash advance charges":
    "The fee charged when withdrawing cash using your credit card.",
};

const Charges = ({ cardName }) => {
  const selectedCard = CardInfo.find(
    (card) => card.name === cardName
  );

  // charges is an array containing an object
  const chargesObject = selectedCard?.charges?.[0] ?? {};

  // Each object key becomes the title and its value becomes the amount/details
  const slides = Object.entries(chargesObject).map(([title, value]) => ({
    title,
    value: String(value),
    description:
      chargeDescriptions[title.toLowerCase()] ??
      "Review the applicable terms and conditions for this charge.",
  }));

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  useEffect(() => {
    setActiveIndex(0);
  }, [cardName]);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide, slides.length]);

  if (slides.length === 0) {
    return (
      <section className="flex min-h-screen w-full items-center justify-center bg-transparent text-white">
        <p className="text-lg text-white/70">
          No charge information available for this card.
        </p>
      </section>
    );
  }

  const getOffset = (index) => {
    let offset = index - activeIndex;

    if (offset > slides.length / 2) offset -= slides.length;
    if (offset < -slides.length / 2) offset += slides.length;

    return offset;
  };

  return (
    <section className="flex min-h-screen w-full flex-col justify-center overflow-hidden bg-transparent pt-10 pb-8 text-white md:pt-20">
      <h2 className="mb-6 text-center text-3xl font-bold tracking-wide md:text-5xl">
        FEES & CHARGES
      </h2>

      <div className="relative h-[65vh] min-h-[380px] w-full overflow-hidden md:h-[75vh]">
        {slides.map((slide, index) => {
          const offset = getOffset(index);
          const distance = Math.abs(offset);
          const isActive = offset === 0;

          return (
            <article
              key={`${cardName}-${slide.title}`}
              className="absolute left-1/2 top-1/2 overflow-hidden border border-white/10 bg-neutral-950 transition-all duration-700 ease-in-out"
              style={{
                width: "34vw",
                height: isActive ? "70vh" : "55vh",
                transform: `translate(calc(-50% + ${offset * 37}vw), -50%) scale(${1 - Math.min(distance, 2) * 0.13})`,
                opacity: 1 - Math.min(distance, 3) * 0.2,
                zIndex: 10 - distance,
                visibility: distance > 2 ? "hidden" : "visible",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-950 to-black" />

              <div className="pointer-events-none absolute -bottom-12 -right-4 select-none text-[10rem] font-black text-white/[0.05] md:text-[15rem]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative flex h-full flex-col justify-between p-5 md:p-8">
                <h3 className="text-xl font-bold tracking-wide text-blue-400 md:text-3xl">
                  {slide.title}
                </h3>

                <div>
                  <p className="mb-4 break-words text-2xl font-semibold md:text-4xl">
                    {slide.value}
                  </p>

                  <p className="text-sm leading-relaxed text-white/70 md:text-lg">
                    {slide.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mx-auto mt-5 flex w-[75%] max-w-3xl items-center gap-5">
        <button
          onClick={prevSlide}
          aria-label="Previous charge"
          className="flex h-9 w-9 shrink-0 items-center justify-center border border-blue-500 text-xl text-blue-400 transition hover:bg-blue-500 hover:text-white"
        >
          &#10094;
        </button>

        <div className="h-[2px] flex-1 overflow-hidden bg-white/20">
          <div
            key={activeIndex}
            className="h-full origin-left animate-progress bg-blue-500"
          />
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next charge"
          className="flex h-9 w-9 shrink-0 items-center justify-center border border-blue-500 text-xl text-blue-400 transition hover:bg-blue-500 hover:text-white"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Charges;
