import type React from "react"
import type { Metadata } from "next"
import { Inter, Amiri } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import MobileBottomNav from "@/components/mobile-bottom-nav"
import { Toaster } from "@/components/ui/toaster"
import SpacedRepetitionInitializer from "@/components/spaced-repetition-initializer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
})

export const metadata: Metadata = {
  title: "Iqroh - Learn Qur'anic Reading in 30 Days",
  description: "Master Qur'anic reading with our comprehensive 30-day curriculum. Interactive lessons, audio pronunciation, and modern mobile-first design.",
  keywords: "Qur'an, Arabic, Tajweed, Islamic education, reading, learning, mobile app",
  authors: [{ name: "Iqroh Team" }],
  generator: 'v0.dev',
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#10b981" },
    { media: "(prefers-color-scheme: dark)", color: "#059669" }
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Iqroh"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Iqroh" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={`${inter.variable} ${amiri.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SpacedRepetitionInitializer />
          <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 pb-safe">{children}</main>
            <MobileBottomNav />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

