import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1488278905738-514111aa236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxPY2VhbnxlbnwwfHx8fDE3NTgwMjA4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Ocean waves"
        fill
        className="object-cover"
        data-ai-hint="ocean waves"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          About Samudra ( INDIA)
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-white/80 md:text-xl">
          We are a non-profit foundation dedicated to unlocking and sharing ocean data to create a healthy and productive ocean.
        </p>
      </div>
    </section>
  );
}
