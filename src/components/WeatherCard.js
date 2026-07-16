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
    <div className="max-w-md mx-auto mt-8 px-6">
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
        <p className="text-black text-sm mb-2">
          {location.name}, {location.country}
        </p>

        <span className="text-5xl">{getWeatherEmoji(weatherCode)}</span>

        <p className="text-4xl font-bold mt-2 text-red-600">{formatTemperature(temperature)}</p>

        <p className="text-black mt-1">{getWeatherDescription(weatherCode)}</p>

        <div className="mt-6 w-full flex justify-around border-t pt-4">
          <div className="flex flex-col items-center">
            <span className="text-xs text-black uppercase">Humidity</span>
            <span className="text-lg font-medium">{humidity}%</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-black uppercase">Wind</span>
            <span className="text-lg font-medium">{windSpeed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
