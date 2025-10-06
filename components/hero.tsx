"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 pt-20 sm:pt-24"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-block">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                {t.hero.available}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight">
              {t.hero.name}
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">{t.hero.role}</p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">{t.hero.description}</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button size="lg" asChild className="text-sm sm:text-base w-full sm:w-auto">
                <a href="#contact">{t.hero.contactBtn}</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-sm sm:text-base bg-transparent w-full sm:w-auto"
              >
                <a href="#experience">{t.hero.experienceBtn}</a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 sm:gap-3 pt-4 sm:pt-6 text-xs sm:text-sm text-muted-foreground">
              <a
                href="mailto:genesispatino0102@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors break-all"
              >
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="break-all">genesispatino0102@gmail.com</span>
              </a>
              <a href="tel:3008707738" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                +57 300 870 7738
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                Cartagena, Colombia
              </div>
              <a
                href="https://www.linkedin.com/in/genesis-pati%C3%B1o-urquijo-b68115272/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/genesisdev22?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                GitHub Profile
              </a>
            </div>
          </div>

          <div className="relative hidden md:block h-[400px] lg:h-[600px]">
            {/* Floating circles with different sizes and animations */}
            <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/20 blur-2xl animate-pulse" />
            <div
              className="absolute top-40 left-10 w-24 h-24 rounded-full bg-accent/30 blur-xl"
              style={{ animation: "float 6s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-32 right-32 w-40 h-40 rounded-full bg-primary/15 blur-3xl"
              style={{ animation: "float 8s ease-in-out infinite 1s" }}
            />
            <div
              className="absolute bottom-20 left-20 w-28 h-28 rounded-full bg-accent/20 blur-2xl"
              style={{ animation: "float 7s ease-in-out infinite 2s" }}
            />

            {/* Decorative lines */}
            <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            <div className="absolute top-1/3 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="absolute bottom-1/3 left-1/3 w-px h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

            {/* Tech stack badges floating */}
            <div
              className="absolute top-32 left-1/3 px-4 py-2 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium text-primary shadow-lg"
              style={{ animation: "float 5s ease-in-out infinite" }}
            >
              React
            </div>
            <div
              className="absolute top-1/2 right-1/4 px-4 py-2 bg-background/80 backdrop-blur-sm border border-accent/20 rounded-full text-sm font-medium text-accent shadow-lg"
              style={{ animation: "float 6s ease-in-out infinite 1.5s" }}
            >
              Node.js
            </div>
            <div
              className="absolute bottom-1/4 left-1/4 px-4 py-2 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium text-primary shadow-lg"
              style={{ animation: "float 7s ease-in-out infinite 0.5s" }}
            >
              TypeScript
            </div>
            <div
              className="absolute top-1/3 left-1/2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium text-primary shadow-lg"
              style={{ animation: "float 5.5s ease-in-out infinite 2s" }}
            >
              React Native
            </div>
            <div
              className="absolute bottom-1/3 right-1/3 px-4 py-2 bg-background/80 backdrop-blur-sm border border-accent/20 rounded-full text-sm font-medium text-accent shadow-lg"
              style={{ animation: "float 6.5s ease-in-out infinite 1s" }}
            >
              Flutter
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  )
}
