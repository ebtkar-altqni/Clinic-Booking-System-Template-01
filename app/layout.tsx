import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MediCare Clinic - Professional Healthcare Services",
  description:
    "Book appointments with our experienced doctors. Professional healthcare services with easy online booking system.",
  keywords: "clinic, healthcare, doctor appointment, medical services, booking",
  authors: [{ name: "MediCare Clinic" }],
  openGraph: {
    title: "MediCare Clinic - Professional Healthcare Services",
    description: "Book appointments with our experienced doctors",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
