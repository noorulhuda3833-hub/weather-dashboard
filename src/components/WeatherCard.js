import { formatTemperature, getWeatherDescription } from "@/utils/formatters";
import WeatherIcon from "@/components/WeatherIcon";

export default function WeatherCard({ location, current }) {
  if (!location || !current) return null;

  const {
    temperature_2m: temperature,
    apparent_temperature: feelsLike,
    weather_code: weatherCode,
    relative_humidity_2m: humidity,
    wind_speed_10m: windSpeed,
  } = current;

  const description = getWeatherDescription(weatherCode);

  const stats = [
    { label: "Feels like", value: formatTemperature(feelsLike) },
    { label: "Wind", value: `${Math.round(windSpeed)} km/h` },
    { label: "Humidity", value: `${humidity}%` },
  ];

  return (
    <section
      aria-label={`Current weather in ${location.name}`}
      className="rounded-2xl border border-panel-line bg-gradient-to-br from-[#12304d] to-[#0e2640] p-6 sm:p-7"
    >
      <div className="flex items-stretch justify-between gap-4">
        <div className="flex min-w-0 flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              {location.name}, {location.country}
            </h2>
            <p className="mt-1 text-muted">{description}</p>
          </div>
          <p className="mt-8 text-6xl font-bold leading-none sm:text-7xl">
            {formatTemperature(temperature)}C
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-6 lg:gap-12">
          <WeatherIcon
            code={weatherCode}
            title={description}
            className="h-24 w-24 self-start sm:h-32 sm:w-32 sm:self-center"
          />

          <dl className="hidden flex-col justify-between self-stretch py-1 text-right text-muted sm:flex">
            {stats.map((s) => (
              <div key={s.label} className="flex justify-end gap-2">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* on small screens the stats sit under the temperature */}
      <dl className="mt-6 grid grid-cols-3 gap-2 border-t border-panel-line pt-4 text-sm text-muted sm:hidden">
        {stats.map((s) => (
          <div key={s.label}>
            <dt>{s.label}</dt>
            <dd className="mt-0.5 text-base font-bold text-white">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
