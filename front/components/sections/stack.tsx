"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type Technology = { id: string; name: string; category: string; level: string }

const defaults: Technology[] = [
  { id: "1", name: "Next.js", category: "Frontend", level: "Avanzado" },
  { id: "2", name: "React", category: "Frontend", level: "Avanzado" },
  { id: "3", name: "Node.js", category: "Backend", level: "Avanzado" },
  { id: "4", name: "Express", category: "Backend", level: "Avanzado" },
  { id: "5", name: "Prisma", category: "Base de datos", level: "Avanzado" },
]

export function Stack() {
  const [technologies, setTechnologies] = useState<Technology[]>(defaults)

  useEffect(() => {
    const api = process.env.NEXT_PUBLIC_API_URL
    if (!api) return

    fetch(`${api}/content`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.technologies) && data.technologies.length > 0) setTechnologies(data.technologies)
      })
      .catch(() => undefined)
  }, [])

  return (
    <section id="stack" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-10">Stack que domina el negocio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="border border-border rounded-xl p-4 bg-card"
            >
              <p className="text-xs uppercase text-accent tracking-wider">{tech.category}</p>
              <p className="text-lg font-medium mt-1">{tech.name}</p>
              <p className="text-sm text-muted-foreground">{tech.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
