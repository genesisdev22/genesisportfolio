"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Experience Section */}
          <div>
            <h2 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3 sm:mb-4">
              {t.experience.title}
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">{t.experience.heading}</h3>

            <div className="space-y-4 sm:space-y-6">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl sm:text-2xl">{t.experience.jobTitle}</CardTitle>
                      <CardDescription className="text-sm sm:text-base font-medium text-foreground">
                        {t.experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                        {t.experience.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                        {t.experience.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {t.experience.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {t.experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs sm:text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3 sm:mb-4">
              {t.experience.education}
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">{t.experience.educationHeading}</h3>

            <Card className="border-2">
              <CardHeader>
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">{t.experience.degree}</CardTitle>
                    <CardDescription className="text-sm sm:text-base font-medium text-foreground">
                      {t.experience.institution}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                      {t.experience.educationPeriod}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                      {t.experience.educationLocation}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
