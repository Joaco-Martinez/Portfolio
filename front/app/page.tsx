"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Stack } from "@/components/sections/stack"
import { Contact } from "@/components/sections/contact"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"
import  PortfolioLoader  from "@/components/loading"
export default function Home() {
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <>
    {loading && <PortfolioLoader />}

    <div  className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  )
}
