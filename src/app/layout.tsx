import type { Metadata } from "next";
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
  title: "D-LOU Legal Consulting - Votre Partenaire pour Investir au Sénégal",
  description: "D-LOU Legal Consulting accompagne les investisseurs étrangers dans leurs projets d'investissement et d'installation au Sénégal. Expertise juridique et suivi personnalisé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${cabin.variable} antialiased font-cabin`}
      >
        {children}
      </body>
    </html>
  );
}
