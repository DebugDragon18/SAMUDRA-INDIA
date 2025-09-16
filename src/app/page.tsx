import { AppHeader } from '@/components/layout/app-header';
import { HeroSection } from '@/components/home/hero-section';
import { DataPlatformSection } from '@/components/home/data-platform-section';
import { CtaSection } from '@/components/home/cta-section';
import { Footer } from '@/components/layout/footer';
import { TeamSection } from '@/components/about/team-section';
import { LatestNewsSection } from '@/components/home/latest-news-section';
import { KeyFeaturesSection } from '@/components/home/key-features-section';
import { FeedbackSection } from '@/components/home/feedback-section';

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col" style={{ backgroundColor: 'hsl(210 50% 95%)' }}>
      <AppHeader />
      <main className="flex-1">
        <HeroSection />
        <DataPlatformSection />
        <KeyFeaturesSection />
        <CtaSection />
        <LatestNewsSection />
        <TeamSection />
        <FeedbackSection />
      </main>
      <Footer />
    </div>
  );
}
