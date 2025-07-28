"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ReviewItem, loadReviewItems, getDueReviewItems, saveReviewItems } from "@/lib/spaced-repetition"
import ReviewSession from "@/components/review-session"
import { Calendar, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function ReviewPage() {
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([])
  const [dueItems, setDueItems] = useState<ReviewItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isReviewing, setIsReviewing] = useState(false)
  const [reviewComplete, setReviewComplete] = useState(false)

  const { toast } = useToast()

  // Load review items on mount
  useEffect(() => {
    try {
      const items = loadReviewItems()
      setReviewItems(items)

      // Get due items
      const due = getDueReviewItems(items)
      setDueItems(due)
    } catch (error) {
      console.error("Error loading review items:", error)
      toast({
        title: "Error",
        description: "Failed to load review items. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [toast])

  // Start review session
  const handleStartReview = () => {
    if (dueItems.length === 0) {
      toast({
        title: "No items due",
        description: "There are no items due for review. Check back later!",
      })
      return
    }

    setIsReviewing(true)
  }

  // Handle review completion
  const handleReviewComplete = (updatedItems: ReviewItem[]) => {
    // Update the review items
    const newReviewItems = [...reviewItems]

    updatedItems.forEach((updatedItem) => {
      const index = newReviewItems.findIndex((item) => item.id === updatedItem.id)
      if (index !== -1) {
        newReviewItems[index] = updatedItem
      }
    })

    setReviewItems(newReviewItems)
    saveReviewItems(newReviewItems)

    // Get new due items
    const newDueItems = getDueReviewItems(newReviewItems)
    setDueItems(newDueItems)

    setIsReviewing(false)
    setReviewComplete(true)

    toast({
      title: "Review Complete",
      description: "Great job! You've completed your review session.",
    })
  }

  // Format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  // If loading
  if (isLoading) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="text-center py-12">
          <p>Loading review items...</p>
        </div>
      </div>
    )
  }

  // If reviewing
  if (isReviewing) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <ReviewSession items={dueItems} onComplete={handleReviewComplete} />
      </div>
    )
  }

  // If review complete
  if (reviewComplete) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Review Complete!</CardTitle>
            <CardDescription>You've finished your review session for today.</CardDescription>
          </CardHeader>
          <CardContent className="text-center py-6">
            <div className="mb-6">
              <div className="text-5xl font-bold mb-2">{dueItems.length}</div>
              <div className="text-muted-foreground">Items Reviewed</div>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <Button asChild>
                <Link href="/curriculum">Continue Learning</Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href="/profile">View Progress</Link>
              </Button>
            </div>

            {dueItems.length === 0 ? (
              <p className="text-sm text-muted-foreground">You're all caught up! Check back later for more reviews.</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                You have {dueItems.length} more items to review. Come back later to continue.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  // Main review page
  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8">Spaced Repetition Review</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Review Session</CardTitle>
            <CardDescription>Review items using spaced repetition to strengthen your memory</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-muted rounded-lg p-4 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Today's Date</div>
                  <div className="font-medium">{formatDate(new Date())}</div>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Items Due</div>
                  <div className="text-2xl font-bold">{dueItems.length}</div>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Total Items</div>
                  <div className="text-2xl font-bold">{reviewItems.length}</div>
                </div>
              </div>
            </div>

            {dueItems.length > 0 ? (
              <div className="text-center">
                <p className="mb-4">
                  You have {dueItems.length} items due for review today. Regular review helps build long-term memory.
                </p>
                <Button onClick={handleStartReview}>Start Review Session</Button>
              </div>
            ) : (
              <div className="text-center">
                <p className="mb-4">You don't have any items due for review right now. Check back later!</p>
                <Button asChild>
                  <Link href="/curriculum">Continue Learning</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {reviewItems.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Reviews</CardTitle>
              <CardDescription>Items that will be due for review in the coming days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reviewItems
                  .filter((item) => !getDueReviewItems([item]).length)
                  .slice(0, 5)
                  .map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{item.content}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </div>
                      </div>
                      <div className="text-sm">Due: {formatDate(item.dueDate)}</div>
                    </div>
                  ))}

                {reviewItems.filter((item) => !getDueReviewItems([item]).length).length === 0 && (
                  <p className="text-center text-muted-foreground py-4">
                    No upcoming reviews. All items are currently due.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

