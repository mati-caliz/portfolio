export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "full-time" | "contract";
  current: boolean;
  description: string;
  achievements: string[];
  stack: string[];
  color: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
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
    period: "2024 — Present",
    location: "Buenos Aires, Argentina",
    type: "full-time",
    current: true,
    description:
      "Owning critical front-facing components — the search box, header, and footer — used by millions of travelers daily across Latin America. Working across the full stack with React, Angular, Java, and Spring in a high-traffic, A/B-tested environment.",
    achievements: [
      "Own the search box component — the primary conversion driver for the entire platform",
      "Ship code serving millions of daily active users across LATAM markets",
      "Work across React, Angular, Java/Spring in a microservices architecture",
      "A/B test every major change with real traffic to validate impact on conversion",
      "Optimize bundle sizes and loading performance for 3G networks",
    ],
    stack: ["React", "Angular", "Java", "Spring", "TypeScript", "Cypress", "SQL"],
    color: "#2563eb",
  },
  {
    company: "EY (Ernst & Young)",
    role: "IT Auditor",
    period: "2023 — 2024",
    location: "Buenos Aires, Argentina",
    type: "full-time",
    current: false,
    description:
      "Audited IT systems and cybersecurity practices for major enterprise clients. Evaluated access controls, data integrity, and compliance with security standards. This experience shaped my security-first approach to software development.",
    achievements: [
      "Audited IT infrastructure and cybersecurity controls for enterprise clients",
      "Evaluated access management, data integrity, and regulatory compliance",
      "Identified security vulnerabilities and recommended remediation strategies",
      "Developed systematic thinking about risk, controls, and system architecture",
    ],
    stack: ["IT Audit", "Cybersecurity", "Risk Assessment", "Compliance", "COBIT"],
    color: "#f59e0b",
  },
];

export const education: Education[] = [
  {
    institution: "UADE",
    degree: "Ingeniero en Informatica",
    period: "2020 — 2024",
    description:
      "Full engineering degree covering software architecture, algorithms, databases, networking, and systems design. Graduated with a strong foundation in both theory and practice.",
  },
];

export const certifications: Certification[] = [
  {
    name: "Cambridge B2 First (FCE)",
    issuer: "Cambridge Assessment English",
    year: "2023",
  },
];
