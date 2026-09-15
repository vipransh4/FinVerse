import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Asset Imports
import i1 from "../assets/credit card/Amex/Amex Centurion (Black Card).png";
import i2 from "../assets/credit card/Amex/Amex Gold.png";
import i3 from "../assets/credit card/Amex/Amex Platinum Travel.jpg";
import i4 from "../assets/credit card/Amex/Amex Platinum.jpg";
import i5 from "../assets/credit card/Amex/Amex Reserve.jpg";
import i6 from "../assets/credit card/axis/Airtel Axis Bank.jpg";
import i7 from "../assets/credit card/axis/Axis Ace Signature.png";
import i8 from "../assets/credit card/axis/Axis Atlas.png";
import i9 from "../assets/credit card/axis/Axis Cashback.jpg";
import i10 from "../assets/credit card/axis/Axis Magnus Burgundy.jpg";
import i11 from "../assets/credit card/hdfc/HDFC Diners BizBlack.jpg";
import i12 from "../assets/credit card/hdfc/HDFC Diners Club Black Metal.png";
import i13 from "../assets/credit card/hdfc/HDFC Freedom.jpg";
import i14 from "../assets/credit card/hdfc/hdfc infinia metal.png";
import i15 from "../assets/credit card/hdfc/HDFC Millennia.jpg";
import i16 from "../assets/credit card/hdfc/HDFC MoneyBack+.jpg";
import i17 from "../assets/credit card/hdfc/HDFC Regalia Gold.jpg";
import i18 from "../assets/credit card/hdfc/HDFC Swiggy Black.jpg";
import i19 from "../assets/credit card/hdfc/HDFC Tata Neu Infinity RuPay.jpg";
import i20 from "../assets/credit card/hsbc/HSBC live+.png";
import i21 from "../assets/credit card/hsbc/HSBC Premier.png";
import i22 from "../assets/credit card/hsbc/HSBC TravelOne.png";
import i23 from "../assets/credit card/icici/Amazon Pay ICICI.jpg";
import i24 from "../assets/credit card/icici/ICICI Coral.png";
import i25 from "../assets/credit card/icici/ICICI Emeralde Private Metal.jpg";
import i26 from "../assets/credit card/icici/ICICI Platinum Chip.png";
import i27 from "../assets/credit card/icici/ICICI Sapphiro.jpg";
import i28 from "../assets/credit card/icici/ICICI Times Black.png";
import i29 from "../assets/credit card/icici/MakeMyTrip ICICI Signature.png";
import i30 from "../assets/credit card/icici/rubyx.png";
import i31 from "../assets/credit card/sbi/cashback-sbi-card.png";
import i32 from "../assets/credit card/sbi/Club Vistara SBI.jpg";
import i33 from "../assets/credit card/sbi/SBI Aurum.png";
import i34 from "../assets/credit card/sbi/SBI BPCL Octane.jpg";
import i35 from "../assets/credit card/sbi/SBI Card Miles Elite.png";
import i36 from "../assets/credit card/sbi/SBI Card PRIME.jpg";
import i37 from "../assets/credit card/sbi/SBI PhonePe Select Black.jpg";
import i38 from "../assets/credit card/sbi/SBI SimplyClick.png";
import i39 from "../assets/credit card/sbi/SBI SimplySAVE.png";
import i40 from "../assets/debit card/axis/Axis Burgundy Debit Card.jpg";
import i41 from "../assets/debit card/axis/Axis Delight Debit Card.jpg";
import i42 from "../assets/debit card/axis/Axis Liberty Debit Card.png";
import i43 from "../assets/debit card/axis/Axis Online Rewards.jpg";
import i44 from "../assets/debit card/axis/Axis Prestige Debit Card.png";
import i45 from "../assets/debit card/axis/Axis Priority Debit Card.jpg";
import i46 from "../assets/debit card/axis/Axis Rewards Debit Card.png";
import i47 from "../assets/debit card/hdfc/HDFC EasyShop Imperia Premium.jpg";
import i48 from "../assets/debit card/hdfc/HDFC EasyShop NRO  NRE.jpg";
import i49 from "../assets/debit card/hdfc/HDFC EasyShop Preferred Business.png";
import i50 from "../assets/debit card/hdfc/HDFC Millennia Debit Card.jpg";
import i51 from "../assets/debit card/hdfc/HDFC Rupay Premium.png";
import i52 from "../assets/debit card/icici/ICICI Carbon (Eco-friendly).png";
import i53 from "../assets/debit card/icici/ICICI Coral Debit Card.jpg";
import i54 from "../assets/debit card/icici/ICICI Expressions (Personalized).png";
import i55 from "../assets/debit card/icici/ICICI Rubiyx Debit Card.jpg";
import i56 from "../assets/debit card/icici/ICICI Sapphiro Debit Card.jpg";
import i57 from "../assets/debit card/icici/ICICI Smart Shopper SilverGold.jpg";
import i58 from "../assets/debit card/icici/ICICI Wealth Select Debit Card.jpg";
import i59 from "../assets/debit card/sbi/SBI Classic Debit Card.png";
import i60 from "../assets/debit card/sbi/SBI Global International.png";
import i61 from "../assets/debit card/sbi/SBI Gold International.jpg";
import i62 from "../assets/debit card/sbi/SBI IOCL Co-Branded.png";
import i63 from "../assets/debit card/sbi/SBI Mumbai Metro Combo.jpg";
import i64 from "../assets/debit card/sbi/SBI platinum international.jpg";
import i65 from "../assets/debit card/sbi/SBI RuPay Select.png";

