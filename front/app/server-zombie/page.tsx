import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, MonitorDown, PackagePlus, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

// El .zip pesa ~210 MB: no entra en el repo (límite de GitHub 100 MB) ni en Vercel,
// así que se sirve como asset del release "server-zombie" de GitHub.
const DOWNLOAD_URL =
  process.env.NEXT_PUBLIC_SERVER_ZOMBIE_URL ??
  "https://github.com/Joaco-Martinez/Portfolio/releases/download/server-zombie/Zombies.zip"

export const metadata: Metadata = {
  title: "Server Zombie | Descarga",
  description: "Descarga e instalación de Server Zombie.",
  robots: { index: false, follow: false },
}

const steps = [
  {
    icon: Download,
    title: "Descargá el modpack",
    text: "Hacé click en el botón de descarga. El archivo pesa aproximadamente 210 MB. No lo descomprimas.",
  },
  {
    icon: MonitorDown,
    title: "Instalá CurseForge",
    text: "Si no lo tenés, descargá la app de CurseForge (curseforge.com/download/app) y elegí Minecraft.",
  },
  {
    icon: PackagePlus,
    title: "Importá el perfil",
    text: "En CurseForge: “Create Custom Profile” → “Import” → seleccioná “Zombies.zip”. Descarga Forge 1.20.1 y todos los mods automáticamente.",
  },
  {
    icon: Play,
    title: "Jugá",
    text: "Tocá “Play” en el perfil “Zombies”. La primera vez tarda un poco en cargar.",
  },
]

export default function ServerZombiePage() {
  return (
    <main className="min-h-screen bg-background py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al portfolio
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-accent" />
          <span className="text-sm font-medium text-accent uppercase tracking-wide">
            Descarga
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
          Server Zombie
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-10">
          Modpack de Minecraft 1.20.1 (Forge). Descargalo y seguí los pasos de instalación de abajo.
        </p>

        <Button asChild size="lg" className="mb-16">
          <a href={DOWNLOAD_URL} download>
            <Download className="mr-2 w-4 h-4" />
            Descargar Zombies.zip
          </a>
        </Button>

        <h2 className="text-xl font-semibold text-foreground mb-6">Instalación</h2>

        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-4 p-5 rounded-lg border border-border bg-card"
            >
              <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent">
                <step.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  {i + 1}. {step.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  )
}
