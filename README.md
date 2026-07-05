# Viable Option Pty Ltd — Website (Vite + React)

Municipal Financial Advisory website for Viable Option Pty Ltd. Built with **Vite**,
**React 18** and **react-router-dom**. Pages: Home, About Us, Expertise, Team, Contact.

## Quick start
```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Assets
Drop these into `public/` (see `public/ASSETS_GO_HERE.txt`):
- `LOGOV.png` — logo (navbar + footer)
- `home.mp4` — homepage hero video
- `managing-director.jpg` — MD portrait (rename from "managing director.jpg")
- `experience.jpg` — Expertise page image

Missing assets fall back gracefully (VO monogram, navy gradient hero, GM portrait panel).

## Project structure
```
src/
  main.jsx            app entry + router
  App.jsx             routes + scroll-to-top
  index.css           all styles (design tokens in :root)
  data.js             site content (edit copy here)
  icons.jsx           inline SVG icon set
  components/         Navbar, Footer, Logo, SafeImg, Reveal, PageHead, CTABand
  pages/             Home, About, Expertise, Team, Contact
```
Edit copy in `src/data.js`; edit colours/spacing via the CSS variables at the top of `src/index.css`.

## Deployment
This app is ready for Railway using the included `Dockerfile` and `Caddyfile`.
Caddy serves the built `dist/` folder and falls back to `index.html` for client-side
routes.

1. Push this folder to GitHub.
2. In Railway, create a new project and choose "Deploy from GitHub repo".
3. Select this repository and deploy it. Railway will detect the `Dockerfile`.
4. In the Railway service, open Settings -> Networking and add `viableoption.co.za`.
5. Add the DNS records Railway gives you at the domain registrar, then wait for SSL.

## Contact form
The enquiry form composes a `mailto:` to info@viableoption.co.za (no backend needed).
To capture submissions, wire it to a form service (Formspree, Netlify Forms, etc.).
