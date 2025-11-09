import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: "Design Trends 2025 - Showcase",
  description: "Explore 5 unique design trends shaping the digital landscape in 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Lora:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Josefin+Sans:wght@300;400;600;700&family=Lato:wght@300;400;700;900&family=Poppins:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700;900&family=Roboto+Mono:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="pt-24 md:pt-28">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
