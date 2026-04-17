"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "joaco.martinez1480@gmail.com",
    href: "mailto:joaco.martinez1480@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/joaquinmartinez-dev1480",
    href: "https://www.linkedin.com/in/joaquinmartinez-dev1480/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Joaco-Martinez",
    href: "https://github.com/Joaco-Martinez",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-medium text-accent uppercase tracking-wide">
                Contacto
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-balance">
              Hablemos de tu próximo proyecto
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Estoy abierto a nuevas oportunidades profesionales y proyectos 
              desafiantes. Si buscas un desarrollador con experiencia en sistemas 
              complejos y visión de producto, conversemos.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <MapPin className="w-4 h-4" />
              <span>Córdoba, Argentina</span>
            </div>

            <Button asChild size="lg">
              <a href="https://api.whatsapp.com/send/?phone=543517474105&text=Hola%2C%20quiero%20hablar%20sobre%20un%20proyecto" target="_blank" rel="noopener noreferrer">
                Enviar mensaje
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Right Column - Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 md:col-start-7"
          >
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center justify-between p-6 bg-background border border-border rounded-lg hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <link.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {link.label}
                      </p>
                      <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Availability status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 p-4 bg-accent/5 border border-accent/20 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <p className="text-sm text-foreground">
                  Disponible para nuevos proyectos
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
