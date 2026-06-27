# NachoSAG — Cyberpunk Portfolio

Portfolio personal de **Ignacio Borlenghi** ([NachoSAG](https://github.com/nachosag)).  
Backend engineer, arquitectura de sistemas, algoritmos — servido con estética cyberpunk y terminal.

> 🌐 **Live:** [nachosag.github.io/portfolio](https://nachosag.github.io/portfolio)

---

## Quick start

```bash
git clone https://github.com/nachosag/portfolio.git
cd portfolio
pnpm install
pnpm exec tailwindcss -i styles.css -o dist.css
```

Después abrí `index.html` en el navegador (doble click o `open index.html`).

---

## What's inside

| Archivo | Qué hace |
|---|---|
| `index.html` | Página principal — 7 secciones: hero, about, proyectos, stack, workflow, contacto |
| `main.js` | Navegación mobile, scroll spy con active section, typewriter, filtro de proyectos |
| `styles.css` | Fuente Tailwind CSS 4 con tema cyberpunk custom |
| `dist.css` | CSS compilado por Tailwind (no tocar manualmente) |
| `assets/` | `og-image.png` (Open Graph) + `favicon.svg` |
| `design/` | Mockups de Figma del diseño original |
| `source-of-truth.md` | Contenido del CV — experiencia, skills, educación |
| `package.json` | Dependencias: `tailwindcss` + `@tailwindcss/cli` |

---

## Stack

| Capa | Tecnología |
|---|---|
| CSS | Tailwind CSS 4 con tema custom (Orbitron, Share Tech Mono, Inter) |
| JS | Vanilla — sin frameworks, sin runtime |
| Paquetería | pnpm |
| Deploy | GitHub Pages (desde `main`) |
| Build | Tailwind CLI (`pnpm exec tailwindcss`) |

---

## Development

### Modificar estilos

El tema vive en `styles.css` bajo `@theme { ... }`. Colores, fuentes, espaciado — todo ahí.

```bash
# después de cambiar styles.css, recompilá
pnpm exec tailwindcss -i styles.css -o dist.css
```

### Modificar contenido

- **CV / experiencia** → editá `source-of-truth.md`
- **Proyectos destacados, secciones** → editá `index.html`
- **Animaciones, scroll, filtros** → `main.js`

---

## Design system

Tema cyberpunk con 3 colores de acento:

- `accent-cyan` (`#00f5ff`) — primary action, links, glows
- `accent-magenta` (`#ff003c`) — warnings, tags, énfasis fuerte
- `accent-yellow` (`#ffe600`) — secondary highlights

Tipografía: **Orbitron** (headlines), **Share Tech Mono** (code), **Inter** (body).

Efectos: scanlines overlay, glows, terminal flicker, clipped corners, reveal-on-scroll, hover lift con sombras de acento.

---

## Deploy

El sitio se sirve desde GitHub Pages en la branch `main`.  
Cualquier push a `main` se refleja automáticamente en `nachosag.github.io/portfolio`.

No hay build step en el deploy — `dist.css` ya compilado se commitea.

---

## Project structure

```
portfolio/
├── assets/
│   ├── favicon.svg
│   └── og-image.png
├── design/
│   └── ...           # Mockups Figma
├── index.html        # Página principal
├── main.js           # JS vanilla
├── styles.css        # Fuente Tailwind + tema
├── dist.css          # CSS compilado
├── source-of-truth.md # Datos del CV
├── package.json
└── pnpm-lock.yaml
```

---

## License

ISC — ver [`package.json`](./package.json).
