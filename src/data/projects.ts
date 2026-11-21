export const categories = [
  "All", "Data & Analytics", "Technology & Consulting", "SkyBridge Visuals", "Photography & Creative Work",
] as const;
export type ProjectCategory = (typeof categories)[number];

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailAlt?: string;
  tags: string[];
  category: Exclude<ProjectCategory, "All">;
  caseStudy?: {
    featured: ProjectImage;
    objective: string;
    brief: string;
    role: string;
    tools: string[];
    process: string;
    deliverables: string[];
    outcomes: string[];
    gallery?: ProjectImage[];
    video?: { src: string; captions: string; poster?: string };
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "data-analytics",
    category: "Data & Analytics",
    title: "Business intelligence and dashboard development",
    description: "Executive dashboards, financial analytics, and operational performance reporting.",
    thumbnail: "/images/portfolio-placeholder-1.svg",
    tags: ["Power BI", "SQL", "Data visualization", "Executive reporting"],
  },
  {
    slug: "technology-consulting",
    category: "Technology & Consulting",
    title: "Technology operations and transformation",
    description: "Enterprise technology operations, AI spend governance, financial technology oversight, and business intelligence consulting.",
    thumbnail: "/images/portfolio-placeholder-2.svg",
    tags: ["AI spend governance", "Digital transformation", "Process improvement"],
  },
  {
    slug: "skybridge-visuals",
    category: "SkyBridge Visuals",
    title: "Aerial perspectives and visual storytelling",
    description: "Drone photography, aerial video, and travel imagery.",
    thumbnail: "/images/portfolio-placeholder-3.svg",
    tags: ["Drone photography", "Aerial videography", "Travel imagery"],
  },
  {
    slug: "photography",
    category: "Photography & Creative Work",
    title: "Photography and creative portfolio",
    description: "Editorial photography, professional portraits, and creative digital projects.",
    thumbnail: "/images/portfolio-placeholder-4.svg",
    tags: ["Photography collections", "Editorial", "Visual storytelling"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3) {
  const category = getProjectBySlug(slug)?.category;
  const others = projects.filter((project) => project.slug !== slug);
  return [
    ...others.filter((project) => project.category === category),
    ...others.filter((project) => project.category !== category),
  ].slice(0, limit);
}
