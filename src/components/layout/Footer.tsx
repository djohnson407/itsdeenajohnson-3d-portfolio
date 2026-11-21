import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 text-sm text-foreground/70">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <Link href="/#home" className="hover:text-accent">Back to top ↑</Link>
      </div>
    </footer>
  );
}
