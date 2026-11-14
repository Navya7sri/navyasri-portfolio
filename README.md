# Navyasri Vallakati — Personal Portfolio

A light-first, responsive React + TypeScript portfolio with an editorial visual system, optional dark theme, animated sections, three project detail routes, and a contact form with EmailJS / `mailto:` fallback.

## Run locally

Requirements: Node.js 18.18+ (or 20+) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

Build and preview the production version:

```bash
npm run build
npm run preview
```

## Personalize assets

- **Resume:** replace `public/resume.pdf` with the latest PDF, keeping the same filename. The navigation and hero download links use `/resume.pdf`.
- **Profile photograph:** in `src/pages/Home.tsx`, find the `.photo-placeholder` block inside the About section. Replace it with an image, for example `<img src="/assets/profile.jpg" alt="Navyasri Vallakati" />`. Add the image at `public/assets/profile.jpg`; use a well-lit portrait with a simple background. Keep the `.about-photo` wrapper and adjust `object-position` in `src/styles.css` if needed.
- **Project screenshots:** the current project previews are original CSS mockups, not purported screenshots of the actual apps. Replace the `ProjectVisual` usage in `src/components/ProjectCard.tsx` and `src/pages/ProjectDetail.tsx` with your real, optimized images when available. Store them in `public/assets/` and use descriptive alt text.
- **Portfolio content:** update the centralized data in `src/data/portfolio.ts`.

## Contact form (optional EmailJS setup)

The form validates all four fields. If EmailJS is not configured, it opens the visitor's email client with a prefilled message addressed to `navya7vallakati@gmail.com`.

To enable in-page sending:

1. Create an EmailJS account and configure an email service and template.
2. In the template, map `from_name`, `reply_to`, `subject`, and `message`.
3. Copy `.env.example` to `.env` and fill in:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Restart the dev server. Only the EmailJS **public** key belongs in this Vite client-side setup. Never put a private key or secret in a `VITE_` variable. For stronger abuse protection, add rate limiting / CAPTCHA through your chosen email service or a server-side endpoint.

## Deploy

### Vercel

1. Push this folder to a Git repository.
2. Import the repository in Vercel.
3. Framework preset: **Vite**; build command: `npm run build`; output directory: `dist`.
4. Add the three EmailJS environment variables in Project Settings if you enabled EmailJS.
5. Deploy. Vercel serves the React Router routes with its Vite SPA fallback in the standard Vite integration; if using a custom host, configure all app routes to fall back to `/index.html`.

### Netlify

1. Connect the Git repository.
2. Build command: `npm run build`; publish directory: `dist`.
3. Add a `public/_redirects` file containing `/* /index.html 200` (create it if deploying to Netlify).
4. Add EmailJS environment variables if needed, then deploy.

## Routes

- `/` — portfolio
- `/projects/deepfake-detection`
- `/projects/craft-corner`
- `/projects/efficient-care`

## Notes

- Light mode is the default. The theme choice is stored in `localStorage`.
- Motion respects `prefers-reduced-motion`.
- The profile image area is intentionally a replaceable placeholder; no portrait was supplied.
- Project detail pages distinguish known project outcomes from implementation details that have not been supplied. They do not invent screenshots, architecture, or additional results.
- SEO title, description, Open Graph basics, semantic landmarks, responsive layouts, and a favicon are included. Add the final deployed domain to canonical/social metadata if you have one.
