import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { StructuredData } from "@/components/structured-data"
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
  metadataBase: new URL("https://goretov.dev"),
  title: {
    default: "GORETOV — IT-студия Игоря Горетова",
    template: "%s | GORETOV",
  },
  description: "Разработка Telegram-ботов, Mini Apps, автоматизация бизнеса и цифровые решения под ключ. Создаю эффективные IT-решения для вашего бизнеса.",
  keywords: [
    "Telegram боты",
    "Mini Apps",
    "автоматизация бизнеса",
    "разработка ботов",
    "IT студия",
    "Игорь Горетов",
    "Telegram разработка",
    "web development",
    "custom IT solutions",
    "бизнес автоматизация",
    "CRM боты",
    "платежные боты",
    "AI боты",
  ],
  authors: [{ name: "Игорь Горетов", url: "https://t.me/aflerlyf3" }],
  creator: "Игорь Горетов",
  publisher: "GORETOV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://goretov.dev",
    siteName: "GORETOV",
    title: "GORETOV — IT-студия Игоря Горетова",
    description: "Разработка Telegram-ботов, Mini Apps, автоматизация бизнеса под ключ. Эффективные IT-решения для вашего бизнеса.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GORETOV — IT-студия Игоря Горетова",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GORETOV — IT-студия",
    description: "Telegram-боты, Mini Apps, автоматизация бизнеса",
    creator: "@goretov",
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
  alternates: {
    canonical: "https://goretov.dev",
  },
  verification: {
    // Добавьте коды верификации когда получите
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
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
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans antialiased">
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
