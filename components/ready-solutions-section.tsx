import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const solutions = [
  {
    title: "Sales-бот для продаж в Telegram",
    purpose: "Продавайте товары и услуги, не заставляя клиентов покидать мессенджер. Весь процесс от просмотра каталога до оплаты происходит в Telegram. Подходит для интернет-магазинов, онлайн-курсов и подписочных сервисов.",
    features: ["Каталог товаров с фото и описаниями", "Корзина и быстрое оформление заказа", "Безопасная оплата через ЮKassa, Robokassa и т.д.", "Автоматическое продление подписок", "Автоматическая отправка чеков", "Отчёты по продажам и конверсии"],
    demoLink: "https://t.me/demo_payment_bot",
    tag: "Бестселлер",
  },
  {
    title: "CRM-бот для лидов и заявок",
    purpose: "Ни одна заявка не останется без внимания. Бот собирает контакты клиентов, отправляет уведомления и автоматически передаёт данные в вашу CRM. Вы не упустите потенциальных покупателей и увеличите конверсию.",
    features: ["Автоматический сбор контактов и заявок", "Мгновенные уведомления о новых лидах", "Отслеживание статуса обработки заявок", "Синхронизация с CRM и Google Sheets", "Автоматические ответы клиентам", "Повышение скорости обработки заявок"],
    demoLink: "https://t.me/demo_crm_bot",
    tag: "Популярное",
  },
  {
    title: "AI-автоматизация для бизнеса",
    purpose: "Автоматизируйте коммуникации с клиентами, настройте маркетинговые рассылки и интегрируйте бота с вашими системами. Экономьте время на рутинных задачах и фокусируйтесь на развитии бизнеса.",
    features: ["Автоматические ответы и чат-боты на AI", "Персонализированные рассылки клиентам", "Интеграция с CRM и другими сервисами", "Автоматизация рутинных процессов", "Сбор и анализ данных о клиентах", "Мультиканальная коммуникация"],
    demoLink: "https://t.me/demo_booking_bot",
    tag: "Новинка",
  },
]

export function ReadySolutionsSection() {
  return (
    <section id="solutions" className="py-16 sm:py-20 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tight">
            Готовые решения
          </h2>
          <p className="mt-3 sm:mt-4 text-black/50 text-base sm:text-lg max-w-2xl">
            Демо-боты для знакомства с моими решениями
          </p>
        </div>

        {/* Solutions Grid - responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-black/5 hover:shadow-xl transition-all duration-300"
            >
              {/* Tag */}
              <div className="mb-4 sm:mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-black text-white">{solution.tag}</span>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{solution.title}</h3>
              <p className="text-black/60 mb-4 sm:mb-6 text-sm sm:text-base">{solution.purpose}</p>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="text-sm text-black/70">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                asChild
                className="w-full bg-black hover:bg-black/90 text-white rounded-full h-11 sm:h-12 touch-manipulation group/btn"
              >
                <Link href="#contact">
                  Получить рассчет
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-black/50 mb-4 text-sm sm:text-base">Нужно кастомное решение?</p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-black/20 hover:bg-black hover:text-white rounded-full px-6 sm:px-8 bg-transparent text-black h-12 sm:h-14 touch-manipulation"
          >
            <Link href="#contact">Обсудить доработку</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
