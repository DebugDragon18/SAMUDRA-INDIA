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
      <div className="container mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Ocean Plastic Tracker</CardTitle>
            <CardDescription>
              Explore The Ocean Cleanup's interactive plastic tracker.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-[600px] w-full">
              <iframe
                src="https://theoceancleanup.com/plastic-tracker/"
                className="h-full w-full rounded-lg border"
                title="The Ocean Cleanup Plastic Tracker"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
