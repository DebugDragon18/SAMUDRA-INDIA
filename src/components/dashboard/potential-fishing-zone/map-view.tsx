"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapViewContent } from '@/components/dashboard/potential-fishing-zone/map-view-content';

export function MapView() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Potential Fishing Zone - Map</CardTitle>
        <CardDescription>Interactive map showing real-time fishing zone advisories. Click map to view on INCOIS.</CardDescription>
      </CardHeader>
      <CardContent>
        <MapViewContent />
      </CardContent>
    </Card>
  );
}
