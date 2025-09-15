import { AppHeader } from '@/components/layout/app-header';
import { HeroSection } from '@/components/home/hero-section';
import { DataPlatformSection } from '@/components/home/data-platform-section';
import { FeaturesSection } from '@/components/home/features-section';
import { CtaSection } from '@/components/home/cta-section';
import { Footer } from '@/components/layout/footer';
import { TeamSection } from '@/components/about/team-section';
import { LatestNewsSection } from '@/components/home/latest-news-section';
import { KeyFeaturesSection } from '@/components/home/key-features-section';

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppHeader />
      <main className="flex-1">
        <HeroSection />
        <DataPlatformSection />
        <FeaturesSection />
        <KeyFeaturesSection />
        <CtaSection />
        <TeamSection />
        <LatestNewsSection />
      </main>
      <Footer />
    </div>
  );
}