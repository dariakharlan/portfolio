"use client";

import { useState } from "react";
import ProjectCarousel from "./ProjectCarousel";

interface ProjectCardProps {
  images: { src: string; alt: string }[];
  title: string;
  subtitle: string;
  description: string[];
  href: string;
}

export default function ProjectCard({ images, title, subtitle, description, href }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  const [before, after] = title.includes(" for ")
    ? [title.split(" for ")[0] + " for ", title.split(" for ")[1]]
    : [title, null];

  return (
    <div className="flex flex-col gap-4 group/card">
      <div className="overflow-hidden rounded-xl">
        <div className="transition-transform duration-500 group-hover/card:scale-[1.02]">
          <ProjectCarousel images={images} />
        </div>
      </div>
      <div>
        <p className="text-label-sm text-primary font-semibold uppercase tracking-widest mb-1">
          {subtitle}
        </p>
        <h4 className="text-headline-md mb-6">
          <span className="text-on-surface">{before}</span>
          {after && <span className="personality-marker text-on-surface">{after}</span>}
        </h4>

        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-1 text-on-surface-variant font-bold text-label-md hover:gap-2 transition-all duration-300"
          >
            {open ? "Hide" : "About"}
            <span
              className="material-symbols-outlined text-[18px] transition-transform duration-300"
              style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              chevron_right
            </span>
          </button>
          <a
            className="inline-flex items-center gap-1 text-primary font-bold text-label-md hover:gap-2 transition-all duration-300"
            href={href}
            target="_blank"
          >
            View Project
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </a>
        </div>

        {/* Smooth expand using CSS grid trick */}
        <div
          className="grid transition-all duration-400 ease-in-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <ul className="space-y-2 pt-1">
              {description.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 transition-all duration-300"
                  style={{
                    transitionDelay: open ? `${i * 50}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(-4px)",
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                  <span className="text-body-md text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
