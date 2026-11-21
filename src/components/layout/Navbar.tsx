"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 50);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || isOpen ? "glass" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="mx-auto flex min-h-17 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-accent" aria-label={`${site.name} home`}>
          {site.name.split(" ")[0]}<span className="text-accent">.</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {site.navigation.map(({ href, label }) => (
            <Link key={href} href={href} className="py-2 text-sm text-foreground/80 hover:text-accent">{label}</Link>
          ))}
        </div>
        <button
          ref={toggle}
          className="p-3 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
      <div id="mobile-navigation" hidden={!isOpen} className="border-t border-border bg-background px-6 py-3 md:hidden">
        {site.navigation.map(({ href, label }) => (
          <Link key={href} href={href} className="block py-3 hover:text-accent" onClick={() => setIsOpen(false)}>{label}</Link>
        ))}
      </div>
    </nav>
  );
}
