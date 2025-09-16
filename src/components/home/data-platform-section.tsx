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
            src="https://storage.googleapis.com/aip-dev-images-public/console-user-images/user-43403310-8637-4f8a-9244-dfc5453d105b/61f22143-4b69-4e4b-84a1-026f39e55132.png"
            alt="Data scientist working"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            data-ai-hint="logo abstract"
          />
        </div>
      </div>
    </section>
  );
}
