import "./globals.css";

export const metadata = {
  title: "Weather Dashboard",
  description: "Check the current weather and forecast for any city.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
        {children}
      </body>
    </html>
  );
}
