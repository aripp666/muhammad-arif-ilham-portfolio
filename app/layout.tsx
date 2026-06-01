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

export const metadata: Metadata = {
  title: {
    default: "Muhammad Arif Ilham | Full Stack Developer",
    template: "%s | Muhammad Arif Ilham",
  },

  description:
    "Portfolio Muhammad Arif Ilham, Full Stack Developer yang berfokus pada Laravel, React JS, Next.js, Inertia, Tailwind CSS, MySQL, GIS, AI, dan pengembangan aplikasi web modern.",

  keywords: [
    "Muhammad Arif Ilham",
    "Ilham Developer",
    "Full Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "Inertia JS",
    "Tailwind CSS",
    "MySQL",
    "GIS Developer",
    "OpenLayers",
    "Machine Learning",
    "Portfolio Developer",
    "Web Developer Indonesia",
    "Pekanbaru Developer",
  ],

  authors: [
    {
      name: "Muhammad Arif Ilham",
    },
  ],

  creator: "Muhammad Arif Ilham",

  metadataBase: new URL(
    "https://your-domain.com"
  ),

  openGraph: {
    title: "Muhammad Arif Ilham | Full Stack Developer",
    description:
      "Portfolio Full Stack Developer dengan pengalaman Laravel, React JS, Next.js, GIS, AI, dan berbagai project web modern.",

    url: "https://your-domain.com",

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
      "Portfolio Full Stack Developer dengan fokus Laravel, React JS, Next.js, GIS, dan AI.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}