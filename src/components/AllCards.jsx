import React, { useState, useEffect, useRef, useMemo } from "react";
// Imports
import i1 from '../assets/credit card/Amex/Amex Centurion (Black Card).png';
import i2 from '../assets/credit card/Amex/Amex Gold.png';
import i3 from '../assets/credit card/Amex/Amex Platinum Travel.jpg';

import i4 from '../assets/credit card/Amex/Amex Platinum.jpg';

import i5 from '../assets/credit card/Amex/Amex Reserve.jpg';
import i6 from '../assets/credit card/axis/Airtel Axis Bank.jpg';
import i7 from '../assets/credit card/axis/Axis Ace Signature.png';
import i8 from '../assets/credit card/axis/Axis Atlas.png';
import i9 from '../assets/credit card/axis/Axis Cashback.jpg';
import i10 from '../assets/credit card/axis/Axis Magnus Burgundy.jpg';
import i11 from '../assets/credit card/hdfc/HDFC Diners BizBlack.jpg';
import i12 from '../assets/credit card/hdfc/HDFC Diners Club Black Metal.png';
import i13 from '../assets/credit card/hdfc/HDFC Freedom.jpg';
import i14 from '../assets/credit card/hdfc/hdfc infinia metal.png';
import i15 from '../assets/credit card/hdfc/HDFC Millennia.jpg';
import i16 from '../assets/credit card/hdfc/HDFC MoneyBack+.jpg';
import i17 from '../assets/credit card/hdfc/HDFC Regalia Gold.jpg';
import i18 from '../assets/credit card/hdfc/HDFC Swiggy Black.jpg';
import i19 from '../assets/credit card/hdfc/HDFC Tata Neu Infinity RuPay.jpg';
import i20 from '../assets/credit card/hsbc/HSBC live+.png';
import i21 from '../assets/credit card/hsbc/HSBC Premier.png';
import i22 from '../assets/credit card/hsbc/HSBC TravelOne.png';
import i23 from '../assets/credit card/icici/Amazon Pay ICICI.jpg';
import i24 from '../assets/credit card/icici/ICICI Coral.png';
import i25 from '../assets/credit card/icici/ICICI Emeralde Private Metal.jpg';
import i26 from '../assets/credit card/icici/ICICI Platinum Chip.png';
import i27 from '../assets/credit card/icici/ICICI Sapphiro.jpg';
import i28 from '../assets/credit card/icici/ICICI Times Black.png';
import i29 from '../assets/credit card/icici/MakeMyTrip ICICI Signature.png';
import i30 from '../assets/credit card/icici/rubyx.png';
import i31 from '../assets/credit card/sbi/cashback-sbi-card.png';
import i32 from '../assets/credit card/sbi/Club Vistara SBI.jpg';
import i33 from '../assets/credit card/sbi/SBI Aurum.png';
import i34 from '../assets/credit card/sbi/SBI BPCL Octane.jpg';
import i35 from '../assets/credit card/sbi/SBI Card Miles Elite.png';
import i36 from '../assets/credit card/sbi/SBI Card PRIME.jpg';
import i37 from '../assets/credit card/sbi/SBI PhonePe Select Black.jpg';
import i38 from '../assets/credit card/sbi/SBI SimplyClick.png';
import i39 from '../assets/credit card/sbi/SBI SimplySAVE.png';
import i40 from '../assets/debit card/axis/Axis Burgundy Debit Card.jpg';
import i41 from '../assets/debit card/axis/Axis Delight Debit Card.jpg';
import i42 from '../assets/debit card/axis/Axis Liberty Debit Card.png';
import i43 from '../assets/debit card/axis/Axis Online Rewards.jpg';
import i44 from '../assets/debit card/axis/Axis Prestige Debit Card.png';
import i45 from '../assets/debit card/axis/Axis Priority Debit Card.jpg';
import i46 from '../assets/debit card/axis/Axis Rewards Debit Card.png';
import i47 from '../assets/debit card/hdfc/HDFC EasyShop Imperia Premium.jpg';
import i48 from '../assets/debit card/hdfc/HDFC EasyShop NRO  NRE.jpg';
import i49 from '../assets/debit card/hdfc/HDFC EasyShop Preferred Business.png';
import i50 from '../assets/debit card/hdfc/HDFC Millennia Debit Card.jpg';
import i51 from '../assets/debit card/hdfc/HDFC Rupay Premium.png';
import i52 from '../assets/debit card/icici/ICICI Carbon (Eco-friendly).png';
import i53 from '../assets/debit card/icici/ICICI Coral Debit Card.jpg';
import i54 from '../assets/debit card/icici/ICICI Expressions (Personalized).png';
import i55 from '../assets/debit card/icici/ICICI Rubiyx Debit Card.jpg';
import i56 from '../assets/debit card/icici/ICICI Sapphiro Debit Card.jpg';
import i57 from '../assets/debit card/icici/ICICI Smart Shopper SilverGold.jpg';
import i58 from '../assets/debit card/icici/ICICI Wealth Select Debit Card.jpg';
import i59 from '../assets/debit card/sbi/SBI Classic Debit Card.png';
import i60 from '../assets/debit card/sbi/SBI Global International.png';
import i61 from '../assets/debit card/sbi/SBI Gold International.jpg';
import i62 from '../assets/debit card/sbi/SBI IOCL Co-Branded.png';
import i63 from '../assets/debit card/sbi/SBI Mumbai Metro Combo.jpg';
import i64 from '../assets/debit card/sbi/SBI platinum international.jpg';
import i65 from '../assets/debit card/sbi/SBI RuPay Select.png';

