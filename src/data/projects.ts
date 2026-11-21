export type ProjectCategory = "All" | "Data & Analytics" | "Technology & Consulting" | "SkyBridge Visuals" | "Photography & Creative Work";
export interface Project {slug:string;title:string;description:string;fullDescription:string;thumbnail:string;heroImage:string;tags:string[];category:ProjectCategory;date:string;team:string;client:string;challenge:string;solution:string;codeSnippet:string;outcomes:{label:string;value:string}[];gallery:string[];liveUrl?:string;}
export const categories:ProjectCategory[] = ["All","Data & Analytics","Technology & Consulting","SkyBridge Visuals","Photography & Creative Work"];
export const projects:Project[] = [
  {
    "slug": "data-analytics",
    "category": "Data & Analytics",
    "title": "Business intelligence and dashboard development",
    "description": "Power BI, SQL, executive reporting and operational analytics. Case studies coming soon.",
    "fullDescription": "Portfolio section in preparation. Approved project details will be added soon.",
    "thumbnail": "/images/portfolio-placeholder-1.svg",
    "heroImage": "/images/portfolio-placeholder-1.svg",
    "tags": [
      "Power BI",
      "SQL",
      "Dashboard Design"
    ],
    "date": "Coming soon",
    "team": "",
    "client": "Personal portfolio",
    "challenge": "Project details will be provided when cleared for public release.",
    "solution": "This section is a placeholder. No client outcomes or deliverables are being claimed.",
    "codeSnippet": "",
    "outcomes": [],
    "gallery": [
      "/images/portfolio-placeholder-1.svg"
    ]
  },
  {
    "slug": "technology-consulting",
    "category": "Technology & Consulting",
    "title": "Technology operations and transformation",
    "description": "Enterprise technology, financial insight, AI spend governance and process improvement. Case studies coming soon.",
    "fullDescription": "Portfolio section in preparation. Approved project details will be added soon.",
    "thumbnail": "/images/portfolio-placeholder-2.svg",
    "heroImage": "/images/portfolio-placeholder-2.svg",
    "tags": [
      "Technology Operations",
      "AI Governance",
      "Transformation"
    ],
    "date": "Coming soon",
    "team": "",
    "client": "Personal portfolio",
    "challenge": "Project details will be provided when cleared for public release.",
    "solution": "This section is a placeholder. No client outcomes or deliverables are being claimed.",
    "codeSnippet": "",
    "outcomes": [],
    "gallery": [
      "/images/portfolio-placeholder-2.svg"
    ]
  },
  {
    "slug": "skybridge-visuals",
    "category": "SkyBridge Visuals",
    "title": "Aerial perspectives and visual storytelling",
    "description": "Drone photography, videography and cinematic visual projects. Case studies coming soon.",
    "fullDescription": "Portfolio section in preparation. Approved project details will be added soon.",
    "thumbnail": "/images/portfolio-placeholder-3.svg",
    "heroImage": "/images/portfolio-placeholder-3.svg",
    "tags": [
      "Drone Photography",
      "Videography",
      "Visual Storytelling"
    ],
    "date": "Coming soon",
    "team": "",
    "client": "Personal portfolio",
    "challenge": "Project details will be provided when cleared for public release.",
    "solution": "This section is a placeholder. No client outcomes or deliverables are being claimed.",
    "codeSnippet": "",
    "outcomes": [],
    "gallery": [
      "/images/portfolio-placeholder-3.svg"
    ]
  },
  {
    "slug": "photography",
    "category": "Photography & Creative Work",
    "title": "Photography and creative portfolio",
    "description": "Photography collections, editorial imagery and creative digital experiences. Case studies coming soon.",
    "fullDescription": "Portfolio section in preparation. Approved project details will be added soon.",
    "thumbnail": "/images/portfolio-placeholder-4.svg",
    "heroImage": "/images/portfolio-placeholder-4.svg",
    "tags": [
      "Photography",
      "Editorial",
      "Creative Direction"
    ],
    "date": "Coming soon",
    "team": "",
    "client": "Personal portfolio",
    "challenge": "Project details will be provided when cleared for public release.",
    "solution": "This section is a placeholder. No client outcomes or deliverables are being claimed.",
    "codeSnippet": "",
    "outcomes": [],
    "gallery": [
      "/images/portfolio-placeholder-4.svg"
    ]
  }
];
export function getProjectBySlug(slug:string){return projects.find(p=>p.slug===slug);}
export function getRelatedProjects(slug:string,limit=3){return projects.filter(p=>p.slug!==slug).slice(0,limit);}
