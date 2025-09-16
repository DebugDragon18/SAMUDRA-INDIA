import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function AquaLinkMap() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>AquaLink Live Map</CardTitle>
                    <CardDescription>Explore real-time data from buoys around the world.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative h-[600px] w-full">
                        <iframe
                            src="https://aqualink.org/map"
                            className="h-full w-full rounded-lg border"
                            title="AquaLink Map"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    </section>
  )
}
