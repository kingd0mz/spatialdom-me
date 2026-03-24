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

```bash
npm run deploy
```

Notes:

- `public/CNAME` is already set to `me.spatialdom.xyz`.
- If you use a custom GitHub Actions workflow instead of `gh-pages`, keep the `CNAME` file in `public/` so it is copied to `dist/`.
- For a custom domain on GitHub Pages, point the repository Pages settings to the published branch or deployment workflow, then keep the DNS for `me.spatialdom.xyz` aligned with GitHub Pages.

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
