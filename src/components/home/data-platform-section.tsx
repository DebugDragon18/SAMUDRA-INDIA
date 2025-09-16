import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function DataPlatformSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            A data platform to enable ocean solutions
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            The Ocean Data Platform is a global, open-source, and not-for-profit digital commons built to enable a thriving and sustainable ocean economy.
          </p>
          <ul className="mt-6 space-y-4 text-foreground/80">
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>Connect and visualize all your data in one place.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>
                Search and discover contextualized ocean data from a growing federation of data providers.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>
                Build and run industrial-grade analytics and solutions.
              </span>
            </li>
          </ul>
          <Button className="mt-8" size="lg" asChild>
            <Link href="/features">Learn more</Link>
          </Button>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxvY2VhbiUyMGFuaW1hbHN8ZW58MHx8fHwxNzU3OTMzMTU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Data scientist working"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            data-ai-hint="ocean animals"
          />
        </div>
      </div>
    </section>
  );
}