gsap.registerPlugin(ScrollTrigger);

// Map imported images to card names
const CARD_DATA = {
  "Amex Centurion (Black Card)": i1,
  "Amex Gold": i2,
  "Amex Platinum Travel": i3,
  "Amex Platinum": i4,
  "Amex Reserve": i5,
  "Airtel Axis Bank": i6,
  "Axis Ace Signature": i7,
  "Axis Atlas": i8,
  "Axis Cashback": i9,
  "Axis Magnus Burgundy": i10,
  "HDFC Diners BizBlack": i11,
  "HDFC Diners Club Black Metal": i12,
  "HDFC Freedom": i13,
  "HDFC Infinia Metal": i14,
  "HDFC Millennia": i15,
  "HDFC MoneyBack+": i16,
  "HDFC Regalia Gold": i17,
  "HDFC Swiggy Black": i18,
  "HDFC Tata Neu Infinity RuPay": i19,
  "HSBC Live+": i20,
  "HSBC Premier": i21,
  "HSBC TravelOne": i22,
  "Amazon Pay ICICI": i23,
  "ICICI Coral": i24,
  "ICICI Emeralde Private Metal": i25,
  "ICICI Platinum Chip": i26,
  "ICICI Sapphiro": i27,
  "ICICI Times Black": i28,
  "MakeMyTrip ICICI Signature": i29,
  "ICICI Rubyx": i30,
  "Cashback SBI Card": i31,
  "Club Vistara SBI": i32,
  "SBI Aurum": i33,
  "SBI BPCL Octane": i34,
  "SBI Card Miles Elite": i35,
  "SBI Card PRIME": i36,
  "SBI PhonePe Select Black": i37,
  "SBI SimplyClick": i38,
  "SBI SimplySAVE": i39,
  "Axis Burgundy Debit Card": i40,
  "Axis Delight Debit Card": i41,
  "Axis Liberty Debit Card": i42,
  "Axis Online Rewards": i43,
  "Axis Prestige Debit Card": i44,
  "Axis Priority Debit Card": i45,
  "Axis Rewards Debit Card": i46,
  "HDFC EasyShop Imperia Premium": i47,
  "HDFC EasyShop NRO NRE": i48,
  "HDFC EasyShop Preferred Business": i49,
  "HDFC Millennia Debit Card": i50,
  "HDFC Rupay Premium": i51,
  "ICICI Carbon (Eco-friendly)": i52,
  "ICICI Coral Debit Card": i53,
  "ICICI Expressions (Personalized)": i54,
  "ICICI Rubiyx Debit Card": i55,
  "ICICI Sapphiro Debit Card": i56,
  "ICICI Smart Shopper SilverGold": i57,
  "ICICI Wealth Select Debit Card": i58,
  "SBI Classic Debit Card": i59,
  "SBI Global International": i60,
  "SBI Gold International": i61,
  "SBI IOCL Co-Branded": i62,
  "SBI Mumbai Metro Combo": i63,
  "SBI Platinum International": i64,
  "SBI RuPay Select": i65,
  DEFAULT: i17, // Fallback default card
};

