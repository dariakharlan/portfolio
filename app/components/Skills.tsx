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

function SkillList({ skills }: { skills: string[] }) {
  return (
    <ul className="space-y-4">
      {skills.map((skill) => (
        <li key={skill} className="flex items-center gap-3">
          <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
          <span className="text-body-md text-on-surface">{skill}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <>
      {/* Mobile: hard and soft skills as separate snap screens */}
      <div className="md:hidden bg-surface-container-lowest">
        <section
          id="skills"
          className="min-h-screen snap-start flex flex-col justify-center py-16 px-margin-mobile"
        >
          <h2 className="text-headline-lg text-on-surface mb-8">Expertise</h2>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/30">
            <h3 className="text-headline-md text-primary mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined">build</span>
              Hard Skills
            </h3>
            <SkillList skills={hardSkills} />
          </div>
        </section>

        <section className="min-h-screen snap-start flex flex-col justify-center py-16 px-margin-mobile">
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/30">
            <h3 className="text-headline-md text-primary mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined">psychology</span>
              Soft Skills
            </h3>
            <SkillList skills={softSkills} />
          </div>
        </section>
      </div>

      {/* Desktop: single snap section with 2-column grid */}
      <section
        id="skills"
        className="hidden md:flex min-h-screen snap-start flex-col justify-center py-16 bg-surface-container-lowest"
      >
        <div className="px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="mb-16">
            <h2 className="text-headline-lg text-on-surface mb-4">Expertise</h2>
            <div className="w-24 h-1 bg-primary rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-gutter">
            <div className="bg-surface-container p-10 rounded-xl border border-outline-variant/30 hover:border-primary/50 transition-colors">
              <h3 className="text-headline-md text-primary mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined">build</span>
                Hard Skills
              </h3>
              <SkillList skills={hardSkills} />
            </div>
            <div className="bg-surface-container p-10 rounded-xl border border-outline-variant/30 hover:border-primary/50 transition-colors">
              <h3 className="text-headline-md text-primary mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined">psychology</span>
                Soft Skills
              </h3>
              <SkillList skills={softSkills} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
