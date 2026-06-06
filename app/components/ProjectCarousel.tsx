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

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar rounded-xl bg-surface-container gap-4"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-full aspect-[16/10] overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
          {images.map((_, i) => (
            <div
              key={i}
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
      )}
    </div>
  );
}