const Details = ({ cardName = "HDFC Regalia Gold", setRoute }) => {
  const triggerRef = useRef(null);
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  // Retrieve matching image or fallback gracefully
  const cardImage = CARD_DATA[cardName] || CARD_DATA["DEFAULT"];

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2, // Keeps your existing smooth scroll physics
      },
    });

    // Rotation 1 (0° -> 360°)
    tl.to(
      cardRef.current,
      {
        rotationY: 180,
        rotationX: 12,
        rotationZ: -4,
        scale: 1.1,
        z: 80,
        duration: 0.16,
        ease: "power1.inOut",
      },
      0
    )
      .to(
        glowRef.current,
        { opacity: 0.6, scale: 1.3, duration: 0.16, ease: "power1.inOut" },
        0
      )
      .to(
        cardRef.current,
        {
          rotationY: 360,
          rotationX: 0,
          rotationZ: 0,
          scale: 1,
          z: 0,
          duration: 0.16,
          ease: "power1.inOut",
        },
        0.16
      )

      // Rotation 2 (360° -> 720°)
      .to(
        cardRef.current,
        {
          rotationY: 540,
          rotationX: -15,
          rotationZ: 5,
          scale: 1.15,
          z: 100,
          duration: 0.17,
          ease: "power1.inOut",
        },
        0.33
      )
      .to(
        glowRef.current,
        { opacity: 0.85, scale: 1.5, duration: 0.17, ease: "power1.inOut" },
        0.33
      )
      .to(
        cardRef.current,
        {
          rotationY: 720,
          rotationX: 0,
          rotationZ: 0,
          scale: 1,
          z: 0,
          duration: 0.17,
          ease: "power1.inOut",
        },
        0.5
      )

      // Rotation 3 (720° -> 1080°)
      .to(
        cardRef.current,
        {
          rotationY: 900,
          rotationX: 10,
          rotationZ: -4,
          scale: 1.08,
          z: 60,
          duration: 0.17,
          ease: "power1.inOut",
        },
        0.67
      )
      .to(
        glowRef.current,
        { opacity: 0.6, scale: 1.25, duration: 0.17, ease: "power1.inOut" },
        0.67
      )
      .to(
        cardRef.current,
        {
          rotationY: 1080, // Final angle completing 3 full revolutions
          rotationX: 0,
          rotationZ: 0,
          scale: 1,
          z: 0,
          duration: 0.16,
          ease: "power1.inOut",
        },
        0.84
      )
      .to(
        glowRef.current,
        { opacity: 0.35, scale: 1, duration: 0.16, ease: "power1.inOut" },
        0.84
      );
  }, triggerRef);

  return () => ctx.revert();
}, [cardName]);

  return (
    <div
      ref={triggerRef}
      className="relative w-full h-[250vh] bg-black text-white overflow-x-clip"
    >
      {/* Sticky Fullscreen Presentation Area */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden [perspective:1200px] md:[perspective:1600px]">
        {/* Back Button */}
        {setRoute && (
          <button
            onClick={() => setRoute("allcards")}
            className="fixed top-6 left-6 z-50 px-5 py-2.5 text-sm font-medium text-white bg-white/5 border border-white/20 rounded-md shadow-[0_0_12px_rgba(180,220,255,0.3)] backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
          >
            ← Back to All Cards
          </button>
        )}

        {/* Deep Atmospheric Background Grid/Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/60 via-black to-black pointer-events-none" />

        {/* Dynamic Blue Glow Element */}
        <div
          ref={glowRef}
          className="absolute w-72 h-44 sm:w-96 sm:h-60 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 opacity-20 blur-3xl pointer-events-none transition-shadow will-change-transform"
        />

        {/* 3D Card Wrapper Container */}
        <div className="relative z-10 flex flex-col items-center justify-center [transform-style:preserve-3d]">
          <div
            ref={cardRef}
            className="w-72 h-44 sm:w-96 sm:h-60 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/10 overflow-hidden bg-neutral-900/40 backdrop-blur-md will-change-transform [transform-style:preserve-3d]"
          >
            <img
              src={cardImage}
              alt={cardName}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = CARD_DATA["DEFAULT"];
              }}
              className="w-full h-full object-contain pointer-events-none rounded-2xl p-2"
            />
          </div>

          {/* Interactive Card Title Badge */}
          <div className="mt-10 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl pointer-events-none">
            <span className="text-sm sm:text-base font-medium tracking-widest uppercase bg-gradient-to-r from-neutral-200 via-white to-neutral-400 bg-clip-text text-transparent">
              {cardName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;