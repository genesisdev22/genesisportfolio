"use client"

import { useLanguage } from "@/lib/i18n"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3 sm:mb-4">
              {t.about.title}
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-balance">{t.about.heading}</h3>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t.about.paragraph1.split("React, React Native, Node.js y NestJS")[0]}
              <span className="text-foreground font-medium"> React, React Native, Node.js y NestJS</span>
              {t.about.paragraph1.split("React, React Native, Node.js y NestJS")[1] || "."}
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{t.about.paragraph2}</p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{t.about.paragraph3}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
