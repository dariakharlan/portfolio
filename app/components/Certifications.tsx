const certifications = [
  {
    icon: "workspace_premium",
    title: "SMM Strategy - Skvot Diploma",
    description:
      "Developed social media strategy for Vsi. Svoi (Ukrainian marketplace).",
    href: "https://lms.skvot.io/certificate/5ebf81f6da7230ed593afc3e8f6b7396",
  },
  {
    icon: "emoji_events",
    title: "Crave Awards Winner",
    description:
      "Recognised for developing an original creative campaign concept for Generation+ (Social Impact Brief).",
    href: "https://creative-stories.com.ua/craveawards/winners",
  },
];

export default function Certifications() {
  return (
    <section className="min-h-screen snap-start flex flex-col justify-center py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <h2 className="text-headline-lg text-on-surface mb-12">
        Certifications &amp; Awards
      </h2>
      <div className="grid grid-cols-1 gap-gutter">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="flex items-start gap-4 p-6 bg-surface-container-low rounded-xl border border-outline-variant/30"
          >
            <span className="material-symbols-outlined text-primary">
              {cert.icon}
            </span>
            <div>
              <h5 className="text-label-md font-bold text-on-surface">
                {cert.title}
              </h5>
              <p className="text-label-sm text-on-surface-variant mt-1 mb-3">
                {cert.description}
              </p>
              <a
                href={cert.href}
                target="_blank"
                className="inline-flex items-center gap-1 text-primary font-bold text-label-sm hover:gap-2 transition-all duration-300"
              >
                View
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
