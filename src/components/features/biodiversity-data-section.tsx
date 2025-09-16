import Image from 'next/image';

export function BiodiversityDataSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0dXJ0bGUlMjBzd2ltbWluZ3xlbnwwfHx8fDE3NTgwMjA1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sea turtle swimming"
            width={800}
            height={600}
            className="rounded-lg object-cover"
            data-ai-hint="turtle swimming"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ocean Biodiversity Data
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Explore a rich repository of information on marine life. Our platform aggregates data on species distribution, habitat locations, and genetic diversity, providing a critical resource for conservation efforts and scientific research.
          </p>
           <ul className="mt-6 space-y-4 text-foreground/80">
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>Map species habitats, including sensitive areas like coral reefs.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>Track migration patterns and population dynamics.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>Contribute to and access a global library of marine biodiversity.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
