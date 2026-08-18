"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  BookOpen,
  Repeat,
  TrendingUp,
  User,
  Settings,
  ArrowLeft,
  BookMarked,
  Moon,
  Sun,
  Sparkles,
} from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type NavItem = {
  href: string
  label: string
  arabicLabel: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

const NAV_ITEMS: NavItem[] = [
  { href: "/",             label: "Home",       arabicLabel: "الرئيسية",  icon: Home,        description: "Today's overview & quick actions" },
  { href: "/curriculum",   label: "Curriculum", arabicLabel: "المنهج",   icon: BookOpen,    description: "All modules, lessons and assessments" },
  { href: "/review",       label: "Review",     arabicLabel: "المراجعة", icon: Repeat,      description: "Spaced-repetition review sessions" },
  { href: "/progress",     label: "Progress",   arabicLabel: "التقدم",   icon: TrendingUp,  description: "Streaks, achievements, statistics" },
  { href: "/profile",      label: "Profile",    arabicLabel: "الملف",     icon: User,        description: "Settings, account and preferences" },
]

/**
 * Iqroh app shell. Provides:
 *  - sticky top header (logo + back + theme toggle) on every viewport
 *  - sticky bottom nav on mobile (5 tabs with active pill)
 *  - left sidebar on desktop (md+) with the same 5 sections
 *  - framer-motion slide transitions between tabs
 *
 * Used by app/layout.tsx to wrap every page's children.
 */
export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  // Detect if we're on a sub-page (anything other than the 5 main tabs) to show back button
  const isSubPage =
    pathname !== "/" && !NAV_ITEMS.some((n) => n.href === pathname)

  const activeIndex = NAV_ITEMS.findIndex((item) =>
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(item.href + "/") || pathname.startsWith(item.href),
  )

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back()
    } else {
      router.push("/")
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      {/* ---------- Top Header ---------- */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl safe-top">
        <div className="flex h-16 items-center justify-between gap-2 px-4 md:px-6 lg:px-8">
          {/* Left: back button (sub-pages) or logo */}
          <div className="flex items-center gap-2">
            {isSubPage ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="press-scale touch-target rounded-xl"
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            ) : null}
            <Link href="/" className="flex items-center gap-2 press-scale">
              <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-medium">
                <BookMarked className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="flex items-baseline gap-2">
                  <span className="font-arabic text-xl text-foreground">اقرأ</span>
                  <span className="font-bold text-lg tracking-tight">Iqroh</span>
                </div>
                <p className="text-[10px] text-muted-foreground -mt-0.5">Qur&apos;anic Reading Primer</p>
              </div>
            </Link>
          </div>

          {/* Right: quick settings + theme toggle */}
          <div className="flex items-center gap-1">
            <ThemeToggleButton />
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="press-scale touch-target rounded-xl"
              aria-label="Settings"
            >
              <Link href="/profile">
                <Settings className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* ---------- Body: sidebar (desktop) + main ---------- */}
      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <aside className="hidden md:flex w-64 shrink-0 border-r border-border/60 bg-sidebar/40 flex-col">
          <nav className="flex flex-col gap-1 p-3">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeIndex === index
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors press-scale",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="sidebar-active-pill"
                      className="absolute inset-0 rounded-xl bg-primary/10 ring-1 ring-primary/20"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon className="relative h-5 w-5 shrink-0" />
                  <span className="relative flex-1 font-medium">{item.label}</span>
                  <span className="relative font-arabic text-base text-muted-foreground/80">{item.arabicLabel}</span>
                </Link>
              )
            })}
          </nav>
          <div className="mt-auto p-3">
            <div className="rounded-xl bg-muted/40 p-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 mb-1">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="font-semibold text-foreground">Bismillah</span>
              </div>
              <p className="leading-snug">
                Begin every lesson with intention. Mastery is built one letter at a time.
              </p>
            </div>
          </div>
        </aside>

        {/* Main content with subtle page transition */}
        <main className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="page-transition pb-24 md:pb-8"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* ---------- Mobile Bottom Nav ---------- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border/60 bg-background/95 backdrop-blur-xl safe-bottom">
        <div className="grid grid-cols-5 h-16">
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeIndex === index
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-col items-center justify-center gap-0.5 press-scale"
                aria-current={isActive ? "page" : undefined}
              >
                <div className="relative grid h-8 w-8 place-items-center">
                  {isActive && (
                    <motion.span
                      layoutId="bottom-nav-active-pill"
                      className="absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon
                    className={cn(
                      "relative h-5 w-5 transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground",
                    )}
                  />
                </div>
                <span
                  className={cn(
                    "text-[10px] font-medium transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

/** Compact theme toggle that respects next-themes */
function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const toggle = () => {
    const isDark = (resolvedTheme ?? theme) === "dark"
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="press-scale touch-target rounded-xl"
      aria-label="Toggle theme"
    >
      {mounted ? (
        resolvedTheme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )
      ) : (
        <div className="h-5 w-5" />
      )}
    </Button>
  )
}

export default Shell
