"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface ProjectCarouselProps {
  images: { src: string; alt: string }[];
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setActiveIndex(index);
  }

  function goTo(index: number) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.offsetWidth, behavior: "smooth" });
    setActiveIndex(index);
  }

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar rounded-xl bg-surface-container"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-full aspect-video overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={500}
              className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          {/* Prev button */}
          <button
            onClick={() => goTo(Math.max(0, activeIndex - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 disabled:opacity-20"
            disabled={activeIndex === 0}
          >
            <span className="material-symbols-outlined text-[18px] text-on-surface">chevron_left</span>
          </button>

          {/* Next button */}
          <button
            onClick={() => goTo(Math.min(images.length - 1, activeIndex + 1))}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 disabled:opacity-20"
            disabled={activeIndex === images.length - 1}
          >
            <span className="material-symbols-outlined text-[18px] text-on-surface">chevron_right</span>
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="w-2 h-2 rounded-full shadow-sm transition-colors duration-200"
                style={{
                  backgroundColor:
                    i === activeIndex
                      ? "#ffb1c3"
                      : "rgba(255, 177, 195, 0.3)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
