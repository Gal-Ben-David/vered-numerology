import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ורד בן דוד - נומרולוגיה קבלית ייעוץ והכוונה",
  description: "ורד בן דוד - נומרולוגית מובילה בארץ. באתר יש ידע רב על נומרולוגיה, מסרים, השראה, מוטיבציה וטיפים לחיים עם משמעות ובחירה",
  openGraph: {
    title: "ורד בן דוד - נומרולוגיה, ייעוץ והכוונה",
    description: "נומרולוגית מובילה בארץ. מקדמת אנשים להתפתחות, צמיחה והעצמה אישית. בעלת קליניקה פרטית לפגישות אישיות ומעבירה סדנאות חוויתיות לקבוצות.",
    url: "https://vered-ben-david.netlify.app/",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dvykycdey/image/upload/f_webp/v1747826063/vered-ben-david-thumbnail_aexaot.png",
        width: 1100,
        height: 630,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ורד בן דוד - נומרולוגיה, ייעוץ והכוונה",
    description: "נומרולוגית מובילה בארץ. מקדמת אנשים להתפתחות, צמיחה והעצמה אישית. בעלת קליניקה פרטית לפגישות אישיות ומעבירה סדנאות חוויתיות לקבוצות.",
    images: ["https://res.cloudinary.com/dvykycdey/image/upload/f_webp/v1747826063/vered-ben-david-thumbnail_aexaot.png"],
  },
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
  )
}
