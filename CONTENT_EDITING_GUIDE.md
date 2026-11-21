# Deena Johnson portfolio editing guide

This draft replaces the original developer's public-facing identity and sample projects. It has **not** been deployed or merged into `main`.

## Website content
- `src/components/sections/Hero.tsx`: headline, introduction, and hero presentation
- `src/components/sections/About.tsx`: biography and capability areas
- `src/data/projects.ts`: portfolio categories and case-study entries
- `src/components/sections/Projects.tsx`: portfolio filtering and project cards
- `src/components/sections/Contact.tsx`: contact section (currently no live form)
- `src/components/layout/Navbar.tsx` and `Footer.tsx`: navigation and footer
- `src/app/layout.tsx`: SEO title and description
- `src/app/globals.css`: colors and layout tokens

## Add approved photography
Upload web-optimized copies of your original photographs to `public/images/portraits/`, then ask Codex to integrate them in the hero and About section.
Recommended filenames: `hero-side.jpg`, `creative-side.jpg`, `professional-front.jpg`.
Do not alter facial features or body proportions. Never commit high-resolution originals, private image metadata, confidential client information, or credentials to this public repository.

## Portfolio content
The four projects in `src/data/projects.ts` are **placeholders**. Replace them only with verified and cleared case studies, photos, screenshots, measurements, and links.
Do not reuse the original developer's project descriptions, employment claims, numerical outcomes, or code snippets.

## Contact
The former contact form displayed a success confirmation without transmitting messages. It has been removed. Add a real contact method or provider and test delivery before publishing.

## Next technical checks
Run `npm ci`, `npm run build`, verify responsive views, keyboard navigation, image crops, actual 3D performance, project filtering, and each project detail URL before merging. The new draft was edited through GitHub and has not been locally build-tested here.

## Credits
This portfolio was forked from KaranChandekar/interactive-3d-portfolio. Preserve the original applicable license and attribution.
