import { AppHeader } from '@/components/layout/app-header';
import { Footer } from '@/components/layout/footer';
import { FeaturesHero } from '@/components/features/features-hero';
import { LiveOceanDataSection } from '@/components/features/live-ocean-data-section';
import { FisheriesDataSection } from '@/components/features/fisheries-data-section';
import { BiodiversityDataSection } from '@/components/features/biodiversity-data-section';
import { AiForOceanSection } from '@/components/features/ai-for-ocean-section';
import { MarineDetectionSection } from '@/components/features/marine-detection-section';

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppHeader />
      <main className="flex-1">
        <FeaturesHero />
        <AiForOceanSection />
        <MarineDetectionSection />
        <LiveOceanDataSection />
        <FisheriesDataSection />
        <BiodiversityDataSection />
      </main>
      <Footer />
    </div>
  );
}
