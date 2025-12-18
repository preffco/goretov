import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: false, // Secondary font, load on demand
})

export const metadata: Metadata = {
  title: "GORETOV — IT-студия Игоря Горетова",
  description: "Разработка Telegram-ботов, Mini Apps, автоматизация бизнеса и цифровые решения под ключ",
  keywords: ["Telegram боты", "Mini Apps", "автоматизация", "разработка", "IT студия", "Игорь Горетов"],
  authors: [{ name: "Игорь Горетов" }],
  creator: "Игорь Горетов",
  openGraph: {
    title: "GORETOV — IT-студия Игоря Горетова",
    description: "Telegram-боты, Mini Apps, автоматизация бизнеса под ключ",
    type: "website",
    locale: "ru_RU",
    siteName: "GORETOV",
  },
  twitter: {
    card: "summary_large_image",
    title: "GORETOV — IT-студия",
    description: "Telegram-боты, Mini Apps, автоматизация бизнеса",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
