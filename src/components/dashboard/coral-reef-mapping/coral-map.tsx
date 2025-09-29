"use client";

import dynamic from 'next/dynamic';
import { CoralReef } from '@/lib/coral-reef-data';
import { Skeleton } from '@/components/ui/skeleton';

interface CoralReefMapProps {
  reefs: CoralReef[];
  onSelectReef: (reef: CoralReef) => void;
  selectedReef: CoralReef | null;
}

const Map = dynamic(() => import('./map').then((mod) => mod.Map), {
  ssr: false,
  loading: () => <Skeleton className="h-full w-full" />,
});

export function CoralReefMap({ reefs, onSelectReef, selectedReef }: CoralReefMapProps) {
  return <Map reefs={reefs} onSelectReef={onSelectReef} selectedReef={selectedReef} />;
}
