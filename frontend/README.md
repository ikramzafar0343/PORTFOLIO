# Ikram Zafar — Portfolio (React + Vite)

This is the source code for my personal portfolio website, built with React and Vite.

It showcases my projects, skills, and provides a contact form that stores messages in Firebase
Cloud Firestore and triggers backend notifications via Firebase Functions.

---

## Tech Stack

- React (Vite)
- CSS (custom, no UI framework)
- Firebase (Web SDK)
  - Cloud Firestore for storing contact messages
  - Cloud Functions for email / WhatsApp notification (deployed in Firebase project)

---

## Local Development

From the `frontend` folder:

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

To run ESLint:

```bash
npm run lint
```

---

## Firebase Setup (Contact Form)

The Firebase client is configured in:

- `src/firebaseClient.js`

It currently points to the `ikramzafar-0343-1179c` Firebase project and initializes Firestore.

The contact form in:

- `src/App.jsx`

uses the Firebase Web SDK to write each submission to the `messages` collection:

- Fields: `name`, `email`, `message`, `timestamp`

Make sure in the Firebase console that:

- Firestore is enabled for `ikramzafar-0343-1179c`
- Firestore rules allow unauthenticated writes to the `messages` collection (or are otherwise
  configured to match how you deploy)

---

## Deployment on Render

This repository includes a `render.yaml` at the root to deploy the frontend to Render as a static
site.

Key settings:

- `type: static_site`
- `rootDir: frontend`
- `buildCommand: npm install && npm run build`
- `staticPublishPath: dist`

Deploy steps:

1. Push this repo (with `render.yaml`) to GitHub.
2. In Render, create a new **Blueprint** from the repo.
3. Render will read `render.yaml` and create a static site service named `ikramzafar-portfolio`.
4. Each deploy runs `npm install` and `npm run build` in the `frontend` directory and serves files
   from `dist`.

---

## Production Notes

- Secrets (such as SendGrid keys for Cloud Functions) should be stored in Firebase Functions
  environment/secret configuration, not in this frontend.
- Firebase configuration used here is the public web config for the selected Firebase project and
  is safe to embed in the client.
