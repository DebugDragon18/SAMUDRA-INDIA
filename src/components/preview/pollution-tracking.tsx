import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function PollutionTracking() {
  return (
    <section className="bg-white/5 py-16 md:py-24">
      <div className="container mx-auto space-y-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Earth Ocean Salinity Map</CardTitle>
            <CardDescription>
              A map showcasing data on ocean salinity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-[600px] w-full">
              <iframe
                src="https://svs.gsfc.nasa.gov/vis/a010000/a011200/a011211/index.html"
                className="h-full w-full rounded-lg border"
                title="Earth Ocean Salinity Map"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
