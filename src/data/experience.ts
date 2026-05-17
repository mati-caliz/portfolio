export interface Experience {
  company: string;
  role: string;
  role_es: string;
  period: string;
  period_es: string;
  location: string;
  location_es: string;
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
    role: "Full Stack Software Developer SSR",
    role_es: "Software Developer Fullstack SSR",
    period: "Aug 2023 — Present · 2 yrs 10 mos",
    period_es: "ago. 2023 — actualidad · 2 años 10 meses",
    location: "Buenos Aires Province, Argentina · Hybrid / Remote",
    location_es: "Provincia de Buenos Aires, Argentina · Híbrido / Remoto",
    type: "full-time",
    current: true,
    description:
      "Full stack software developer working on Despegar's search box, header, and footer. Built frontend and backend solutions with React, Angular, TypeScript, Java, PostgreSQL, and MongoDB, including work for Strategic Management and Web Development processes.",
    description_es:
      "Software developer fullstack trabajando en la caja de búsqueda, header y footer de Despegar. Desarrollo frontend y backend con React, Angular, TypeScript, Java, PostgreSQL y MongoDB, incluyendo trabajo para procesos de gestión estratégica y desarrollo web.",
    achievements: [
      "Implemented unit, E2E, and smoke tests from scratch for the full search box with Cypress and JUnit, covering both frontend and backend",
      "Delivered major refactors and performance improvements for loading and rendering, especially in the packages search box and header",
      "Built new capabilities such as LLM-powered semantic search in the search box and region-based searches",
      "Worked on backend logic with Java, Spring, and SQL",
      "Regularly supported team management by organizing requests and planning with sponsors",
    ],
    achievements_es: [
      "Implementé desde cero tests unitarios, E2E y smoke de toda la caja de búsqueda con Cypress y JUnit, tanto para frontend como backend",
      "Realicé refactors y mejoras sustanciales en tiempos de carga y renderización, principalmente en la caja de paquetes de la searchbox y en el header",
      "Implementé funcionalidades nuevas como búsquedas semánticas con IA y LLM en la searchbox, búsquedas por regiones y otras mejoras",
      "Trabajé en soluciones backend con Java, Spring y SQL",
      "Trabajé recurrentemente en la gestión del equipo, organizando pedidos y planificando con sponsors",
    ],
    stack: ["React", "Angular", "TypeScript", "Java", "Spring", "PostgreSQL", "MongoDB", "Cypress", "JUnit"],
    color: "#2563eb",
  },
  {
    company: "EY (Ernst & Young)",
    role: "IT Auditor & Cybersecurity Analyst",
    role_es: "Auditor IT & Analista en Ciberseguridad",
    period: "Jun 2020 — Jun 2022 · 2 yrs 1 mo",
    period_es: "jun. 2020 — jun. 2022 · 2 años 1 mes",
    location: "Buenos Aires Province, Argentina · Remote",
    location_es: "Provincia de Buenos Aires, Argentina · En remoto",
    type: "full-time",
    current: false,
    description:
      "IT auditor focused on systems and cybersecurity. Evaluated technology controls, cybersecurity practices, and compliance requirements for enterprise environments.",
    description_es:
      "Auditor IT orientado en sistemas y ciberseguridad. Evalué controles tecnológicos, prácticas de ciberseguridad y requerimientos de cumplimiento en entornos empresariales.",
    achievements: [
      "Worked with SOX, PCI Compliance, ISO/IEC 27001, and ISO/IEC 27002 standards",
      "Audited IT systems and cybersecurity controls for enterprise clients",
      "Evaluated access management, data integrity, and regulatory compliance",
      "Developed systematic thinking about risk, controls, and system architecture",
    ],
    achievements_es: [
      "Utilicé estándares como SOX, PCI Compliance, ISO/IEC 27001 e ISO/IEC 27002",
      "Audité sistemas de IT y controles de ciberseguridad para clientes empresariales",
      "Evalué gestión de accesos, integridad de datos y cumplimiento regulatorio",
      "Desarrollé pensamiento sistemático sobre riesgo, controles y arquitectura de sistemas",
    ],
    stack: ["IT Audit", "Cybersecurity", "SOX", "PCI Compliance", "ISO 27001", "ISO 27002"],
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
    name: "English C1",
    issuer: "Cambridge Assessment English",
    year: "C1",
  },
];
