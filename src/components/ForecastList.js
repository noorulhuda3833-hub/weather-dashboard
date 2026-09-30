import ForecastCard from "@/components/ForecastCard";

export default function ForecastList({ daily }) {
  if (!daily || !daily.time) return null;

  return (
    <div className="max-w-4xl w-full mx-auto mt-10 px-6">
      <h3 className="text-xl font-bold mb-4">6-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
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
