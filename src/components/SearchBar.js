"use client";

import { useState } from "react";

export default function SearchBar({ onSearch, isLoading }) {
  const [cityInput, setCityInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(cityInput);
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto gap-2 px-6">
      <input
        type="text"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        placeholder="Search a city..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-amber-50"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? "..." : "Search"}
      </button>
    </form>
  );
}
