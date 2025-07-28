import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, CheckCircle, Clock, Trophy } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8">Your Learning Profile</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Overall Progress</CardTitle>
            <CardDescription>Your journey to mastering Qur&apos;anic reading</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Curriculum Completion</span>
                  <span className="text-sm font-medium">5%</span>
                </div>
                <Progress value={5} className="h-2" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-muted rounded-lg p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Lessons Completed</div>
                    <div className="text-2xl font-bold">2 / 40</div>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Learning Time</div>
                    <div className="text-2xl font-bold">25 mins</div>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Current Streak</div>
                    <div className="text-2xl font-bold">1 day</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="skills">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Skills</CardTitle>
                <CardDescription>Track your progress in different areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Harakat Recognition</span>
                      <span className="text-sm font-medium">40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Letter Recognition</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Pronunciation Accuracy</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Tajweed Rules</span>
                      <span className="text-sm font-medium">0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Milestones you&apos;ve reached in your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                      <Trophy className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium">First Lesson Completed</div>
                      <div className="text-sm text-muted-foreground">You completed your first lesson</div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium">Harakat Introduction</div>
                      <div className="text-sm text-muted-foreground">You learned about Arabic vowel signs</div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 flex items-start gap-3 opacity-50">
                    <div className="bg-muted p-2 rounded-full">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">First Module Completed</div>
                      <div className="text-sm text-muted-foreground">Complete all lessons in a module</div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 flex items-start gap-3 opacity-50">
                    <div className="bg-muted p-2 rounded-full">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">7-Day Streak</div>
                      <div className="text-sm text-muted-foreground">Learn for 7 consecutive days</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="statistics" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Learning Statistics</CardTitle>
                <CardDescription>Detailed metrics about your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4">
                      <div className="text-sm text-muted-foreground mb-1">Total Learning Time</div>
                      <div className="text-2xl font-bold">25 minutes</div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="text-sm text-muted-foreground mb-1">Average Session</div>
                      <div className="text-2xl font-bold">12 minutes</div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="text-sm text-muted-foreground mb-1">Practice Attempts</div>
                      <div className="text-2xl font-bold">5</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Fathah Lesson</div>
                          <div className="text-sm text-muted-foreground">Completed lesson</div>
                        </div>
                        <Badge variant="outline">Today</Badge>
                      </div>

                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Introduction to Harakat</div>
                          <div className="text-sm text-muted-foreground">Completed lesson</div>
                        </div>
                        <Badge variant="outline">Today</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

