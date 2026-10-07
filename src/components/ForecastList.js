import ForecastCard from "@/components/ForecastCard";

export default function ForecastList({ daily }) {
  if (!daily || !daily.time) return null;

  return (
    <section aria-labelledby="forecast-title" className="mt-8">
      <h2 id="forecast-title" className="mb-3 text-lg font-bold">
        {daily.time.length}-Day Forecast
      </h2>
      <ul className="flex flex-col gap-2 md:grid md:grid-cols-6 md:gap-3">
        {daily.time.map((date, index) => (
          <ForecastCard
            key={date}
            date={date}
            weatherCode={daily.weather_code[index]}
            maxTemp={daily.temperature_2m_max[index]}
            minTemp={daily.temperature_2m_min[index]}
          />
        ))}
      </ul>
    </section>
  );
}
