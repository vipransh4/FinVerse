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

const CardInfo =
   [// Credit Cards - Amex
    { id: 1, name: "Amex Centurion (Black Card)", category: "credit card", company: "amex", image: i1, 
      tags: ["Travel", "Lifestyle"],
      desc1: [
        "The American Express Centurion Card (famously known as the 'Amex Black Card') is the world's most prestigious invitation-only charge card, exclusively offered to ultra-high-net-worth individuals. Crafted from anodized titanium, it represents the absolute pinnacle of personalized global concierge service, luxury travel, and unconstrained purchasing power.",
        "Cardholders receive an assigned 24/7 Personal Centurion Relationship Manager, highest-tier elite status across major global hotel chains and airlines, unlimited worldwide airport lounge access with guest privileges, and exclusive invitations to private high-net-worth events."
      ],
      charges: [
        {
          "Joining Fee": "₹7,00,000 + GST",
          "Renewal Fee": "₹2,75,000 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fee waiver at eligible petrol stations across India",
          "Cash Advance Charges": "2.5% of the withdrawn amount or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Dedicated Centurion Relationship Manager",
          benifit: "Assigned a dedicated 24/7 personal executive capable of handling bespoke travel itineraries, high-end reservations, luxury shopping requests, and emergency arrangements worldwide."
        },
        {
          title: "Global Hotel & Airline Elite Status",
          benifit: "Enjoy complimentary top-tier status across luxury partner programs including Marriott Bonvoy (Gold/Platinum), Hilton Honors (Diamond), Radisson Rewards, and IHG One Rewards, alongside International Airline Programme discounts."
        },
        {
          title: "Unlimited Airport Lounge Access",
          benifit: "Access 1,550+ airport lounges globally with unlimited guest privileges across Centurion Lounges, Priority Pass, Delta Sky Club, and partner lounges."
        },
        {
          title: "Non-Expiring Membership Rewards",
          benifit: "Earn 6 Membership Rewards Points for every ₹200 spent across all eligible categories including fuel, utilities, and insurance with zero point expiration."
        }
      ],
      pros: [
        "Offers unmatched luxury privileges, an assigned personal concierge, top-tier global hotel status, and infinite purchasing flexibility without pre-set spending limits."
      ],
      cons: [
        "Strictly invitation-only with an exceptionally high joining fee of ₹7,00,000 + GST and an annual fee of ₹2,75,000 + GST.",
        "Carries a standard foreign currency markup of 3.50% which is higher than other super-premium cards."
      ],
      desc2: [
        "The Centurion Card is a charge card with no pre-set spending limit, requiring the full monthly statement balance to be paid every billing cycle.",
        "Membership is strictly by private invitation from American Express based on consistent multi-crore annual spending profile and banking relationships.",
        "Includes complimentary primary and supplementary Centurion titanium cards for eligible family members with full benefit access.",
        "Provides comprehensive global travel insurance, ticket cancellation protection, emergency medical coverage, and luxury retail purchase protections."
      ],
      link: "https://www.americanexpress.com/icm/centurion/"
    },
    { id: 2, name: "Amex Gold", category: "credit card", company: "amex", image: i2, 
      tags: ["Travel", "Lifestyle"],
      desc1: [
        "The American Express Gold Card (commonly known as the Amex Gold Charge Card) is an iconic entry-level charge card designed for users seeking high reward returns on low, deliberate monthly spends. As a charge card, it offers flexibility with no pre-set spending limit, provided the outstanding statement balance is settled in full each month.",
        "The card stands out primarily for its monthly transaction milestone and the 18K/24K Gold Collection redemption program. By completing a few specific threshold transactions monthly, cardholders can extract an extraordinary effective reward rate on minor annual spends, converting points into luxury stay vouchers or air miles."
      ],
      charges: [
        {
          "Joining Fee": "₹1,000 + GST",
          "Renewal Fee": "₹4,500 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "0% fee on transactions up to ₹5,000 at HPCL stations; 1% fee above ₹5,000",
          "Cash Advance Charges": "3.5% of the withdrawn amount or ₹250, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Welcome Bonus & Monthly Milestones",
          benifit: "Earn 4,000 bonus Membership Rewards Points upon paying the fee and spending ₹10,000 within 90 days. Get 1,000 bonus Membership Rewards Points every month by completing 6 transactions of ₹1,000 or more."
        },
        {
          title: "Exclusive Gold Collection Redemptions",
          benifit: "Access the curated 18 Karat and 24 Karat Gold Collections to redeem accumulated points for high-value vouchers from Taj Hotels, Amazon, Flipkart, Shoppers Stop, and Croma at optimized conversion rates."
        },
        {
          title: "Reward Multiplier & Travel Transfers",
          benifit: "Earn 1 Membership Rewards Point for every ₹50 spent on base transactions, and up to 5X accelerated points on online shopping via the Amex Reward Multiplier portal. Non-expiring points can be transferred to partner airline and hotel loyalty programs."
        },
        {
          title: "Hotel & Dining Privileges",
          benifit: "Enjoy up to 20% off dining bills at select partner restaurants along with special hotel credits and room upgrades when booking eligible stays through the American Express travel program."
        }
      ],
      pros: [
        "Delivers an exceptional reward yield (up to 10%-13%) on low annual spends through the 1,000 monthly bonus points milestone combined with 18K/24K Gold Collection redemptions."
      ],
      cons: [
        "Does not offer any complimentary domestic or international airport lounge access benefits.",
        "Carries a ₹4,500 + GST renewal fee with no official spend-based annual fee waiver criteria."
      ],
      desc2: [
        "Membership Rewards Points earned on the card do not expire as long as the account remains open and in good standing.",
        "Accumulated points can be transferred 1:1 to major travel loyalty programs including Marriott Bonvoy, Taj InnerCircle, and Virgin Atlantic Flying Club.",
        "Exclusions apply for earning points on transactions involving fuel, wallet loads, cash advances, and EMI conversions.",
        "As a charge card, full monthly repayment is required, aiding discipline while building dynamic spending limits based on user profile and history."
      ],
      link: "https://www.americanexpress.com/in/credit-cards/gold-card/"
    },
    { id: 3, name: "Amex Platinum Travel", category: "credit card", company: "amex", image: i3, 
      tags: ["Travel", "Air Miles"],
      desc1: [
        "The American Express Platinum Travel Credit Card is one of India's most popular milestone-based travel cards, explicitly engineered to offer high reward yields through annual spending thresholds. It is ideal for domestic travelers looking to convert regular expenses into air miles or luxury stay vouchers.",
        "The card shines through its tier-based milestone structure, providing heavy bonus Membership Rewards Points and Taj Experiences e-Gift Cards upon reaching annual spending targets, along with complimentary domestic airport lounge access."
      ],
      charges: [
        {
          "Joining Fee": "₹3,500 + GST",
          "Renewal Fee": "₹5,000 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Interest Rates": "3.35% to 3.50% per month (40.2% to 42% per annum)",
          "Fuel Surcharge Waiver": "0% convenience fee at HPCL petrol pumps for fuel transactions under ₹25,000",
          "Cash Advance Charges": "3.5% of the withdrawn amount or ₹250, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Welcome Milestone Bonus",
          benifit: "Receive 10,000 bonus Membership Rewards Points upon paying the annual joining fee and spending ₹15,000 within the first 90 days of card membership."
        },
        {
          title: "Tiered Spend Milestone Rewards",
          benifit: "Earn 15,000 bonus Membership Rewards Points on spending ₹1.9 Lakhs, an additional 25,000 bonus points on reaching ₹4 Lakhs spend, and a ₹20,000 Taj Experiences e-Gift Card upon reaching ₹7 Lakhs in annual spends."
        },
        {
          title: "Domestic Airport Lounge Access",
          benifit: "Enjoy complimentary domestic airport lounge visits across major Indian airports (subject to spending eligibility criteria per calendar quarter)."
        },
        {
          title: "Base Rewards & Flexible Redemptions",
          benifit: "Earn 1 Membership Rewards Point for every ₹50 spent on regular transactions. Non-expiring points can be transferred 1:1 to loyalty programs like Marriott Bonvoy or redeemed for travel vouchers via the Platinum Travel Collection."
        }
      ],
      pros: [
        "Delivers an outstanding overall reward rate of up to 7% to 8% when spending milestone targets (₹4 Lakhs to ₹7 Lakhs) are achieved and points are transferred to hotel or air partners."
      ],
      cons: [
        "Base reward rate drops significantly on spends beyond the annual ₹7 Lakh milestone target.",
        "Excludes key categories like fuel, utility bills, insurance, and EMI conversions from earning Membership Rewards Points."
      ],
      desc2: [
        "Membership Rewards Points earned on the card do not expire as long as the account remains active and in good standing.",
        "Bonus Membership Rewards Points earned through milestone achievements can be redeemed directly for travel vouchers or transferred to airline/hotel partners.",
        "Complimentary Priority Pass membership is provided, though individual international lounge visit charges apply.",
        "Includes basic travel insurance coverage for lost baggage, flight delays, and personal accident insurance during international travel."
      ],
      link: "https://www.americanexpress.com/in/credit-cards/platinum-travel-credit-card/"
    },
    { id: 4, name: "Amex Platinum", category: "credit card", company: "amex", image: i4, 
      tags: ["Travel", "Lifestyle"],
      desc1: [
        "The American Express Platinum Card is an ultra-premium charge card tailored for high-net-worth individuals, frequent international travelers, and luxury lifestyle enthusiasts. Unlike standard credit cards, it is a charge card with no pre-set spending limit, offering unparalleled access to bespoke concierge services, elite hotel status, and exclusive global travel benefits.",
        "Cardholders gain entry to the prestigious American Express Global Lounge Collection, elite membership status across top luxury hotel chains, multi-thousand rupee welcome benefits, non-expiring Membership Rewards Points, and premium dining privileges worldwide."
      ],
      charges: [
        {
          "Joining Fee": "₹60,000 + GST",
          "Renewal Fee": "₹60,000 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% convenience fee waiver at select fuel stations",
          "Cash Advance Charges": "3.5% of the withdrawn amount or ₹250, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Luxury Welcome Vouchers",
          benifit: "Receive high-value welcome vouchers worth up to ₹45,000 to ₹60,000 (such as Taj Hotel vouchers or Postcard Hotel vouchers) upon fee realization and meeting initial spending thresholds."
        },
        {
          title: "Global Lounge Access & Hotel Status",
          benifit: "Enjoy unlimited complimentary access to over 1,400 airport lounges globally through the American Express Global Lounge Collection, including Centurion Lounges, Priority Pass, and Delta Sky Clubs. Gain instant elite tier status with Marriott Bonvoy (Gold Elite), Hilton Honors (Gold), and Radisson Rewards (Premium)."
        },
        {
          title: "Fine Hotels + Resorts & Fine Dining Privileges",
          benifit: "Access exclusive benefits at over 1,500 luxury hotels via Fine Hotels + Resorts, including room upgrades, complimentary breakfast, guaranteed 4 PM late checkout, and a $100 property credit. Enjoy up to 20% off dining bills at premium partner restaurants."
        },
        {
          title: "Non-Expiring Reward Points & Flexible Transfers",
          benifit: "Earn 1 Membership Rewards Point per ₹50 spent on regular transactions and 3X to 5X accelerated points on international spends and travel bookings via the Reward Multiplier portal. Points never expire and can be transferred 1:1 to leading airline and hotel partners."
        }
      ],
      pros: [
       "Delivers unrivaled global lounge access, elite hotel status upgrades, high-value Taj stay vouchers, and 24x7 dedicated personal Platinum Concierge services."
      ],
      cons: [
        "Carries a steep joining and renewal fee of ₹60,000 + GST with no spend-based fee waiver criteria available.",
        "Higher foreign currency markup rate of 3.50% compared to competing super-premium cards that offer 2% or lower."
      ],
      desc2: [
        "As a charge card, the balance must be settled in full each month, providing enhanced purchasing power without standard credit limits.",
        "Membership Rewards Points can be transferred to major travel loyalty programs including Marriott Bonvoy, Taj InnerCircle, Singapore Airlines KrisFlyer, and Qatar Airways Privilege Club.",
        "Includes comprehensive travel insurance coverage for flight delays, lost baggage, emergency medical assistance abroad, and trip cancellations.",
        "Primary cardholders can issue up to 4 complimentary supplementary Platinum Cards for eligible family members with shared lounge access privileges."
      ],
      link: "https://www.americanexpress.com/in/credit-cards/platinum-card/"
    },
    { id: 5, name: "Amex Reserve", category: "credit card", company: "amex", image: i5, 
      tags: ["Travel", "Lifestyle"],
      desc1: [
        "The American Express Platinum Reserve Credit Card is a premium lifestyle card positioned between the Amex Gold/MRCC tier and the ultra-luxury Amex Platinum Charge Card. It is targeted at affluent individuals seeking lifestyle privileges, high-end hotel memberships, and milestone vouchers rather than pure points acceleration.",
        "Cardholders get complimentary luxury hotel memberships including Taj Epicure and Accor Plus Explorer, monthly voucher benefits, golf privileges, and access to dedicated 24x7 Platinum Concierge services."
      ],
      charges: [
        {
          "Joining Fee": "₹10,000 + GST",
          "Renewal Fee": "₹10,000 + GST",
          "Spend-Based Waiver": "Annual fee waived on spending ₹10 lakh or more in the preceding card membership year",
          "Forex Markup": "3.50% of the transaction amount",
          "Interest Rates": "3.50% to 3.99% per month (42% to 47.88% per annum)",
          "Fuel Surcharge Waiver": "0% convenience fee at HPCL petrol pumps for fuel transactions under ₹5,000; 1% fee applies above ₹5,000",
          "Cash Advance Charges": "3.5% of the withdrawn amount or ₹250, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Welcome Bonus & Hotel Memberships",
          benifit: "Earn 11,000 bonus Membership Rewards Points upon fee payment and spending ₹30,000 within 90 days. Enjoy complimentary luxury memberships including Taj Epicure Plus, Accor Plus Explorer, and EazyDiner Prime."
        },
        {
          title: "Monthly Milestone Vouchers",
          benifit: "Receive a complimentary voucher worth ₹1,000 (valid for Flipkart, BookMyShow, MakeMyTrip, or partner brands) upon reaching monthly spends of ₹50,000, unlocking up to ₹12,000 in annual milestone value."
        },
        {
          title: "Airport Lounge & Golf Privileges",
          benifit: "Enjoy 12 complimentary domestic airport lounge visits per year (max 3 per quarter) and 2 complimentary international lounge visits annually via Priority Pass. Get up to 2 complimentary golf rounds per month upon spending ₹50,000 in a month."
        },
        {
          title: "Reward Program & Concierge Services",
          benifit: "Earn 1 Membership Rewards Point per ₹50 spent on regular transactions, along with 24x7 dedicated Platinum Concierge support for dining, hotel, travel, and gift arrangements."
        }
      ],
      pros: [
        "Provides high-value hotel and dining memberships (Taj Epicure & Accor Plus) along with ₹12,000 in annual milestone vouchers for consistent ₹50,000 monthly spenders."
      ],
      cons: [
        "The base reward rate is low (1 MR point per ₹50 spent) compared to rival premium cards in its fee bracket like HDFC Infinia or ICICI Emeralde Private.",
        "International airport lounge access is limited to only 2 visits per year, and domestic Centurion lounge access is no longer available on this card."
      ],
      desc2: [
        "Membership Rewards Points earned on the card never expire and can be transferred to airline and hotel loyalty partners including Marriott Bonvoy and Taj.",
        "The monthly milestone of ₹1,000 requires explicit one-time enrollment before spend accumulation begins.",
        "The 3.50% foreign exchange markup and high ₹10 lakh fee waiver target make it less ideal for heavy international spenders.",
        "Exclusions apply for earning reward points on fuel, utility bills, insurance, and EMI conversions."
      ],
      link: ""
    },
  
    // Credit Cards - Axis
    { id: 6, name: "Airtel Axis Bank", category: "credit card", company: "axis", image: i6, 
      tags:['utility bills'],
      desc1:["The Airtel Axis Credit Card is a co-branded card offered by Axis Bank in partnership with the telecom services provider company Bharti Airtel. Targeted at individuals who mostly use Airtel Mobile, Broadband, WiFi, and DTH, it comes at an affordable annual fee of ₹500 + GST (~₹590). As a joining benefit, cardholders shall receive an Amazon voucher worth ₹250 on realization of charges, offsetting the amount paid.","The Airtel Axis Credit Card used to be one of the best cards for utility bill payments and Airtel recharges. But after the April 2026 devaluation, it has lost a lot of its value. The cashback rates are still the same, but now the actual cashback depends on how much you spend in the 1% category. So even if you are eligible for 25% cashback, you won’t get the full benefit unless you spend enough in other categories first.","This makes the card much less useful, especially for people who only use it for bills and recharges. On top of that, benefits like airport lounge access have also been removed, making the card less attractive overall."],
      charges:[{
        "Joining Fee":"₹500 + GST",
        "Renewal Fee":"₹500 + GST",
        "Spend-Based Waiver":"Annual Charges Waived on Spends of ₹2 Lakh",
        "Forex Markup":"3.5%",
        "Interest Rates":"3.75% Per Month (55.55% Per Annum)",
        "Fuel Surcharge Waiver":"1% fuel surcharge waiver on all transactions between Rs. 400 and Rs. 4,000.",
        "Cash Advance Charges":"Min of ₹500 Up to 2.5% of the Cash Withdrawn"
      }],
      Benefits:[
      {
        title:"Rewards Rate",
        benifit:"25% Cashback On Airtel Recharges (Capped At 2× Base Cashback In Same Statement Month). 10% Cashback On Utility Bills (Capped At Base Cashback In Same Statement Month). 10% Value Back On Zomato, Blinkit & District (Up To ₹200 Per Partner Per Month). 1% Cashback On All Other Spends",
      },
      {
        title:"Welcome Benefits",
        benifit:"Amazon Voucher Worth ₹250",
      },
      {
        title:"Reward Redemption",
        benifit:"Direct Cashback Against Statement",
      },
      {
        title:"Movie & Dining",
        benifit:"10% Valueback on Zomato, Blinkit, and District Movies",
      }
     ],
      pros:["10% value back on Zomato, Blinkit, and District Movies (up to ₹200 per partner per month)"],
      cons:["The card doesn’t make much sense anymore due to its complicated reward structure. Cashback on utility bill payments now depends entirely on how much you spend in the 1% category.","Your spending in the 1% category decides the cashback limit for higher categories, which makes the card confusing and less rewarding for users."],
      desc2:["25% cashback on Airtel mobile, DTH, WiFi, and broadband recharge via the Airtel Thanks app. Maximum cashback is twice the base cashback earned in that statement cycle.","Get 10% cashback on utility bill payments via the Airtel Thanks app. Capped at the base cashback earned in the same statement month.","You get unlimited 1% cashback on all other retail spends. Those with the RuPay variant shall be eligible for 1% cashback on UPI spends.","The applicant should have a stable source of income."],
      link:"https://web.axis.bank.in/DigitalChannel/WebForm/?ipa185&axisreferralcode=CRD01"
    },
    { id: 7, name: "Axis Ace Signature", category: "credit card", company: "axis", image: i7, 
      tags:["travel","utility-bills"],
      desc1:["The Axis Bank ACE credit card launched in partnership with Google Pay and Visa aims to capitalize on the internet penetration and heavy growth of online payments in the country. With this card, you get 5% cashback on electricity, gas, water, and internet bill payments through the Google Pay application and 4% cashback on popular merchants like Swiggy, Zomato, and Ola. Axis Bank is targeting young professionals with this credit card who mainly use these popular merchants and are new to the credit scene.","In addition to the cashback offers, the ACE credit card offers complimentary domestic airport lounge access and other benefits. Check out our Axis Bank ACE credit card review to know more about this card."],
      charges:[{
        "Joining Fee":"₹499 + GST",
        "Renewal Fee":"₹499 + GST",
        "Spend-Based Waiver":"Annual Charges Waived on Spends of ₹2 Lakh or More",
        "Forex Markup":"3.5% of the transaction amount",
        "Interest Rates":"3.75% Per Month or 55.55% Annualized",
        "Fuel Surcharge Waiver":"1% Surcharge Waiver for Purchases Worth Between ₹400 and ₹4,000 (Maximum Waiver of ₹500/Statement Cycle)",
        "Cash Advance Charges":"2.5% of the withdrawn amount, subject to a minimum amount of Rs. 500."
      }],
      Benefits:[
      {
        title:"Rewards Rate",
        benifit:"5% cashback on paying bills & on mobile recharges via GPay and 4% cashback on Swiggy, Ola, and Zomato, with a combined capping of Rs. 500 cashback per month. 1.5% cashback elsewhere on other merchants.",
      },
      {
        title:"Reward Redemption",
        benifit:"Your earned cashback is automatically credited to the cardholders' accounts.",
      },
      {
        title:"Domestic Lounge",
        benifit:"4 complimentary airport lounge visits to domestic airport lounges per year",
      },
      {
        title:"Travel Benefits",
        benifit:"4 complimentary airport lounge access every year to selected domestic airports.",
      }
     ],
      pros:["Axis Bank ACE Card offers an amazing reward rate of 5% on mobile/DTH recharges and bill payments via Google Pay and also a good reward rate of 4% on spends at Zomato, Swiggy, and Ola."],
      cons:["The card does not earn any cashback on certain categories of spend, including fuel spends, wallet reloads, purchases converted into EMIs, gold items, and cash advances.","The cashback earned at non-partner merchants (except Google Pay, Zomato, Swiggy, and Ola) is just 1.5%."],
      desc2:["You get a cashback of 5% on utility bill payments (electricity, water, gas, LPG, and broadband) and DTH & mobile recharges via Google Pay. The offer is applicable only if the payment is made via the Google Pay app using the ACE credit card.","You get a 1.5% cashback on all other spends, and there is no monthly capping.","No cash back on specific categories of spends, including fuel spends, wallet reloads, purchase of gold items, purchases converted to EMI, cash withdrawals, payment of the card’s outstanding balances, and payment of card fees & other card charges.","You get a 4% cashback on Zomato, Swiggy, and Ola."],
      link:"https://web.axis.bank.in/DigitalChannel/WebForm/?ipa185&axisreferralcode=CRD01"
    },
    { id: 8, name: "Axis Atlas", category: "credit card", company: "axis", image: i8, 
      tags: ["Travel", "Air Miles"],
      desc1: [
        "The Axis Bank Atlas Credit Card is a premier travel-centric credit card designed for frequent flyers and global travelers. It introduces a unique Tiered Loyalty Structure (Silver, Gold, and Magenta) that rewards users with EDGE EDGE Miles on airline and hotel bookings, as well as general spending, which can be transferred to multiple airline and hotel partner loyalty programs.",
        "Cardholders enjoy accelerated travel rewards, complimentary domestic and international airport lounge visits, tier-based welcome and anniversary milestone bonuses, along with a competitive foreign currency markup rate and dedicated concierge services."
      ],
      charges: [
        {
          "Joining Fee": "₹5,000 + GST",
          "Renewal Fee": "₹5,000 + GST",
          "Spend-Based Waiver": "No annual fee waiver; renewal fee is offset by tier-based anniversary EDGE Miles (up to 10,000 miles)",
          "Forex Markup": "3.50% of the transaction amount",
          "Interest Rates": "3.6% per month (52.86% per annum)",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for transactions between ₹400 and ₹4,000 (up to ₹400 per statement cycle)",
          "Cash Advance Charges": "2.5% of the withdrawn amount or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "EDGE Miles & Tiered Progression",
          benifit: "Earn 2 EDGE Miles per ₹100 on general spends and 5 EDGE Miles per ₹100 on direct airline and hotel transactions. Progress through Silver, Gold, and Magenta tiers based on annual spending to unlock higher milestone rewards."
        },
        {
          title: "Welcome & Anniversary Milestone Bonuses",
          benifit: "Receive 5,000 EDGE Miles on completing your first transaction within 30 days. Unlock up to 10,000 anniversary bonus EDGE Miles annually depending on your tier status and spending milestones."
        },
        {
          title: "Flexible Travel Partner Conversions",
          benifit: "Transfer EDGE Miles to 1:2 ratio miles across major partner airlines and international hotel loyalty programs (including Singapore Airlines KrisFlyer, Accor Live Limitless, Air France-KLM Flying Blue, and Etihad Guest)."
        },
        {
          title: "Airport Lounge Access & Airport Transfers",
          benifit: "Enjoy complimentary domestic and international airport lounge access visits per year based on your tier status (up to 18 domestic and 12 international visits annually for top-tier members), along with complimentary airport pickup and drop-off services."
        }
      ],
      pros: [
        "Offers exceptionally high flight and hotel reward value through a 1:2 conversion ratio to leading global airline and hotel loyalty programs."
      ],
      cons: [
        "Government, utility, wallet load, rent, fuel, and EMI transactions do not earn standard or accelerated EDGE Miles.",
        "Lounge access and anniversary bonus benefits are heavily dependent on meeting strict annual spending tier thresholds."
      ],
      desc2: [
        "EDGE Miles earned on the card do not expire for up to 3 years from the date of accrual.",
        "Direct travel spends on airline platforms, hotel websites, and TRAVEL EDGE portal earn 5 EDGE Miles per ₹100 spent.",
        "Tier status (Silver, Gold, Magenta) is calculated annually based on cumulative spending in the preceding card anniversary year.",
        "Comprehensive travel insurance protection covers lost baggage, flight delays, medical emergencies abroad, and ticket cancellations."
      ],
      link: "https://www.axisbank.com/retail/cards/credit-card/axis-bank-atlas-credit-card"
    },
    { id: 9, name: "Axis Cashback", category: "credit card", company: "axis", image: i9, 
      tags: ["shopping"],
      desc1: [
        "The Axis Bank Cashback Credit Card is designed for shoppers who want straightforward cashback on everyday purchases. It offers cashback on online shopping, offline purchases, travel, and utility transactions, along with a welcome benefit of 5,000 EDGE Reward Points.",
        "The card has a joining and renewal fee of ₹1,000 + GST, with an annual fee waiver on eligible spends of ₹4 lakh or more. Cardholders receive 5,000 EDGE Reward Points worth ₹1,000 after making their first transaction within 30 days of card issuance, with no minimum spending requirement."
      ],
      charges: [
        {
          "Joining Fee": "₹1,000 + GST",
          "Renewal Fee": "₹1,000 + GST",
          "Spend-Based Waiver": "Annual fee waived on eligible spends of ₹4 lakh or more",
          "Forex Markup": "3.5%",
          "Interest Rates": "3.75% per month (55.55% annually)",
          "Cash Advance Charges": "2.5% of the withdrawn amount or ₹500"
        }
      ],
      Benefits: [
        {
          title: "Cashback Rates",
          benifit: "Earn up to 7% cashback on online purchases, 0.75% on eligible offline and travel spends, and 0.5% on utility transactions. Utility cashback is capped at ₹100 per statement."
        },
        {
          title: "Welcome Benefits",
          benifit: "Receive 5,000 EDGE Reward Points worth ₹1,000 after making the first transaction within 30 days of card issuance. No minimum spending requirement applies, and transactions on primary and add-on cards are considered."
        },
        {
          title: "Online Shopping",
          benifit: "Earn 2% cashback on online spending up to ₹5,000, 5% on spending between ₹5,001 and ₹40,000, and 7% on spending above ₹40,000, subject to the cashback limits specified for each spending tier."
        },
        {
          title: "Reward Redemption",
          benifit: "Cashback is automatically credited to the cardholder's account before the next statement date, without requiring manual redemption or points conversion."
        }
      ],
      pros: [
        "Offers up to 7% cashback on online shopping, unlimited 0.75% cashback on eligible offline and travel spends, additional cashback on utility transactions, and welcome rewards worth ₹1,000, making it useful for shoppers seeking simple savings across everyday purchases."
      ],
      cons: [
        "There is no fuel surcharge waiver, and the annual fee waiver requires eligible spending of ₹4 lakh or more.",
        "The card has a 3.5% forex markup, utility cashback is capped at ₹100 per statement, and cash advances incur charges of 2.5% of the withdrawn amount or ₹500."
      ],
      desc2: [
        "Earn 0.75% cashback on eligible offline and travel spends without a stated cashback cap.",
        "Utility transactions earn 0.5% cashback, capped at ₹100 per statement.",
        "Get 5,000 EDGE Reward Points worth ₹1,000 on your first transaction within 30 days of card issuance.",
        "Cashback is credited automatically before the next statement date, eliminating the need for manual redemption."
      ],
      link:""
    },
    { id: 10, name: "Axis Magnus Burgundy", category: "credit card", company: "axis", image: i10, 
      tags: ["travel","dining", "shopping"],
        desc1: [
          "The Magnus Credit Card is one of the most rewarding and sought-after cards in Axis Bank’s portfolio. This super-premium card issued by the bank targets high-income individuals who want to enjoy the privilege of a luxurious lifestyle. It has a joining fee of ₹12,500 but offers exciting benefits across categories such as travel, rewards, and more.",
          "Cardholders get domestic and international lounge access at airports, and premium customers can also make international transactions at a relatively low 2% Forex Markup fee. Also, there are no cash withdrawal charges on the card (Interest charges applicable). Although the annual fee of the card is relatively high, you can get it waived by spending 25 lakhs or above in a card anniversary year. Keep reading our review of the super-premium Magnus credit card to learn about its features and benefits."
        ],
        charges: [
          {
            "Joining Fee": "₹12,500 + GST (Nil for Burgundy Salary Account holders)",
            "Renewal Fee": "₹12,500 + GST (Nil for Burgundy Salary Account holders)",
            "Spend-Based Waiver": "Annual fee waived on eligible spends of ₹25 lakh during a card anniversary year",
            "Rewards Redemption Fee": "Nil",
            "Forex Markup": "2%",
            "Interest Rates": "3.0% per month (42.58% annually)",
            "Fuel Surcharge Waiver": "1% fuel surcharge waiver at fuel stations across India",
          }
        ],
        Benefits: [
          {
            title: "Rewards Rate",
            benefit: "Earn 12 EDGE Reward Points per ₹200 on monthly retail spends up to ₹1.5 lakh and 35 points per ₹200 thereafter. Travel EDGE spends earn 60 points per ₹200 up to ₹2 lakh monthly and 35 points per ₹200 thereafter. Magnus RuPay UPI spends earn 35 points per ₹200, capped at ₹50,000 in monthly UPI spending. Rental spends earn rewards only up to ₹50,000 per month. Wallet reloads, government, utility, telecom, insurance, fuel, gold, and jewellery transactions do not earn points."
          },
          {
            title: "Welcome Benefits",
            benefit: "Receive gift vouchers worth ₹12,500 from Luxe, Yatra, or Postcard Hotels."
          },
          {
            title: "Lounge Access",
            benefit: "Enjoy unlimited complimentary international airport lounge access through Priority Pass and domestic lounge access for primary and add-on cardholders after spending ₹50,000 or more in the previous quarter. The card also provides four complimentary international lounge visits for guests each year."
          },
          {
            title: "Dining and Travel Benefits",
            benefit: "Get a 15% discount at over 4,000 participating restaurants through the Axis Bank Dining Delights programme, with discounts of up to ₹1,000 via Eazydiner. Cardholders can also access discounted stays at Oberoi Hotels and redeem EDGE Reward Points for vouchers or transfer them to eligible airline and hotel loyalty programmes at a 5:2 ratio."
          }
        ],
        pros: [
          "The card offers premium travel and lifestyle benefits, including unlimited international lounge access, conditional unlimited domestic lounge access, accelerated EDGE Reward Points on retail and Travel EDGE spends, dining discounts at over 4,000 restaurants, ₹12,500 welcome vouchers, insurance protection worth ₹7 lakh combined, a low 2% forex markup, and zero cash advance fees."
        ],
        cons: [
          "The ₹12,500 + GST joining and renewal fees are high, and the annual fee waiver requires eligible spending of ₹25 lakh during a card anniversary year.",
          "Domestic lounge access requires ₹50,000 in previous-quarter spending. Several spending categories do not earn reward points, rental rewards are capped at ₹50,000 per month, and the stated annual income requirement is ₹24 lakh. The card also has no golf benefits, and previously available movie offers and concierge services have been removed."
        ],
        desc2:["You can just link one Customer ID to a partner program loyalty membership at a given time. If you want to link another ID, you will first have to delete the existing primary ID and add the new one.",
         "The cardholder must wait at least 60 days to update their partner program Customer ID at the Travel EDGE portal.",
          "The total number of reward points you can convert in a calendar year is capped at 5,00,000 RPs for a single Customer ID. In 2023, cardholders can convert 5,00,000 reward points from 1st September to 31st December 2023.",
          "The EDGE RPs earned by you can be transferred to domestic as well as international partner hotel and airline loyalty program points. The revised transfer ratio is 5:2, where 5 EDGE RPs = 2 Partner Miles/Points"
        ],
        link:"https://web.axis.bank.in/DigitalChannel/WebForm/?ipa185&axisreferralcode=CRD01"
    },
  
    // Credit Cards - HDFC
    { id: 11, name: "HDFC Diners BizBlack", category: "credit card", company: "hdfc", image: i11, 
      tags: ["Business", "Travel"],
      desc1: [
        "The HDFC Bank Diners Club BizBlack Credit Card is a super-premium business card tailored specifically for self-employed individuals, business owners, and entrepreneurs. It offers industry-leading reward rates on essential business expenditures, including tax payments (GST, Income Tax, and Advance Tax), utility bill payments, and SaaS software tool subscriptions made through SmartBuy BizDeals.",
        "Beyond business category earnings, the card provides luxury lifestyle privileges including unlimited complimentary domestic and international airport lounge access, milestone travel vouchers, a low 2% foreign currency markup, and complimentary memberships upon meeting spending thresholds."
      ],
      charges: [
        {
          "Joining Fee": "₹10,000 + GST",
          "Renewal Fee": "₹10,000 + GST",
          "Spend-Based Waiver": "Joining fee waived on spending ₹1.5 lakh within 90 days; renewal fee waived on annual spends of ₹7.5 lakh or more",
          "Forex Markup": "2% of the transaction amount",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for eligible fuel transactions between ₹400 and ₹1,00,000",
          "Cash Advance Charges": "2.5% of the withdrawn amount or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Accelerated Business Rewards",
          benifit: "Earn 5 Reward Points per ₹150 on regular spends and 5X accelerated rewards (25 Reward Points per ₹150, up to 16.5% value) on eligible business expenses including tax payments, utility bills, and business productivity software tools upon spending a minimum of ₹50,000 per statement cycle."
        },
        {
          title: "Unlimited Airport Lounge Access",
          benifit: "Enjoy unlimited complimentary domestic and international airport lounge access globally for primary and add-on cardholders via the Diners Club airport lounge network."
        },
        {
          title: "Milestone Vouchers & Welcome Perks",
          benifit: "Receive a ₹5,000 flight or Taj Hotel stay voucher on every ₹5 lakh spent in a card anniversary year (up to ₹20,000 value annually). Get a complimentary ALL Accor+ Explorer membership upon spending ₹1.5 lakh within 90 days of card setup."
        },
        {
          title: "SmartBuy BizDeals & Dining Benefits",
          benifit: "Save up to 40% on business travel and software subscriptions booked via SmartBuy BizDeals, get up to 10% off dining bills via Swiggy Dineout, and access 24x7 global personal concierge services."
        }
      ],
      pros: [
        "Delivers exceptional reward rates of up to 16.5% on major business expenses such as GST, Income Tax, utilities, and software tools, along with unlimited global lounge access."
      ],
      cons: [
        "Diners Club network acceptance can be limited on certain ad platforms (such as Google Ads or Meta Ads) and local merchant terminals compared to Visa or Mastercard.",
        "Accelerated 5X reward points require a minimum cycle spend of ₹50,000 and carry a monthly cap of 7,500 bonus reward points."
      ],
      desc2: [
        "Reward Points earned are valid for up to 3 years and can be redeemed at a 1:1 ratio for flight and hotel bookings via HDFC SmartBuy.",
        "The 5X accelerated rewards program covers tax payments, utility bills, PayZapp/SmartPay transactions, and business software tools like AWS, Office 365, Tally, and Google Workspace.",
        "Cardholders get complimentary business protection insurance covers including fire, burglary, shop equipment, and credit liability protection.",
        "The 2% foreign currency markup allows business travelers to spend internationally at competitive foreign exchange conversion rates."
      ],
      link: "https://www.hdfc.bank.in/business-credit-cards/biz-black-credit-card"
    },
    { id: 12, name: "HDFC Diners Club Black Metal", category: "credit card", company: "hdfc", image: i12, 
      tags: ["travel", "dining", "shopping"],
      desc1: [
        "The HDFC Bank Diners Club Black Credit Card was a premium credit card designed for high-income individuals seeking exclusive travel, dining, shopping, and lifestyle benefits. It has been discontinued and replaced by the HDFC Bank Diners Club Black Metal Credit Card.",
        "The card carries a joining and renewal fee of ₹10,000 + GST, with the renewal fee waived on eligible annual spending of ₹5 lakh. It offers 5 Reward Points per ₹150 spent, up to 10X Reward Points on SmartBuy, and 2X Reward Points on weekend dining."
      ],
      charges: [
        {
          "Joining Fee": "₹10,000 + GST",
          "Renewal Fee": "₹10,000 + GST",
          "Spend-Based Waiver": "Renewal fee waived on eligible annual spends of ₹5 lakh",
          "Forex Markup": "2% + GST",
          "Interest Rates": "1.99% per month (23.88% annually)",
          "Fuel Surcharge Waiver": "1% waiver on fuel transactions of ₹400 or more, capped at ₹1,000 per statement cycle",
          "Cash Advance Charges": "Higher of 2.5% of the amount withdrawn or ₹500"
        }
      ],
      Benefits: [
        {
          title: "Rewards Rate",
          benifit: "Earn 5 Reward Points per ₹150 spent on eligible retail purchases, up to 10X Reward Points on SmartBuy, and 2X Reward Points on weekend dining. Fuel, wallet, education, and EMI transactions do not earn points. Utility, telecom, and grocery rewards are capped at 2,000 points per month, while insurance rewards are capped at 5,000 points per month."
        },
        {
          title: "Welcome and Milestone Benefits",
          benifit: "Receive complimentary Club Marriott, Swiggy One for 3 months, MakeMyTrip BLACK Gold Tier, Amazon Prime, and Times Prime benefits after spending ₹1.5 lakh within the first 90 days of card issuance or upon realization of the joining fee. Eligible annual spends of ₹8 lakh renew subscription benefits, while monthly spends of ₹80,000 qualify for any two ₹500 vouchers from Ola, cult.fit, BookMyShow, and TATA CLiQ."
        },
        {
          title: "Lounge and Golf Access",
          benifit: "Enjoy unlimited complimentary access to domestic and international airport lounges. The card also provides six complimentary golf rounds per calendar quarter at participating golf courses worldwide."
        },
        {
          title: "Travel, Insurance and Redemption",
          benifit: "Get travel insurance including air accident cover of ₹2 crore, overseas medical emergency cover up to ₹50 lakh, delayed baggage cover of ₹55,000, and credit liability cover up to ₹9 lakh. Redeem Reward Points for flights, hotels, catalogue items, statement cashback, or eligible airline miles. For flight and hotel bookings, points can cover up to 70% of the total payment."
        }
      ],
      pros: [
        "Offers premium lifestyle benefits including unlimited domestic and international airport lounge access, six complimentary golf rounds per quarter, accelerated SmartBuy rewards, weekend dining rewards, complimentary subscription benefits, extensive travel insurance, and a relatively low 2% forex markup."
      ],
      cons: [
        "The card has been discontinued and replaced by the HDFC Bank Diners Club Black Metal Credit Card, so new applicants should consider the replacement or other currently available alternatives.",
        "The annual fee is high at ₹10,000 + GST, and fee waivers and milestone benefits require substantial spending. Several transaction categories are excluded from rewards, reward caps apply to selected categories, and Reward Points can cover only up to 70% of flight and hotel booking payments."
      ],
      desc2: [
        "Earn 5 Reward Points per ₹150 spent, with accelerated rewards on SmartBuy and weekend dining.",
        "Receive complimentary subscription benefits after spending ₹1.5 lakh within the first 90 days.",
        "Get six complimentary golf rounds per calendar quarter and unlimited airport lounge access.",
        "Receive a 1% fuel surcharge waiver on eligible transactions of ₹400 or more, capped at ₹1,000 per statement cycle."
      ],
      link:"https://applyonline.hdfc.bank.in/cards/credit-cards?utm_content=DGPI&Channel=DSA&DSACode=XATV&SMCode=R36990&LGCode=DGPI&LCCode=XATV&LC2=webn#nbb"
    },
    { id: 13, name: "HDFC Freedom", category: "credit card", company: "hdfc", image: i13, 
      tags: ["shopping"],
      desc1: [
        "The HDFC Freedom Credit Card is an entry-level card designed primarily for first-time cardholders. It has a joining and renewal fee of ₹500 + GST, offers 500 welcome CashPoints, and allows the renewal fee to be waived after spending ₹50,000 in the previous anniversary year.",
        "Cardholders earn 1 CashPoint per ₹200 on regular eligible purchases and 10X CashPoints on BigBasket, Swiggy, BookMyShow, OYO, and Uber, subject to a monthly cap of 2,500 accelerated CashPoints. Other benefits include Swiggy Dineout discounts and a fuel surcharge waiver."
      ],
      charges: [
        {
          "Joining Fee": "₹500 + GST",
          "Renewal Fee": "₹500 + GST",
          "Spend-Based Waiver": "Renewal fee waived after spending ₹50,000 or more in the previous anniversary year",
          "Rewards Redemption Fee": "₹99 + GST",
          "Forex Markup": "3.5%",
          "Interest Rates": "3.75% per month (45% annually); introductory rate of 0.99% for the first 90 days from card issuance",
          "Fuel Surcharge Waiver": "1% on fuel transactions between ₹400 and ₹5,000, capped at ₹250 per statement cycle",
          "Cash Advance Charges": "2.5% of the withdrawn amount or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Accelerated Partner Rewards",
          benifit: "Earn 10 CashPoints per ₹200 spent at BigBasket, Swiggy, BookMyShow, OYO, and Uber. Accelerated CashPoints are capped at 2,500 per month."
        },
        {
          title: "Regular Spending Rewards",
          benifit: "Earn 1 CashPoint per ₹200 on other eligible purchases. CashPoints can be redeemed for cashback, products from the HDFC catalogue, and flight or hotel bookings through SmartBuy."
        },
        {
          title: "Welcome CashPoints",
          benifit: "Receive 500 bonus CashPoints after paying the joining fee. The source also states that CashPoints expire after two years."
        },
        {
          title: "Dining and Fuel Savings",
          benifit: "Get up to 10% off dining through Swiggy Dineout, up to ₹200 twice each month, and a 1% fuel surcharge waiver on eligible transactions between ₹400 and ₹5,000, capped at ₹250 per statement cycle."
        }
      ],
      pros: [
        "Offers an affordable entry-level option with partner-brand reward acceleration, flexible CashPoint redemption options, welcome rewards, dining discounts, a fuel surcharge waiver, and a renewal fee waiver after ₹50,000 in annual spending."
      ],
      cons: [
        "CashPoints expire after two years and have a redemption value of ₹0.15 each, making their value relatively limited.",
        "The card does not offer domestic or international airport lounge access, golf benefits, or listed travel and insurance benefits."
      ],
      desc2: [
        "CashPoints are valued at ₹0.15 each for the stated redemption options, and at least 500 CashPoints are required for cashback redemption.",
        "Fuel spending, rent payments, EMI transactions, wallet loads, gift card purchases, cash advances, and government transactions are excluded from reward-point redemption, according to the source.",
        "The card's fuel surcharge waiver applies to transactions between ₹400 and ₹5,000 at filling stations across India, with a maximum waiver of ₹250 per statement cycle.",
        "The source lists an introductory interest rate of 0.99% for the first 90 days after issuance; the regular stated interest rate is 3.75% monthly."
      ],
      link:"https://applyonline.hdfc.bank.in/cards/credit-cards?utm_content=DGPI&Channel=DSA&DSACode=XATV&SMCode=R36990&LGCode=DGPI&LCCode=XATV&LC2=webn#nbb"
    },
    { id: 14, name: "HDFC Infinia Metal", category: "credit card", company: "hdfc", image: i14, 
      tags: ["travel", "dining", "shopping"],
      desc1: [
        "The HDFC Infinia Metal Credit Card is a premium, invite-only card designed for high-income customers seeking luxury travel and lifestyle privileges. It charges ₹12,500 + GST for joining and renewal and offers 12,500 welcome Reward Points along with a complimentary one-year Club Marriott membership.",
        "Cardholders earn 5 Reward Points per ₹150 spent on eligible transactions and 10X Reward Points on eligible travel and shopping purchases through SmartBuy, subject to applicable caps. Benefits include unlimited airport lounge access, golf privileges, dining offers, concierge services, and travel insurance."
      ],
      charges: [
        {
          "Joining Fee": "₹12,500 + GST",
          "Renewal Fee": "₹12,500 + GST",
          "Spend-Based Waiver": "Renewal fee waived on spending ₹10 lakh in the previous year; 12,500 Reward Points offered as a renewal benefit if the fee is paid",
          "Forex Markup": "2% + GST (approximately 2.36%)",
          "Interest Rates": "1.99% per month (approximately 23.8% annually)",
          "Fuel Surcharge Waiver": "1% on eligible fuel transactions between ₹400 and ₹1,00,000, capped at ₹1,000 per month",
        }
      ],
      Benefits: [
        {
          title: "Reward Points and SmartBuy Accelerators",
          benifit: "Earn 5 Reward Points per ₹150 on eligible spending and 10X Reward Points on eligible travel and shopping purchases through SmartBuy, capped at 15,000 accelerated points per month. Insurance rewards are capped at 10,000 points monthly, while grocery, telecom, and utility rewards are capped at 2,000 points monthly."
        },
        {
          title: "Welcome and Club Marriott Membership",
          benifit: "Receive 12,500 welcome Reward Points after paying the joining fee and a complimentary one-year Club Marriott membership. Membership privileges include discounts on participating hotel stays, restaurant bills, and selected spa services."
        },
        {
          title: "Unlimited Lounge Access and Golf",
          benifit: "Enjoy unlimited complimentary domestic and international airport lounge access for primary and add-on cardholders through Priority Pass, along with unlimited complimentary golf games and coaching at eligible courses."
        },
        {
          title: "Premium Dining and Concierge",
          benifit: "Access a 1+1 complimentary buffet at participating ITC Hotels, up to ₹500 off through Swiggy Dineout twice a month subject to the stated minimum bill, and 24×7 concierge assistance for golf bookings, dining, airport services, itinerary planning, and event arrangements."
        }
      ],
      pros: [
        "Offers premium travel and lifestyle privileges, including unlimited airport lounge access, golf benefits, a Club Marriott membership, accelerated SmartBuy rewards, complimentary ITC buffet and stay offers, concierge services, and insurance covers of up to ₹3 crore for accidental air death, ₹50 lakh for overseas medical emergencies during international air travel, and ₹9 lakh for credit liability."
      ],
      cons: [
        "The ₹12,500 + GST annual fee is substantial, and the card is invite-only with strict eligibility requirements; the renewal fee waiver requires ₹10 lakh in annual spending.",
        "Reward rates and redemption values vary by category, several transaction types are excluded from earning points, and some redemption options have limits. Cashback provides only ₹0.30 per point, lower than flight and hotel redemptions."
      ],
      desc2: [
        "Reward Points can be redeemed for SmartBuy flight and hotel bookings at ₹1 per point, AirMiles at 1:1, products and general vouchers at ₹0.50 per point, Apple and Tanishq vouchers at ₹1 per point, or statement cashback at ₹0.30 per point.",
        "For flight and hotel bookings and Apple and Tanishq vouchers, Reward Points can cover up to 70% of the total payment. SmartBuy flight and hotel redemption is capped at 1,50,000 points per month.",
        "The card provides a 1% fuel surcharge waiver on eligible transactions between ₹400 and ₹1,00,000, capped at ₹1,000 per month. Fuel transactions do not earn Reward Points.",
        "Eligible ITC Hotel offers include a 1+1 complimentary buffet on participating bookings and a complimentary night when booking two nights, subject to the applicable offer conditions."
      ],
      link:""
    },
    { id: 15, name: "HDFC Millennia", category: "credit card", company: "hdfc", image: i15, 
      tags: ["shopping"],
      desc1: [
        "The HDFC Bank Millennia Credit Card is an entry-level cashback credit card designed primarily for millennials and shoppers. It offers 5% cashback on ten popular online merchants, including Amazon, Flipkart, Myntra, Swiggy, Zomato, Uber, BookMyShow, Cult.fit, Sony LIV, and Tata CLiQ, along with 1% cashback on other eligible online and offline spends.",
        "The card has a joining and renewal fee of ₹1,000 + GST, with the renewal fee waived on eligible annual spends of ₹1 lakh or more. Cardholders receive 1,000 welcome CashPoints upon realization of the joining fee and can earn quarterly gift vouchers worth ₹1,000 on spending ₹1 lakh or more."
      ],
      charges: [
        {
          "Joining Fee": "₹1,000 + GST",
          "Renewal Fee": "₹1,000 + GST",
          "Spend-Based Waiver": "Annual fee waived on eligible spends of ₹1 lakh or more in the card anniversary year",
          "Rewards Redemption Fee": "₹50 + GST per cash redemption request; ₹99 + GST for other redemptions",
          "Forex Markup": "3.5% + GST",
          "Interest Rates": "3.75% per month (45% annually)",
          "Fuel Surcharge Waiver": "1% waiver on fuel transactions between ₹400 and ₹5,000, capped at ₹250 per statement cycle",
          "Cash Advance Charges": "2.5% of the transaction amount, subject to a minimum fee of ₹500"
        }
      ],
      Benefits: [
        {
          title: "Cashback Rewards",
          benifit: "Earn 5% cashback on Amazon, BookMyShow, Cult.fit, Flipkart, Myntra, Sony LIV, Swiggy, Tata CLiQ, Uber, and Zomato. Earn 1% cashback on other eligible online and offline spends, excluding fuel, rental, and government transactions. Each cashback category is capped at 1,000 CashPoints per statement cycle."
        },
        {
          title: "Welcome and Milestone Benefits",
          benifit: "Receive 1,000 welcome CashPoints upon realization of the joining fee. Earn gift vouchers worth ₹1,000 on eligible spends of ₹1 lakh or more each quarter. Subscription benefits and quarterly vouchers are subject to their respective eligibility conditions."
        },
        {
          title: "Dining Benefits",
          benifit: "Get an instant ₹200 discount on Swiggy Dineout twice per month on a minimum order value of ₹2,000. The card also offers discounts of up to 20% at partner restaurants through Swiggy Dineout."
        },
        {
          title: "CashPoint Redemption",
          benifit: "Redeem CashPoints against the credit card statement balance, for flight and hotel bookings through SmartBuy, or for products from the bank's rewards catalogue. One CashPoint equals ₹1 when redeemed against the statement balance. A minimum of 500 CashPoints is required for statement redemption."
        }
      ],
      pros: [
        "Offers 5% cashback on ten popular online merchants, including Amazon and Flipkart, plus 1% cashback on other eligible purchases. Additional benefits include ₹1,000 welcome CashPoints, quarterly gift vouchers worth ₹1,000 on eligible spending, Swiggy Dineout discounts, and an annual fee waiver on eligible spending of ₹1 lakh."
      ],
      cons: [
        "Cashback on other eligible online and offline purchases is limited to 1%, and both the 5% and 1% cashback categories have separate caps of 1,000 CashPoints per statement cycle.",
        "At least 500 CashPoints are required for statement redemption, and redemption fees apply. The card also has a 3.5% + GST forex markup and no cashback on fuel, rental, or government spends."
      ],
      desc2: [
        "Earn 5% cashback on ten partner merchants and 1% on other eligible online and offline spends, with separate monthly caps of 1,000 CashPoints per category.",
        "Receive 1,000 welcome CashPoints after realization of the joining fee.",
        "Earn ₹1,000 gift vouchers each quarter on eligible spending of ₹1 lakh or more.",
        "Get a ₹200 Swiggy Dineout discount twice monthly on orders of at least ₹2,000, along with a 1% fuel surcharge waiver on eligible fuel transactions."
      ],
      link:"https://applyonline.hdfc.bank.in/cards/credit-cards?utm_content=DGPI&Channel=DSA&DSACode=XATV&SMCode=R36990&LGCode=DGPI&LCCode=XATV&LC2=webn#nbb"
    },
    { id: 16, name: "HDFC MoneyBack+", category: "credit card", company: "hdfc", image: i16, 
      tags: ["shopping"],
      desc1: [
        "The HDFC MoneyBack Plus Credit Card offers CashPoints on everyday purchases, with accelerated rewards on Amazon, Flipkart, Swiggy, BigBasket, and Reliance Smart SuperStore. It charges ₹500 + GST as joining and renewal fees and provides 500 welcome CashPoints.",
        "Cardholders can earn gift vouchers worth up to ₹2,000 annually through quarterly spending milestones and receive dining discounts of up to ₹200 through Swiggy Dineout. Additional benefits include a fuel surcharge waiver and a renewal fee waiver on annual spending of ₹50,000 or more."
      ],
      charges: [
        {
          "Joining Fee": "₹500 + GST",
          "Renewal Fee": "₹500 + GST",
          "Spend-Based Waiver": "Renewal fee waived on spending ₹50,000 or more in the previous year",
          "Rewards Redemption Fee": "₹99 + GST",
          "Forex Markup": "3.5%",
          "Interest Rates": "3.75% per month (45% annually)",
          "Fuel Surcharge Waiver": "1% waiver on fuel transactions, capped at ₹250 per billing cycle",
          "Cash Advance Charges": "2.5% of the withdrawn amount or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Accelerated Shopping Rewards",
          benifit: "Earn 10X CashPoints (20 CashPoints per ₹200) on Amazon, Flipkart, Swiggy, BigBasket, and Reliance Smart SuperStore, capped at 2,500 bonus CashPoints per month."
        },
        {
          title: "Welcome and Renewal Benefits",
          benifit: "Receive 500 CashPoints as a welcome benefit and another 500 CashPoints on annual renewal, as stated in the card details."
        },
        {
          title: "Quarterly Milestone Vouchers",
          benifit: "Earn a ₹500 gift voucher for spending ₹50,000 or more in a calendar quarter, with a maximum annual benefit of ₹2,000."
        },
        {
          title: "Dining and Fuel Savings",
          benifit: "Get up to ₹200 off dining bills of at least ₹2,000 through Swiggy Dineout at eligible restaurants, plus a 1% fuel surcharge waiver capped at ₹250 per billing cycle."
        }
      ],
      pros: [
        "Offers accelerated CashPoints on popular shopping and food-delivery brands, regular rewards on eligible retail spending, welcome and renewal points, quarterly gift vouchers, dining discounts, a fuel surcharge waiver, and a renewal fee waiver after ₹50,000 in annual spending."
      ],
      cons: [
        "The 3.5% forex markup and ₹99 + GST reward redemption fee can reduce the value of rewards, while accelerated monthly rewards are capped at 2,500 CashPoints.",
        "Several transactions, including fuel, wallet loads, rent, government payments, voucher purchases, and cash advances, are excluded from rewards; lounge access, travel benefits, and insurance benefits are not listed."
      ],
      desc2: [
        "Regular eligible retail purchases earn 2 CashPoints per ₹200 spent, while SmartPay transactions also qualify under this reward category.",
        "CashPoints are generally valued at ₹0.25 each for statement credit, SmartBuy flight and hotel bookings, and catalogue redemptions; statement credit requires at least 500 CashPoints.",
        "SmartBuy flight and hotel bookings can be paid for with CashPoints for up to 50% of the booking value, with the remaining amount paid through the cardholder's account.",
        "The RuPay variant supports UPI payments and earns 2 Reward Points per ₹200 on UPI spending, capped at 500 Reward Points per month."
      ],
      link:"https://applyonline.hdfc.bank.in/cards/credit-cards?utm_content=DGPI&Channel=DSA&DSACode=XATV&SMCode=R36990&LGCode=DGPI&LCCode=XATV&LC2=webn#nbb"
    },
    { id: 17, name: "HDFC Regalia Gold", category: "credit card", company: "hdfc", image: i17, 
      tags: ["travel", "shopping"],
      desc1: [
        "The HDFC Regalia Gold Credit Card is a premium travel and lifestyle card with a ₹2,500 + GST joining and renewal fee. It earns 5 Reward Points per ₹200 on eligible retail spends and 25 Reward Points per ₹200 at Myntra, Marks & Spencer, Nykaa, and Reliance Digital, subject to applicable caps.",
        "Cardholders receive a ₹2,500 welcome voucher after paying the joining fee. Spending over ₹1 lakh within 90 days can unlock complimentary MMTBLACK Gold and Swiggy One memberships. Additional benefits include milestone vouchers, flight vouchers, airport lounge access, dining discounts, and travel insurance."
      ],
      charges: [
        {
          "Joining Fee": "₹2,500 + GST",
          "Renewal Fee": "₹2,500 + GST",
          "Spend-Based Waiver": "Renewal fee waived on spending ₹4 lakh in the card anniversary year",
          "Rewards Redemption Fee": "₹99 + GST",
          "Forex Markup": "2%",
          "Interest Rates": "3.75% per month (45% annually)",
          "Fuel Surcharge Waiver": "Not specified",
          "Cash Advance Charges": "2.5% of the withdrawn amount or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Reward Points on Retail and Partner Brands",
          benifit: "Earn 5 Reward Points per ₹200 on eligible retail spending, including utilities, insurance, and education. Earn 25 Reward Points per ₹200 at Myntra, Marks & Spencer, Nykaa, and Reliance Digital, subject to category caps."
        },
        {
          title: "Welcome and Membership Benefits",
          benifit: "Receive a ₹2,500 welcome voucher after paying the joining fee. Spend over ₹1 lakh within 90 days of card issuance to qualify for complimentary MMTBLACK Gold and Swiggy One memberships, valid for one year."
        },
        {
          title: "Milestone Vouchers and Flight Benefits",
          benifit: "Earn ₹1,500 in Myntra or Nykaa vouchers on spending ₹1.5 lakh in a calendar quarter. Annual spending milestones can also unlock flight vouchers, including ₹5,000 worth on reaching ₹7.5 lakh in the card anniversary year."
        },
        {
          title: "Airport Lounges and Travel Privileges",
          benifit: "Get up to 12 complimentary domestic lounge visits per year, subject to spending ₹60,000 or more in the previous quarter, and six international lounge visits through Priority Pass. Additional benefits include Boarding Edge experiences and travel insurance, subject to applicable terms."
        }
      ],
      pros: [
        "Combines accelerated rewards at selected shopping brands with travel-focused benefits, including domestic and international lounge access, milestone vouchers, complimentary memberships, Boarding Edge experiences, and insurance covers of up to ₹1 crore for air accident death, ₹15 lakh for emergency overseas hospitalisation, and ₹9 lakh for credit liability."
      ],
      cons: [
        "The ₹2,500 + GST annual fee is waived only after ₹4 lakh in annual spending, and reward redemption attracts a ₹99 + GST fee.",
        "Domestic lounge access requires ₹60,000 spending in the previous quarter, accelerated rewards have caps, and international lounge visits beyond the complimentary quota cost USD 27 plus GST per visit."
      ],
      desc2: [
        "Reward redemption values vary by option: 1 point = ₹0.50 for SmartBuy flights and hotels, ₹0.35 for products and gift vouchers, ₹0.65 for the Exclusive Gold Catalogue, and ₹0.20 for statement cashback.",
        "SmartBuy flight and hotel bookings can be paid for using Reward Points, while points can also be transferred to partner airline miles at 0.50 Airmiles per point.",
        "Swiggy Dineout offers ₹200 off eligible dining bills twice each month. The source specifies a minimum order value of ₹2,000 for this benefit.",
        "Boarding Edge offers two benefits per quarter after uploading a boarding pass on SmartBuy. Available experiences may include spa access, Uber airport transfers, participating-hotel dining, and room upgrades."
      ],
      link:"https://applyonline.hdfc.bank.in/cards/credit-cards?CHANNELSOURCE=RGCC&DSACode=XATV&SMCode=R36990&LGCode=DGPI&LCCode=XATV&LC2=webreg#nbb"
    },
    { id: 18, name: "HDFC Swiggy Black", category: "credit card", company: "hdfc", image: i18, 
      tags: ["dining", "food"],
      desc1: [
        "The Swiggy BLCK HDFC Bank Credit Card is a cashback-focused co-branded card for users who frequently order food, shop for groceries, and dine through Swiggy. It charges ₹1,000 + GST for joining and renewal and provides a complimentary three-month Swiggy BLCK membership upon card activation.",
        "Cardholders earn 10% cashback on eligible Swiggy app spending, 5% on selected online shopping categories, and 1% on other eligible purchases, subject to separate billing-cycle caps. Additional perks include Mastercard golf benefits and a birthday dining discount through Swiggy Dineout."
      ],
      charges: [
        {
          "Joining Fee": "₹1,000 + GST",
          "Renewal Fee": "₹1,000 + GST",
          "Spend-Based Waiver": "Joining fee waived on spending ₹75,000 within the first 90 days; renewal fee waived from the second year on annual spending of ₹2 lakh",
          "Rewards Redemption Fee": "Not specified",
          "Forex Markup": "3.5% + GST",
          "Interest Rates": "3.75% per month (45% annually)",
          "Fuel Surcharge Waiver": "Not specified",
          "Cash Advance Charges": "2.5% of the withdrawn amount or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Cashback on Swiggy",
          benifit: "Earn 10% cashback on eligible Swiggy food delivery, Instamart, and Dineout transactions, capped at ₹1,500 per billing cycle. Transactions below ₹249 are not eligible for the 10% cashback."
        },
        {
          title: "Online Shopping Cashback",
          benifit: "Get 5% cashback on eligible online purchases across categories such as apparel, pharmacies, pet stores, personal care, electronics, entertainment, travel, discount stores, and local cabs, capped at ₹1,500 per billing cycle."
        },
        {
          title: "Cashback on Other Spending",
          benifit: "Earn 1% cashback on other eligible spending, capped at ₹1,000 per billing cycle. Exclusions include fuel, rent, government payments, wallet and gift card loads, jewellery, education, gaming, and EMI transactions."
        },
        {
          title: "Swiggy BLCK Membership and Lifestyle Perks",
          benifit: "Receive a complimentary three-month Swiggy BLCK membership after card activation. The card also offers up to 12 complimentary golf lessons, four free rounds of green fees, 50% off eligible golf services, and a birthday dining discount of 10% up to ₹500 on a minimum transaction of ₹3,000."
        }
      ],
      pros: [
        "Provides high cashback rates on Swiggy and selected online purchases, a complimentary Swiggy BLCK membership, additional partner offers, a birthday dining discount, and Mastercard golf privileges. The joining and renewal fees can be waived by meeting the specified spending thresholds."
      ],
      cons: [
        "The 10% Swiggy cashback is capped at ₹1,500 per billing cycle, and transactions below ₹249 do not qualify for that rate. The 5% online and 1% other-spend categories also have separate caps.",
        "The card has a 3.5% + GST forex markup and excludes several transaction categories from cashback, including fuel, rent, government payments, wallet loads, jewellery, education, and EMI transactions."
      ],
      desc2: [
        "The joining fee can be waived by spending ₹75,000 within the first 90 days of card issuance, while the ₹1,000 renewal fee from the second year can be waived with ₹2 lakh in annual spending.",
        "Eligible cardholders receive 500 CashPoints as a welcome benefit according to the supplied card summary; the detailed cashback section separately describes the three-month Swiggy BLCK membership.",
        "The birthday offer provides an additional 10% discount on Swiggy Dineout, capped at ₹500, for transactions of at least ₹3,000. It is valid from three days before through three days after the birthday registered with the bank.",
        "Additional partner offers listed include 5% cashback plus a 6% instant flight discount and a 19% instant hotel discount through Cleartrip, as well as 5% cashback and a 5% instant discount through Nykaa, subject to applicable terms."
      ],
      link:"https://applyonline.hdfc.bank.in/cards/credit-cards?CHANNELSOURCE=SWCC&DSACode=XATV&SMCode=R36990&LGCode=DGPI&LCCode=XATV&LC2=webswiggy#nbb"
    },
    { id: 19, name: "HDFC Tata Neu Infinity RuPay", category: "credit card", company: "hdfc", image: i19, 
      tags: ["travel", "shopping"],
      desc1: [
        "The Tata Neu Infinity HDFC Bank Credit Card is a premium co-branded card designed for customers who frequently shop with Tata brands and use Tata Neu services. It charges ₹1,499 + GST for joining and renewal and offers 1,499 welcome NeuCoins after the cardholder completes at least one transaction within 30 days of issuance.",
        "Cardholders can earn up to 10% NeuCoins on eligible Tata Neu purchases, 5% on partner Tata brands, and 1.5% on eligible UPI spends. Additional benefits include complimentary airport lounge access, travel insurance, a fuel surcharge waiver, and a renewal fee waiver after ₹3 lakh in annual spending."
      ],
      charges: [
        {
          "Joining Fee": "₹1,499 + GST",
          "Renewal Fee": "₹1,499 + GST",
          "Spend-Based Waiver": "Renewal fee waived on annual spending of ₹3 lakh or more in the previous anniversary year",
          "Rewards Redemption Fee": "₹50 for cashback redemption",
          "Forex Markup": "2% of the foreign currency transaction amount",
          "Interest Rates": "3.75% per month (45% annually)",
          "Fuel Surcharge Waiver": "1% on fuel transactions between ₹400 and ₹5,000, capped at ₹500 per statement cycle",
          "Cash Advance Charges": "2.5% of the withdrawn amount or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "NeuCoins on Tata Neu Purchases",
          benifit: "Earn up to 10% NeuCoins on eligible Tata Neu app and website purchases, including the additional 5% NeuCoins available when NeuPass is activated. NeuCoins are valued at ₹1 each and can be redeemed against eligible Tata brands and services."
        },
        {
          title: "Rewards on Tata Partner Brands and UPI",
          benifit: "Earn 5% NeuCoins on eligible partner Tata brands such as Croma, Tata CLiQ, BigBasket, Tata 1mg, Westside, and cult.fit. Eligible UPI spends earn 1.5% NeuCoins, capped at 500 NeuCoins per calendar month."
        },
        {
          title: "Complimentary Airport Lounge Access",
          benifit: "Get 8 complimentary domestic lounge visits annually, limited to two per quarter and unlocked after spending ₹50,000 or more in a quarter. Receive four international lounge visits annually, with one visit per quarter, subject to applicable terms."
        },
        {
          title: "Welcome Rewards and Insurance",
          benifit: "Receive 1,499 welcome NeuCoins after completing a transaction within 30 days of issuance. Insurance benefits include ₹1 crore air accident cover, ₹15 lakh overseas emergency hospitalisation cover, and ₹9 lakh lost-card liability cover."
        }
      ],
      pros: [
        "Offers valuable rewards for Tata Neu users, including NeuCoins on Tata brand purchases, UPI rewards, complimentary domestic and international lounge access, travel insurance, a 2% forex markup, and a renewal fee waiver after ₹3 lakh in annual spending."
      ],
      cons: [
        "NeuCoins expire after one year, and the ₹1,499 + GST renewal fee waiver requires annual spending of ₹3 lakh or more.",
        "Rewards are excluded on transactions such as wallet reloads, fuel, rent, cash withdrawals, and EMI payments. UPI rewards are capped at 500 NeuCoins per calendar month, and lounge access has quarterly limits and spending conditions."
      ],
      desc2: [
        "The card earns 5 Reward Points per ₹150 spent on eligible retail transactions according to the source's introductory overview, while the detailed rewards section describes NeuCoins-based earning. Check the applicable card terms for the current reward structure.",
        "A 1% fuel surcharge waiver applies to eligible fuel transactions between ₹400 and ₹5,000, with a maximum waiver of ₹500 per statement cycle. Fuel purchases do not earn NeuCoins.",
        "The renewal fee is waived after annual spending of ₹3 lakh or more in the previous anniversary year. The card's stated interest rate is 3.75% monthly, equivalent to 45% annually.",
        "NeuCoins can be redeemed at eligible brands and services including BigBasket, Croma, Westside, Tata CLiQ, Tata 1mg, Qmin, Air India Express, and IHCL hotel bookings, at a stated value of ₹1 per NeuCoin."
      ],
      link:"https://applyonline.hdfc.bank.in/cards/credit-cards?CHANNELSOURCE=TDCC&DSACode=XATV&SMCode=R36990&LGCode=DGPI&LCCode=XATV&LC2=webtn#nbb"
    },
  
    // Credit Cards - HSBC
    { id: 20, name: "HSBC Live+", category: "credit card", company: "hsbc", image: i20, 
      tags: ["Travel", "Food", "Utility Bills"],
      desc1: [
        "The HSBC Live+ Credit Card is designed for everyday spending, offering cashback on groceries, dining, food delivery, shopping, and utility bills. New cardholders can earn ₹1,000 cashback by logging in to the HSBC India Mobile Banking app and spending ₹25,000 within the first 30 days.",
        "The card offers 10% cashback on dining, food delivery, groceries, shopping, and utility bills, capped at ₹1,200 per month. Most other eligible spends earn unlimited 1.5% cashback. Cashback is credited automatically, and the Visa Infinite variant also provides premium travel and lifestyle benefits."
      ],
      charges: [
        {
          "Joining Fee": "₹999 + GST",
          "Renewal Fee": "₹999 + GST",
          "Spend-Based Waiver": "Fee waiver on spends of ₹2 lakh or more",
          "Forex Markup": "1.99%",
          "Interest Rates": "3.75% per month",
          "Fuel Surcharge Waiver": "No waiver; 1% surcharge applies",
          "Cash Advance Charges": "2.5% (minimum ₹500)"
        }
      ],
      Benefits: [
        {
          title: "10% Cashback on Everyday Categories",
          benifit: "Earn 10% cashback on dining, food delivery, groceries, shopping, and utility bills, capped at ₹1,200 per month."
        },
        {
          title: "Unlimited 1.5% Cashback",
          benifit: "Receive unlimited 1.5% cashback on most other eligible spends, including Amazon, Flipkart, and Myntra purchases."
        },
        {
          title: "Welcome Rewards",
          benifit: "Earn ₹1,000 cashback after logging in to the HSBC India Mobile Banking app and spending ₹25,000 within the first 30 days. A limited-time Visa offer also provides a ₹750 voucher for Amazon Pay, Zomato, or Swiggy after a first transaction of ₹300 or more."
        },
        {
          title: "Airport Lounge Access",
          benifit: "Enjoy two complimentary domestic airport lounge visits per year, limited to one every six months, and one complimentary international lounge visit annually."
        }
      ],
      pros: [
        "Offers strong everyday cashback, automatic cashback credit, airport lounge access, Visa Infinite privileges, and dining benefits for an annual fee of ₹999 + GST."
      ],
      cons: [
        "Several spending categories are excluded from cashback, so rewards depend on the merchant category assigned to each transaction.",
        "International spends do not earn cashback, despite the relatively low 1.99% forex markup."
      ],
      desc2: [
        "Movie benefit: Buy one ticket and get the second ticket free, with a maximum discount of ₹200 on the second ticket.",
        "The ₹1,200 monthly cashback cap applies to the combined 10% cashback categories.",
        "Cashback is posted within 45 days after statement generation, with no reward redemption fee.",
        "The annual fee can be waived when eligible spending reaches ₹2 lakh or more."
      ],
      link:"https://www.accountopening.hsbc.bank.in/credit-cards-application/journey/cards?skip=true&card=CBC"
    },
    { id: 21, name: "HSBC Premier", category: "credit card", company: "hsbc", image: i21, 
      tags: ["Travel", "Shopping"],
      desc1: [
        "The HSBC Premier Metal Credit Card is an exclusive offering for HSBC Premier relationship customers in India. It provides 20,000 welcome Reward Points and earns rewards that can be redeemed for products, shopping vouchers, and airline or hotel loyalty programs.",
        "Cardholders earn 3 Reward Points per ₹100 spent and can earn up to 12X Reward Points through HSBC Marketplace bookings for hotels, flights, and car rentals. Additional benefits include complimentary airport lounge access, golf privileges, dining discounts, international travel insurance, and a low 0.99% forex markup."
      ],
      charges: [
        {
          "Joining Fee": "₹12,000 + GST",
          "Renewal Fee": "₹20,000 + GST (waived for Premier Banking customers)",
          "Forex Markup": "0.99%",
          "Interest Rates": "2.99% per month (35.88% annually)",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver",
          "Cash Advance Charges": "₹300 or 2.5% of the amount withdrawn, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Welcome Reward Points",
          benifit: "Receive 20,000 Reward Points as an introductory benefit. Points can be redeemed for eligible products, vouchers, and partner airline or hotel loyalty programs."
        },
        {
          title: "Reward Points on Spending",
          benifit: "Earn 3 Reward Points per ₹100 spent. Eligible spending in categories such as utilities, tax payments, jewellery, insurance, education, and government payments can earn points up to ₹1 lakh per month."
        },
        {
          title: "Complimentary Airport Lounge Access",
          benifit: "Enjoy unlimited domestic and international airport lounge access for primary and add-on cardholders, along with eight complimentary international lounge visits for guests."
        },
        {
          title: "Travel, Dining and Golf Privileges",
          benifit: "Access BookMyShow buy-one-get-one movie offers up to ₹750, EazyDiner discounts of 30% up to ₹1,250, international travel insurance, and up to 24 complimentary golf lessons as a Premier account benefit."
        }
      ],
      pros: [
        "Combines reward points, broad eligible spending categories, unlimited airport lounge access, travel insurance, dining discounts, and a low 0.99% forex markup for HSBC Premier customers."
      ],
      cons: [
        "Eligibility requires an HSBC Premier banking relationship, making the card inaccessible to many customers.",
        "The joining fee is ₹12,000 + GST, while the ₹20,000 + GST renewal fee is waived only for Premier Banking customers."
      ],
      desc2: [
        "Marketplace bookings for hotels, flights, and car rentals can earn up to 12X Reward Points through HSBC Marketplace.",
        "Reward Points do not expire and can be transferred to eligible airline and hotel loyalty programs.",
        "Imagine vouchers for Apple products can be redeemed at a 1:1 Reward Point ratio, according to the source.",
        "Reward earnings in specified categories are limited to spends of ₹1 lakh per month; usual exclusions include fuel and EMIs."
      ],
      link:""
    },
    { id: 22, name: "HSBC TravelOne", category: "credit card", company: "hsbc", image: i22, 
      tags: ["Travel", "Shopping"],
      desc1: [
        "The HSBC TravelOne Credit Card is a travel-focused premium card offering rewards on flights, travel platforms, international transactions, and other eligible spending. It has a joining and annual fee of ₹4,999 + GST, with reward points transferable to multiple airline and hotel loyalty programs.",
        "Earn 4 Reward Points per ₹100 spent on flights, travel platforms, and international transactions, and 2 Reward Points per ₹100 on other eligible spends. The card also offers airport lounge access, golf privileges, purchase protection, travel-platform discounts, and movie and dining offers. Its 3.5% forex markup can significantly reduce the value of rewards earned on international spending."
      ],
      charges: [
        {
          "Joining Fee": "₹4,999 + GST",
          "Renewal Fee": "₹4,999 + GST",
          "Spend-Based Waiver": "Annual fee waived on spends of ₹8 lakh each year",
          "Forex Markup": "3.5%",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "Maximum waiver of ₹250 per month",
          "Cash Advance Charges": "2.5% of transaction amount (minimum ₹500)"
        }
      ],
      Benefits: [
        {
          title: "Welcome Benefits",
          benifit: "Earn ₹1,000 cashback, a PostCard voucher worth ₹3,000, and a three-month EazyDiner Prime Membership after logging in to the HSBC India Mobile Banking app and spending ₹25,000 within the first 30 days of card issuance. The PostCard voucher is valid for guests staying at eligible PostCard hotels."
        },
        {
          title: "Travel Rewards",
          benifit: "Earn 4 Reward Points per ₹100 spent on flights, travel aggregators, and international transactions. Accelerated rewards are capped at 50,000 points per month, after which the regular reward rate applies."
        },
        {
          title: "Flexible Reward Redemption",
          benifit: "Transfer Reward Points to participating airline and hotel loyalty programs at a 1:1 ratio. The source lists 15 hotel partners and 5 airline partners."
        },
        {
          title: "Airport Lounge and Golf Access",
          benifit: "Enjoy six complimentary domestic airport lounge visits and four complimentary international lounge visits each year, along with four golf rounds and twelve golf lessons annually."
        }
      ],
      pros: [
        "Offers travel-focused rewards, transfers to multiple airline and hotel partners, airport lounge access, golf benefits, and lifestyle offers, with a potential annual fee waiver based on spending."
      ],
      cons: [
        "The ₹3,000 PostCard voucher is useful only for eligible stays at PostCard hotels, limiting its value for some cardholders.",
        "The 3.5% forex markup can offset the value of rewards earned on international transactions."
      ],
      desc2: [
        "Movie offers include buy-one-get-one deals with discounts of up to ₹200, available twice each month.",
        "Access dining and event discounts through District by Zomato and periodic travel offers on platforms such as Cleartrip, Yatra, and StayVista.",
        "Purchase protection is listed up to $20,000 each year.",
        "The base reward rate is 2 Reward Points per ₹100 on other eligible spends, with no reward cap specified for this base rate."
      ],
      link:"https://www.accountopening.hsbc.bank.in/credit-cards-application/journey/contact-details/MJY"
    },
  
    // Credit Cards - ICICI
    { id: 23, name: "Amazon Pay ICICI", category: "credit card", company: "icici", image: i23, 
      tags: ["Travel", "Shopping"],
      desc1: [
        "The Amazon Pay ICICI Credit Card is a lifetime-free cashback card designed primarily for Amazon shoppers. Cashback is credited directly to the Amazon Pay balance, making rewards simple to use without manual redemption. Amazon Prime members can earn up to 5% cashback on eligible Amazon purchases, while non-Prime members earn 3%.",
        "The card also provides cashback on eligible partner merchants and other retail transactions, along with discounts on dining and a fuel surcharge waiver. Welcome offers may include cashback and a one-month EazyDiner membership. The card has a 1.99% forex markup listed in the source, but international transactions are excluded from cashback."
      ],
      charges: [
        {
          "Joining Fee": "Lifetime Free",
          "Renewal Fee": "Lifetime Free",
          "Forex Markup": "1.99%",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver at fuel stations across India for transactions up to ₹4,000",
          "Cash Advance Charges": "2.5% of the withdrawn amount (minimum ₹500)"
        }
      ],
      Benefits: [
        {
          title: "Cashback on Amazon Purchases",
          benifit: "Earn unlimited 5% cashback on eligible Amazon purchases as a Prime member and 3% as a non-Prime member. Eligible Amazon flight and hotel bookings also earn 5% cashback for Prime members."
        },
        {
          title: "Cashback on Partner Merchants",
          benifit: "Earn 2% cashback at eligible partner merchants using Amazon Pay and 1% on other eligible retail transactions. Cashback exclusions apply to categories such as fuel, rent, international transactions, and EMI purchases."
        },
        {
          title: "Welcome Offers",
          benifit: "Eligible new cardholders may receive cashback and discounts worth up to ₹2,500, depending on Prime membership, along with a one-month EazyDiner membership. Individual offers have specific spending thresholds and conditions."
        },
        {
          title: "Dining Discounts",
          benifit: "Get a minimum 15% discount on dining bills at participating restaurants under ICICI Bank's Culinary Treats program. The source also mentions offers at more than 2,500 restaurants."
        }
      ],
      pros: [
        "A lifetime-free card with unlimited cashback on eligible Amazon purchases, automatic Amazon Pay balance credit, partner-merchant rewards, dining discounts, and a fuel surcharge waiver."
      ],
      cons: [
        "The card is most rewarding for Amazon shoppers; non-Prime members receive a lower cashback rate, and spending on other platforms may offer less value.",
        "There is no airport lounge access listed, and cashback is excluded on categories including fuel, rent, taxes, international transactions, education payments, precious metals, and EMI purchases."
      ],
      desc2: [
        "Cashback is automatically credited to the linked Amazon Pay balance at the end of each billing cycle and does not expire according to the source.",
        "Prime members can earn 2% cashback on eligible Amazon bill payments, recharges, gift cards, and e-books.",
        "The 1% fuel surcharge waiver applies at fuel stations across India for transactions not exceeding ₹4,000.",
        "The listed joining offers have specific eligibility conditions, minimum transaction values, and validity periods; check the current terms before applying."
      ],
      link:"https://buy.icici.bank.in/cap-v2/utm?iup=UCC00476&ius=IDPEDUCONST"
    },
    { id: 24, name: "ICICI Coral", category: "credit card", company: "icici", image: i24, 
      tags: ["Movies", "Dining"],
      desc1: [
        "The ICICI Bank Coral Credit Card is an entry-level card available on Visa, RuPay, Mastercard, and American Express networks. It offers Reward Points on eligible spending, milestone bonuses, movie ticket discounts, dining offers, and complimentary railway lounge access.",
        "Cardholders earn 2 Reward Points per ₹100 spent on most eligible transactions and 1 Reward Point per ₹100 on utility and insurance spends. Additional benefits include quarterly domestic airport lounge access subject to spending criteria, HPCL fuel surcharge waiver, and dining discounts through the ICICI Bank Culinary Treats programme."
      ],
      charges: [
        {
          "Joining Fee": "₹500 + GST",
          "Renewal Fee": "₹500 + GST",
          "Spend-Based Waiver": "Annual fee waiver on spends of ₹1.5 lakh or more",
          "Rewards Redemption Fee": "₹99 + GST",
          "Forex Markup": "3.5% of the transaction amount",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver at HPCL petrol stations for transactions up to ₹4,000",
          "Cash Advance Charges": "2.5% of the amount withdrawn or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Reward Points and Milestone Bonuses",
          benifit: "Earn 2 Reward Points per ₹100 on most eligible spends and 1 point per ₹100 on utility and insurance payments. Receive 2,000 bonus points on spending ₹2 lakh and additional bonus points for incremental spending, up to 10,000 bonus points annually."
        },
        {
          title: "Movie Ticket Discounts",
          benifit: "Get 25% off movie tickets on BookMyShow and INOX, up to ₹100. The offer requires a minimum booking of two tickets and can be used twice per month, subject to availability and applicable terms."
        },
        {
          title: "Airport and Railway Lounge Access",
          benifit: "Enjoy one complimentary railway lounge visit every quarter. One domestic airport lounge visit per quarter is also available, subject to spending ₹75,000 in the previous calendar quarter."
        },
        {
          title: "Dining and Fuel Benefits",
          benifit: "Access dining discounts of 15% or more at participating restaurants through ICICI Bank's Culinary Treats programme. Receive a 1% fuel surcharge waiver at HPCL petrol stations for transactions up to ₹4,000."
        }
      ],
      pros: [
        "Provides movie discounts, dining offers, milestone reward points, railway lounge access, and UPI payment support with the RuPay variant, for a relatively low annual fee."
      ],
      cons: [
        "The card has a modest base reward value, with each Reward Point worth ₹0.25 according to the source.",
        "Airport lounge access requires qualifying quarterly spending, and the paid card does not offer standard joining benefits."
      ],
      desc2: [
        "Reward Points can be redeemed for cash or gifts, with a stated value of ₹0.25 per point and a redemption fee of ₹99 + GST.",
        "The annual renewal fee can be waived after spending ₹1.5 lakh or more in the previous year.",
        "The RuPay variant can be linked to UPI for eligible payments.",
        "The source lists personal accident cover of ₹2 lakh for the RuPay variant; insurance availability depends on the applicable card terms."
      ],
      link:"https://buy.icici.bank.in/cap-v2/getting-started"
    },
    { id: 25, name: "ICICI Emeralde Private Metal", category: "credit card", company: "icici", image: i25, 
      tags: ["Travel", "Shopping"],
      desc1: [
        "The ICICI Bank Emeralde Private Metal Credit Card is a super-premium metal card offering exclusive travel and lifestyle benefits. Its welcome package includes a one-year Taj Epicure membership with a complimentary night stay, EazyDiner Prime membership, and 12,500 bonus Reward Points.",
        "Earn 6 Reward Points per ₹200 spent on eligible transactions, equivalent to a 3% reward rate according to the source. Other privileges include unlimited domestic and international airport lounge access, complimentary golf, BookMyShow movie offers, EaseMyTrip travel vouchers on milestone spending, travel insurance, and a 2% forex markup."
      ],
      charges: [
        {
          "Joining Fee": "₹12,499 + GST",
          "Renewal Fee": "₹12,499 + GST",
          "Spend-Based Waiver": "Renewal fee waived on spending ₹10 lakh or more during the card anniversary year",
          "Forex Markup": "2%",
          "Interest Rates": "3.75% per month",
          "Fuel Surcharge Waiver": "1% waiver on fuel transactions up to ₹4,000; maximum waiver of ₹1,000 per statement cycle",
        }
      ],
      Benefits: [
        {
          title: "Premium Welcome Benefits",
          benifit: "Receive 12,500 bonus Reward Points, a one-year Taj Epicure membership with a complimentary one-night stay, and a complimentary EazyDiner Prime membership. EazyDiner Prime membership is renewed with the card membership according to the source."
        },
        {
          title: "Reward Points and Travel Vouchers",
          benifit: "Earn 6 Reward Points per ₹200 on eligible spending. Receive complimentary EaseMyTrip air travel vouchers worth ₹6,000 as a milestone benefit, subject to the applicable conditions."
        },
        {
          title: "Unlimited Airport Lounge Access",
          benifit: "Enjoy unlimited complimentary domestic and international airport lounge access, including international access through Priority Pass for primary and add-on cardholders."
        },
        {
          title: "Golf, Movies and Booking Protection",
          benifit: "Get complimentary golf games at participating courses worldwide and BookMyShow buy-one-get-one movie offers up to ₹750, twice each month. The card also offers cancellation-charge protection on eligible air travel, hotel, and movie bookings up to ₹12,000."
        }
      ],
      pros: [
        "Offers a 3% stated reward rate, unlimited domestic and international lounge access for primary and add-on cardholders, premium hotel and dining memberships, golf privileges, and travel-related benefits."
      ],
      cons: [
        "The joining and renewal fees are high at ₹12,499 + GST each, so the card is most suitable for customers who can use its premium benefits.",
        "The milestone travel vouchers are tied to EaseMyTrip, which may be less appealing to customers who prefer other travel-booking platforms."
      ],
      desc2: [
        "The Taj Epicure membership includes eligible discounts on dining, takeaway, Qmin orders, spa services, and selected hotel stays.",
        "EazyDiner Prime offers restaurant discounts in India and Dubai, along with selected birthday or anniversary treats and bonus Eazypoints.",
        "Reward Points are not awarded on fuel, tax, government, and rent payments. Points for transactions converted into EMIs are reversed.",
        "The renewal fee waiver requires spending ₹10 lakh or more during the card anniversary year."
      ],
      link:""
    },
    { id: 26, name: "ICICI Platinum Chip", category: "credit card", company: "icici", image: i26, 
      tags: ["Dining", "Shopping"],
      desc1: [
        "The ICICI Bank Platinum Chip Credit Card is a lifetime-free entry-level card that offers Reward Points on retail purchases, utilities, and insurance payments. Cardholders can redeem accumulated points for options including statement credit and gifts.",
        "The card provides dining discounts of up to 15% at participating restaurants through the ICICI Bank Culinary Treats programme. Additional benefits include a 1% fuel surcharge waiver at HPCL petrol stations and a simple rewards structure for everyday spending."
      ],
      charges: [
        {
          "Joining Fee": "Lifetime Free",
          "Renewal Fee": "Lifetime Free",
          "Rewards Redemption Fee": "₹99 + GST per redemption request",
          "Forex Markup": "3.5%",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver at HPCL fuel stations for transactions up to ₹4,000",
          "Cash Advance Charges": "2.5% of the amount withdrawn or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Reward Points on Retail Purchases",
          benifit: "Earn 2 Reward Points for every ₹100 spent on eligible retail purchases. Each Reward Point is valued at ₹0.25 according to the source."
        },
        {
          title: "Rewards on Utility and Insurance Bills",
          benifit: "Earn 1 Reward Point for every ₹100 spent on eligible utility and insurance transactions."
        },
        {
          title: "Dining Discounts",
          benifit: "Get up to 15% off dining bills at more than 2,500 participating restaurants through ICICI Bank's Culinary Treats programme."
        },
        {
          title: "HPCL Fuel Surcharge Waiver",
          benifit: "Receive a 1% fuel surcharge waiver at HPCL petrol stations for eligible transactions up to ₹4,000."
        }
      ],
      pros: [
        "A lifetime-free card offering everyday reward points, dining discounts, and an HPCL fuel surcharge waiver without an annual fee."
      ],
      cons: [
        "The reward value is relatively modest at ₹0.25 per point, and redemption requests incur a ₹99 + GST fee.",
        "The card has a 3.5% forex markup and does not list airport lounge access or dedicated travel benefits."
      ],
      desc2: [
        "Reward Points can be redeemed against cashback or gifts through the bank's designated customer care channels.",
        "The card's interest rate is listed as 3.75% per month, equivalent to 45% per annum.",
        "The primary applicant must be at least 21 years old, while add-on applicants must be over 18, according to the source.",
        "Applicants are expected to have a stable source of income and a decent credit score; identity, address, and income documents may be required."
      ],
      link:"https://buy.icici.bank.in/cap-v2/getting-started"
    },
    { id: 27, name: "ICICI Sapphiro", category: "credit card", company: "icici", image: i27, 
      tags: ["Travel", "Shopping"],
      desc1: [
        "The ICICI Bank Sapphiro Credit Card is a premium card offering travel, entertainment, shopping, and lifestyle privileges. It is available in American Express, Visa, RuPay, and Mastercard variants and is suited to frequent travelers and users seeking savings across everyday spending.",
        "The card offers welcome vouchers worth over ₹13,000 across brands such as Tata CliQ, EaseMyTrip, Uber, and Croma, along with reward points on eligible purchases, airport lounge access, movie offers, golf privileges, and insurance benefits."
      ],
      charges: [
        {
          "Joining Fee": "₹6,500 + GST",
          "Renewal Fee": "₹3,500 + GST",
          "Spend-Based Waiver": "Renewal fee waived on spending ₹6 lakh annually",
          "Rewards Redemption Fee": "₹99 + GST",
          "Forex Markup": "3.5%",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver, up to ₹250 per billing cycle",
          "Cash Advance Charges": "2.5% of the transaction amount, minimum ₹500"
        }
      ],
      Benefits: [
        {
          title: "Welcome Vouchers Worth Over ₹13,000",
          benifit: "Receive joining vouchers or memberships from brands including Tata CliQ, Croma, EaseMyTrip, Uber, and Da Milano. The source lists individual voucher values of ₹3,000, ₹1,500, ₹4,000, ₹1,000, and ₹5,000 respectively; eligibility and fulfilment conditions may apply."
        },
        {
          title: "Reward Points and Milestone Rewards",
          benifit: "Earn 4 Reward Points per ₹100 on international purchases and 2 points per ₹100 on domestic purchases, excluding fuel. Eligible utility and insurance spends earn 1 point per ₹100. Milestone rewards include 4,000 points after ₹4 lakh in anniversary-year spending and 2,000 additional points for each subsequent ₹1 lakh spent, capped at 20,000 points annually."
        },
        {
          title: "Domestic and International Airport Lounge Access",
          benifit: "Get four complimentary domestic lounge visits per quarter, subject to spending ₹75,000 in the preceding quarter. The card also provides two complimentary international lounge visits annually through Priority Pass. These complimentary international visits apply to the primary cardholder; accompanying guests are chargeable."
        },
        {
          title: "Movie, Golf, and Insurance Privileges",
          benifit: "Enjoy a Buy One Get One movie ticket offer through BookMyShow up to twice a month, with the complimentary ticket priced below ₹500. Eligible cardholders can access up to four complimentary golf rounds or lessons per quarter, subject to spending and registration conditions. Insurance benefits include personal air accident cover of ₹3 crore and various travel-related covers."
        }
      ],
      pros: [
        "Strong lifestyle and travel package combining welcome vouchers, milestone rewards, domestic and international lounge access, movie offers, golf privileges, concierge assistance, and travel insurance."
      ],
      cons: [
        "The ₹6,500 + GST joining fee and 3.5% forex markup may reduce value for users who do not frequently use the card's premium benefits.",
        "Several benefits have conditions, including quarterly spending requirements for lounge and golf access, limits on complimentary visits, and a minimum annual spend for the renewal fee waiver."
      ],
      desc2: [
        "Reward redemption value is listed as ₹0.25 per Reward Point, with a redemption fee of ₹99 + GST.",
        "The card offers 24×7 concierge assistance for flight and hotel reservations, restaurant bookings, flowers and gifts, movie tickets, and medical concierge services.",
        "Travel insurance coverage listed includes baggage insurance up to ₹25,000, checked-in baggage loss cover of USD 1,200, and specified cover for flight delays and lost travel documents, subject to policy terms.",
        "A 1% fuel surcharge waiver is available up to ₹250 per billing cycle. Cash advances attract a charge of 2.5% of the transaction amount, with a minimum charge of ₹500."
      ],
      link:"https://buy.icici.bank.in/cap-v2/getting-started"
    },
    { id: 28, name: "ICICI Times Black", category: "credit card", company: "icici", image: i28, 
      tags: ["Travel", "Shopping"],
      desc1: [
        "The Times Black ICICI Credit Card is a premium metal card developed through a collaboration between ICICI Bank, Times Internet Limited, and Visa. With a ₹20,000 joining fee and annual renewal fee, it offers luxury travel, shopping, dining, entertainment, and lifestyle privileges for high-income individuals with substantial spending habits.",
        "The card provides welcome benefits worth over ₹20,000, including an EaseMyTrip hotel voucher, visa-related services through OneVasco and Atlys, a Toni & Guy voucher, Interflora gift cards, and Zomato Gold membership. Other highlights include accelerated reward points, unlimited airport lounge access, luxury airport transfers, concierge services, and exclusive event privileges."
      ],
      charges: [
        {
          "Joining Fee": "₹20,000 + GST",
          "Renewal Fee": "₹20,000 + GST",
          "Spend-Based Waiver": "Annual fee waived on spending ₹25 lakh in a year",
          "Forex Markup": "1.49%",
          "Interest Rates": "3.75% per month",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver, up to ₹1,000 per statement cycle",
        }
      ],
      Benefits: [
        {
          title: "Luxury Welcome Vouchers and Memberships",
          benifit: "Receive welcome benefits after the joining fee is paid during the first billing cycle. These include a ₹10,000 EaseMyTrip luxury stay voucher, ₹10,000 worth of visa-related services through OneVasco and Atlys, a ₹3,000 Toni & Guy voucher, ₹1,000 in Interflora gift cards, and a complimentary annual Zomato Gold membership."
        },
        {
          title: "Accelerated Rewards on Domestic and International Spending",
          benifit: "Earn 2 Reward Points per ₹100 on domestic transactions and 2.5% in Reward Points on international spending, according to the source. The card also offers up to 15,000 bonus Reward Points through the iShop portal. Utility, tax, insurance, government, and education spending has a combined monthly rewards cap of 5,000 points, while fuel and rent transactions do not earn Reward Points."
        },
        {
          title: "Unlimited Airport Lounge Access and Luxury Travel",
          benifit: "Enjoy complimentary domestic and international airport lounge access, 24/7 domestic and international concierge services, and luxury airport transfer privileges. The card also offers up to 35% discounts on luxury and chauffeur-driven rental cars through Avis. Some transfer benefits may be location-specific."
        },
        {
          title: "Exclusive Dining, Entertainment, and Lifestyle Privileges",
          benifit: "Access exclusive events and networking opportunities at The Quorum Club without holding a separate membership, along with a 20% dining discount at select participating restaurants. Zomato Gold provides dining and delivery privileges, while the card's premium lifestyle benefits are designed for frequent travelers and high spenders."
        }
      ],
      pros: [
        "Offers a premium lifestyle package with substantial welcome vouchers, 2% domestic and 2.5% international rewards, unlimited airport lounge access, concierge services, luxury travel privileges, and exclusive dining and event benefits."
      ],
      cons: [
        "The ₹20,000 joining and annual fees are high, and the annual fee waiver requires ₹25 lakh in yearly spending.",
        "The 1.49% forex markup reduces the effective value of international rewards, while some luxury transfer and other premium benefits may have location or eligibility restrictions."
      ],
      desc2: [
        "The milestone program awards 4,000 Reward Points after ₹4 lakh in anniversary-year spending, followed by 2,000 points for every additional ₹1 lakh spent, up to 20,000 points per year.",
        "The card includes a 1% fuel surcharge waiver up to ₹1,000 per statement cycle, but fuel transactions do not earn Reward Points.",
        "The source lists complimentary airport transfers and premium Avis rental-car discounts, alongside 24/7 concierge assistance for travel arrangements and lifestyle requests.",
        "International spending earns a stated 2.5% in Reward Points, but the 1.49% forex markup reduces the net benefit. Reward redemption options include air miles, cash, and other available choices."
      ],
      link:""
    },
    { id: 29, name: "MakeMyTrip ICICI Signature", category: "credit card", company: "icici", image: i29, 
      tags: ["Travel", "Shopping"],
      desc1: [
        "The MakeMyTrip ICICI Bank Signature Credit Card is a co-branded travel card specifically designed for frequent leisure travelers and holiday goers. It blends MakeMyTrip ecosystem benefits with ICICI Bank privileges, earning rewards in the form of 'MyCash' that can be directly redeemed against flight, hotel, and holiday package bookings on MakeMyTrip.",
        "Cardholders enjoy generous welcome perks, complimentary MMTBLACK tier membership, airport and railway lounge access, movie discounts, and accelerated MyCash earnings on hotel and flight reservations made through the MakeMyTrip platform."
      ],
      charges: [
        {
          "Joining Fee": "₹2,500 + GST",
          "Renewal Fee": "Lifetime Free",
          "Forex Markup": "3.50% of the transaction amount",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for eligible transactions",
          "Cash Advance Charges": "2.5% of the withdrawn amount or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Generous Welcome Travel Perks",
          benifit: "Receive ₹1,500 MyCash credited to your MakeMyTrip wallet, a ₹2,500 MakeMyTrip Holiday Voucher, and a complimentary MMTBLACK Exclusive/Platinum tier membership upon payment of the joining fee."
        },
        {
          title: "Accelerated MyCash Rewards",
          benifit: "Earn ₹4 MyCash per ₹200 spent on MakeMyTrip hotel and holiday bookings, ₹2 MyCash per ₹200 on MakeMyTrip flight bookings, ₹1.25 MyCash per ₹200 on general domestic spends, and ₹1.50 MyCash per ₹200 on international spends."
        },
        {
          title: "Airport & Railway Lounge Access",
          benifit: "Enjoy 2 complimentary domestic airport lounge visits per quarter, 1 complimentary international airport lounge access visit per year, and 1 complimentary railway lounge access visit per quarter."
        },
        {
          title: "Entertainment & Dining Offers",
          benifit: "Get 25% off up to ₹150 on BookMyShow and INOX movie ticket bookings twice a month, along with dining discounts under ICICI Bank's Culinary Treats program."
        }
      ],
      pros: [
        "Delivers exceptional initial value through ₹4,000 worth of welcome MyCash and holiday vouchers alongside lifetime-free renewal after the one-time joining fee."
      ],
      cons: [
        "MyCash rewards earned on this card variant are strictly tied to the MakeMyTrip platform and expire within 12 months of credit.",
        "Carries a standard foreign currency markup of 3.50%, making it less rewarding for direct international spending."
      ],
      desc2: [
        "MyCash earned on transactions is automatically credited to the primary cardholder's linked MakeMyTrip account.",
        "One MyCash point is equivalent to ₹1 and can be fully utilized without restrictions on eligible MakeMyTrip bookings.",
        "The card has no annual renewal fee from the second year onwards, making it a lifetime-free hold after paying the one-time joining fee.",
        "Exclusions apply for earning MyCash on fuel, wallet loads, and EMI conversion transactions."
      ],
      link: "https://www.icici.bank.in/personal-banking/cards/credit-card/makemytrip/signature-credit-card"
    },
    { id: 30, name: "ICICI Rubyx", category: "credit card", company: "icici", image: i30, 
      tags: ["Travel", "Shopping"],
      desc1: [
        "The ICICI Bank Rubyx Credit Card is a sub-premium card available in Visa, RuPay, Mastercard, and American Express variants. With a joining fee of ₹3,000, it offers travel and shopping vouchers worth ₹5,000 or more, reward points on eligible domestic and international purchases, and lifestyle privileges.",
        "The card provides dining discounts, movie ticket offers, domestic airport and railway lounge access, golf benefits, and travel insurance. Cardholders can also receive a renewal fee waiver by spending ₹3 lakh or more in the previous year."
      ],
      charges: [
        {
          "Joining Fee": "₹3,000 + GST",
          "Renewal Fee": "₹2,000 + GST",
          "Spend-Based Waiver": "Renewal fee waived on spending ₹3 lakh or more in the previous year",
          "Rewards Redemption Fee": "₹99 + GST",
          "Forex Markup": "3.5%",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% waiver on eligible fuel transactions between ₹400 and ₹4,000",
          "Cash Advance Charges": "Higher of ₹500 or 2.5% of the amount withdrawn"
        }
      ],
      Benefits: [
        {
          title: "Welcome Vouchers and EazyDiner Prime Membership",
          benifit: "Receive travel and shopping vouchers worth ₹5,000 or more, including a ₹2,000 Tata CLiQ voucher, ₹2,000 EaseMyTrip vouchers, and a ₹1,000 Croma voucher. The card also offers a complimentary three-month EazyDiner Prime membership, subject to the applicable activation and validity terms."
        },
        {
          title: "Reward Points and Milestone Benefits",
          benifit: "Earn 4 Reward Points per ₹100 on international purchases, 2 points per ₹100 on domestic purchases, and 1 point per ₹100 on eligible utility and insurance spending. Milestone benefits include 3,000 points after ₹3 lakh in anniversary-year spending and 1,500 points for every subsequent ₹1 lakh spent, up to 15,000 additional points annually. Each point is valued at ₹0.25 for redemption."
        },
        {
          title: "Domestic Airport and Railway Lounge Access",
          benifit: "Get two complimentary domestic airport lounge visits per quarter after spending ₹75,000 in the preceding quarter. The card also provides two complimentary railway lounge visits per quarter for the primary cardholder at participating stations."
        },
        {
          title: "Movie, Golf, Dining, and Insurance Benefits",
          benifit: "Enjoy a 25% discount of up to ₹150 on eligible BookMyShow or INOX movie bookings, twice a month, subject to variant-specific terms. Eligible spending can unlock up to two complimentary golf rounds or lessons per month. Additional privileges include dining offers, 24×7 i-Assist concierge services, personal air accident cover of ₹1 crore, and other travel-related insurance."
        }
      ],
      pros: [
        "Offers a broad range of lifestyle benefits, including welcome vouchers, domestic lounge access, railway lounge visits, milestone rewards, movie discounts, golf privileges, concierge services, and insurance coverage."
      ],
      cons: [
        "The 3.5% forex markup is high relative to the stated international reward rate, reducing the value of rewards earned on foreign-currency transactions.",
        "Domestic airport lounge access requires ₹75,000 in spending during the preceding quarter, and the ₹3 lakh annual spending threshold for the renewal fee waiver may be difficult for some cardholders to reach."
      ],
      desc2: [
        "The card offers a 1% fuel surcharge waiver on eligible fuel transactions, subject to the stated transaction limits and applicable terms.",
        "The 24×7 i-Assist concierge service can help with hotel and flight bookings, movie tickets, restaurant reservations, car rentals, gift delivery, medical concierge services, and emergency auto assistance.",
        "The card includes personal air accident insurance cover worth ₹1 crore and lost-card liability protection worth ₹50,000, along with other travel-related insurance benefits.",
        "Golf benefits are linked to spending: the source states one complimentary round or lesson for every ₹50,000 spent in the previous month, capped at two rounds or lessons per month."
      ],
      link:"https://buy.icici.bank.in/cap-v2/getting-started"
    },
  
    // Credit Cards - SBI
    { id: 31, name: "Cashback SBI Card", category: "credit card", company: "sbi", image: i31, 
      tags: ["Shopping", "Food"],
      desc1: [
        "The SBI Cashback Credit Card is a cashback-focused card designed for straightforward savings on eligible online and offline purchases. It charges a joining fee of ₹999 and an annual renewal fee of ₹999, which can be waived by spending ₹2 lakh or more in the previous year.",
        "The card offers 5% cashback on eligible online spending and 1% on eligible offline spending. Cashback is automatically credited to the card statement, eliminating the need to redeem reward points manually. It also includes a fuel surcharge waiver, although several spending categories are excluded from cashback."
      ],
      charges: [
        {
          "Joining Fee": "₹999 + GST",
          "Renewal Fee": "₹999 + GST",
          "Spend-Based Waiver": "Annual fee waived on spending ₹2 lakh or more in the previous year",
          "Rewards Redemption Fee": "N/A",
          "Forex Markup": "3.5% + GST",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% waiver on fuel transactions between ₹500 and ₹3,000 at petrol pumps across India, capped at ₹100 per statement cycle",
          "Cash Advance Charges": "2.5% of the amount withdrawn or a minimum of ₹500"
        }
      ],
      Benefits: [
        {
          title: "5% Cashback on Eligible Online Purchases",
          benifit: "Earn 5% cashback on eligible online transactions, capped at ₹2,000 per statement cycle. Cashback exclusions apply to certain categories, including jewellery, rentals, wallets, fuel, education, insurance, utilities, railways, tolls, government transactions, and digital gaming."
        },
        {
          title: "1% Cashback on Eligible Offline Purchases",
          benifit: "Earn 1% cashback on eligible offline transactions, capped at ₹2,000 per statement cycle. Under the stated cashback structure, the maximum combined cashback is ₹4,000 per statement cycle across online and offline spending."
        },
        {
          title: "Automatic Cashback Credit",
          benifit: "Cashback is automatically credited to the card statement, with the source stating that the credit generally occurs within two days after the following statement is generated. No manual reward-point redemption is required."
        },
        {
          title: "Annual Fee Waiver and Fuel Surcharge Relief",
          benifit: "The ₹999 annual fee can be waived by spending ₹2 lakh or more in the previous year. Eligible fuel transactions between ₹500 and ₹3,000 qualify for a 1% fuel surcharge waiver, capped at ₹100 per statement cycle."
        }
      ],
      pros: [
        "Simple, automatic cashback with a strong 5% online rate, additional 1% cashback on eligible offline spending, a combined monthly statement-cycle cap of ₹4,000, and an achievable annual fee waiver for regular spenders."
      ],
      cons: [
        "Many categories, including fuel, rent, utilities, insurance, education, and government transactions, are excluded from cashback, which can make the fee waiver harder to achieve for some users.",
        "The 3.5% + GST forex markup is relatively high, and the card does not provide the travel, lounge, or movie benefits commonly associated with premium lifestyle cards."
      ],
      desc2: [
        "The card does not offer a stated welcome benefit, dedicated movie or dining privileges, golf benefits, airport lounge access, or insurance benefits in the source's benefits summary.",
        "Fuel transactions are excluded from cashback even though eligible fuel purchases can receive a separate surcharge waiver.",
        "The cashback structure described in the source applies from 1 April 2026, with separate ₹2,000 caps for eligible online and offline spending per statement cycle.",
        "The card is primarily suited to users who make frequent eligible online purchases and prefer statement-credit cashback over reward points or voucher redemption."
      ],
      link:"https://www.sbicard.com/sprint/cashback"
    },
    { id: 32, name: "Club Vistara SBI", category: "credit card", company: "sbi", image: i32, 
      tags: ["Travel", "Air Miles"],
      desc1: [
        "The Club Vistara SBI Card PRIME is a co-branded travel credit card designed for frequent flyers seeking premium travel privileges, accelerated reward earnings, and tier status upgrades within the Club Vistara ecosystem. It converts everyday spends into Club Vistara (CV) Points, which can be redeemed for Vistara flight bookings and cabin upgrades.",
        "Cardholders receive a complimentary Vistara Premium Economy class ticket voucher upon joining, along with additional flight ticket vouchers on achieving tier-based spend milestones, domestic and international airport lounge access, and complimentary hotel and golf privileges."
      ],
      charges: [
        {
          "Joining Fee": "₹2,999 + GST",
          "Renewal Fee": "₹2,999 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Interest Rates": "3.50% per month (42% per annum)",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for transactions between ₹500 and ₹3,000 across all petrol pumps (up to ₹100 per cycle)",
          "Cash Advance Charges": "2.5% of the withdrawn amount or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Welcome Flight Voucher & Silver Tier",
          benifit: "Receive 1 complimentary Premium Economy Class Ticket Voucher as a welcome benefit upon payment of the annual fee, along with complimentary Club Vistara Silver Tier membership and 1 Class Upgrade voucher."
        },
        {
          title: "Accelerated CV Points Earnings",
          benifit: "Earn 4 Club Vistara Points for every ₹200 spent on all eligible transactions, allowing fast accumulation of points for flight redemptions."
        },
        {
          title: "Tiered Spend Milestone Vouchers",
          benifit: "Unlock up to 4 additional Premium Economy Class Ticket Vouchers upon reaching annual spending milestones of ₹75,000, ₹1.5 Lakhs, ₹3 Lakhs, and ₹4.5 Lakhs. Get a Yatra Hotel e-Voucher worth ₹10,000 on annual spends of ₹8 Lakhs."
        },
        {
          title: "Airport Lounge Access & Golf Perks",
          benifit: "Enjoy 8 complimentary domestic airport lounge visits per year (max 2 per quarter) and 4 complimentary international airport lounge visits per year via Priority Pass (max 2 per quarter), along with complimentary golf rounds and lessons."
        }
      ],
      pros: [
        "Delivers exceptional travel value with multiple complimentary Premium Economy flight ticket vouchers achievable across modest annual spend milestones."
      ],
      cons: [
        "The utility of the card's co-branded reward ecosystem and ticket vouchers is dependent on route networks and ongoing airline integration terms.",
        "Excludes key categories such as fuel, wallet loads, rent, and EMI transactions from earning Club Vistara Points."
      ],
      desc2: [
        "Club Vistara Points earned on transactions are automatically credited to the linked Club Vistara account at the end of each statement cycle.",
        "Milestone ticket vouchers cover the base airfare; government taxes, fees, and surcharges must be paid separately during redemption.",
        "Complimentary Priority Pass membership is issued upon requesting, providing access to partner international airport lounges.",
        "Cardholders also get comprehensive insurance coverage for baggage loss, air accident coverage, and flight delay protection."
      ],
      link: "https://www.sbicard.com/en/personal/credit-cards/travel/club-vistara-sbi-card-prime.page"
    },
    { id: 33, name: "SBI Aurum", category: "credit card", company: "sbi", image: i33, 
      tags: ["Movies", "Travel", "Dining", "Shopping"],
      desc1: [
        "The SBI Aurum Credit Card is a super-premium metallic credit card designed for high-spending customers. It competes with premium offerings such as HDFC Infinia, ICICI Emeralde Private, and American Express Platinum Charge, providing rewards, travel privileges, entertainment offers, and exclusive lifestyle benefits.",
        "The card charges a joining and annual renewal fee of ₹9,999 + GST, with the annual fee waived on spending ₹12 lakh in a year. Welcome benefits include 40,000 Reward Points and complimentary memberships of Club Marriott, The Wall Street Journal, and Mint, alongside access to premium vouchers and services through spending milestones."
      ],
      charges: [
        {
          "Joining Fee": "₹9,999 + GST",
          "Renewal Fee": "₹9,999 + GST",
          "Spend-Based Waiver": "Annual membership fee waived on annual spending of ₹12,00,000",
          "Rewards Redemption Fee": "₹99 + applicable taxes per redemption request",
          "Forex Markup": "1.99% of the transaction amount",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver at fuel stations across India",
          "Cash Advance Charges": "2.5% of the withdrawn amount, subject to a minimum charge of ₹500"
        }
      ],
      Benefits: [
        {
          title: "40,000 Welcome Reward Points and Premium Memberships",
          benifit: "Receive 40,000 Reward Points worth ₹10,000, along with complimentary one-year memberships of Club Marriott, The Wall Street Journal, and Mint. The card also includes one-year access to the Angel Investor Network through Inflection Point Venture, according to the source."
        },
        {
          title: "Reward Points and High-Spend Milestone Vouchers",
          benifit: "Earn 4 Reward Points per ₹100 spent, with 4 points valued at ₹1. Spending milestones unlock additional vouchers: a ₹5,000 Tata CLiQ Luxury voucher at ₹5 lakh annual spending, a ₹10,000 Taj voucher at ₹10 lakh, and Apple vouchers worth ₹20,000 at ₹20 lakh. The source also lists a ₹1,500 Tata CLiQ voucher for monthly spending of ₹1 lakh."
        },
        {
          title: "Airport Lounge Access and Golf Privileges",
          benifit: "Enjoy four complimentary domestic airport lounge visits per quarter for primary and add-on cardholders, plus unlimited international lounge access. One complimentary international lounge guest visit per quarter is also listed. Golf benefits include 16 complimentary rounds and 12 complimentary golf lessons per calendar year, with complimentary spa access at select airports."
        },
        {
          title: "Movies, Dining, and Dedicated Concierge",
          benifit: "Get four complimentary BookMyShow movie tickets every month, with each ticket capped at ₹250 and booking restrictions applying. Receive a 15% discount of up to ₹750 on District by Zomato orders above ₹4,000. A dedicated 24×7 concierge can assist with travel bookings, hotel reservations, and gift deliveries, while secretarial access allows an assistant to manage the card account on the cardholder's behalf."
        }
      ],
      pros: [
        "Provides substantial welcome rewards and memberships, generous airport lounge access, regular movie tickets, extensive golf privileges, milestone vouchers, travel insurance, and dedicated concierge services."
      ],
      cons: [
        "The ₹9,999 + GST annual fee is substantial, and the renewal fee waiver requires ₹12 lakh in annual spending.",
        "The base reward rate is approximately 1%, and some premium benefits are subject to restrictions, booking limits, spending milestones, or redemption fees."
      ],
      desc2: [
        "Travel insurance includes ₹1 lakh coverage for flight delays and loss of goods or baggage during travel, along with lost-card and fraud protection of ₹10 lakh, subject to policy terms.",
        "Flight cancellation benefits are listed at ₹3,500 per refundable ticket and ₹3,000 per non-refundable ticket, up to twice per year; taxes and convenience charges are excluded from the refund.",
        "The source lists a 1.99% forex markup and a 1% fuel surcharge waiver. Reward points can be redeemed for gift vouchers, flights, hotel reservations, and transfers to eligible airline or hotel loyalty programs.",
        "Movie bookings are limited to two tickets per booking, with a 24-hour cooling period before another booking. International lounge access includes a complimentary DreamFolks membership, according to the source."
      ],
      link:""
    },
    { id: 34, name: "SBI BPCL Octane", category: "credit card", company: "sbi", image: i34, 
      tags: ["Travel", "Fuel", "Food"],
      desc1: [
        "The BPCL SBI Card OCTANE is an upgraded fuel-focused credit card designed for customers who frequently purchase fuel at Bharat Petroleum (BPCL) stations. With a joining and annual renewal fee of ₹1,499 + GST, it offers accelerated fuel rewards, additional points on dining and movie tickets, and complimentary domestic airport lounge access.",
        "The card provides 25 Reward Points per ₹100 spent at BPCL fuel stations, 10 points per ₹100 on eligible dining, departmental store, and movie ticket purchases, and 1 point per ₹100 on other eligible retail spending. Additional benefits include welcome reward points, milestone vouchers, a fuel surcharge waiver, and a renewal fee waiver based on annual spending."
      ],
      charges: [
        {
          "Joining Fee": "₹1,499 + GST",
          "Renewal Fee": "₹1,499 + GST",
          "Spend-Based Waiver": "Next year's renewal fee waived on annual spending of ₹2 lakh",
          "Rewards Redemption Fee": "₹99 + applicable taxes per redemption request",
          "Forex Markup": "3.5% of the transaction amount",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% waiver on eligible fuel transactions up to ₹4,000, capped at ₹100 per month",
          "Cash Advance Charges": "2.5% of the withdrawn amount, subject to a minimum charge of ₹500"
        }
      ],
      Benefits: [
        {
          title: "Welcome Reward Points Worth ₹1,500",
          benifit: "Receive 6,000 bonus Reward Points worth ₹1,500 when the membership fee is paid and realized. The source states that this welcome benefit is also available on renewal when the membership fee is paid rather than waived."
        },
        {
          title: "Accelerated Rewards on BPCL Fuel Purchases",
          benifit: "Earn 25 Reward Points per ₹100 spent at BPCL fuel stations, with a maximum of 2,500 points per billing cycle. Eligible fuel purchases also receive a 1% fuel surcharge waiver, capped at ₹100 per month. Fuel purchases at non-BPCL stations do not earn reward points."
        },
        {
          title: "Extra Rewards on Dining, Movies, and Departmental Stores",
          benifit: "Earn 10 Reward Points per ₹100 on eligible dining, departmental store, and movie ticket purchases, capped at 7,500 points per month. Other eligible retail purchases earn 1 point per ₹100, excluding specified transactions such as mobile wallet loads."
        },
        {
          title: "Domestic Lounge Access and Milestone Vouchers",
          benifit: "Enjoy four complimentary domestic airport lounge visits per year, limited to one per quarter. Annual spending of ₹3 lakh can unlock a ₹2,000 voucher from eligible brands such as Aditya Birla Fashion, Yatra, Urban Ladder, Hush Puppies, or Bata. Spending ₹2 lakh in a year can waive the next year's renewal fee."
        }
      ],
      pros: [
        "Offers strong fuel rewards at BPCL stations, additional points on dining and movie purchases, welcome rewards, a fuel surcharge waiver, domestic airport lounge visits, and spending-based vouchers and annual fee relief."
      ],
      cons: [
        "The 3.5% forex markup makes the card less suitable for international spending, and accelerated fuel rewards apply only at BPCL stations.",
        "The card has a ₹99 + applicable taxes reward redemption fee, monthly reward caps on accelerated categories, and lounge access limited to one visit per quarter."
      ],
      desc2: [
        "Reward points can be redeemed for BPCL fuel, statement credit, gift vouchers, products, and other options through SBI's redemption channels. Four Reward Points equal ₹1, and points expire 24 months after accumulation.",
        "The card includes complimentary fraud liability cover of ₹1 lakh, according to the source.",
        "A ₹2,000 milestone voucher is available after annual spending of ₹3 lakh. Voucher options include eligible fashion, travel, footwear, and home brands, with redemption instructions provided to eligible cardholders.",
        "The card is particularly suited to regular BPCL customers who want to earn fuel-related rewards while also receiving dining, movie, and limited domestic airport lounge benefits."
      ],
      link:"https://www.sbicard.com/sprint/bpcl-octane?CS=org"
    },
    { id: 35, name: "SBI Card Miles Elite", category: "credit card", company: "sbi", image: i35, 
      tags: ["Travel"],
      desc1: [
        "The SBI Card Miles Elite is a premium travel credit card designed for travel-related spending. It earns Travel Credits that can be redeemed for air miles, hotel points, travel bookings, and catalogue products.",
        "The card has a joining fee of ₹4,999 + GST and offers 5,000 bonus Travel Credits after spending ₹1 lakh within the first 60 days of issuance. It also provides airport lounge access, complimentary Priority Pass membership, a 1.99% forex markup, and travel insurance."
      ],
      charges: [
        {
          "Joining Fee": "₹4,999 + GST",
          "Renewal Fee": "₹4,999 + GST",
          "Spend-Based Waiver": "Annual fee reversed on spending ₹15 lakh in a year",
          "Rewards Redemption Fee": "₹99",
          "Forex Markup": "1.99%",
          "Interest Rates": "3.50% per month (42% per annum)",
          "Fuel Surcharge Waiver": "1% waiver, maximum ₹500 per month",
          "Cash Advance Charges": "2.5% or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Travel Rewards on Eligible Spending",
          benifit: "Earn 6 Travel Credits for every ₹200 spent on travel and 2 Travel Credits for every ₹200 spent on other eligible purchases. Travel Credits remain valid for two years."
        },
        {
          title: "Welcome Bonus of 5,000 Travel Credits",
          benifit: "Receive 5,000 Travel Credits after spending ₹1 lakh within the first 60 days of card issuance. The source states these credits can be redeemed for up to ₹5,000 towards travel bookings or stays."
        },
        {
          title: "Domestic and International Airport Lounge Access",
          benifit: "Get 8 complimentary domestic lounge visits annually, with a maximum of 2 per quarter, and 6 complimentary international lounge visits annually, also capped at 2 per quarter."
        },
        {
          title: "Travel Privileges and Insurance",
          benifit: "Enjoy complimentary Priority Pass membership, travel insurance covering situations such as flight cancellations and lost baggage, and Travel Credit redemption through participating airline and hotel partners."
        }
      ],
      pros: [
        "Offers a range of airline and hotel redemption partners, a reported conversion ratio of up to 1:1 for eligible partners, complimentary lounge access, and a relatively low 1.99% forex markup."
      ],
      cons: [
        "The reward rate is limited to 6 Travel Credits per ₹200 on travel and 2 per ₹200 on other eligible purchases, which the source describes as inadequate compared with cards offering more accelerated rewards.",
        "The card does not provide additional movie or dining benefits, and its ₹4,999 + GST annual fee may be costly unless the travel benefits are used."
      ],
      desc2: [
        "The annual fee is reversed after spending ₹15 lakh in a year, according to the stated spend-based waiver.",
        "Travel Credit redemption options include air miles, hotel points, travel bookings, and catalogue products.",
        "A ₹99 rewards redemption fee applies. The stated fuel surcharge waiver is 1%, capped at ₹500 per month.",
        "Travel Credits are not earned on e-wallet loading, rent or property management, utility, insurance, and quasi-cash transactions."
      ],
      link:"https://www.sbicard.com/sprint/miles?CS=org"
    },
    { id: 36, name: "SBI Card PRIME", category: "credit card", company: "sbi", image: i36, 
      tags: ["Travel", "Shopping"],
      desc1: [
        "The SBI Prime Credit Card is a lifestyle credit card with an annual membership fee of ₹2,999 + GST. It offers value-added benefits such as complimentary domestic and international airport lounge access, discounted hotel bookings, movie-related benefits, and shopping privileges.",
        "The card earns 10 Reward Points per ₹100 spent on dining, movies, groceries, and departmental stores, and 2 Reward Points per ₹100 on other eligible retail spending. With each Reward Point valued at ₹0.25, the effective reward rates are approximately 2.5% and 0.5%, respectively."
      ],
      charges: [
        {
          "Joining Fee": "₹2,999 + GST",
          "Renewal Fee": "₹2,999 + GST",
          "Spend-Based Waiver": "Renewal fee waived if at least ₹3 lakh was spent in the previous year",
          "Rewards Redemption Fee": "₹99 + GST",
          "Forex Markup": "3.5% + GST",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% waiver on fuel transactions between ₹500 and ₹4,000, capped at ₹250 per month",
          "Cash Advance Charges": "2.5% of the amount withdrawn or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Welcome Gift Vouchers Worth ₹3,000",
          benifit: "Receive a shopping or travel voucher worth ₹3,000 from eligible brands, including Yatra, Aditya Birla Fashion, Bata/Hush Puppies, Shoppers Stop, and Pantaloons."
        },
        {
          title: "Accelerated Rewards on Everyday Spending",
          benifit: "Earn 10 Reward Points per ₹100 spent on dining, movies, groceries, and departmental stores, and 2 Reward Points per ₹100 on other eligible retail purchases. Each Reward Point is valued at ₹0.25."
        },
        {
          title: "Complimentary Airport Lounge Access",
          benifit: "Get 8 complimentary domestic airport lounge visits annually, with a maximum of 2 per quarter, and 4 complimentary international lounge visits annually through Priority Pass membership, with a maximum of 2 per quarter."
        },
        {
          title: "Milestone, Birthday, and Lifestyle Benefits",
          benifit: "The card offers a ₹7,000 gift voucher on annual spending of ₹5 lakh or more, a ₹1,000 Pizza Hut e-voucher after spending ₹50,000 in a calendar quarter, and 20 Reward Points per ₹100 spent around the birthday, capped at 2,000 birthday Reward Points per calendar year. Complimentary Club ITC Silver membership is also listed."
        }
      ],
      pros: [
        "Provides substantial welcome vouchers, complimentary domestic and international lounge access, accelerated rewards on selected everyday categories, and multiple spending milestone benefits."
      ],
      cons: [
        "The base reward rate on other eligible retail spending is relatively modest at approximately 0.5%.",
        "The card has a ₹2,999 + GST annual fee and a relatively high forex markup of 3.5% + GST."
      ],
      desc2: [
        "Reward Points can be redeemed for gift vouchers through SBI Card or its mobile app, or used to settle the outstanding card balance.",
        "The renewal fee can be waived by spending at least ₹3 lakh in the preceding year.",
        "A 1% fuel surcharge waiver applies to eligible fuel transactions between ₹500 and ₹4,000, subject to a monthly maximum waiver of ₹250.",
        "The card is available on Mastercard, RuPay, American Express, and Visa networks. The source notes that some benefits vary by variant, including golf benefits on Mastercard and RuPay SELECT and luxury hotel benefits on the Visa variant."
      ],
      link:"https://www.sbicard.com/sprint/prime?CS=org"
    },
    { id: 37, name: "SBI PhonePe Select Black", category: "credit card", company: "sbi", image: i37, 
      tags: ["Shopping", "Utility Bills"],
      desc1: [
        "The PhonePe SBI Select Black Credit Card is a co-branded offering from PhonePe and SBI Card, designed for users who frequently make payments through PhonePe. It offers accelerated rewards on eligible recharges, utility bills, insurance, bill payments, and travel booked through PhonePe.",
        "The card offers 10 Reward Points per ₹100 on eligible PhonePe spends, 5 Reward Points per ₹100 on eligible online purchases, and 1 Reward Point per ₹100 on other eligible spending. Each Reward Point is worth ₹1. Benefits include four complimentary domestic airport lounge visits annually and complimentary Priority Pass membership for the first two years."
      ],
      charges: [
        {
          "Joining Fee": "Zero (limited-time offer)",
          "Renewal Fee": "₹1,499 + GST",
          "Spend-Based Waiver": "Annual charges reversed on spending ₹3 lakh",
          "Rewards Redemption Fee": "N/A",
          "Forex Markup": "3.5%",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% waiver on fuel transactions between ₹500 and ₹4,000",
          "Cash Advance Charges": "2.5% or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "PhonePe Welcome Gift Voucher",
          benifit: "Receive a PhonePe gift voucher worth ₹1,500, stated to be sent 45 days after the joining fee is paid. The source also mentions a limited-time zero joining fee offer, so eligibility and voucher conditions should be checked."
        },
        {
          title: "Accelerated Rewards on PhonePe Payments",
          benifit: "Earn 10 Reward Points per ₹100 on eligible PhonePe recharges, utilities, bill payments, insurance, and travel transactions, capped at 2,000 Reward Points per month in this category."
        },
        {
          title: "Rewards on Online and Other Purchases",
          benifit: "Earn 5 Reward Points per ₹100 on eligible online spending, capped at 1,000 points monthly, and 1 Reward Point per ₹100 on other eligible spending, including Scan and Pay transactions, capped at 2,000 points monthly. Each point is worth ₹1."
        },
        {
          title: "Domestic Lounge Access and Priority Pass",
          benifit: "Get four complimentary domestic airport lounge visits annually, limited to one per quarter, along with complimentary Priority Pass membership for the first two years. International lounge visits are not included."
        }
      ],
      pros: [
        "Offers accelerated rewards on eligible PhonePe bill payments and insurance transactions, a ₹1,500 welcome voucher, four domestic lounge visits annually, and an annual fee reversal after spending ₹3 lakh."
      ],
      cons: [
        "There is no complimentary international airport lounge access, despite the Priority Pass membership, and the card has a 3.5% forex markup.",
        "The accelerated PhonePe and online reward categories have monthly caps, and numerous transactions—including wallet loading, fuel, rent, education, government payments, and ATM withdrawals—are excluded from rewards."
      ],
      desc2: [
        "The annual renewal fee is ₹1,499 + GST and can be reversed after eligible annual spending of ₹3 lakh.",
        "Reward Points can be redeemed as statement credit or gift vouchers, with each point valued at ₹1.",
        "Eligible online purchases earn 5 Reward Points per ₹100, while other eligible spending, including Scan and Pay, earns 1 point per ₹100.",
        "Rewards are not earned on wallet loading, fuel, rent or property management, education, government spending, digital gaming, financial charges, encash transactions, ATM withdrawals, or Flexipay transactions."
      ],
      link:"https://www.sbicard.com/eapply/eapply-form.page/catalogue-refer?referralcode=j3STwWyWtBu"
    },
    { id: 38, name: "SBI SimplyClick", category: "credit card", company: "sbi", image: i38, 
      tags: ["Shopping"],
      desc1: [
        "The SBI SimplyCLICK Credit Card is an entry-level shopping credit card with an annual membership fee of ₹499 + GST. It is designed for users who want affordable credit card benefits, accelerated rewards on selected online shopping platforms, and access to ongoing SBI Card offers.",
        "Cardholders earn 10X Reward Points on eligible purchases at partner merchants, 5X Reward Points on other eligible online purchases, and 1 Reward Point per ₹100 spent on offline purchases. The card also offers an Amazon welcome voucher, milestone vouchers from Cleartrip or Yatra, and contactless payments."
      ],
      charges: [
        {
          "Joining Fee": "₹499 + GST",
          "Renewal Fee": "₹499 + GST",
          "Spend-Based Waiver": "Annual fee waived on annual spending of ₹1 lakh",
          "Rewards Redemption Fee": "₹99 + GST",
          "Forex Markup": "3.5%",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% waiver on fuel transactions between ₹500 and ₹3,000, capped at ₹100 per month",
          "Cash Advance Charges": "2.5% of the withdrawal amount or a minimum of ₹500"
        }
      ],
      Benefits: [
        {
          title: "Amazon Welcome Gift Voucher",
          benifit: "Receive an Amazon gift voucher worth ₹500 after the card membership fee is realized. The voucher code is stated to be sent to the registered mobile number within 30 days of joining fee payment and remains valid for 12 months from the accrual date."
        },
        {
          title: "Accelerated Rewards on Partner Websites",
          benifit: "Earn 10X Reward Points on eligible online purchases at Apollo 24×7, BookMyShow, Cleartrip, Dominos, IGP, Myntra, Netmeds, Swiggy, Yatra, Gyftr, and Tata Cliq. The stated reward rate is approximately 2.5%, with a monthly cap of 10,000 bonus Reward Points across 5X and 10X categories."
        },
        {
          title: "Online Spending and Milestone Vouchers",
          benifit: "Earn 5X Reward Points on other eligible online purchases and 1 Reward Point per ₹100 on eligible offline purchases. Receive a ₹2,000 Cleartrip or Yatra e-voucher at each of the ₹1 lakh and ₹2 lakh annual online spending milestones, subject to applicable terms."
        },
        {
          title: "Fuel Surcharge Waiver and Zero Liability Protection",
          benifit: "Get a 1% fuel surcharge waiver on eligible fuel transactions between ₹500 and ₹3,000, capped at ₹100 per month. Zero liability protection is described for unauthorized or fraudulent transactions when a lost or stolen card is reported to the issuer in a timely manner."
        }
      ],
      pros: [
        "Offers an affordable entry-level annual fee, an Amazon welcome voucher worth ₹500, accelerated rewards on selected online merchants, milestone vouchers worth up to ₹4,000, and a fuel surcharge waiver."
      ],
      cons: [
        "The card does not offer complimentary domestic or international airport lounge access, and the source lists no insurance benefits.",
        "The base reward rate on offline spending is only about 0.25%, and rent, cash advances, balance transfers, fuel, government transactions, wallet loading, digital gaming, and utility bill payments are excluded from Reward Points."
      ],
      desc2: [
        "Each Reward Point is valued at ₹0.25 and can be redeemed for gift vouchers, statement credit, and other available options.",
        "The renewal fee is waived if annual spending reaches ₹1 lakh in the previous year.",
        "Bonus Reward Points earned at the 5X and 10X rates are capped at 10,000 per month. Cleartrip and Yatra transactions through affiliate channels are not eligible for 10X rewards.",
        "The card supports contactless payments and is accepted globally. It does not list dedicated travel, golf, movie, dining, or airport lounge benefits."
      ],
      link:"https://www.sbicard.com/sprint/simplyClick?CS=org"
    },
    { id: 39, name: "SBI SimplySAVE", category: "credit card", company: "sbi", image: i39, 
      tags: ["Shopping"],
      desc1: [
        "The SBI SimplySAVE Credit Card is an entry-level credit card with an annual fee of ₹499 + GST. It is designed for everyday spending and offers accelerated Reward Points on grocery, movie, dining, and departmental store purchases. The RuPay variant can also be linked to supported UPI applications.",
        "Cardholders receive 2,000 bonus Reward Points worth ₹500 after spending ₹2,000 within the first 60 days of card activation. The annual renewal fee can be waived by spending ₹1 lakh or more during the card anniversary year."
      ],
      charges: [
        {
          "Joining Fee": "₹499 + GST",
          "Renewal Fee": "₹499 + GST",
          "Spend-Based Waiver": "Renewal fee waived on spending ₹1 lakh or more during the card anniversary year",
          "Rewards Redemption Fee": "₹99 + GST",
          "Forex Markup": "3.5%",
          "Interest Rates": "3.75% per month (45% per annum)",
          "Fuel Surcharge Waiver": "1% waiver on fuel transactions between ₹500 and ₹3,000, capped at ₹100 per month",
          "Cash Advance Charges": "2.5% of the amount withdrawn or ₹500, whichever is higher"
        }
      ],
      Benefits: [
        {
          title: "Welcome Bonus Worth ₹500",
          benifit: "Earn 2,000 bonus Reward Points, valued at ₹500, after spending ₹2,000 within the first 60 days of card activation."
        },
        {
          title: "Accelerated Rewards on Everyday Shopping",
          benifit: "Earn 10X Reward Points on eligible grocery, dining, movie, and departmental store purchases. Accelerated rewards are capped at 5,000 points per month, after which the normal reward rate applies."
        },
        {
          title: "Flexible Reward Redemption",
          benifit: "Redeem Reward Points for gift vouchers, shopping products, or against the card statement balance. Each Reward Point is valued at ₹0.25, equivalent to ₹1 for every 4 points."
        },
        {
          title: "UPI Payments and Fuel Surcharge Waiver",
          benifit: "The RuPay variant can be linked to supported UPI applications such as Google Pay, PhonePe, and Paytm. Eligible fuel transactions between ₹500 and ₹3,000 receive a 1% surcharge waiver, capped at ₹100 per month."
        }
      ],
      pros: [
        "Offers a low joining and annual fee, a ₹500 welcome reward, accelerated points on everyday spending categories, UPI compatibility on the RuPay variant, and a renewal fee waiver after ₹1 lakh in annual spending."
      ],
      cons: [
        "The card does not offer domestic or international airport lounge access or insurance benefits, according to the provided source.",
        "The base reward rate is approximately 0.17%, and reward redemption carries a ₹99 + GST fee. Rent, government, and fuel transactions do not earn Reward Points."
      ],
      desc2: [
        "Earn 1 Reward Point per ₹150 spent on other eligible purchases, equivalent to a reward rate of approximately 0.17%.",
        "The accelerated reward rate is stated as 10X points per ₹150 spent on dining, departmental stores, movies, and grocery purchases, equivalent to approximately 1.7%.",
        "Add-on SimplySAVE credit cards are available for eligible family members at no additional cost, according to the source.",
        "The card charges 3.5% forex markup and interest of 3.75% per month. Cash advances incur a fee of 2.5% of the withdrawal amount, subject to a minimum charge of ₹500."
      ],
      link:"https://www.sbicard.com/sprint/simplySave?CS=org"
    },
  
    // Debit Cards - Axis
    { id: 40, name: "Axis Burgundy Debit Card", category: "debit card", company: "axis", image: i40, 
      tags: ["Travel", "Lifestyle"],
      desc1: [
        "The Axis Bank Burgundy Debit Card is a premium, flagship debit card provided exclusively to Axis Bank Burgundy Priority Savings Account holders. It is designed to offer credit-card-like luxury privileges, high daily transaction limits, comprehensive personal insurance cover, and premium entertainment benefits.",
        "Cardholders enjoy significant lifestyle perks, including complimentary movie and non-movie ticket offers via BookMyShow, complimentary domestic airport lounge access, unlimited free ATM transactions globally, golf privileges, and dedicated dining discounts through the Axis Bank Dining Delights program."
      ],
      charges: [
        {
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for eligible transactions",
          "Cash Advance Charges": "Free unlimited ATM withdrawals at Axis and Non-Axis bank ATMs globally"
        }
      ],
      Benefits: [
        {
          title: "Entertainment & BookMyShow Privileges",
          benifit: "Enjoy Buy 1 Get 1 Free offers on BookMyShow, getting up to 4 complimentary movie tickets (up to ₹500 off per ticket) and up to 4 non-movie tickets (up to ₹1,000 off per ticket) every month."
        },
        {
          title: "High Transaction & ATM Withdrawal Limits",
          benifit: "Features a high daily ATM cash withdrawal limit of ₹3,00,000 and a daily POS purchase limit of ₹6,00,000 for seamless high-value transactions."
        },
        {
          title: "Airport Lounge & Golf Access",
          benifit: "Access 3 complimentary domestic airport lounge visits per quarter (subject to spend eligibility), along with complimentary golf rounds and golf lessons via the Visa Infinite / Mastercard World platform."
        },
        {
          title: "Comprehensive Insurance Cover",
          benifit: "Includes air accident insurance cover up to ₹1 Crore, personal accident cover up to ₹15 Lakhs, baggage delay/loss cover, and purchase protection against fire and burglary."
        }
      ],
      pros: [
        "Offers exceptionally high daily withdrawal/POS limits and outstanding monthly BookMyShow privileges unmatched by most debit cards."
      ],
      cons: [
        "Strictly tied to maintaining the high Total Relationship Value (TRV) required for the Axis Burgundy Savings Account tier.",
        "Carries a standard foreign currency markup of 3.50% on international debit card transactions."
      ],
      desc2: [
        "Available as a complimentary debit card for primary and joint account holders maintaining active Burgundy account status.",
        "Complimentary domestic lounge access and BookMyShow benefits require meeting minimum spend criteria in the previous calendar quarters.",
        "Cardholders get unlimited free ATM transactions across all Axis and non-Axis Bank ATMs domestically and internationally.",
        "Offers exclusive dining discounts up to ₹1,000 per bill at partner restaurants via the Axis Bank Dining Delights program with EazyDiner."
      ],
      link: "https://www.axis.bank.in/burgundy/personal-banking"
    },
    { id: 41, name: "Axis Delight Debit Card", category: "debit card", company: "axis", image: i41, 
      tags: ["Movies", "Dining"],
      desc1: [
        "The Axis Bank Delight Debit Card is an entertainment and lifestyle-focused debit card tailored for Axis Bank Savings and Salary account holders. It offers cardholders direct discounts on popular food delivery, dining, and movie booking platforms, along with a high transaction limit and travel perks.",
        "Cardholders get complimentary annual Times Prime membership benefits upon completing activation transactions, along with monthly discounts on Swiggy and BookMyShow, spend-based airport lounge visits, and comprehensive insurance protection."
      ],
      charges: [
        {
          "Joining Fee": "₹1,500 + GST",
          "Renewal Fee": "₹999 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Cash Advance Charges": "Free domestic limits apply; ₹23 per financial withdrawal beyond limit; ₹125 for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "Activation & Milestone Times Prime Membership",
          benifit: "Get a complimentary 1-year Times Prime membership worth ₹1,199 on completing 3 debit card transactions within 60 days of card issuance, and on achieving ₹2 Lakhs in annual spends."
        },
        {
          title: "Entertainment & BookMyShow Discounts",
          benifit: "Enjoy 50% off up to ₹250 per month on BookMyShow movie ticket bookings (subject to spend criteria)."
        },
        {
          title: "Dining & Swiggy Offers",
          benifit: "Get 25% off up to ₹150 per transaction on Swiggy food orders (valid 3 times per month on orders above ₹400), plus up to 15% to 25% off via EazyDiner."
        },
        {
          title: "Airport Lounge Access & Insurance Protection",
          benifit: "Access 1 complimentary domestic airport lounge visit per quarter (subject to spend eligibility of ₹10,000 in the previous 3 calendar months). Includes ₹1 Crore air accident cover and ₹5 Lakhs personal accident cover."
        }
      ],
      pros: [
        "Delivers high recurring yearly savings on everyday dining, food orders, movies, and lifestyle subscriptions through direct platform discounts."
      ],
      cons: [
        "Carries a steep joining fee of ₹1,500 + GST and annual fee of ₹999 + GST for an entry/mid-tier debit card.",
        "Complimentary airport lounge access and BookMyShow movie benefits require meeting a quarterly spend threshold."
      ],
      desc2: [
        "Features high daily transaction limits with up to ₹1,00,000 for ATM cash withdrawals and ₹5,00,000 for POS and online spends.",
        "The 25% Swiggy discount can be used up to 3 times every month on minimum order values of ₹400.",
        "Times Prime membership unlocks additional subscriptions and benefits across OTT platforms, dining, and retail brands.",
        "Not available for Burgundy, Priority, NRI, basic savings, or no-frills account holders."
      ],
      link: "https://www.axis.bank.in/retail/cards/debit-cards/delight-debit-card"
    },
    { id: 42, name: "Axis Liberty Debit Card", category: "debit card", company: "axis", image: i42, 
      tags: ["Shopping", "Dining"],
      desc1: [
        "The Axis Bank Liberty Debit Card is a lifestyle-oriented debit card tailored specifically for Liberty Savings and Liberty Salary account holders. It is engineered to maximize returns on routine personal expenses by offering flat weekend cashbacks across everyday spend categories like dining, entertainment, shopping, and travel.",
        "Cardholders enjoy accelerated weekend cashback benefits, spend-based domestic airport lounge access, complimentary personal accident cover, and high daily transaction limits, making it a well-rounded option for young professionals and frequent retail shoppers."
      ],
      charges: [
        {
          "Joining Fee": "₹200 + GST (Nil for Liberty Salary Accounts)",
          "Renewal Fee": "₹300 + GST (Nil for Liberty Salary Accounts)",
          "Forex Markup": "3.50% of the transaction amount",
          "Cash Advance Charges": "₹23 per domestic ATM withdrawal beyond free limits; ₹125 for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "5% Weekend Cashback Benefit",
          benifit: "Earn 5% cashback on weekend spends (Saturdays and Sundays) across food, entertainment, shopping, and travel categories, capped at ₹500 per month (and up to ₹1,000 during your birthday month)."
        },
        {
          title: "Airport Lounge Access",
          benifit: "Enjoy 1 complimentary domestic airport lounge visit per quarter across major Indian airports (available exclusively for Liberty Salary account holders)."
        },
        {
          title: "High Transaction Limits",
          benifit: "Features a daily ATM cash withdrawal limit of ₹50,000 and a daily POS purchase limit of ₹3,00,000 for seamless shopping."
        },
        {
          title: "Comprehensive Insurance Cover",
          benifit: "Includes personal accident insurance cover up to ₹5 Lakhs, air accident insurance cover up to ₹1 Crore, and lost baggage protection up to $500."
        }
      ],
      pros: [
        "Delivers a practical 5% weekend cashback structure on everyday categories like dining and travel, unlocking direct monthly savings."
      ],
      cons: [
        "The 5% cashback benefit is strictly limited to transactions conducted on Saturdays and Sundays.",
        "Complimentary airport lounge access is restricted only to Liberty Salary account customers."
      ],
      desc2: [
        "Issuance and annual maintenance charges are completely waived for primary Liberty Salary account holders.",
        "Weekend cashback is capped at a maximum of ₹500 per month and requires no minimum transaction threshold.",
        "Features contactless payment functionality for fast PIN-less tap-and-pay transactions up to ₹5,000 per purchase.",
        "Cardholders receive dining discounts of up to 15% to 20% at partner restaurants via Axis Bank's Dining Delights network."
      ],
      link: "https://www.axis.bank.in/cards/debit-card/liberty-debit-card"
    },
    { id: 43, name: "Axis Online Rewards", category: "debit card", company: "axis", image: i43, 
      tags: ["Shopping", "Dining"],
      desc1: [
        "The Axis Bank Online Rewards Debit Card is a digital-first debit card engineered for frequent online shoppers, OTT stream viewers, and food delivery users. It transforms everyday digital spending into reward points, making it an ideal card for individuals who prefer online transactions over physical store purchases.",
        "Cardholders earn 3X accelerated EDGE REWARD Points on online shopping and food delivery, along with complimentary dining discounts, spend-based domestic airport lounge access, and robust insurance coverage."
      ],
      charges: [
        {
          "Joining Fee": "₹500 + GST",
          "Renewal Fee": "₹500 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Cash Advance Charges": "₹23 per domestic ATM withdrawal beyond free limits; ₹125 for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "3X Accelerated EDGE REWARDS",
          benifit: "Earn 3X EDGE REWARD Points (3 points per ₹200 spent) on online purchases, food delivery apps, and digital platforms, compared to 1 point per ₹200 on regular in-store spends."
        },
        {
          title: "Dining Discounts & Swiggy Offers",
          benifit: "Get up to 15% off at over 10,000 partner restaurants across India through Axis Bank's Dining Delights program in partnership with EazyDiner."
        },
        {
          title: "Domestic Airport Lounge Access",
          benifit: "Enjoy 1 complimentary domestic airport lounge visit per quarter upon meeting the minimum quarterly spend criteria of ₹10,000 on the card."
        },
        {
          title: "High Transaction Limits & Insurance",
          benifit: "Features a daily ATM cash withdrawal limit of ₹50,000 and a daily POS/online purchase limit of ₹5,00,000, along with personal accident insurance cover up to ₹5 Lakhs."
        }
      ],
      pros: [
        "Delivers 3X accelerated reward points on popular online shopping and food delivery platforms for a modest annual fee."
      ],
      cons: [
        "In-store offline purchases earn a low base rate of only 1 EDGE REWARD Point per ₹200 spent.",
        "Complimentary airport lounge access requires meeting a ₹10,000 spend threshold in the previous calendar quarter."
      ],
      desc2: [
        "EDGE REWARD Points earned on transactions can be redeemed for brand vouchers, products, or flight/hotel bookings via the Axis EDGE Rewards catalog.",
        "Features contactless payment capabilities allowing quick tap-and-pay transactions up to ₹5,00,000 daily limit.",
        "Complimentary air accident insurance cover up to ₹1 Crore is available subject to card usage terms.",
        "Not available for basic or no-frills account tiers that do not support classic/rewards debit cards."
      ],
      link: "https://www.axis.bank.in/retail/cards/debit-cards/online-rewards-debit-card"
    },
    { id: 44, name: "Axis Prestige Debit Card", category: "debit card", company: "axis", image: i44, 
      tags: ["Travel", "Lifestyle"],
      desc1: [
        "The Axis Bank Prestige Debit Card is a premium debit card offered exclusively to Axis Bank Prestige Account holders. It is designed for affluent customers seeking elevated reward rates on everyday purchases, complimentary movie ticket offers, and domestic travel privileges without needing a high-tier credit card.",
        "Cardholders enjoy 3X accelerated EDGE REWARD Points on fuel, shopping, and dining transactions, complimentary movie tickets via BookMyShow, spend-based domestic airport lounge access, and comprehensive personal insurance protection."
      ],
      charges: [
        {
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for eligible fuel transactions",
          "Cash Advance Charges": "Free domestic limits apply; ₹23 per financial withdrawal beyond free limits; ₹125 for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "3X Accelerated Reward Points",
          benifit: "Earn 3X EDGE REWARD Points (3 points per ₹200 spent) on fuel, dining, and shopping spends, compared to 1 point per ₹200 on standard offline purchases."
        },
        {
          title: "BookMyShow Movie Discounts",
          benifit: "Get Buy 1 Get 1 Free offers on movie tickets via BookMyShow, unlocking up to ₹250 off per ticket once or twice a month (subject to eligibility)."
        },
        {
          title: "Domestic Airport Lounge Access",
          benifit: "Enjoy 1 complimentary domestic airport lounge visit per quarter across major airports in India upon achieving minimum quarterly spending criteria."
        },
        {
          title: "High Limits & Insurance Cover",
          benifit: "Features a daily ATM cash withdrawal limit of ₹1,00,000 and a daily POS purchase limit of ₹5,00,000, alongside air accident cover up to ₹1 Crore and personal accident cover up to ₹10 Lakhs."
        }
      ],
      pros: [
        "Delivers BOGO movie discounts and accelerated 3X rewards on routine fuel and dining expenses as a complimentary feature of the Prestige account."
      ],
      cons: [
        "Strictly restricted to Axis Bank Prestige account holders who maintain the required balance or salary criteria.",
        "Airport lounge access requires meeting a minimum quarterly spend threshold prior to the visit."
      ],
      desc2: [
        "Issuance and annual maintenance charges are completely free for active Prestige Account holders.",
        "EDGE REWARD Points can be redeemed for brand gift vouchers, merchandise, or travel bookings via the Axis EDGE Rewards portal.",
        "Includes dining discounts up to 15% to 20% at partner restaurants through Axis Bank's Dining Delights program with EazyDiner.",
        "Provides purchase protection cover against fire and burglary for items purchased using the card within 90 days."
      ],
      link: "https://www.axis.bank.in/retail/cards/debit-cards/prestige-debit-card"
    },
    { id: 45, name: "Axis Priority Debit Card", category: "debit card", company: "axis", image: i45, 
      tags: ["Travel", "Lifestyle"],
      desc1: [
        "The Axis Bank Priority Debit Card is a premium debit card offered exclusively to Axis Bank Priority Savings and Salary Account holders. It is designed to deliver elevated lifestyle privileges, high daily transaction limits, movie discounts, and travel perks tailored for affluent customers.",
        "Cardholders enjoy complimentary domestic airport lounge access, 25% off movie tickets on BookMyShow, accelerated EDGE REWARD Points on online and international purchases, and high-value personal insurance coverage."
      ],
      charges: [
        {
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for eligible transactions",
          "Cash Advance Charges": "Free domestic limits apply; ₹23 per financial withdrawal beyond limits; ₹125 for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "BookMyShow Movie Ticket Offers",
          benifit: "Enjoy 25% off up to ₹350 per month on movie ticket bookings made via BookMyShow."
        },
        {
          title: "Accelerated EDGE REWARDS Points",
          benifit: "Earn 2X EDGE REWARD Points (2 points per ₹200 spent) on domestic purchases and 3X EDGE REWARD Points on international transactions."
        },
        {
          title: "Domestic Airport Lounge Access",
          benifit: "Access 1 complimentary domestic airport lounge visit per quarter across major Indian airports (subject to spend eligibility)."
        },
        {
          title: "High Limits & Insurance Cover",
          benifit: "Features a high daily ATM cash withdrawal limit of ₹1,00,000 and a daily POS purchase limit of ₹5,00,000, along with personal accident cover up to ₹10 Lakhs and air accident cover up to ₹1 Crore."
        }
      ],
      pros: [
        "Provides a strong combination of high transaction limits, BookMyShow discounts, and domestic airport lounge access with zero annual fees for Priority account holders."
      ],
      cons: [
        "Strictly tied to maintaining the higher Relationship Value required for the Axis Bank Priority Account tier.",
        "Complimentary airport lounge access is subject to meeting quarterly spend eligibility criteria."
      ],
      desc2: [
        "Issuance and annual maintenance fees are fully waived as long as active Priority Account status is maintained.",
        "EDGE REWARD Points earned on the card can be redeemed for merchandise, vouchers, or travel bookings on the Axis EDGE portal.",
        "Offers up to 15% to 20% dining discounts at participating partner restaurants across India via Axis Bank's Dining Delights network.",
        "Includes lost card liability and purchase protection insurance coverage for items bought using the card."
      ],
      link: "https://www.axis.bank.in/retail/cards/debit-cards/priority-debit-card"
    },
    { id: 46, name: "Axis Rewards Debit Card", category: "debit card", company: "axis", image: i46, 
      tags: ["Shopping", "Dining"],
      desc1: [
        "The Axis Bank Rewards Debit Card is an everyday rewards-centric debit card tailored for frequent shoppers, food enthusiasts, and moviegoers. It converts routine offline and online purchases into EDGE REWARD Points, offering a high reward rate on daily expenses.",
        "Cardholders enjoy accelerated reward points on grocery and apparel shopping, monthly dining discounts, complimentary movie benefits on BookMyShow, spend-based domestic airport lounge access, and robust personal insurance coverage."
      ],
      charges: [
        {
          "Joining Fee": "₹500 + GST",
          "Renewal Fee": "₹500 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Cash Advance Charges": "Free domestic limits apply; ₹23 per financial withdrawal beyond free limits; ₹125 for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "Accelerated EDGE REWARDS Points",
          benifit: "Earn 3X EDGE REWARD Points (3 points per ₹200 spent) on grocery and apparel purchases, and 1 point per ₹200 on all other regular transactions."
        },
        {
          title: "BookMyShow Movie Offers",
          benifit: "Enjoy 10% off up to ₹100 per month on movie ticket bookings made through BookMyShow."
        },
        {
          title: "Domestic Airport Lounge Access",
          benifit: "Enjoy 1 complimentary domestic airport lounge visit per quarter across major Indian airports (subject to spending ₹10,000 in the previous calendar quarter)."
        },
        {
          title: "Dining Discounts & Insurance Protection",
          benifit: "Get up to 15% off at over 10,000 partner restaurants via Axis Bank's Dining Delights program with EazyDiner, alongside air accident cover up to ₹1 Crore and personal accident cover up to ₹5 Lakhs."
        }
      ],
      pros: [
        "Offers accelerated 3X rewards on routine grocery and apparel shopping along with direct dining and movie discounts for a low annual fee."
      ],
      cons: [
        "Complimentary domestic lounge access requires meeting a ₹10,000 quarterly spend criteria prior to the visit.",
        "Movie ticket discount on BookMyShow is capped at ₹100 per month."
      ],
      desc2: [
        "Accumulated EDGE REWARD Points can be redeemed for flights, hotels, brand gift vouchers, or merchandise on the Axis EDGE catalog.",
        "Features daily POS purchase limits of up to ₹5,00,000 and daily ATM cash withdrawal limits up to ₹50,000.",
        "Includes purchase protection cover up to ₹50,000 against fire and burglary for goods purchased using the card.",
        "Issuance fee waivers may apply depending on the specific savings or salary account variant opened with Axis Bank."
      ],
      link: "https://www.axis.bank.in/retail/cards/debit-cards/rewards-debit-card"
    },
  
    // Debit Cards - HDFC
    { id: 47, name: "HDFC EasyShop Imperia Premium", category: "debit card", company: "hdfc", image: i47, 
      tags: ["Travel", "Lifestyle"],
      desc1: [
        "The HDFC Bank EasyShop Imperia Premium Debit Card is an exclusive, high-tier debit card offered strictly to HDFC Bank Imperia Banking customers. Engineered to provide credit-card-level luxury privileges, it seamlessly combines high daily spending limits with premium lifestyle perks, high reward yields, and comprehensive insurance coverage.",
        "Cardholders enjoy accelerated cashback on everyday purchases, complimentary domestic airport lounge access, high daily transaction capacities, zero forex markup on select overseas spend tiers, and dedicated concierge assistance."
      ],
      charges: [
        {
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver on transactions above ₹400 across all petrol pumps",
          "Cash Advance Charges": "Free unlimited ATM cash withdrawals across all HDFC and Non-HDFC Bank ATMs in India"
        }
      ],
      Benefits: [
        {
          title: "Accelerated Cashback Rewards",
          benifit: "Earn 1 Cashback Point per ₹100 spent on telecom and utility bills, 1 Cashback Point per ₹200 on groceries, dining, and supermarket spends, and 1 Cashback Point per ₹300 on general categories (up to ₹750 cashback per month)."
        },
        {
          title: "Domestic Airport Lounge Access",
          benifit: "Enjoy 4 complimentary domestic airport lounge visits per calendar quarter across major airports in India (subject to spend eligibility)."
        },
        {
          title: "High Daily Transaction Limits",
          benifit: "Features an exceptionally high daily ATM cash withdrawal limit of ₹1,00,000 and a daily POS/online transaction limit of ₹5,00,000."
        },
        {
          title: "Comprehensive Personal Insurance Cover",
          benifit: "Includes complimentary air accident insurance cover up to ₹1 Crore, personal accidental death cover up to ₹10 Lakhs, and fire and burglary purchase protection up to ₹2 Lakhs."
        }
      ],
      pros: [
        "Offers generous complimentary domestic airport lounge access (4 visits per quarter) alongside unlimited free ATM withdrawals nationwide with zero annual fees for Imperia customers."
      ],
      cons: [
        "Strictly restricted to HDFC Bank Imperia account holders who maintain high total relationship value (TRV) benchmarks.",
        "Monthly cashback earnings are capped at ₹750 per account across all spending categories."
      ],
      desc2: [
        "Cashback points can be easily redeemed online via NetBanking at a value of 1 Cashback Point = ₹1.",
        "Features contactless payment capabilities allowing quick tap-and-pay transactions up to ₹5,000 per purchase.",
        "Cardholders receive complimentary zero liability protection against unauthorized fraudulent transactions upon reporting within specified timelines.",
        "Includes access to dining privileges and special seasonal discount offers across partner platforms via HDFC SmartBuy."
      ],
      link: "https://www.hdfcbank.com/personal/pay/cards/debit-cards/easyshop-imperia-premium-debit-card"
    },
    { id: 48, name: "HDFC EasyShop NRO NRE", category: "debit card", company: "hdfc", image: i48, 
      tags: ["Travel", "Banking"],
      desc1: [
        "The HDFC Bank EasyShop NRE / NRO Debit Card is a specialized cross-border financial card designed exclusively for Non-Resident Indians (NRIs) maintaining NRE or NRO savings accounts with HDFC Bank. It provides seamless access to Indian Rupee balances for foreign currency transactions, domestic spends, and family expenses in India.",
        "Cardholders benefit from convenient international ATM cash withdrawals, global acceptance across POS and online merchants, direct cashback rewards on local Indian expenditures, and robust zero-liability fraud protection."
      ],
      charges: [
        {
          "Joining Fee": "₹500 + GST (Waived for select NRI account tiers)",
          "Renewal Fee": "₹500 + GST (Waived for select NRI account tiers)",
          "Forex Markup": "3.50% of the transaction amount",
          "Cash Advance Charges": "Free domestic limits apply; ₹25 per domestic ATM withdrawal beyond limits; ₹110 + taxes per international ATM transaction"
        }
      ],
      Benefits: [
        {
          title: "Direct Cashback Rewards in India",
          benifit: "Earn 1 Cashback Point per ₹100 spent on telecom and utility bills, 1 point per ₹200 on grocery and supermarket shopping, and 1 point per ₹300 on other retail categories (up to ₹750 cashback per month)."
        },
        {
          title: "Global Acceptance & High Limits",
          benifit: "Features high daily limit of up to ₹25,000 to ₹1,00,000 for ATM cash withdrawals and up to ₹2,75,000 to ₹5,00,000 for POS and online shopping both in India and overseas."
        },
        {
          title: "Fuel Surcharge Waiver",
          benifit: "Enjoy 1% fuel surcharge waiver on eligible fuel purchases across all petrol pumps in India for transactions above ₹400."
        },
        {
          title: "Comprehensive Insurance Protection",
          benifit: "Includes personal accidental death cover up to ₹5 Lakhs, air accident cover up to ₹25 Lakhs, and fire & burglary purchase protection up to ₹20,000."
        }
      ],
      pros: [
        "Enables NRIs to manage domestic spends, pay utility bills in India, and earn cashbacks directly credited to their linked NRE/NRO rupee account."
      ],
      cons: [
        "International transactions carry a 3.50% foreign exchange markup along with international ATM transaction fees.",
        "Does not include complimentary domestic or international airport lounge access."
      ],
      desc2: [
        "Cashback points can be redeemed directly to the linked account through NetBanking at 1 Cashback Point = ₹1.",
        "NRE Debit Cards allow seamless repatriation of funds spent domestically and internationally according to RBI guidelines.",
        "Features contactless chip technology for secure tap-and-pay transactions up to ₹5,000 per purchase in India.",
        "Includes zero liability protection against unauthorized transactions when reported promptly to HDFC Bank."
      ],
      link: "https://www.hdfcbank.com/nri-banking/pay/cards/debit-cards/easyshop-nre-debit-card"
    },
    { id: 49, name: "HDFC EasyShop Preferred Business", category: "debit card", company: "hdfc", image: i49, 
      tags: ["Business", "Banking"],
      desc1: [
        "The HDFC Bank EasyShop Preferred Business Debit Card is a specialized business-tier debit card offered to self-employed individuals, business owners, and proprietors holding HDFC Preferred Banking or Business Savings Accounts. It is engineered to streamline business purchases while providing high daily withdrawal and transaction limits.",
        "Cardholders enjoy cashbacks tailored to commercial purchases, complimentary domestic airport lounge access, higher spending capacity, and comprehensive personal insurance protection against business travel risks."
      ],
      charges: [
        {
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver on transactions above ₹400 across all petrol pumps",
          "Cash Advance Charges": "Free domestic limits apply; ₹25 per domestic ATM withdrawal beyond limits; ₹110 + taxes per international ATM transaction"
        }
      ],
      Benefits: [
        {
          title: "Business Cashback Rewards",
          benifit: "Earn 1 Cashback Point per ₹100 spent on telecom and utility bills, 1 point per ₹200 on grocery and supermarket spends, and 1 point per ₹300 on general retail categories (up to ₹750 cashback per month)."
        },
        {
          title: "Domestic Airport Lounge Access",
          benifit: "Enjoy 2 complimentary domestic airport lounge visits per calendar quarter across major airports in India (subject to spend eligibility)."
        },
        {
          title: "High Daily Transaction Limits",
          benifit: "Features a high daily ATM cash withdrawal limit of ₹1,00,000 and a daily POS/online purchase limit of ₹5,00,000 to manage large operational and procurement expenses."
        },
        {
          title: "Comprehensive Insurance Cover",
          benifit: "Includes air accident death insurance cover up to ₹1 Crore, personal accident death cover up to ₹10 Lakhs, and fire and burglary purchase protection up to ₹20,000."
        }
      ],
      pros: [
        "Provides business-focused transaction capacities along with domestic lounge access and zero annual fees for Preferred account holders."
      ],
      cons: [
        "Cashback earnings are capped at a maximum of ₹750 per month across all spend categories.",
        "Strictly tied to maintaining HDFC Bank Preferred or Business account eligibility criteria."
      ],
      desc2: [
        "Cashback points can be redeemed directly to the linked business account via NetBanking at 1 Cashback Point = ₹1.",
        "Features contactless tap-and-pay capability for swift purchases up to ₹5,000 per transaction.",
        "Provides zero liability protection against unauthorized fraudulent transactions upon immediate reporting to the bank.",
        "Includes access to exclusive business travel and software discount offers through the HDFC SmartBuy portal."
      ],
      link: "https://www.hdfcbank.com/personal/pay/cards/debit-cards/easyshop-preferred-platinum-debit-card"
    },
    { id: 50, name: "HDFC Millennia Debit Card", category: "debit card", company: "hdfc", image: i50, 
      tags: ["Shopping", "Cashback"],
      desc1: [
        "The HDFC Bank Millennia Debit Card is one of India's most popular cashback-focused debit cards, specifically tailored for millennials, young professionals, and digital shoppers. It offers direct cashbacks on online shopping, wallet reloads, and offline merchant transactions.",
        "Cardholders enjoy 5% cashback on popular e-commerce platforms and digital merchants booked via SmartBuy, 2.5% cashback on general online shopping, complimentary domestic airport lounge access, and robust personal accident insurance protection."
      ],
      charges: [
        {
          "Joining Fee": "₹500 + GST",
          "Renewal Fee": "₹500 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver on transactions above ₹400 across all petrol pumps",
          "Cash Advance Charges": "Free domestic limits apply; ₹25 per domestic ATM withdrawal beyond limits; ₹110 + taxes per international ATM transaction"
        }
      ],
      Benefits: [
        {
          title: "5% Accelerated Online Cashback",
          benifit: "Earn 5% cashback on online shopping via PayZapp and SmartBuy, 2.5% cashback on all other online spends, and 1% cashback on offline POS transactions and wallet reloads (up to ₹400 cashback per month)."
        },
        {
          title: "Domestic Airport Lounge Access",
          benifit: "Enjoy 1 complimentary domestic airport lounge visit per calendar quarter across major airports in India (subject to spending ₹5,000 in the previous calendar quarter)."
        },
        {
          title: "High Daily Transaction Limits",
          benifit: "Features a high daily ATM cash withdrawal limit of ₹50,000 and a daily POS/online transaction limit of ₹3,50,000."
        },
        {
          title: "Insurance Coverage & Fire Protection",
          benifit: "Includes personal accidental death cover up to ₹10 Lakhs, air accidental death cover up to ₹1 Crore, and fire & burglary purchase protection up to ₹20,000."
        }
      ],
      pros: [
        "Delivers direct 5% and 2.5% cashback rates on online shopping and digital payments with a low annual fee."
      ],
      cons: [
        "Monthly cashback accumulation is capped at ₹400 per account across all spending categories.",
        "Complimentary domestic airport lounge access requires meeting a ₹5,00,00 spend threshold in the preceding quarter."
      ],
      desc2: [
        "Cashback points earned can be easily redeemed via HDFC NetBanking at 1 Cashback Point = ₹1.",
        "Minimum transaction value to earn cashback points on eligible categories is ₹400.",
        "Features contactless payment capabilities allowing quick tap-and-pay transactions up to ₹5,000 per purchase.",
        "Includes zero liability protection against unauthorized fraudulent transactions upon immediate reporting to HDFC Bank."
      ],
      link: "https://www.hdfcbank.com/personal/pay/cards/debit-cards/millennia-debit-card"
    },
    { id: 51, name: "HDFC Rupay Premium", category: "debit card", company: "hdfc", image: i51, 
      tags: ["Shopping", "Banking"],
      desc1: [
        "The HDFC Bank RuPay Premium Debit Card is a versatile, domestic debit card issued on the indigenous RuPay payment network, specifically tailored to offer everyday utility savings, digital payment convenience, and insurance security.",
        "Cardholders benefit from nationwide RuPay merchant offers, spend-based domestic airport lounge access, 5% cashback on utility bill payments via HDFC Bank portals, fuel surcharge waivers, and personal insurance protection."
      ],
      charges: [
        {
          "Joining Fee": "₹200 + GST",
          "Renewal Fee": "₹200 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for eligible transactions above ₹400 across all petrol pumps",
          "Cash Advance Charges": "Free domestic limits apply; ₹25 per domestic ATM withdrawal beyond limits; ₹110 + taxes per international ATM transaction"
        }
      ],
      Benefits: [
        {
          title: "Utility & Shopping Cashback Rewards",
          benifit: "Earn 5% cashback on utility bill payments and reloads via PayZapp/SmartBuy, along with 1 Cashback Point per ₹100/₹200 spent on regular shopping categories (up to ₹750 cashback per month)."
        },
        {
          title: "Domestic Airport Lounge Access",
          benifit: "Enjoy 1 complimentary domestic airport lounge visit per calendar quarter across participating RuPay network lounges in India (subject to spend eligibility criteria)."
        },
        {
          title: "Daily Withdrawal & POS Limits",
          benifit: "Features a daily ATM cash withdrawal limit of ₹25,000 and a daily POS/online merchant spending limit of ₹2,75,000."
        },
        {
          title: "Accidental Insurance Protection",
          benifit: "Includes personal accidental death cover up to ₹2 Lakhs provided under the NPCI RuPay Premium card scheme, along with air accident cover up to ₹25 Lakhs."
        }
      ],
      pros: [
        "Carries a very low annual fee of ₹200 + GST while offering domestic airport lounge access and RuPay festival discount perks."
      ],
      cons: [
        "Daily ATM withdrawal limit is relatively lower (₹25,000) compared to mid-to-high tier Visa/Mastercard variants.",
        "International merchant acceptance is subject to partner networks (Discover/Diners Club) where RuPay global acceptance applies."
      ],
      desc2: [
        "Cashback points can be redeemed directly to the linked HDFC savings account through NetBanking at 1 Cashback Point = ₹1.",
        "Enables seamless linking with UPI apps for QR code tap-and-pay transactions directly from the debit card balance.",
        "Minimum transaction amount to earn cashback points across eligible categories is ₹400.",
        "Includes zero liability protection against unauthorized transactions when reported promptly to HDFC Bank."
      ],
      link: "https://www.hdfcbank.com/personal/pay/cards/debit-cards/rupay-premium-debit-card"
    },
  
    // Debit Cards - ICICI
    { id: 52, name: "ICICI Carbon (Eco-friendly)", category: "debit card", company: "icici", image: i52, 
      tags: ["Shopping", "Lifestyle"],
      desc1: [
        "The ICICI Bank Carbon Debit Card is an eco-friendly debit card made from 100% recycled PVC plastic, designed for environmentally conscious customers. It combines sustainable card material with everyday banking convenience, reward points, and lifestyle privileges.",
        "Cardholders earn ICICI Bank Reward Points on retail transactions, enjoy fuel surcharge waivers, access dining discounts through the Culinary Treats program, and receive personal accident insurance coverage."
      ],
      charges: [
        {
          "Joining Fee": "₹199 + GST",
          "Renewal Fee": "₹199 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver on transactions up to ₹4,000 at select petrol pumps",
          "Cash Advance Charges": "Free domestic limits apply; ₹21 per financial withdrawal beyond limits; ₹125 for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "Eco-Friendly Design",
          benifit: "Manufactured using 100% recycled PVC material, reducing plastic waste and carbon footprint compared to standard debit cards."
        },
        {
          title: "Reward Points on Everyday Spends",
          benifit: "Earn 1 ICICI Bank Reward Point for every ₹200 spent on eligible domestic merchant POS and online purchases."
        },
        {
          title: "Dining Discounts & Fuel Waiver",
          benifit: "Save a minimum of 15% on dining bills at participating partner restaurants under ICICI Bank's Culinary Treats programme, along with a 1% fuel surcharge waiver."
        },
        {
          title: "Insurance Protection & High Limits",
          benifit: "Features daily ATM withdrawal limits up to ₹1,00,000 and POS purchase limits up to ₹2,50,000, along with complimentary personal accident insurance cover."
        }
      ],
      pros: [
        "Offers an eco-conscious recycled card design at an affordable annual fee while delivering steady ICICI reward points and dining savings."
      ],
      cons: [
        "Does not offer complimentary domestic or international airport lounge access.",
        "Base reward rate is modest compared to premium or cashback-focused debit card variants."
      ],
      desc2: [
        "Reward Points earned on spends can be redeemed for brand gift vouchers, merchandise, or cash credit via ICICI ICICI Rewards catalog.",
        "Includes contactless payment support for PIN-less tap-and-pay transactions up to ₹5,000 per purchase.",
        "Cardholders get zero liability protection on lost or stolen cards when reported immediately to ICICI Bank customer care.",
        "Available for opening across standard ICICI Bank savings account holders."
      ],
      link: "https://www.icicibank.com/personal-banking/cards/debit-card"
    },
    { id: 53, name: "ICICI Coral Debit Card", category: "debit card", company: "icici", image: i53, 
      tags: ["Movies", "Dining"],
      desc1: [
        "The ICICI Bank Coral Debit Card is an entry-level lifestyle debit card designed to offer everyday savings on entertainment, dining, and shopping. Available across Visa and Mastercard networks, it translates routine domestic expenses into ICICI Bank Reward Points.",
        "Cardholders enjoy discount offers on movie tickets via BookMyShow and INOX, quarterly domestic airport lounge access, dining discounts through ICICI Bank's Culinary Treats program, and fuel surcharge waivers."
      ],
      charges: [
        {
          "Joining Fee": "₹599 + GST",
          "Renewal Fee": "₹599 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for eligible transactions up to ₹4,000 at select petrol stations",
          "Cash Advance Charges": "Free domestic limits apply; ₹21 per financial withdrawal beyond limits; ₹125 for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "Movie Ticket Discounts",
          benifit: "Get 25% off up to ₹100 on movie tickets booked via BookMyShow and INOX, valid twice a month on a minimum booking of two tickets."
        },
        {
          title: "Domestic Airport Lounge Access",
          benifit: "Enjoy 1 complimentary domestic airport lounge visit per calendar quarter across major Indian airports (subject to spending ₹10,000 in the previous calendar quarter)."
        },
        {
          title: "ICICI Reward Points",
          benifit: "Earn 2 ICICI Bank Reward Points per ₹200 spent on domestic merchant transactions and 4 Reward Points per ₹200 on international spends."
        },
        {
          title: "Culinary Treats Dining Offers",
          benifit: "Save a minimum of 15% on dining bills at over 2,500 participating partner restaurants across India."
        }
      ],
      pros: [
        "Provides a balanced mix of movie discounts, domestic lounge access, and dining perks for an affordable annual fee."
      ],
      cons: [
        "Domestic airport lounge access requires meeting a ₹10,000 spend criteria in the previous calendar quarter.",
        "Base reward point redemption values are modest compared to cashback-oriented debit cards."
      ],
      desc2: [
        "Features a daily ATM cash withdrawal limit of ₹1,00,000 and a daily POS/online merchant spending limit of ₹2,50,000.",
        "Reward Points earned can be redeemed for merchandise, vouchers, or cash credit through the ICICI iMobile app or NetBanking.",
        "Includes complimentary personal accident insurance cover up to ₹5 Lakhs and purchase protection cover against fire/burglary.",
        "Features contactless payment technology for quick tap-and-pay transactions up to ₹5,000 per purchase."
      ],
      link: "https://www.icicibank.com/personal-banking/cards/debit-card/coral-debit-card"
    },
    { id: 54, name: "ICICI Expressions (Personalized)", category: "debit card", company: "icici", image: i54, 
      tags: ["Shopping", "Lifestyle"],
      desc1: [
        "The ICICI Bank Expressions Debit Card is a unique personalized debit card that allows cardholders to customize the card face with their favorite personal photograph or choose from an extensive gallery of curated designs. It combines distinct visual customization with everyday banking convenience and lifestyle rewards.",
        "Cardholders enjoy complimentary movie ticket offers via BookMyShow, ICICI Bank Reward Points on routine domestic and online spending, dining discounts through the Culinary Treats program, and higher daily transaction capacities."
      ],
      charges: [
        {
          "Joining Fee": "₹499 + GST",
          "Renewal Fee": "₹499 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for eligible transactions up to ₹4,000 at select petrol stations",
          "Cash Advance Charges": "Free domestic limits apply; ₹21 per financial withdrawal beyond limits; ₹125 for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "Personalized Card Design",
          benifit: "Upload your personal photo or select from a design gallery of over 200 themes (art, sports, travel, music, and abstract) to customize the image on your debit card."
        },
        {
          title: "BookMyShow Movie Discounts",
          benifit: "Enjoy Buy 1 Get 1 Free or 25% off movie ticket offers on BookMyShow, valid twice a month (subject to eligibility and terms)."
        },
        {
          title: "Reward Points Program",
          benifit: "Earn 2 ICICI Bank Reward Points for every ₹200 spent on eligible merchant POS purchases and online transactions."
        },
        {
          title: "Dining Discounts & High Limits",
          benifit: "Save a minimum of 15% on dining bills at participating partner restaurants under ICICI Bank's Culinary Treats program, featuring a daily ATM withdrawal limit of ₹1,00,000 and POS purchase limit of ₹2,50,000."
        }
      ],
      pros: [
        "Combines full visual personalization of your debit card with recurring BookMyShow movie ticket discounts and ICICI dining perks."
      ],
      cons: [
        "Carries a initial design/issuance fee of ₹499 + GST and an annual fee of ₹499 + GST with no spend-based fee waiver.",
        "Does not offer complimentary domestic or international airport lounge access."
      ],
      desc2: [
        "Reward Points earned on spends can be redeemed for brand gift vouchers, merchandise, or cash credit through NetBanking or the iMobile app.",
        "Cardholders get complimentary personal accident insurance coverage up to ₹5 Lakhs and air accident cover up to ₹15 Lakhs.",
        "Features chip and PIN security with contactless tap-and-pay functionality for transactions up to ₹5,000 per purchase.",
        "Includes zero liability protection against unauthorized transactions upon prompt reporting to ICICI Bank."
      ],
      link: "https://www.icicibank.com/personal-banking/cards/debit-card/expressions-debit-card"
    },
    { id: 55, name: "ICICI Rubiyx Debit Card", category: "debit card", company: "icici", image: i55, 
      tags: ["Movies", "Dining"],
      desc1: [
        "The ICICI Bank Rubyx Debit Card is a premium lifestyle debit card designed to deliver accelerated rewards, travel privileges, and entertainment savings. Available across Visa, Mastercard, and RuPay networks, it caters to customers looking for elevated benefits on everyday spending without holding a super-premium card.",
        "Cardholders enjoy buy-one-get-one movie ticket privileges, quarterly domestic airport lounge access, accelerated reward points on international spends, fuel surcharge waivers, and exclusive dining discounts through ICICI Bank's Culinary Treats programme."
      ],
      charges: [
        {
          "Joining Fee": "₹999 + GST",
          "Renewal Fee": "₹999 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for eligible transactions up to ₹4,000 at select petrol stations",
          "Cash Advance Charges": "Free domestic limits apply; ₹21 per financial withdrawal beyond limits; ₹125 for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "Movie Ticket Discounts",
          benifit: "Enjoy Buy 1 Get 1 Free offer on movie tickets booked via BookMyShow and INOX (up to ₹200 off on the second ticket), valid twice per month."
        },
        {
          title: "Domestic Airport Lounge Access",
          benifit: "Access 2 complimentary domestic airport lounge visits per calendar quarter across major Indian airports (subject to spending ₹10,000 in the previous calendar quarter)."
        },
        {
          title: "Accelerated ICICI Reward Points",
          benifit: "Earn 2 ICICI Bank Reward Points per ₹200 spent on domestic transactions and 4 Reward Points per ₹200 spent on international purchases."
        },
        {
          title: "Culinary Treats & High Transaction Limits",
          benifit: "Save 15% or more on dining bills at participating partner restaurants, backed by high daily limits up to ₹1,50,000 for ATM withdrawals and ₹3,00,000 for POS/online spends."
        }
      ],
      pros: [
        "Provides a strong combination of BOGO movie ticket offers, higher daily limits, and 2 domestic airport lounge visits per quarter for a mid-tier annual fee."
      ],
      cons: [
        "Complimentary airport lounge access requires meeting a minimum quarterly spend threshold of ₹10,000.",
        "Carries an annual fee of ₹999 + GST with no standard spend-based fee waiver threshold."
      ],
      desc2: [
        "Reward Points earned on transactions can be redeemed for travel, brand vouchers, or cash credit through NetBanking or the iMobile app.",
        "Features chip and PIN security along with contactless tap-and-pay capability for quick transactions up to ₹5,000 per purchase.",
        "Includes complimentary personal accident insurance cover up to ₹10 Lakhs and air accident cover up to ₹25 Lakhs.",
        "Provides zero liability protection against unauthorized fraudulent transactions upon immediate reporting to ICICI Bank."
      ],
      link: "https://www.icicibank.com/personal-banking/cards/debit-card/rubyx-debit-card"
    },
    { id: 56, name: "ICICI Sapphiro Debit Card", category: "debit card", company: "icici", image: i56, 
      tags: ["Travel", "Lifestyle"],
      desc1: [
        "The ICICI Bank Sapphiro Debit Card is a super-premium lifestyle debit card offered to high-tier savings and wealth management account holders. It is engineered to provide premium credit-card-grade travel privileges, high transaction limits, and entertainment offers.",
        "Cardholders enjoy complimentary domestic airport lounge access, Buy 1 Get 1 Free movie ticket offers on BookMyShow, higher daily ATM and POS transaction capacities, accelerated ICICI Reward Points, and comprehensive personal insurance protection."
      ],
      charges: [
        {
          "Joining Fee": "₹1,999 + GST",
          "Renewal Fee": "₹1,999 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for eligible transactions up to ₹4,000 at select petrol stations",
          "Cash Advance Charges": "Free domestic limits apply; ₹21 per financial withdrawal beyond limits; ₹125 for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "BookMyShow BOGO Movie Offers",
          benifit: "Enjoy Buy 1 Get 1 Free movie ticket offers via BookMyShow, getting up to ₹250 off on the second ticket (valid twice per month)."
        },
        {
          title: "Domestic Airport Lounge Access",
          benifit: "Enjoy 2 complimentary domestic airport lounge visits per calendar quarter across major Indian airports (subject to spend eligibility criteria)."
        },
        {
          title: "Accelerated Reward Points",
          benifit: "Earn 4 ICICI Bank Reward Points per ₹200 spent on domestic transactions and 8 Reward Points per ₹200 spent on international purchases."
        },
        {
          title: "High Transaction Limits & Dining Perks",
          benifit: "Features a daily ATM cash withdrawal limit of ₹2,50,000 and a daily POS/online merchant limit of ₹5,00,000, along with 15% dining discounts under ICICI Culinary Treats."
        }
      ],
      pros: [
        "Delivers accelerated reward points, generous BOGO BookMyShow movie offers, and high daily spending/withdrawal limits."
      ],
      cons: [
        "Carries a relatively high annual fee of ₹1,999 + GST for a debit card.",
        "Complimentary domestic airport lounge access requires meeting minimum quarterly spend criteria."
      ],
      desc2: [
        "Reward Points earned on transactions can be redeemed for flights, gift vouchers, or cash credit via the ICICI iMobile application.",
        "Includes complimentary personal accident insurance cover up to ₹15 Lakhs and air accident cover up to ₹50 Lakhs.",
        "Provides zero liability protection against unauthorized transactions when reported promptly to ICICI Bank.",
        "Annual charges may be waived or discounted for select high-value Wealth Management and ICICI Select savings account tiers."
      ],
      link: "https://www.icicibank.com/personal-banking/cards/debit-card/sapphiro-debit-card"
    },
    { id: 57, name: "ICICI Smart Shopper SilverGold", category: "debit card", company: "icici", image: i57, 
      tags: ["Shopping", "Banking"],
      desc1: [
        "The ICICI Bank Smart Shopper Silver/Gold Debit Card is a classic everyday banking debit card engineered for general account holders seeking cash withdrawal convenience, secure online payments, and base reward points on everyday spending.",
        "Cardholders earn ICICI Bank Reward Points on routine domestic purchases, access fuel surcharge waivers across petrol pumps nationwide, and receive basic personal accident insurance coverage."
      ],
      charges: [
        {
          "Joining Fee": "₹150 + GST",
          "Renewal Fee": "₹150 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for eligible transactions up to ₹4,000 at select petrol stations",
          "Cash Advance Charges": "Free domestic limits apply; ₹21 per financial withdrawal beyond limits; ₹125 for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "ICICI Reward Points on Spends",
          benifit: "Earn 1 ICICI Bank Reward Point for every ₹200 spent on merchant POS purchases and online shopping."
        },
        {
          title: "Daily ATM & Merchant Limits",
          benifit: "Features daily ATM withdrawal limits up to ₹50,000 and POS purchase limits up to ₹1,00,000 for secure daily financial transactions."
        },
        {
          title: "Fuel Surcharge Waiver & Dining Perks",
          benifit: "Enjoy 1% fuel surcharge waiver at partner fuel outlets along with minimum 15% dining discounts via ICICI Culinary Treats."
        },
        {
          title: "Personal Insurance Cover",
          benifit: "Includes complimentary personal accident insurance cover up to ₹50,000 and purchase protection for merchant transactions."
        }
      ],
      pros: [
        "Offers an affordable annual fee structure for baseline shopping rewards and essential daily banking services."
      ],
      cons: [
        "Does not include movie discounts or complimentary domestic airport lounge access.",
        "Reward earning rate is low compared to premium ICICI debit card variants."
      ],
      desc2: [
        "Reward Points earned on transactions can be redeemed for merchandise or gift vouchers through the ICICI iMobile app.",
        "Features contactless chip technology allowing quick tap-and-pay transactions up to ₹5,000 per purchase.",
        "Cardholders get zero liability protection on lost or stolen cards when reported immediately to ICICI Bank customer care.",
        "Issued as a standard default debit card across fundamental ICICI Bank savings accounts."
      ],
      link: "https://www.icicibank.com/personal-banking/cards/debit-card"
    },
    { id: 58, name: "ICICI Wealth Select Debit Card", category: "debit card", company: "icici", image: i58, 
      tags: ["Travel", "Lifestyle"],
      desc1: [
        "The ICICI Bank Wealth Select Debit Card is a premier lifestyle debit card issued exclusively to ICICI Bank Wealth Management account holders. It is engineered to complement high-net-worth relationships with luxury travel perks, high transaction capacities, and elevated reward earning rates.",
        "Cardholders enjoy complimentary domestic airport lounge access, Buy 1 Get 1 Free movie ticket offers on BookMyShow, zero annual fees, accelerated ICICI Bank Reward Points, and comprehensive travel insurance coverage."
      ],
      charges: [
        {
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "1% fuel surcharge waiver for eligible transactions up to ₹4,000 at select petrol stations",
          "Cash Advance Charges": "Free unlimited ATM cash withdrawals across all bank ATMs in India"
        }
      ],
      Benefits: [
        {
          title: "BookMyShow BOGO Movie Offers",
          benifit: "Enjoy Buy 1 Get 1 Free movie ticket offers via BookMyShow, getting up to ₹250 to ₹500 off per ticket (valid twice per month)."
        },
        {
          title: "Domestic Airport Lounge Access",
          benifit: "Enjoy 2 complimentary domestic airport lounge visits per calendar quarter across major Indian airports (subject to spending eligibility)."
        },
        {
          title: "Accelerated ICICI Reward Points",
          benifit: "Earn 4 ICICI Bank Reward Points per ₹200 spent on domestic purchases and 8 Reward Points per ₹200 spent on international transactions."
        },
        {
          title: "High Limits & Unlimited ATM Access",
          benifit: "Features a high daily ATM cash withdrawal limit of ₹2,50,000 and a daily POS purchase limit of ₹7,50,000, along with unlimited free ATM transactions globally."
        }
      ],
      pros: [
        "Delivers top-tier travel and entertainment benefits with zero joining or annual fees as part of the Wealth Management account relationship."
      ],
      cons: [
        "Strictly restricted to customers maintaining the high Total Relationship Value (TRV) required for ICICI Bank Wealth Management.",
        "Complimentary airport lounge visits are subject to quarterly spend thresholds."
      ],
      desc2: [
        "Issuance and annual charges are fully waived as long as active Wealth Management account status is maintained.",
        "Reward Points earned on transactions can be redeemed for flights, brand gift vouchers, or cash credit via the ICICI iMobile app.",
        "Includes complimentary personal accident insurance cover up to ₹15 Lakhs and air accident cover up to ₹50 Lakhs.",
        "Features contactless chip technology allowing swift tap-and-pay transactions up to ₹5,000 per purchase."
      ],
      link: "https://www.icicibank.com/personal-banking/cards/debit-card/wealth-debit-card"
    },
  
    // Debit Cards - SBI
    { id: 59, name: "SBI Classic Debit Card", category: "debit card", company: "sbi", image: i59, 
      tags: ["Shopping", "Banking"],
      desc1: [
        "The SBI Classic Debit Card is the most widely issued entry-level domestic debit card offered by State Bank of India. It provides fundamental banking services, hassle-free cash access across ATMs nationwide, and safe e-commerce payment capabilities for everyday expenses.",
        "Cardholders earn SBI Rewardz points on merchant transactions, enjoy contactless payment convenience, and benefit from secure PIN and chip protection for daily purchases across India."
      ],
      charges: [
        {
          "Renewal Fee": "₹125 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Cash Advance Charges": "Free domestic limits apply; ₹15 to ₹20 per financial withdrawal beyond limits; ₹150 + taxes for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "SBI Rewardz Points Program",
          benifit: "Earn 2 SBI Rewardz points for every ₹200 spent on eligible POS merchant and online purchases."
        },
        {
          title: "Daily ATM & Merchant Spends",
          benifit: "Features a daily ATM cash withdrawal limit of ₹20,000 and a daily POS/online transaction limit of ₹50,000."
        },
        {
          title: "Contactless Tap & Pay",
          benifit: "Includes NFC contactless functionality, allowing fast PIN-less tap-and-pay transactions up to ₹5,000 per purchase."
        },
        {
          title: "Zero Joining Fee",
          benifit: "Issued completely free of cost upon opening a standard SBI savings bank account."
        }
      ],
      pros: [
        "Carries a minimal annual maintenance fee of ₹125 + GST, making it an affordable baseline debit card for essential banking."
      ],
      cons: [
        "Daily ATM withdrawal limit is capped at ₹20,000 per day.",
        "Does not include complimentary domestic airport lounge access or movie discounts."
      ],
      desc2: [
        "SBI Rewardz points earned on transactions can be redeemed for mobile recharges, gift vouchers, or catalog products via the SBI Rewardz portal.",
        "Features chip and PIN security for enhanced safety across all retail and online merchant outlets.",
        "Cardholders get zero liability protection on lost or stolen cards when reported immediately to SBI customer support.",
        "Issued as the standard default debit card for regular SBI savings and basic salary accounts."
      ],
      link: "https://sbi.co.in/web/personal-banking/cards/debit-card/sbi-classic-debit-card"
    },
    { id: 60, name: "SBI Global International", category: "debit card", company: "sbi", image: i60, 
      tags: ["Shopping", "Banking"],
      desc1: [
        "The SBI Global International Debit Card is a popular everyday debit card offered by State Bank of India that enables cardholders to conduct cashless transactions and access cash seamlessly both in India and internationally. Equipped with an EMV chip and contactless NFC technology, it ensures high transaction security and convenience across global networks including Visa, Mastercard, and RuPay.",
        "Cardholders earn SBI Rewardz points on domestic and international merchant spends, pay utility bills, shop online across global platforms, and enjoy cashless payments with high transaction capacity."
      ],
      charges: [
        {
          "Renewal Fee": "₹125 to ₹200 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Cash Advance Charges": "Free domestic ATM limits apply; ₹100 + 3.5% forex markup + GST per international ATM withdrawal"
        }
      ],
      Benefits: [
        {
          title: "SBI Rewardz Points Program",
          benifit: "Earn 2 SBI Rewardz points for every ₹200 spent on shopping, dining, fuel, travel, and online payments domestically and internationally."
        },
        {
          title: "Activation & Milestone Rewards",
          benifit: "Earn bonus reward points on initial transactions post-issuance and milestone bonus points upon reaching specified monthly spending thresholds on POS and e-commerce transactions."
        },
        {
          title: "Global Acceptance & Contactless Spends",
          benifit: "Accepted across over 52 lakh merchant outlets in India and over 30 million outlets worldwide, with contactless tap-and-pay support up to ₹5,000 per transaction."
        },
        {
          title: "Daily ATM & POS Transaction Limits",
          benifit: "Features a daily ATM cash withdrawal limit of ₹40,000 (or foreign currency equivalent) and daily POS/e-commerce transaction limit up to ₹75,000."
        }
      ],
      pros: [
        "Delivers full international transaction support across ATMs, POS terminals, and global online merchants at an affordable annual maintenance fee."
      ],
      cons: [
        "Does not offer complimentary domestic or international airport lounge access.",
        "Carries a standard 3.50% foreign exchange markup plus international ATM withdrawal cash charges for overseas usage."
      ],
      desc2: [
        "SBI Rewardz points earned on purchases can be redeemed for brand vouchers, flight/hotel bookings, or catalog merchandise via the SBI Rewardz portal.",
        "International transactions and online usage must be activated via SBI NetBanking or the YONO app prior to overseas travel or foreign site purchases.",
        "Cardholders get complimentary zero liability protection against unauthorized fraudulent transactions upon immediate reporting to SBI.",
        "Issued as a standard international debit card for regular SBI savings and current account holders."
      ],
      link: "https://sbi.co.in/web/personal-banking/cards/debit-card/sbi-global-international-debit-card"
    },
    { id: 61, name: "SBI Gold International", category: "debit card", company: "sbi", image: i61, 
      tags: ["Shopping", "Banking"],
      desc1: [
        "The SBI Gold International Debit Card is a mid-tier international debit card designed by State Bank of India for customers seeking higher daily spending capacities and travel convenience. Issued on Visa and Mastercard payment platforms, it enables seamless cash access and merchant payments both in India and abroad.",
        "Cardholders earn SBI Rewardz points on domestic and international merchant purchases, pay utility bills, shop online across global platforms, and enjoy complimentary personal accident insurance cover alongside elevated daily transaction limits."
      ],
      charges: [
        {
          "Renewal Fee": "₹175 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Cash Advance Charges": "Free domestic ATM limits apply; ₹100 + 3.5% forex markup + GST per international ATM withdrawal"
        }
      ],
      Benefits: [
        {
          title: "SBI Rewardz Points Program",
          benifit: "Earn 2 SBI Rewardz points for every ₹200 spent on shopping, dining, travel, and online transactions domestically and internationally."
        },
        {
          title: "Elevated Daily Spends & ATM Limits",
          benifit: "Features a daily ATM cash withdrawal limit of ₹50,000 and a daily POS/online transaction limit of ₹2,00,000 for high-value daily purchases."
        },
        {
          title: "Activation & Milestone Reward Bonuses",
          benifit: "Get bonus reward points on completing initial transactions post-issuance, along with milestone points upon reaching specified quarterly spending targets."
        },
        {
          title: "Complimentary Accidental Insurance",
          benifit: "Includes personal accidental insurance cover up to ₹2 Lakhs (non-air accident) and air accident cover up to ₹4 Lakhs upon meeting minimum card activity criteria."
        }
      ],
      pros: [
        "Provides high daily withdrawal and shopping limits (up to ₹2,00,000 POS limit) alongside accidental insurance for a very low annual fee."
      ],
      cons: [
        "Does not include complimentary domestic or international airport lounge access.",
        "International usages attract a standard 3.50% foreign currency transaction markup."
      ],
      desc2: [
        "Reward Points accumulated can be redeemed for brand gift vouchers, recharges, or products on the SBI Rewardz portal.",
        "Includes contactless payment support for PIN-less tap-and-pay transactions up to ₹5,000 per transaction.",
        "Overseas and online international usage can be managed easily through SBI NetBanking or the YONO mobile application.",
        "Provides zero liability protection against unauthorized transactions when reported immediately to SBI customer care."
      ],
      link: "https://sbi.co.in/web/personal-banking/cards/debit-card/sbi-gold-international-debit-card"
    },
    { id: 62, name: "SBI IOCL Co-Branded", category: "debit card", company: "sbi", image: i62, 
      tags: ["Fuel", "Shopping"],
      desc1: [
        "The SBI IOCL Co-Branded Debit Card is a specialized fuel and lifestyle debit card offered jointly by State Bank of India and Indian Oil Corporation Limited. It is engineered to deliver accelerated savings and reward points for vehicle owners on fuel and lubricant purchases across IOCL outlets nationwide.",
        "Cardholders earn 6X reward points on fuel transactions at IOCL petrol pumps, benefit from fuel surcharge waivers, and earn reward points on regular domestic retail and online shopping."
      ],
      charges: [
        {
          "Renewal Fee": "₹175 to ₹200 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Fuel Surcharge Waiver": "0.75% cashback on fuel purchases made at IOCL petrol pumps",
          "Cash Advance Charges": "Free domestic ATM limits apply; ₹15 to ₹20 per financial withdrawal beyond limits"
        }
      ],
      Benefits: [
        {
          title: "6X Accelerated Fuel Reward Points",
          benifit: "Earn 6 SBI Rewardz points for every ₹200 spent on fuel purchases at Indian Oil Corporation Limited (IOCL) petrol pumps."
        },
        {
          title: "Fuel Savings & Cashback",
          benifit: "Get 0.75% cashback on fuel payments made at participating IOCL outlets across India."
        },
        {
          title: "Daily Transaction Limits",
          benifit: "Features a daily ATM cash withdrawal limit of ₹40,000 and a daily POS/online transaction limit of ₹75,000."
        },
        {
          title: "Contactless Payments & Global Acceptance",
          benifit: "Equipped with NFC contactless chip technology for secure tap-and-pay transactions up to ₹5,000 per purchase without requiring a PIN."
        }
      ],
      pros: [
        "Provides accelerated reward earnings and direct savings on fuel expenses at over 30,000 IOCL petrol pumps across India."
      ],
      cons: [
        "Accelerated reward point benefits are strictly restricted to fuel transactions at IOCL outlets.",
        "Does not offer complimentary domestic or international airport lounge access."
      ],
      desc2: [
        "SBI Rewardz points earned on fuel spends can be accumulated and redeemed for free fuel at participating IOCL outlets or for gift vouchers via the SBI Rewardz portal.",
        "Minimum transaction threshold applies for earning accelerated reward points on fuel purchases.",
        "Cardholders receive complimentary zero liability protection against unauthorized transactions when reported promptly to SBI.",
        "Issued on the RuPay / Visa contactless platform for quick tap-and-pay payments across merchants."
      ],
      link: "https://sbi.co.in/web/personal-banking/cards/debit-card"
    },
    { id: 63, name: "SBI Mumbai Metro Combo", category: "debit card", company: "sbi", image: i63, 
      tags: ["Transit", "Shopping"],
      desc1: [
        "The SBI Mumbai Metro Combo Debit Card is a specialized dual-purpose financial and transit debit card designed for daily commuters in Mumbai. It integrates an EMV chip-based SBI debit card with a contactless Mumbai Metro transit chip, allowing cardholders to travel seamlessly without buying separate tokens or tickets.",
        "Cardholders enjoy auto-entry tap-and-go privileges at Mumbai Metro stations alongside standard debit card benefits like SBI Rewardz points, online payment security, ATM cash withdrawals, and shopping rewards."
      ],
      charges: [
        {
          "Joining Fee": "₹100 + GST (includes ₹50 pre-loaded balance on the transit chip)",
          "Renewal Fee": "₹150 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Cash Advance Charges": "Free domestic ATM limits apply; ₹15 to ₹20 per financial withdrawal beyond limits; ₹150 + taxes for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "Tap-and-Go Transit Access",
          benifit: "Eliminates the need to stand in queues for Mumbai Metro tokens; simply tap the card directly at metro entry/exit gates to pay transit fares."
        },
        {
          title: "SBI Rewardz Points Program",
          benifit: "Earn 1 SBI Rewardz point for every ₹200 spent on eligible POS transactions, fuel, dining, and online shopping."
        },
        {
          title: "Pre-loaded Welcome Metro Credit",
          benifit: "Includes ₹50 pre-loaded travel value on the card's transit chip upon issuance to kickstart metro journeys."
        },
        {
          title: "Daily Spending & ATM Limits",
          benifit: "Features a daily ATM cash withdrawal limit of ₹40,000 and a daily POS/online merchant transaction limit of ₹75,000."
        }
      ],
      pros: [
        "Combines daily Mumbai Metro commute payments with standard debit card features in a single, convenient card."
      ],
      cons: [
        "Transit integration features are useful primarily for commuters utilizing the Mumbai Metro network.",
        "Does not offer complimentary airport lounge access or movie ticket discounts."
      ],
      desc2: [
        "SBI Rewardz points accumulated through spending can be redeemed for recharge vouchers or merchandise via the SBI Rewardz portal.",
        "The card features contactless tap-and-pay functionality for fast retail payments up to ₹5,000 without requiring a PIN.",
        "Cardholders get zero liability protection against unauthorized transactions upon immediate reporting to SBI customer care.",
        "Can be easily requested via SBI Internet Banking or the SBI YONO mobile app under the Debit Card services section."
      ],
      link: "https://sbi.co.in/web/personal-banking/cards/debit-card"
    },
    { id: 64, name: "SBI Platinum International", category: "debit card", company: "sbi", image: i64, 
      tags: ["Travel", "Shopping"],
      desc1: [
        "The SBI Platinum International Debit Card is a premier international debit card offered by State Bank of India across Visa, Mastercard, and RuPay platforms. Designed for high spenders and frequent travelers, it combines higher daily ATM cash withdrawal and shopping limits with global payment convenience.",
        "Cardholders enjoy complimentary domestic airport lounge access, accelerated SBI Rewardz points on international purchases and birthday spends, monthly milestone bonuses, and comprehensive personal insurance cover."
      ],
      charges: [
        {
          "Joining Fee": "₹300 + GST",
          "Renewal Fee": "₹250 to ₹325 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Cash Advance Charges": "Free domestic ATM limits apply; ₹100 + 3.5% forex markup + GST per international ATM withdrawal"
        }
      ],
      Benefits: [
        {
          title: "Complimentary Airport Lounge Access",
          benifit: "Enjoy complimentary domestic airport lounge visits across major Indian airports as per card network terms (Visa/Mastercard/RuPay)."
        },
        {
          title: "Accelerated SBI Rewardz & Milestone Bonus",
          benifit: "Earn 2 SBI Rewardz points per ₹200 spent, 2X reward points on birthday spends and international transactions, plus 1,000 bonus points on reaching monthly POS/e-commerce spends of ₹1,00,000."
        },
        {
          title: "High Daily Transaction Limits",
          benifit: "Features a high daily ATM cash withdrawal limit of ₹1,00,000 and a daily POS/e-commerce purchase limit of ₹2,00,000."
        },
        {
          title: "Comprehensive Insurance Protection",
          benifit: "Includes personal accidental death cover, air accident cover, and purchase protection cover against theft and damage for items bought on the card."
        }
      ],
      pros: [
        "Provides high daily withdrawal/POS spending limits alongside complimentary airport lounge access and 2X international reward points."
      ],
      cons: [
        "Carries a joining issuance fee of ₹300 + GST unlike basic SBI debit cards.",
        "International usages attract a 3.50% foreign exchange markup along with international ATM transaction fees."
      ],
      desc2: [
        "Activation bonus of up to 300 SBI Rewardz points is awarded on completing initial purchases post card issuance.",
        "International usage and e-commerce parameters must be enabled via SBI YONO or NetBanking prior to overseas transactions.",
        "Features NFC chip contactless payment capability allowing quick tap-and-pay transactions up to ₹5,000 without requiring a PIN.",
        "Cardholders receive zero liability protection on lost or stolen cards when reported immediately to SBI customer care."
      ],
      link: "https://sbi.co.in/web/personal-banking/cards/debit-card"
    },
    { id: 65, name: "SBI RuPay Select", category: "debit card", company: "sbi", image: i65, 
      tags: ["Travel", "Lifestyle"],
      desc1: [
        "The SBI RuPay Select Debit Card is an exclusive high-tier lifestyle debit card issued on the indigenous RuPay payment network by State Bank of India. Engineered for premium account holders, it delivers luxury lifestyle benefits, high daily transaction capacities, and wellness perks normally associated with high-end credit cards.",
        "Cardholders enjoy complimentary domestic and international airport lounge access, exclusive golf privileges, health check-up benefits, wellness rewards, accelerated SBI Rewardz points, and personal accident insurance coverage."
      ],
      charges: [
        {
          "Joining Fee": "₹300 + GST",
          "Renewal Fee": "₹300 + GST",
          "Forex Markup": "3.50% of the transaction amount",
          "Cash Advance Charges": "Free domestic ATM limits apply; ₹15 to ₹20 per financial withdrawal beyond limits; ₹150 + taxes for international ATM withdrawals"
        }
      ],
      Benefits: [
        {
          title: "Airport Lounge Access (Domestic & International)",
          benifit: "Enjoy complimentary domestic airport lounge access (up to 2 visits per quarter) and international airport lounge access (up to 2 visits per year) across participating RuPay lounges."
        },
        {
          title: "Wellness & Golf Privileges",
          benifit: "Access complimentary golf rounds and lessons per year, free annual health check-up packages, spa access, and discounted gym memberships via the RuPay Select portal."
        },
        {
          title: "High Daily Spending Limits",
          benifit: "Features a high daily ATM cash withdrawal limit of ₹1,00,000 and a daily POS/e-commerce transaction limit of ₹2,00,000."
        },
        {
          title: "Comprehensive Accidental Cover",
          benifit: "Includes personal accidental death cover up to ₹10 Lakhs and air accident cover up to ₹20 Lakhs provided under NPCI RuPay Select scheme benefits."
        }
      ],
      pros: [
        "Delivers super-premium perks like complimentary golf lessons, spa access, health check-ups, and international lounge visits for a low annual fee of ₹300 + GST."
      ],
      cons: [
        "Lounge and wellness privileges must be claimed/booked in advance through the NPCI RuPay Select portal.",
        "Higher tier SBI account relationships or specific spend eligibility may be required for card issuance."
      ],
      desc2: [
        "SBI Rewardz points earned on transactions can be redeemed for travel, merchandise, or gift vouchers via the SBI Rewardz portal.",
        "Supports seamless contactless tap-and-pay transactions up to ₹5,000 without entering a PIN.",
        "Cardholders receive zero liability protection on lost or stolen cards upon immediate reporting to SBI customer care.",
        "Can be linked to UPI apps for convenient merchant payments directly from the linked SBI bank balance."
      ],
      link: "https://sbi.co.in/web/personal-banking/cards/debit-card"
    },
   ]


export default CardInfo;


