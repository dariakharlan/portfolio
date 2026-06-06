import ProjectCarousel from "./ProjectCarousel";

const IMG1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuANgYfkcb47pmlhNanqaVIkK43IpF_xbw7TuPQGk0IC8eyxWakYIEt2kjkptKpRrC-oOrxBFOoiHA7f1dGid_OqRyPKnvyZUrE6P0XYB0WoLW25Vra6GRcVXYhCJ6pIw5IHhrRB6v2AlcQVGIrXX0QmlFZiT8JgUSQK4xmpAA5uCqf1iIQlfYQXby4vmh_UAc_9yTD8pBG9HQcC-6kxERGYuxiOuaz2xydFZSVM4-jJVDAFg_FkuCS_JpI3MBcvDj6o7DGKY_2jTRdw";
const IMG2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAFT2GSQPDQTK0KfhTqILLokxd6ySKcQZRODWEAhcmDWuhKidKZcD81xHu87wf54rA9zQPUnG_kk3Hxf_qmftR4MAxvnAZajDeDWAY0yuNQBMdIuZgkb6v5KdSqdcUSsJgj9b1ub5JMvIwt4hYRKypTrXHwrJTgYgCMZKKc8rdnsrnOgRNnudXDwAf7tCZVQp07XZ05mi66UgHndp0SdxgF75DrEzQSqL-rrCWXpir30Sb1VXmpIZgxo5C9TUYkOaiae77SPf39Velj";
const IMG3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCnZHLvh9JGtB_R67vaU9IhIjMccvsSjDcO92XIMNqqhTFMmWCfKwRVtjTDaNhy02qCd8LMK93ACYHwLgXqhuUM95bb7ozi7WKn4ZCJRqw2CbUGFFfxUQVe-SEUuC9WC6OLurY8mHasJfYLZUM5v2vJjVpTVwAzKKrdMo6Qh87-x0Pe1NONR6ziUVNuIJ_wzxsSuDpyb2HcDBFEcT6TCaGULPkG0Jej6dnuVCqA9fIYisP7Qmx_sDYqNZGplQ5I9UQbgGDBskugSLcp";

const projects = [
  {
    images: [
      { src: IMG1, alt: "Social Media Strategy slide 1" },
      { src: IMG2, alt: "Social Media Strategy slide 2" },
    ],
    title: "Social Media Strategy – Vsi. Svoi Course Project",
    description:
      "Conducted audience and competitor analysis. Built content matrix and communication approach, generated an idea for non-standard brand activation. Created strategy execution plan and set KPIs.",
    href: "#",
  },
  {
    images: [
      { src: IMG3, alt: "Creative Campaign slide 1" },
      { src: IMG1, alt: "Creative Campaign slide 2" },
    ],
    title: "Creative Campaign Concept – Generation+ Crave Awards Competition",
    description:
      "Developed an original creative campaign concept. Awarded winner in the Social Impact Brief Category.",
    href: "#",
  },
  {
    images: [
      { src: IMG2, alt: "TikTok Content slide 1" },
      { src: IMG3, alt: "TikTok Content slide 2" },
    ],
    title: "Content Creator – Piano Learning TikTok Personal Project",
    description:
      "Built and executed a content strategy focused on beginner musicians. Produced short-form educational and motivational video content independently. Achieved 400,000+ views on a single top-performing video.",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="min-h-screen snap-start flex flex-col justify-center py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
        <h2 className="text-headline-lg text-on-surface mt-4 mb-6">
          Projects
        </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, i) => (
          <div key={i} className="flex flex-col gap-6">
            <ProjectCarousel images={project.images} />
            <div>
              <h4 className="text-headline-md text-on-surface mb-2">
                {project.title}
              </h4>
              <p className="text-body-md text-on-surface-variant mb-4">
                {project.description}
              </p>
              <a
                className="inline-flex items-center gap-1 text-primary font-bold text-label-md hover:gap-2 transition-all duration-300"
                href={project.href}
              >
                View Project{" "}
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
