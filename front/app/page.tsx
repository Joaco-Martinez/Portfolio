"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type Tech = { id: string; name: string; category: string; level: string }
type Project = { id: string; title: string; subtitle: string; description: string; imageUrl: string; highlights: string[] }

const fallbackProjects: Project[] = [
  {
    id: "p1",
    title: "Luxury Commerce Engine",
    subtitle: "Ecommerce premium con conversión optimizada",
    description: "Arquitectura full-stack orientada a rendimiento, pagos y crecimiento comercial.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",
    highlights: ["High Performance", "SEO", "Payments"],
  },
  {
    id: "p2",
    title: "SaaS Membership Platform",
    subtitle: "Producto digital de suscripciones",
    description: "Membresías, acceso por roles y automatización de contenidos premium.",
    imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1400&q=80",
    highlights: ["Subscriptions", "Automation", "Scalable"],
  },
]

const fallbackTech: Tech[] = [
  { id: "t1", name: "Next.js", category: "Frontend", level: "Avanzado" },
  { id: "t2", name: "React", category: "Frontend", level: "Avanzado" },
  { id: "t3", name: "Node.js", category: "Backend", level: "Avanzado" },
  { id: "t4", name: "Express", category: "Backend", level: "Avanzado" },
  { id: "t5", name: "Prisma", category: "Database", level: "Avanzado" },
]

export default function Home() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects)
  const [tech, setTech] = useState<Tech[]>(fallbackTech)

  useEffect(() => {
    const api = process.env.NEXT_PUBLIC_API_URL
    if (!api) return

    fetch(`${api}/content`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.projects) && data.projects.length) setProjects(data.projects)
        if (Array.isArray(data.technologies) && data.technologies.length) setTech(data.technologies)
      })
      .catch(() => undefined)
  }, [])

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.28em] text-cyan-300 uppercase mb-6">Freelance Full Stack Developer</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight max-w-4xl">
          Diseño experiencias digitales
          <span className="block text-cyan-300">que venden, escalan y deslumbran.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.86, y: 0 }} transition={{ delay: 0.2 }} className="max-w-2xl mt-8 text-lg text-white/70">
          Portfolio completamente nuevo, minimalista y profesional. Construido con Next.js + React, backend en Node/Express y Prisma para administrar proyectos y tecnologías desde API.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.article key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
            <div className="aspect-video bg-slate-900">
              <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover opacity-80" />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 mb-2">{project.subtitle}</p>
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">{project.highlights?.map((h) => <span key={h} className="text-xs px-3 py-1 rounded-full bg-white/10">{h}</span>)}</div>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <h3 className="text-3xl md:text-4xl font-semibold mb-8">Stack administrable desde backend</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {tech.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.04 }} viewport={{ once: true }} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <p className="text-xs uppercase tracking-wider text-cyan-300">{t.category}</p>
              <p className="text-xl font-medium mt-1">{t.name}</p>
              <p className="text-sm text-white/70">{t.level}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
