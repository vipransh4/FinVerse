import React, { useState, useEffect } from "react";
import CardInfo from "../CardInfo";
import everyday from "../../assets/everyday.webp"
import rewards from "../../assets/rewards and savings.webp"
import travel from "../../assets/travel.webp"
import welcome from "../../assets/welcome benefits.webp"


const images=[welcome,rewards,travel,everyday]

const ProcessSection = ({ cardName }) => {
  const selectedCard = CardInfo.find(
    (card) => card.name === cardName
  );

  const benefits = selectedCard?.Benefits ?? [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

  const handleHover = (index) => {
    if (index === activeIndex) return;

    setPreviousIndex(activeIndex);
    setActiveIndex(index);
  };

  // Reset the active row when a different card is selected.
  useEffect(() => {
    setActiveIndex(0);
    setPreviousIndex(0);
  }, [cardName]);

  // Moving to a later row: image enters from above.
  // Moving to an earlier row: image enters from below.
  const movingUp = activeIndex > previousIndex;


  return (
    <section className="flex min-h-screen w-full flex-col overflow-hidden bg-[linear-gradient(180deg,#07080a_0%,#0f1117_50%,#191c24_100%)] px-5 text-white md:h-screen md:px-10 lg:px-14">
      <div className="relative flex flex-1 flex-col">
        {/* Central image */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 hidden pr-[calc(50%+2rem)] md:block">
          <div className="sticky top-1/2 ml-auto flex h-[55vh] max-h-[360px] min-h-[240px] w-[170px] -translate-y-1/2 items-center lg:w-[210px]">
            <img
              key={`${cardName}-${activeIndex}`}
                src={images[activeIndex % images.length]}
                loading="lazy"
              alt={benefits[activeIndex]?.title ?? "Card benefit"}
              className={`h-full w-full border border-white/10 object-cover shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] ${
                movingUp
                  ? "animate-image-up"
                  : "animate-image-down"
              }`}
            />
          </div>
        </div>

        {benefits.map((benefit, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={`${cardName}-${index}`}
              onMouseEnter={() => handleHover(index)}
              className="grid min-h-0 flex-1 cursor-pointer grid-cols-1 items-center gap-4 border-t border-white/15 py-4 transition-colors duration-500 md:grid-cols-[1fr_1fr] md:gap-8"
            >
              {/* Left column: benefit title */}
              <div>
                <h3
                    className={`font-serif max-w-full text-lg leading-tight tracking-tight transition-all duration-500 md:max-w-[calc(100%-13rem)] md:text-2xl lg:max-w-[calc(100%-15rem)] lg:text-4xl ${
                    isActive
                        ? "translate-x-1 text-white"
                        : "text-white/35"
                    }`}
                >
                  {benefit.title}
                </h3>

                {/* Mobile image */}
                {isActive && (
                  <img
                    src={images[index % images.length]}
                    alt={benefit.title}
                    loading="lazy"
                    className="mt-5 aspect-[4/3] w-full object-cover md:hidden"
                  />
                )}
              </div>

              {/* Right column: benefit description */}
              <p
                className={`max-w-2xl text-lg leading-relaxed transition-colors duration-500 md:text-xl lg:text-2xl ${
                  isActive ? "text-white" : "text-white/35"
                }`}
              >
                {benefit.benifit}
              </p>
            </article>
          );
        })}

        <div className="border-t border-white/15" />
      </div>
    </section>
  );
};

export default ProcessSection;
