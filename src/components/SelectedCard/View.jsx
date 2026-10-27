import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardInfo from "../CardInfo";
import card_bg_video from "../../assets/card_bg_video.mp4";
gsap.registerPlugin(ScrollTrigger);

const View = ({ cardName = "HDFC Regalia Gold", setRoute }) => {
  const triggerRef = useRef(null);
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const selectedCard = CardInfo.find((card) => card.name === cardName);
  const cardImage = selectedCard?.image;
  const cardLink = selectedCard?.link;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * 0.8,
          scrub: 1.2,
        },
      });

      
      tl.to(
        cardRef.current,
        { rotationY: 360, duration: 1, ease: "power1.inOut" },
        0
      )
        
        .to(
          cardRef.current,
          {
            rotationX: 12,
            rotationZ: -4,
            scale: 1.1,
            z: 80,
            duration: 0.5,
            ease: "power1.inOut",
          },
          0
        )
        
        .to(
          cardRef.current,
          {
            rotationX: 0,
            rotationZ: 0,
            scale: 1,
            z: 0,
            duration: 0.5,
            ease: "power1.inOut",
          },
          0.5
        )
        .to(
          glowRef.current,
          { opacity: 0.6, scale: 1.3, duration: 0.5, ease: "power1.inOut" },
          0
        )
        .to(
          glowRef.current,
          { opacity: 0.35, scale: 1, duration: 0.5, ease: "power1.inOut" },
          0.5
        );
    }, triggerRef);

    return () => ctx.revert();
  }, [cardName]);

  return (
    <>
      <div
        ref={triggerRef}
        className="relative w-full h-[280vh] text-white overflow-x-clip"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black perspective-distant md:perspective-[1600px]">
          <video
            src={card_bg_video}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => ScrollTrigger.refresh()}
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          />

          <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-900/30 via-black/40 to-black/70 pointer-events-none" />

          <div
            ref={glowRef}
            className="absolute z-2 w-72 h-44 sm:w-96 sm:h-60 rounded-full bg-linear-to-tr from-neutral-400 via-slate-300 to-zinc-500 opacity-20 blur-3xl pointer-events-none transition-shadow will-change-transform"
            />

          <div className="relative z-10 flex flex-col items-center justify-center transform-3d shrink-0">
            <div
              ref={cardRef}
              className="w-72 h-44 sm:w-96 sm:h-60 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/10 overflow-hidden bg-neutral-900/40 backdrop-blur-md will-change-transform transform-3d"
              >
              <img
                src={cardImage}
                alt={cardName}
                loading="lazy"
                className="w-full h-full object-contain pointer-events-none rounded-2xl p-2"
                />
            </div>

            <div className="mt-10 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl pointer-events-none">
              <span className="text-sm sm:text-base font-medium tracking-widest uppercase bg-linear-to-r from-neutral-200 via-white to-neutral-400 bg-clip-text text-transparent">
                {cardName}
              </span>
            </div>
              <a
                href={cardLink || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  px-8 py-3
                  text-lg font-medium text-white
                  bg-white/5
                  border border-white/70
                  rounded-md
                  shadow-[0_0_12px_rgba(180,220,255,0.5)]
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:bg-white hover:text-black
                  hover:shadow-[0_0_25px_rgba(180,220,255,0.8)]
                  cursor-pointer
                "
              >
                Apply Here
              </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;