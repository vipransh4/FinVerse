import React, { useState, useEffect, useRef, useMemo } from "react";
import CardInfo from "./CardInfo";


const CompanyCards = ({ setRoute, category = "credit card", company = "hdfc", setCardName }) => {
  const [activeCard, setActiveCard] = useState(null);
  const itemRefs = useRef([]);
  const scrollRef = useRef(null);

   // Filter cards based on passed category and company
  const filteredCards = useMemo(
    () =>
      CardInfo.filter(
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
            loading="lazy"
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
// Replace short-circuit syntax with proper function call sequence
              onClick={() => {
                if (setCardName) setCardName(card.name);
                if (setRoute) setRoute("details");
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

export default CompanyCards;