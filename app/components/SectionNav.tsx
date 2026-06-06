"use client";

import { useEffect, useState } from "react";

export default function SectionNav() {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const check = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setAtTop(scrollTop < 10);
      setAtBottom(scrollTop + clientHeight >= scrollHeight - 10);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  const scroll = (dir: "up" | "down") => {
    window.scrollBy({ top: dir === "down" ? window.innerHeight : -window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-8 z-40 flex flex-col gap-2">
      {!atTop && (
        <button
          onClick={() => scroll("up")}
          className="w-9 h-9 rounded-full bg-surface-container border border-outline-variant/30 flex items-center justify-center hover:border-primary hover:text-primary text-on-surface-variant transition-all duration-200"
          aria-label="Scroll up"
        >
          <span className="material-symbols-outlined text-[18px]">keyboard_arrow_up</span>
        </button>
      )}
      {!atBottom && (
        <button
          onClick={() => scroll("down")}
          className="w-9 h-9 rounded-full bg-surface-container border border-outline-variant/30 flex items-center justify-center hover:border-primary hover:text-primary text-on-surface-variant transition-all duration-200"
          aria-label="Scroll down"
        >
          <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
        </button>
      )}
    </div>
  );
}
