import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const WEBSITE_URL =
  "https://muhammad-arif-ilham-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),

  title: {
    default: "Muhammad Arif Ilham | Full Stack Developer",
    template: "%s | Muhammad Arif Ilham",
  },

  description:
    "Portfolio Muhammad Arif Ilham, Full Stack Developer yang berfokus pada Laravel, React.js, Next.js, Inertia.js, Tailwind CSS, MySQL, GIS, Machine Learning, dan pengembangan aplikasi web modern.",

  keywords: [
    "Muhammad Arif Ilham",
    "Full Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Inertia.js",
    "Tailwind CSS",
    "JavaScript",
    "MySQL",
    "PostgreSQL",
    "GIS",
    "OpenLayers",
    "Machine Learning",
    "Artificial Intelligence",
    "Portfolio",
    "Web Developer Indonesia",
    "Pekanbaru",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Muhammad Arif Ilham",
      url: WEBSITE_URL,
    },
  ],

  creator: "Muhammad Arif Ilham",

  publisher: "Muhammad Arif Ilham",

  alternates: {
    canonical: WEBSITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Muhammad Arif Ilham | Full Stack Developer",

    description:
      "Explore my portfolio showcasing modern web applications, Laravel, React.js, Next.js, GIS, AI, and Full Stack Development projects.",

    url: WEBSITE_URL,

    siteName: "Muhammad Arif Ilham Portfolio",

    locale: "id_ID",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Arif Ilham Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Muhammad Arif Ilham | Full Stack Developer",

    description:
      "Portfolio of Muhammad Arif Ilham — Full Stack Developer specializing in Laravel, React.js, Next.js, GIS and Artificial Intelligence.",

    images: ["/og-image.png"],

    creator: "@ariifilhamm",
  },

  icons: {
  icon: "/logocv.ico",
  shortcut: "/logocv.ico",
  apple: "/logocv.ico",
},

  manifest: "/manifest.json",

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}