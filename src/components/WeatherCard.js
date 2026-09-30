import { formatTemperature, getWeatherDescription, getWeatherEmoji } from "@/utils/formatters";

export default function WeatherCard({ location, current }) {
  if (!location || !current) return null;

  const {
    temperature_2m: temperature,
    weather_code: weatherCode,
    relative_humidity_2m: humidity,
    wind_speed_10m: windSpeed,
  } = current;

  return (
    <div className="max-w-lg w-full mx-auto mt-10 px-6">
      <div className="bg-white text-gray-800 rounded-3xl shadow-xl p-8 text-center">
        <h2 className="text-2xl font-bold">
          📍 {location.name}, {location.country}
        </h2>

        <div className="text-8xl mt-6">{getWeatherEmoji(weatherCode)}</div>

        <p className="text-6xl font-bold mt-4 text-indigo-700">
          {formatTemperature(temperature)}C
        </p>

        <p className="text-lg text-gray-500 mt-2">{getWeatherDescription(weatherCode)}</p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-xl py-4">
            <p className="text-sm text-gray-500">💧 Humidity</p>
            <p className="text-xl font-semibold mt-1">{humidity}%</p>
          </div>
          <div className="bg-blue-50 rounded-xl py-4">
            <p className="text-sm text-gray-500">💨 Wind</p>
            <p className="text-xl font-semibold mt-1">{windSpeed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
