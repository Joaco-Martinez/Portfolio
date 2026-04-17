"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Layers, Code2, Database, Workflow } from "lucide-react"

const approaches = [
  {
    icon: Layers,
    title: "Arquitectura desacoplada",
    description: "Diseño sistemas con separación clara entre frontend y backend, APIs REST bien documentadas y estructuras escalables. Cada componente tiene responsabilidades definidas y puede evolucionar de forma independiente."
  },
  {
    icon: Code2,
    title: "Frontend orientado a producto",
    description: "Desarrollo interfaces que priorizan la experiencia de usuario sin sacrificar la solidez técnica. Componentes reutilizables, estado predecible y optimización de rendimiento para uso real."
  },
  {
    icon: Database,
    title: "Backend con lógica de negocio",
    description: "Construyo APIs que resuelven problemas reales: pagos, facturación, autenticación, permisos. Bases de datos bien modeladas con migraciones y queries optimizadas."
  },
  {
    icon: Workflow,
    title: "Sistemas para operación",
    description: "Experiencia en software que funciona en contextos de uso intensivo: puntos de venta, paneles administrativos, sistemas de turnos. Confiabilidad y mantenibilidad son prioridad."
  }
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32 bg-card">
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
                Enfoque
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
              Cómo trabajo
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Mi enfoque combina visión de producto con solidez técnica. 
              No construyo solo interfaces: construyo sistemas que funcionan 
              y generan valor real para el negocio.
            </p>
          </motion.div>
        </div>

        {/* Approaches Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group p-6 md:p-8 bg-background border border-border rounded-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <approach.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {approach.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {approach.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-8 bg-secondary/50 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Dominios de experiencia
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "ERP / POS",
              "eCommerce",
              "Plataformas de membresía",
              "Suscripciones y pagos",
              "Paneles administrativos",
              "Sistemas de turnos",
              "Facturación electrónica",
              "Gestión de stock",
              "Autenticación y permisos",
              "Integración de APIs"
            ].map((domain) => (
              <span
                key={domain}
                className="px-4 py-2 bg-card text-sm text-muted-foreground rounded-full border border-border"
              >
                {domain}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
