import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Compass, Database, Layers } from 'lucide-react';

const features = [
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: 'Federated Data Sources',
    description: 'Access a growing network of public and private ocean data providers in one place.',
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: 'Contextualization',
    description: 'Automatically link data to a dynamic knowledge graph for richer insights.',
  },
  {
    icon: <Compass className="h-8 w-8 text-primary" />,
    title: 'Discover and Explore',
    description: 'Use powerful search and visualization tools to find the data you need.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Key Platform Capabilities
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Our platform integrates powerful features to help you unlock the full potential of ocean data.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-background/50 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
