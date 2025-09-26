import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { PotentialFishingZone } from '@/components/dashboard/potential-fishing-zone';
import { CoralReefMapping } from '@/components/dashboard/coral-reef-mapping';
import { OceanData } from '@/components/dashboard/ocean-data';
import { AiPredictions } from '@/components/dashboard/ai-predictions';
import { MolecularBiodiversity } from '@/components/dashboard/molecular-biodiversity';


export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <AppHeader />
        <main className="flex-1 space-y-8 p-4 sm:px-6 sm:py-0">
          <div className="flex items-center justify-between space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Eco-System Services</h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatsCards />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="col-span-1 lg:col-span-2">
                <PotentialFishingZone />
              </div>
              <div className="col-span-1 row-start-2 md:row-start-auto">
                <CoralReefMapping />
              </div>
              <div className="col-span-1">
                <MolecularBiodiversity />
              </div>
              <div className="col-span-1 lg:col-span-2">
                <OceanData />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <AiPredictions />
              </div>
          </div>
        </main>
      </div>
    </div>
  );
}
