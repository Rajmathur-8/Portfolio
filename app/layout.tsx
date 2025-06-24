import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Raj Mathur | Professional Portfolio",
  description:
    "Experienced Software Developer specializing in React, Node.js, and modern web technologies. View my projects, skills, and experience.",
  keywords: [
    "full stack developer",
    "react developer",
    "node.js",
    "web development",
    "portfolio",
    "javascript",
    "typescript",
  ],
  authors: [{ name: "Raj Mathur", url: "https://johndoe.dev" }],
  creator: "Raj Mathur",
  publisher: "Raj Mathur",
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
    url: "https://johndoe.dev",
    title: "Raj Mathur - Software Developer",
    description: "Professional portfolio showcasing full stack development expertise",
    siteName: "Raj Mathur Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Mathur - Software Developer",
    description: "Professional portfolio showcasing full stack development expertise",
    creator: "@RajMathur03",
  },
  generator: 'v0.dev'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const themeColor = [
  { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
  { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
