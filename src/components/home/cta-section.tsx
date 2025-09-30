import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Ready to dive in?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Join our community of ocean innovators and start making a difference today.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/community">Get Started for Free</Link>
          </Button>
          <Button size="lg" variant="outline">
            Talk to an Expert
          </Button>
        </div>
      </div>
    </section>
  );
}
