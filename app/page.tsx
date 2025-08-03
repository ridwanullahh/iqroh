import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  Star,
  Play,
  CheckCircle,
  Clock,
  Target,
  Headphones,
  Smartphone,
  Globe,
  Heart,
  Zap,
  Award,
  TrendingUp
} from "lucide-react"
import { cn } from "@/lib/utils"
import ModernTTS from "@/components/modern-tts"

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "15 Complete Modules",
      description: "From basic letters to advanced Tajweed rules",
      color: "text-blue-600 dark:text-blue-400",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Headphones,
      title: "Audio Pronunciation",
      description: "Native Arabic pronunciation for every lesson",
      color: "text-green-600 dark:text-green-400",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Learn anywhere, anytime on any device",
      color: "text-purple-600 dark:text-purple-400",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Progress Tracking",
      description: "Monitor your learning journey and achievements",
      color: "text-orange-600 dark:text-orange-400",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const stats = [
    { number: "15", label: "Modules", icon: BookOpen, color: "from-blue-500 to-cyan-500" },
    { number: "75+", label: "Lessons", icon: Play, color: "from-green-500 to-emerald-500" },
    { number: "30", label: "Days", icon: Clock, color: "from-purple-500 to-pink-500" },
    { number: "100%", label: "Free", icon: Heart, color: "from-red-500 to-pink-500" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

        <div className="container-mobile md:container-tablet lg:container-desktop relative">
          <div className="py-16 md:py-24 lg:py-32 text-center space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mx-auto bg-gradient-to-r from-primary to-accent text-white border-0 px-6 py-2 rounded-full shadow-medium">
                <Star className="w-4 h-4 mr-2" />
                Complete Qur'anic Reading Course
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 animate-slide-up">
              <h1 className="text-display bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
                Master Qur'anic Reading
              </h1>
              <h2 className="text-headline text-muted-foreground">
                in 30 Days
              </h2>
            </div>

            {/* Arabic Sample with TTS */}
            <div className="animate-scale-in">
              <Card className="max-w-md mx-auto bg-gradient-to-r from-muted/50 to-accent/10 border-0 shadow-strong backdrop-blur-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="arabic-xl text-primary font-bold">
                    بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "In the name of Allah, the Most Gracious, the Most Merciful"
                  </p>
                  <ModernTTS
                    text="Bismillah Ar-Rahman Ar-Raheem"
                    arabicText="بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ"
                    variant="compact"
                    className="justify-center"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              A comprehensive, interactive curriculum designed to help you learn to read the Qur'an with proper
              tajweed and pronunciation. From basic Arabic letters to advanced recitation rules.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
              <Button size="lg" asChild className="btn-gradient touch-target-large shadow-strong hover:shadow-intense">
                <Link href="/curriculum">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Learning Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="touch-target-large rounded-xl border-2 hover:bg-muted/50">
                <Link href="/about">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-3 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={cn(
                    "w-14 h-14 mx-auto rounded-2xl flex items-center justify-center shadow-medium",
                    `bg-gradient-to-r ${stat.color}`
                  )}>
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container-mobile md:container-tablet lg:container-desktop">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mx-auto">
              <Trophy className="w-4 h-4 mr-2" />
              Why Choose Iqroh
            </Badge>
            <h2 className="text-headline">Powerful Features for Effective Learning</h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Experience the most comprehensive and interactive way to learn Qur'anic reading with modern technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={cn(
                "group card-elevated hover:scale-105 transition-all duration-500 cursor-pointer",
                "animate-slide-up"
              )} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="space-y-4">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300",
                    `bg-gradient-to-r ${feature.gradient}`
                  )}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {feature.title === "15 Complete Modules" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Foundation Phase</span>
                          <span className="text-muted-foreground">4 modules</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Intermediate Phase</span>
                          <span className="text-muted-foreground">5 modules</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Advanced Phase</span>
                          <span className="text-muted-foreground">6 modules</span>
                        </div>
                      </div>
                    )}

                    {feature.title === "Audio Pronunciation" && (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Native Arabic speakers</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Tajweed pronunciation</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Playback controls</span>
                        </div>
                      </div>
                    )}

                    {feature.title === "Mobile-First Design" && (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Responsive design</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Offline capability</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Touch-friendly interface</span>
                        </div>
                      </div>
                    )}

                    {feature.title === "Progress Tracking" && (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Detailed analytics</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Achievement badges</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Learning streaks</span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 md:py-24">
        <div className="container-mobile md:container-tablet lg:container-desktop">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mx-auto">
              <TrendingUp className="w-4 h-4 mr-2" />
              Learning Journey
            </Badge>
            <h2 className="text-headline">Your 30-Day Learning Path</h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Follow our structured curriculum designed by Islamic scholars and education experts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Foundation Phase */}
            <Card className="card-elevated group hover:scale-105 transition-all duration-500">
              <CardHeader className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-strong">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Days 1-10</Badge>
                  <CardTitle className="text-2xl">Foundation Phase</CardTitle>
                  <CardDescription>Master the basics of Arabic reading</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">1</span>
                    </div>
                    <div>
                      <div className="font-medium">Harakat (Vowel Signs)</div>
                      <div className="text-sm text-muted-foreground">Learn the basic vowel marks</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">2</span>
                    </div>
                    <div>
                      <div className="font-medium">Arabic Letters</div>
                      <div className="text-sm text-muted-foreground">Master all 28 letters</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">3</span>
                    </div>
                    <div>
                      <div className="font-medium">Letter Forms</div>
                      <div className="text-sm text-muted-foreground">Learn letter connections</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">4</span>
                    </div>
                    <div>
                      <div className="font-medium">Vowels Application</div>
                      <div className="text-sm text-muted-foreground">Apply vowels to letters</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intermediate Phase */}
            <Card className="card-elevated group hover:scale-105 transition-all duration-500">
              <CardHeader className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-strong">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Days 11-20</Badge>
                  <CardTitle className="text-2xl">Intermediate Phase</CardTitle>
                  <CardDescription>Build reading fluency and rules</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">5</span>
                    </div>
                    <div>
                      <div className="font-medium">Mudood (Elongations)</div>
                      <div className="text-sm text-muted-foreground">Learn elongation rules</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">6</span>
                    </div>
                    <div>
                      <div className="font-medium">Sukuun & Non-Vowels</div>
                      <div className="text-sm text-muted-foreground">Master silent letters</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">7</span>
                    </div>
                    <div>
                      <div className="font-medium">Sun & Moon Letters</div>
                      <div className="text-sm text-muted-foreground">Learn definite article rules</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">8-9</span>
                    </div>
                    <div>
                      <div className="font-medium">Word & Sentence Formation</div>
                      <div className="text-sm text-muted-foreground">Build reading fluency</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Phase */}
            <Card className="card-elevated group hover:scale-105 transition-all duration-500">
              <CardHeader className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-strong">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Days 21-30</Badge>
                  <CardTitle className="text-2xl">Advanced Phase</CardTitle>
                  <CardDescription>Master Tajweed and perfect recitation</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-600 dark:text-purple-400">10</span>
                    </div>
                    <div>
                      <div className="font-medium">Tajweed Fundamentals</div>
                      <div className="text-sm text-muted-foreground">Introduction to Tajweed</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-600 dark:text-purple-400">11</span>
                    </div>
                    <div>
                      <div className="font-medium">Nun Sakin & Tanween</div>
                      <div className="text-sm text-muted-foreground">Advanced pronunciation rules</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-600 dark:text-purple-400">12-15</span>
                    </div>
                    <div>
                      <div className="font-medium">Complete Tajweed Rules</div>
                      <div className="text-sm text-muted-foreground">Master all recitation rules</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container-mobile md:container-tablet lg:container-desktop">
          <Card className="card-glass border-0 shadow-intense">
            <CardContent className="p-8 md:p-12 text-center space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="mx-auto bg-gradient-primary text-white border-0">
                  <Zap className="w-4 h-4 mr-2" />
                  Start Your Journey Today
                </Badge>
                <h2 className="text-headline">Ready to Begin Your Qur'anic Reading Journey?</h2>
                <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of learners who have successfully mastered Qur'anic reading through our comprehensive
                  30-day program. No prior experience required.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild className="btn-gradient touch-target-large shadow-strong hover:shadow-intense">
                  <Link href="/curriculum">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Start Learning Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="touch-target-large rounded-xl border-2">
                  <Link href="/about">
                    <Users className="mr-2 h-5 w-5" />
                    Join Community
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Free Forever</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">30</div>
                  <div className="text-sm text-muted-foreground">Days to Mastery</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Access Anywhere</div>
                </div>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  "And We have certainly made the Qur'an easy for remembrance, so is there any who will remember?"
                  <span className="block mt-1 font-medium">- Qur'an 54:17</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

