import React from "react";
import i1 from '../assets/credit.webp';
import i2 from '../assets/general.webp';
import i3 from '../assets/debit.webp';

const Category = ({ setRoute, setCategory }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        
        <div 
          className="relative h-125 w-full rounded-2xl overflow-hidden group shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.15)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
          onClick={() => {
            setCategory('debit');
            setRoute('company');
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${i1})` }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500" />
          
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div className="flex justify-between items-center">
              <span className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase">Status</span>
              <div className="w-8 h-5 bg-white/20 rounded-sm backdrop-blur-md border border-white/30"></div>
            </div>
            <div>
              <h2 className="text-white text-3xl font-extrabold tracking-widest mb-2 drop-shadow-md">
                EXPLORE<br />DEBIT CARDS
              </h2>
              <p className="text-gray-400 text-sm font-medium tracking-[0.3em]">**** **** **** 1029</p>
            </div>
          </div>
        </div>

        {/* Card 2: General Cards */}
        <div 
          className="relative h-125 w-full rounded-2xl overflow-hidden group border border-white/10 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.15)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
          onClick={()=>setRoute('search')}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${i2})` }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500" />
          
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div className="flex justify-between items-center">
              <span className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase">Premium</span>
              <div className="w-8 h-5 bg-white/20 rounded-sm backdrop-blur-md border border-white/30"></div>
            </div>
            <div>
              <h2 className="text-white text-3xl font-extrabold tracking-widest mb-2 drop-shadow-md">
                FIND<br />YOUR CARD
              </h2>
              <p className="text-gray-400 text-sm font-medium tracking-[0.3em]">**** **** **** 8472</p>
            </div>
          </div>
        </div>

        {/* Card 3: Credit */}
        <div 
          className="relative h-125 w-full rounded-2xl overflow-hidden group border border-white/10 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.15)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
          onClick={() => {
            setCategory('credit');
            setRoute('company');
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${i3})` }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500" />
          
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div className="flex justify-between items-center">
              <span className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase">Elite</span>
              <div className="w-8 h-5 bg-white/20 rounded-sm backdrop-blur-md border border-white/30"></div>
            </div>
            <div>
              <h2 className="text-white text-3xl font-extrabold tracking-widest mb-2 drop-shadow-md">
                EXPLORE<br />CREDIT CARD
              </h2>
              <p className="text-gray-400 text-sm font-medium tracking-[0.3em]">**** **** **** 5591</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Category;