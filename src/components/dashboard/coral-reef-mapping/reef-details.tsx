"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CoralReef, ReefSubmission } from '@/lib/coral-reef-data';
import { cn } from '@/lib/utils';
import { Calendar, Microscope, User } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ReefDetailsProps {
  reef: CoralReef;
}

const healthVariantMap: { [key: string]: 'default' | 'secondary' | 'destructive' } = {
  Healthy: 'default',
  Warning: 'secondary',
  Alert: 'destructive',
};

export function ReefDetails({ reef }: ReefDetailsProps) {
    const allImages = reef.submissions.filter(s => s.imageUrl);

  return (
    <Card className="shadow-lg h-full flex flex-col">
      <CardHeader>
        <CardTitle>{reef.name}</CardTitle>
        <CardDescription>{reef.region}</CardDescription>
        <div className="flex justify-between items-center pt-2">
            <Badge variant={healthVariantMap[reef.health]}>{reef.health}</Badge>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Last Survey: {reef.lastSurvey}</span>
            </div>
        </div>
      </CardHeader>
      <ScrollArea className="flex-1">
        <CardContent className="pt-0 flex flex-col gap-6">
            
          {allImages.length > 0 && (
            <Carousel className="w-full">
                <CarouselContent>
                {allImages.map((sub) => (
                    <CarouselItem key={sub.id}>
                         <div className="relative h-48 w-full">
                            <Image
                            src={sub.imageUrl!}
                            alt={sub.notes}
                            fill
                            className="object-cover rounded-lg"
                            data-ai-hint={sub.imageHint}
                            />
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
            </Carousel>
          )}

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Microscope className="h-5 w-5 text-primary" /> Dominant Species
            </h3>
            <div className="flex flex-wrap gap-2">
              {reef.dominantSpecies.map(species => (
                <Badge key={species} variant="outline">{species}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Recent Submissions</h3>
            <div className="space-y-4">
              {reef.submissions.map(sub => (
                <div key={sub.id} className="p-3 bg-muted/50 rounded-lg text-sm">
                   <div className="flex justify-between items-center mb-1">
                        <p className="font-semibold flex items-center gap-2"><User className="h-4 w-4" /> {sub.submittedBy}</p>
                        <p className="text-xs text-muted-foreground">{sub.date}</p>
                   </div>
                   <p className="text-muted-foreground">{sub.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
