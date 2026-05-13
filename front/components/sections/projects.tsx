"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type Project = {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  highlights: string[]
  imageUrl: string
  accentColor: string
}

const fallback: Project[] = [
  {
    id: "1",
    slug: "erp-premium",
    title: "ERP / POS Premium",
    subtitle: "Arquitectura híbrida cloud + local",
    description: "Plataforma full-stack para operaciones reales de retail y gastronomía.",
    highlights: ["AFIP", "Stock", "Pagos mixtos"],
    imageUrl: "https://images.unsplash.com/photo-1551281044-8b5bd29f4572?w=1200&q=80",
    accentColor: "#0f172a",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [projects, setProjects] = useState<Project[]>(fallback)

  useEffect(() => {
    const api = process.env.NEXT_PUBLIC_API_URL
    if (!api) return

    fetch(`${api}/content`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.projects) && data.projects.length > 0) {
          setProjects(data.projects)
        }
      })
      .catch(() => undefined)
  }, [])

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight"
          >
            Proyectos que convierten visitas en clientes
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 42 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="rounded-2xl border border-border overflow-hidden bg-card"
            >
              <div className="aspect-video" style={{ background: project.accentColor }}>
                <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover mix-blend-luminosity opacity-90" />
              </div>
              <div className="p-6 space-y-4">
                <p className="text-xs uppercase tracking-[0.18em] text-accent">{project.subtitle}</p>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.highlights.map((h) => (
                    <span key={h} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">{h}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
