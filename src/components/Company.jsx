import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import bg from "../assets/bg.webp";
import amex from "../assets/amex logo.webp";
import hdfc from "../assets/hdfc logo.webp";
import hsbc from "../assets/hsbc logo.webp";
import sbi from "../assets/sbi logo.svg";
import axis from "../assets/axis logo.webp";
import icici from "../assets/icici logo.webp";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const CREDIT_CARDS = [
  { id: "01", title: "AMEX", desc: "Premium rewards and global travel benefits.", image: amex },
  { id: "02", title: "HDFC", desc: "Spend smarter, earn more rewards with every swipe.", image: hdfc },
  { id: "03", title: "HSBC", desc: "International perks and instant cashback options.", image: hsbc },
  { id: "04", title: "SBI", desc: "Maximum savings on everyday shopping and dining.", image: sbi },
  { id: "05", title: "AXIS", desc: "Accelerated reward points and travel lounge access.", image: axis },
  { id: "06", title: "ICICI", desc: "Exclusive discounts across major online partners.", image: icici },
];

const DEBIT_CARDS = [
  { id: "01", title: "HDFC", desc: "Spend with confidence and stay in complete control.", image: hdfc },
  { id: "02", title: "SBI", desc: "Nationwide access with hassle-free transaction limits.", image: sbi },
  { id: "03", title: "ICICI", desc: "Secure digital payments with instant reward points.", image: icici },
  { id: "04", title: "AXIS", desc: "Manage your money effortlessly with zero hidden fees.", image: axis },
];

// ── Tuning ──────────────────────────────────────────────
const SPACING = 0.24;   // gap between neighbours along the path
const SHARP_ZONE = 0.5; // items within this distance of center are fully sharp
const BLUR_MAX = 6;     // px of blur for items one step or more away
const clamp = (min, max, v) => Math.min(max, Math.max(min, v));
const mapRange = (inMin, inMax, outMin, outMax, v) =>
  outMin + ((v - inMin) / (inMax - inMin)) * (outMax - outMin);

const Company = ({ setRoute, category, setCategory, setCompany }) => {
  const sectionRef = useRef(null);

  const isCredit = category?.toLowerCase().includes("credit");
  const activeCards = isCredit ? CREDIT_CARDS : DEBIT_CARDS;

  useLayoutEffect(() => {
    if (!category || !sectionRef.current) return;

    const section = sectionRef.current;
    const path = section.querySelector("#curvePath");

    if (!path) return;

    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");
      const total = panels.length;

      if (!total) return;

      const pathLength = path.getTotalLength();

      const updatePanels = (activeIndex) => {
        const w = section.clientWidth;
        const h = section.clientHeight;

        panels.forEach((panel, i) => {
          const offset = i - activeIndex;
          const distance = Math.abs(offset);

          // Right end = progress 0, left end = progress 1.
          // Upcoming items wait on the right; scrolling moves everything right -> left.
          const progress = clamp(0, 1, 0.5 - offset * SPACING);

          // viewBox is 1000x600, stretched to fill the section
          const point = path.getPointAtLength(progress * pathLength);
          const px = (point.x / 1000) * w;
          const py = (point.y / 600) * h;

          const blur = clamp(
            0,
            BLUR_MAX,
            mapRange(SHARP_ZONE, 1.2, 0, BLUR_MAX, distance)
          );

          let opacity;
          if (distance <= SHARP_ZONE) {
            opacity = 1;
          } else if (distance <= 1) {
            opacity = mapRange(SHARP_ZONE, 1, 1, 0.6, distance);
          } else {
            opacity = clamp(0, 0.6, mapRange(1, 1.8, 0.6, 0, distance));
          }

          const scale = clamp(
            0.85,
            1,
            mapRange(SHARP_ZONE, 1, 1, 0.85, distance)
          );

          gsap.set(panel, {
            x: px,
            y: py,
            xPercent: -50,
            yPercent: -50,
            opacity,
            scale,
            filter: `blur(${blur}px)`,
            pointerEvents: distance < 0.5 ? "auto" : "none",
            zIndex: Math.round(100 - distance * 10),
          });
        });
      };

      updatePanels(0);

      const trigger = ScrollTrigger.create({
        trigger: section,
        pin: true,
        scrub: 1,
        start: "top top",
        end: `+=${Math.max(total - 1, 1) * 1000}`,
        invalidateOnRefresh: true,

        onUpdate: (self) => {
          updatePanels(self.progress * (total - 1));
        },

        onRefresh: (self) => {
          updatePanels(self.progress * (total - 1));
        },
      });

      const handleResize = () => {
        updatePanels(trigger.progress * (total - 1));
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, section);

    return () => ctx.revert();
  }, [category]);

  const handleCompanySelect = (companyName) => {
    setCompany(companyName);
    setRoute("allcards");
  };

  return (
    <div className="w-full overflow-hidden bg-neutral-900 font-sans">
      <section
        ref={sectionRef}
        style={{ backgroundImage: `url(${bg})` }}
        className="h-screen w-screen bg-cover bg-center text-[#f4ebd8] overflow-hidden relative flex flex-col items-center justify-center"
      >
        <button
          onClick={() => {
            if (setCategory) setCategory(null);
            setRoute("hero");
          }}
          className="
                fixed top-6 left-6 z-50
                px-5 py-3
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
          ← Back to Selection
        </button>

        <h1 className="absolute top-18 left-1/2 z-40 -translate-x-1/2 whitespace-nowrap 
        bg-gradient-to-b from-white via-[#f4ebd8] to-[#c9a45c] bg-clip-text text-center text-2xl font-extrabold uppercase 
        tracking-[0.2em] text-transparent drop-shadow-[0_0_25px_rgba(244,200,120,0.35)] md:top-20 md:text-5xl">
          Explore Banking Partners
        </h1>

        <svg
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        >
          <path
            id="curvePath"
            d="M 1200,250 Q 500,450 -200,250"
            fill="none"
            stroke="#444"
            strokeWidth="3"
            strokeDasharray="10, 15"
          />
        </svg>

        {activeCards.map((card) => (
          <div
            key={card.id + card.title}
            className="panel absolute top-0 left-0 w-80 z-20 cursor-pointer"
            onClick={() => handleCompanySelect(card.title)}
          >
            <div className="text-center px-5 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <img
                  src={card.image}
                  alt={`${card.title} logo`}
                  loading="lazy"
                  className="w-44 h-28 object-contain mb-2"
                />
              </div>
              <h3 className="bg-[#f4ebd8] text-[#0f0d0c] px-5 py-2 rounded-md inline-block font-bold tracking-wide mt-2">
                {card.title}
              </h3>
              <p className="text-2xl leading-relaxed mt-3 max-w-sm text-neutral-300">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Company;