"use client"

import {
  Shield,
  Lock,
  Terminal,
  Network,
  Search,
  Code,
  Database,
  GitBranch,
  Server,
  Wifi,
  Eye,
  Zap,
  Target,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "SECURITY & NETWORKING",
    skills: [
      { icon: Shield, title: "Network Security" },
      { icon: Wifi, title: "Cisco Routers" },
    ],
  },
  {
    title: "SYSTEMS & INFRASTRUCTURE",
    skills: [
      { icon: Server, title: "Virtualization" },
      { icon: Terminal, title: "Linux" },
    ],
  },
  {
    title: "PROGRAMMING & TOOLS",
    skills: [
      { icon: Code, title: "Python" },
      { icon: GitBranch, title: "Git" },
      { icon: Database, title: "SQL" },
      { icon: Terminal, title: "Bash" },
    ],
  },
  {
    title: "SOFT SKILLS",
    skills: [
      { icon: Search, title: "Analytical Skills" },
      { icon: Eye, title: "Problem Solving" },
      { icon: Zap, title: "Incident Response" },
    ],
  },
]

export function SkillsSection() {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillCategories.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCategories((prev) => [...prev, index])
              }, index * 100)
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
    <section id="skills" ref={sectionRef} className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-primary"># Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A comprehensive skillset in cybersecurity domains, from network defense to application security
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`transition-all duration-700 ${
                  visibleCategories.includes(categoryIndex) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-sm font-bold text-primary mb-4 tracking-wider">{category.title}</h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={`${skill.title}-${skillIndex}`}
                      className="group flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 hover:border-primary transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <skill.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-base font-medium">{skill.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
