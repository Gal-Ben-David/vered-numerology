import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ורד בן דוד - נומרולוגיה קבלית ייעוץ והכוונה",
  description: "ורד בן דוד - נומרולוגית מובילה בארץ. באתר יש ידע רב על נומרולוגיה, מסרים, השראה, מוטיבציה וטיפים לחיים עם משמעות ובחירה",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="he">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&display=swap&subset=hebrew"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <div className="app-container">
          <main className="content-container main-layout">{children}</main>
        </div>
      </body>
    </html>
  );
}
