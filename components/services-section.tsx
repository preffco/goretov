"use client"

import { Bot, Smartphone, Workflow, Globe, Puzzle, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TiltCard } from "@/components/tilt-card"

const services = [
  {
    icon: Bot,
    title: "Telegram-боты",
    description: "CRM, заявки, поддержка, платёжки, AI-функции",
    color: "bg-[#FF6B35]",
    number: "01",
  },
  {
    icon: Smartphone,
    title: "Mini Apps",
    description: "Интерфейсы и сервисы внутри Telegram",
    color: "bg-[#3B82F6]",
    number: "02",
  },
  {
    icon: Workflow,
    title: "Автоматизация",
    description: "Процессы, API-интеграции, связь систем",
    color: "bg-[#FACC15]",
    number: "03",
  },
  {
    icon: Globe,
    title: "Сайты",
    description: "Лендинги, портфолио, веб-сервисы",
    color: "bg-[#10B981]",
    number: "04",
  },
  {
    icon: Puzzle,
    title: "Кастом",
    description: "Нестандартные задачи под ключ",
    color: "bg-[#8B5CF6]",
    number: "05",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-40 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black tracking-tight">
              Какие задачи
              <br />
              <span className="text-black/20">я решаю</span>
            </h2>
            <p className="text-black/50 text-lg max-w-md lg:text-right">
              От идеи до работающего продукта — полный цикл разработки
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <TiltCard>
                <div className="group h-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-black/5 hover:border-black/10 transition-all hover:shadow-xl cursor-pointer">
                  {/* Number */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-black/10 text-4xl font-bold">{service.number}</span>
                    <div
                      className={cn(
                        "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3",
                        service.color,
                      )}
                    >
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3 group-hover:text-black/80 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-black/50 leading-relaxed mb-6 text-sm sm:text-base">{service.description}</p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-black/30 group-hover:text-black transition-colors">
                    <span className="text-sm font-medium">Подробнее</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={500}>
            <TiltCard>
              <div className="h-full bg-[#1a1a1a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Не нашли нужное?</h3>
                  <p className="text-white/50 text-sm sm:text-base">Расскажите о задаче — найдём решение вместе</p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#FACC15] font-medium hover:gap-4 transition-all"
                >
                  Обсудить проект
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
