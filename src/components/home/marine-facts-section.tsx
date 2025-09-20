import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Search, Mountain, History } from 'lucide-react';

const facts = [
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Vast Coverage',
    description: 'The ocean covers more than 70% of the Earth\'s surface, holding about 97% of our planet\'s water.',
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: 'Largely Unexplored',
    description: 'More than 80% of our ocean is unmapped, unobserved, and unexplored. We have better maps of Mars than our own ocean floor.',
  },
  {
    icon: <Mountain className="h-8 w-8 text-primary" />,
    title: 'Underwater Mountains',
    description: 'The world\'s longest mountain range, the Mid-Ocean Ridge, is entirely underwater, stretching over 65,000 kilometers.',
  },
  {
    icon: <History className="h-8 w-8 text-primary" />,
    title: 'Sunken Treasures',
    description: 'There are more historic artifacts under the sea than in all the world\'s museums combined, from ancient shipwrecks to submerged cities.',
  },
];

export function MarineFactsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Fascinating Marine Facts
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Discover some incredible truths about our planet's oceans.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <Card key={fact.title} className="bg-background/50 border-primary/20 text-center">
              <CardHeader className="items-center">
                {fact.icon}
                <CardTitle className="pt-2">{fact.title}</CardTitle>
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
