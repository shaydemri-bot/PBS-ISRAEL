import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "PBS Israel - פתרונות Xypex לאיטום בטון",
  description: "מומחים לפתרונות איטום ושיקום תשתיות באמצעות טכנולוגיית Xypex המתקדמת. מתקני התפלה, מנהרות, תשתיות לאומיות.",
  keywords: "Xypex, איטום בטון, איטום גבישי, PBS Israel, מתקני התפלה, תשתיות",
  openGraph: {
    title: "PBS Israel - Xypex Crystalline Waterproofing",
    description: "פתרונות מתקדמים לאיטום וחיזוק בטון לפרויקטים לאומיים",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://static.wixstatic.com" />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
