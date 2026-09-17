import React from "react";

const CARD_BENEFITS = {
  "HDFC Regalia Gold": {
    left: "Spend ₹1 lakh within the first 90 days of card issuance to get complimentary Swiggy One and MMT Black Gold memberships.",
    right: "Earn 5 Reward Points (RP) per ₹200 spent on general retail, daily expenses, utility bills, and insurance.",
  },"HDFC Diners BizBlack":{
    left:"Cross ₹50,000 in monthly spends to unlock 5X reward points (up to 16.6% value back) on business expenses, including Income Tax, GST, utilities, and software tools.",
    right:"Get unlimited complimentary lounge access worldwide for both primary and add-on cardholders, alongside 6 complimentary golf games per quarter."
  },"Amex Centurion (Black Card)":{
    left: "A legendary, round-the-clock service team capable of managing last-minute requests, sold-out event ticketing, and emergency travel re-routing",
    right: " Up to $1,000 annually in statement credits ($250 per quarter) for shopping at Saks."
  },"Amex Gold":{
    left:" Earn 1,000 bonus Membership Rewards (MR) points every calendar month simply by completing 6 transactions of ₹1,000 or more",
    right:"Earn 5X reward points (10 MR points per ₹100 instead of the base 2 points) by purchasing brand gift vouchers (like Amazon, Flipkart, or Myntra) through the Amex Gyftr portal."
  },"Amex Platinum Travel":{
    left:"Earn 40,000 bonus Membership Rewards (MR) points plus a ₹10,000 Taj Stay Voucher upon hitting annual spends of ₹4 lakh.",
    right:"Redemptions yield high value—the milestone rewards can be converted into ₹34,000 worth of Taj Hotel stays or transferred 1:1 to Marriott Bonvoy points."
  },"Amex Platinum":{
    left:"Gain unlimited, complimentary entry for you and up to two guests to the Amex Global Lounge Collection, including Centurion Lounges, Priority Pass lounges, and Delta Sky Clubs.",
    right:"Get immediate Gold Elite status with Marriott Bonvoy and Hilton Honors, plus daily breakfast, room upgrades, and a $100 property credit on bookings via Amex Fine Hotels + Resorts."
  },"Amex Reserve":{
    left:" Get complimentary access to premium lifestyle programs, including Accor Plus Explorer (up to 30% off hotel dining across APAC), Taj Epicure, and EazyDiner Prime",
    right:"Earn a ₹1,000 gift voucher (redeemable at Flipkart, BookMyShow, or MakeMyTrip) every calendar month you hit a spend of ₹50,000."
  },"HSBC Live+":{
    left:"Earn 10% cashback on dining, food delivery, groceries, shopping, and utility bills (capped at ₹1,200 per month).",
    right:"Get 2 complimentary domestic lounge visits and 1 international lounge visit annually, plus a low 1.99% forex markup fee."
  },"Cashback SBI Card":{
    left:" Earn 5% cashback on all online transactions across virtually any merchant or website (capped at ₹2,000 per statement cycle).",
    right:"No manual points tracking or redemption fees—your monthly cashback is automatically credited directly to your credit card bill within two working days of statement generation"
  },"Airtel Axis Bank":{
    left:"Get 25% cashback on Airtel Mobile, DTH, and Broadband bill payments via the Airtel Thanks app",
    right:" Earn 10% cashback on utility bills (via Airtel Thanks) and 10% value-back on preferred partners like Zomato, Blinkit, and District Movies"
  },"Amazon Pay ICICI":{
    left:"The card has zero joining or annual fees forever, and there is no maximum upper limit on the total cashback you can earn in a month.",
    right:"Amazon Prime members get a flat 5% cashback on all Amazon India purchases (non-Prime members get 3%), which automatically credits to your Amazon Pay wallet as real money every month."
  },"HDFC EasyShop Imperia Premium":{
    left:"Features a daily ATM cash withdrawal limit of ₹1 lakh and a high daily shopping/merchant spend limit of ₹5 lakh",
    right:"Offers 2 complimentary domestic airport lounge visits per quarter (subject to a minimum spend of ₹10,000 in the previous quarter) alongside complimentary golf privileges (4 green fees and 12 lessons per calendar year)"
  },"SBI Classic Debit Card":{
    left:"Allows up to ₹20,000 to ₹40,000 for daily ATM cash withdrawals and up to ₹50,000 for online or point-of-sale (PoS) shopping.",
    right:"Comes with zero joining fees and a minimal annual maintenance charge of ₹200 + GST"
  },"ICICI Carbon (Eco-friendly)":{
    left:" Unlike traditional PVC plastic cards, the Carbon card is constructed from renewable, plant-based materials (PLA) and biodegradable elements that leave a significantly lower carbon footprint and decompose cleanly.",
    right:" It features a unique built-in LCD screen and a 12-button touch keypad on the physical card itself, allowing you to enter a PIN to generate real-time, offline One-Time Passwords (OTPs) for highly secure online shopping"
  },"Axis Burgundy Debit Card":{
    left:" Offers a substantial daily ATM cash withdrawal limit of ₹3 lakh alongside an expansive daily online/merchant purchase limit of ₹8 lakh",
    right:" Access a generous Buy One, Get One (BOGO) offer on BookMyShow for up to 4 complimentary movie tickets (capped at ₹500/ticket) and 4 non-movie event tickets (capped at ₹1,000/ticket) every month."
  }
};

const Benefits = ({ cardName, position }) => {
  const cardData = CARD_BENEFITS[cardName];
  const benefitText = cardData ? cardData[position] : null;
  return (
    <h1 className="mt-3 text-sm md:text-xl lg:text-2xl font-bold leading-tight">
      {benefitText}
    </h1>
  );
};

export default Benefits;