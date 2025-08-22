# D OR Agency — Next.js + Tailwind (Netlify)

Deploy on Netlify. Includes: App Router, Tailwind, tokens, pages/sections, forms (honeypot + reCAPTCHA v3),
serverless function that forwards leads to a webhook/CRM (Zapier/Make/HubSpot/Pipedrive) via environment variables.

## Quick start
```bash
npm i
npm run dev
```

## Netlify deploy
1) Create a new site from Git in Netlify and select this repo/ZIP.
2) Build command: `npm run build` — Publish directory: `.next`
3) Add env vars:
- `RECAPTCHA_SECRET` (Google reCAPTCHA v3)
- `LEADS_WEBHOOK_URL` (Zapier/Make/Pipedrive/HubSpot endpoint)
- `CALENDLY_URL` (your Calendly/Cal.com link)
4) Optional: set site name (e.g., dor-agency.netlify.app).

## Forms
- Client-side validation (react-hook-form).
- Hidden honeypot field.
- reCAPTCHA v3 token is verified in the Netlify Function `/netlify/functions/lead`.
