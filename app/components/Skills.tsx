const hardSkills = [
  "Social media strategy",
  "Content plan creation",
  "Audience & competitor analysis",
  "Ideas generation",
  "Google Analytics 4, Google Tag Manager, Google Ads",
  "Notion, Canva",
];

const softSkills = [
  "Analytical thinking",
  "Problem solving",
  "Autonomy",
  "Creativity",
  "Cross-functional communication",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen snap-start flex flex-col justify-center py-16 bg-surface-container-lowest"
    >
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Hard Skills */}
          <div className="bg-surface-container p-10 rounded-xl border border-outline-variant/30 hover:border-primary/50 transition-colors">
            <h3 className="text-headline-md text-primary mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined">build</span>
              Hard Skills
            </h3>
            <ul className="space-y-4">
              {hardSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                  <span className="text-body-md text-on-surface">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-surface-container p-10 rounded-xl border border-outline-variant/30 hover:border-primary/50 transition-colors">
            <h3 className="text-headline-md text-primary mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined">psychology</span>
              Soft Skills
            </h3>
            <ul className="space-y-4">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                  <span className="text-body-md text-on-surface">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
