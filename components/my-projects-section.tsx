"use client"

import { ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useState } from "react"

const myProjects = [
  {
    number: "01",
    name: "InvestAI",
    description: "AI-ассистент для инвесторов на базе ChatGPT. Агрегирует новости из 10+ источников, анализирует рыночные данные с Мосбиржи и других бирж, прогнозирует движение цен и уведомляет о ключевых изменениях рынка",
    features: ["AI-анализ на базе ChatGPT", "Mini App для удобного доступа", "Агрегация новостей из 10+ источников", "Данные Мосбиржи в реальном времени", "Прогнозирование цен", "Умные уведомления"],
    status: "Активен",
    link: "https://t.me/investaipro_bot",
    color: "bg-[#10B981]",
  },
  {
    number: "02",
    name: "Zodiare",
    description: "Астрологический бот на базе ChatGPT. Ведёт диалог и делает расклады прямо в чате, заменяя астролога. Mini App с расширенными возможностями для раскладов и просмотра гороскопов",
    features: ["AI-астролог на базе ChatGPT", "Расклады прямо в чате", "Mini App с расширенными возможностями", "Персональные гороскопы", "Диалог с ботом"],
    status: "Активен",
    link: "https://t.me/PaymentBot",
    color: "bg-[#FACC15]",
  },
  {
    number: "03",
    name: "NanoBanana & Suno",
    description: "Бот для создания изображений и музыки через AI. Объединяет API Nanobanana и Suno для генерации и редактирования изображений, создания музыки с текстом по описанию прямо в Telegram",
    features: ["Генерация изображений", "Редактирование изображений", "Создание музыки по описанию", "Музыка с текстом", "Интеграция Nanobanana & Suno"],
    status: "В разработке",
    link: "https://t.me/NanoBananaTOP_bot",
    color: "bg-[#3B82F6]",
  },
]

const investAIScreenshots = [
  "/screen1.jpeg",
  "/screen2.jpeg",
  "/screen3.jpeg",
]

const zodiareScreenshots = [
  "/screen4.jpeg",
  "/screen5.jpeg",
  "/screen6.jpeg",
]

