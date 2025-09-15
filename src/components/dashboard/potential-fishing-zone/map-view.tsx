"use client";

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MapViewContent = dynamic(
  () => import('@/components/dashboard/potential-fishing-zone/map-view-content').then((mod) => mod.MapViewContent),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[600px] w-full" />,
  }
);

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
