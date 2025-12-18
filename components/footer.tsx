import Link from "next/link"
import { Send, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 sm:py-12 bg-[#1a1a1a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">GORETOV</span>
          </div>

          {/* Links - larger touch targets on mobile */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="https://t.me/goretov"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 -m-2 text-white/50 hover:text-[#FACC15] transition-colors touch-manipulation"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/goretov"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 -m-2 text-white/50 hover:text-[#FACC15] transition-colors touch-manipulation"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:igor@goretov.dev"
              className="p-2 -m-2 text-white/50 hover:text-[#FACC15] transition-colors touch-manipulation"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs sm:text-sm text-white/40 text-center">© 2025 GORETOV. Все права защищены.</div>
        </div>
      </div>
    </footer>
  )
}
