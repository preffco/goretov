"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TiltCard } from "@/components/tilt-card"

const cases = [
  {
    id: 1,
    title: "CRM-система для автосервиса",
    description: "Полная автоматизация записи клиентов и управления заказами",
    result: "–70% времени",
    resultValue: 70,
    stack: ["Python", "aiogram", "PostgreSQL"],
    category: "Автоматизация",
    featured: true,
  },
  {
    id: 2,
    title: "Платформа онлайн-курсов",
    description: "Бот для продажи образовательного контента",
    result: "+35% конверсия",
    resultValue: 35,
    stack: ["Python", "ЮKassa API"],
    category: "E-commerce",
    featured: false,
  },
  {
    id: 3,
    title: "HR-бот для найма",
    description: "Автоматизация первичного отбора кандидатов",
    result: "2 дня → 2 часа",
    resultValue: 95,
    stack: ["OpenAI API", "Sheets"],
    category: "HR Tech",
    featured: false,
  },
  {
    id: 4,
    title: "Маркетплейс услуг",
    description: "Mini App для поиска специалистов",
    result: "1000+ юзеров",
    resultValue: 100,
    stack: ["React", "Node.js"],
    category: "Маркетплейс",
    featured: false,
  },
]

const categories = ["Все", "Автоматизация", "E-commerce", "HR Tech", "Маркетплейс"]

function AnimatedProgress({ value, delay = 0 }: { value: number; delay?: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(value), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, delay])

  return (
    <div ref={ref} className="h-1 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#FACC15] rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredCases = activeCategory === "Все" ? cases : cases.filter((c) => c.category === activeCategory)

  const featuredCase = filteredCases.find((c) => c.featured) || filteredCases[0]
  const otherCases = filteredCases.filter((c) => c.id !== featuredCase?.id)

  return (
    <section id="portfolio" className="py-20 sm:py-28 lg:py-40 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div>
              <span className="text-[#FACC15] text-sm font-medium uppercase tracking-widest mb-4 block">Портфолио</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
                Реальные
                <br />
                <span className="text-white/20">результаты</span>
              </h2>
            </div>

            {/* Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0",
                    activeCategory === category
                      ? "bg-white text-black"
                      : "text-white/40 hover:text-white border border-white/10 hover:border-white/20",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Featured Case */}
          {featuredCase && (
            <ScrollReveal className="lg:col-span-7 lg:row-span-2">
              <TiltCard tiltAmount={5}>
                <div
                  className="group h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-gradient-to-br from-[#FACC15] to-[#F59E0B] rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredId(featuredCase.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                  <span className="absolute -bottom-16 -right-16 text-[200px] font-bold text-black/5 select-none leading-none">
                    01
                  </span>

                  <div className="relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-black/10 text-black mb-6">
                      {featuredCase.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 max-w-md">
                      {featuredCase.title}
                    </h3>
                    <p className="text-black/60 max-w-md text-base sm:text-lg">{featuredCase.description}</p>
                  </div>

                  <div className="relative z-10">
                    {/* Progress bar */}
                    <div className="mb-6">
                      <AnimatedProgress value={featuredCase.resultValue} />
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-black/40 block mb-2">Результат</span>
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                          {featuredCase.result}
                        </span>
                      </div>
                      <div
                        className={cn(
                          "w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black flex items-center justify-center transition-all",
                          hoveredId === featuredCase.id && "scale-110 rotate-12",
                        )}
                      >
                        <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#FACC15]" />
                      </div>
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {featuredCase.stack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-black/10 text-black/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          )}

          {/* Other Cases */}
          {otherCases.map((caseItem, index) => (
            <ScrollReveal key={caseItem.id} delay={(index + 1) * 100} className="lg:col-span-5">
              <TiltCard tiltAmount={8}>
                <div
                  className="group h-full min-h-[220px] sm:min-h-[260px] bg-[#141414] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-white/5 hover:border-[#FACC15]/30 transition-all cursor-pointer"
                  onMouseEnter={() => setHoveredId(caseItem.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <span className="absolute -top-4 -right-2 text-[80px] font-bold text-white/[0.02] select-none leading-none">
                    0{index + 2}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/50">
                        {caseItem.category}
                      </span>
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                          hoveredId === caseItem.id ? "bg-[#FACC15] scale-110" : "bg-white/5",
                        )}
                      >
                        <ArrowUpRight
                          className={cn(
                            "w-4 h-4 transition-all",
                            hoveredId === caseItem.id ? "text-black rotate-12" : "text-white/30",
                          )}
                        />
                      </div>
                    </div>
                    <h3
                      className={cn(
                        "text-lg sm:text-xl font-bold text-white mb-2 transition-colors",
                        hoveredId === caseItem.id && "text-[#FACC15]",
                      )}
                    >
                      {caseItem.title}
                    </h3>
                    <p className="text-sm text-white/40 line-clamp-2">{caseItem.description}</p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                    <div className="flex gap-2">
                      {caseItem.stack.slice(0, 2).map((tech, idx) => (
                        <span key={idx} className="text-xs font-mono text-white/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-white">{caseItem.result}</span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
