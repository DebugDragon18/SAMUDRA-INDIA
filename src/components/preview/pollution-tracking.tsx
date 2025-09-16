import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export function PollutionTracking() {
  return (
    <section className="bg-white/5 py-16 md:py-24">
      <div className="container mx-auto space-y-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Ocean Pollution Tracking</CardTitle>
            <CardDescription>
              Visualizing the impact of pollution on our oceans.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-[600px] w-full">
              <Image
                src="https://picsum.photos/seed/ocean-pollution/1200/600"
                alt="Ocean pollution"
                fill
                className="object-cover rounded-lg"
                data-ai-hint="ocean pollution"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
