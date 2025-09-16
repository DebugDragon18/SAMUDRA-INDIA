import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer, Waves, Wind } from 'lucide-react';
import Image from 'next/image';

export function LiveOceanDataSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Live Ocean Data
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Access real-time oceanographic data from a vast network of sensors. Monitor key parameters to understand ocean dynamics as they happen.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
                 <Image
                    src="https://images.unsplash.com/photo-1488278905738-514111aa236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8T2NlYW58ZW58MHx8fHwxNzU4MDAyNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Ocean sensor buoy"
                    width={800}
                    height={600}
                    className="rounded-lg object-cover"
                    data-ai-hint="ocean buoy"
                />
            </div>
            <div className="space-y-8">
                <div className="flex gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Thermometer className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Temperature</h3>
                        <p className="text-foreground/80">Track sea surface and subsurface temperature changes, crucial for climate modeling and marine life studies.</p>
                    </div>
                </div>
                 <div className="flex gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Waves className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Salinity</h3>
                        <p className="text-foreground/80">Monitor salinity levels to understand water density, ocean circulation patterns, and freshwater influences.</p>
                    </div>
                </div>
                 <div className="flex gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Wind className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Currents</h3>
                        <p className="text-foreground/80">Visualize the speed and direction of ocean currents, essential for navigation, safety, and ecosystem analysis.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
