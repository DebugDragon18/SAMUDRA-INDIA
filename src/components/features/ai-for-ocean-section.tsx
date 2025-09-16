import { BrainCircuit, LineChart, Fish, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

export function AiForOceanSection() {
  return (
    <section className="bg-white/5 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Underutilization of AI for the Ocean
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Harness the power of artificial intelligence to unlock predictive insights from complex ocean data. Our advanced models help forecast trends and identify anomalies.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 space-y-8">
                <div className="flex gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <LineChart className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Predictive Trend Analysis</h3>
                        <p className="text-foreground/80">Forecast changes in ocean conditions, from temperature shifts to current patterns, enabling proactive planning.</p>
                    </div>
                </div>
                 <div className="flex gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Fish className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Fish Stock Fluctuation</h3>
                        <p className="text-foreground/80">Utilize AI models to predict the health and movement of fish stocks, supporting sustainable harvesting.</p>
                    </div>
                </div>
                 <div className="flex gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Climate Impact & Anomaly Detection</h3>
                        <p className="text-foreground/80">Identify unusual events like marine heatwaves or algal blooms, allowing for timely intervention.</p>
                    </div>
                </div>
            </div>
             <div className="order-1 md:order-2">
                 <Image
                    src="https://picsum.photos/seed/ai-ocean/800/600"
                    alt="Abstract AI visualization"
                    width={800}
                    height={600}
                    className="rounded-lg object-cover"
                    data-ai-hint="abstract ai"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
