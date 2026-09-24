import type { Project } from "../projectTypes";

export const tarjetazo: Project = {
  slug: "tarjetazo",
  title: "Tarjetazo",
  tagline: "A bot that reads my credit card statement and sends me the breakdown",
  tagline_es: "Un bot que lee el resumen de mi tarjeta y me manda el desglose",
  description:
    "A small, self-contained automation that watches my inbox for the monthly BNA VISA statement, decrypts the password-protected PDF, extracts and categorizes every transaction, and sends a Telegram summary compared against the previous month. Built because reading a bank PDF every month to find out where the money went is exactly the kind of thing a computer should do.",
  description_es:
    "Una automatización chica y autocontenida que vigila mi casilla esperando el resumen mensual de la VISA del BNA, desencripta el PDF protegido con contraseña, extrae y categoriza cada movimiento, y manda un resumen por Telegram comparado contra el mes anterior. Lo hice porque leer un PDF del banco todos los meses para saber a dónde se fue la plata es exactamente lo que debería hacer una computadora.",
  role: "Creator",
  role_es: "Creador",
  year: "2026",
  status: "production",
  statusLabel: "Running on cron",
  statusLabel_es: "Corriendo por cron",
  stack: ["Python", "IMAP", "pypdf", "Claude API", "Telegram Bot API", "cron"],
  highlights: [
    "Idempotent by design: the email is only marked as read once the whole pipeline succeeds",
    "Keyword rules first, Claude only for merchants the rules don't recognize — and the answer is cached",
    "Validates the computed total against the statement balance and flags any mismatch",
    "Dead man's switch: alerts me if too long goes by without a new statement, in case the bot broke",
  ],
  highlights_es: [
    "Idempotente por diseño: el mail se marca como leído solo cuando todo el pipeline terminó bien",
    "Primero reglas por palabras clave, Claude solo para los comercios que las reglas no reconocen — y la respuesta se cachea",
    "Valida que el total calculado cuadre con el saldo del resumen y avisa si no",
    "Dead man's switch: me avisa si pasa demasiado tiempo sin un resumen nuevo, por si el bot se rompió",
  ],
  challenge:
    "The statement arrives as an encrypted PDF with no consistent structure, merchant names are cryptic strings, and the job runs unattended — so a silent failure means finding out months later that nothing was tracked.",
  challenge_es:
    "El resumen llega como un PDF encriptado sin estructura consistente, los nombres de los comercios son cadenas crípticas, y el job corre desatendido — así que una falla silenciosa significa enterarte meses después de que no se registró nada.",
  approach:
    "One module per step — email, PDF parsing, categorization, formatting, history, delivery — orchestrated by a main script that only commits state when every step passed. Categorization is rules-first with an LLM fallback so the API cost stays near zero, and known merchants persist to a local cache.",
  approach_es:
    "Un módulo por paso — mail, parseo del PDF, categorización, formato, histórico, envío — orquestados por un script principal que solo persiste el estado cuando todos los pasos salieron bien. La categorización es primero por reglas con fallback a LLM para que el costo de API sea casi cero, y los comercios conocidos quedan en un caché local.",
  outcome:
    "Running unattended on a cron every six hours. Every month I get a categorized breakdown with subtotals and a month-over-month comparison, without opening a single PDF.",
  outcome_es:
    "Corriendo desatendido por cron cada seis horas. Todos los meses recibo el desglose categorizado con subtotales y comparación contra el mes anterior, sin abrir un solo PDF.",
  links: [],
  featured: false,
  category: "open-source",
  color: "#e11d48",
};
