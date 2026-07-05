import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const siteUrl = "https://chanduchowdary8978.github.io/Chandu_Portfolio"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chandu | Machine Learning Engineer",
  description:
    "Portfolio of Bondu Chandu — Machine Learning Engineer building intelligent systems from mathematical foundations to production deployment.",
  keywords: [
    "Bondu Chandu",
    "Machine Learning Engineer",
    "Deep Learning",
    "ML Systems",
    "Distributed Training",
    "PyTorch",
  ],
  authors: [{ name: "Bondu Chandu", url: siteUrl }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Chandu | Machine Learning Engineer",
    description:
      "Building intelligent systems from mathematical foundations to production deployment.",
    url: siteUrl,
    siteName: "Chandu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandu | Machine Learning Engineer",
    description:
      "Building intelligent systems from mathematical foundations to production deployment.",
  },
}

export const viewport: Viewport = {
  themeColor: "#0d1117",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
