import { AppHeader } from '@/components/layout/app-header';
import { Footer } from '@/components/layout/footer';
import { TideChart } from '@/components/preview/tide-chart';
import { AquaLinkMap } from '@/components/preview/aqualink-map';
import { VentuskyMap } from '@/components/preview/ventusky-map';
import { AiAssistantSection } from '@/components/home/ai-assistant-section';

export default function PreviewPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppHeader />
      <main className="flex-1">
        <section className="bg-primary/10 py-16 md:py-24">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Interactive Preview</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                    Explore a snapshot of our platform's capabilities.
                </p>
            </div>
        </section>
        <TideChart />
        <AquaLinkMap />
        <AiAssistantSection />
        <VentuskyMap />
      </main>
      <Footer />
    </div>
  );
}
