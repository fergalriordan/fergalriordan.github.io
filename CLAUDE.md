# CLAUDE.md

Static portfolio site: vanilla HTML/CSS/JS, no build/lint/test tooling, no package manager. Deployed to `fergalriordan.com` via GitHub Pages (`CNAME`).

## Development

Preview by serving the repo root over HTTP — **not** by opening files directly. Internal links use root-absolute paths (`/css/styles.css`, `/projects/...`) that only resolve from the site root.

```bash
python -m http.server 8000   # http://localhost:8000
```

## Layout

- `index.html` — single-page main site (Home, About w/ tabbed panel, Portfolio grid, Contact)
- `projects/*.html` — one standalone case-study page per portfolio item; shares `/css/styles.css`, adds page-specific CSS inline in `<head>`
- `css/styles.css` — global stylesheet; theme lives in `:root` custom properties
- `js/scripts.js` — all `index.html` interactivity, loaded `defer`
- `assets/` — images, documents (CV, thesis)

## Conventions

- Use root-absolute paths for all internal references.
- Reuse the `:root` CSS custom properties (`--primary-color`, etc.); don't hardcode colors.
- **Adding a portfolio item:** add a `.work` card to `.work-list` in `index.html` and create `projects/<name>.html`. Cards beyond the first few take the `hidden` class (revealed by the "See More" toggle). The fade-in stagger assumes a 3-column row (`i % 3`).
- Tab panels pair `active-link` on the `.tab-links` with `active-tab` on the matching `.tab-contents` (matched by `id`).