export function MyProjectsSection() {
  const [isInvestAIOpen, setIsInvestAIOpen] = useState(false)
  const [isZodiareOpen, setIsZodiareOpen] = useState(false)

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
                  "h-full p-6 sm:p-8 flex flex-col bg-[#2a2a2a] rounded-2xl sm:rounded-3xl",
                  index === 0 ? "h-[500px] sm:h-[550px] md:h-[600px]" : "",
                )}
              >
                {/* Number & Decorative Element */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <span className="text-white/30 text-sm font-mono">{project.number}</span>
                  <div className={cn(
                    "w-3 h-12 sm:w-3.5 sm:h-14 rounded-full",
                    project.color
                  )} />
                </div>

                {/* Content */}
                <div className={cn(
                  index === 0 ? "flex flex-col overflow-hidden" : "flex-1"
                )}>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-white/60 mb-4 sm:mb-3 text-sm sm:text-base">{project.description}</p>

                  {/* Features */}
                  <div className={cn(
                    "space-y-2",
                    index === 0 ? "mb-3 sm:mb-4" : "mb-4 sm:mb-6"
                  )}>
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="mb-4 sm:mb-6 pt-4 border-t border-white/10">
                  <span className={cn(
                    "inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium",
                    project.status === "Активен" 
                      ? "bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30"
                      : "bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/30"
                  )}>
                    {project.status}
                  </span>
                </div>

                {/* CTA */}
                {index === 0 ? (
                  // InvestAI Modal
                  <Dialog open={isInvestAIOpen} onOpenChange={setIsInvestAIOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent rounded-full h-11 sm:h-12 touch-manipulation"
                      >
                        Посмотреть бота
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent 
                      showCloseButton={false}
                      className="!max-w-none !w-screen !h-screen !m-0 !rounded-none bg-[#2a2a2a] !border-0 p-0 gap-0 flex flex-col !top-0 !left-0 !translate-x-0 !translate-y-0"
                    >
                      <DialogClose className="absolute top-6 right-6 z-50 text-white hover:opacity-70 transition-opacity">
                        <X className="w-12 h-12" />
                      </DialogClose>
                      <div className="p-6 pb-4 border-b border-white/10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">InvestAI</h3>
                        <p className="text-white/60 text-sm md:text-base">
                          Посмотрите скриншоты Mini App
                        </p>
                      </div>
                      
                      <div className="flex-1 flex items-center justify-center px-4 py-6 overflow-hidden">
                        {/* Карусель для узких экранов */}
                        <div className="lg:hidden w-full max-w-md">
                          <Carousel className="w-full">
                            <CarouselContent className="-ml-2">
                              {investAIScreenshots.map((src, idx) => (
                                <CarouselItem key={idx} className="pl-2">
                                  <div className="flex items-center justify-center bg-black/20 rounded-xl p-3">
                                    <div className="relative w-[280px] h-[500px] mx-auto">
                                      <Image
                                        src={src}
                                        alt={`InvestAI screenshot ${idx + 1}`}
                                        fill
                                        className="object-contain rounded-lg"
                                        sizes="280px"
                                        loading="lazy"
                                        quality={85}
                                      />
                                    </div>
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 border-white/20 text-white hover:bg-white/10 bg-[#2a2a2a]/80 backdrop-blur-sm size-10" />
                            <CarouselNext className="right-2 border-white/20 text-white hover:bg-white/10 bg-[#2a2a2a]/80 backdrop-blur-sm size-10" />
                          </Carousel>
                        </div>

                        {/* Все 3 скриншота для больших экранов */}
                        <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 w-full max-w-7xl mx-auto">
                          {investAIScreenshots.map((src, idx) => (
                            <div key={idx} className="flex items-center justify-center bg-black/20 rounded-xl p-3 xl:p-4 flex-1 max-w-sm">
                              <div className="relative w-full aspect-[9/16] max-w-[300px] xl:max-w-[350px] mx-auto">
                                <Image
                                  src={src}
                                  alt={`InvestAI screenshot ${idx + 1}`}
                                  fill
                                  className="object-contain rounded-lg"
                                  sizes="(min-width: 1280px) 350px, 300px"
                                  loading="lazy"
                                  quality={85}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 pt-4 border-t border-white/10">
                        <Button
                          asChild
                          className="w-full max-w-md mx-auto bg-[#10B981] hover:bg-[#10B981]/90 text-white rounded-full h-12 md:h-14 text-base md:text-lg font-medium flex items-center justify-center"
                        >
                          <Link href="https://t.me/investaipro_bot" target="_blank" rel="noopener noreferrer" onClick={() => setIsInvestAIOpen(false)} className="flex items-center justify-center gap-2">
                            Открыть бота в Telegram
                            <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                          </Link>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : index === 1 ? (
                  // Zodiare Modal
                  <Dialog open={isZodiareOpen} onOpenChange={setIsZodiareOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent rounded-full h-11 sm:h-12 touch-manipulation"
                      >
                        Посмотреть бота
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent 
                      showCloseButton={false}
                      className="!max-w-none !w-screen !h-screen !m-0 !rounded-none bg-[#2a2a2a] !border-0 p-0 gap-0 flex flex-col !top-0 !left-0 !translate-x-0 !translate-y-0"
                    >
                      <DialogClose className="absolute top-6 right-6 z-50 text-white hover:opacity-70 transition-opacity">
                        <X className="w-12 h-12" />
                      </DialogClose>
                      <div className="p-6 pb-4 border-b border-white/10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Zodiare</h3>
                        <p className="text-white/60 text-sm md:text-base">
                          Посмотрите скриншоты Mini App
                        </p>
                      </div>
                      
                      <div className="flex-1 flex items-center justify-center px-4 py-6 overflow-hidden">
                        {/* Карусель для узких экранов */}
                        <div className="lg:hidden w-full max-w-md">
                          <Carousel className="w-full">
                            <CarouselContent className="-ml-2">
                              {zodiareScreenshots.map((src, idx) => (
                                <CarouselItem key={idx} className="pl-2">
                                  <div className="flex items-center justify-center bg-black/20 rounded-xl p-3">
                                    <div className="relative w-[280px] h-[500px] mx-auto">
                                      <Image
                                        src={src}
                                        alt={`Zodiare screenshot ${idx + 1}`}
                                        fill
                                        className="object-contain rounded-lg"
                                        sizes="280px"
                                        loading="lazy"
                                        quality={85}
                                      />
                                    </div>
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 border-white/20 text-white hover:bg-white/10 bg-[#2a2a2a]/80 backdrop-blur-sm size-10" />
                            <CarouselNext className="right-2 border-white/20 text-white hover:bg-white/10 bg-[#2a2a2a]/80 backdrop-blur-sm size-10" />
                          </Carousel>
                        </div>

                        {/* Все 3 скриншота для больших экранов */}
                        <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 w-full max-w-7xl mx-auto">
                          {zodiareScreenshots.map((src, idx) => (
                            <div key={idx} className="flex items-center justify-center bg-black/20 rounded-xl p-3 xl:p-4 flex-1 max-w-sm">
                              <div className="relative w-full aspect-[9/16] max-w-[300px] xl:max-w-[350px] mx-auto">
                                <Image
                                  src={src}
                                  alt={`Zodiare screenshot ${idx + 1}`}
                                  fill
                                  className="object-contain rounded-lg"
                                  sizes="(min-width: 1280px) 350px, 300px"
                                  loading="lazy"
                                  quality={85}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 pt-4 border-t border-white/10">
                        <Button
                          asChild
                          className="w-full max-w-md mx-auto bg-[#10B981] hover:bg-[#10B981]/90 text-white rounded-full h-12 md:h-14 text-base md:text-lg font-medium flex items-center justify-center"
                        >
                          <Link href={project.link} target="_blank" rel="noopener noreferrer" onClick={() => setIsZodiareOpen(false)} className="flex items-center justify-center gap-2">
                            Открыть бота в Telegram
                            <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                          </Link>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent rounded-full h-11 sm:h-12 touch-manipulation"
                  >
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      Посмотреть бота
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
