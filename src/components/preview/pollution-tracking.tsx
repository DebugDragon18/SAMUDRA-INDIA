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
            <CardTitle>Ocean Pollution Visualization</CardTitle>
            <CardDescription>
              A video showcasing data on ocean pollution.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-[600px] w-full">
              <iframe
                src="https://drive.google.com/file/d/1n0NbAEmP05ik_d9toJdoInrNmo6GktaswAlwplWMIZA/preview"
                className="h-full w-full rounded-lg border"
                title="Ocean Pollution Visualization"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
