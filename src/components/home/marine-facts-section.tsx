"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Compass, LifeBuoy, ThermometerSun } from 'lucide-react';

const facts = [
  {
    id: "vast-oceans",
    icon: <Globe className="h-5 w-5" />,
    title: 'Vast Oceans',
    description: "Oceans cover over 70% of the Earth's surface, more than all continents combined. The five main oceans are the Pacific, Atlantic, Indian, Southern, and Arctic. The Pacific is the largest and deepest, with its deepest point, the Mariana Trench, reaching about 36,000 feet.",
  },
  {
    id: "unexplored",
    icon: <Compass className="h-5 w-5" />,
    title: 'Largely Unexplored',
    description: 'Despite their size, humans have explored less than 5% of the ocean, leaving countless discoveries to be made.',
  },
  {
    id: "biodiversity",
    icon: <LifeBuoy className="h-5 w-5" />,
    title: 'Incredible Biodiversity',
    description: 'The ocean is home to about 80% of all life on Earth. Scientists estimate that as many as two-thirds of marine species are still unknown.',
  },
  {
    id: "climate-regulator",
    icon: <ThermometerSun className="h-5 w-5" />,
    title: 'Climate Regulator',
    description: 'Oceans have absorbed more than 90% of the excess heat from climate change and absorb about 30% of the carbon dioxide released into the atmosphere.',
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
        <div className="mt-12 max-w-4xl mx-auto">
          <Tabs defaultValue={facts[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
              {facts.map((fact) => (
                <TabsTrigger key={fact.id} value={fact.id} className="flex gap-2 items-center text-xs md:text-sm py-2">
                  {fact.icon}
                  <span>{fact.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {facts.map((fact) => (
              <TabsContent key={fact.id} value={fact.id}>
                <Card className="bg-background/50 border-primary/20 mt-4">
                  <CardContent className="p-6 text-center text-foreground/80">
                    <p>{fact.description}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
