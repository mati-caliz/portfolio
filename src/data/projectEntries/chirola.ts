import type { Project } from "../projectTypes";

export const chirola: Project = {
  slug: "chirola",
  title: "Chirola",
  tagline: "Electronic invoicing against Argentina's tax authority, as an API",
  tagline_es: "Facturación electrónica contra ARCA, como API",
  description:
    "A billing backend that talks to ARCA (formerly AFIP) so nobody else has to: A/B/C invoices, credit and debit notes, each one returning its CAE. It is multi-tenant by design — every taxpayer keeps its own CUIT and digital certificate in an encrypted vault, and every API consumer is scoped to the taxpayers it is allowed to invoice for. It is the fiscal backend behind Respondi's billing agent.",
  description_es:
    "Un backend de facturación que habla con ARCA (ex AFIP) para que nadie más tenga que hacerlo: comprobantes A/B/C, notas de crédito y débito, cada uno devolviendo su CAE. Es multi-tenant desde el schema — cada contribuyente guarda su CUIT y su certificado digital en un vault cifrado, y cada consumidor de la API sólo puede facturar por los contribuyentes que tiene habilitados. Es el backend fiscal del agente de facturación de Respondi.",
  role: "Creator & Developer",
  role_es: "Creador y Desarrollador",
  year: "2026",
  status: "production",
  statusLabel: "In production",
  statusLabel_es: "En producción",
  stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Zod", "SOAP", "Docker"],
  highlights: [
    "SOAP integration with ARCA's WSAA and WSFEv1, including ticket lifecycle and CAE retrieval",
    "Private keys never leave the backend: certificates live encrypted at rest in a dedicated vault",
    "Multi-tenant model where an API consumer is explicitly bound to the taxpayers it may invoice for",
    "Consumed server-to-server by Respondi, so a business can invoice straight from a WhatsApp conversation",
  ],
  highlights_es: [
    "Integración SOAP con WSAA y WSFEv1 de ARCA, incluyendo el ciclo de vida del ticket y la obtención del CAE",
    "Las claves privadas nunca salen del backend: los certificados viven cifrados at-rest en un vault dedicado",
    "Modelo multi-tenant donde cada consumidor de la API queda atado explícitamente a los contribuyentes que puede facturar",
    "Consumido server-to-server por Respondi, así un negocio factura desde una conversación de WhatsApp",
  ],
  challenge:
    "Invoicing in Argentina means SOAP web services, X.509 certificates, short-lived auth tickets, and a validation model that rejects a whole invoice over a rounding difference. Any product that wants to invoice ends up reimplementing all of it — and, worse, handling somebody else's private key.",
  challenge_es:
    "Facturar en Argentina significa servicios SOAP, certificados X.509, tickets de autenticación de vida corta y un modelo de validación que rechaza un comprobante entero por una diferencia de redondeo. Cualquier producto que quiera facturar termina reimplementando todo eso — y, peor, manejando la clave privada de otro.",
  approach:
    "Built it as a NestJS service with Prisma and Postgres, in a pnpm monorepo with Zod contracts shared across packages. The certificate vault is encrypted with a key that lives only in the deployment environment, and the schema models issuers, API consumers, and the grants between them as first-class entities instead of configuration.",
  approach_es:
    "Lo construí como un servicio NestJS con Prisma y Postgres, en un monorepo pnpm con contratos Zod compartidos. El vault de certificados se cifra con una clave que sólo existe en el entorno de deploy, y el schema modela emisores, consumidores de API y los permisos entre ellos como entidades de primera clase en vez de configuración.",
  outcome:
    "Running in production with push-to-deploy and migrations applied on every release, reachable only from inside the private network — its single consumer today is Respondi's billing agent. A mobile app for the taxpayer side is the next step.",
  outcome_es:
    "Corriendo en producción con push-to-deploy y migraciones aplicadas en cada release, alcanzable sólo desde la red privada — hoy su único consumidor es el agente de facturación de Respondi. La app mobile del lado del contribuyente es el próximo paso.",
  links: [],
  featured: false,
  category: "venture",
  color: "#0ea5e9",
};
