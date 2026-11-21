"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import Portrait from "@/components/ui/Portrait";
import { site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });
const sceneQuery = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

function subscribeToScenePreference(update: () => void) {
  const query = window.matchMedia(sceneQuery);
  query.addEventListener("change", update);
  return () => query.removeEventListener("change", update);
}

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const portrait = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const showScene = useSyncExternalStore(
    subscribeToScenePreference,
    () => window.matchMedia(sceneQuery).matches,
    () => false,
  );

  useEffect(() => {
    const element = section.current;
    if (!showScene || !element) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(element);
    return () => observer.disconnect();
  }, [showScene]);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add({
      motion: "(prefers-reduced-motion: no-preference)",
      desktop: "(min-width: 768px)",
    }, ({ conditions }) => {
      if (!conditions?.motion) return;
      gsap.to(portrait.current, {
        yPercent: conditions.desktop ? -8 : -3,
        ease: "none",
        scrollTrigger: { trigger: section.current, start: "top top", end: "bottom top", scrub: true },
      });
    });
    return () => media.revert();
  }, []);

  return (
    <section id="home" ref={section} className="hero-editorial">
      {showScene && <div className="hero-scene" aria-hidden="true"><Scene active={inView} /></div>}
      <div className="hero-composition">
        <div className="hero-copy">
          <p className="eyebrow mb-5">{site.name}</p>
          <h1 className="editorial-heading">{site.headline}</h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/80 md:text-xl">{site.introduction}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="editorial-action editorial-primary">Explore my work <ArrowDown size={16} aria-hidden="true" /></a>
            <a href="#contact" className="editorial-action">Connect</a>
          </div>
        </div>
        <div ref={portrait} className="hero-portrait"><Portrait kind="hero" /></div>
      </div>
    </section>
  );
}
