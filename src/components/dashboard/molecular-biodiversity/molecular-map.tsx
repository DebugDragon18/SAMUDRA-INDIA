"use client";

import dynamic from 'next/dynamic';
import { LocationData } from '@/lib/molecular-data';
import { Skeleton } from '@/components/ui/skeleton';

interface MolecularBiodiversityMapProps {
  locations: LocationData[];
  onSelectLocation: (location: LocationData) => void;
  selectedLocation: LocationData | null;
}

const Map = dynamic(() => import('./map').then((mod) => mod.Map), {
  ssr: false,
  loading: () => <Skeleton className="h-full w-full" />,
});

export function MolecularBiodiversityMap({ locations, onSelectLocation, selectedLocation }: MolecularBiodiversityMapProps) {
  return <Map locations={locations} onSelectLocation={onSelectLocation} selectedLocation={selectedLocation} />;
}
