"use client";

import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { Button } from '@/components/ui/button';
import { LiveData } from '@/components/dashboard/potential-fishing-zone/live-data';
import Link from 'next/link';
import { MapViewWrapper } from '@/components/dashboard/potential-fishing-zone/map-view-wrapper';

export default function PotentialFishingZonePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <AppHeader />
        <main className="flex-1 space-y-8 p-4 sm:px-6 sm:py-0">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Potential Fishing Zone Advisory
              </h1>
              <p className="text-muted-foreground">
                Live data and map visualizations for optimal fishing.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/dashboard">Back to Dashboard</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <LiveData />
            <MapViewWrapper />
          </div>
        </main>
      </div>
    </div>
  );
}
