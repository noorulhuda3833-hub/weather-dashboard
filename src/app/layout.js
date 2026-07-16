import "./globals.css";

export const metadata = {
  title: "Weather Dashboard",
  description: "Check the current weather and forecast for any city.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
