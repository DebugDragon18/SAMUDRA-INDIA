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
            <CardTitle>Ocean Surface Currents</CardTitle>
            <CardDescription>
              A visualization of ocean surface currents from NASA.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-[600px] w-full">
              <iframe
                src="https://svs.gsfc.nasa.gov/vis/a030000/a030400/a030493/index.html"
                className="h-full w-full rounded-lg border"
                title="NASA Perpetual Ocean"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
