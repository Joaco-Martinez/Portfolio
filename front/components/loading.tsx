"use client"

import { motion } from "framer-motion"

export default function PortfolioLoader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#f6f7f8] overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,148,167,0.08),transparent_45%)]" />

      <div className="relative flex h-full w-full items-center justify-center px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-300/70 bg-white/80 shadow-sm backdrop-blur-sm"
          >
            <span className="text-xl font-semibold tracking-tight text-slate-900">
              JM
            </span>
          </motion.div>

          {/* Animated frame */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 w-[320px] rounded-3xl border border-slate-300/70 bg-white/70 p-5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm md:w-[420px]"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]/70" />
            </div>

            <div className="space-y-3">
              <LoadingLine width="100%" delay={0} />
              <LoadingLine width="78%" delay={0.15} />
              <LoadingLine width="92%" delay={0.3} />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <LoadingLine width="100%" delay={0.45} />
                <LoadingLine width="100%" delay={0.6} />
                <LoadingLine width="100%" delay={0.75} />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#0b8ea3]"
          >
            Full Stack Developer
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
          >
            Cargando portfolio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-3 max-w-md text-sm leading-6 text-slate-500 md:text-base"
          >
            Preparando proyectos, experiencia y stack.
          </motion.p>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 w-[220px]"
          >
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-slate-200">
              <motion.div
                className="h-full rounded-full bg-[#0b8ea3]"
                initial={{ x: "-100%" }}
                animate={{ x: "220%" }}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                style={{ width: "40%" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function LoadingLine({
  width,
  delay = 0,
}: {
  width: string
  delay?: number
}) {
  return (
    <div
      className="relative h-5 overflow-hidden rounded-xl bg-slate-200/80"
      style={{ width }}
    >
      <motion.div
        className="absolute inset-y-0 left-0 w-1/3 rounded-xl bg-gradient-to-r from-transparent via-white/80 to-transparent"
        initial={{ x: "-120%" }}
        animate={{ x: "320%" }}
        transition={{
          duration: 1.5,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}