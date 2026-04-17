"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Sobre mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Experiencia", href: "#experience" },
  { name: "Stack", href: "#stack" },
  { name: "Contacto", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-lg font-semibold text-foreground tracking-tight hover:text-accent transition-colors"
        >
          JM
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="default" size="sm">
            <Link href="#contact">Contactar</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-card/95 backdrop-blur-lg border-b border-border"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <Button asChild variant="default" size="sm" className="w-full mt-2">
                  <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Contactar
                  </Link>
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
