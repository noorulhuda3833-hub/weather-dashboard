// Illustrated weather icons (sun, cloud, rain...) drawn as inline SVG.
// The gradient ids are shared: every icon on the page uses the same definitions.

const CLOUD = "M7 18h10a4 4 0 0 0 .6-7.96A5.5 5.5 0 0 0 7.1 8.6 4.7 4.7 0 0 0 7 18Z";

function kindFromCode(code) {
  if (code === 0) return "sun";
  if (code === 1 || code === 2) return "partly";
  if (code === 3) return "cloud";
  if (code === 45 || code === 48) return "fog";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "rain";
  if ([71, 73, 75].includes(code)) return "snow";
  if ([95, 96, 99].includes(code)) return "storm";
  return "cloud";
}

function Defs() {
  return (
    <defs>
      <radialGradient id="wi-sun" cx="35%" cy="30%" r="75%">
        <stop offset="0" stopColor="#ffe27a" />
        <stop offset="1" stopColor="#ff9d1c" />
      </radialGradient>
      <linearGradient id="wi-cloud" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#c9ddf2" />
      </linearGradient>
      <linearGradient id="wi-cloud-grey" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#dbe7f5" />
        <stop offset="1" stopColor="#9db6d0" />
      </linearGradient>
      <linearGradient id="wi-cloud-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#b8c6da" />
        <stop offset="1" stopColor="#7f93ad" />
      </linearGradient>
    </defs>
  );
}

function Sun({ cx = 12, cy = 12, r = 4.4, inner = 6.4, outer = 8.4 }) {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <g>
      <g stroke="#ffbe3a" strokeWidth="1.3" strokeLinecap="round">
        {angles.map((a) => {
          const rad = (a * Math.PI) / 180;
          return (
            <line
              key={a}
              x1={cx + Math.cos(rad) * inner}
              y1={cy + Math.sin(rad) * inner}
              x2={cx + Math.cos(rad) * outer}
              y2={cy + Math.sin(rad) * outer}
            />
          );
        })}
      </g>
      <circle cx={cx} cy={cy} r={r} fill="url(#wi-sun)" />
    </g>
  );
}

export default function WeatherIcon({ code, className = "h-10 w-10", title }) {
  const kind = kindFromCode(code);

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <Defs />

      {kind === "sun" && <Sun />}

      {kind === "partly" && (
        <>
          <Sun cx={15} cy={9} r={3.4} inner={5} outer={6.8} />
          <path d={CLOUD} transform="translate(0.1 6.2) scale(.82)" fill="url(#wi-cloud)" />
        </>
      )}

      {kind === "cloud" && (
        <path d={CLOUD} transform="translate(-1.2 -0.6) scale(1.1)" fill="url(#wi-cloud-grey)" />
      )}

      {kind === "fog" && (
        <g fill="none" stroke="#b7c9de" strokeWidth="1.8" strokeLinecap="round">
          <path d="M4 8.5h13M7 12.5h13M4 16.5h11" />
        </g>
      )}

      {kind === "rain" && (
        <>
          <path d={CLOUD} transform="translate(0 -2.4)" fill="url(#wi-cloud-grey)" />
          <g stroke="#4fb0ff" strokeWidth="1.7" strokeLinecap="round">
            <path d="M8.5 18l-1 3M12.5 18l-1 3M16.5 18l-1 3" />
          </g>
        </>
      )}

      {kind === "snow" && (
        <>
          <path d={CLOUD} transform="translate(0 -2.4)" fill="url(#wi-cloud-grey)" />
          <g fill="#e6f4ff">
            <circle cx="8.5" cy="18.6" r="1.1" />
            <circle cx="12.5" cy="20.4" r="1.1" />
            <circle cx="16.5" cy="18.6" r="1.1" />
          </g>
        </>
      )}

      {kind === "storm" && (
        <>
          <path d={CLOUD} transform="translate(0 -2.4)" fill="url(#wi-cloud-dark)" />
          <path
            d="M13 12.6l-3.4 4.8h2.8l-1.4 4.2 5-5.6h-3l1.2-3.4Z"
            fill="#ffd23f"
            stroke="#ffb703"
            strokeWidth=".4"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}
