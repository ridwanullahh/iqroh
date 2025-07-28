"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { type ReviewItem, updateReviewItem, saveReviewItems } from "@/lib/spaced-repetition"
import { Volume2, ArrowRight, ThumbsUp, ThumbsDown } from "lucide-react"
import { speakArabicText } from "@/lib/audio-utils"
import { useToast } from "@/hooks/use-toast"

interface ReviewSessionProps {
  items: ReviewItem[]
  onComplete: (updatedItems: ReviewItem[]) => void
}

export default function ReviewSession({ items, onComplete }: ReviewSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [updatedItems, setUpdatedItems] = useState<ReviewItem[]>([...items])
  const [isPlaying, setIsPlaying] = useState(false)

  const { toast } = useToast()

  const currentItem = items[currentIndex]
  const progress = (currentIndex / items.length) * 100

  // Play audio if available
  const handlePlayAudio = async () => {
    if (!currentItem) return

    try {
      setIsPlaying(true)

      // Use the content directly for speech
      await speakArabicText(currentItem.content)

      setIsPlaying(false)
    } catch (error) {
      console.error("Error playing audio:", error)
      toast({
        title: "Error",
        description: "Failed to play audio. Please try again.",
        variant: "destructive",
      })
      setIsPlaying(false)
    }
  }

  // Show answer
  const handleShowAnswer = () => {
    setShowAnswer(true)
  }

  // Grade the review and move to next item
  const handleGrade = (grade: 0 | 1 | 2 | 3 | 4 | 5) => {
    // Update the current item
    const updatedItem = updateReviewItem(currentItem, grade)

    // Update the items array
    const newItems = [...updatedItems]
    newItems[currentIndex] = updatedItem
    setUpdatedItems(newItems)

    // Move to next item or complete
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setShowAnswer(false)
    } else {
      // Save updated items
      saveReviewItems(newItems)

      // Complete the session
      onComplete(newItems)
    }
  }

  // Simplified grading for easier UI
  const handleSimpleGrade = (remembered: boolean) => {
    handleGrade(remembered ? 5 : 2)
  }

  // Render different content based on item type
  const renderItemContent = () => {
    switch (currentItem.type) {
      case "harakat":
        return (
          <div className="text-center">
            <div className="arabic-large mb-4">{currentItem.content}</div>
            <Button variant="outline" onClick={handlePlayAudio} disabled={isPlaying} className="mx-auto">
              <Volume2 className="h-4 w-4 mr-2" />
              Listen
            </Button>
          </div>
        )

      case "letter":
        return (
          <div className="text-center">
            <div className="letter mb-4">{currentItem.content}</div>
            <Button variant="outline" onClick={handlePlayAudio} disabled={isPlaying} className="mx-auto">
              <Volume2 className="h-4 w-4 mr-2" />
              Listen
            </Button>
          </div>
        )

      case "rule":
      case "word":
      default:
        return (
          <div className="text-center">
            <div className="arabic-large mb-4">{currentItem.content}</div>
            <Button variant="outline" onClick={handlePlayAudio} disabled={isPlaying} className="mx-auto">
              <Volume2 className="h-4 w-4 mr-2" />
              Listen
            </Button>
          </div>
        )
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Review Session</span>
          <span className="text-sm font-normal text-muted-foreground">
            {currentIndex + 1} of {items.length}
          </span>
        </CardTitle>
        <Progress value={progress} className="h-2" />
      </CardHeader>

      <CardContent>
        <div className="min-h-[200px] flex flex-col items-center justify-center">
          {items.length > 0 && renderItemContent()}

          {showAnswer ? (
            <div className="mt-8 text-center">
              <h3 className="font-medium mb-2">Did you remember correctly?</h3>
              <div className="flex justify-center gap-4">
                <Button variant="outline" className="flex items-center gap-2" onClick={() => handleSimpleGrade(false)}>
                  <ThumbsDown className="h-4 w-4" />
                  No
                </Button>

                <Button variant="default" className="flex items-center gap-2" onClick={() => handleSimpleGrade(true)}>
                  <ThumbsUp className="h-4 w-4" />
                  Yes
                </Button>
              </div>
            </div>
          ) : (
            <Button variant="default" className="mt-8" onClick={handleShowAnswer}>
              Check Answer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>

      <CardFooter className="text-sm text-muted-foreground">
        Tip: Regular review helps build long-term memory.
      </CardFooter>
    </Card>
  )
}

