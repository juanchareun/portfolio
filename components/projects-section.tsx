"use client"

import { Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const ignrProjects = [
  {
    title: "Network Traffic Analyzer",
    description:
      "Built a Python tool to analyze network traffic patterns and detect potential security threats using Scapy. Includes real-time monitoring and logging capabilities.",
    tags: ["Python", "Scapy", "Network Security"],
    github: "https://github.com/juanchareun/network-traffic-analyzer",
    image: "/ICONO.PNG",
  },
  {
    title: "Password Strength Analyzer",
    description:
      "Python application that evaluates password strength using multiple criteria and common password databases. Provides recommendations for stronger passwords.",
    tags: ["Python", "Security"],
    github: "https://github.com/juanchareun/password-analyzer",
    image: "/ICONO.png",
  },
]

export function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ignrProjects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects((prev) => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-block mb-4">
              <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                Research Initiative
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">IGNR Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Cybersecurity research projects developed under the IGNR initiative, exploring security
              concepts and practical implementations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ignrProjects.map((project, index) => (
              <Card
                key={project.title}
                className={`group overflow-hidden transition-all duration-500 hover:border-primary ${
                  visibleProjects.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-3">
                  {/* GitHub link remains with editable placeholder */}
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
