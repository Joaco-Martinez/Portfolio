"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2 } from "lucide-react"
import { useEffect } from "react"
import type { Project } from "@/components/sections/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [project])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-card rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-card/80 backdrop-blur-sm rounded-full text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <div className={`relative ${project.color} p-8 md:p-12`}>
                <div className="max-w-lg">
                  <p className="text-white/70 text-sm font-medium mb-2">
                    {project.subtitle}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    {project.title}
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Mockup */}
                <div className="mt-8 max-w-md mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4 shadow-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-white/20 rounded w-3/4" />
                      <div className="h-4 bg-white/15 rounded w-1/2" />
                      <div className="h-12 bg-white/10 rounded mt-4" />
                      <div className="grid grid-cols-4 gap-2">
                        <div className="h-8 bg-white/10 rounded" />
                        <div className="h-8 bg-white/10 rounded" />
                        <div className="h-8 bg-white/10 rounded" />
                        <div className="h-8 bg-white/10 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 space-y-8">
                {/* Problem & Impact */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
                      Problema
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
                      Impacto
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-sm font-medium text-accent uppercase tracking-wide mb-4">
                    Funcionalidades principales
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack */}
                <div>
                  <h3 className="text-sm font-medium text-accent uppercase tracking-wide mb-4">
                    Stack tecnológico
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
