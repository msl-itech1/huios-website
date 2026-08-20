# Huios Nation World — Website

Website for Huios Nation World, a multi-campus church family across the
United States, Canada, France, Côte d'Ivoire, Cameroon and South Africa.

Built with **Next.js** (App Router, TypeScript) — chosen for SEO: every page is
server-rendered with its own metadata, Open Graph tags, canonical URLs,
`sitemap.xml`, `robots.txt`, and Schema.org structured data (Church + Event).

Implemented from the Claude Design prototype `Huios Nation World.dc.html`
(project: *Site d'église multi-campus*).

## Getting started

```bash
npm install
cp .env.example .env   # then edit the values
npm run db:push        # creates the SQLite database
npm run dev            # http://localhost:3000
```

Production: `npm run build && npm start`.

## Pages

`/` Home · `/beliefs` · `/campuses` · `/ministries` · `/events` · `/give` ·
`/join` · `/contact` · `/admin` (team dashboard, password-protected)

## Event registrations & join/contact forms

The forms on `/events`, `/join` and `/contact` POST to API routes
(`src/app/api/…`) which validate and store submissions in the database via
Prisma. The team reviews everything in the **admin dashboard** at `/admin`
(password = `ADMIN_PASSWORD` in `.env`).

To add a new event open for registration, add it to `EVENTS` in
`src/lib/site.ts` and drop an `<EventRegistrationForm event="slug" />` on the
events page.

## Donations

Three ways to give on `/give`:

- **Card (Stripe Checkout)** — one-time or monthly. Set `STRIPE_SECRET_KEY` in
  `.env` to enable it (the card block is hidden otherwise). To record completed
  gifts in the admin dashboard, add a webhook in the Stripe dashboard pointing
  at `<site>/api/webhooks/stripe` for the `checkout.session.completed` event
  and set `STRIPE_WEBHOOK_SECRET`.
- **PayPal** — set `NEXT_PUBLIC_PAYPAL_DONATE_URL` to the church's real
  donation link.
- **Zelle / Interac e-Transfer** — displayed as instructions (no processing).

## Database

Prisma with **Postgres (Neon)**. On Vercel, add the Neon integration (Storage → Create Database → Neon) — it injects `DATABASE_URL` and the build syncs the schema automatically (`scripts/sync-db.mjs`). For local dev, point `DATABASE_URL` at a free Neon branch or a local Postgres, then `npm run db:push`.

Models: `EventRegistration`, `JoinRequest`, `ContactMessage`, `Donation`.

## TODO before launch

- **Photos**: the gray dashed blocks (`ImageSlot`) are placeholders — swap for
  real `next/image` photos (each label says which photo goes there).
- **Env values**: set `NEXT_PUBLIC_SITE_URL`, a strong `ADMIN_PASSWORD` and
  `ADMIN_SESSION_SECRET`, the Stripe keys, and the real PayPal link.
- **Email notifications**: form submissions are stored in the database; add an
  email service in the API routes if the team wants instant notifications.
- **French version**: the footer announces "Français (à venir)".
