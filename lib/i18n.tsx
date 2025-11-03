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
    jobTitle: string
    company: string
    location: string
    period: string
    description: string[]
    technologies: string[]
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
        "Soy una Desarrolladora Fullstack con enfoque en aplicaciones web y móviles, con un año de experiencia en el desarrollo de soluciones tecnológicas utilizando React, React Native, Node.js y NestJS.",
      paragraph2:
        "Me destaco por mi capacidad de trabajo en equipo, pensamiento crítico y adaptabilidad a entornos ágiles. Apasionada por el aprendizaje continuo y la creación de productos que generan valor real a los usuarios.",
      paragraph3:
        "Actualmente, trabajo desarrollando y manteniendo aplicaciones que impactan positivamente en la vida de las personas, siempre buscando implementar las mejores prácticas y tecnologías más actuales del mercado.",
    },
    experience: {
      title: "Experiencia",
      heading: "Trayectoria profesional",
      education: "Educación",
      educationHeading: "Formación académica",
      jobTitle: "Desarrolladora Fullstack",
      company: "FALP",
      location: "Santiago, Chile",
      period: "Oct 2024 - Oct 2025",
      description: [
        "Desarrollo y mantenimiento de aplicaciones web y móviles utilizando React, React Native, Node.js y NestJS",
        "Participación en equipos multidisciplinarios para implementar nuevas funcionalidades, correcciones de bugs y mejoras de rendimiento",
        "Consumo e integración de APIs REST, garantizando una comunicación eficiente entre el frontend y el backend",
        "Colaboración activa en procesos de planificación, pruebas y despliegue continuo (CI/CD) en entornos productivos",
      ],
      technologies: ["React", "React Native", "Flutter", "Node.js", "NestJS", "REST APIs", "CI/CD"],
      degree: "Tecnólogo en Análisis y Desarrollo de Software",
      institution: "SENA",
      educationLocation: "Cartagena, Colombia",
      educationPeriod: "Ago 2022 - Oct 2025",
    },
    skills: {
      title: "Habilidades",
      heading: "Competencias técnicas y profesionales",
      technical: "Habilidades Técnicas",
      soft: "Habilidades Blandas",
      languages: "Idiomas",
      technicalSkills: [
        { name: "React", level: "Avanzado" },
        { name: "React Native", level: "Avanzado" },
        { name: "Flutter", level: "Intermedio" },
        { name: "Node.js", level: "Intermedio" },
        { name: "NestJS", level: "Intermedio" },
        { name: "TypeScript", level: "Intermedio" },
        { name: "Dart", level: "Intermedio" },
        { name: "REST APIs", level: "Avanzado" },
        { name: "Git", level: "Intermedio" },
        { name: "CI/CD", level: "Básico" },
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
        "I am a Fullstack Developer focused on web and mobile applications, with one year of experience developing technological solutions using React, React Native, Node.js, and NestJS.",
      paragraph2:
        "I stand out for my teamwork skills, critical thinking, and adaptability to agile environments. Passionate about continuous learning and creating products that generate real value for users.",
      paragraph3:
        "Currently, I work developing and maintaining applications that positively impact people's lives, always seeking to implement best practices and the most current market technologies.",
    },
    experience: {
      title: "Experience",
      heading: "Professional journey",
      education: "Education",
      educationHeading: "Academic background",
      jobTitle: "Fullstack Developer",
      company: "FALP",
      location: "Santiago, Chile",
      period: "Oct 2024 - Oct 2025",
      description: [
        "Development and maintenance of web and mobile applications using React, React Native, Node.js, and NestJS",
        "Participation in multidisciplinary teams to implement new features, bug fixes, and performance improvements",
        "Consumption and integration of REST APIs, ensuring efficient communication between frontend and backend",
        "Active collaboration in planning, testing, and continuous deployment (CI/CD) processes in production environments",
      ],
      technologies: ["React", "React Native", "Flutter", "Node.js", "NestJS", "REST APIs", "CI/CD"],
      degree: "Technologist in Analysis and Development of Software",
      institution: "SENA",
      educationLocation: "Cartagena, Colombia",
      educationPeriod: "Ago 2022 - Oct 2025",
    },
    skills: {
      title: "Skills",
      heading: "Technical and professional competencies",
      technical: "Technical Skills",
      soft: "Soft Skills",
      languages: "Languages",
      technicalSkills: [
        { name: "React", level: "Advanced" },
        { name: "React Native", level: "Advanced" },
        { name: "Flutter", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
        { name: "NestJS", level: "Intermediate" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Dart", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Git", level: "Intermediate" },
        { name: "CI/CD", level: "Basic" },
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
