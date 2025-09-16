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
                <CardTitle>Live Wind Flow Map</CardTitle>
                <CardDescription>Explore a live wind flow map from AccuWeather.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative h-[600px] w-full">
                    <iframe
                        src="https://www.accuweather.com/en/in/national/wind-flow"
                        className="h-full w-full rounded-lg border"
                        title="Live Wind Flow Map"
                    />
                </div>
            </CardContent>
            </Card>
        </div>
    </section>
  );
}
