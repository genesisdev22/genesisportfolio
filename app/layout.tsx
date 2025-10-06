import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/lib/i18n"
import "./globals.css"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Genesis Patiño Urquijo",
  "jobTitle": "Desarrolladora Fullstack",
  "url": "https://genesispatino.dev",
  "sameAs": [
    "https://github.com/genesis-patino", // Reemplaza con tu GitHub real
    "https://linkedin.com/in/genesis-patino" // Reemplaza con tu LinkedIn real
  ],
  "knowsAbout": ["React", "React Native", "Node.js", "NestJS", "JavaScript", "TypeScript", "Fullstack Development"],
  "description": "Desarrolladora Fullstack especializada en React, React Native, Node.js y NestJS"
}

export const metadata: Metadata = {
  metadataBase: new URL("https://genesispatino.dev"),
  title: "Genesis Patiño Urquijo - Desarrolladora Fullstack",
  description:
    "Portafolio profesional de Genesis Patiño Urquijo, Desarrolladora Fullstack especializada en React, React Native, Node.js y NestJS",
  keywords: ["desarrolladora fullstack", "React", "React Native", "Node.js", "NestJS", "portfolio", "Genesis Patiño Urquijo"],
  generator: "v0.app",
  openGraph: {
    title: "Genesis Patiño Urquijo - Desarrolladora Fullstack",
    description: "Portafolio profesional de Genesis Patiño Urquijo, Desarrolladora Fullstack especializada en React, React Native, Node.js y NestJS",
    url: "https://genesispatino.dev", // Reemplaza con tu dominio real
    siteName: "Portfolio de Genesis Patiño Urquijo",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Genesis Patiño Urquijo - Desarrolladora Fullstack",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genesis Patiño Urquijo - Desarrolladora Fullstack",
    description: "Portafolio profesional de Genesis Patiño Urquijo, Desarrolladora Fullstack especializada en React, React Native, Node.js y NestJS",
    images: ["/placeholder.jpg"],
  },
  alternates: {
    canonical: "https://genesispatino.dev", // Reemplaza con tu dominio real
  },
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
  icons: {
    icon: "/placeholder-logo.png",
    shortcut: "/placeholder-logo.png",
    apple: "/placeholder-logo.png",
  },
  other: {
    "script:application/ld+json": JSON.stringify(jsonLd),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
