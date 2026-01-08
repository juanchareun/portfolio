"use client"

import { Mail, Github, Linkedin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "juanignaciochareun@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=juanignaciochareun@gmail.com&su=Portfolio%20Contact",  
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@juanchareun",
    href: "https://github.com/juanchareun", 
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/juan-chareun",
    href: "https://www.linkedin.com/in/juan-chareun/", 
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Interested in collaborating or have a security project in mind? Feel free to reach out through any of
              these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={method.label}
                className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <a href={method.href} className="flex items-center gap-4 group-hover:text-primary transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      <p className="font-mono text-lg">{method.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always interested in discussing cybersecurity topics, collaboration opportunities, or connecting. Feel free to reach out!
              </p>
              <Button size="lg" asChild>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=juanignaciochareun@gmail.com&su=Portfolio%20Contact">Send Message</a>
              </Button>
            </CardContent>
          </Card>

          <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p className="font-mono">© 2026 Juan Chareun.</p>
          </footer>
        </div>
      </div>
    </section>
  )
}
