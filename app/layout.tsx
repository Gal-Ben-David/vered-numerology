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
        url: "https://res.cloudinary.com/dvykycdey/image/upload/w_120,h_120,f_webp/v1745423327/vered-img_genget.jpg",
        width: 120,
        height: 120,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "ורד בן דוד - נומרולוגיה, ייעוץ והכוונה",
    description: "נומרולוגית מובילה בארץ. מקדמת אנשים להתפתחות, צמיחה והעצמה אישית. בעלת קליניקה פרטית לפגישות אישיות ומעבירה סדנאות חוויתיות לקבוצות.",
    images: ["https://res.cloudinary.com/dvykycdey/image/upload/w_120,h_120,f_webp/v1745423327/vered-img_genget.jpg"],
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
