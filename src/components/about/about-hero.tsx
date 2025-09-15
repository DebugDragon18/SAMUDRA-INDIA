import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <Image
        src="https://picsum.photos/seed/earth-space/1780/1068"
        alt="Earth from space"
        fill
        className="object-cover"
        data-ai-hint="earth space"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          About Hub Ocean
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-white/80 md:text-xl">
          We are a non-profit foundation dedicated to unlocking and sharing ocean data to create a healthy and productive ocean.
        </p>
      </div>
    </section>
  );
}
