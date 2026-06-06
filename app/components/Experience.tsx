export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen snap-start flex flex-col justify-center py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <h2 className="text-headline-lg text-on-surface mb-12">
        Professional Experience
      </h2>
      <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30">
        <h3 className="text-headline-md text-primary mb-2">Software Engineer</h3>
        <p className="text-label-md text-on-surface-variant mb-4">
          2014 – Present
        </p>
        <ul className="space-y-3">
          {[
            "10 years of experience building digital products within cross-functional teams",
            "Manage projects independently from planning through delivery",
            "Developed strong analytical, problem-solving, and project management capabilities",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-body-md text-on-surface">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
