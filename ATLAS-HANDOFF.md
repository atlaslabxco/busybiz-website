# Busy Biz redesign — Atlas handoff

This is a review-ready static redesign. The public repository and live GitHub Pages site have not been changed. Keep the existing repository and copy these files into a review branch; do not replace its .git folder. Review the diff before merging.

## Included
- Rebuilt homepage, responsive styles, original optimised campaign hero artwork, improved menu and enquiry handling.
- All six original game routes preserved, with a shared brand layer and demo-to-enquiry navigation. Original game engines remain; this is a visual refresh rather than a rewrite of each game.
- Scratch-card keyboard reveal, reduced-motion wheel support, zoom restrictions removed, and a dismissible reward dialog in Dine-in Rewards.
- The three additional restaurant demos are under “More ways to play”.

## Required before launch
1. Configure `config.js` with a public recipient email OR an HTTPS form endpoint (e.g. a configured Formspree form). No secret API keys. With email only, the visitor must send from their email app; it does not silently deliver. With an endpoint, verify that it accepts browser FormData POST with JSON responses and has the correct destination. Test real receipt, success and failure states after configuration. The current empty configuration intentionally prevents sending and says so.
2. Confirm public business contact information and publish an accurate privacy notice reflecting the chosen service before collecting visitor data. The current preview does not transmit/store homepage form data.
3. Approve rewritten service copy, team names/roles, scope and FAQs. No fabricated testimonials, clients, metrics, prices or turnaround times were added.
4. All game prizes are illustrative. The legacy Dine-in Rewards demo stores fictional test lead entries locally in the visitor browser; do not treat any game as a production promotion or CRM. Production rewards, consent, retention, terms and permit requirements need a separate implementation/review.
5. Test on actual iOS/Android devices before public release, especially the existing arcade canvas games. No comprehensive accessibility or performance certification is claimed.

## Publication
No framework, install or build step is required. Retain relative paths for GitHub Pages under `/busybiz-website/`. Main files: index.html, styles.css, script.js, config.js, game-theme.css, game-shell.js, assets/campaign-hero.webp, and games/*.html. Existing docs are preserved. Merge/push using Atlas's usual workflow only after user review.

## Validation performed
- JavaScript syntax and local file-link checks across the site.
- Desktop and 390px mobile visual inspection of homepage.
- Mobile menu open/close and enquiry anchor.
- Preview form correctly refuses to claim delivery while unconfigured.
- Scratch keyboard reveal and demo-to-enquiry prefill.
- Quiz start/answer and arcade start screen inspection.
- See VALIDATION.md for final check output and limitations.

## Image provenance
The hero is AI-generated illustrative campaign artwork, not a real client campaign. Created with built-in imagegen. Prompt: Premium photoreal restaurant campaign hero, chef’s hands plating an appetising dish, elegant smartphone displaying Spin & Win and SPIN, restrained 15% OFF ticket, warm ivory background, coral accent, soft editorial lighting, portrait 4:5. Optimised as WebP (~156 KB).
