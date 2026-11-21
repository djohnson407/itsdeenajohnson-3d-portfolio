"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const image = images[index];
  if (!image) return null;

  const changeImage = (offset: number) => {
    setIndex((previous) => (previous + offset + images.length) % images.length);
  };

  const controls = images.length > 1 && (
    <>
      <button className="editorial-action" onClick={() => changeImage(-1)}>Previous</button>
      <span aria-live="polite">{index + 1} / {images.length}</span>
      <button className="editorial-action" onClick={() => changeImage(1)}>Next</button>
    </>
  );

  return (
    <section aria-label="Project gallery" className="space-y-4">
      <h2 className="text-2xl font-semibold">Gallery</h2>
      <figure>
        <button className="relative block aspect-video w-full bg-[#242833]" aria-label={`Open fullscreen: ${image.alt}`} onClick={() => dialog.current?.showModal()}>
          <Image src={image.src} alt={image.alt} fill className="object-contain" sizes="(max-width: 896px) 90vw, 850px" />
        </button>
        {image.caption && <figcaption className="mt-2 text-foreground/75">{image.caption}</figcaption>}
      </figure>
      <div className="flex flex-wrap items-center gap-3">
        <button className="editorial-action" onClick={() => dialog.current?.showModal()}>View fullscreen</button>
        {controls}
      </div>
      <dialog
        ref={dialog}
        data-lenis-prevent
        aria-label="Fullscreen project gallery"
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-background p-4 text-foreground"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") changeImage(-1);
          if (event.key === "ArrowRight") changeImage(1);
        }}
      >
        <div className="flex h-full flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <button className="editorial-action" onClick={() => dialog.current?.close()} autoFocus>Close</button>
            {controls}
          </div>
          <div className="relative min-h-0 grow">
            <Image src={image.src} alt={image.alt} fill className="object-contain" sizes="100vw" loading="lazy" />
          </div>
          {image.caption && <p>{image.caption}</p>}
        </div>
      </dialog>
    </section>
  );
}
