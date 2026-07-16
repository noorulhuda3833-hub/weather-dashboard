async function getCoordinatesForCity(cityName) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    cityName
  )}&count=1&language=en&format=json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch city coordinates.");
  }

  const data = await response.json();
  if (!data.results || data.results.length === 0) {
    throw new Error(`City "${cityName}" not found. Please check the spelling.`);
  }

  const { latitude, longitude, name, country } = data.results[0];
  return { latitude, longitude, name, country };
}

// Step 2: get current weather + 6-day forecast for those coordinates.
async function getWeatherForCoordinates(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=6`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data.");
  }

  return response.json();
}


export async function fetchWeatherByCity(cityName) {
  const location = await getCoordinatesForCity(cityName);
  const weatherData = await getWeatherForCoordinates(location.latitude, location.longitude);

  return {
    location,
    current: weatherData.current,
    daily: weatherData.daily,
  };
}
