"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Book, Home, User, Menu, X, RefreshCw, BookOpen, Trophy, Star, Settings } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const routes = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      active: pathname === "/",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      href: "/curriculum",
      label: "Learn",
      icon: BookOpen,
      active: pathname === "/curriculum" || pathname.startsWith("/lessons"),
      color: "text-green-600 dark:text-green-400"
    },
    {
      href: "/review",
      label: "Practice",
      icon: RefreshCw,
      active: pathname === "/review",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      href: "/achievements",
      label: "Progress",
      icon: Trophy,
      active: pathname === "/achievements",
      color: "text-yellow-600 dark:text-yellow-400"
    },
    {
      href: "/profile",
      label: "Profile",
      icon: User,
      active: pathname === "/profile",
      color: "text-orange-600 dark:text-orange-400"
    },
  ]

  return (
    <>
      {/* Modern Mobile-First Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b shadow-medium"
          : "bg-background/60 backdrop-blur-md"
      )}>
        <div className="container-mobile md:container-tablet lg:container-desktop">
          <div className="flex h-16 md:h-18 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                  <Star className="h-2.5 w-2.5 text-secondary-foreground" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Iqroh
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">Learn Qur'anic Arabic</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  variant={route.active ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className={cn(
                    "relative rounded-xl transition-all duration-300",
                    route.active && "bg-gradient-primary text-white shadow-medium"
                  )}
                >
                  <Link href={route.href} className="flex items-center space-x-2 px-4 py-2">
                    <route.icon className={cn("h-4 w-4", route.active ? "text-white" : route.color)} />
                    <span className="font-medium">{route.label}</span>
                    {route.active && (
                      <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse" />
                    )}
                  </Link>
                </Button>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              <ModeToggle />

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden touch-target rounded-xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="h-5 w-5 transition-transform duration-300" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b shadow-strong animate-slide-up">
            <div className="container-mobile py-6">
              <nav className="flex flex-col space-y-2">
                {routes.map((route, index) => (
                  <Button
                    key={route.href}
                    variant={route.active ? "default" : "ghost"}
                    className={cn(
                      "justify-start h-14 rounded-xl transition-all duration-300",
                      route.active && "bg-gradient-primary text-white shadow-medium",
                      "animate-slide-up"
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsMenuOpen(false)}
                    asChild
                  >
                    <Link href={route.href} className="flex items-center space-x-4 px-4">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        route.active ? "bg-white/20" : "bg-muted"
                      )}>
                        <route.icon className={cn(
                          "h-5 w-5",
                          route.active ? "text-white" : route.color
                        )} />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-semibold">{route.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {route.label === "Home" && "Welcome & Overview"}
                          {route.label === "Learn" && "Lessons & Modules"}
                          {route.label === "Practice" && "Review & Exercises"}
                          {route.label === "Progress" && "Achievements & Stats"}
                          {route.label === "Profile" && "Settings & Account"}
                        </div>
                      </div>
                    </Link>
                  </Button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16 md:h-18" />
    </>
  )
}

