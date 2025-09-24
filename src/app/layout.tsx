import type { Metadata, Viewport } from "next";
import { Poppins, Cabin } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "D-LOU Legal Consulting - Votre Partenaire pour Investir au Sénégal",
    template: "%s | D-LOU Legal Consulting"
  },
  description: "D-LOU Legal Consulting accompagne les investisseurs étrangers dans leurs projets d'investissement et d'installation au Sénégal. Expertise juridique, conseil en droit des affaires, et suivi personnalisé pour réussir vos investissements.",
  keywords: [
    "conseil juridique Sénégal",
    "investissement Sénégal",
    "droit des affaires",
    "cabinet d'avocats Dakar",
    "conseil investisseurs étrangers",
    "création entreprise Sénégal",
    "D-LOU Legal Consulting",
    "expertise juridique",
    "accompagnement juridique"
  ],
  authors: [{ name: "D-LOU Legal Consulting" }],
  creator: "D-LOU Legal Consulting",
  publisher: "D-LOU Legal Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.d-lou.sn'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-SN': '/fr',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "D-LOU Legal Consulting - Votre Partenaire pour Investir au Sénégal",
    description: "D-LOU Legal Consulting accompagne les investisseurs étrangers dans leurs projets d'investissement et d'installation au Sénégal. Expertise juridique et suivi personnalisé.",
    url: 'https://www.d-lou.sn',
    siteName: 'D-LOU Legal Consulting',
    images: [
      {
        url: '/d-lou_logo.png',
        width: 1200,
        height: 630,
        alt: 'D-LOU Legal Consulting - Cabinet d\'avocats au Sénégal',
      },
    ],
    locale: 'fr_SN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "D-LOU Legal Consulting - Votre Partenaire pour Investir au Sénégal",
    description: "D-LOU Legal Consulting accompagne les investisseurs étrangers dans leurs projets d'investissement et d'installation au Sénégal.",
    images: ['/d-lou_logo.png'],
    creator: '@dloulegal',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/d-lou_logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/d-lou_logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/d-lou_logo.png',
    apple: [
      { url: '/d-lou_logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/d-lou_logo.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'Legal Services',
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "D-LOU Legal Consulting",
    "description": "Cabinet d'avocats spécialisé dans l'accompagnement des investisseurs étrangers au Sénégal",
    "url": "https://www.d-lou.sn",
    "logo": "https://www.d-lou.sn/d-lou_logo.png",
    "image": "https://www.d-lou.sn/d-lou_logo.png",
    "telephone": "+221-XX-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Adresse du cabinet",
      "addressLocality": "Dakar",
      "addressCountry": "SN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "14.6937",
      "longitude": "-17.4441"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country",
      "name": "Sénégal"
    },
    "areaServed": "Sénégal",
    "knowsAbout": [
      "Droit des affaires",
      "Investissement étranger",
      "Création d'entreprise",
      "Conseil juridique"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/d-lou-legal-consulting",
      "https://twitter.com/dloulegal"
    ]
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${cabin.variable} antialiased font-cabin`}
      >
        {children}
      </body>
    </html>
  );
}
