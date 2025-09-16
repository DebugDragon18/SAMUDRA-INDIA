"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

export function MapView() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Potential Fishing Zone - Map</CardTitle>
        <CardDescription>Interactive map showing real-time fishing zone advisories. For a more detailed view, visit the <Link href="https://incois.gov.in/geoportal/MFASPFZ/index.html" target="_blank" rel="noopener noreferrer" className="underline">INCOIS geoportal</Link>.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-[600px] w-full">
            {/* Map container has been removed to prevent initialization errors. */}
            <div className="flex h-full w-full items-center justify-center rounded-lg border bg-muted">
                <p className="text-muted-foreground">Map view is currently unavailable.</p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
