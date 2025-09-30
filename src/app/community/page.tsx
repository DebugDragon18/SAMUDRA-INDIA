import { AppHeader } from '@/components/layout/app-header';
import { Footer } from '@/components/layout/footer';
import { CommunityHero } from '@/components/community/community-hero';
import { PostFeed } from '@/components/community/post-feed';
import { CommunitySidebar } from '@/components/community/community-sidebar';

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppHeader />
      <main className="flex-1">
        <CommunityHero />
        <section className="py-12 md:py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <PostFeed />
              </div>
              <div className="lg:col-span-1">
                <CommunitySidebar />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
