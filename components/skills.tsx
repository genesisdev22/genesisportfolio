"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Lightbulb, Clock, Users } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function Skills() {
  const { t } = useLanguage()

  const softSkillsIcons = [Users, Lightbulb, Clock, Code2]

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          <div>
            <h2 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3 sm:mb-4">
              {t.skills.title}
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">{t.skills.heading}</h3>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t.skills.technical}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {t.skills.technicalSkills.map((skill) => (
                <Card key={skill.name} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="space-y-1 sm:space-y-2">
                      <p className="font-semibold text-base sm:text-lg">{skill.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{skill.level}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t.skills.soft}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {t.skills.softSkills.map((skill, index) => {
                const Icon = softSkillsIcons[index]
                return (
                  <Card key={skill.title} className="border-2">
                    <CardHeader>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                          <CardTitle className="text-base sm:text-lg">{skill.title}</CardTitle>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t.skills.languages}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {t.skills.languagesList.map((lang) => (
                <Card key={lang.name} className="border-2">
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="space-y-1 sm:space-y-2">
                      <p className="font-semibold text-base sm:text-lg">{lang.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{lang.level}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
