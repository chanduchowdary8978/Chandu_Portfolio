# Chandu Portfolio — New (v2)

Cinematic video hero + full portfolio. Built on Next.js App Router.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Replacing the Video

Drop your personal `intro.mp4` into `/public/intro.mp4` — it replaces the placeholder.

---

## Deploying to GitHub Pages

1. Set the `NEXT_PUBLIC_BASE_PATH` env variable to your repo name:

```bash
# .env.local (for local testing with basePath)
NEXT_PUBLIC_BASE_PATH=/your-repo-name
```

2. Build and export:

```bash
npm run build
```

3. The `.github/workflows/deploy.yml` handles automated deployment on push to `main`.

> Update `deploy.yml` if you rename the repo.

---

## Tech Stack

- **Next.js 16** — App Router, static export
- **Three.js** — Cinematic bokeh particle layer  
- **GSAP** — Hero entrance animations  
- **CSS Modules** — Hero section styling  
- **Tailwind CSS + shadcn/ui** — Rest of the portfolio  

---

## Structure

```
components/
  cinematic/
    CinematicLayer.tsx   ← Three.js warm orange bokeh layer
  sections/
    VideoIntroSection.tsx ← New cinematic hero
    about.tsx             ← Unchanged from v1
    skills.tsx            ← Unchanged from v1
    projects.tsx          ← Unchanged from v1
    blog.tsx              ← Unchanged from v1
    roadmap.tsx           ← Unchanged from v1
    contact.tsx           ← Unchanged from v1
styles/
  VideoIntro.module.css  ← Hero CSS Module
public/
  intro.mp4              ← Replace with your video
  Chandu_Resume.pdf      ← Your resume
```
