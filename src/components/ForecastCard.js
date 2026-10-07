import { formatTemperature } from "@/utils/formatters";
import WeatherIcon from "@/components/WeatherIcon";

export default function ForecastCard({ date, weatherCode, maxTemp, minTemp }) {
  // "2025-06-01" -> "Sun". Adding the time keeps it in local time.
  const dayName = new Date(date + "T00:00:00").toLocaleDateString("en-US", { weekday: "short" });

  return (
    <li className="flex items-center gap-3 rounded-xl border border-tile-line bg-tile px-4 py-3 md:flex-col md:gap-2 md:px-3 md:py-4">
      <p className="flex-1 font-bold md:flex-none">{dayName}</p>

      <WeatherIcon code={weatherCode} className="h-9 w-9 md:h-12 md:w-12" />

      <p className="flex w-20 items-baseline justify-end gap-2 md:w-auto md:flex-col md:items-center md:gap-0">
        <span className="text-lg font-bold md:text-xl">{formatTemperature(maxTemp)}</span>
        <span className="text-sm text-faint">{formatTemperature(minTemp)}</span>
      </p>
    </li>
  );
}
