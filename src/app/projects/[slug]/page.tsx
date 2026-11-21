import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getRelatedProjects, projects } from "@/data/projects";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ProjectGallery from "@/components/ui/ProjectGallery";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    robots: { index: Boolean(project.caseStudy), follow: true },
    openGraph: { title: project.title, description: project.description, images: [project.caseStudy?.featured.src ?? project.thumbnail] },
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const { caseStudy } = project;
  const related = getRelatedProjects(slug);

  return (
    <SmoothScroll>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main" className="mx-auto max-w-5xl px-6 pt-28 pb-20">
        <Link href="/#projects" className="editorial-action mb-10">← Back to portfolio</Link>
        <p className="eyebrow mb-4">{project.category}</p>
        <h1 className="section-heading text-pretty">{project.title}</h1>
        <p className="mt-4 mb-8 text-lg text-foreground/75">{project.description}</p>
        <figure className="relative aspect-[16/9] overflow-hidden border border-border bg-[#242833]">
          <Image src={caseStudy?.featured.src ?? project.thumbnail} alt={caseStudy?.featured.alt ?? ""} fill className="object-cover" sizes="(max-width: 1024px) 90vw, 975px" />
          {caseStudy?.featured.caption && <figcaption className="absolute bottom-0 w-full bg-background/90 p-3">{caseStudy.featured.caption}</figcaption>}
        </figure>

        {caseStudy ? (
          <div className="my-12 space-y-10">
            {[
              ["Objective", caseStudy.objective],
              ["Business problem or creative brief", caseStudy.brief],
              ["My role", caseStudy.role],
              ["Methodology", caseStudy.process],
            ].map(([label, copy]) => (
              <section key={label}>
                <h2 className="text-2xl font-semibold">{label}</h2>
                <p className="mt-2 leading-relaxed text-foreground/75">{copy}</p>
              </section>
            ))}
            {[
              { label: "Tools used", items: caseStudy.tools },
              { label: "Deliverables", items: caseStudy.deliverables },
              { label: "Verified outcomes", items: caseStudy.outcomes },
            ].filter(({ items }) => items.length > 0).map(({ label, items }) => (
              <section key={label}>
                <h2 className="text-2xl font-semibold">{label}</h2>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-foreground/75">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            ))}
            {!!caseStudy.gallery?.length && <ProjectGallery images={caseStudy.gallery} />}
            {caseStudy.video && (
              <section>
                <h2 className="mb-4 text-2xl font-semibold">Project video</h2>
                <video className="aspect-video w-full bg-black" controls playsInline preload="none" src={caseStudy.video.src} poster={caseStudy.video.poster}>
                  <track kind="captions" srcLang="en" label="English" src={caseStudy.video.captions} default />
                </video>
              </section>
            )}
            {caseStudy.demo && <a href={caseStudy.demo} className="editorial-action">Open project demonstration ↗</a>}
          </div>
        ) : (
          <section className="my-12 border-y border-border py-8">
            <h2 className="text-2xl font-semibold">Coming soon</h2>
            <p className="mt-2 text-foreground/75">Approved work will be added here when it’s ready to share.</p>
          </section>
        )}

        {related.length > 0 && (
          <section>
            <h2 className="mb-4 text-2xl font-semibold">More from the portfolio</h2>
            <ul className="grid gap-3 sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link className="block h-full border border-border p-4 hover:border-accent hover:text-accent" href={`/projects/${item.slug}`}>
                    {item.category}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </SmoothScroll>
  );
}
