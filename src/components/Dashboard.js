"use client";

import { useState } from "react";

import { fetchWeatherByCity } from "@/lib/weatherApi";

import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import ForecastList from "@/components/ForecastList";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorMessage from "@/components/ErrorMessage";

// Search bar starts completely empty
const DEFAULT_CITY = "";

export default function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function searchCity(cityName) {
    if (!cityName || cityName.trim() === "") {
      setError("Please enter a city name.");
      setWeatherData(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherByCity(cityName.trim());
      setWeatherData(data);
    } catch (err) {
      setError(
        err.message || "Something went wrong. Please try again."
      );
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      <header>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Weather Dashboard
        </h1>

        <p className="mt-2 text-muted">
          Get the current weather and a 6-day forecast for any city.
        </p>
      </header>

      <div className="mt-6">
        <SearchBar
          onSearch={searchCity}
          isLoading={isLoading}
          initialValue={DEFAULT_CITY}
        />
      </div>

      <div className="mt-6">
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

            <ForecastList daily={weatherData.daily} />
          </>
        )}

        {!isLoading && !error && !weatherData && (
          <p className="py-10 text-center text-muted">
            Search for a city to see the weather.
          </p>
        )}
      </div>

      <footer className="mt-4 text-sm text-faint">
        Weather data by{" "}
        <a
          href="https://open-meteo.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white hover:underline"
        >
          Open-Meteo
        </a>
      </footer>
    </main>
  );
}
