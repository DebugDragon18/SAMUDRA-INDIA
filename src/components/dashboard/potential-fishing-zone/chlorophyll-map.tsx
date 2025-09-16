"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const WMSTileLayer = dynamic(() => import('react-leaflet').then(mod => mod.WMSTileLayer), { ssr: false });


export function ChlorophyllMap() {
    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Chlorophyll-a Concentration Map</CardTitle>
                <CardDescription>Live map showing chlorophyll-a concentration from INCOIS ERDDAP.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[600px] w-full">
                <MapContainer center={[15, 80]} zoom={5} scrollWheelZoom={true} className="h-full w-full rounded-lg border">
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <WMSTileLayer
                        url="/erddap/wms/apdrc_chlora_1d/request"
                        layers="apdrc_chlora_1d:chlor_a"
                        format="image/png"
                        transparent={true}
                        opacity={0.7}
                        attribution="INCOIS ERDDAP"
                    />
                </MapContainer>
                </div>
            </CardContent>
        </Card>
    )
}
