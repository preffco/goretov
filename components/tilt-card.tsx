"use client"

import { useRef, useState, useEffect, type ReactNode, type MouseEvent, memo } from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: ReactNode
  className?: string
  tiltAmount?: number
}

export const TiltCard = memo(function TiltCard({ children, className, tiltAmount = 8 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    // Only enable on non-touch devices with no reduced motion preference
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setIsEnabled(!hasTouch && !prefersReducedMotion)
  }, [])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isEnabled) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -tiltAmount
    const rotateY = ((x - centerX) / centerX) * tiltAmount

    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current || !isEnabled) return
    cardRef.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  }

  // Return simple div on touch devices
  if (!isEnabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("transition-transform duration-150 ease-out will-change-transform", className)}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  )
})
