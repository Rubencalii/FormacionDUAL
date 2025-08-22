import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D OR Agency — Social Media Marketing (Facebook & TikTok Ads)",
  description: "Agencia premium enfocada en performance: Facebook Ads, TikTok Ads, UGC y CRO. Generamos crecimiento rentable.",
  openGraph: {
    title: "D OR Agency",
    description: "Agencia premium de Social Ads",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "D OR Agency",
    description: "Agencia premium de Social Ads",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"Organization",
            "name":"D OR Agency",
            "url":"https://dor-agency.netlify.app",
            "sameAs":[]
          })}}
        />
      </body>
    </html>
  );
}
