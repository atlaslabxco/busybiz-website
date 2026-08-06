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

## 🎮 Mini-games (3 live demos)
Three playable, self-contained games live in **`/games`** — one per industry. Each is a single HTML file (inline CSS + JS), mobile-friendly, and rebrandable via the CSS variables at the top and the data arrays in the script.

| Vertical | Game | File |
|---|---|---|
| Restaurant | Spin & Win (prize wheel) | `games/restaurant-spin.html` |
| FMCG | Superfan Quiz (5-question MCQ + reward) | `games/fmcg-quiz.html` |
| Event | Scratch & Win (scratch-to-reveal card) | `games/event-scratch.html` |

They're linked from the site's `#games` section ("Play the demo"). To rebrand: change `--navy` / `--coral` in each file's `:root`, and edit the `prizes` / `QUESTIONS` / `PRIZES` arrays for copy and rewards.

## To do before launch
- [ ] Wire the contact form to Formspree / email (see `TODO` in `script.js`)
- [ ] Add real client logos in the trust strip
- [ ] Add case studies / results
- [ ] Point a domain + enable HTTPS
- [ ] Rebrand each mini-game's colours + prizes per client

## Preview locally
Open `index.html` in a browser, or serve the folder:
```
python -m http.server 8080
```
Then visit http://localhost:8080

## Deploy
Works as-is on any static host — GitHub Pages, Netlify, Vercel, Cloudflare Pages.
