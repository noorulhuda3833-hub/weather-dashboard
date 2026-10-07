"use client";

import { useState } from "react";

export default function SearchBar({ onSearch, isLoading, initialValue = "" }) {
  const [cityInput, setCityInput] = useState(initialValue);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(cityInput);
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-3">
      <label htmlFor="city" className="sr-only">
        City name
      </label>
      <input
        id="city"
        type="text"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        placeholder="Search for a city"
        autoComplete="off"
        className="h-12 min-w-0 flex-1 rounded-lg border border-field-line bg-field px-5 text-lg text-white placeholder:text-faint focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="h-12 shrink-0 rounded-lg bg-accent px-6 text-lg font-bold text-[#04222e] transition hover:brightness-110 disabled:opacity-60 sm:px-8"
      >
        {isLoading ? "..." : "Search"}
      </button>
    </form>
  );
}
