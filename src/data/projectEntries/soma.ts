import type { Project } from "../projectTypes";

export const soma: Project = {
  slug: "soma",
  title: "Soma Intelligence",
  tagline: "Computer vision that turns existing security cameras into operational metrics",
  tagline_es: "Visión por computadora que convierte las cámaras existentes en métricas operativas",
  description:
    "A platform that plugs into a venue's existing IP cameras and turns the video into live occupancy metrics and security alerts. A mini-PC on site runs the vision models and emits only JSON events — the raw video never leaves the venue, and there is no facial recognition, just anonymous silhouettes. Privacy is the feature, not a disclaimer.",
  description_es:
    "Una plataforma que se conecta a las cámaras IP que el local ya tiene y convierte el video en métricas de aforo en vivo y alertas de seguridad. Una mini-PC en el local corre los modelos de visión y emite solo eventos JSON — el video crudo nunca sale del local, y no hay reconocimiento facial, solo siluetas anónimas. La privacidad es la feature, no un descargo.",
  role: "Founder & Developer",
  role_es: "Fundador y Desarrollador",
  year: "2026",
  status: "in-progress",
  statusLabel: "Deployed, pre-MVP",
  statusLabel_es: "Deployado, pre-MVP",
  stack: [
    "Java",
    "Spring Boot",
    "React",
    "TypeScript",
    "Python",
    "YOLO",
    "MQTT",
    "TimescaleDB",
    "MinIO",
    "Docker",
  ],
  highlights: [
    "Edge/cloud split: YOLO + tracking on site, only JSON events cross the network over MQTT",
    "TimescaleDB for time series: live occupancy, entries per hour, dwell time",
    "Alert rules engine: after-hours intrusion, capacity limits, camera down",
    "No facial recognition by design — anonymous silhouettes only",
  ],
  highlights_es: [
    "Separación edge/nube: YOLO + tracking en el local, solo eventos JSON cruzan la red por MQTT",
    "TimescaleDB para las series temporales: aforo en vivo, entradas por hora, permanencia",
    "Motor de reglas de alerta: intrusión fuera de horario, aforo máximo, cámara caída",
    "Sin reconocimiento facial por diseño — solo siluetas anónimas",
  ],
  challenge:
    "Venues already have cameras, but the footage is only ever watched after something goes wrong. Turning it into live operational data means running vision models cheaply on site, and doing it without shipping customers' raw video to a cloud they don't control.",
  challenge_es:
    "Los locales ya tienen cámaras, pero el video solo se mira después de que algo salió mal. Convertirlo en datos operativos en vivo implica correr modelos de visión de forma barata en el local, y hacerlo sin mandar el video crudo de los clientes a una nube que no controlan.",
  approach:
    "Four components: a Python edge service doing detection and tracking, a Spring Boot backend that aggregates events into metrics and evaluates alert rules, a React dashboard, and an MQTT broker as the edge-to-cloud contract. The whole stack — Timescale, EMQX, MinIO, API and web — runs as containers with a fail-fast production profile.",
  approach_es:
    "Cuatro componentes: un servicio edge en Python que detecta y trackea, un backend Spring Boot que agrega los eventos en métricas y evalúa reglas de alerta, un dashboard React, y un broker MQTT como contrato entre el edge y la nube. Todo el stack — Timescale, EMQX, MinIO, API y web — corre en containers con un perfil productivo fail-fast.",
  outcome:
    "The cloud side is deployed end to end behind its own domain, with signup, venue setup, the event pipeline and the dashboard working. The initial vertical is hospitality; the edge service is the piece still being hardened.",
  outcome_es:
    "El lado nube está deployado end to end con dominio propio: registro, alta de local, pipeline de eventos y dashboard funcionando. La vertical inicial es gastronomía; el servicio edge es la pieza que falta endurecer.",
  links: [{ label: "Visit Soma", href: "https://aforo.matiascaliz.com.ar" }],
  hidePreview: true,
  featured: false,
  category: "venture",
  color: "#3072d0",
};
