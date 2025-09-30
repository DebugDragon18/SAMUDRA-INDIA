import Image from 'next/image';

export function CommunityHero() {
  return (
    <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1516426477722-2a222854b7a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZXNlYXJjaGVyc3xlbnwwfHx8fDE3NTk1NjI4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Scientists collaborating"
        fill
        className="object-cover"
        data-ai-hint="researchers collaborating"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          The Community Hub
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-white/80 md:text-xl">
          A dedicated platform for oceanography researchers, scientists, and enthusiasts to connect, share, and collaborate.
        </p>
      </div>
    </section>
  );
}
