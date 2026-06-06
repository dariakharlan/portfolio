"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Close sidebar on nav click
  const handleNavClick = () => setSidebarOpen(false);

  return (
    <>
      {/* Sidebar overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-surface-container border-r border-outline-variant/20 flex flex-col p-8 gap-8 transition-transform duration-300 md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span className="text-headline-md font-bold tracking-tighter text-primary">
          DARIA KHARLAN
        </span>
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-body-lg text-on-surface hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Top header bar */}
      <header
        className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 transition-all duration-300 ${
          heroVisible
            ? "opacity-0 -translate-y-full pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <nav className="flex items-center justify-between px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto h-16">
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <span
                className="material-symbols-outlined text-primary cursor-pointer hover:rotate-90 transition-transform duration-300"
                onClick={() => setSidebarOpen(true)}
              >
                menu
              </span>
            </div>
            <span className="text-headline-md font-bold tracking-tighter text-primary">
              DARIA KHARLAN
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="text-label-md text-on-surface-variant hover:text-primary hover:-translate-y-0.5 transition-all duration-300 first:text-primary first:font-bold"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

        </nav>
      </header>
    </>
  );
}
