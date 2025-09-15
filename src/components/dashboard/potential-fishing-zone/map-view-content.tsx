"use client"
import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

export function MapViewContent() {
  return (
    <div className="relative h-[600px] w-full">
      <Link href="https://incois.gov.in/geoportal/MFASPFZ/index.html" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
          <span className="sr-only">View full map on INCOIS geoportal</span>
      </Link>
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
  );
}
