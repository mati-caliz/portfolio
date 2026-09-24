import type { Project } from "../projectTypes";

export const dynamicSystems: Project = {
  slug: "dynamic-systems",
  title: "Dynamic Systems",
  tagline: "Modeling and simulation toolkit for dynamic systems",
  tagline_es: "Toolkit de modelado y simulación para sistemas dinámicos",
  description:
    "An academic project for analyzing and simulating linear and non-linear dynamic systems. Provides tools for equilibrium analysis, phase portraits, bifurcation diagrams, and numerical methods for differential equations — built for the Modeling and Simulation course at UADE.",
  description_es:
    "Un proyecto académico para analizar y simular sistemas dinámicos lineales y no lineales. Provee herramientas para análisis de equilibrio, retratos de fase, diagramas de bifurcación y métodos numéricos para ecuaciones diferenciales — construido para la materia de Modelado y Simulación en UADE.",
  role: "Developer",
  role_es: "Desarrollador",
  year: "2025",
  status: "completed",
  statusLabel: "Completed",
  statusLabel_es: "Completado",
  stack: ["Python", "NumPy", "SciPy", "SymPy", "Matplotlib"],
  highlights: [
    "Equilibrium point identification and classification",
    "Phase portrait and bifurcation diagram visualization",
    "Numerical methods: Euler, Runge-Kutta, root finding",
    "Full stability analysis via Jacobian computation",
  ],
  highlights_es: [
    "Identificación y clasificación de puntos de equilibrio",
    "Visualización de retratos de fase y diagramas de bifurcación",
    "Métodos numéricos: Euler, Runge-Kutta, búsqueda de raíces",
    "Análisis de estabilidad completo vía computación de Jacobianos",
  ],
  challenge:
    "Analyzing dynamic systems requires computing Jacobians, finding equilibria, classifying stability, and visualizing complex behaviors like bifurcations and phase portraits — a process that's tedious to do manually.",
  challenge_es:
    "Analizar sistemas dinámicos requiere computar Jacobianos, encontrar equilibrios, clasificar estabilidad y visualizar comportamientos complejos como bifurcaciones y retratos de fase — un proceso tedioso de hacer manualmente.",
  approach:
    "Built a modular Python toolkit using SymPy for symbolic math, NumPy/SciPy for numerical computation, and Matplotlib for visualization. The core DynamicSystem class provides a run_full_analysis() method that automates the complete workflow.",
  approach_es:
    "Construí un toolkit modular en Python usando SymPy para matemática simbólica, NumPy/SciPy para computación numérica y Matplotlib para visualización. La clase core DynamicSystem provee un método run_full_analysis() que automatiza el flujo completo.",
  outcome:
    "Complete analysis toolkit used for coursework at UADE, automating equilibrium analysis, stability classification, and visualization of dynamic system behaviors.",
  outcome_es:
    "Toolkit de análisis completo usado para trabajos prácticos en UADE, automatizando análisis de equilibrio, clasificación de estabilidad y visualización de comportamientos de sistemas dinámicos.",
  links: [],
  featured: false,
  category: "open-source",
  color: "#8b5cf6",
};
