export default function CTA() {
  return (
    <section
      id="contact"
      className="min-h-screen snap-start flex flex-col justify-center py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center"
    >
      <div className="bg-primary/5 rounded-2xl p-12 md:p-20 relative overflow-hidden border border-primary/20">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-headline-lg md:text-[48px] text-on-surface mb-6">
            Ready to collaborate?
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Available for creative marketing opportunities.
          </p>
          <a
            className="inline-block bg-primary px-10 py-5 rounded-lg text-on-primary font-bold text-label-md shadow-[0_10px_40px_-10px_rgba(255,177,195,0.4)] hover:scale-105 transition-all duration-300"
            href="mailto:dariakharlan11@gmail.com"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
}
