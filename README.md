# Ikram Zafar — Portfolio

A modern personal portfolio built with React + Vite, featuring smooth Framer Motion animations, SEO best practices, and a contact form powered by Firebase Cloud Firestore.

## Features
- Smooth, professional animations with Framer Motion (staggered entrances, micro‑interactions)
- Prefers‑reduced‑motion respected for accessibility
- Strong SEO: title/description, Open Graph/Twitter tags, canonical URL, JSON‑LD Person & projects
- Contact form stores messages in Firestore (`messages` collection) with server timestamps
- Ready for deployment on Render via `render.yaml`

## Tech Stack
- React (Vite)
- Framer Motion
- Firebase (Firestore client)
- CSS (custom)

## Local Development
```bash
cd frontend
npm install
npm run dev
```
Open the URL shown (usually http://localhost:5173).

Lint:
```bash
npm run lint
```

## Firebase Setup
Client config lives in:
- `frontend/src/firebaseClient.js`

Ensure the Firebase project you want to use is enabled with Firestore. For testing, set permissive rules and later tighten:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```
Messages are written to `messages` with fields: `name`, `email`, `message`, `timestamp`.

To switch projects, replace the config object in `firebaseClient.js` with the desired project’s web config from the Firebase console.

## SEO
Main tags and JSON‑LD are defined in:
- `frontend/index.html`

Update the canonical URL to your deployed domain once live.

## Deployment (Render)
This repo includes a blueprint file:
- [`render.yaml`](file:///c:/Mywork/IKRAMZAFAR_PORTFOLIO/render.yaml)

Steps:
1. Push this repository to GitHub.
2. In Render, create a new Blueprint from the repo.
3. Render will provision a Static Site:
   - Root directory: `frontend`
   - Build command: `npm install && npm run build`
   - Publish path: `dist`

## Project Structure
- `frontend/` — React + Vite app source
  - `src/App.jsx` — main UI, animations applied in hero/about/projects/contact
  - `src/animations.js` — reusable motion variants
  - `src/firebaseClient.js` — Firebase initialization and Firestore client
  - `index.html` — SEO meta and JSON‑LD
- `render.yaml` — Render deployment blueprint (static site)

## Contact
- Email: ikramzafar.0343@gmail.com
- GitHub: https://github.com/ikramzafar0343
- LinkedIn: https://www.linkedin.com/in/ikram-zafar-l1f21bsse0343
