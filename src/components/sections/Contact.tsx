import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  const contacts = site.contacts.filter(({ href }) => href);
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading">Let’s connect</h2>
        <p className="mt-5 text-lg text-foreground/75">For collaborations in analytics, technology, or visual storytelling.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          {contacts.map(({ label, href }) => (
            <a key={label} href={href} className="editorial-action">{label} <ArrowUpRight size={16} aria-hidden="true" /></a>
          ))}
        </div>
        {!site.contacts.some(({ href }) => href.startsWith("mailto:")) && (
          <p className="mt-5 text-sm text-foreground/65">Professional email coming soon.</p>
        )}
      </div>
    </section>
  );
}
