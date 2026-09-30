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
    <>
      <main className="flex-1 flex flex-col py-12">
        <div className="text-center mb-8 px-6">
          <h1 className="text-4xl sm:text-5xl font-bold">🌤️ Weather Dashboard</h1>
          <p className="mt-3 text-blue-100">
            Get the current weather and a 6-day forecast for any city.
          </p>
        </div>

        <SearchBar onSearch={searchCity} isLoading={isLoading} />

        {isLoading && <LoadingSpinner />}

        {!isLoading && error && <ErrorMessage message={error} />}

        {!isLoading && !error && weatherData && (
          <>
            <WeatherCard
              location={weatherData.location}
              current={weatherData.current}
            />

            <ForecastList daily={weatherData.daily} />
          </>
        )}

        {!isLoading && !error && !weatherData && (
          <p className="text-center mt-16 text-blue-100">
            Search for a city to see the weather.
          </p>
        )}
      </main>

      <footer className="text-center text-sm text-blue-100 py-6">
        Weather data by{" "}
        <a
          href="https://open-meteo.com"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-white"
        >
          Open-Meteo
        </a>
      </footer>
    </>
  );
}
