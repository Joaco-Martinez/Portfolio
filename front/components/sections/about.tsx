"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-medium text-accent uppercase tracking-wide">
                Sobre mí
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <div className="md:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-balance"
            >
              Construyo software que resuelve problemas reales de negocio
            </motion.h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Soy desarrollador Full Stack con fuerte enfoque en frontend y experiencia 
                comprobada en la construcción de sistemas complejos para operación real. 
                Mi trabajo combina criterio técnico sólido con visión de producto, 
                priorizando soluciones que generen valor tangible.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                He desarrollado sistemas ERP/POS con facturación electrónica AFIP, 
                plataformas de membresía con integración de pagos internacionales, 
                eCommerce completos y herramientas de gestión operativa. Cada proyecto 
                me ha permitido trabajar en lógica de negocio compleja, arquitecturas 
                escalables y experiencias de usuario optimizadas.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Mi stack principal incluye React, Next.js, TypeScript, Node.js, 
                PostgreSQL y Docker. Trabajo con metodologías ágiles y mantengo 
                código limpio, documentado y preparado para escalar.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border"
            >
              {[
                { value: "4+", label: "Proyectos en producción" },
                { value: "Full Stack", label: "Perfil técnico" },
                { value: "1+", label: "Año de experiencia" },
                { value: "10+", label: "Tecnologías utilizadas" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl md:text-3xl font-semibold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
