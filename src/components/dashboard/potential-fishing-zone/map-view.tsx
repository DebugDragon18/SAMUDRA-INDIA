"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

export function MapView() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Potential Fishing Zone - Map</CardTitle>
        <CardDescription>Interactive map showing real-time fishing zone advisories.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-[500px] w-full">
          <Image 
            src="https://picsum.photos/seed/fishing-zone-map-large/1200/800" 
            alt="Potential Fishing Zone Map"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            data-ai-hint="satellite ocean map"
          />
           <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-2xl font-bold text-white bg-black/50 p-4 rounded-lg">Map Placeholder</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
