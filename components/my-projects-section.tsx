import { ExternalLink, Star, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

const myProjects = [
  {
    number: "01",
    name: "QueueBot",
    description: "Бот для управления очередями и записи клиентов",
    features: ["Автоматическая запись", "Уведомления", "Интеграция с календарём", "Статистика"],
    stats: { users: "2K+", rating: "4.9" },
    link: "https://t.me/QueueBot",
    color: "bg-[#FF6B35]",
  },
  {
    number: "02",
    name: "PaymentBot",
    description: "Бот для приёма платежей и управления подписками",
    features: ["Приём оплаты", "Автопродление", "Уведомления", "Аналитика"],
    stats: { users: "5K+", rating: "4.8" },
    link: "https://t.me/PaymentBot",
    color: "bg-[#FACC15]",
  },
  {
    number: "03",
    name: "SupportBot",
    description: "Бот технической поддержки с AI-ответами",
    features: ["AI-ассистент", "База знаний", "Тикет-система", "CRM"],
    stats: { users: "3K+", rating: "4.9" },
    link: "https://t.me/SupportBot",
    color: "bg-[#3B82F6]",
  },
]

export function MyProjectsSection() {
  return (
    <section id="my-projects" className="py-16 sm:py-20 lg:py-32 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight">
            Мои проекты
          </h2>
          <p className="mt-3 sm:mt-4 text-white/50 text-base sm:text-lg max-w-2xl">
            Telegram-боты, которые я разработал и развиваю как собственные продукты
          </p>
        </div>

        {/* Projects Grid - responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {myProjects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-2xl sm:rounded-3xl overflow-hidden",
                index === 0 ? "md:row-span-2" : "",
              )}
            >
              <div
                className={cn(
                  "h-full p-6 sm:p-8 flex flex-col bg-[#2a2a2a]",
                  index === 0 ? "md:min-h-[450px] lg:min-h-[500px]" : "",
                )}
              >
                {/* Number & Icon */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <span className="text-white/30 text-sm font-mono">{project.number}</span>
                  <div
                    className={cn(
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center",
                      project.color,
                    )}
                  >
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-4 sm:mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-white/40" />
                    <span className="font-semibold text-white text-sm sm:text-base">{project.stats.users}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FACC15] fill-[#FACC15]" />
                    <span className="font-semibold text-white text-sm sm:text-base">{project.stats.rating}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent rounded-full h-11 sm:h-12 touch-manipulation"
                >
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    Открыть бота
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
