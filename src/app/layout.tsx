import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Angelica Gore Photography | Professional Photography in Cuba, MO",
    template: "%s | Angelica Gore Photography"
  },
  description: "Professional photography services in Cuba, MO. Specializing in portraits, senior photos, family sessions, events, and sports photography. Book your session today!",
  keywords: ["photography", "Cuba MO", "portrait photographer", "senior photos", "family photography", "event photography", "sports photography", "Angelica Gore"],
  authors: [{ name: "Angelica Gore" }],
  creator: "Angelica Gore Photography",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://verdantmission.org",
    title: "Angelica Gore Photography | Professional Photography in Cuba, MO",
    description: "Professional photography services in Cuba, MO. Specializing in portraits, senior photos, family sessions, events, and sports photography.",
    siteName: "Angelica Gore Photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelica Gore Photography",
    description: "Professional photography services in Cuba, MO",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
