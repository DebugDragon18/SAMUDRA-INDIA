"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function TideChart() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto">
            <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Live Satellite Map</CardTitle>
                <CardDescription>Explore a live satellite view of the earth.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative h-[600px] w-full">
                    <iframe
                        src="https://zoom.earth/maps/satellite/#view=12.56,49.94,5z"
                        className="h-full w-full rounded-lg border"
                        title="Live Satellite Map"
                    />
                </div>
            </CardContent>
            </Card>
        </div>
    </section>
  );
}
