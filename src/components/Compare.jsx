import React, { useLayoutEffect, useRef, useEffect } from "react";
import CardInfo from "./CardInfo";
import Tilt from "react-parallax-tilt";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Snowfall Background Component
const SnowfallCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize snowflakes
    const flakeCount = 80;
    const flakes = [];

    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 3, 
        speed: Math.random() * 0.35 + 0.15,
        wind: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();

        // Update position
        flake.y += flake.speed;
        flake.x += flake.wind;

        // Reset flake when it goes out of bounds
        if (flake.y > canvas.height) {
          flake.y = -5;
          flake.x = Math.random() * canvas.width;
        }
        if (flake.x > canvas.width) {
          flake.x = 0;
        } else if (flake.x < 0) {
          flake.x = canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

// Character/Word scroll animation component
const AnimatedText = ({ text, className = "" }) => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const split = SplitText.create(element, {
        type: "words,chars",
        aria: "auto",
        autoSplit: true,
      });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        duration: 0.5,
        ease: "power2.out",
        y: 20,
        autoAlpha: 0,
        stagger: 0.01,
      });
    }, element);

    return () => ctx.revert();
  }, [text]);

  return (
    <p ref={textRef} className={className}>
      {text}
    </p>
  );
};

const Compare = ({ setRoute }) => {
  const cardNames = JSON.parse(
    sessionStorage.getItem("compareCards") || "[]"
  );

  const selectedCards = cardNames
    .map((name) => CardInfo.find((card) => card.name === name))
    .filter(Boolean);

  const formatCharge = (charge) => {
    if (typeof charge === "object" && charge !== null) {
      return Object.entries(charge).map(
        ([key, value]) => `${key}: ${value}`
      );
    }
    return [String(charge)];
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-4 md:px-8 py-8 relative selection:bg-white selection:text-black">
      {/* Snowfall Background */}
      <SnowfallCanvas />

      {/* Background Subtle Gradient Highlight */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),transparent_50%)] z-0" />

      {/* Back to Search Button */}
      <button
        onClick={() => setRoute("search")}
        className="fixed top-5 left-5 z-50 px-5 py-3 text-lg font-medium
        bg-neutral-900/90 border border-white/60 rounded-lg shadow-lg
        backdrop-blur-md transition hover:bg-white hover:text-black"
      >
        ← Back to search
      </button>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto pt-4 relative z-10 space-y-10">

        {/* Page Heading Section */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Card Comparison Matrix
          </h1>
        </div>

        {selectedCards.length > 0 ? (
          <div className="space-y-20">
            
            {/* Header Selected Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {selectedCards.map((card) => (
                <div
                  key={card.id}
                  className="flex flex-col items-center justify-between p-6 rounded-xl bg-neutral-900/40 border border-neutral-800/60"
                >
                  <Tilt
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    perspective={1000}
                    scale={1.02}
                    transitionSpeed={1000}
                    glareEnable={true}
                    glareMaxOpacity={0.15}
                    className="w-full max-w-[220px] my-1"
                  >
                    <img
                      src={card.image}
                      alt={card.name}
                      loading="lazy"
                      className="w-full h-28 md:h-36 object-contain drop-shadow-lg"
                    />
                  </Tilt>

                  <h3 className="text-xl md:text-2xl font-bold text-center mt-3 text-neutral-100">
                    {card.name}
                  </h3>

                  {card.link && (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 px-5 py-3 text-lg font-medium
                      bg-neutral-900/90 border border-white/60 rounded-lg shadow-lg
                      backdrop-blur-md transition hover:bg-white hover:text-black"
                    >
                      Apply Here
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Section: Charges */}
            <section className="space-y-6">
              <div className="border-b border-neutral-800 pb-3">
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                  Fee & Charge Structure
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {selectedCards.map((card) => (
                  <div
                    key={card.id}
                    className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 space-y-4"
                  >
                    {(card.charges ?? []).map((charge, index) => (
                        <div
                          key={index}
                          className="p-5 rounded-xl bg-neutral-950/50 border border-neutral-800/40"
                        >
                          {formatCharge(charge).map((item, i) => (
                            <AnimatedText
                              key={i}
                              text={item}
                              className="text-lg md:text-xl text-neutral-200 leading-relaxed font-medium"
                            />
                          ))}
                        </div>
                        ))}
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Pros */}
            <section className="space-y-6">
              <div className="border-b border-neutral-800 pb-3">
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                  Key Benefits & Pros
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {selectedCards.map((card) => (
                  <div
                    key={card.id}
                    className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 space-y-4"
                  >
                    {(card.pros ?? []).map((pro, index) => (
                      <div
                        key={index}
                        className="flex gap-3 items-start p-5 rounded-xl bg-emerald-950/10 border border-emerald-500/10"
                      >
                        <span className="text-emerald-400 font-bold text-lg">✓</span>
                        <AnimatedText
                          text={String(pro)}
                          className="text-lg md:text-xl text-neutral-200 leading-relaxed font-medium"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Cons */}
            <section className="space-y-6">
              <div className="border-b border-neutral-800 pb-3">
                <h2 className="text-sm font-bold uppercase tracking-widest text-rose-400">
                  Drawbacks & Cons
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {selectedCards.map((card) => (
                  <div
                    key={card.id}
                    className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 space-y-4"
                  >
                    {(card.cons ?? []).map((con, index) => (
                      <div
                        key={index}
                        className="flex gap-3 items-start p-5 rounded-xl bg-rose-950/10 border border-rose-500/10"
                      >
                        <span className="text-rose-400 font-bold text-lg">✕</span>
                        <AnimatedText
                          text={String(con)}
                          className="text-lg md:text-xl text-neutral-200 leading-relaxed font-medium"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>

          </div>
        ) : (
          /* Empty State */
          <div className="max-w-md mx-auto text-center py-20">
            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 shadow-xl backdrop-blur-md">
              <p className="text-neutral-400 text-xl mb-6">
                No cards selected for comparison.
              </p>
              <button
                onClick={() => setRoute("search")}
                className="w-full py-3 rounded-lg bg-white text-black text-lg font-semibold hover:bg-neutral-200 transition-colors"
              >
                Select Cards to Compare
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Compare;