import Image from 'next/image';

export function FeaturesHero() {
  return (
    <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
      <Image
        src="https://picsum.photos/seed/features-hero/1800/600"
        alt="Ocean data visualization"
        fill
        className="object-cover"
        data-ai-hint="ocean abstract"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Platform Features
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-white/80 md:text-xl">
          Discover the powerful tools and data streams that drive insights and innovation for a healthier ocean.
        </p>
      </div>
    </section>
  );
}
