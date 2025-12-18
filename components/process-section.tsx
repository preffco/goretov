import { Search, Lightbulb, Code2, Rocket, HeartHandshake } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Анализ задачи",
    description: "Изучаю бизнес, процессы и цели",
    number: "01",
  },
  {
    icon: Lightbulb,
    title: "Решение",
    description: "Подбираю стек и архитектуру",
    number: "02",
  },
  {
    icon: Code2,
    title: "Прототип",
    description: "Создаю рабочую демо-версию",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Разработка",
    description: "Пишу код и запускаю",
    number: "04",
  },
  {
    icon: HeartHandshake,
    title: "Поддержка",
    description: "Дорабатываю и масштабирую",
    number: "05",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tight">
            Как я работаю
          </h2>
          <p className="mt-3 sm:mt-4 text-black/50 text-base sm:text-lg max-w-2xl">
            Понятный процесс от идеи до запуска
          </p>
        </div>

        {/* Steps - responsive */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 sm:gap-8 py-5 sm:py-8 border-t border-black/10 first:border-t-0"
            >
              {/* Number - hidden on very small screens */}
              <div className="hidden sm:block w-12 sm:w-16 flex-shrink-0">
                <span className="text-2xl sm:text-4xl font-bold text-black/10 group-hover:text-black/30 transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 sm:hidden mb-1">
                  <span className="text-sm font-bold text-black/30">{step.number}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2 group-hover:text-[#1a1a1a] transition-colors">
                  {step.title}
                </h3>
                <p className="text-black/60 text-sm sm:text-base max-w-xl">{step.description}</p>
              </div>

              {/* Icon - responsive size */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#FACC15] transition-colors flex-shrink-0">
                <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-black/40 group-hover:text-black transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
