"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name and Copyright */}
          <div className="text-center md:text-left">
            <p className="font-semibold mb-1">Joaquín Martínez</p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link 
              href="#projects" 
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Proyectos
            </Link>
            <Link 
              href="#experience" 
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Experiencia
            </Link>
            <Link 
              href="#contact" 
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Joaco-Martinez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/joaquinmartinez-dev1480/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:joaco.martinez1480@gmail.com"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
