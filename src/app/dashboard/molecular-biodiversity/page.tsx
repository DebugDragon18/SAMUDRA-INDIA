"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { Skeleton } from '@/components/ui/skeleton';
import { LocationData, molecularData } from '@/lib/molecular-data';
import { LocationDetails } from '@/components/dashboard/molecular-biodiversity/location-details';

const MolecularBiodiversityMap = dynamic(
  () => import('@/components/dashboard/molecular-biodiversity/molecular-map').then(mod => mod.MolecularBiodiversityMap),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[calc(100vh-200px)] w-full" />,
  }
);

export default function MolecularBiodiversityPage() {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(molecularData[0]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <AppHeader />
        <main className="flex-1 p-4 sm:px-6 sm:py-0">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Molecular Biodiversity
              </h1>
              <p className="text-muted-foreground">
                Explore DNA/rDNA data from ocean sampling sites.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-150px)]">
            <div className="lg:col-span-2 h-full">
                <MolecularBiodiversityMap 
                    locations={molecularData} 
                    onSelectLocation={setSelectedLocation}
                    selectedLocation={selectedLocation}
                />
            </div>
            <div className="lg:col-span-1 h-full overflow-y-auto">
                {selectedLocation ? (
                    <LocationDetails location={selectedLocation} />
                ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                        <p>Select a location on the map to view details.</p>
                    </div>
                )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
