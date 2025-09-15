export function MissionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Our mission is to change the fate of the ocean by unleashing the power of data. We aim to build the world’s most powerful data platform for the ocean, fostering a global ecosystem of data sharers and solution builders.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-primary">Data Sharing</h3>
            <p className="mt-2 text-foreground/80">
              We enable seamless data sharing across industries, science, and government.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-primary">Collaboration</h3>
            <p className="mt-2 text-foreground/80">
              We foster collaboration to develop new insights and solutions for a sustainable ocean economy.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-primary">Innovation</h3>
            <p className="mt-2 text-foreground/80">
              We provide the tools and infrastructure for innovators to build transformative applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
