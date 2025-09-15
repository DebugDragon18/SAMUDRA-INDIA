import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
      <Image
        src="https://picsum.photos/seed/ocean-viz/2070/1164"
        alt="Ocean data visualization"
        fill
        className="object-cover"
        data-ai-hint="ocean data visualization"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          The Ocean Data Platform
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
          Making the world’s ocean data accessible and useful. A neutral, open-source, and not-for-profit platform for collaboration and innovation.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg">Explore the data</Button>
          <Button size="lg" variant="secondary">
            Request a demo
          </Button>
        </div>
      </div>
    </section>
  );
}
