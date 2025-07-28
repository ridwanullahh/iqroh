import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Calendar, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 md:py-12">
      <section className="py-12 md:py-16 lg:py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Master Qur&apos;anic Reading in 30 Days</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          A comprehensive, interactive curriculum to help you learn to read the Qur&apos;an with proper tajweed and
          pronunciation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/curriculum">
              Start Learning <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>30-Day Curriculum</CardTitle>
              <CardDescription>Structured learning path from basics to advanced tajweed</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our curriculum is divided into three phases: Foundation, Intermediate, and Advanced, each building upon
                the previous to develop complete Qur&apos;anic reading skills.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Interactive Lessons</CardTitle>
              <CardDescription>Learn through practice with real-time feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Each lesson includes interactive exercises, audio pronunciation guides, and practice activities to
                reinforce learning through multiple approaches.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Adaptive Learning</CardTitle>
              <CardDescription>Personalized experience based on your progress</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our system tracks your performance and adapts the curriculum to focus on areas where you need more
                practice, ensuring efficient and effective learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Arabic Letters", description: "Master all 28 Arabic letters and their forms" },
            { title: "Vowels & Signs", description: "Learn harakat and their effect on pronunciation" },
            { title: "Tajweed Rules", description: "Apply proper recitation rules for Qur'anic reading" },
            { title: "Fluent Reading", description: "Develop the ability to read any Qur'anic text" },
          ].map((item, i) => (
            <div key={i} className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Start your 30-day path to Qur&apos;anic reading mastery today. No prior experience required.
        </p>
        <Button size="lg" asChild>
          <Link href="/curriculum">
            View Curriculum <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  )
}

