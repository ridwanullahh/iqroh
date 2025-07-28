"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eraser, Check, RotateCcw, X, Lightbulb } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

interface WritingPracticeProps {
  letter: string
  strokeData: StrokeData[]
  width?: number
  height?: number
}

interface StrokeData {
  points: { x: number; y: number }[]
  width: number
}

interface StrokeAnalysisResult {
  accuracy: number
  feedback: string
  specificFeedback?: string[]
}

export default function WritingPractice({ letter, strokeData, width = 300, height = 300 }: WritingPracticeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [currentStroke, setCurrentStroke] = useState<{ x: number; y: number }[]>([])
  const [strokes, setStrokes] = useState<StrokeData[]>([])
  const [showGuide, setShowGuide] = useState(true)
  const [showAnimation, setShowAnimation] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<StrokeAnalysisResult | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [animationFrame, setAnimationFrame] = useState(0)
  const animationRef = useRef<number | null>(null)

  const { toast } = useToast()

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = width
    canvas.height = height

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw guide if enabled
    if (showGuide) {
      drawGuide(ctx)
    }

    // Draw existing strokes
    drawStrokes(ctx, strokes)
  }, [width, height, showGuide, strokes])

  // Handle animation
  useEffect(() => {
    if (showAnimation) {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }

      const animate = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw guide as background
        drawGuide(ctx, 0.1)

        // Draw animation frame
        drawAnimationFrame(ctx, animationFrame)

        // Increment frame or reset animation
        if (animationFrame < getTotalAnimationFrames()) {
          setAnimationFrame(animationFrame + 1)
          animationRef.current = requestAnimationFrame(animate)
        } else {
          setShowAnimation(false)
          setAnimationFrame(0)

          // Redraw the canvas with guide and strokes
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          if (showGuide) {
            drawGuide(ctx)
          }
          drawStrokes(ctx, strokes)
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [showAnimation, animationFrame, width, height, showGuide, strokes])

  // Get total animation frames
  const getTotalAnimationFrames = () => {
    // Calculate total points across all strokes
    return strokeData.reduce((total, stroke) => total + stroke.points.length * 3, 0)
  }

  // Draw animation frame
  const drawAnimationFrame = (ctx: CanvasRenderingContext2D, frame: number) => {
    let frameCount = 0
    let currentStrokeIndex = 0
    let currentPointIndex = 0

    // Find the current stroke and point based on the frame
    for (let i = 0; i < strokeData.length; i++) {
      const stroke = strokeData[i]
      const pointsInStroke = stroke.points.length * 3 // 3 frames per point for smooth animation

      if (frame < frameCount + pointsInStroke) {
        currentStrokeIndex = i
        currentPointIndex = Math.floor((frame - frameCount) / 3)
        break
      }

      frameCount += pointsInStroke
    }

    // Draw all completed strokes
    for (let i = 0; i < currentStrokeIndex; i++) {
      const stroke = strokeData[i]

      ctx.beginPath()
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y)
      ctx.strokeStyle = "#000"
      ctx.lineWidth = stroke.width
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      for (let j = 1; j < stroke.points.length; j++) {
        ctx.lineTo(stroke.points[j].x, stroke.points[j].y)
      }

      ctx.stroke()
    }

    // Draw current stroke up to current point
    if (currentStrokeIndex < strokeData.length) {
      const stroke = strokeData[currentStrokeIndex]

      ctx.beginPath()
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y)
      ctx.strokeStyle = "#000"
      ctx.lineWidth = stroke.width
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      for (let j = 1; j <= currentPointIndex && j < stroke.points.length; j++) {
        ctx.lineTo(stroke.points[j].x, stroke.points[j].y)
      }

      ctx.stroke()

      // Draw a pulsing dot at the current position
      const currentPoint = stroke.points[Math.min(currentPointIndex, stroke.points.length - 1)]

      ctx.beginPath()
      ctx.arc(currentPoint.x, currentPoint.y, 5, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(0, 100, 255, 0.7)"
      ctx.fill()
    }
  }

  // Draw guide
  const drawGuide = (ctx: CanvasRenderingContext2D, opacity = 0.2) => {
    ctx.save()
    ctx.globalAlpha = opacity

    // Draw the letter as a guide
    ctx.font = "150px Amiri"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillStyle = "#888"
    ctx.fillText(letter, width / 2, height / 2)

    // Draw stroke paths if available
    if (strokeData.length > 0) {
      ctx.strokeStyle = "#888"
      ctx.lineWidth = 2

      strokeData.forEach((stroke) => {
        if (stroke.points.length > 0) {
          ctx.beginPath()
          ctx.moveTo(stroke.points[0].x, stroke.points[0].y)

          for (let i = 1; i < stroke.points.length; i++) {
            ctx.lineTo(stroke.points[i].x, stroke.points[i].y)
          }

          ctx.stroke()
        }
      })
    }

    ctx.restore()
  }

  // Draw all strokes
  const drawStrokes = (ctx: CanvasRenderingContext2D, strokes: StrokeData[]) => {
    strokes.forEach((stroke) => {
      if (stroke.points.length > 0) {
        ctx.beginPath()
        ctx.moveTo(stroke.points[0].x, stroke.points[0].y)
        ctx.strokeStyle = "#000"
        ctx.lineWidth = stroke.width
        ctx.lineCap = "round"
        ctx.lineJoin = "round"

        for (let i = 1; i < stroke.points.length; i++) {
          ctx.lineTo(stroke.points[i].x, stroke.points[i].y)
        }

        ctx.stroke()
      }
    })
  }

  // Handle mouse/touch down
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (showAnimation) return

    setIsDrawing(true)
    setCurrentStroke([])

    const { offsetX, offsetY } = getCoordinates(e)
    setCurrentStroke([{ x: offsetX, y: offsetY }])

    // Reset analysis result when starting a new stroke
    setAnalysisResult(null)
  }

  // Handle mouse/touch move
  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || showAnimation) return

    const { offsetX, offsetY } = getCoordinates(e)
    setCurrentStroke((prev) => [...prev, { x: offsetX, y: offsetY }])

    // Draw the current stroke
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw guide if enabled
    if (showGuide) {
      drawGuide(ctx)
    }

    // Draw existing strokes
    drawStrokes(ctx, strokes)

    // Draw current stroke
    if (currentStroke.length > 0) {
      ctx.beginPath()
      ctx.moveTo(currentStroke[0].x, currentStroke[0].y)
      ctx.strokeStyle = "#000"
      ctx.lineWidth = 3
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      for (let i = 1; i < currentStroke.length; i++) {
        ctx.lineTo(currentStroke[i].x, currentStroke[i].y)
      }

      ctx.stroke()
    }
  }

  // Handle mouse/touch up
  const handleEnd = () => {
    if (!isDrawing || showAnimation) return

    setIsDrawing(false)

    // Add current stroke to strokes
    if (currentStroke.length > 0) {
      setStrokes((prev) => [...prev, { points: currentStroke, width: 3 }])
    }
  }

  // Get coordinates from mouse or touch event
  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return { offsetX: 0, offsetY: 0 }

    const rect = canvas.getBoundingClientRect()

    if ("touches" in e) {
      // Touch event
      const touch = e.touches[0]
      return {
        offsetX: touch.clientX - rect.left,
        offsetY: touch.clientY - rect.top,
      }
    } else {
      // Mouse event
      return {
        offsetX: e.nativeEvent.offsetX,
        offsetY: e.nativeEvent.offsetY,
      }
    }
  }

  // Clear canvas
  const handleClear = () => {
    setStrokes([])
    setCurrentStroke([])
    setAnalysisResult(null)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw guide if enabled
    if (showGuide) {
      drawGuide(ctx)
    }
  }

  // Toggle guide
  const handleToggleGuide = () => {
    setShowGuide((prev) => !prev)
  }

  // Show animation
  const handleShowAnimation = () => {
    setShowAnimation(true)
    setAnimationFrame(0)
  }

  // Analyze writing
  const handleAnalyze = async () => {
    if (strokes.length === 0) {
      toast({
        title: "No writing detected",
        description: "Please write something before analyzing.",
        variant: "destructive",
      })
      return
    }

    setIsAnalyzing(true)

    try {
      // In a real implementation, this would send the stroke data to a server
      // for analysis or use a client-side algorithm to compare with the correct strokes

      // For now, we'll simulate the analysis
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Calculate a simple accuracy based on number of strokes
      const correctStrokes = strokeData.length
      const userStrokes = strokes.length

      let accuracy = 0
      let feedback = ""
      const specificFeedback: string[] = []

      if (userStrokes === 0) {
        accuracy = 0
        feedback = "No writing detected. Please try again."
      } else if (Math.abs(userStrokes - correctStrokes) > 2) {
        accuracy = 0.4
        feedback = `Your writing has ${userStrokes} strokes, but the correct letter has ${correctStrokes} strokes.`
        specificFeedback.push(`Try to use ${correctStrokes} strokes for this letter.`)
      } else {
        // Simulate stroke analysis with a random accuracy between 70-100%
        accuracy = Math.random() * 0.3 + 0.7

        if (accuracy > 0.9) {
          feedback = "Excellent writing! Your strokes are very accurate."
          specificFeedback.push("Your stroke order is correct.")
          specificFeedback.push("Your proportions are well-balanced.")
        } else if (accuracy > 0.8) {
          feedback = "Good writing with minor issues. Keep practicing!"
          specificFeedback.push("Your stroke order is mostly correct.")
          specificFeedback.push("Try to maintain consistent proportions.")
        } else {
          feedback = "Your writing needs more practice. Try following the guide more closely."
          specificFeedback.push("Watch the stroke order in the animation.")
          specificFeedback.push("Pay attention to the starting and ending points of each stroke.")
        }
      }

      setAnalysisResult({ accuracy, feedback, specificFeedback })
    } catch (error) {
      console.error("Error analyzing writing:", error)
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze your writing. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Writing Practice</h3>
          <p className="text-muted-foreground mb-4">
            Practice writing the letter by tracing over the guide or writing freely.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <Button variant="outline" size="sm" onClick={handleClear}>
              <Eraser className="h-4 w-4 mr-1" />
              Clear
            </Button>

            <Button variant="outline" size="sm" onClick={handleToggleGuide}>
              {showGuide ? <X className="h-4 w-4 mr-1" /> : <Check className="h-4 w-4 mr-1" />}
              {showGuide ? "Hide Guide" : "Show Guide"}
            </Button>

            <Button variant="outline" size="sm" onClick={handleShowAnimation} disabled={showAnimation}>
              <Lightbulb className="h-4 w-4 mr-1" />
              Show Animation
            </Button>

            <Button
              variant="default"
              size="sm"
              onClick={handleAnalyze}
              disabled={isAnalyzing || strokes.length === 0 || showAnimation}
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              {isAnalyzing ? "Analyzing..." : "Analyze Writing"}
            </Button>
          </div>
        </div>

        <div className="border rounded-md bg-white dark:bg-gray-800 mb-4 touch-none" style={{ width, height }}>
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            className="touch-none"
          />
        </div>

        {isAnalyzing && (
          <div className="mt-4">
            <p className="text-sm mb-2">Analyzing your writing...</p>
            <Progress value={50} className="h-2" />
          </div>
        )}

        {analysisResult && (
          <Alert
            className={
              analysisResult.accuracy > 0.8 ? "bg-green-50 dark:bg-green-950" : "bg-amber-50 dark:bg-amber-950"
            }
          >
            <AlertDescription>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Accuracy:</span>
                  <span>{Math.round(analysisResult.accuracy * 100)}%</span>
                </div>
                <Progress
                  value={analysisResult.accuracy * 100}
                  className="h-2"
                  indicatorClassName={analysisResult.accuracy > 0.8 ? "bg-green-500" : "bg-amber-500"}
                />
                <p className="mt-2">{analysisResult.feedback}</p>
                {analysisResult.specificFeedback && analysisResult.specificFeedback.length > 0 && (
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    {analysisResult.specificFeedback.map((feedback, index) => (
                      <li key={index} className="text-sm">
                        {feedback}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}