const CARDS_DATA = [
  // Credit Cards - Amex
  { id: 1, name: "Amex Centurion (Black Card)", category: "credit card", company: "amex", image: i1 },
  { id: 2, name: "Amex Gold", category: "credit card", company: "amex", image: i2 },
  { id: 3, name: "Amex Platinum Travel", category: "credit card", company: "amex", image: i3 },
  { id: 4, name: "Amex Platinum", category: "credit card", company: "amex", image: i4 },
  { id: 5, name: "Amex Reserve", category: "credit card", company: "amex", image: i5 },

  // Credit Cards - Axis
  { id: 6, name: "Airtel Axis Bank", category: "credit card", company: "axis", image: i6 },
  { id: 7, name: "Axis Ace Signature", category: "credit card", company: "axis", image: i7 },
  { id: 8, name: "Axis Atlas", category: "credit card", company: "axis", image: i8 },
  { id: 9, name: "Axis Cashback", category: "credit card", company: "axis", image: i9 },
  { id: 10, name: "Axis Magnus Burgundy", category: "credit card", company: "axis", image: i10 },

  // Credit Cards - HDFC
  { id: 11, name: "HDFC Diners BizBlack", category: "credit card", company: "hdfc", image: i11 },
  { id: 12, name: "HDFC Diners Club Black Metal", category: "credit card", company: "hdfc", image: i12 },
  { id: 13, name: "HDFC Freedom", category: "credit card", company: "hdfc", image: i13 },
  { id: 14, name: "HDFC Infinia Metal", category: "credit card", company: "hdfc", image: i14 },
  { id: 15, name: "HDFC Millennia", category: "credit card", company: "hdfc", image: i15 },
  { id: 16, name: "HDFC MoneyBack+", category: "credit card", company: "hdfc", image: i16 },
  { id: 17, name: "HDFC Regalia Gold", category: "credit card", company: "hdfc", image: i17 },
  { id: 18, name: "HDFC Swiggy Black", category: "credit card", company: "hdfc", image: i18 },
  { id: 19, name: "HDFC Tata Neu Infinity RuPay", category: "credit card", company: "hdfc", image: i19 },

  // Credit Cards - HSBC
  { id: 20, name: "HSBC Live+", category: "credit card", company: "hsbc", image: i20 },
  { id: 21, name: "HSBC Premier", category: "credit card", company: "hsbc", image: i21 },
  { id: 22, name: "HSBC TravelOne", category: "credit card", company: "hsbc", image: i22 },

  // Credit Cards - ICICI
  { id: 23, name: "Amazon Pay ICICI", category: "credit card", company: "icici", image: i23 },
  { id: 24, name: "ICICI Coral", category: "credit card", company: "icici", image: i24 },
  { id: 25, name: "ICICI Emeralde Private Metal", category: "credit card", company: "icici", image: i25 },
  { id: 26, name: "ICICI Platinum Chip", category: "credit card", company: "icici", image: i26 },
  { id: 27, name: "ICICI Sapphiro", category: "credit card", company: "icici", image: i27 },
  { id: 28, name: "ICICI Times Black", category: "credit card", company: "icici", image: i28 },
  { id: 29, name: "MakeMyTrip ICICI Signature", category: "credit card", company: "icici", image: i29 },
  { id: 30, name: "ICICI Rubyx", category: "credit card", company: "icici", image: i30 },

  // Credit Cards - SBI
  { id: 31, name: "Cashback SBI Card", category: "credit card", company: "sbi", image: i31 },
  { id: 32, name: "Club Vistara SBI", category: "credit card", company: "sbi", image: i32 },
  { id: 33, name: "SBI Aurum", category: "credit card", company: "sbi", image: i33 },
  { id: 34, name: "SBI BPCL Octane", category: "credit card", company: "sbi", image: i34 },
  { id: 35, name: "SBI Card Miles Elite", category: "credit card", company: "sbi", image: i35 },
  { id: 36, name: "SBI Card PRIME", category: "credit card", company: "sbi", image: i36 },
  { id: 37, name: "SBI PhonePe Select Black", category: "credit card", company: "sbi", image: i37 },
  { id: 38, name: "SBI SimplyClick", category: "credit card", company: "sbi", image: i38 },
  { id: 39, name: "SBI SimplySAVE", category: "credit card", company: "sbi", image: i39 },

  // Debit Cards - Axis
  { id: 40, name: "Axis Burgundy Debit Card", category: "debit card", company: "axis", image: i40 },
  { id: 41, name: "Axis Delight Debit Card", category: "debit card", company: "axis", image: i41 },
  { id: 42, name: "Axis Liberty Debit Card", category: "debit card", company: "axis", image: i42 },
  { id: 43, name: "Axis Online Rewards", category: "debit card", company: "axis", image: i43 },
  { id: 44, name: "Axis Prestige Debit Card", category: "debit card", company: "axis", image: i44 },
  { id: 45, name: "Axis Priority Debit Card", category: "debit card", company: "axis", image: i45 },
  { id: 46, name: "Axis Rewards Debit Card", category: "debit card", company: "axis", image: i46 },

  // Debit Cards - HDFC
  { id: 47, name: "HDFC EasyShop Imperia Premium", category: "debit card", company: "hdfc", image: i47 },
  { id: 48, name: "HDFC EasyShop NRO NRE", category: "debit card", company: "hdfc", image: i48 },
  { id: 49, name: "HDFC EasyShop Preferred Business", category: "debit card", company: "hdfc", image: i49 },
  { id: 50, name: "HDFC Millennia Debit Card", category: "debit card", company: "hdfc", image: i50 },
  { id: 51, name: "HDFC Rupay Premium", category: "debit card", company: "hdfc", image: i51 },

  // Debit Cards - ICICI
  { id: 52, name: "ICICI Carbon (Eco-friendly)", category: "debit card", company: "icici", image: i52 },
  { id: 53, name: "ICICI Coral Debit Card", category: "debit card", company: "icici", image: i53 },
  { id: 54, name: "ICICI Expressions (Personalized)", category: "debit card", company: "icici", image: i54 },
  { id: 55, name: "ICICI Rubiyx Debit Card", category: "debit card", company: "icici", image: i55 },
  { id: 56, name: "ICICI Sapphiro Debit Card", category: "debit card", company: "icici", image: i56 },
  { id: 57, name: "ICICI Smart Shopper SilverGold", category: "debit card", company: "icici", image: i57 },
  { id: 58, name: "ICICI Wealth Select Debit Card", category: "debit card", company: "icici", image: i58 },

  // Debit Cards - SBI
  { id: 59, name: "SBI Classic Debit Card", category: "debit card", company: "sbi", image: i59 },
  { id: 60, name: "SBI Global International", category: "debit card", company: "sbi", image: i60 },
  { id: 61, name: "SBI Gold International", category: "debit card", company: "sbi", image: i61 },
  { id: 62, name: "SBI IOCL Co-Branded", category: "debit card", company: "sbi", image: i62 },
  { id: 63, name: "SBI Mumbai Metro Combo", category: "debit card", company: "sbi", image: i63 },
  { id: 64, name: "SBI Platinum International", category: "debit card", company: "sbi", image: i64 },
  { id: 65, name: "SBI RuPay Select", category: "debit card", company: "sbi", image: i65 },
];

