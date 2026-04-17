"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stackCategories = [
  {
    name: "Frontend",
    technologies: [
      { name: "React", level: "Avanzado" },
      { name: "Next.js", level: "Avanzado" },
      { name: "TypeScript", level: "Avanzado" },
      { name: "JavaScript", level: "Avanzado" },
      { name: "Tailwind CSS", level: "Avanzado" },
    ]
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", level: "Avanzado" },
      { name: "Express", level: "Avanzado" },
      { name: "NestJS", level: "Intermedio" },
      { name: "REST APIs", level: "Avanzado" },
      { name: "Swagger", level: "Avanzado" },
    ]
  },
  {
    name: "Base de datos",
    technologies: [
      { name: "PostgreSQL", level: "Avanzado" },
      { name: "Prisma", level: "Avanzado" },
      { name: "MongoDB", level: "Intermedio" },
      { name: "TypeORM", level: "Intermedio" },
    ]
  },
  {
    name: "Infraestructura",
    technologies: [
      { name: "Docker", level: "Avanzado" },
      { name: "Git", level: "Avanzado" },
      { name: "GitHub", level: "Avanzado" },
      { name: "NGINX", level: "Intermedio" },
      { name: "VPS", level: "Intermedio" },
    ]
  },
  {
    name: "Integraciones",
    technologies: [
      { name: "Mercado Pago", level: "Avanzado" },
      { name: "PayPal", level: "Avanzado" },
      { name: "Stripe", level: "Intermedio" },
      { name: "AFIP", level: "Avanzado" },
      { name: "Cloudinary", level: "Avanzado" },
    ]
  }
]

export function Stack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="stack" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div ref={ref} className="grid md:grid-cols-12 gap-8 md:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-medium text-accent uppercase tracking-wide">
                Stack
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-9"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-balance">
              Stack tecnológico
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Tecnologías con las que trabajo diariamente para construir 
              soluciones completas, desde la interfaz hasta la infraestructura.
            </p>
          </motion.div>
        </div>

        {/* Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <h3 className="text-sm font-medium text-accent uppercase tracking-wide mb-6">
                {category.name}
              </h3>
              <ul className="space-y-4">
                {category.technologies.map((tech) => (
                  <li key={tech.name} className="flex items-center justify-between">
                    <span className="text-foreground font-medium">
                      {tech.name}
                    </span>
                    <span className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded">
                      {tech.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tools mention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            También trabajo con: Figma, Postman, VS Code, Linux, metodologías ágiles (Scrum, Kanban)
          </p>
        </motion.div>
      </div>
    </section>
  )
}
