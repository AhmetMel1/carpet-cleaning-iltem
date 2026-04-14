import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | İltem Halı Yıkama`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: true, follow: true },

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "İltem Halı Yıkama",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "tr_TR",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },

  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CleaningService",
              "@id": `${siteConfig.url}/#business`,
              name: "İltem Halı Yıkama",
              image: `${siteConfig.url}/og-image.png`,
              url: siteConfig.url,
              telephone: "+90 212 585 00 01",
              areaServed: [
                {
                  "@type": "City",
                  name: "Fatih",
                },
                {
                  "@type": "City",
                  name: "Zeytinburnu",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fatih",
                addressRegion: "İstanbul",
                addressCountry: "TR",
              },
              sameAs: ["https://wa.me/905356148309"],
              priceRange: "₺₺",
              currenciesAccepted: "TRY",
              paymentAccepted: "Cash, Credit Card",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  name: "Makine Halısı Yıkama",
                  description:
                    "Makine halıları için profesyonel yıkama ve hijyenik temizlik hizmeti.",
                  serviceType: "Makine Halısı Yıkama",
                  provider: { "@id": `${siteConfig.url}/#business` },
                  areaServed: [
                    { "@type": "Place", name: "Fatih, İstanbul" },
                    { "@type": "Place", name: "Zeytinburnu, İstanbul" },
                  ],
                },
                {
                  "@type": "Service",
                  name: "Yün Halı Yıkama",
                  description:
                    "Yün halılar için dokusuna uygun, özenli ve kontrollü temizlik hizmeti.",
                  serviceType: "Yün Halı Yıkama",
                  provider: { "@id": `${siteConfig.url}/#business` },
                  areaServed: [
                    { "@type": "Place", name: "Fatih, İstanbul" },
                    { "@type": "Place", name: "Zeytinburnu, İstanbul" },
                  ],
                },
                {
                  "@type": "Service",
                  name: "Shaggy Halı Yıkama",
                  description:
                    "Uzun tüylü shaggy halılar için özel temizlik ve kontrollü kurutma hizmeti.",
                  serviceType: "Shaggy Halı Yıkama",
                  provider: { "@id": `${siteConfig.url}/#business` },
                  areaServed: [
                    { "@type": "Place", name: "Fatih, İstanbul" },
                    { "@type": "Place", name: "Zeytinburnu, İstanbul" },
                  ],
                },
                {
                  "@type": "Service",
                  name: "Yolluk Yıkama",
                  description:
                    "Yolluk ve küçük ölçü halılar için dikkatli yıkama ve teslimat hizmeti.",
                  serviceType: "Yolluk Yıkama",
                  provider: { "@id": `${siteConfig.url}/#business` },
                  areaServed: [
                    { "@type": "Place", name: "Fatih, İstanbul" },
                    { "@type": "Place", name: "Zeytinburnu, İstanbul" },
                  ],
                },
                {
                  "@type": "Service",
                  name: "Overlok Hizmeti",
                  description:
                    "Halı kenarlarını güçlendirmek ve kullanım ömrünü uzatmak için overlok hizmeti.",
                  serviceType: "Overlok Hizmeti",
                  provider: { "@id": `${siteConfig.url}/#business` },
                  areaServed: [
                    { "@type": "Place", name: "Fatih, İstanbul" },
                    { "@type": "Place", name: "Zeytinburnu, İstanbul" },
                  ],
                },
                {
                  "@type": "Service",
                  name: "Adresten Alım ve Teslimat",
                  description:
                    "Fatih ve Zeytinburnu bölgelerinde adresten alım ve teslimat hizmeti.",
                  serviceType: "Adresten Alım ve Teslimat",
                  provider: { "@id": `${siteConfig.url}/#business` },
                  areaServed: [
                    { "@type": "Place", name: "Fatih, İstanbul" },
                    { "@type": "Place", name: "Zeytinburnu, İstanbul" },
                  ],
                },
              ],
            }),
          }}
        />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
