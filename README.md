# Portfolio

Sitio personal de Matías Caliz, publicado en [matiascaliz.com.ar](https://matiascaliz.com.ar).

Astro 5 con Tailwind 4 e islas de Preact para lo poco que es interactivo: el fondo de puntos
que reacciona al mouse, el efecto de tipeo y la terminal con comandos (`about`, `skills`,
`projects`, `contact`). El resto es HTML estático, sin JavaScript.

## Cómo está organizado

```
src/data/        los proyectos y la línea de tiempo de la carrera: editar acá, no en las páginas
src/pages/       index, projects (con filtro por categoría), projects/[slug], experience, about
src/layouts/     el layout base: header, footer, transiciones y scripts
src/components/  ProjectCard.astro y Terminal.tsx
src/styles/      tokens de diseño, modo oscuro y animaciones
```

## Desarrollo

Necesita Node 22 o superior (`nvm use` toma el `.nvmrc`).

```bash
pnpm install
pnpm run dev
```

## Decisiones que no se ven en el código

- **Cero JavaScript por defecto.** Cada componente interactivo es una isla de Preact que se
  hidrata sola; si algo se puede hacer con CSS, se hace con CSS.
- **Las transiciones de vista** (`ClientRouter` de Astro) más el prefetch al entrar en viewport
  son lo que hace que navegar se sienta instantáneo sin ser una SPA.
- **`prefers-reduced-motion` se respeta en todas las animaciones**, incluida la del fondo.
- El modo oscuro sale de la preferencia del sistema y se puede forzar; la elección queda en
  `localStorage`.

## Producción

Se despliega en el VPS con Docker Compose (contenedor `portfolio`), detrás del proxy
compartido. El build genera HTML, CSS y JS estáticos: no hay servidor de Node en producción.
