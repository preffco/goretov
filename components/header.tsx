"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#my-projects", label: "Проекты" },
  { href: "#solutions", label: "Решения" },
  { href: "#portfolio", label: "Кейсы" },
  { href: "#about", label: "Обо мне" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize, { passive: true })
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.top = `-${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
      }
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-[#1a1a1a]/95 backdrop-blur-xl border-b border-white/10" : "bg-[#1a1a1a]",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group z-50">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">GORETOV</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 xl:px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-5 xl:px-6 font-medium">
                <Link href="#contact">Написать</Link>
              </Button>
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden relative z-50 p-2 -mr-2 text-white touch-manipulation"
              aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <span
                  className={cn(
                    "absolute left-0 top-1 w-6 h-0.5 bg-white transition-all duration-300",
                    isMobileMenuOpen && "top-3 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-3 w-6 h-0.5 bg-white transition-all duration-300",
                    isMobileMenuOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-5 w-6 h-0.5 bg-white transition-all duration-300",
                    isMobileMenuOpen && "top-3 -rotate-45",
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 bg-[#1a1a1a] transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        )}
      >
        <nav className="flex flex-col justify-center items-center h-full px-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={cn(
                "py-4 text-2xl sm:text-3xl font-medium text-white/70 hover:text-white transition-all duration-300",
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={cn(
              "pt-8 mt-4 transition-all duration-300",
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: isMobileMenuOpen ? `${navLinks.length * 50}ms` : "0ms" }}
          >
            <Button
              asChild
              className="bg-[#FACC15] hover:bg-[#EAB308] text-black rounded-full h-14 px-10 text-lg font-medium"
            >
              <Link href="#contact" onClick={closeMobileMenu}>
                Обсудить проект
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
