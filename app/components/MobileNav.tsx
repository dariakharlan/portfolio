const navItems = [
  { icon: "home", label: "Home", href: "#", fill: true },
  { icon: "grid_view", label: "Projects", href: "#work", fill: false },
  { icon: "bolt", label: "Skills", href: "#skills", fill: false },
  { icon: "mail", label: "Contact", href: "#contact", fill: false },
];

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe bg-surface/90 backdrop-blur-lg border-t border-outline-variant/20 z-50">
      {navItems.map((item, i) => (
        <a
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center justify-center ${
            i === 0 ? "text-primary" : "text-on-surface-variant"
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={
              item.fill
                ? { fontVariationSettings: "'FILL' 1" }
                : undefined
            }
          >
            {item.icon}
          </span>
          <span className="text-[10px] font-bold">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
