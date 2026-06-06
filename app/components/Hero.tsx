export default function Hero() {
  return (
    <section id="hero" className="min-h-screen snap-start flex flex-col items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

        <h1 className="text-headline-xl md:text-[72px] md:leading-[1.1] md:tracking-tight text-on-surface mb-12 leading-[1.1] tracking-tight">
          Hi, I&apos;m <span className="personality-marker">Daria.</span>
        </h1>

        <p className="text-body-md text-on-surface-variant mb-3">
          Creative and curious aspiring marketer transitioning from a career in software engineering.
        </p>
        <p  className="text-body-md text-on-surface-variant mb-16">I love coming up with ideas and bringing them to life, combining analytical thinking with creativity to develop engaging and effective campaigns.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            className="bg-primary px-8 py-4 rounded-lg text-on-primary font-bold text-label-md flex items-center gap-2 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,177,195,0.5)] transition-all duration-300"
            href="#work"
          >
            Explore Projects
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">
              arrow_forward
            </span>
          </a>
          <a
            className="border border-outline px-8 py-4 rounded-lg text-on-surface font-bold text-label-md hover:bg-surface-container transition-colors duration-300"
            href="mailto:dariakharlan11@gmail.com"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
