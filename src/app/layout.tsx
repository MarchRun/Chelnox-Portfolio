import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://chelnox-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CHELNOX | Marchel Karuna Kwee - Web Portfolio",
    template: "%s | CHELNOX",
  },
  description:
    "My name is Marchel Karuna Kwee. My journey in technology began with a deep curiosity about how software is crafted to solve real-world problems. That curiosity has since evolved into a professional dedication to Software Development. I am focused on building robust, efficient, and user-centric software solutions, with a strong passion for continuously exploring the broad spectrum of technologies within the industry.",
  keywords: [
    "web developer",
    "portfolio",
    "Marchel Karuna Kwee",
    "CHELNOX",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "Go",
    "Next.js",
    "React",
    "TypeScript",
    "Indonesia",
  ],
  authors: [{ name: "Marchel Karuna Kwee", url: siteUrl }],
  creator: "Marchel Karuna Kwee",
  publisher: "CHELNOX",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CHELNOX",
    title: "CHELNOX | Marchel Karuna Kwee - Software Developer",
    description:
      "My name is Marchel Karuna Kwee. My journey in technology began with a deep curiosity about how software is crafted to solve real-world problems. That curiosity has since evolved into a professional dedication to Software Development. I am focused on building robust, efficient, and user-centric software solutions, with a strong passion for continuously exploring the broad spectrum of technologies within the industry.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CHELNOX - Marchel Karuna Kwee Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHELNOX | Marchel Karuna Kwee - Web Developer",
    description:
      "My name is Marchel Karuna Kwee. My journey in technology began with a deep curiosity about how software is crafted to solve real-world problems. That curiosity has since evolved into a professional dedication to Software Development. I am focused on building robust, efficient, and user-centric software solutions, with a strong passion for continuously exploring the broad spectrum of technologies within the industry.",
    images: ["/og-image.png"],
    creator: "@chelnox",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ThemeToggle />
        <Analytics />
      </body>
    </html>
  );
}
