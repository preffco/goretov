"use client"

import { useEffect, useState, useRef, memo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const typingLines = ["Telegram bots & Mini Apps", "Business automation", "Custom IT solutions", "Bots. Sites. Systems."]

const InteractiveGrid = memo(function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile/low-power devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile, { passive: true })
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Skip animation on mobile for performance
    if (isMobile) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let width = 0
    let height = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }
    resize()

    // Throttled resize
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resize, 150)
    }
    window.addEventListener("resize", handleResize, { passive: true })

    // Reduced grid density for better performance
    const cols = 25
    const rows = 15

    let lastTime = 0
    const fps = 30 // Limit FPS
    const interval = 1000 / fps

    const draw = (currentTime: number) => {
      animationRef.current = requestAnimationFrame(draw)

      // Throttle rendering
      if (currentTime - lastTime < interval) return
      lastTime = currentTime

      ctx.clearRect(0, 0, width, height)

      const cellWidth = width / cols
      const cellHeight = height / rows

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * cellWidth
          const y = j * cellHeight

          const dx = mouseRef.current.x - x
          const dy = mouseRef.current.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          const intensity = Math.max(0, 1 - distance / maxDistance)
          const alpha = 0.02 + intensity * 0.12
          const size = 1 + intensity * 1.5

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(250, 204, 21, ${alpha})`
          ctx.fill()
        }
      }

      // Simplified grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)"
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let i = 0; i <= cols; i++) {
        const x = i * cellWidth
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
      }
      for (let j = 0; j <= rows; j++) {
        const y = j * cellHeight
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }
      ctx.stroke()
    }

    animationRef.current = requestAnimationFrame(draw)

    // Throttled mouse tracking
    let mouseTimeout: NodeJS.Timeout
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        mouseRef.current = { x: e.clientX, y: e.clientY }
      }, 16)
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(resizeTimeout)
      clearTimeout(mouseTimeout)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isMobile])

  // Return static gradient on mobile
  if (isMobile) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#FACC15]/5 via-transparent to-[#3B82F6]/5 pointer-events-none" />
    )
  }

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
})

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const steps = 40
          const increment = value / steps
          let current = 0
          let step = 0

          const timer = setInterval(() => {
            step++
            current = Math.min(Math.floor(increment * step), value)
            setCount(current)
            if (step >= steps) {
              setCount(value)
              clearInterval(timer)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function HeroSection() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentLine = typingLines[currentLineIndex]
    const typingSpeed = isDeleting ? 30 : 80
    const pauseTime = 2000

    if (!isDeleting && displayedText === currentLine) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setCurrentLineIndex((prev) => (prev + 1) % typingLines.length)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentLine.substring(0, displayedText.length - 1))
      } else {
        setDisplayedText(currentLine.substring(0, displayedText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentLineIndex])

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      <InteractiveGrid />

      {/* Gradient orbs - simplified */}
      <div className="absolute top-1/4 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-[#FACC15]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-48 pb-16 sm:pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FACC15] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FACC15]"></span>
            </span>
            <span className="text-white/60 text-xs sm:text-sm">Открыт для новых проектов</span>
          </div>

          <div className="mb-6 min-h-[80px] sm:min-h-[120px] lg:min-h-[160px]">
            <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] whitespace-nowrap inline-block">
              <span className="hero-gradient-text">{displayedText}</span>
              <span className="text-[#FACC15] animate-pulse">_</span>
            </h1>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-12">
            <p className="text-lg sm:text-2xl lg:text-3xl text-white/90 font-light">
              IT-студия <span className="text-[#FACC15] font-medium">Игоря Горетова</span>
            </p>
            <p className="text-sm sm:text-lg lg:text-xl text-white/40 max-w-2xl leading-relaxed">
              Превращаю бизнес-процессы в автоматизированные системы. Telegram-боты, Mini Apps и интеграции под ключ.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-16 sm:mb-20">
            <Button
              asChild
              size="lg"
              className="group bg-[#FACC15] hover:bg-[#EAB308] text-black px-6 sm:px-8 h-12 sm:h-14 lg:h-16 text-sm sm:text-base lg:text-lg font-medium rounded-full transition-all active:scale-95 sm:hover:scale-105"
            >
              <Link href="#contact">
                Обсудить проект
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 h-12 sm:h-14 lg:h-16 text-sm sm:text-base lg:text-lg font-medium rounded-full bg-transparent"
            >
              <Link href="#portfolio">Смотреть кейсы</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-16 pt-8 sm:pt-12 border-t border-white/10">
            <div>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                <AnimatedCounter value={50} suffix="+" />
              </div>
              <div className="text-xs sm:text-base text-white/40">проектов</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                <AnimatedCounter value={3} />
                <span className="text-[#FACC15]">+</span>
              </div>
              <div className="text-xs sm:text-base text-white/40">года опыта</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#FACC15] mb-1 sm:mb-2">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <div className="text-xs sm:text-base text-white/40">завершено</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
