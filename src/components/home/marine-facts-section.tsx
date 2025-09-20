import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Waves, Mountain, Compass } from 'lucide-react';

const facts = [
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: 'Vast Oceans',
    description: "Oceans cover more than 70% of the Earth's surface, which is more than all the continents combined. There are five main oceans: Pacific, Atlantic, Indian, Southern, and Arctic.",
  },
  {
    icon: <Waves className="h-6 w-6 text-primary" />,
    title: 'The Pacific',
    description: 'The Pacific Ocean is the largest and deepest, covering more area than all the land on Earth.',
  },
  {
    icon: <Mountain className="h-6 w-6 text-primary" />,
    title: 'Mariana Trench',
    description: "The Pacific's deepest point is the Mariana Trench, reaching about 36,000 feet (11,000 meters).",
  },
  {
    icon: <Compass className="h-6 w-6 text-primary" />,
    title: 'Largely Unexplored',
    description: 'Despite their size, humans have explored less than 5% of the ocean, leaving countless discoveries to be made.',
  },
];

export function MarineFactsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Fascinating Marine Facts
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Discover incredible truths about our planet's oceans.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <Card key={fact.title} className="text-center bg-background/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2 text-lg">
                    {fact.icon}
                    <span>{fact.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
