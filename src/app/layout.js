import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "./globals.css";

export const metadata = {
  title: "Weather Dashboard",
  description: "Current weather and a 6-day forecast for any city, powered by Open-Meteo.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07111f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
