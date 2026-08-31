import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siam Azad — Data Analyst Portfolio",
  description:
    "Data Analyst specializing in SQL, Python, Power BI, and statistical modeling. Transforming complex, messy datasets into clear insights and actionable business decisions.",
  keywords: [
    "Siam Azad",
    "Data Analyst",
    "Business Intelligence",
    "SQL",
    "Python",
    "Power BI",
    "Data Visualization",
    "Portfolio",
  ],
  authors: [{ name: "Siam Azad" }],
  openGraph: {
    title: "Siam Azad — Data Analyst Portfolio",
    description: "RAW DATA → CLEAN DATA → ANALYSIS → VISUALIZATION → INSIGHT → DECISION",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-primary selection:bg-data-green selection:text-primary min-h-screen relative">
        {children}
      </body>
    </html>
  );
}

