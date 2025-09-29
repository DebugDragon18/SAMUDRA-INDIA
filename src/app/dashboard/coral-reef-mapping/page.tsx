"use client";

import { useState } from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { coralReefData, CoralReef } from '@/lib/coral-reef-data';
import { ReefFilters } from '@/components/dashboard/coral-reef-mapping/reef-filters';
import { SubmissionForm } from '@/components/dashboard/coral-reef-mapping/submission-form';
import { CoralReefMap } from '@/components/dashboard/coral-reef-mapping/coral-map';
import { AllenCoralAtlas } from '@/components/dashboard/coral-reef-mapping/allen-coral-atlas';

export default function CoralReefMappingPage() {
  const [selectedReef, setSelectedReef] = useState<CoralReef | null>(coralReefData[0]);
  const [filteredReefs, setFilteredReefs] = useState<CoralReef[]>(coralReefData);

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <AppHeader />
        <main className="flex-1 p-4 sm:px-6 sm:py-0 space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Coral Reef Mapping</h1>
            <p className="text-muted-foreground">
              Analyze, and contribute data about coral reefs in India and neighbouring seas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-150px)]">
            <div className="lg:col-span-2 h-full flex flex-col gap-4">
              <ReefFilters allReefs={coralReefData} setFilteredReefs={setFilteredReefs} />
              <div className="flex-1">
                <CoralReefMap 
                    reefs={filteredReefs} 
                    onSelectReef={setSelectedReef}
                    selectedReef={selectedReef}
                />
              </div>
            </div>
            <div className="lg:col-span-1 h-full overflow-y-auto">
              <SubmissionForm />
            </div>
          </div>

          <AllenCoralAtlas />
        </main>
      </div>
    </div>
  );
}
