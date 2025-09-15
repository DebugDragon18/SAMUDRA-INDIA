import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { FishPopulationChart } from '@/components/dashboard/fish-population-chart';
import { SpeciesDistributionChart } from '@/components/dashboard/species-distribution-chart';
import { RecentUploadsTable } from '@/components/dashboard/recent-uploads-table';
import { QaAssistant } from '@/components/dashboard/qa-assistant';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full bg-muted/40 dark:bg-black">
      <AppSidebar />
      <div className="flex flex-1 flex-col">
        <AppHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:gap-8">
            <QaAssistant />
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <StatsCards />
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
              <FishPopulationChart />
              <RecentUploadsTable />
            </div>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8">
              <SpeciesDistributionChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
