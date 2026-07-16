import ForecastCard from "@/components/ForecastCard";

export default function ForecastList({ daily }) {
  if (!daily || !daily.time) return null;

  return (
    <div className="max-w-2xl mx-auto mt-8 px-6">
      <p className="text-sm text-black text-center mb-3">6-Day Forecast</p>
      <div className="flex flex-wrap justify-center gap-3">
        {daily.time.map((date, index) => (
          <ForecastCard
            key={date}
            date={date}
            weatherCode={daily.weather_code[index]}
            maxTemp={daily.temperature_2m_max[index]}
            minTemp={daily.temperature_2m_min[index]}
          />
        ))}
      </div>
    </div>
  );
}
