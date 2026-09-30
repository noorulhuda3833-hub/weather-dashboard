"use client";

import { useState } from "react";

export default function SearchBar({ onSearch, isLoading }) {
  const [cityInput, setCityInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(cityInput);
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg mx-auto gap-2 px-6">
      <input
        type="text"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        placeholder="🔍  Search a city, e.g. Lahore"
        className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-800 shadow-md focus:outline-none focus:ring-4 focus:ring-white/40"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-6 py-3 bg-indigo-900 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-950 transition disabled:opacity-50"
      >
        {isLoading ? "..." : "Search"}
      </button>
    </form>
  );
}
