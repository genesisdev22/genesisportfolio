"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function Contact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.email,
      value: "genesispatino0102@gmail.com",
      href: "mailto:genesispatino0102@gmail.com",
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+57 300 870 7738",
      href: "tel:3008707738",
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: "Cartagena, Colombia",
      href: null,
    },
  ]

  const handleWhatsAppClick = () => {
    const phoneNumber = "573008707738"
    const message = encodeURIComponent("Hola Genesis, me gustaría contactarte sobre un proyecto.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
              {t.contact.title}
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">{t.contact.heading}</h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{t.contact.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {contactInfo.map((info) => (
              <Card key={info.label} className="border-2 text-center">
                <CardHeader>
                  <div className="mx-auto p-2 sm:p-3 bg-primary/10 rounded-lg w-fit mb-3 sm:mb-4">
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base">{info.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-words"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-xs sm:text-sm text-muted-foreground break-words">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 sm:gap-6 pt-6 sm:pt-8">
            <Button size="lg" onClick={handleWhatsAppClick} className="text-sm sm:text-base w-full sm:w-auto">
              {t.contact.sendMessage}
            </Button>

            <div className="flex gap-3 sm:gap-4">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/genesis-pati%C3%B1o-urquijo-b68115272/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/genesisdev22?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 sm:mt-20 lg:mt-24 pt-6 sm:pt-8 border-t border-border text-center px-4">
        <p className="text-xs sm:text-sm text-muted-foreground">
          © {new Date().getFullYear()} Genesis Patiño Urquijo. {t.contact.footer}
        </p>
      </footer>
    </section>
  )
}
