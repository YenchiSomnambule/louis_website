# Louis Blanc — Personal Site

Apple.com‑style single‑page site for process/data automation, AI agent setup and AI business integration consulting.

- `index.html` — all content (繁中 / EN, toggle in nav; choice saved in `localStorage`)
- `assets/css/style.css` — apple.com design tokens (SF Pro stack, `#1d1d1f` / `#f5f5f7` / `#0066cc`, 48px blurred nav, 980px pill buttons)
- `assets/js/main.js` — language toggle, mobile menu, gallery arrows, scroll reveal
- `assets/img/` — photo, logos, project screenshots

## Deploy (GitHub Pages)

Settings → Pages → Source: **Deploy from a branch** → branch `main`, folder `/ (root)`.
No build step; plain static files.

## Edit content

Every piece of copy exists twice: `<span lang="zh">…</span><span lang="en">…</span>`.
Edit both when changing text. Contact buttons live in the `#contact` section.
