
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export function PollutionTracking() {
  return (
    <section className="bg-white/5 py-16 md:py-24">
        <div className="container mx-auto">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Ocean Pollution Tracking</CardTitle>
                    <CardDescription>Simulated real-time tracking of plastic debris concentration.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative h-[500px] w-full">
                        <Image src="https://picsum.photos/seed/pollution-map/1200/500" alt="Pollution Map" layout="fill" objectFit="cover" className="rounded-lg" data-ai-hint="ocean pollution map" />
                    </div>
                </CardContent>
            </Card>
        </div>
    </section>
  )
}
