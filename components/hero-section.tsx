"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.3_0.02_250)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.3_0.02_250)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container relative z-10 px-4">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center justify-center mb-8 animate-float">
            <div className="relative w-48 h-32 rounded-2xl overflow-hidden bg-black border-2 border-primary/50 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
              <Image
                src="/images/63f5e818-1914-485b-b92c-788f530fa1d0.png"
                alt="IGNR Logo"
                fill
                className="object-contain p-6"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Cybersecurity Student</h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono">{"<Juan Chareun />"}</p>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Cybersecurity student dedicated to understanding and protecting systems. Passionate about network security, and continuously learning in the ever-evolving field of cybersecurity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="min-w-40 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              onClick={scrollToSkills}
              className="min-w-40 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Skills
            </Button>
            <Button
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="min-w-40 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToSkills}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to skills section"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </button>
    </section>
  )
}
