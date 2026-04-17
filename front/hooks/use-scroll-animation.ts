"use client"

import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import { useRef } from "react"

interface ScrollAnimationOptions {
  offset?: ["start end" | "start start" | "end start" | "end end" | "center center", "start end" | "start start" | "end start" | "end end" | "center center"]
  springConfig?: {
    stiffness?: number
    damping?: number
    mass?: number
  }
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  
  const { offset = ["start end", "end start"], springConfig = { stiffness: 100, damping: 30, mass: 0.5 } } = options

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  const smoothProgress = useSpring(scrollYProgress, springConfig)

  return {
    ref,
    scrollYProgress,
    smoothProgress,
  }
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

export function useFadeIn(value: MotionValue<number>, start = 0, end = 0.5) {
  return useTransform(value, [start, end], [0, 1])
}

export function useSlideUp(value: MotionValue<number>, distance = 50, start = 0, end = 0.5) {
  const y = useTransform(value, [start, end], [distance, 0])
  const opacity = useTransform(value, [start, end], [0, 1])
  return { y, opacity }
}
