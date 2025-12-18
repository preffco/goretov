"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Send, MessageCircle, Mail, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", contact: "", task: "" })

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }, [])

  const handleChange = useCallback(
    (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    },
    [],
  )

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tight">
            Обсудим проект?
          </h2>
          <p className="mt-3 sm:mt-4 text-black/50 text-base sm:text-lg max-w-xl mx-auto">
            Напишите в Telegram — отвечу в течение нескольких часов
          </p>
        </div>

        {/* Contact Options - responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Telegram Card */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#1a1a1a] group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center mb-4 sm:mb-6">
              <Send className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Telegram</h3>
            <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base">Основной канал связи. Отвечаю быстро.</p>
            <Button
              asChild
              className="w-full bg-[#FACC15] hover:bg-[#EAB308] text-black rounded-full font-medium h-11 sm:h-12 touch-manipulation"
            >
              <Link href="https://t.me/goretov" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Написать в Telegram
              </Link>
            </Button>
          </div>

          {/* Email Card */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-black/10 group hover:border-black/20 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-black/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-black/10 transition-colors">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-black/60" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Email</h3>
            <p className="text-black/60 mb-4 sm:mb-6 text-sm sm:text-base">Для официальных запросов.</p>
            <Button
              asChild
              variant="outline"
              className="w-full border-black/20 hover:bg-black hover:text-white rounded-full bg-transparent text-black h-11 sm:h-12 touch-manipulation"
            >
              <Link href="mailto:igor@goretov.dev">igor@goretov.dev</Link>
            </Button>
          </div>
        </div>

        {/* Quick Form */}
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-black/10">
          <h3 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6 text-center">Или оставьте заявку</h3>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-6 sm:py-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center mb-3 sm:mb-4">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#10B981]" />
              </div>
              <p className="text-base sm:text-lg font-medium text-black">Заявка отправлена!</p>
              <p className="text-black/50 mt-1 text-sm sm:text-base">Отвечу в ближайшее время</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  placeholder="Как к вам обращаться?"
                  value={formData.name}
                  onChange={handleChange("name")}
                  required
                  className="bg-black/5 border-0 focus:ring-2 focus:ring-black/20 rounded-xl h-11 sm:h-12 text-black placeholder:text-black/40 text-base"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-black mb-2">
                  WhatsApp или Telegram
                </label>
                <Input
                  id="contact"
                  placeholder="Ваш номер телефона или @username"
                  value={formData.contact}
                  onChange={handleChange("contact")}
                  required
                  className="bg-black/5 border-0 focus:ring-2 focus:ring-black/20 rounded-xl h-11 sm:h-12 text-black placeholder:text-black/40 text-base"
                />
              </div>
              <div>
                <label htmlFor="task" className="block text-sm font-medium text-black mb-2">
                  Кратко о задаче
                </label>
                <Textarea
                  id="task"
                  placeholder="Опишите, что нужно сделать..."
                  rows={3}
                  value={formData.task}
                  onChange={handleChange("task")}
                  required
                  className="bg-black/5 border-0 focus:ring-2 focus:ring-black/20 rounded-xl resize-none text-black placeholder:text-black/40 text-base min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-black hover:bg-black/90 text-white h-12 sm:h-14 rounded-full text-base font-medium touch-manipulation"
              >
                Отправить заявку
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
