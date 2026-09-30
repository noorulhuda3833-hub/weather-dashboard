import { formatTemperature, getWeatherEmoji } from "@/utils/formatters";

export default function ForecastCard({ date, weatherCode, maxTemp, minTemp }) {
  // Turn "2025-06-01" into something like "Sun" and "Jun 1"
  const dayName = new Date(date + "T00:00:00").toLocaleDateString("en-US", { weekday: "short" });
  const shortDate = new Date(date + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return (
    <div className="bg-white text-gray-800 rounded-2xl p-4 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition">
      <p className="font-semibold">{dayName}</p>
      <p className="text-xs text-gray-500 mb-2">{shortDate}</p>

      <span className="text-4xl">{getWeatherEmoji(weatherCode)}</span>

      <div className="mt-3">
        <span className="text-lg font-bold text-indigo-700">{formatTemperature(maxTemp)}</span>
        <span className="text-sm text-gray-400 ml-2">{formatTemperature(minTemp)}</span>
      </div>
    </div>
  );
}
