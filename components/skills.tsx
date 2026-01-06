import {
  Shield,
  Terminal,
  Network,
  Lock,
  Code,
  Database,
  Cloud,
  Wifi,
  Zap,
  Eye,
  Brain,
  GitBranch,
  Server,
} from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      category: "Security & Networking",
      skills: [
        { name: "Network Security", icon: Network },
        { name: "Cisco Routers", icon: Wifi },
      ],
    },
    {
      category: "Systems & Infrastructure",
      skills: [
        { name: "Virtualization", icon: Server },
        { name: "Linux", icon: Terminal },
      ],
    },
    {
      category: "Programming & Tools",
      skills: [
        { name: "Python", icon: Code },
        { name: "Git", icon: GitBranch },
        { name: "SQL", icon: Database },
        { name: "Bash", icon: Terminal },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Analytical Skills", icon: Brain },
        { name: "Problem Solving", icon: Eye },
        { name: "Incident Response", icon: Zap },
      ],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="mb-2 font-mono text-sm text-primary"># Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="space-y-4">
            <h4 className="font-mono text-sm font-bold text-primary uppercase tracking-widest">{category.category}</h4>
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group flex items-center gap-4 rounded-lg bg-card px-5 py-4 font-mono font-semibold text-foreground shadow-sm ring-1 ring-primary/20 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:ring-primary"
                >
                  <div className="flex items-center gap-3">
                    <skill.icon className="h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-125" />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
