# Busy Biz Solution — Website (Mockup v1)

Static marketing site for **Busy Biz Solution** — gamified marketing campaigns and KOL/KOC creator activation for the Australian market.

> Status: **design mockup / v1**. Not yet wired to a live form or domain.

## What's here
- `index.html` — single-page site
- `styles.css` — brand styles (Deep Navy `#16324F`, Coral `#FF6B5E`)
- `script.js` — mobile nav + placeholder form handler

## Sections
Hero · What we do (3 pillars) · Signature "Gamified Growth Campaign" · **Mini-games (3 placeholders)** · How it works · Why us · About · Contact enquiry form.

No pricing is shown — all enquiry-based and custom-quoted.

## 🎮 Mini-game slots (for Eric)
Three placeholder cards live in the **`#games`** section, marked with clear HTML comments:
- `#game-1` — Spin & Win
- `#game-2` — Quiz / Trivia
- `#game-3` — UGC Challenge

To plug in a real game, replace the `.game-ph` block inside each `.game-slot` with your game's markup or an `<iframe>` embed.

## To do before launch
- [ ] Wire the contact form to Formspree / email (see `TODO` in `script.js`)
- [ ] Add real client logos in the trust strip
- [ ] Add case studies / results
- [ ] Point a domain + enable HTTPS
- [ ] Plug in the 3 live mini-games

## Preview locally
Open `index.html` in a browser, or serve the folder:
```
python -m http.server 8080
```
Then visit http://localhost:8080

## Deploy
Works as-is on any static host — GitHub Pages, Netlify, Vercel, Cloudflare Pages.
