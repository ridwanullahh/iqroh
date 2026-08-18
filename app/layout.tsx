import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Amiri, Noto_Naskh_Arabic as NotoNaskhArabic } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Shell } from "@/components/ui/shell"
import { Toaster } from "@/components/ui/toaster"
import SpacedRepetitionInitializer from "@/components/spaced-repetition-initializer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amari",
  display: "swap",
})

const naskh = NotoNaskhArabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-naskh",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Iqroh - Learn Qur'anic Reading",
    template: "%s - Iqroh",
  },
  description:
    "Master Qur'anic reading with our comprehensive curriculum. Interactive lessons, audio pronunciation, writing practice, and spaced-repetition review.",
  keywords: "Qur'an, Arabic, Tajweed, Islamic education, reading, learning, mobile app, Iqra",
  authors: [{ name: "Iqroh Team" }],
  applicationName: "Iqroh",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Iqroh",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF8F1" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0E0C" },
  ],
  colorScheme: "dark light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Iqroh" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/placeholder-logo.svg" />
      </head>
      <body
        className={`${inter.variable} ${amiri.variable} ${naskh.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SpacedRepetitionInitializer />
          <Shell>{children}</Shell>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
