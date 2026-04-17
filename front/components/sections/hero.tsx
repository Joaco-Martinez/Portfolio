"use client"

import { motion } from "framer-motion"
import { ArrowDown, FileText, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent font-medium text-sm tracking-wide uppercase mb-6"
          >
            Full Stack Developer
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6 text-balance"
          >
            Joaquín Martínez
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl text-pretty"
          >
            Desarrollo plataformas web robustas, escalables y orientadas a negocio. 
            Especializado en frontend con React y Next.js, con sólida experiencia en 
            arquitecturas full stack y sistemas de operación real.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button asChild size="lg">
              <Link href="#projects">
                Ver proyectos
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">
                Contactar
              </Link>
            </Button>
            {/* <Button asChild variant="ghost" size="lg">
              <a href="/cv-joaquin-martinez.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Descargar CV
              </a>
            </Button> */}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/Joaco-Martinez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/joaquinmartinez-dev1480/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <span className="text-sm text-muted-foreground">
              Córdoba, Argentina
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link 
            href="#about" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
