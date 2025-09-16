"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

export function MapView() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Potential Fishing Zone - Map</CardTitle>
        <CardDescription>Interactive map showing real-time fishing zone advisories. For a more detailed view, visit the <Link href="https://incois.gov.in/geoportal/MFASPFZ/index.html" target="_blank" rel="noopener noreferrer" className="underline">INCOIS geoportal</Link>.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-[600px] w-full">
            <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={false} className="h-full w-full rounded-lg border">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <WMSTileLayer
                url="/incois/geoportal/wms"
                layers="PFZ:PFZ_Advisory"
                format="image/png"
                transparent={true}
                attribution="INCOIS"
                />
            </MapContainer>
        </div>
      </CardContent>
    </Card>
  );
}
