import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Assistant } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const assistant = Assistant({
  subsets: ["hebrew"],
  variable: "--font-assistant",
})

export const metadata: Metadata = {
  title: "ורד בן דוד - נומרולוגיה קבלית ייעוץ והכוונה",
  description: "ורד בן דוד - נומרולוגית מובילה בארץ. באתר יש ידע רב על נומרולוגיה, מסרים, השראה, מוטיבציה וטיפים לחיים עם משמעות ובחירה",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="he" dir="rtl">
      <body suppressHydrationWarning className={`${assistant.variable}`}>
        <div className="app-container">
          <main className="content-container">{children}</main>
        </div>
      </body>
    </html>
  );
}
