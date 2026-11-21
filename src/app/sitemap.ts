import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url },
    ...projects.filter(({ caseStudy }) => caseStudy).map(({ slug }) => ({ url: `${site.url}/projects/${slug}` })),
  ];
}
