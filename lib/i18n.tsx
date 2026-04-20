"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en"

interface Translations {
  nav: {
    home: string
    about: string
    experience: string
    skills: string
    contact: string
  }
  hero: {
    available: string
    name: string
    role: string
    description: string
    contactBtn: string
    experienceBtn: string
  }
  about: {
    title: string
    heading: string
    paragraph1: string
    paragraph2: string
    paragraph3: string
  }
  experience: {
    title: string
    heading: string
    education: string
    educationHeading: string
    jobs: Array<{
      title: string
      company: string
      location: string
      period: string
      description: string[]
      technologies: string[]
    }>
    degree: string
    institution: string
    educationLocation: string
    educationPeriod: string
  }
  skills: {
    title: string
    heading: string
    technical: string
    soft: string
    languages: string
    technicalSkills: Array<{ name: string; level: string }>
    softSkills: Array<{ title: string; description: string }>
    languagesList: Array<{ name: string; level: string }>
  }
  contact: {
    title: string
    heading: string
    description: string
    email: string
    phone: string
    location: string
    sendMessage: string
    footer: string
  }
}

const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      available: "Disponible para proyectos",
      name: "Genesis Patiño Urquijo",
      role: "Desarrolladora Fullstack",
      description: "Construyo experiencias digitales accesibles y de alto rendimiento para la web y móviles.",
      contactBtn: "Contáctame",
      experienceBtn: "Ver experiencia",
    },
    about: {
      title: "Sobre mí",
      heading: "Desarrolladora apasionada por crear soluciones que generan valor real",
      paragraph1:
        "Desarrolladora de software con más de 3 años de experiencia en desarrollo frontend y backend utilizando JavaScript y tecnologías modernas como React, Node.js y Flutter.",
      paragraph2:
        "Experiencia en despliegue y automatización en entornos AWS, contenedores Docker y CI/CD. Con conocimientos en Python para automatización y scripting.",
      paragraph3:
        "Enfocada en soluciones escalables y buenas prácticas de arquitectura, y en desarrollar productos que mejoren la vida de las personas.",
    },
    experience: {
      title: "Experiencia",
      heading: "Trayectoria profesional",
      education: "Educación",
      educationHeading: "Formación académica",
      jobs: [
        {
          title: "DevOps Engineer",
          company: "Quo",
          location: "Mexico",
          period: "Ene 2026 - Actualmente",
          description: [
            "Implementación y mantenimiento de pipelines CI/CD.",
            "Contenerización de aplicaciones usando Docker.",
            "Gestión de despliegues en entornos cloud.",
            "Automatización de procesos internos con scripts.",
            "Soporte en infraestructura basada en AWS.",
            "Monitoreo y optimización de ambientes productivos.",
          ],
          technologies: ["Docker", "AWS", "CI/CD", "Scripts", "Python"],
        },
        {
          title: "Software developer",
          company: "Acercarse",
          location: "Santiago, Chile",
          period: "Ene 2024 - Dic 2025",
          description: [
            "Desarrollo de módulos web con React y JavaScript.",
            "Desarrollo de aplicaciones móviles con Flutter.",
            "Integración y consumo de APIs REST con Node.js y NestJS.",
            "Implementación de lógica backend utilizando JavaScript.",
            "Optimización de rendimiento y solución de bugs en producción.",
            "Trabajo bajo metodología Scrum y revisiones de Clean Architecture.",
          ],
          technologies: ["React", "JavaScript", "Flutter", "Node.js", "NestJS", "Scrum", "SOLID"],
        },
      ],
      degree: "Tecnóloga en Análisis y Desarrollo de Software",
      institution: "SENA",
      educationLocation: "Cartagena, Colombia",
      educationPeriod: "Ago 2023 - Oct 2025",
    },
    skills: {
      title: "Habilidades",
      heading: "Competencias técnicas y profesionales",
      technical: "Habilidades Técnicas",
      soft: "Habilidades Blandas",
      languages: "Idiomas",
      technicalSkills: [
        { name: "React / React Native", level: "Avanzado" },
        { name: "Node.js / NestJS / Express", level: "Avanzado" },
        { name: "Flutter / Dart", level: "Intermedio" },
        { name: "TypeScript / JavaScript", level: "Avanzado" },
        { name: "PostgreSQL / TypeORM", level: "Intermedio" },
        { name: "Docker / AWS / CI/CD", level: "Intermedio" },
        { name: "TailwindCSS", level: "Avanzado" },
        { name: "Git / Scrum / SOLID", level: "Avanzado" },
      ],
      softSkills: [
        {
          title: "Trabajo en equipo",
          description: "Colaboración efectiva en equipos multidisciplinarios",
        },
        {
          title: "Pensamiento crítico",
          description: "Análisis y resolución de problemas complejos",
        },
        {
          title: "Gestión del tiempo",
          description: "Cumplimiento de entregas en metodologías ágiles",
        },
        {
          title: "Adaptabilidad",
          description: "Rápida curva de aprendizaje de nuevas tecnologías",
        },
      ],
      languagesList: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Básico" },
      ],
    },
    contact: {
      title: "Contacto",
      heading: "¿Tienes un proyecto en mente?",
      description:
        "Estoy disponible para nuevas oportunidades y colaboraciones. No dudes en contactarme para discutir cómo puedo ayudarte.",
      email: "Email",
      phone: "Teléfono",
      location: "Ubicación",
      sendMessage: "Enviar mensaje",
      footer: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      available: "Available for projects",
      name: "Genesis Patiño Urquijo",
      role: "Fullstack Developer",
      description: "I build accessible and high-performance digital experiences for web and mobile.",
      contactBtn: "Contact me",
      experienceBtn: "View experience",
    },
    about: {
      title: "About me",
      heading: "Developer passionate about creating solutions that generate real value",
      paragraph1:
        "Software developer with over 3 years of experience in frontend and backend development using JavaScript and modern technologies such as React, Node.js, and Flutter.",
      paragraph2:
        "Experience in deployment and automation in AWS environments, Docker containers, and CI/CD. Knowledgeable in Python for automation and scripting.",
      paragraph3:
        "Focused on scalable solutions and good architectural practices, and on developing products that positively impact people's lives.",
    },
    experience: {
      title: "Experience",
      heading: "Professional journey",
      education: "Education",
      educationHeading: "Academic background",
      jobs: [
        {
          title: "DevOps Engineer",
          company: "Quo",
          location: "Mexico",
          period: "Jan 2026 - Present",
          description: [
            "Implementation and maintenance of CI/CD pipelines.",
            "Containerization of applications using Docker.",
            "Deployment management in cloud environments.",
            "Automation of internal processes with scripts.",
            "Support in AWS-based infrastructure.",
            "Monitoring and optimization of production environments.",
          ],
          technologies: ["Docker", "AWS", "CI/CD", "Scripts", "Python"],
        },
        {
          title: "Software Developer",
          company: "Acercarse",
          location: "Santiago, Chile",
          period: "Jan 2024 - Dec 2025",
          description: [
            "Development of web modules with React and JavaScript.",
            "Development of mobile applications with Flutter.",
            "Integration and consumption of REST APIs with Node.js and NestJS.",
            "Implementation of backend logic using JavaScript.",
            "Performance optimization and bug fixing in production.",
            "Work under Scrum methodology and Clean Architecture reviews.",
          ],
          technologies: ["React", "JavaScript", "Flutter", "Node.js", "NestJS", "Scrum", "SOLID"],
        },
      ],
      degree: "Technologist in Analysis and Software Development",
      institution: "SENA",
      educationLocation: "Cartagena, Colombia",
      educationPeriod: "Aug 2023 - Oct 2025",
    },
    skills: {
      title: "Skills",
      heading: "Technical and professional competencies",
      technical: "Technical Skills",
      soft: "Soft Skills",
      languages: "Languages",
      technicalSkills: [
        { name: "React / React Native", level: "Advanced" },
        { name: "Node.js / NestJS / Express", level: "Advanced" },
        { name: "Flutter / Dart", level: "Intermediate" },
        { name: "TypeScript / JavaScript", level: "Advanced" },
        { name: "PostgreSQL / TypeORM", level: "Intermediate" },
        { name: "Docker / AWS / CI/CD", level: "Intermediate" },
        { name: "TailwindCSS", level: "Advanced" },
        { name: "Git / Scrum / SOLID", level: "Advanced" },
      ],
      softSkills: [
        {
          title: "Teamwork",
          description: "Effective collaboration in multidisciplinary teams",
        },
        {
          title: "Critical thinking",
          description: "Analysis and resolution of complex problems",
        },
        {
          title: "Time management",
          description: "Meeting deliveries in agile methodologies",
        },
        {
          title: "Adaptability",
          description: "Fast learning curve for new technologies",
        },
      ],
      languagesList: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Basic" },
      ],
    },
    contact: {
      title: "Contact",
      heading: "Have a project in mind?",
      description:
        "I am available for new opportunities and collaborations. Feel free to contact me to discuss how I can help you.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      sendMessage: "Send message",
      footer: "All rights reserved.",
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
