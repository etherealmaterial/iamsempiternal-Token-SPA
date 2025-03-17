"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [lightningActive, setLightningActive] = useState(false)
  const [lightningPosition, setLightningPosition] = useState({ x: 0, y: 0 })
  const [lightningType, setLightningType] = useState(0)
  const lightningTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Function to create a natural lightning bolt
  const createLightningBolt = (
    ctx: CanvasRenderingContext2D,
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    displacementFactor: number,
    roughness: number,
    branchChance = 0.3,
  ) => {
    if (displacementFactor < 2) {
      ctx.moveTo(startX, startY)
      ctx.lineTo(endX, endY)
      return
    }

    const midX = (startX + endX) / 2
    const midY = (startY + endY) / 2

    // Add some randomness to the midpoint
    const displacement = (Math.random() - 0.5) * displacementFactor
    const normalX = endY - startY
    const normalY = startX - endX
    const length = Math.sqrt(normalX * normalX + normalY * normalY)

    if (length < 1) return

    const unitX = normalX / length
    const unitY = normalY / length

    const midPointX = midX + displacement * unitX
    const midPointY = midY + displacement * unitY

    // Recursively draw the lightning segments
    createLightningBolt(
      ctx,
      startX,
      startY,
      midPointX,
      midPointY,
      displacementFactor * roughness,
      roughness,
      branchChance,
    )
    createLightningBolt(ctx, midPointX, midPointY, endX, endY, displacementFactor * roughness, roughness, branchChance)

    // Randomly create branches
    if (Math.random() < branchChance && displacementFactor > 10) {
      const branchEndX = midPointX + (Math.random() - 0.5) * displacementFactor
      const branchEndY = midPointY + (Math.random() - 0.5) * displacementFactor
      createLightningBolt(
        ctx,
        midPointX,
        midPointY,
        branchEndX,
        branchEndY,
        displacementFactor * 0.7,
        roughness,
        branchChance * 0.5,
      )
    }
  }

  // Draw lightning on canvas
  const drawLightning = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (!lightningActive) return

    // Set up lightning style
    ctx.strokeStyle =
      lightningType === 0
        ? "rgba(236, 72, 153, 0.9)" // Pink
        : lightningType === 1
          ? "rgba(96, 165, 250, 0.9)" // Blue
          : "rgba(168, 85, 247, 0.9)" // Purple

    ctx.lineWidth = 2
    ctx.shadowColor =
      lightningType === 0
        ? "rgba(236, 72, 153, 0.8)"
        : lightningType === 1
          ? "rgba(96, 165, 250, 0.8)"
          : "rgba(168, 85, 247, 0.8)"
    ctx.shadowBlur = 15

    // Start a new path
    ctx.beginPath()

    // Create main lightning bolt
    const startX = lightningPosition.x - Math.random() * 200
    const startY = 0
    const endX = lightningPosition.x + Math.random() * 200
    const endY = canvas.height * (0.3 + Math.random() * 0.4)

    createLightningBolt(
      ctx,
      startX,
      startY,
      endX,
      endY,
      80, // displacement factor
      0.7, // roughness
      0.3, // branch chance
    )

    // Draw the lightning
    ctx.stroke()

    // Add a glow effect
    ctx.globalCompositeOperation = "lighter"
    ctx.lineWidth = 4
    ctx.shadowBlur = 20
    ctx.globalAlpha = 0.5
    ctx.stroke()

    // Reset composite operation
    ctx.globalCompositeOperation = "source-over"
    ctx.globalAlpha = 1
  }

  // Trigger lightning effect
  const triggerLightning = () => {
    // Clear any existing timeout
    if (lightningTimeoutRef.current) {
      clearTimeout(lightningTimeoutRef.current)
    }

    // Set random position for the lightning
    setLightningPosition({
      x: Math.random() * window.innerWidth,
      y: 0,
    })

    // Set random lightning type (color)
    setLightningType(Math.floor(Math.random() * 3))

    // Activate lightning
    setLightningActive(true)

    // Create a sequence of flashes for a more natural effect
    const flashSequence = [
      { duration: 50, active: true },
      { duration: 30, active: false },
      { duration: 20, active: true },
      { duration: 10, active: false },
      { duration: 100, active: true },
    ]

    let totalDelay = 0

    flashSequence.forEach((flash, index) => {
      totalDelay += flash.duration
      setTimeout(() => {
        setLightningActive(flash.active)
      }, totalDelay)
    })

    // Schedule next lightning
    const nextDelay = Math.random() * 5000 + 3000 // Between 3-8 seconds
    lightningTimeoutRef.current = setTimeout(triggerLightning, nextDelay + totalDelay)
  }

  // Initialize lightning effect
  useEffect(() => {
    // Set canvas size
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initial delay before first lightning
    const initialDelay = Math.random() * 2000 + 1000
    lightningTimeoutRef.current = setTimeout(triggerLightning, initialDelay)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (lightningTimeoutRef.current) {
        clearTimeout(lightningTimeoutRef.current)
      }
    }
  }, [])

  // Draw lightning whenever the state changes
  useEffect(() => {
    drawLightning()
  }, [lightningActive, lightningPosition, lightningType])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* HD background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_582280171_LabOVXWDOih5MI3wk9WU0NqmiYQSTUef.jpg-fv2IUW7tOAA0HNE6vJMqu1A59NIpIy.jpeg')`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Lightning canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-20 pointer-events-none" />

      {/* Cloud illumination effect */}
      <div
        className={`absolute inset-0 z-15 pointer-events-none transition-opacity duration-300 ${
          lightningActive ? "opacity-30" : "opacity-0"
        }`}
        style={
          {
            background:
              lightningType === 0
                ? "radial-gradient(circle at var(--x) var(--y), rgba(236, 72, 153, 0.3), transparent 70%)"
                : lightningType === 1
                  ? "radial-gradient(circle at var(--x) var(--y), rgba(96, 165, 250, 0.3), transparent 70%)"
                  : "radial-gradient(circle at var(--x) var(--y), rgba(168, 85, 247, 0.3), transparent 70%)",
            "--x": `${lightningPosition.x}px`,
            "--y": "30%",
          } as React.CSSProperties
        }
      />

      {/* Umbrella logo overlay - make it glow more during lightning */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-30 transition-all duration-300 ${
          lightningActive ? "scale-110 opacity-100" : "scale-100 opacity-90"
        }`}
      >
        <div className="w-full h-full relative">
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"></path><path d="M4.93 10.93a8 8 0 0 1 14.14 0"></path><path d="M12 10v11"></path></svg>')`,
              filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))",
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-40 px-4 py-32 sm:py-48 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            <span className="block">IAMSEMPITERNAL</span>
            <span className="block bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              ERC20 Token
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-xl text-gray-300">
            Join the future of decentralized finance with SEMPI token
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
            >
              Buy SEMPI <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

