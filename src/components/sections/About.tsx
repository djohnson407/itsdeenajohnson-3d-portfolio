import Portrait from "@/components/ui/Portrait";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:items-center">
          <Portrait kind="professional" />
          <div>
            <h2 className="section-heading">About {site.name}</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-foreground/80">
              {site.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <h3 className="eyebrow mt-8 mb-3">Education</h3>
            <ul className="space-y-1 text-foreground/75">
              {site.education.map((degree) => <li key={degree}>{degree}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {site.capabilities.map(({ title, detail }) => (
            <div key={title} className="border-t border-border pt-4">
              <h3 className="text-lg font-semibold text-accent">{title}</h3>
              <p className="mt-2 text-foreground/75">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
