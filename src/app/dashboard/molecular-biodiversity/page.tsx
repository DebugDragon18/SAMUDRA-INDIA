"use client";

import { useState } from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { LocationData, molecularData } from '@/lib/molecular-data';
import { LocationDetails } from '@/components/dashboard/molecular-biodiversity/location-details';
import { MolecularBiodiversityMap } from '@/components/dashboard/molecular-biodiversity/molecular-map';
import { CombinePortal } from '@/components/dashboard/molecular-biodiversity/combine-portal';

export default function MolecularBiodiversityPage() {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(molecularData[0]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <AppHeader />
        <main className="flex-1 p-4 sm:px-6 sm:py-0 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Molecular Biodiversity
              </h1>
              <p className="text-muted-foreground">
                Explore DNA/rDNA data from ocean sampling sites.
              </p>
            </div>
          </div>
          <div className="relative h-[calc(100vh-150px)]">
            <MolecularBiodiversityMap 
                locations={molecularData} 
                onSelectLocation={setSelectedLocation}
                selectedLocation={selectedLocation}
            />
            <div className="absolute top-4 right-4 z-[1000] w-full max-w-sm">
                {selectedLocation ? (
                    <LocationDetails location={selectedLocation} />
                ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground bg-card p-6 rounded-lg shadow-lg">
                        <p>Select a location on the map to view details.</p>
                    </div>
                )}
            </div>
          </div>
          <CombinePortal />
        </main>
      </div>
    </div>
  );
}
