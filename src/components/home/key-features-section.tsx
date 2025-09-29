import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves, Fish, Sprout, BrainCircuit, Camera } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Advanced AI Prediction',
    description: 'Utilize our AI-powered models to forecast trends, from fish stock fluctuations to climate impact.',
  },
  {
    icon: <Camera className="h-8 w-8 text-primary" />,
    title: 'Marine Detection',
    description: 'Detect and identify marine species in real-time from video feeds or your device camera.',
  },
  {
    icon: <Waves className="h-8 w-8 text-primary" />,
    title: 'Ocean Live Data',
    description: 'Access real-time oceanographic data streams from a global network of sensors and buoys.',
  },
  {
    icon: <Fish className="h-8 w-8 text-primary" />,
    title: 'Fisheries Data',
    description: 'Analyze comprehensive datasets on catch volumes, species distribution, and fishing vessel activity.',
  },
  {
    icon: <Sprout className="h-8 w-8 text-primary" />,
    title: 'Ocean Biodiversity Data',
    description: 'Explore vast collections of information on marine species, habitats, and genetic diversity.',
  },
];

export function KeyFeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Explore Our Core Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Dive into the data and tools that power a sustainable blue economy.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-background/50 border-primary/20">
              <CardHeader>
                <div className="flex flex-col items-start gap-4">
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
