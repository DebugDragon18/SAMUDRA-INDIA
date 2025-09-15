import { AppHeader } from '@/components/layout/app-header';
import { AboutHero } from '@/components/about/about-hero';
import { MissionSection } from '@/components/about/mission-section';
import { TeamSection } from '@/components/about/team-section';
import { Footer } from '@/components/layout/footer';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppHeader />
      <main className="flex-1">
        <AboutHero />
        <MissionSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
