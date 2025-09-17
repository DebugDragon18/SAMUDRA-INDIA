import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function PollutionTracking() {
  return (
    <section className="bg-primary/10 py-16 md:py-24">
      <div className="container mx-auto space-y-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Live Weather Map</CardTitle>
            <CardDescription>
              Explore real-time rain and wind conditions from Windy.com.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-[600px] w-full">
              <iframe
                src="https://www.windy.com/-Rain-thunder-rain?rain,18.521,73.850,5"
                className="h-full w-full rounded-lg border"
                title="Live Weather Map"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
