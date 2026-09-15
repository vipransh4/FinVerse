import React, { useState } from "react";

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

const ALL_CARDS = [
  { id: 1, name: "Amex Centurion (Black Card)", image: i1 },
  { id: 2, name: "Amex Gold", image: i2 },
  { id: 3, name: "Amex Platinum Travel", image: i3 },
  { id: 4, name: "Amex Platinum", image: i4 },
  { id: 5, name: "Amex Reserve", image: i5 },
  { id: 6, name: "Airtel Axis Bank", image: i6 },
  { id: 7, name: "Axis Ace Signature", image: i7 },
  { id: 8, name: "Axis Atlas", image: i8 },
  { id: 9, name: "Axis Cashback", image: i9 },
  { id: 10, name: "Axis Magnus Burgundy", image: i10 },
  { id: 11, name: "HDFC Diners BizBlack", image: i11 },
  { id: 12, name: "HDFC Diners Club Black Metal", image: i12 },
  { id: 13, name: "HDFC Freedom", image: i13 },
  { id: 14, name: "HDFC Infinia Metal", image: i14 },
  { id: 15, name: "HDFC Millennia", image: i15 },
  { id: 16, name: "HDFC MoneyBack+", image: i16 },
  { id: 17, name: "HDFC Regalia Gold", image: i17 },
  { id: 18, name: "HDFC Swiggy Black", image: i18 },
  { id: 19, name: "HDFC Tata Neu Infinity RuPay", image: i19 },
  { id: 20, name: "HSBC Live+", image: i20 },
  { id: 21, name: "HSBC Premier", image: i21 },
  { id: 22, name: "HSBC TravelOne", image: i22 },
  { id: 23, name: "Amazon Pay ICICI", image: i23 },
  { id: 24, name: "ICICI Coral", image: i24 },
  { id: 25, name: "ICICI Emeralde Private Metal", image: i25 },
  { id: 26, name: "ICICI Platinum Chip", image: i26 },
  { id: 27, name: "ICICI Sapphiro", image: i27 },
  { id: 28, name: "ICICI Times Black", image: i28 },
  { id: 29, name: "MakeMyTrip ICICI Signature", image: i29 },
  { id: 30, name: "ICICI Rubyx", image: i30 },
  { id: 31, name: "Cashback SBI Card", image: i31 },
  { id: 32, name: "Club Vistara SBI", image: i32 },
  { id: 33, name: "SBI Aurum", image: i33 },
  { id: 34, name: "SBI BPCL Octane", image: i34 },
  { id: 35, name: "SBI Card Miles Elite", image: i35 },
  { id: 36, name: "SBI Card PRIME", image: i36 },
  { id: 37, name: "SBI PhonePe Select Black", image: i37 },
  { id: 38, name: "SBI SimplyClick", image: i38 },
  { id: 39, name: "SBI SimplySAVE", image: i39 },
  { id: 40, name: "Axis Burgundy Debit Card", image: i40 },
  { id: 41, name: "Axis Delight Debit Card", image: i41 },
  { id: 42, name: "Axis Liberty Debit Card", image: i42 },
  { id: 43, name: "Axis Online Rewards", image: i43 },
  { id: 44, name: "Axis Prestige Debit Card", image: i44 },
  { id: 45, name: "Axis Priority Debit Card", image: i45 },
  { id: 46, name: "Axis Rewards Debit Card", image: i46 },
  { id: 47, name: "HDFC EasyShop Imperia Premium", image: i47 },
  { id: 48, name: "HDFC EasyShop NRO NRE", image: i48 },
  { id: 49, name: "HDFC EasyShop Preferred Business", image: i49 },
  { id: 50, name: "HDFC Millennia Debit Card", image: i50 },
  { id: 51, name: "HDFC Rupay Premium", image: i51 },
  { id: 52, name: "ICICI Carbon (Eco-friendly)", image: i52 },
  { id: 53, name: "ICICI Coral Debit Card", image: i53 },
  { id: 54, name: "ICICI Expressions (Personalized)", image: i54 },
  { id: 55, name: "ICICI Rubiyx Debit Card", image: i55 },
  { id: 56, name: "ICICI Sapphiro Debit Card", image: i56 },
  { id: 57, name: "ICICI Smart Shopper SilverGold", image: i57 },
  { id: 58, name: "ICICI Wealth Select Debit Card", image: i58 },
  { id: 59, name: "SBI Classic Debit Card", image: i59 },
  { id: 60, name: "SBI Global International", image: i60 },
  { id: 61, name: "SBI Gold International", image: i61 },
  { id: 62, name: "SBI IOCL Co-Branded", image: i62 },
  { id: 63, name: "SBI Mumbai Metro Combo", image: i63 },
  { id: 64, name: "SBI Platinum International", image: i64 },
  { id: 65, name: "SBI RuPay Select", image: i65 },
];

const Search = ({ setCardName, setRoute }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter cards by matching name against input string
  const filteredCards = ALL_CARDS.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6 flex flex-col items-center">
      {/* Search Bar Container */}
      <div className="w-full max-w-xl my-8">
        <input
          type="text"
          placeholder="Search card by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 text-lg rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-white shadow-lg transition"
        />
      </div>

            {/* Responsive Image Grid */}
        <div className="w-full max-w-6xl grid content-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 grow">
        {ALL_CARDS.map((card) => {
          const isMatch = card.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
          return (
            

            <div
              key={card.id}
              onClick={() => {
                if (!isMatch) return;
                if (setCard) setCard(card);
                if (setRoute) setRoute("cardDetail");
              }}
              className={`bg-neutral-800 p-4 rounded-xl flex flex-col items-center justify-between transition-all duration-300 shadow-md border border-transparent ${
                isMatch
                  ? "hover:scale-115 cursor-pointer hover:border-white hover:shadow-lg"
                  : "hidden"
              }`}
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-44 object-contain mb-3"
onClick={() => {
                if (setCardName) setCardName(card.name);
                if (setRoute) setRoute("details");
              }}               />
              <p className="text-center font-semibold text-sm text-neutral-200">
                {card.name}
              </p>
            </div>
          );
        })}
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
            onClick={()=>setRoute('hero')}
            >
            ← Back to home
            </button>
        {filteredCards.length === 0 && (
          <div className="col-span-full text-center text-neutral-400 py-12">
            No cards found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;