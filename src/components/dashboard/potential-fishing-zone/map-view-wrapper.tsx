"use client";

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const MapView = dynamic(
  () =>
    import('@/components/dashboard/potential-fishing-zone/map-view').then(
      (mod) => mod.MapView
    ),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[600px] w-full" />,
  }
);

export function MapViewWrapper() {
    return <MapView />;
}
