import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { SOSCard } from '@/components/dashboard/sos-advisory/sos-card';
import { AdvisoryFeed } from '@/components/dashboard/sos-advisory/advisory-feed';
import { UserProfile } from '@/components/dashboard/sos-advisory/user-profile';
import { PostAdvisory } from '@/components/dashboard/sos-advisory/post-advisory';

export default function SosAdvisoryPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <AppHeader />
        <main className="flex-1 space-y-8 p-4 sm:px-6 sm:py-0">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Safety & Advisory Hub
              </h1>
              <p className="text-muted-foreground">
                Emergency SOS, real-time advisories, and user profile management.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex flex-col gap-8">
              <SOSCard />
              <UserProfile />
            </div>
            <div className="lg:col-span-2 flex flex-col gap-8">
              <PostAdvisory />
              <AdvisoryFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
