import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import bg from "../assets/bg.png";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const CREDIT_CARDS = [
  { id: "01", title: "AMEX", desc: "Premium rewards and global travel benefits." },
  { id: "02", title: "HDFC", desc: "Spend smarter, earn more rewards with every swipe." },
  { id: "03", title: "HSBC", desc: "International perks and instant cashback options." },
  { id: "04", title: "SBI", desc: "Maximum savings on everyday shopping and dining." },
  { id: "05", title: "AXIS", desc: "Accelerated reward points and travel lounge access." },
  { id: "06", title: "ICICI", desc: "Exclusive discounts across major online partners." },
];

const DEBIT_CARDS = [
  { id: "01", title: "HDFC", desc: "Spend with confidence and stay in complete control." },
  { id: "02", title: "SBI", desc: "Nationwide access with hassle-free transaction limits." },
  { id: "03", title: "ICICI", desc: "Secure digital payments with instant reward points." },
  { id: "04", title: "AXIS", desc: "Manage your money effortlessly with zero hidden fees." },
];

const Company = ({ setRoute, category, setCategory, setCompany }) => {
  const sectionRef = useRef(null);

  // Check category match safely
  const isCredit = category?.toLowerCase().includes("credit");
  const activeCards = isCredit ? CREDIT_CARDS : DEBIT_CARDS;

  useLayoutEffect(() => {
    if (!category) return;

    let ctx = gsap.context(() => {
      gsap.set(".panel", { opacity: 0 });

      const panels = gsap.utils.toArray(".panel");
      const totalPanels = panels.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${totalPanels * 1500}`,
        },
      });

      panels.forEach((panel, i) => {
        const isFirst = i === 0;
        const isLast = i === totalPanels - 1;

        const startTime = i * 1.0;
        const duration = 2.0;

        const pathStart = isFirst ? 0.5 : 0;
        const pathEnd = isLast ? 0.5 : 1.0;

        tl.to(panel, { opacity: 1, duration: 0.3 }, startTime);

        tl.to(
          panel,
          {
            motionPath: {
              path: "#curvePath",
              align: "#curvePath",
              alignOrigin: [0.5, 0.5],
              start: pathStart,
              end: pathEnd,
            },
            duration: duration,
            ease: "none",
          },
          startTime
        );

        if (!isLast) {
          tl.to(
            panel,
            { opacity: 0, duration: 0.4 },
            startTime + duration - 0.4
          );
        }
      });
    }, sectionRef);

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
          className="absolute top-6 left-6 z-40 bg-[#f4ebd8] text-[#0f0d0c] px-4 py-2 rounded-md font-bold text-sm hover:opacity-80 transition cursor-pointer"
        >
          ← Back to Selection
        </button>

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
              <h2 className="text-[7rem] m-0 text-transparent leading-none [-webkit-text-stroke:3px_#f4ebd8]">
                {card.id}
              </h2>
              <h3 className="bg-[#f4ebd8] text-[#0f0d0c] px-5 py-2 rounded-md inline-block font-bold tracking-wide mt-2">
                {card.title}
              </h3>
              <p className="text-base leading-relaxed mt-3 max-w-sm text-neutral-300">
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