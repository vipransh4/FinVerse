import React, { useState } from "react";
import CardInfo from "./CardInfo";

const Search = ({ setCardName, setRoute }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedTags, setSelectedTags] = useState([]);

  const companies = [
    ...new Set(CardInfo.map((card) => card.company).filter(Boolean)),
  ].sort();

  const allTags = [
    ...new Set(CardInfo.flatMap((card) => card.tags || [])),
  ].sort();

  const filteredCards = CardInfo.filter((card) => {
    const matchesName = card.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      card.category?.toLowerCase() === selectedCategory;

    const matchesCompany =
      selectedCompany === "all" ||
      card.company?.toLowerCase() === selectedCompany.toLowerCase();

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => (card.tags || []).includes(tag));

    return (
      matchesName &&
      matchesCategory &&
      matchesCompany &&
      matchesTags
    );
  });

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedCompany("all");
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-5 md:p-7">
      {/* Back to Home */}
      <button
        onClick={() => setRoute("hero")}
        className="fixed top-5 left-5 z-50 px-5 py-3 text-lg font-medium
        bg-neutral-900/90 border border-white/60 rounded-lg shadow-lg
        backdrop-blur-md transition hover:bg-white hover:text-black"
      >
        ← Back to home
      </button>

      {/* Search Bar */}
      <div className="w-full max-w-2xl mx-auto mt-10 mb-10">
        <input
          type="text"
          placeholder="Search card by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 text-lg rounded-xl bg-neutral-800
          text-white border border-neutral-700 focus:outline-none
          focus:border-blue-400 transition"
        />
      </div>

      {/* Sidebar + Cards */}
      <div className="w-full max-w-[1380px] mx-auto flex flex-col md:flex-row gap-10 px-4">

        {/* Filter Sidebar */}
          <aside
            className="w-full md:w-64 lg:w-72 xl:w-80 shrink-0
            self-start md:sticky md:top-25
            bg-neutral-900 border border-neutral-800
            rounded-2xl p-5"
          >

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Filter Cards</h2>
            <button
              onClick={resetFilters}
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Reset
            </button>
          </div>

          {/* Card Type */}
          <div className="mb-7">
            <h3 className="font-semibold mb-3 text-neutral-200">
              Card Type
            </h3>

            {[
              { label: "All Cards", value: "all" },
              { label: "Credit Cards", value: "credit card" },
              { label: "Debit Cards", value: "debit card" },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-3 mb-3 text-sm
                text-neutral-300 cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === option.value}
                  onChange={() => setSelectedCategory(option.value)}
                  className="accent-blue-400"
                />
                {option.label}
              </label>
            ))}
          </div>

          <div className="border-t border-neutral-800 my-5" />

          {/* Company */}
          <div className="mb-7">
            <h3 className="font-semibold mb-3 text-neutral-200">
              Company
            </h3>

            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="w-full p-3 rounded-lg bg-neutral-800
              border border-neutral-700 text-sm focus:outline-none
              focus:border-blue-400"
            >
              <option value="all">All Companies</option>
              {companies.map((company) => (
                <option key={company} value={company}>
                  {company.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <div className="border-t border-neutral-800 my-5" />

          {/* Benefits / Tags */}
          <div>
            <h3 className="max-h-30 overflow-y-auto mb-3 pr-2 mt-3 black-scrollbar">
              Benefits & Categories
            </h3>

            {allTags.length > 0 ? (
              <div className="h-40 overflow-y-auto pr-2 black-scrollbar">
                {allTags.map((tag) => (
                  <label
                    key={tag}
                    className="flex items-start gap-3 mb-3 text-sm
                    text-neutral-300 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() =>
                        setSelectedTags((previous) =>
                          previous.includes(tag)
                            ? previous.filter((item) => item !== tag)
                            : [...previous, tag]
                        )
                      }
                      className="mt-1 accent-blue-400"
                    />
                    <span>{tag}</span>
                  </label>
                ))}
              </div>
            ) : (
              <p className="text-sm text-neutral-500">
                No tags available.
              </p>
            )}
          </div>
        </aside>

        {/* Card Grid */}
        <main className="flex-1 min-w-0">
          <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
            <h2 className="text-xl font-semibold">
              Explore Cards
            </h2>
            <p className="text-sm text-neutral-400">
              {filteredCards.length} cards found
            </p>
          </div>

          {filteredCards.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => {
                    if (setCardName) setCardName(card.name);
                    if (setRoute) setRoute("details");
                  }}
                  className="bg-neutral-800 p-5 rounded-2xl flex flex-col
                  items-center justify-between border border-neutral-800
                  transition-all duration-300 hover:scale-[1.02]
                  hover:border-blue-300/60 hover:shadow-xl cursor-pointer"
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-44 object-contain mb-5"
                  />

                  <p className="text-center font-semibold text-sm
                  text-neutral-100">
                    {card.name}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-neutral-400 py-20
            bg-neutral-900 rounded-2xl border border-neutral-800">
              <p className="text-lg mb-2">No cards found</p>
              <p className="text-sm">
                Try changing your search or filters.
              </p>
              <button
                onClick={resetFilters}
                className="mt-5 px-5 py-2 rounded-lg bg-white
                text-black font-medium hover:bg-neutral-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Search;