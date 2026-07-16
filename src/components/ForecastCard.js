import { formatTemperature, getWeatherEmoji } from "@/utils/formatters";

export default function ForecastCard({ date, weatherCode, maxTemp, minTemp }) {
  // Turn "2025-06-01" into something like "Sun" and "Jun 1"
  const dayName = new Date(date).toLocaleDateString("en-US", { weekday: "short" });
  const shortDate = new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return (
    <div className="flex flex-col items-center bg-white rounded-xl p-4 min-w-[100px] shadow-sm">
      <p className="text-xs text-black uppercase">{dayName}</p>
      <p className="text-xs text-black mb-2">{shortDate}</p>

      <span className="text-2xl">{getWeatherEmoji(weatherCode)}</span>

      <div className="mt-2 flex flex-col items-center">
        <span className="text-lg font-semibold">{formatTemperature(maxTemp)}</span>
        <span className="text-sm text-black">{formatTemperature(minTemp)}</span>
      </div>
    </div>
  );
}
