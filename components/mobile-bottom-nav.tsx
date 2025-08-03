"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Home, 
  BookOpen, 
  RefreshCw, 
  Trophy, 
  User,
  Plus,
  Search,
  Bell
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function MobileBottomNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      active: pathname === "/",
      color: "text-blue-600 dark:text-blue-400",
      activeColor: "text-blue-600 dark:text-blue-400"
    },
    {
      href: "/curriculum",
      label: "Learn",
      icon: BookOpen,
      active: pathname === "/curriculum" || pathname.startsWith("/lessons"),
      color: "text-green-600 dark:text-green-400",
      activeColor: "text-green-600 dark:text-green-400"
    },
    {
      href: "/review",
      label: "Practice",
      icon: RefreshCw,
      active: pathname === "/review",
      color: "text-purple-600 dark:text-purple-400",
      activeColor: "text-purple-600 dark:text-purple-400",
      badge: "3" // Example: 3 pending reviews
    },
    {
      href: "/achievements",
      label: "Progress",
      icon: Trophy,
      active: pathname === "/achievements",
      color: "text-yellow-600 dark:text-yellow-400",
      activeColor: "text-yellow-600 dark:text-yellow-400"
    },
    {
      href: "/profile",
      label: "Profile",
      icon: User,
      active: pathname === "/profile",
      color: "text-orange-600 dark:text-orange-400",
      activeColor: "text-orange-600 dark:text-orange-400"
    },
  ]

  return (
    <>
      {/* Bottom Navigation - Mobile Only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 safe-bottom">
        <div className="bg-background/95 backdrop-blur-xl border-t shadow-strong">
          <div className="grid grid-cols-5 h-16">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex flex-col items-center justify-center space-y-1 transition-all duration-300 relative group",
                  "hover:bg-muted/50 active:scale-95",
                  route.active && "bg-muted/30"
                )}
              >
                {/* Icon Container */}
                <div className="relative">
                  <div className={cn(
                    "w-8 h-8 flex items-center justify-center rounded-xl transition-all duration-300",
                    route.active 
                      ? "bg-gradient-to-r from-primary to-accent shadow-medium scale-110" 
                      : "group-hover:bg-muted group-hover:scale-105"
                  )}>
                    <route.icon className={cn(
                      "h-5 w-5 transition-colors duration-300",
                      route.active 
                        ? "text-white" 
                        : route.color
                    )} />
                  </div>
                  
                  {/* Badge */}
                  {route.badge && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center rounded-full"
                    >
                      {route.badge}
                    </Badge>
                  )}
                  
                  {/* Active Indicator */}
                  {route.active && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                  )}
                </div>

                {/* Label */}
                <span className={cn(
                  "text-xs font-medium transition-colors duration-300",
                  route.active 
                    ? route.activeColor 
                    : "text-muted-foreground group-hover:text-foreground"
                )}>
                  {route.label}
                </span>

                {/* Ripple Effect */}
                <div className={cn(
                  "absolute inset-0 rounded-xl opacity-0 group-active:opacity-20 transition-opacity duration-150",
                  "bg-gradient-to-r from-primary to-accent"
                )} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind bottom nav */}
      <div className="lg:hidden h-16 safe-bottom" />
    </>
  )
}

// Floating Action Button Component (Optional)
export function FloatingActionButton() {
  const pathname = usePathname()
  
  // Don't show on certain pages
  if (pathname.startsWith('/lessons/') || pathname.startsWith('/assessment/')) {
    return null
  }

  return (
    <div className="lg:hidden fixed bottom-20 right-4 z-40 safe-bottom">
      <Button
        size="lg"
        className={cn(
          "w-14 h-14 rounded-full shadow-strong hover:shadow-intense",
          "bg-gradient-to-r from-primary to-accent text-white border-0",
          "hover:scale-110 active:scale-95 transition-all duration-300"
        )}
        asChild
      >
        <Link href="/search">
          <Search className="h-6 w-6" />
        </Link>
      </Button>
    </div>
  )
}

// Quick Actions Component (Optional)
export function QuickActions() {
  const quickActions = [
    {
      icon: Bell,
      label: "Notifications",
      href: "/notifications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      label: "Search",
      href: "/search", 
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Plus,
      label: "Quick Add",
      href: "/quick-add",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <div className="lg:hidden fixed bottom-20 left-4 z-40 safe-bottom">
      <div className="flex flex-col space-y-3">
        {quickActions.map((action, index) => (
          <Button
            key={action.href}
            size="sm"
            className={cn(
              "w-12 h-12 rounded-full shadow-medium hover:shadow-strong",
              `bg-gradient-to-r ${action.color} text-white border-0`,
              "hover:scale-110 active:scale-95 transition-all duration-300",
              "animate-slide-up"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
            asChild
          >
            <Link href={action.href}>
              <action.icon className="h-5 w-5" />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
