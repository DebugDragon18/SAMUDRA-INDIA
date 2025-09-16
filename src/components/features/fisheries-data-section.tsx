import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function FisheriesDataSection() {
  return (
    <section className="bg-white/5 py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Comprehensive Fisheries Data
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Leverage extensive datasets to support sustainable fisheries management. Our platform provides insights into catch volumes, stock health, and fishing activity to help ensure the long-term viability of fish populations.
          </p>
          <ul className="mt-6 space-y-4 text-foreground/80">
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>Analyze historical and real-time catch data by species and region.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>Access Potential Fishing Zone (PFZ) advisories to optimize efforts.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>Monitor vessel activity to understand fishing patterns.</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="https://images.unsplash.com/photo-1558287959-9ef29358d6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8ZmlzaGVzfGVufDB8fHx8MTc1ODAwMjYwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fishing boat on the ocean"
            width={800}
            height={600}
            className="rounded-lg object-cover"
            data-ai-hint="fishing boat"
          />
        </div>
      </div>
    </section>
  );
}
