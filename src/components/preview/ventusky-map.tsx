import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function VentuskyMap() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Live Temperature Map</CardTitle>
                    <CardDescription>Explore a live temperature map from Ventusky.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative h-[600px] w-full">
                        <iframe
                            src="https://www.ventusky.com/?p=47.4;24.4;5&l=temperature-2m"
                            className="h-full w-full rounded-lg border"
                            title="Ventusky Map"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    </section>
  )
}
