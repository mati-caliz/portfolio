export interface Experience {
  company: string;
  role: string;
  role_es: string;
  period: string;
  location: string;
  type: "full-time" | "contract";
  current: boolean;
  description: string;
  description_es: string;
  achievements: string[];
  achievements_es: string[];
  stack: string[];
  color: string;
}

export interface Education {
  institution: string;
  degree: string;
  degree_es: string;
  period: string;
  description: string;
  description_es: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const experiences: Experience[] = [
  {
    company: "Despegar",
    role: "Full Stack Software Developer",
    role_es: "Desarrollador Full Stack",
    period: "2024 — Present",
    location: "Buenos Aires, Argentina",
    type: "full-time",
    current: true,
    description:
      "Owning critical front-facing components — the search box, header, and footer — used by millions of travelers daily across Latin America. Working across the full stack with React, Angular, Java, and Spring in a high-traffic, A/B-tested environment.",
    description_es:
      "A cargo de componentes críticos de cara al usuario — el buscador, header y footer — usados por millones de viajeros diariamente en toda Latinoamérica. Trabajando full stack con React, Angular, Java y Spring en un entorno de alto tráfico con A/B testing.",
    achievements: [
      "Own the search box component — the primary conversion driver for the entire platform",
      "Ship code serving millions of daily active users across LATAM markets",
      "Work across React, Angular, Java/Spring in a microservices architecture",
      "A/B test every major change with real traffic to validate impact on conversion",
      "Optimize bundle sizes and loading performance for 3G networks",
    ],
    achievements_es: [
      "A cargo del buscador — el principal driver de conversión de toda la plataforma",
      "Código en producción sirviendo a millones de usuarios activos diarios en LATAM",
      "Trabajo con React, Angular, Java/Spring en una arquitectura de microservicios",
      "A/B testing de cada cambio importante con tráfico real para validar impacto en conversión",
      "Optimización de bundle sizes y performance de carga para redes 3G",
    ],
    stack: ["React", "Angular", "Java", "Spring", "TypeScript", "Cypress", "SQL"],
    color: "#2563eb",
  },
  {
    company: "EY (Ernst & Young)",
    role: "IT Auditor",
    role_es: "Auditor de IT",
    period: "2023 — 2024",
    location: "Buenos Aires, Argentina",
    type: "full-time",
    current: false,
    description:
      "Audited IT systems and cybersecurity practices for major enterprise clients. Evaluated access controls, data integrity, and compliance with security standards. This experience shaped my security-first approach to software development.",
    description_es:
      "Audité sistemas de IT y prácticas de ciberseguridad para grandes clientes empresariales. Evalué controles de acceso, integridad de datos y cumplimiento de estándares de seguridad. Esta experiencia formó mi enfoque security-first en el desarrollo de software.",
    achievements: [
      "Audited IT infrastructure and cybersecurity controls for enterprise clients",
      "Evaluated access management, data integrity, and regulatory compliance",
      "Identified security vulnerabilities and recommended remediation strategies",
      "Developed systematic thinking about risk, controls, and system architecture",
    ],
    achievements_es: [
      "Audité infraestructura de IT y controles de ciberseguridad para clientes empresariales",
      "Evalué gestión de accesos, integridad de datos y cumplimiento regulatorio",
      "Identifiqué vulnerabilidades de seguridad y recomendé estrategias de remediación",
      "Desarrollé pensamiento sistemático sobre riesgo, controles y arquitectura de sistemas",
    ],
    stack: ["IT Audit", "Cybersecurity", "Risk Assessment", "Compliance", "COBIT"],
    color: "#f59e0b",
  },
];

export const education: Education[] = [
  {
    institution: "UADE",
    degree: "Ingeniero en Informatica",
    degree_es: "Ingeniero en Informática",
    period: "2020 — 2024",
    description:
      "Full engineering degree covering software architecture, algorithms, databases, networking, and systems design. Graduated with a strong foundation in both theory and practice.",
    description_es:
      "Carrera de ingeniería completa cubriendo arquitectura de software, algoritmos, bases de datos, redes y diseño de sistemas. Graduado con una base sólida tanto en teoría como en práctica.",
  },
];

export const certifications: Certification[] = [
  {
    name: "Cambridge B2 First (FCE)",
    issuer: "Cambridge Assessment English",
    year: "2023",
  },
];
