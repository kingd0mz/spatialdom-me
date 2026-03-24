# me.spatialdom.xyz

Production-grade personal website for Dominic C. Fargas Jr., built as the personal digital CV within the Spatialdom ecosystem.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This project is configured for static deployment.

Primary deployment path:

- [deploy.yml](C:/Users/ROG/Documents/Spatialdom/spatialdom-me/.github/workflows/deploy.yml)

The workflow deploys automatically on pushes to `master` and also supports manual runs from the Actions tab.

Notes:

- `public/CNAME` is already set to `me.spatialdom.xyz`.
- In the repository `Settings > Pages`, set `Source` to `GitHub Actions`.
- Keep `public/CNAME` in place so the custom domain is copied into `dist/` during the workflow build.
- For the custom domain, keep the DNS for `me.spatialdom.xyz` aligned with GitHub Pages.

If you still want manual CLI deployment, the `gh-pages` script remains available:

```bash
npm run deploy
```

## Update the CV file

The downloadable CV is served from:

- `public/files/dominic-c-fargas-jr-cv.pdf`

To update it later:

1. Replace that file with the newer PDF.
2. Keep the same filename if you do not want to update links.
3. If you rename it, also update `cvPath` in [src/data/site.ts](C:/Users/ROG/Documents/Spatialdom/spatialdom-me/src/data/site.ts).

## Update site content

Most editable content is centralized in:

- [src/data/site.ts](C:/Users/ROG/Documents/Spatialdom/spatialdom-me/src/data/site.ts)

That file contains:

- hero identity and contact data
- credentials
- experience entries
- selected work
- publications
- engagements
- affiliations

## Project structure

- [src/App.tsx](C:/Users/ROG/Documents/Spatialdom/spatialdom-me/src/App.tsx): page composition
- [src/components](C:/Users/ROG/Documents/Spatialdom/spatialdom-me/src/components): layout, motion, and section components
- [src/data/site.ts](C:/Users/ROG/Documents/Spatialdom/spatialdom-me/src/data/site.ts): curated content source
- [src/index.css](C:/Users/ROG/Documents/Spatialdom/spatialdom-me/src/index.css): Spatialdom-aligned design tokens and global styles

## Custom domain

The custom domain file is:

- `public/CNAME`

Expected value:

```text
me.spatialdom.xyz
```

If the domain ever changes, update `public/CNAME` and the canonical / Open Graph URL values in [index.html](C:/Users/ROG/Documents/Spatialdom/spatialdom-me/index.html).
