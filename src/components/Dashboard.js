"use client";

import { useState } from "react";

import { fetchWeatherByCity } from "@/lib/weatherApi";

import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import ForecastList from "@/components/ForecastList";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorMessage from "@/components/ErrorMessage";

export default function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function searchCity(cityName) {
    if (!cityName || cityName.trim() === "") {
      setError("Please enter a city name.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherByCity(cityName.trim());
      setWeatherData(data);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex-1 flex flex-col py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-amber-50 ">
        Weather Dashboard
      </h1>

      <SearchBar
        onSearch={searchCity}
        isLoading={isLoading}
      />

      {isLoading && <LoadingSpinner />}

      {!isLoading && error && (
        <ErrorMessage message={error} />
      )}

      {!isLoading && !error && weatherData && (
        <>
          <WeatherCard
            location={weatherData.location}
            current={weatherData.current}
          />

          <ForecastList
            daily={weatherData.daily}
          />
        </>
      )}

      {!isLoading && !error && !weatherData && (
        <p className="text-sm text-black text-center mt-12">
          Search for a city to see the weather.
        </p>
      )}
    </main>
  );
}