const AllCards = ({ setRoute, category = "credit card", company = "hdfc", setCard }) => {
  const [activeCard, setActiveCard] = useState(null);
  const itemRefs = useRef([]);
  const scrollRef = useRef(null);

   // Filter cards based on passed category and company
  const filteredCards = useMemo(
    () =>
      CARDS_DATA.filter(
        (card) =>
          category &&
          company &&
          card.category.toLowerCase().includes(category.toLowerCase()) &&
          card.company.toLowerCase() === company.toLowerCase()
      ),
    [category, company]
  );

  // Set default active card on list change
  useEffect(() => {
    if (filteredCards.length > 0) {
      setActiveCard(filteredCards[0]);
    } else {
      setActiveCard(null);
    }
  }, [category, company]);

  // Track scrolling element to update active highlight and left image
  useEffect(() => {
        itemRefs.current = itemRefs.current.slice(0, filteredCards.length);
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const cardId = Number(entry.target.getAttribute("data-id"));
                const foundCard = filteredCards.find((c) => c.id === cardId);
                if (foundCard) {
                setActiveCard(foundCard);
                }
            }
            });
        },
        { root: scrollRef.current, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
        );

        itemRefs.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, [filteredCards]);

  return (
    <div style={{ display: "flex", color: "#fff", height: "100vh", overflow: "hidden" }}>
      {/* Left Container: Active Card Image Display */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
        <button
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
            onClick={()=>setRoute('company')}
            >
            ← Back to selection
            </button>
        {activeCard ? (
          <img
            src={activeCard.image}
            alt={activeCard.name}
            style={{ maxWidth: "80%", maxHeight: "80%", objectFit: "contain", borderRadius: "12px", transition: "all 0.3s ease" }}
          />
        ) : (
          <p>No cards available for this selection.</p>
        )}
      </div>

      {/* Right Container: Scrollable Titles */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "50vh 40px", display: "flex", flexDirection: "column", gap: "24px" }}>        {filteredCards.map((card, index) => {
          const isActive = activeCard?.id === card.id;
          return (
            <div
              key={card.id}
              ref={(el) => (itemRefs.current[index] = el)}
              data-id={card.id}
              onClick={() => {
                if (setCard) setCard(card);
                if (setRoute) setRoute("cardDetail");
              }}
              style={{
                cursor: "pointer",
                fontSize: "2rem",
                fontWeight: "900",
                textTransform: "uppercase",
                transition: "color 0.3s ease, transform 0.3s ease",
                color: isActive ? "#A78BFA" : "#ffffff",
                opacity: isActive ? 1 : 0.4,
                transform: isActive ? "scale(1.05)" : "scale(1)",
              }}
            >
              {card.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCards;