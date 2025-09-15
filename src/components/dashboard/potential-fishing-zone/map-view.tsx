"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function MapView() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Potential Fishing Zone - Map</CardTitle>
        <CardDescription>Interactive map showing real-time fishing zone advisories.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-[600px] w-full">
          <iframe
            src="https://incois.gov.in/geoportal/MFASPFZ/index.html"
            className="w-full h-full rounded-lg border"
            title="Potential Fishing Zone Map"
          />
        </div>
      </CardContent>
    </Card>
  );
}
