"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";

export default function Portrait({ kind }: { kind: keyof typeof site.portraits }) {
  const portrait = site.portraits[kind];
  const [failed, setFailed] = useState(false);

  return (
    <figure className="portrait-frame">
      {portrait.approved && !failed ? (
        <Image
          src={portrait.file}
          alt={`${site.name}, ${kind === "creative" ? "creative portrait" : "professional portrait"}`}
          fill
          loading={kind === "hero" ? "eager" : "lazy"}
          fetchPriority={kind === "hero" ? "high" : undefined}
          sizes="(max-width: 767px) 90vw, 42vw"
          style={{ objectPosition: portrait.position }}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <figcaption className="portrait-placeholder">{portrait.label}</figcaption>
      )}
    </figure>
  );
}
