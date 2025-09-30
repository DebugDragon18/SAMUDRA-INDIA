import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves, Fish, Sprout, BrainCircuit, Camera, Siren } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const features = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Advanced AI Prediction',
    description: 'Utilize our AI-powered models to forecast trends, from fish stock fluctuations to climate impact.',
    link: 'https://chatgpt.com/g/g-68d9861b1f348191bcbd0dccc252ab92-samudra-ai-marine-science-assistant',
    external: true,
  },
  {
    icon: <Camera className="h-8 w-8 text-primary" />,
    title: 'Marine Detection',
    description: 'Detect and identify marine species in real-time from video feeds or your device camera.',
    tag: 'Coming Soon',
    link: '#',
    external: false,
  },
  {
    icon: <Siren className="h-8 w-8 text-primary" />,
    title: 'SOS & Advisory',
    description: 'Receive critical SOS alerts and fishing advisories to ensure safety and improve efficiency at sea.',
    link: '/dashboard/sos-advisory',
    external: false,
  },
  {
    icon: <Waves className="h-8 w-8 text-primary" />,
    title: 'Ocean Live Data',
    description: 'Access real-time oceanographic data streams from a global network of sensors and buoys.',
    link: '/preview',
    external: false,
  },
  {
    icon: <Fish className="h-8 w-8 text-primary" />,
    title: 'Fisheries Data',
    description: 'Analyze comprehensive datasets on catch volumes, species distribution, and fishing vessel activity.',
    link: '/dashboard/potential-fishing-zone',
    external: false,
  },
  {
    icon: <Sprout className="h-8 w-8 text-primary" />,
    title: 'Ocean Biodiversity Data',
    description: 'Explore vast collections of information on marine species, habitats, and genetic diversity.',
    link: '/dashboard/molecular-biodiversity',
    external: false,
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
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const cardContent = (
              <Card className="bg-background/50 border-primary/20 h-full transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div className="flex flex-col items-start gap-4">
                    {feature.icon}
                    <CardTitle>{feature.title}</CardTitle>
                    {feature.tag && (
                      <Badge variant="secondary" className="text-xs">
                        {feature.tag}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{feature.description}</p>
                </CardContent>
              </Card>
            );

            if (feature.link && feature.link !=='#') {
              return (
                <Link key={feature.title} href={feature.link} target={feature.external ? "_blank" : "_self"} rel={feature.external ? "noopener noreferrer" : ""}>
                  {cardContent}
                </Link>
              );
            }

            return <div key={feature.title}>{cardContent}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
