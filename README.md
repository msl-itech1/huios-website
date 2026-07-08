# Huios Nation World — Website

Static multi-page website for Huios Nation World, a multi-campus church family
across the United States, Canada, France, Côte d'Ivoire, Cameroon and South Africa.

Implemented from the Claude Design prototype `Huios Nation World.dc.html`
(project: *Site d'église multi-campus*).

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| What we believe | `beliefs.html` |
| Campuses & times | `campuses.html` |
| Ministries | `ministries.html` |
| Events | `events.html` |
| Give | `give.html` |
| Join online | `join.html` |
| Contact | `contact.html` |

## Structure

- `css/styles.css` — all shared styles (design tokens, header/footer, components, per-page sections)
- `js/main.js` — form confirmation states and the Couples Conference "register your interest" toggle
- `assets/` — logo and images

No build step — deploy the folder as-is to any static host (GitHub Pages, Netlify, Vercel, …).
To preview locally: `python3 -m http.server` then open <http://localhost:8000>.

## TODO before launch

- **Photos**: the gray dashed blocks (`.img-slot`) are placeholders. Replace each with a real
  `<img>` (the placeholder label says what photo goes there).
- **Forms**: `join.html`, `contact.html` and the Couples Conference form currently show a
  confirmation message client-side but don't send data anywhere. Wire them to a form backend
  (Formspree, Netlify Forms, an email service, …) in `js/main.js`.
- **PayPal**: the Give page links to the generic `paypal.com/donate` — replace with the church's
  actual donation link.
- **French version**: the footer announces "Français (à venir)".
