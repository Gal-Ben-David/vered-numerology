import type { Metadata } from "next";
import "./globals.css";
import { Accessibility } from "@/cmps/accessibility/Accessibility";

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
        url: "https://res.cloudinary.com/dvykycdey/image/upload/w_150,h_160,c_thumb,f_webp/v1746963249/vered-profile-img_pyjqlo.jpg",
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
    images: ["https://res.cloudinary.com/dvykycdey/image/upload/w_150,h_160,c_thumb,f_webp/v1746963249/vered-profile-img_pyjqlo.jpg"],
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="he">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dvykycdey/image/upload/f_auto,q_auto/v1745910915/cover-img_small_z9c5am.jpg"
          type="image/webp"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&display=swap&subset=hebrew"
          rel="stylesheet"
        />

        <script defer data-domain="vered-ben-david.netlify.app" src="https://plausible.io/js/script.outbound-links.pageview-props.tagged-events.js"></script>
      </head>
      <body suppressHydrationWarning>
        <div className="app-container">
          <Accessibility />
          <main className="content-container main-layout">{children}</main>
        </div>
      </body>
    </html>
  )
}
