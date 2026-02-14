import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import ProgressBar from "@/components/ProgressBar";

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
        {/* Critical Hero Images Preload - Performance Optimization */}
        <link rel="preload" as="image" href="/images/DOLFVIEW.jpeg" />
        <link rel="preload" as="image" href="/images/chin.jpeg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://static.wixstatic.com" />

        {/* Microsoft Clarity - Real-time User Behavior Tracking */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","vh7jgiyb2m");
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ProgressBar />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
