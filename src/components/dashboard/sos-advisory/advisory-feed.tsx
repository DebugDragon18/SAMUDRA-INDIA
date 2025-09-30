"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Rss } from 'lucide-react';

const mockAdvisories = [
  { id: '1', title: 'Severe Weather Warning: Cyclone Tej', content: 'Fishermen are advised not to venture into the sea along and off the coasts of Gujarat and Maharashtra for the next 48 hours. Strong winds and heavy rain expected.', author: 'IMD', timestamp: '2 hours ago', level: 'High' },
  { id: '2', title: 'High Tide Alert - Bay of Bengal', content: 'High tides are expected along the coast of Odisha and West Bengal tomorrow morning. Coastal communities should take necessary precautions.', author: 'INCOIS', timestamp: '8 hours ago', level: 'Moderate' },
  { id: '3', title: 'Update: Potential Fishing Zone', content: 'A new PFZ has been identified near the Andaman Islands. Coordinates: 12.5°N, 93.0°E. Favorable for tuna.', author: 'Scientist-C', timestamp: '1 day ago', level: 'Info' },
  { id: '4', title: 'Equipment Maintenance Reminder', content: 'All fishermen are reminded to check their safety equipment, including life jackets and communication devices, before each trip.', author: 'Fisheries Dept.', timestamp: '3 days ago', level: 'Info' },
];

export function AdvisoryFeed() {

  const getBadgeVariant = (level: string) => {
    switch (level) {
        case 'High': return 'destructive';
        case 'Moderate': return 'secondary';
        default: return 'default';
    }
  }
    
  return (
    <Card className="shadow-lg h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Rss className="h-6 w-6 text-primary" />
            Live Advisory Feed
        </CardTitle>
        <CardDescription>Real-time updates and warnings from scientists and authorities.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ScrollArea className="h-[400px]">
            <div className="space-y-4 p-6 pt-0">
            {mockAdvisories.map(advisory => (
                <Card key={advisory.id} className="bg-muted/30">
                    <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                            <CardTitle className="text-base">{advisory.title}</CardTitle>
                            <Badge variant={getBadgeVariant(advisory.level)}>{advisory.level}</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="pb-3">
                        <p className="text-sm text-muted-foreground">{advisory.content}</p>
                    </CardContent>
                    <CardFooter className="text-xs text-muted-foreground/80 flex justify-between">
                        <span>By {advisory.author}</span>
                        <span>{advisory.timestamp}</span>
                    </CardFooter>
                </Card>
            ))}
            </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
