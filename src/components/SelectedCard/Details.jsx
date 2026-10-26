import React, { useState } from "react";
import CardInfo from "../CardInfo";

const Details = ({ cardName }) => {
  const selectedCard = CardInfo.find(
    (card) => card.name === cardName
  );

  const descriptions = selectedCard?.desc1 ?? [];
  const [tilts, setTilts] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  const threshold = 15;

  const handleMove = (e, index) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setTilts((prev) =>
      prev.map((tilt, i) =>
        i === index
          ? { x: y * -threshold, y: x * threshold }
          : tilt
      )
    );
  };

  const handleLeave = (index) => {
    setTilts((prev) =>
      prev.map((tilt, i) =>
        i === index ? { x: 0, y: 0 } : tilt
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">

        {/* Card 1 */}
        <div
          className="rounded-2xl shadow-xl overflow-hidden cursor-pointer
          bg-white/5 p-6 md:p-8 min-h-[550px] border border-white/10 backdrop-blur-md transition-transform duration-200 ease-out flex flex-col"
          onMouseMove={(e) => handleMove(e, 0)}
          onMouseLeave={() => handleLeave(0)}
          style={{
            transform: `perspective(1000px) rotateX(${tilts[0].x}deg) rotateY(${tilts[0].y}deg)`,
          }}
        >

          <div className="w-full flex-1 space-y-3 text-#F3F4F6">
            {descriptions.slice(0, Math.ceil(descriptions.length / 2)).map(
              (desc, index) => (
                <p key={index} className="w-full text-xl leading-relaxed text-justify md:text-2xl lg:text-3xl">
                  {desc}
                </p>
              )
            )}
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="rounded-2xl shadow-xl overflow-hidden cursor-pointer
          bg-white/5 p-6 md:p-8 min-h-[550px] border border-white/10 backdrop-blur-md transition-transform duration-200 ease-out flex flex-col"
          onMouseMove={(e) => handleMove(e, 1)}
          onMouseLeave={() => handleLeave(1)}
          style={{
            transform: `perspective(1000px) rotateX(${tilts[1].x}deg) rotateY(${tilts[1].y}deg)`,
          }}
        >

          <div className="w-full flex-1 space-y-3 text-#F3F4F6">
            {descriptions.slice(Math.ceil(descriptions.length / 2)).map(
              (desc, index) => (
                <p key={index} className="w-full text-xl leading-relaxed text-justify md:text-2xl lg:text-3xl">
                  {desc}
                </p>
              )
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Details;
