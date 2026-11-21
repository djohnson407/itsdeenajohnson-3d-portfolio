# Deena Johnson portfolio editing guide

Make edits on `personalize-deena-portfolio` and review them in draft PR #1. Preview before requesting approval to merge or publish.

## Edit your profile and links

Open `src/data/site.ts` to edit the headline, introduction, biography, capabilities, degrees, navigation, contact links, and search metadata. Keep the public domain in `url`. Enter a verified professional email as `mailto:your-approved-address` and use complete HTTPS URLs for LinkedIn, GitHub, SkyBridge Visuals, and any additional accounts. Blank links stay hidden. The site has no contact form. Verify new links in the preview and test actual delivery before announcing a new inbox or enabling a form.

## Add approved portraits

Prepare web-optimized JPEG copies, remove private EXIF and location metadata, and keep the high-resolution originals outside the repository. No changes to facial features, skin tone, or body proportions are needed. Add these files in `public/images/portraits/`.

| Filename | Appears in |
| --- | --- |
| `hero-side.jpg` | Homepage hero |
| `creative-side.jpg` | Photography & Creative Work |
| `professional-front.jpg` | About |

In `src/data/site.ts`, set `approved: true` for each uploaded portrait. The `position` value controls the focal point using CSS percentages. Review the crop at 390px and 1440px before publishing. The placeholder stays visible when a portrait is unapproved or fails to load.

## Publish a case study

Edit `src/data/projects.ts`. Each entry supplies a title, description, category, thumbnail, search tags, and unique URL slug. Keep existing slugs to preserve links. Copy a category label exactly from `categories`, or update that list and the affected entries together.

Leave `caseStudy` absent for a public Coming soon page. To publish an approved entry, replace its placeholder thumbnail, add meaningful alt text, and add the fields below. Save approved web media under `public/images/` or `public/videos/`. Public file references omit the leading `public` folder. Add only cleared work, avoid confidential material, and substantiate every outcome.

```ts
caseStudy: {
  featured: { src: "/images/your-feature.jpg", alt: "Describe what the image shows" },
  objective: "What the project aimed to accomplish",
  brief: "The approved business problem or creative brief",
  role: "Your own responsibilities",
  tools: ["Tools you used"],
  process: "How you approached the work",
  deliverables: ["Approved deliverables"],
  outcomes: [],
  gallery: [
    { src: "/images/your-gallery-image.jpg", alt: "Describe the image", caption: "Optional context" },
  ],
  video: { src: "/videos/your-project.mp4", captions: "/videos/your-project.vtt" },
  demo: "https://your-approved-demo.example",
},
```

Omit `gallery`, `video`, or `demo` when unavailable. Add verified outcomes when available. Include a WebVTT caption track for each listed video. Gallery images can be browsed and opened in a fullscreen dialog. Only completed case studies appear in the sitemap, and placeholder routes request no indexing.

## Verify your edits

Run `npm ci`, `npm run build`, and `npx tsc --noEmit`. Run `npm run start` to preview the production build. Check the hero and portrait crops at desktop and mobile widths. Test the navigation, category filters, search, each project link, and every new contact link. For new gallery or video content, verify fullscreen navigation, Escape dismissal, playback, and captions. Check keyboard focus and the operating system’s reduced-motion mode.

## Credits

This portfolio was forked from KaranChandekar/interactive-3d-portfolio. Preserve applicable license and attribution.
