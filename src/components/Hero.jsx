import React from "react";
import image from "../assets/Hero.png";

const Hero = ({setRoute}) => {
    return (
        <div className="relative h-screen w-full overflow-hidden">

            <img
                src={image}
                alt="FinVerse financial cards"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>

            <div className="absolute left-10 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 text-white max-w-2xl">

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Fin<span className="text-blue-400">Verse</span>
                </h1>

                <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                    A Smart Financial
                    <br />
                    Product Discovery Platform
                </h2>


                <div className="mt-8 flex gap-4">

                    <button
                        className="
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
                        onClick={()=>setRoute('search')}
                        >
                        Find your card →
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Hero;