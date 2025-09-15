import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { FishPopulationChart } from '@/components/dashboard/fish-population-chart';
import { QaAssistant } from '@/components/dashboard/qa-assistant';
import { RecentUploadsTable } from '@/components/dashboard/recent-uploads-table';
import { SpeciesDistributionChart } from '@/components/dashboard/species-distribution-chart';
import { StatsCards } from '@/components/dashboard/stats-cards';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <AppHeader />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <StatsCards />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <FishPopulationChart />
              <SpeciesDistributionChart />
            </div>
            <RecentUploadsTable />
          </div>
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-1">
             <QaAssistant />
          </div>
        </main>
      </div>
    </div>
  );
}
