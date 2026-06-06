import ProjectCard from "./ProjectCard";

const projects = [
  {
    images: [
      { src: "/projects/strategy_vsi_svoi_1.png", alt: "Social Media Strategy slide 1" },
      { src: "/projects/strategy_vsi_svoi_2.png", alt: "Social Media Strategy slide 2" },
      { src: "/projects/strategy_vsi_svoi_3.png", alt: "Social Media Strategy slide 3" },
      { src: "/projects/strategy_vsi_svoi_4.png", alt: "Social Media Strategy slide 4" },
      { src: "/projects/strategy_vsi_svoi_5.png", alt: "Social Media Strategy slide 5" },
      { src: "/projects/strategy_vsi_svoi_6.png", alt: "Social Media Strategy slide 6" },
      { src: "/projects/strategy_vsi_svoi_7.png", alt: "Social Media Strategy slide 7" },
    ],
    title: "Social Media Strategy for Vsi. Svoi",
    subtitle: "Course Project",
    description: [
      "Conducted audience and competitor analysis",
      "Built content matrix and communication approach",
      "Generated an idea for non-standard brand activation",
      "Created strategy execution plan and set KPIs",
    ],
    href: "https://docs.google.com/presentation/d/1Cop5p4GhAphHesYcAASeibi0atf-7y36IgvW4xUKFSU/edit?usp=sharing",
  },
  {
    images: [
      { src: "/projects/crave_1.png", alt: "Creative Campaign slide 1" },
      { src: "/projects/crave_2.png", alt: "Creative Campaign slide 2" },
      { src: "/projects/crave_3.png", alt: "Creative Campaign slide 3" },
    ],
    title: "Creative Campaign Concept for Generation+",
    subtitle: "Crave Awards Competition",
    description: [
      "Developed an original creative campaign concept",
      "Awarded winner in the Social Impact Brief Category",
    ],
    href: "https://docs.google.com/presentation/d/1nuoNAAeOuS1r4g_Bm5ZYM_BK95vz6Nqhf3d7--0r2Lk/edit?usp=sharing",
  },
  {
    images: [
      { src: "/projects/tiktok_1.png", alt: "TikTok Content slide 1" },
      { src: "/projects/tiktok_2.png", alt: "TikTok Content slide 2" },
      { src: "/projects/tiktok_3.png", alt: "TikTok Content slide 3" },
    ],
    title: "Content Creator for Piano Learning TikTok",
    subtitle: "Personal Project",
    description: [
      "Built and executed a content strategy focused on beginner musicians",
      "Produced short-form educational and motivational video content independently",
      "Achieved 400,000+ views on a single top-performing video",
    ],
    href: "https://www.tiktok.com/@daria_learns",
  },
];

export default function Projects() {
  return (
    <>
      {/* Mobile: each card is its own full-screen snap section */}
      <div className="md:hidden">
        {projects.map((project, i) => (
          <section
            key={i}
            id={i === 0 ? "work" : undefined}
            className="min-h-screen snap-start flex flex-col justify-center py-16 px-margin-mobile"
          >
            {i === 0 && (
              <h2 className="text-headline-lg text-on-surface mb-6">Projects</h2>
            )}
            <ProjectCard {...project} />
          </section>
        ))}
      </div>

      {/* Desktop: single snap section with grid */}
      <section
        id="work"
        className="hidden md:flex min-h-screen snap-start flex-col justify-center py-16 px-margin-desktop max-w-container-max mx-auto"
      >
        <h2 className="text-headline-lg text-on-surface mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
