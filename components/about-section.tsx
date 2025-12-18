"use client"

import { Code, Rocket, Users, Sparkles } from "lucide-react"
import { useEffect, useState, useRef, memo } from "react"

const facts = [
  { icon: Code, value: 50, suffix: "+", label: "проектов" },
  { icon: Users, value: 30, suffix: "+", label: "клиентов" },
  { icon: Rocket, value: 3, suffix: "", label: "года опыта" },
  { icon: Sparkles, value: 3, suffix: "", label: "своих продукта" },
]

const codeLines = [
  { indent: 0, content: "class Developer {", color: "text-[#C586C0]" },
  { indent: 1, content: "name = 'Игорь Горетов';", color: "text-[#9CDCFE]" },
  { indent: 1, content: "role = 'Founder & Developer';", color: "text-[#9CDCFE]" },
  { indent: 1, content: "", color: "" },
  { indent: 1, content: "skills = [", color: "text-[#9CDCFE]" },
  { indent: 2, content: "'Telegram Bots',", color: "text-[#CE9178]" },
  { indent: 2, content: "'Mini Apps',", color: "text-[#CE9178]" },
  { indent: 2, content: "'Automation',", color: "text-[#CE9178]" },
  { indent: 2, content: "'Web Development'", color: "text-[#CE9178]" },
  { indent: 1, content: "];", color: "text-[#9CDCFE]" },
  { indent: 1, content: "", color: "" },
  { indent: 1, content: "approach() {", color: "text-[#DCDCAA]" },
  { indent: 2, content: "return 'Качество > Количество';", color: "text-[#CE9178]" },
  { indent: 1, content: "}", color: "text-[#DCDCAA]" },
  { indent: 0, content: "}", color: "text-[#C586C0]" },
]

const AnimatedCounter = memo(function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Check reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1200
          const steps = 30
          const increment = value / steps
          let step = 0

          const timer = setInterval(() => {
            step++
            setCount(Math.min(Math.floor(increment * step), value))
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
})

export function AboutSection() {
  const [visibleLines, setVisibleLines] = useState(0)
  const codeRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = codeRef.current
    if (!element) return

    // Check reduced motion - show all lines immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleLines(codeLines.length)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          codeLines.forEach((_, index) => {
            setTimeout(() => setVisibleLines(index + 1), index * 80)
          })
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-32 bg-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-none">
                Игорь
                <br />
                <span className="text-[#FACC15]">Горетов</span>
              </h2>

              <p className="mt-3 sm:mt-4 text-white/40 text-sm sm:text-base lg:text-lg font-medium">
                Founder & Solo Developer
              </p>

              {/* Stats */}
              <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-2 gap-3 sm:gap-4">
                {facts.map((fact, index) => (
                  <div
                    key={index}
                    className="group p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#FACC15]/30 transition-colors"
                  >
                    <fact.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FACC15]/60 mb-2 sm:mb-3" />
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                      <AnimatedCounter value={fact.value} suffix={fact.suffix} />
                    </div>
                    <div className="text-xs sm:text-sm text-white/40 mt-1">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Code Editor */}
            <div
              ref={codeRef}
              className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-[#1E1E1E] border border-white/10"
            >
              {/* Editor Header */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#252526] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28CA41]" />
                  </div>
                  <span className="ml-2 sm:ml-3 text-white/40 text-xs sm:text-sm font-mono">developer.ts</span>
                </div>
                <div className="flex items-center gap-2 text-white/30 text-xs">
                  <span className="hidden sm:inline">TypeScript</span>
                  <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* Code Content */}
              <div className="p-3 sm:p-4 lg:p-6 font-mono text-[11px] sm:text-xs lg:text-sm leading-relaxed overflow-x-auto">
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-200 ${
                      index < visibleLines ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    }`}
                    style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                  >
                    {line.content ? (
                      <span className={line.color}>{line.content}</span>
                    ) : (
                      <span className="opacity-0">.</span>
                    )}
                  </div>
                ))}
                <div
                  className={`inline-block w-1.5 sm:w-2 h-3.5 sm:h-4 bg-[#FACC15] ml-1 transition-opacity ${
                    visibleLines >= codeLines.length ? "animate-pulse" : "opacity-0"
                  }`}
                />
              </div>
            </div>

            {/* Philosophy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-[#FACC15] text-black">
                <h3 className="font-bold text-base sm:text-lg mb-1.5 sm:mb-2">Один разработчик</h3>
                <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                  Никаких посредников. Я лично веду проект от идеи до запуска и поддержки.
                </p>
              </div>

              <div className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <h3 className="font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2">Фокус на качестве</h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                  Беру ограниченное число проектов. Лучше меньше, но идеально.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08]">
              <svg
                className="absolute top-3 sm:top-4 left-3 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 text-[#FACC15]/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed pl-6 sm:pl-8 lg:pl-10">
                Код, который не решает задачу, — это просто текст; настоящая ценность кода — в результате, который он создаёт
              </p>
              <div className="mt-3 sm:mt-4 pl-6 sm:pl-8 lg:pl-10">
                <span className="text-[#FACC15] font-medium text-sm sm:text-base">Игорь Горетов</span>
                <span className="text-white/30 ml-2 text-xs sm:text-sm">/ GORETOV Studio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
