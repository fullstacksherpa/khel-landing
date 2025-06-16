import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/site-config";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [
    {
      name: "Ongchen Sherpa",
      url: "https://github.com/fullstacksherpa",
    },
  ],
  keywords: ["Futsal booking website", "Kathmandu Sports", "Basketball Nepal", "Venue booking app"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/gocloudlogo.png" sizes="any" />
      <link rel="apple-touch-icon" sizes="180x180" href="/gocloudlogo.png" />
      <body className={`min-h-screen ${firaCode.className} overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
