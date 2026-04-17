"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectModal } from "@/components/project-modal"

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  problem: string
  impact: string
  features: string[]
  stack: string[]
  highlights: string[]
  image: string
  color: string
}

const projects: Project[] = [
  {
    id: "von-konig",
    title: "Von König",
    subtitle: "ERP / POS Premium",
    description: "Sistema ERP + POS full-stack diseñado para negocios reales, especialmente retail y gastronomía, con arquitectura híbrida cloud + servidor local.",
    problem: "Los comercios necesitan sistemas que funcionen de forma confiable incluso sin conexión, con facturación electrónica y control de stock en tiempo real.",
    impact: "Sistema en producción manejando operaciones diarias de un negocio real con facturación AFIP integrada.",
    features: [
      "Frontend web optimizado para uso intensivo en caja",
      "Arquitectura híbrida: backend cloud + servidor local",
      "Facturación electrónica AFIP con generación de PDF y QR",
      "Impresión térmica Epson TM-T20III",
      "Productos por unidad y peso (KG) con precios dinámicos",
      "Gestión de stock por local y depósito",
      "Pagos mixtos y múltiples medios de pago",
      "Caja, finanzas, reportes y auditoría"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Docker", "NGINX", "VPS", "Cloudinary", "AFIP"],
    highlights: ["Arquitectura híbrida", "Facturación AFIP", "Operación real"],
    image: "https://res.cloudinary.com/deb7jg37j/image/upload/v1776389760/ChatGPT_Image_16_abr_2026_09_42_15_p.m._qruhio.png",
    color: "bg-slate-800"
  },
  {
    id: "entrenamiento-focus",
    title: "Entrenamiento Focus",
    subtitle: "Plataforma de Mentoría y Recursos Digitales",
    description: "Plataforma full-stack para venta de productos digitales y gestión de membresía premium enfocada en producción musical.",
    problem: "Creadores de contenido necesitan una plataforma integral para monetizar recursos digitales y gestionar suscripciones con múltiples pasarelas de pago.",
    impact: "Plataforma en producción con usuarios activos, procesando pagos en múltiples monedas.",
    features: [
      "Venta de recursos digitales tipo LINK y FILE",
      "Sistema de suscripciones mensuales premium",
      "Integración Mercado Pago y PayPal",
      "Multi-moneda ARS / USD con selección automática por país",
      "Webhooks y SubscriptionLinkIntent",
      "Acceso protegido a contenido premium",
      "Panel de usuario y administrador",
      "Autenticación con cookies httpOnly"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Cloudinary", "Swagger"],
    highlights: ["Multi-pasarela", "Suscripciones", "Multi-moneda"],
    image: "/projects/entrenamiento-focus.jpg",
    color: "bg-teal-700"
  },
  {
    id: "ecommerce",
    title: "eCommerce Full Stack",
    subtitle: "Plataforma de Comercio Electrónico",
    description: "eCommerce completo orientado a escalabilidad, UX y operación real con flujos de compra optimizados.",
    problem: "Los negocios necesitan una plataforma de eCommerce que maneje flujos complejos de compra, múltiples métodos de pago y gestión completa de órdenes.",
    impact: "Arquitectura escalable y mantenible lista para operación en producción.",
    features: [
      "Catálogo con filtros y variantes de color/talle",
      "Carrito persistente para usuarios anónimos y autenticados",
      "Checkout multi-step con gestión de direcciones",
      "Integración Mercado Pago y PayPal",
      "Sistema de cupones y descuentos",
      "Órdenes con estados y emails automatizados",
      "Panel administrador con métricas",
      "JWT en cookies httpOnly y verificación de email"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Docker", "Cloudinary", "Swagger"],
    highlights: ["Checkout completo", "Multi-pago", "Panel admin"],
    image: "/projects/ecommerce.jpg",
    color: "bg-amber-700"
  },
  {
    id: "cerro-barberia",
    title: "Cerro Barbería D&apos;Autor",
    subtitle: "Plataforma de Gestión de Barbería",
    description: "Plataforma digital full stack para la gestión integral de una barbería moderna, enfocada en optimizar la organización de turnos.",
    problem: "Los negocios de servicios necesitan herramientas para gestionar turnos, profesionales y clientes de forma eficiente.",
    impact: "Sistema que profesionaliza la gestión del negocio con mejor experiencia para clientes y staff.",
    features: [
      "Administración de múltiples barberos y servicios",
      "Agendas en tiempo real por profesional",
      "Turnos manuales y recurrentes",
      "Flujo de estados: pendiente, confirmado, completado, cancelado",
      "Reserva de turnos simple y rápida",
      "Gestión de clientes y servicios",
      "Métricas básicas de operación",
      "Estructura escalable y mantenible"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL"],
    highlights: ["Gestión de turnos", "Multi-barbero", "Tiempo real"],
    image: "/projects/cerro-barberia.jpg",
    color: "bg-stone-700"
  },
  {
    id: "kasapp",
    title: "Kasapp",
    subtitle: "Plataforma para Inmobiliarias",
    description: "Proyecto grupal desarrollado en SoyHenry, orientado a inmobiliarias con gestión de propiedades y páginas públicas.",
    problem: "Las inmobiliarias necesitan una solución SaaS que les permita gestionar propiedades y tener presencia web personalizable.",
    impact: "Experiencia de trabajo colaborativo en producto real con metodología ágil.",
    features: [
      "Panel privado para gestión de propiedades",
      "Página pública semi-personalizable",
      "Pagos integrados con Stripe",
      "Autenticación JWT",
      "Trabajo en equipo con metodología Kanban",
      "Despliegue en Azure",
      "Gestión de imágenes con Cloudinary"
    ],
    stack: ["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL", "TypeORM", "Docker", "Azure", "Cloudinary", "Stripe"],
    highlights: ["Trabajo en equipo", "SaaS", "Metodología ágil"],
    image: "/projects/kasapp.jpg",
    color: "bg-blue-800"
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section id="projects" className="py-24 md:py-32 bg-background">
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
                  Proyectos
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
                Proyectos destacados
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Una selección de sistemas que he construido, desde ERPs con facturación 
                electrónica hasta plataformas de membresía con pagos internacionales.
              </p>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div 
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="grid md:grid-cols-12 gap-0">
                    {/* Image */}
                    <div className={`md:col-span-5 relative aspect-video md:aspect-auto ${project.color}`}>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-full max-w-sm">
                          {/* Mockup placeholder */}
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4 shadow-2xl">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                            </div>
                            <div className="space-y-2">
                              <div className="h-3 bg-white/20 rounded w-3/4" />
                              <div className="h-3 bg-white/15 rounded w-1/2" />
                              <div className="h-8 bg-white/10 rounded mt-4" />
                              <div className="grid grid-cols-3 gap-2">
                                <div className="h-6 bg-white/10 rounded" />
                                <div className="h-6 bg-white/10 rounded" />
                                <div className="h-6 bg-white/10 rounded" />
                              </div>
                            </div>div
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-sm text-accent font-medium mb-1">
                            {project.subtitle}
                          </p>
                          <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                      </div>

                      <p className="text-muted-foreground mb-6 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Stack preview */}
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 5 && (
                          <span className="text-xs text-muted-foreground">
                            +{project.stack.length - 5} más
                          </span>
                        )}
                      </div>

                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-fit mt-4 -ml-3 text-accent hover:text-accent"
                      >
                        Ver detalles
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
