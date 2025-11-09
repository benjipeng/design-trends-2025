import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Trends 2025",
  description: "Explore the latest design trends shaping the digital landscape in 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
