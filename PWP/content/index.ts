export type Language = "en" | "es";

export const PDF_URL = "#";
export const GITHUB_URL = "#";
export const LINKEDIN_URL = "#";
export const WORK_PERMIT_URL = "#";

type Content = {
  hero: {
    name: string;
    title: string;
    subtitle: string;
    highlights: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    locationLabel: string;
    emailLabel: string;
    linkedinLabel: string;
    permitLabel: string;
    badge: string;
    summaryButton: string;
  };
  summary: {
    title: string;
    body: string;
    bullets: string[];
  };
  snapshot: { label: string; value: string }[];
  coreSkills: {
    title: string;
    note: string;
    skills: string[];
  };
  seaService: {
    entries: {
      role: string;
      vessel: string;
      detail: string;
      bullets: string[];
    }[];
    title: string;
  };
  currentWork: {
    title: string;
    role: string;
    dates: string;
    detail: string;
    note: string;
  };
  jetRescue: {
    title: string;
    subtitle: string;
    bullets: string[];
    chips: string[];
  };
  certifications: {
    title: string;
    items: string[];
  };
  hobbies: {
    title: string;
    items: { title: string; detail?: string; link?: string }[];
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    direct: string;
    download: string;
  };
  footer: string;
};

export const content: Record<Language, Content> = {
  en: {
    hero: {
      name: "MIGUEL SORIANO",
      title: "Offshore Medic / HSE (Oil & Gas)",
      subtitle:
        "Shipboard medical cover + HSE support for offshore operations. Safety-first, readiness-driven.",
      highlights: [
        "130+ offshore days",
        "Jet Rescue (signature EMS role)",
        "LSA/FFE + PTW discipline",
      ],
      ctaPrimary: "Download CV",
      ctaSecondary: "Contact",
      locationLabel: "Mississauga, Ontario, Canada",
      emailLabel: "mike.sor.444@gmail.com",
      linkedinLabel: "LinkedIn",
      permitLabel: "Work Permit (Drive)",
      badge: "Open to rotations & relocation",
      summaryButton: "Professional Summary",
    },
    summary: {
      title: "Professional Summary",
      body: "Offshore medic with 130+ days aboard vessels supporting crew medical needs and operational readiness, including periodic LSA/FFE checks. Background in industrial safety supervision for high-risk work and oil & gas field operations, plus Jet Rescue as signature EMS experience.",
      bullets: [
        "Shipboard medical cover + emergency response coordination.",
        "HSE support: PTW, hot work, confined space, lifting operations, energy isolation (LOTO), inspections/audits.",
        "Protocol-driven performance in aeromedical critical transports (Jet Rescue).",
      ],
    },
    snapshot: [
      { value: "130+", label: "Offshore Days" },
      { value: "Oil & Gas", label: "Operations" },
      { value: "LSA & FFE", label: "Inspections" },
    ],
    coreSkills: {
      title: "Core Skills",
      note: "Skills limited to what’s supported by the CV.",
      skills: [
        "Shipboard medical cover",
        "Emergency response",
        "LSA/FFE inspections",
        "PTW support",
        "Hot work",
        "Confined space",
        "LOTO / energy isolation",
        "Lifting operations",
        "Safety inspections & audits",
        "Firefighting / brigades",
        "Rescue (water / vertical)",
        "SCBA",
        "Radio communications",
      ],
    },
    seaService: {
      title: "Sea Service",
      entries: [
        {
          role: "Shipboard Medic",
          vessel: "B/M Camila",
          detail: "Offshore rotation (80 days)",
          bullets: [
            "Onboard medical cover and readiness support.",
            "Periodic LSA/FFE inspections and prevention protocols.",
            "Emergency response coordination during operations.",
          ],
        },
        {
          role: "Shipboard Medic",
          vessel: "B/M Azteca II",
          detail: "Offshore rotation (50 days)",
          bullets: [
            "Onboard medical support for crew and operations.",
            "LSA/FFE checks + readiness routines.",
            "Safety-first daily discipline and reporting.",
          ],
        },
      ],
    },
    currentWork: {
      title: "Current Work",
      role: "Bricklayer",
      dates: "May 2022 – Present",
      detail: "Masonry, concrete and landscaping (bricklayer role)",
      note: "Included briefly to clarify continuous employment.",
    },
    jetRescue: {
      title: "Jet Rescue",
      subtitle: "Aeromedical Specialist | Critical Care Transports",
      bullets: [
        "High-acuity decision-making under pressure.",
        "Team coordination and strict protocol compliance.",
        "Operational discipline transferable to offshore environments.",
      ],
      chips: ["EMS", "Critical Care", "Protocols", "Team Ops"],
    },
    certifications: {
      title: "Certifications",
      items: [
        "Industrial Safety (Supervisor)",
        "Firefighting / Brigades",
        "Rescue (Water / Vertical)",
        "SCBA",
        "Radio Comms",
        "First Response",
      ],
    },
    hobbies: {
      title: "Hobbies & Side Projects",
      items: [
        {
          title: "Frontend / SPA development (vibe coding)",
          link: GITHUB_URL,
        },
        {
          title: "Sailing navigation",
          detail: "Regular practice on a 28 ft sloop",
        },
      ],
    },
    contact: {
      title: "Contact",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send (placeholder)",
      },
      direct: "Direct",
      download: "Download CV",
    },
    footer: "© {year} Miguel Soriano. Built for offshore & oil and gas roles.",
  },
  es: {
    hero: {
      name: "MIGUEL SORIANO",
      title: "Médico Offshore / HSE (Oil & Gas)",
      subtitle:
        "Cobertura médica a bordo + apoyo HSE para operaciones offshore. Seguridad y preparación ante todo.",
      highlights: [
        "130+ días offshore",
        "Jet Rescue (rol EMS distintivo)",
        "Disciplina LSA/FFE + PTW",
      ],
      ctaPrimary: "Descargar CV",
      ctaSecondary: "Contacto",
      locationLabel: "Mississauga, Ontario, Canada",
      emailLabel: "mike.sor.444@gmail.com",
      linkedinLabel: "LinkedIn",
      permitLabel: "Permiso de trabajo (conducción)",
      badge: "Disponible para rotaciones y reubicación",
      summaryButton: "Resumen profesional",
    },
    summary: {
      title: "Resumen profesional",
      body: "Médico offshore con 130+ días a bordo apoyando necesidades médicas de tripulaciones y la preparación operativa, incluyendo revisiones periódicas de LSA/FFE. Antecedente en supervisión de seguridad industrial para trabajo de alto riesgo y operaciones de campo en oil & gas, además de Jet Rescue como experiencia EMS distintiva.",
      bullets: [
        "Cobertura médica a bordo + coordinación de respuesta a emergencias.",
        "Apoyo HSE: PTW, trabajos en caliente, espacio confinado, izajes, aislamiento de energía (LOTO), inspecciones/auditorías.",
        "Desempeño guiado por protocolos en traslados aeromédicos críticos (Jet Rescue).",
      ],
    },
    snapshot: [
      { value: "130+", label: "Días offshore" },
      { value: "Oil & Gas", label: "Operaciones" },
      { value: "LSA & FFE", label: "Inspecciones" },
    ],
    coreSkills: {
      title: "Competencias clave",
      note: "Habilidades limitadas a lo que respalda el CV.",
      skills: [
        "Cobertura médica a bordo",
        "Respuesta a emergencias",
        "Inspecciones LSA/FFE",
        "Apoyo PTW",
        "Trabajos en caliente",
        "Espacio confinado",
        "LOTO / aislamiento de energía",
        "Operaciones de izaje",
        "Inspecciones y auditorías de seguridad",
        "Combate de incendios / brigadas",
        "Rescate (acuático / vertical)",
        "SCBA",
        "Comunicaciones por radio",
      ],
    },
    seaService: {
      title: "Servicio a bordo",
      entries: [
        {
          role: "Médico de a bordo",
          vessel: "B/M Camila",
          detail: "Rotación offshore (80 días)",
          bullets: [
            "Cobertura médica a bordo y soporte de preparación.",
            "Inspecciones periódicas LSA/FFE y protocolos de prevención.",
            "Coordinación de respuesta a emergencias durante operaciones.",
          ],
        },
        {
          role: "Médico de a bordo",
          vessel: "B/M Azteca II",
          detail: "Rotación offshore (50 días)",
          bullets: [
            "Soporte médico a tripulación y operaciones.",
            "Revisiones LSA/FFE + rutinas de preparación.",
            "Disciplina diaria orientada a seguridad y reportes.",
          ],
        },
      ],
    },
    currentWork: {
      title: "Trabajo actual",
      role: "Albañil (Bricklayer)",
      dates: "Mayo 2022 – Presente",
      detail: "Mampostería, concreto y paisajismo (rol de bricklayer)",
      note: "Incluido brevemente para aclarar continuidad laboral.",
    },
    jetRescue: {
      title: "Jet Rescue",
      subtitle: "Especialista Aeromédico | Traslados de cuidados críticos",
      bullets: [
        "Toma de decisiones en alta agudeza bajo presión.",
        "Coordinación en equipo y estricto apego a protocolos.",
        "Disciplina operativa transferible a entornos offshore.",
      ],
      chips: ["EMS", "Cuidados críticos", "Protocolos", "Operaciones en equipo"],
    },
    certifications: {
      title: "Certificaciones",
      items: [
        "Seguridad industrial (Supervisor)",
        "Combate de incendios / Brigadas",
        "Rescate (acuático / vertical)",
        "SCBA",
        "Comunicaciones por radio",
        "First Response",
      ],
    },
    hobbies: {
      title: "Pasatiempos y proyectos",
      items: [
        {
          title: "Desarrollo frontend / SPA (vibe coding)",
          link: GITHUB_URL,
        },
        {
          title: "Navegación a vela",
          detail: "Práctica regular en un sloop de 28 ft",
        },
      ],
    },
    contact: {
      title: "Contacto",
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        submit: "Enviar (placeholder)",
      },
      direct: "Directo",
      download: "Descargar CV",
    },
    footer: "© {year} Miguel Soriano. Creado para roles offshore y oil & gas.",
  },
};
